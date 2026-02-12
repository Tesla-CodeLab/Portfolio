import { Resend } from "resend";
import type { LeadInput } from "@/lib/leadSchema";
import { escapeHtml } from "@/lib/sanitize";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not set");
  return new Resend(key);
}

function getFrom() {
  return process.env.CONTACT_FROM_EMAIL || "Tesla Codelab <onboarding@resend.dev>";
}

function getSupportTo() {
  return process.env.CONTACT_TO_EMAIL || "Support.teslacodelab@gmail.com";
}

export async function sendSupportNotification(payload: LeadInput, timestampIso: string) {
  const resend = getResend();

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
      <div style="margin-top:14px;color:#334155;font-size:12px;">Submitted At: ${escapeHtml(timestampIso)}</div>
    </div>
  `;

  await resend.emails.send({
    from: getFrom(),
    to: [getSupportTo()],
    replyTo: payload.email,
    subject: "New Strategy Request — Tesla Codelab",
    html,
  });
}

export async function sendAutoReply(payload: LeadInput) {
  const resend = getResend();

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;line-height:1.55;color:#0b1220">
      <p style="margin:0 0 10px 0;">Hi ${escapeHtml(payload.name)},</p>
      <p style="margin:0 0 10px 0;">We received your strategy request. A Tesla Codelab operator will review it and contact you within 24 hours.</p>
      <p style="margin:0 0 10px 0;">If anything changes, reply to this email with the update.</p>
      <p style="margin:14px 0 0 0;color:#334155;font-size:12px;">— Tesla Codelab</p>
    </div>
  `;

  await resend.emails.send({
    from: getFrom(),
    to: [payload.email],
    subject: "We Received Your Strategy Request — Tesla Codelab",
    html,
  });
}
