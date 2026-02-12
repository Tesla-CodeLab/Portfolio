import Link from "next/link";
import { GlowCard } from "@/components/GlowCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Work Samples",
};

const samples = [
  {
    title: "Instagram Post Mockups",
    items: [
      "Hook-led value post (template)",
      "Proof-driven testimonial layout",
      "Educational myth-busting post",
    ],
  },
  {
    title: "Carousel Designs",
    items: [
      "Problem → framework → action slides",
      "Objection handling sequence",
      "Offer breakdown + clarity carousel",
    ],
  },
  {
    title: "Reel Scripts Preview",
    items: [
      "Hook bank for 3 audiences",
      "Retention beats + pattern interrupts",
      "CTA variations by funnel stage",
    ],
  },
  {
    title: "Ad Copy Examples",
    items: [
      "Direct response primary text",
      "Objection-first ads",
      "Proof-stack variations",
    ],
  },
  {
    title: "Monthly Content Calendar",
    items: [
      "Pillar distribution",
      "Creative testing slots",
      "Weekly iteration review",
    ],
  },
  {
    title: "Competitor Research Snapshot",
    items: [
      "Competitor hook analysis",
      "Angle matrix",
      "Gap opportunities",
    ],
  },
];

export default function WorkSamplesPage() {
  return (
    <div className="py-14 md:py-20">
      <SectionHeading
        eyebrow="WORK SAMPLES"
        title="A look into the lab’s output."
        description="Demo artifacts that represent how Tesla Codelab structures content, creatives, and funnel execution."
        right={
          <Link
            href="/contact"
            className="cta-pulse inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-5 py-2 text-sm font-semibold text-black shadow-[0_0_30px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(0,245,255,0.48)]"
          >
            Book Strategy Call
          </Link>
        }
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {samples.map((s) => (
          <GlowCard key={s.title}>
            <div className="font-heading text-lg text-white">{s.title}</div>
            <div className="mt-4 space-y-2 text-sm leading-7 text-white/60">
              {s.items.map((it) => (
                <div key={it} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                  {it}
                </div>
              ))}
            </div>
          </GlowCard>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
        <div className="text-xs font-medium tracking-[0.22em] text-white/50">
          NOTE
        </div>
        <div className="mt-3 font-heading text-3xl text-white md:text-4xl">
          Built for conversion, not decoration.
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60 md:text-base">
          The lab prioritizes clarity, proof, and outcome-driven messaging. Design
          supports the objective—every asset earns its place in the funnel.
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
  );
}
