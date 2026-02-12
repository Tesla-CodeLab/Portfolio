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
          eyebrow="GROWTH INSTRUMENTATION SYSTEM"
          title="Performance Is Engineered. Not Hoped For."
          description="Every campaign is tracked as a closed performance loop — signal, optimization, scale."
          right={
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              <span className="status-dot h-2 w-2 rounded-full bg-[#00F5FF]" />
              System Active
            </div>
          }
        />

        <div className="mt-10">
          <div className="relative">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block">
              <div className="mx-auto h-px w-[92%] bg-[linear-gradient(90deg,transparent,rgba(0,245,255,0.55),rgba(0,163,255,0.45),transparent)] opacity-[0.45]" />
              <div className="connector-current mx-auto mt-1 h-[2px] w-[92%] bg-[linear-gradient(90deg,transparent,rgba(0,245,255,0.65),transparent)] opacity-[0.10]" />
            </div>

            <Stagger className="grid gap-6 md:grid-cols-3">
              <Item>
                <GlowCard className="relative overflow-hidden">
                  <div className="absolute inset-0 -z-10 opacity-[0.09] [background-image:linear-gradient(rgba(0,245,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.10)_1px,transparent_1px)] [background-size:60px_60px] signal-grid" />
                  <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                    SIGNAL CAPTURE
                  </div>
                  <div className="mt-2 font-heading text-xl text-white">Signal Collection</div>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    We don’t just track metrics — we capture signals.
                  </p>

                  <div className="mt-5 grid gap-2 text-sm text-white/60">
                    <div className="flex items-center justify-between">
                      <span>Engagement velocity</span>
                      <span className="h-2 w-2 rounded-full bg-[#00F5FF]/65" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Audience heat maps</span>
                      <span className="h-2 w-2 rounded-full bg-[#00A3FF]/60" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Funnel entry rate</span>
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Creative performance delta</span>
                      <span className="h-2 w-2 rounded-full bg-[#00F5FF]/45" />
                    </div>
                  </div>
                </GlowCard>
              </Item>

              <Item>
                <GlowCard className="relative overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]">
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-cyan-400/20 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.14),transparent_60%)] loop-rotate" />
                    <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full border border-cyan-400/15 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.12),transparent_62%)] loop-rotate" />
                  </div>

                  <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                    OPTIMIZATION ENGINE
                  </div>
                  <div className="mt-2 font-heading text-xl text-white">
                    Optimization Engine
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Data isn’t stored. It’s used.
                  </p>

                  <div className="mt-5 grid gap-2 text-sm text-white/60">
                    <div className="flex items-center justify-between">
                      <span>Creative testing cycles</span>
                      <span className="h-2 w-2 rounded-full bg-[#00F5FF]/60" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Funnel refinement</span>
                      <span className="h-2 w-2 rounded-full bg-[#00A3FF]/55" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Budget reallocation</span>
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>CAC reduction tracking</span>
                      <span className="h-2 w-2 rounded-full bg-[#00F5FF]/45" />
                    </div>
                  </div>
                </GlowCard>
              </Item>

              <Item>
                <GlowCard className="relative overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_40%_18%,rgba(0,245,255,0.12),transparent_55%),radial-gradient(700px_circle_at_72%_60%,rgba(0,163,255,0.10),transparent_56%)]" />

                  <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                    PERFORMANCE OUTPUT
                  </div>
                  <div className="mt-2 font-heading text-xl text-white">Performance Output</div>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Numbers that are earned by a system.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="font-heading text-2xl text-white">
                        <MetricCounter value={120} prefix="+" suffix="%" />
                      </div>
                      <div className="mt-1 text-xs text-white/55">Engagement Lift</div>
                      <div className="mt-2 h-px w-10 bg-[#00F5FF]/45" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="font-heading text-2xl text-white">
                        <MetricCounter value={800} suffix="+" />
                      </div>
                      <div className="mt-1 text-xs text-white/55">Qualified Leads</div>
                      <div className="mt-2 h-px w-10 bg-[#00A3FF]/45" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="font-heading text-2xl text-white">
                        <MetricCounter value={3.2} suffix="x" decimals={1} />
                      </div>
                      <div className="mt-1 text-xs text-white/55">ROAS Efficiency</div>
                      <div className="mt-2 h-px w-10 bg-[#00F5FF]/45" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="font-heading text-2xl text-white">
                        <MetricCounter value={28} suffix="%" />
                      </div>
                      <div className="mt-1 text-xs text-white/55">Funnel Conversion</div>
                      <div className="mt-2 h-px w-10 bg-[#00A3FF]/45" />
                    </div>
                  </div>
                </GlowCard>
              </Item>
            </Stagger>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <GlowCard className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(0,245,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.10)_1px,transparent_1px)] [background-size:60px_60px]" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                    CLOSED-LOOP GROWTH SYSTEM
                  </div>
                  <div className="mt-2 font-heading text-xl text-white">
                    Content → Engagement → Leads → Revenue → Reinvestment
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="relative h-56 w-56">
                  <div className="absolute inset-0 rounded-full border border-cyan-400/25 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.10),transparent_60%)]" />
                  <div className="absolute inset-0 rounded-full border border-[#00A3FF]/20 loop-rotate" />
                  <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F5FF] shadow-[0_0_16px_rgba(0,245,255,0.55)]" />

                  <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Content
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Engagement
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Leads
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    Revenue
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(0,245,255,0.14),transparent_58%),radial-gradient(900px_circle_at_80%_72%,rgba(0,163,255,0.10),transparent_58%)]" />
              <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                CONTROL ROOM NOTE
              </div>
              <div className="mt-2 font-heading text-xl text-white">
                Growth is a pipeline. We instrument the constraints.
              </div>
              <p className="mt-3 text-sm leading-7 text-white/60">
                We measure what drives revenue: CAC, LTV, ROAS, Pipeline Velocity.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/70">Signal → Optimize → Scale</div>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <span className="status-dot h-2 w-2 rounded-full bg-[#00F5FF]" />
                    Live
                  </div>
                </div>
                <div className="mt-4 h-px w-full bg-white/10" />
                <div className="mt-4 grid gap-3 text-sm text-white/60">
                  <div className="flex items-center justify-between">
                    <span>CAC delta</span>
                    <span className="text-white">
                      <MetricCounter value={18} prefix="-" suffix="%" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pipeline velocity</span>
                    <span className="text-white">
                      <MetricCounter value={2.1} suffix="x" decimals={1} />
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Creative cycle count</span>
                    <span className="text-white">
                      <MetricCounter value={12} suffix="/mo" />
                    </span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
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
