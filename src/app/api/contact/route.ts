import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  name: string;
  email: string;
  phone: string;
  objective: string;
  budget?: string;
  timeline?: string;
  message: string;
};

const rateStore = new Map<string, { count: number; windowStart: number }>();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 6;

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  const realIp = req.headers.get("x-real-ip");
  return realIp || "unknown";
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalize(input: unknown, maxLen = 4000) {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, maxLen);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

    const resend = new Resend(process.env.RESEND_API_KEY);

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

    const raw = (await req.json()) as Partial<Payload>;

    const payload: Payload = {
      name: normalize(raw.name, 120),
      email: normalize(raw.email, 200),
      phone: normalize(raw.phone, 60),
      objective: normalize(raw.objective, 120),
      budget: normalize(raw.budget, 120),
      timeline: normalize(raw.timeline, 120),
      message: normalize(raw.message, 6000),
    };

    if (!payload.name) {
      return NextResponse.json({ ok: false, error: "Name is required." }, { status: 400 });
    }

    if (!payload.email || !isValidEmail(payload.email)) {
      return NextResponse.json(
        { ok: false, error: "A valid email is required." },
        { status: 400 }
      );
    }

    if (!payload.phone) {
      return NextResponse.json(
        { ok: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!payload.objective) {
      return NextResponse.json(
        { ok: false, error: "Objective is required." },
        { status: 400 }
      );
    }

    if (!payload.message) {
      return NextResponse.json(
        { ok: false, error: "Context is required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;line-height:1.55;color:#0b1220">
        <h2 style="margin:0 0 12px 0;font-size:16px;">New Strategy Request — Tesla Codelab</h2>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tr><td style="padding:6px 0;width:140px;"><strong>Name:</strong></td><td style="padding:6px 0;">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Email:</strong></td><td style="padding:6px 0;">${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Phone:</strong></td><td style="padding:6px 0;">${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Objective:</strong></td><td style="padding:6px 0;">${escapeHtml(payload.objective)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Budget:</strong></td><td style="padding:6px 0;">${escapeHtml(payload.budget || "-")}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Timeline:</strong></td><td style="padding:6px 0;">${escapeHtml(payload.timeline || "-")}</td></tr>
        </table>
        <div style="margin-top:14px;"><strong>Context:</strong></div>
        <div style="margin-top:6px;padding:12px;border:1px solid rgba(0,0,0,0.08);border-radius:12px;background:#f8fafc;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>
        <div style="margin-top:14px;color:#334155;font-size:12px;">Submitted At: ${escapeHtml(timestamp)}</div>
      </div>
    `;

    const from =
      process.env.CONTACT_FROM_EMAIL || "Tesla Codelab <onboarding@resend.dev>";

    const to =
      process.env.CONTACT_TO_EMAIL || "Support.teslacodelab@gmail.com";

    await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email,
      subject: "New Strategy Request — Tesla Codelab",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
