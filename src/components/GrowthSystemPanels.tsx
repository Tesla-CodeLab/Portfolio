"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { MetricCounter } from "@/components/MetricCounter";

type FlywheelKey = "content" | "engagement" | "leads" | "revenue";

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

const flywheelData: Record<
  FlywheelKey,
  {
    title: string;
    description: string;
    metricLabel: string;
    metric: number;
    metricSuffix?: string;
    metricPrefix?: string;
    angleDeg: number;
  }
> = {
  content: {
    title: "Content",
    description: "Creative systems engineered to drive qualified attention.",
    metricLabel: "Content velocity",
    metric: 12,
    metricSuffix: "/mo",
    angleDeg: 0,
  },
  engagement: {
    title: "Engagement",
    description: "Signal strength and audience heat move in real time.",
    metricLabel: "Engagement lift",
    metric: 120,
    metricSuffix: "%",
    metricPrefix: "+",
    angleDeg: 90,
  },
  leads: {
    title: "Leads",
    description: "Funnel entry and qualification rise with every iteration.",
    metricLabel: "Qualified leads",
    metric: 800,
    metricSuffix: "+",
    angleDeg: 180,
  },
  revenue: {
    title: "Revenue",
    description: "Performance compounds via reinvestment and optimization loops.",
    metricLabel: "ROAS",
    metric: 3.2,
    metricSuffix: "x",
    angleDeg: 270,
  },
};

function useInViewOnce<T extends Element>() {
  const [node, setNode] = useState<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!node) return;
    if (inView) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [inView, node]);

  return { setNode, inView };
}

