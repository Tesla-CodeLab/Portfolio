"use client";

import type { FormEvent } from "react";
import { useId, useRef, useState } from "react";
import { ElectricSelect } from "@/components/ElectricSelect";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const [resetKey, setResetKey] = useState(0);
  const spinnerId = useId();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    const el = e.currentTarget;
    const fd = new FormData(el);

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      objective: String(fd.get("objective") ?? "").trim(),
      budget: String(fd.get("budget") ?? "").trim(),
      timeline: String(fd.get("timeline") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    if (!payload.name) {
      setStatus({ kind: "error", message: "Name is required." });
      return;
    }

    if (!payload.email) {
      setStatus({ kind: "error", message: "Email is required." });
      return;
    }

    if (!payload.phone) {
      setStatus({ kind: "error", message: "Phone number is required." });
      return;
    }

    if (!payload.objective) {
      setStatus({ kind: "error", message: "Objective is required." });
      return;
    }

    if (!payload.message) {
      setStatus({ kind: "error", message: "Context is required." });
      return;
    }

    setSending(true);
    setStatus({ kind: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null;

      if (!res.ok || !data || ("ok" in data && data.ok === false)) {
        const msg =
          (data && "error" in data && data.error) ||
          "Could not send your request. Please try again.";
        setStatus({ kind: "error", message: msg });
        return;
      }

      setStatus({
        kind: "success",
        message: "Strategy request received. We'll contact you within 24 hours.",
      });

      formRef.current?.reset();
      setResetKey((k) => k + 1);
    } catch {
      setStatus({
        kind: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form ref={formRef} className="mt-6 space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs text-white/60" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition focus:border-[#00F5FF]/60"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-xs text-white/60" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition focus:border-[#00F5FF]/60"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs text-white/60" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="mt-2 h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition focus:border-[#00F5FF]/60"
            placeholder="+91"
          />
        </div>

        <ElectricSelect
          key={`objective-${resetKey}`}
          name="objective"
          label="Objective"
          placeholder="Select"
          required
          options={[
            { value: "instagram-growth", label: "Instagram Growth" },
            { value: "lead-generation", label: "Lead Generation" },
            { value: "sales-funnel", label: "Sales Funnel" },
            { value: "content-system", label: "Conversion Content System" },
            { value: "analytics", label: "Analytics / Optimization" },
            { value: "web-dev", label: "Web Development" },
          ]}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <ElectricSelect
          key={`budget-${resetKey}`}
          name="budget"
          label="Budget Range"
          placeholder="Select"
          options={[
            { value: "under-25k", label: "Under ₹25k" },
            { value: "25k-50k", label: "₹25k – ₹50k" },
            { value: "50k-1l", label: "₹50k – ₹1L" },
            { value: "1l-plus", label: "₹1L+" },
          ]}
        />

        <ElectricSelect
          key={`timeline-${resetKey}`}
          name="timeline"
          label="Timeline"
          placeholder="Select"
          options={[
            { value: "asap", label: "ASAP" },
            { value: "2-4-weeks", label: "2–4 weeks" },
            { value: "1-2-months", label: "1–2 months" },
            { value: "planning", label: "Planning / Research" },
          ]}
        />
      </div>

      <div>
        <label className="text-xs text-white/60" htmlFor="message">
          Context
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[#00F5FF]/60"
          placeholder="Tell us about your offer, audience, and current bottleneck."
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        aria-describedby={spinnerId}
        className="cta-pulse inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-6 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(0,245,255,0.48)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? (
          <span
            className="inline-flex items-center gap-3"
            id={spinnerId}
          >
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
            Sending…
          </span>
        ) : (
          "Send Strategy Request"
        )}
      </button>

      {status.kind === "success" ? (
        <div className="rounded-xl border border-cyan-400/25 bg-[#0E1628]/60 px-4 py-3 text-sm text-white/80 shadow-[0_0_25px_rgba(0,245,255,0.12)]">
          <span className="text-cyan-300 font-medium">Success:</span> {status.message}
        </div>
      ) : null}

      {status.kind === "error" ? (
        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75">
          <span className="text-[#00A3FF] font-medium">Error:</span> {status.message}
        </div>
      ) : null}

      <div className="text-xs text-white/40">
        Prefer email? Write to{" "}
        <span className="text-white/70">Contact.teslacodelab@gmail.com</span>.
      </div>
      <div className="text-xs text-white/40">
        Prefer direct call? <span className="text-white/70">+91 XXXXX XXXXX</span>
      </div>
    </form>
  );
}
