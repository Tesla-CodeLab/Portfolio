import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leadSchema";
import { getPrisma } from "@/lib/prisma";
import { sendAutoReply, sendSupportNotification } from "@/lib/email";

const rateStore = new Map<string, { count: number; windowStart: number }>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 6;

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  const realIp = req.headers.get("x-real-ip");
  return realIp || "unknown";
}

function rateLimit(ip: string) {
  const now = Date.now();
  const row = rateStore.get(ip);

  if (!row || now - row.windowStart > RATE_WINDOW_MS) {
    rateStore.set(ip, { count: 1, windowStart: now });
    return { ok: true };
  }

  if (row.count >= RATE_MAX) {
    return { ok: false, retryAfterMs: RATE_WINDOW_MS - (now - row.windowStart) };
  }

  row.count += 1;
  return { ok: true };
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { ok: false, error: "Database not configured." },
        { status: 500 }
      );
    }

    const ip = getClientIp(req);
    const limited = rateLimit(ip);
    if (!limited.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Try again shortly." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((limited.retryAfterMs ?? 0) / 1000)),
          },
        }
      );
    }

    const raw = await req.json().catch(() => null);
    const parsed = leadSchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid submission." },
        { status: 400 }
      );
    }

    const payload = {
      ...parsed.data,
      budget: parsed.data.budget || undefined,
      timeline: parsed.data.timeline || undefined,
    };

    const prisma = getPrisma();
    const lead = await prisma.lead.create({
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        objective: payload.objective,
        budget: payload.budget,
        timeline: payload.timeline,
        message: payload.message,
      },
    });

    const timestampIso = new Date().toISOString();

    await sendSupportNotification(payload, timestampIso);
    await sendAutoReply(payload);

    return NextResponse.json({ ok: true, leadId: lead.id });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
