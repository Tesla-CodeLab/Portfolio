import Link from "next/link";
import { GlowCard } from "@/components/GlowCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Case Studies",
};

type CaseStudy = {
  name: string;
  industry: string;
  problem: string;
  goal: string;
  strategy: string[];
  contentApproach: string[];
  funnelStructure: string[];
  metaAdsPlan: string[];
  results: string[];
  lessons: string[];
};

const caseStudies: CaseStudy[] = [
  {
    name: "Ayurvedic Supplement Brand",
    industry: "D2C Wellness",
    problem:
      "Inconsistent sales, low trust signals, and content that educated but didn’t convert.",
    goal: "Build a conversion-first content + ads system to scale predictable sales.",
    strategy: [
      "Reposition product around 1 core transformation",
      "Build trust assets (proof, ingredient clarity, outcomes)",
      "Create a structured creative testing matrix",
    ],
    contentApproach: [
      "Myth vs fact carousels",
      "Outcome-driven reels with retention hooks",
      "UGC-style testimonials + before/after narratives",
    ],
    funnelStructure: [
      "Reel → landing page",
      "Offer stack + risk reversal",
      "Email sequence for education + conversion",
    ],
    metaAdsPlan: [
      "TOF: problem-aware education",
      "MOF: proof + benefits",
      "BOF: offer + urgency",
    ],
    results: [
      "+3.4x ROAS (demo)",
      "+22% conversion rate lift (demo)",
      "Lower CAC through creative iteration (demo)",
    ],
    lessons: [
      "Simplify the transformation message",
      "Build proof into every creative",
      "Iterate weekly, not monthly",
    ],
  },
  {
    name: "Gym / Fitness Trainer",
    industry: "Local Services",
    problem: "High engagement, low lead-to-call conversion.",
    goal: "Turn attention into bookings with a frictionless lead funnel.",
    strategy: [
      "Offer redesign (clear entry offer + qualification)",
      "DM + lead form routing based on intent",
      "Retargeting built around objections",
    ],
    contentApproach: [
      "Reel series: mistakes + quick wins",
      "Client transformation stories",
      "Carousel: program breakdown + outcomes",
    ],
    funnelStructure: [
      "Reels/Ads → lead form",
      "Automated follow-up + call booking",
      "Qualification questions to increase close rate",
    ],
    metaAdsPlan: [
      "Lead ads for volume",
      "Retarget video viewers + engagers",
      "Creative rotation every 7–10 days",
    ],
    results: ["+800 leads (demo)", "+120% engagement (demo)", "+3.2x ROAS (demo)"],
    lessons: [
      "The offer matters more than the targeting",
      "Proof beats motivation",
      "Follow-up speed is a conversion lever",
    ],
  },
  {
    name: "Cafe",
    industry: "Hospitality",
    problem: "Foot traffic depended on weekends; weak weekday consistency.",
    goal: "Increase weekday visits and repeat customers.",
    strategy: [
      "Local content loop (menu + vibe + social proof)",
      "Launch micro-campaigns (weekday offers)",
      "Geo-targeted ads with short creative cycles",
    ],
    contentApproach: [
      "Reels: behind-the-bar + plating",
      "Customer reaction snippets",
      "Carousel: menu highlights + pricing clarity",
    ],
    funnelStructure: [
      "Reels/Ads → map/WhatsApp/DM",
      "Offer: weekday bundle",
      "Retarget: repeat visit prompts",
    ],
    metaAdsPlan: [
      "Local reach + engagement",
      "Retarget engagers with offer",
      "Time-based creatives for peak hours",
    ],
    results: [
      "+26% weekday traffic (demo)",
      "+18% repeat visits (demo)",
      "Lower cost per direction click (demo)",
    ],
    lessons: [
      "Consistency beats one viral reel",
      "Time + location context improves CTR",
      "Keep offers simple and visual",
    ],
  },
  {
    name: "Real Estate Agent",
    industry: "Real Estate",
    problem: "Leads were unqualified and follow-up was inconsistent.",
    goal: "Increase qualified leads and booked meetings.",
    strategy: [
      "Build a qualification-first lead form",
      "Segment campaigns by intent",
      "Retargeting driven by property preference",
    ],
    contentApproach: [
      "Reels: neighborhood micro-tours",
      "Carousel: buying process clarity",
      "Testimonials + success stories",
    ],
    funnelStructure: [
      "Ads → lead form",
      "Instant follow-up + calendar",
      "Nurture: weekly inventory updates",
    ],
    metaAdsPlan: [
      "Lead gen with qualifying questions",
      "Retarget IG engagers",
      "Creative rotation based on area segments",
    ],
    results: ["-38% CPL (demo)", "+260 qualified leads (demo)", "+18% booking rate (demo)"],
    lessons: [
      "Qualification reduces wasted spend",
      "Speed-to-lead increases booking rate",
      "Creative must match local context",
    ],
  },
  {
    name: "Clothing Brand",
    industry: "Ecommerce",
    problem: "Good products, weak creative, inconsistent ROAS.",
    goal: "Scale sales by building a repeatable creative testing engine.",
    strategy: [
      "Creative matrix (angles × formats × hooks)",
      "Landing page alignment for top SKUs",
      "Retargeting sequences based on behavior",
    ],
    contentApproach: [
      "UGC-style try-on reels",
      "Carousel: fabric/fit breakdown",
      "Short form ads: hook → proof → offer",
    ],
    funnelStructure: [
      "Ads → PDP/LP",
      "Upsell/cross-sell",
      "Email/SMS cart recovery",
    ],
    metaAdsPlan: [
      "Broad testing with cost caps",
      "Scale winners via budget ladder",
      "Retarget view content + ATC",
    ],
    results: [
      "+4.1x ROAS (demo)",
      "+44% CTR lift (demo)",
      "+19% AOV (demo)",
    ],
    lessons: [
      "Creative is targeting",
      "Offer clarity improves conversion",
      "Iterate with strict cadence",
    ],
  },
];

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs font-medium tracking-[0.22em] text-white/45">
        {title}
      </div>
      <div className="mt-3 space-y-2 text-sm leading-7 text-white/60">
        {items.map((it) => (
          <div key={it} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/60" />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <div className="py-14 md:py-20">
      <SectionHeading
        eyebrow="CASE STUDIES"
        title="Engineered outcomes across industries."
        description="Five demo case studies that show how content, funnels, and Meta performance connect."
        right={
          <Link
            href="/contact"
            className="cta-pulse inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(0,245,255,0.48)]"
          >
            Book Strategy Call
          </Link>
        }
      />

      <div className="mt-10 space-y-6">
        {caseStudies.map((cs) => (
          <GlowCard key={cs.name} className="p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs text-white/50">{cs.industry}</div>
                <div className="mt-2 font-heading text-2xl text-white">
                  {cs.name}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                      PROBLEM
                    </div>
                    <p className="mt-2 text-sm leading-7 text-white/60">
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                      GOAL
                    </div>
                    <p className="mt-2 text-sm leading-7 text-white/60">
                      {cs.goal}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:w-[320px]">
                <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                  RESULTS (DEMO)
                </div>
                <div className="mt-3 space-y-2 text-sm text-white/60">
                  {cs.results.map((r) => (
                    <div key={r} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00F5FF] shadow-[0_0_12px_rgba(0,245,255,0.5)]" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Block title="STRATEGY" items={cs.strategy} />
              <Block title="CONTENT APPROACH" items={cs.contentApproach} />
              <Block title="FUNNEL STRUCTURE" items={cs.funnelStructure} />
              <Block title="META ADS PLAN" items={cs.metaAdsPlan} />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Block title="LESSONS LEARNED" items={cs.lessons} />
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs font-medium tracking-[0.22em] text-white/45">
                  NEXT STEP
                </div>
                <div className="mt-3 font-heading text-lg text-white">
                  Want this engineered for your brand?
                </div>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  Book a strategy call and we’ll map the loop: offer → content →
                  funnel → ads → analytics.
                </p>
                <Link
                  href="/contact"
                  className="cta-pulse mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-5 text-sm font-semibold text-black shadow-[0_0_28px_rgba(0,245,255,0.30)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(0,245,255,0.48)]"
                >
                  Schedule Strategy Call
                </Link>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
