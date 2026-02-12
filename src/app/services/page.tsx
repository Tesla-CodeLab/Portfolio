import Link from "next/link";
import { GlowCard } from "@/components/GlowCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Services",
};

const services = [
  {
    title: "⚡ Social Growth Engine",
    desc: "Instagram growth strategy, content systems, reels scripting, and conversion-based content architecture.",
    bullets: [
      "Positioning + content pillars",
      "Reels scripts + hooks + retention structure",
      "Carousel systems built for conversion",
      "Monthly content calendar + iteration loop",
    ],
  },
  {
    title: "🎯 Performance Ads Lab",
    desc: "Meta Ads frameworks for leads and sales—creative testing, funnel alignment, and ROAS optimization.",
    bullets: [
      "Campaign structure (TOF/MOF/BOF)",
      "Creative testing protocol",
      "Lead + sales funnel alignment",
      "CPL, CPA, ROAS optimization",
    ],
  },
  {
    title: "🧠 Funnel Architecture",
    desc: "Offers, landing pages, and conversion pathways designed like product experiences.",
    bullets: [
      "Offer engineering + messaging",
      "Landing page structure + UX",
      "Email/DM sequence logic",
      "Conversion rate optimization",
    ],
  },
  {
    title: "☁ Tech & Cloud Development",
    desc: "Next.js / React builds, analytics instrumentation, and cloud deployment for speed and reliability.",
    bullets: [
      "Next.js/React landing pages",
      "Event tracking + pixel/CAPI basics",
      "Performance + SEO fundamentals",
      "Cloud deployment workflows",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-14 md:py-20">
      <SectionHeading
        eyebrow="SERVICES"
        title="Growth systems designed for scale."
        description="Pick a system - or integrate all four into a single performance stack."
        right={
          <Link
            href="/contact"
            className="cta-pulse inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(0,245,255,0.48)]"
          >
            Book Strategy Call
          </Link>
        }
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <GlowCard key={s.title}>
            <div className="font-heading text-xl text-white">{s.title}</div>
            <p className="mt-2 text-sm leading-7 text-white/60">{s.desc}</p>
            <div className="mt-5 space-y-2 text-sm text-white/60">
              {s.bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                  {b}
                </div>
              ))}
            </div>
          </GlowCard>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
        <div className="text-xs font-medium tracking-[0.22em] text-white/50">
          DELIVERY MODEL
        </div>
        <div className="mt-3 font-heading text-3xl text-white md:text-4xl">
          Strategy that ships.
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 md:text-base">
          Every engagement starts with a system map: goal → constraints → funnel
          → creative loop → instrumentation → iteration schedule.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/case-studies"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white/80 transition hover:bg-white/10"
          >
            See proof
          </Link>
          <Link
            href="/contact"
            className="cta-pulse inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-6 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_46px_rgba(0,245,255,0.48)]"
          >
            Start the loop
          </Link>
        </div>
      </div>
    </div>
  );
}
