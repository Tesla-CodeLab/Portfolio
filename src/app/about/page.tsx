import Link from "next/link";
import { GlowCard } from "@/components/GlowCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="py-14 md:py-20">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="ABOUT TESLA CODELAB"
          title="A Growth Engineering Lab built for performance."
          description={
            "Tesla Codelab is not a typical marketing agency. We operate like a lab—where hypotheses are tested, systems are engineered, and results are measured with precision."
          }
          right={
            <Link
              href="/contact"
              className="cta-pulse inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(0,245,255,0.48)]"
            >
              Book Strategy Call
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          <GlowCard>
            <div className="font-heading text-lg text-white">
              Innovation mindset
            </div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              Inspired by Nikola Tesla’s obsession with invention: we seek
              leverage. Not noise. Not trends.
            </p>
          </GlowCard>
          <GlowCard>
            <div className="font-heading text-lg text-white">Engineering rigor</div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              Funnels, creatives, and content are built as systems—designed,
              deployed, instrumented, then optimized.
            </p>
          </GlowCard>
          <GlowCard>
            <div className="font-heading text-lg text-white">Data discipline</div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              We measure what moves outcomes: CAC, ROAS, conversion rate,
              retention, and pipeline velocity.
            </p>
          </GlowCard>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <GlowCard>
            <div className="text-xs font-medium tracking-[0.22em] text-white/45">
              PHILOSOPHY
            </div>
            <div className="mt-3 font-heading text-2xl text-white">
              Growth is a closed loop.
            </div>
            <p className="mt-3 text-sm leading-7 text-white/60">
              We build a loop that compounds: signal collection → insight → asset
              creation → distribution → conversion → analytics feedback.
            </p>
            <p className="mt-3 text-sm leading-7 text-white/60">
              When the loop is engineered, growth stops being a guessing game.
            </p>
          </GlowCard>

          <GlowCard>
            <div className="text-xs font-medium tracking-[0.22em] text-white/45">
              DIFFERENCE
            </div>
            <div className="mt-3 font-heading text-2xl text-white">
              Why we’re not “just an agency”.
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/60">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00F5FF] shadow-[0_0_12px_rgba(0,245,255,0.6)]" />
                Systems-first execution (strategy that ships).
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00A3FF] shadow-[0_0_12px_rgba(0,163,255,0.55)]" />
                Conversion-based creative direction.
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                Analytics instrumentation that informs decisions.
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                Tech implementation (Next.js/React + cloud) when needed.
              </div>
            </div>
          </GlowCard>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
          <div className="text-xs font-medium tracking-[0.22em] text-white/50">
            PRINCIPLE
          </div>
          <div className="mt-3 font-heading text-3xl text-white md:text-4xl">
            Execute like a lab. Report like a dashboard.
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 md:text-base">
            Every deliverable maps to a metric. Every metric maps to a business
            outcome. And every outcome is stress-tested through iteration.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white/80 transition hover:bg-white/10"
            >
              Explore services
            </Link>
            <Link
              href="/case-studies"
              className="cta-pulse inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-6 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_46px_rgba(0,245,255,0.48)]"
            >
              View case studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
