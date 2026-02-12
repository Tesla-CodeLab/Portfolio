import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="font-heading text-sm tracking-[0.22em] text-white">
            TESLA CODELAB
          </div>
          <p className="text-sm text-white/60">
            Performance-driven growth systems engineered with analytics precision.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <Link className="text-white/70 hover:text-white" href="/about">
            About
          </Link>
          <Link className="text-white/70 hover:text-white" href="/services">
            Services
          </Link>
          <Link className="text-white/70 hover:text-white" href="/case-studies">
            Case Studies
          </Link>
          <Link className="text-white/70 hover:text-white" href="/work-samples">
            Work Samples
          </Link>
          <Link className="text-white/70 hover:text-white" href="/contact">
            Contact
          </Link>
        </div>

        <div className="space-y-2 text-sm text-white/60">
          <div className="text-white/80">Contact</div>
          <div>Contact.teslacodelab@gmail.com</div>
          <div className="flex gap-4 pt-2">
            <a
              className="text-white/70 hover:text-white"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="text-white/70 hover:text-white"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Tesla Codelab. All rights reserved.</div>
          <div>Growth Engineering • Meta Ads • Funnels • Analytics • Next.js</div>
        </div>
      </div>
    </footer>
  );
}
