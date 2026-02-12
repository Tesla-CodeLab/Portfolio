import Link from "next/link";
import { GlowCard } from "@/components/GlowCard";
import { MetricCounter } from "@/components/MetricCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn, Item, Stagger } from "@/components/Motion";

export default function Home() {
  return (
    <div className="pb-20">
      <section className="relative overflow-hidden pt-14 md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#00F5FF]/14 blur-3xl" />
          <div className="absolute -top-24 right-[-120px] h-[520px] w-[520px] rounded-full bg-[#00A3FF]/10 blur-3xl" />
        </div>

        <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#00F5FF] shadow-[0_0_14px_rgba(0,245,255,0.65)]" />
              Growth Engineering Lab
            </div>
            <h1 className="mt-5 font-heading text-4xl tracking-tight text-white md:text-5xl">
              We Don’t Run Ads. We Engineer Growth.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              Tesla Codelab builds scalable Instagram growth systems, Meta Ads
              engines, and conversion-driven marketing funnels.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/case-studies"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-medium text-white/85 transition hover:-translate-y-0.5 hover:border-[#00F5FF]/35 hover:bg-white/10"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="cta-pulse inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-6 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_46px_rgba(0,245,255,0.48)]"
              >
                Book Strategy Call
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs text-white/55">Systems</div>
                <div className="mt-1 text-lg font-semibold text-white">
                  <MetricCounter value={14} suffix="+" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs text-white/55">Funnels</div>
                <div className="mt-1 text-lg font-semibold text-white">
                  <MetricCounter value={28} suffix="+" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs text-white/55">ROAS Focus</div>
                <div className="mt-1 text-lg font-semibold text-white">
                  <MetricCounter value={3.2} suffix="x" decimals={1} />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(900px_circle_at_24%_20%,rgba(0,245,255,0.18),transparent_56%),radial-gradient(700px_circle_at_85%_30%,rgba(0,163,255,0.12),transparent_58%)]" />
              <GlowCard className="p-8">
                <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                  SIGNAL → INSIGHT → EXECUTION
                </div>
                <div className="mt-3 font-heading text-2xl text-white">
                  Growth is an engineered loop.
                </div>
                <div className="mt-3 space-y-3 text-sm leading-7 text-white/60">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00F5FF] shadow-[0_0_12px_rgba(0,245,255,0.6)]" />
                    Instagram content systems calibrated for conversion.
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00A3FF] shadow-[0_0_12px_rgba(0,163,255,0.55)]" />
                    Meta funnels built like product pipelines.
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                    Analytics that drives decisions, not vanity metrics.
                  </div>
                </div>
              </GlowCard>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <SectionHeading
          eyebrow="ABOUT"
          title="Built on Innovation. Powered by Data."
          description={
            "Inspired by Nikola Tesla’s innovation mindset—executed with modern growth analytics and engineering discipline."
          }
          right={
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              Read our philosophy
            </Link>
          }
        />

        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          <Item>
            <GlowCard>
              <div className="font-heading text-lg text-white">Precision</div>
              <p className="mt-2 text-sm leading-7 text-white/60">
                We define a growth hypothesis, build a controlled system, and
                iterate with measured feedback loops.
              </p>
            </GlowCard>
          </Item>
          <Item>
            <GlowCard>
              <div className="font-heading text-lg text-white">Execution</div>
              <p className="mt-2 text-sm leading-7 text-white/60">
                Content + ads + funnels move in lockstep. Nothing is “random
                posting.” Every asset has a role.
              </p>
            </GlowCard>
          </Item>
          <Item>
            <GlowCard>
              <div className="font-heading text-lg text-white">Optimization</div>
              <p className="mt-2 text-sm leading-7 text-white/60">
                We optimize for conversion and cash flow efficiency—tracking the
                metrics that actually change outcomes.
              </p>
            </GlowCard>
          </Item>
        </Stagger>
      </section>

      <section className="py-16 md:py-24">
        <SectionHeading
          eyebrow="GROWTH SYSTEMS"
          title="Four systems. One engineered outcome."
          description="Modular capabilities that connect into a single performance stack."
          right={
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              View all services
            </Link>
          }
        />

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          <Item>
            <GlowCard>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-heading text-xl text-white">
                    ⚡ Social Growth Engine
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Instagram strategy, content pillars, reels scripting, and
                    conversion-based carousel systems.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                  Organic
                </div>
              </div>
            </GlowCard>
          </Item>

          <Item>
            <GlowCard>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-heading text-xl text-white">
                    🎯 Performance Ads Lab
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Meta lead + sales funnels, creative testing frameworks, and
                    ROAS optimization.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                  Paid
                </div>
              </div>
            </GlowCard>
          </Item>

          <Item>
            <GlowCard>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-heading text-xl text-white">
                    🧠 Funnel Architecture
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Offer positioning, landing pages, onboarding sequences, and
                    conversion pathways built like product flows.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                  Conversion
                </div>
              </div>
            </GlowCard>
          </Item>

          <Item>
            <GlowCard>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-heading text-xl text-white">
                    ☁ Tech & Cloud Development
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Next.js / React builds, analytics instrumentation, and cloud
                    deployment for speed and reliability.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                  Product
                </div>
              </div>
            </GlowCard>
          </Item>
        </Stagger>
      </section>

      <section className="py-16 md:py-24">
        <SectionHeading
          eyebrow="CASE STUDIES"
          title="Proof, not promises."
          description="A preview of engineered outcomes across content, funnels, and Meta performance."
          right={
            <Link
              href="/case-studies"
              className="cta-pulse inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(0,245,255,0.48)]"
            >
              Explore case studies
            </Link>
          }
        />

        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          <Item>
            <GlowCard>
              <div className="text-xs text-white/50">Fitness Trainer</div>
              <div className="mt-2 font-heading text-lg text-white">
                Lead engine for high-ticket coaching
              </div>
              <div className="mt-4 space-y-2 text-sm text-white/60">
                <div className="flex items-center justify-between">
                  <span>Engagement</span>
                  <span className="text-white">
                    <MetricCounter value={120} suffix="%" prefix="+" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Leads</span>
                  <span className="text-white">
                    <MetricCounter value={800} suffix="+" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ROAS</span>
                  <span className="text-white">
                    <MetricCounter value={3.2} suffix="x" decimals={1} />
                  </span>
                </div>
              </div>
            </GlowCard>
          </Item>

          <Item>
            <GlowCard>
              <div className="text-xs text-white/50">Real Estate</div>
              <div className="mt-2 font-heading text-lg text-white">
                Local demand capture funnel
              </div>
              <div className="mt-4 space-y-2 text-sm text-white/60">
                <div className="flex items-center justify-between">
                  <span>CPL drop</span>
                  <span className="text-white">
                    <MetricCounter value={38} suffix="%" prefix="-" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Qualified leads</span>
                  <span className="text-white">
                    <MetricCounter value={260} suffix="+" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Booking rate</span>
                  <span className="text-white">
                    <MetricCounter value={18} suffix="%" />
                  </span>
                </div>
              </div>
            </GlowCard>
          </Item>

          <Item>
            <GlowCard>
              <div className="text-xs text-white/50">Clothing Brand</div>
              <div className="mt-2 font-heading text-lg text-white">
                Creative testing → sales scaling
              </div>
              <div className="mt-4 space-y-2 text-sm text-white/60">
                <div className="flex items-center justify-between">
                  <span>CTR lift</span>
                  <span className="text-white">
                    <MetricCounter value={44} suffix="%" prefix="+" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ROAS</span>
                  <span className="text-white">
                    <MetricCounter value={4.1} suffix="x" decimals={1} />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>AOV</span>
                  <span className="text-white">
                    <MetricCounter value={19} suffix="%" prefix="+" />
                  </span>
                </div>
              </div>
            </GlowCard>
          </Item>
        </Stagger>
      </section>

      <section className="py-16 md:py-24">
        <SectionHeading
          eyebrow="ANALYTICS"
          title="Instrumentation that compounds performance."
          description="Mock dashboards to represent the way we track growth loops: engagement, leads, and ROAS efficiency."
        />

        <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
          <Item>
            <GlowCard>
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70">Engagement Growth</div>
                <div className="text-sm font-semibold text-white">
                  <MetricCounter value={120} suffix="%" prefix="+" />
                </div>
              </div>
              <div className="mt-5 h-24 rounded-xl border border-white/10 bg-[linear-gradient(90deg,rgba(0,245,255,0.16),rgba(0,163,255,0.10))]" />
              <div className="mt-3 text-xs text-white/50">
                30-day growth loop (mock)
              </div>
            </GlowCard>
          </Item>
          <Item>
            <GlowCard>
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70">Leads Generated</div>
                <div className="text-sm font-semibold text-white">
                  <MetricCounter value={800} suffix="+" />
                </div>
              </div>
              <div className="mt-5 h-24 rounded-xl border border-white/10 bg-[linear-gradient(90deg,rgba(0,163,255,0.14),rgba(0,245,255,0.10))]" />
              <div className="mt-3 text-xs text-white/50">
                Funnel capture rate (mock)
              </div>
            </GlowCard>
          </Item>
          <Item>
            <GlowCard>
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/70">Ad ROAS</div>
                <div className="text-sm font-semibold text-white">
                  <MetricCounter value={3.2} suffix="x" decimals={1} />
                </div>
              </div>
              <div className="mt-5 flex items-end gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="h-7 w-3 rounded bg-[#00F5FF]/35" />
                <div className="h-10 w-3 rounded bg-[#00F5FF]/45" />
                <div className="h-14 w-3 rounded bg-[#00F5FF]/60" />
                <div className="h-12 w-3 rounded bg-[#00A3FF]/55" />
                <div className="h-16 w-3 rounded bg-[#00F5FF]/70" />
                <div className="ml-auto text-xs text-white/50">Creative cycles</div>
              </div>
              <div className="mt-3 text-xs text-white/50">
                Efficiency index (mock)
              </div>
            </GlowCard>
          </Item>
        </Stagger>
      </section>

      <section className="py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_26%_20%,rgba(0,245,255,0.16),transparent_56%),radial-gradient(900px_circle_at_84%_60%,rgba(0,163,255,0.12),transparent_58%)]" />
          <div className="max-w-2xl">
            <div className="text-xs font-medium tracking-[0.22em] text-white/50">
              NEXT STEP
            </div>
            <div className="mt-3 font-heading text-3xl text-white md:text-4xl">
              Ready to Electrify Your Growth?
            </div>
            <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
              If you want predictable growth with engineered systems—book a
              strategy call. We’ll map the loop, the funnel, and the performance
              plan.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="cta-pulse inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-6 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_46px_rgba(0,245,255,0.48)]"
              >
                Schedule Strategy Call
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white/80 transition hover:bg-white/10"
              >
                See growth systems
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
