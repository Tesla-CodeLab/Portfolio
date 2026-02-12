import Link from "next/link";
import { GlowCard } from "@/components/GlowCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="py-14 md:py-20">
      <SectionHeading
        eyebrow="CONTACT"
        title="Let’s engineer your next growth loop."
        description="Share what you’re building. We’ll respond with a precise system map and next steps."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <GlowCard>
          <div className="text-xs font-medium tracking-[0.22em] text-white/45">
            DIRECT
          </div>
          <div className="mt-4 space-y-3 text-sm text-white/60">
            <div>
              <div className="text-white/80">Email</div>
              <div>Contact.teslacodelab@gmail.com</div>
            </div>
            <div>
              <div className="text-white/80">Phone</div>
              <div>+91 XXXXX XXXXX</div>
            </div>
            <div>
              <div className="text-white/80">Social</div>
              <div className="mt-2 flex gap-4">
                <a className="text-white/70 hover:text-white" href="#">
                  Instagram
                </a>
                <a className="text-white/70 hover:text-white" href="#">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-white/80">What we’ll ask</div>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00F5FF] shadow-[0_0_12px_rgba(0,245,255,0.55)]" />
                  Your goal (leads, sales, growth).
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00A3FF] shadow-[0_0_12px_rgba(0,163,255,0.5)]" />
                  Your current funnel + offer.
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/60" />
                  Your constraints (budget, timeline).
                </div>
              </div>
            </div>
          </div>
        </GlowCard>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(800px_circle_at_18%_18%,rgba(0,245,255,0.16),transparent_56%),radial-gradient(800px_circle_at_82%_36%,rgba(0,163,255,0.12),transparent_58%)]" />
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(0,245,255,0.08)]">
            <div className="text-xs font-medium tracking-[0.22em] text-white/45">
              STRATEGY REQUEST
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
        <div className="font-heading text-2xl text-white">
          What happens after you submit?
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <GlowCard>
            <div className="text-xs font-medium tracking-[0.22em] text-white/45">
              STEP 01
            </div>
            <div className="mt-2 font-heading text-lg text-white">System map</div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              We identify the biggest constraint in your growth loop and map the
              system around it.
            </p>
          </GlowCard>
          <GlowCard>
            <div className="text-xs font-medium tracking-[0.22em] text-white/45">
              STEP 02
            </div>
            <div className="mt-2 font-heading text-lg text-white">Execution</div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              We deploy content + funnel assets and run disciplined creative
              cycles.
            </p>
          </GlowCard>
          <GlowCard>
            <div className="text-xs font-medium tracking-[0.22em] text-white/45">
              STEP 03
            </div>
            <div className="mt-2 font-heading text-lg text-white">
              Analytics loop
            </div>
            <p className="mt-2 text-sm leading-7 text-white/60">
              We instrument performance and iterate based on what moves
              conversion.
            </p>
          </GlowCard>
        </div>

        <div className="mt-8">
          <Link
            href="/case-studies"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white/80 transition hover:bg-white/10"
          >
            View case studies
          </Link>
        </div>
      </div>
    </div>
  );
}