export function GrowthSystemPanels() {
  const [selected, setSelected] = useState<FlywheelKey | null>(null);
  const [hovering, setHovering] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<FlywheelKey | null>(null);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  const { setNode, inView } = useInViewOnce<HTMLDivElement>();

  const rotationPlayState =
    reducedMotion || hovering || selected ? ("paused" as const) : ("running" as const);

  const activeKey = selected ?? hoveredKey;
  const active = activeKey ? flywheelData[activeKey] : null;
  const showHoverDescription = Boolean(hoveredKey) && !selected;

  return (
    <div ref={setNode} className="mt-10 grid auto-rows-fr gap-8 md:grid-cols-2">
      <div className="relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[rgba(14,22,40,0.55)] p-8 shadow-[0_0_0_1px_rgba(0,245,255,0.05)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(0,245,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.10)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="mb-6">
          <div className="text-xs font-medium tracking-[0.22em] text-white/45">
            GROWTH FLYWHEEL SYSTEM
          </div>
          <div className="mt-2 font-heading text-xl text-white">Revenue Engine</div>
          <div className="mt-4 h-px w-12 bg-[#00F5FF]/55" />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 items-center justify-center px-6">
            <div
              className="relative aspect-square w-[90%] max-w-[560px]"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => {
                setHovering(false);
                setHoveredKey(null);
              }}
            >
              <svg
                className="pointer-events-none absolute inset-[5%] flywheel-spin"
                viewBox="0 0 100 100"
                aria-hidden="true"
                style={{ animationPlayState: rotationPlayState }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(0,245,255,0.30)"
                  strokeWidth="1.6"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="14"
                  fill="none"
                  stroke="rgba(0,245,255,0.30)"
                  strokeWidth="1.2"
                />

                <line
                  x1="59.9"
                  y1="40.1"
                  x2="81.1"
                  y2="18.9"
                  stroke="rgba(0,245,255,0.45)"
                  strokeWidth="1"
                  opacity="0.7"
                />
                <line
                  x1="40.1"
                  y1="40.1"
                  x2="18.9"
                  y2="18.9"
                  stroke="rgba(0,245,255,0.45)"
                  strokeWidth="1"
                  opacity="0.7"
                />
                <line
                  x1="59.9"
                  y1="59.9"
                  x2="81.1"
                  y2="81.1"
                  stroke="rgba(0,245,255,0.45)"
                  strokeWidth="1"
                  opacity="0.7"
                />
                <line
                  x1="40.1"
                  y1="59.9"
                  x2="18.9"
                  y2="81.1"
                  stroke="rgba(0,245,255,0.45)"
                  strokeWidth="1"
                  opacity="0.7"
                />
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flywheel-center relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-center text-[11px] font-medium text-white/85">
                  Revenue
                  <br />
                  Engine
                  <span className="flywheel-core-pulse pointer-events-none absolute inset-0 rounded-full" />
                </div>
              </div>

              <div
                className="flywheel-spin absolute inset-[5%]"
                style={{ animationPlayState: rotationPlayState }}
              >
                {(Object.keys(flywheelData) as FlywheelKey[]).map((key) => {
                  const node = flywheelData[key];
                  const isActive = selected === key;
                  const isHovered = hoveredKey === key;

                  const orbitRadiusPct = 36;
                  const theta = degToRad(node.angleDeg - 90);
                  const leftPct = 50 + orbitRadiusPct * Math.cos(theta);
                  const topPct = 50 + orbitRadiusPct * Math.sin(theta);

                  return (
                    <div
                      key={key}
                      style={{
                        position: "absolute",
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setSelected((prev) => (prev === key ? null : key))
                        }
                        onMouseEnter={() => setHoveredKey(key)}
                        onMouseLeave={() => setHoveredKey(null)}
                        className={
                          "flywheel-node flywheel-spin-inverse group relative max-w-[128px] rounded-full border bg-white/5 px-3 py-2 text-center text-xs text-white/78 transition hover:-translate-y-0.5 focus:outline-none " +
                          (isActive
                            ? "border-[#00F5FF]/45 shadow-[0_0_30px_rgba(0,245,255,0.18)]"
                            : isHovered
                              ? "border-[#00F5FF]/30 shadow-[0_0_22px_rgba(0,245,255,0.12)]"
                              : "border-white/10")
                        }
                        style={{ animationPlayState: rotationPlayState }}
                      >
                        <span className="block truncate whitespace-nowrap">{node.title}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="text-center">
              <div className="text-sm text-white/80">Select a pillar</div>
              <div className="mt-1 text-sm leading-6 text-white/60 whitespace-nowrap">
                Click a pillar to lock the system and inspect its role in the revenue engine.
              </div>

              <div
                className={
                  "mt-2 text-sm leading-6 text-white/70 transition-all duration-200 " +
                  (active && (selected || showHoverDescription)
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0")
                }
              >
                {active && (selected || showHoverDescription) ? active.description : ""}
              </div>
            </div>

            <div className="mt-4 h-px w-full bg-white/10" />

            <div className="mt-4 flex items-end justify-between gap-6">
              <div>
                <div className="text-xs text-white/45">
                  {active ? active.metricLabel : "Metric"}
                </div>
                <div className="mt-2 font-heading text-2xl text-white">
                  {active ? (
                    <MetricCounter
                      value={active.metric}
                      prefix={active.metricPrefix}
                      suffix={active.metricSuffix}
                      decimals={active.metricSuffix === "x" ? 1 : 0}
                    />
                  ) : (
                    <span className="text-white/55">—</span>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 transition hover:bg-white/10"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="command-center relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 p-8 backdrop-blur-xl">
        <div className="command-top-line pointer-events-none absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,245,255,0.65),transparent)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(0,245,255,0.12),transparent_58%),radial-gradient(900px_circle_at_80%_72%,rgba(0,163,255,0.09),transparent_58%)]" />

        <div className="mb-6 flex items-start justify-between gap-6">
          <div>
            <div className="text-xs font-medium tracking-[0.22em] text-white/45">
              COMMAND CENTER
            </div>
            <div className="mt-2 font-heading text-xl text-white">
              Live Growth Diagnostics
            </div>
            <div className="mt-4 h-px w-12 bg-[#00F5FF]/55" />
            <div className="mt-4 text-sm leading-7 text-white/60">
              We monitor what drives revenue: CAC, LTV, ROAS, Pipeline Velocity.
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="live-pulse-dot h-2 w-2 rounded-full bg-[#00F5FF]" />
            Live System
          </div>
        </div>

        <div className="flex-1">
          <div className="text-sm text-white/70">Signal → Optimize → Scale</div>
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">CAC Delta</span>
                <span className="text-white">-18%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/[0.05]">
                <div
                  className={
                    "metric-bar-fill h-2 rounded-full bg-[linear-gradient(90deg,rgba(0,245,255,0.85),rgba(0,163,255,0.75))]" +
                    (inView ? " metric-bar-fill--run" : "")
                  }
                  style={{ "--bar": "68%" } as CSSProperties}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Pipeline Velocity</span>
                <span className="text-white">2.1x</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/[0.05]">
                <div
                  className={
                    "metric-bar-fill h-2 rounded-full bg-[linear-gradient(90deg,rgba(0,245,255,0.85),rgba(0,163,255,0.75))]" +
                    (inView ? " metric-bar-fill--run" : "")
                  }
                  style={{ "--bar": "84%" } as CSSProperties}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Creative Cycle Count</span>
                <span className="text-white">12/mo</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/[0.05]">
                <div
                  className={
                    "metric-bar-fill h-2 rounded-full bg-[linear-gradient(90deg,rgba(0,245,255,0.85),rgba(0,163,255,0.75))]" +
                    (inView ? " metric-bar-fill--run" : "")
                  }
                  style={{ "--bar": "62%" } as CSSProperties}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="feed-scroll whitespace-nowrap text-xs text-white/55">
            <span className="mr-8">Creative test launched</span>
            <span className="mr-8">Budget reallocation applied</span>
            <span className="mr-8">Funnel variant B activated</span>
            <span className="mr-8">Retargeting loop updated</span>
            <span className="mr-8">Creative test launched</span>
            <span className="mr-8">Budget reallocation applied</span>
            <span className="mr-8">Funnel variant B activated</span>
            <span className="mr-8">Retargeting loop updated</span>
          </div>
        </div>
      </div>
    </div>
  );
}
