"use client";

import { ElectricSelect } from "@/components/ElectricSelect";

export function ContactForm() {
  return (
    <form className="mt-6 space-y-4" action="#" method="post">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs text-white/60" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
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
          name="objective"
          label="Objective"
          placeholder="Select"
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
          className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-[#00F5FF]/60"
          placeholder="Tell us about your offer, audience, and current bottleneck."
        />
      </div>

      <button
        type="submit"
        className="cta-pulse inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-6 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(0,245,255,0.48)]"
      >
        Send Strategy Request
      </button>

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
