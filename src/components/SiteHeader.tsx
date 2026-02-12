"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/work-samples", label: "Work Samples" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070D]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(0,245,255,0.06),0_0_30px_rgba(0,245,255,0.06)]">
            <span className="h-3 w-3 rounded-full bg-[#00F5FF] shadow-[0_0_18px_rgba(0,245,255,0.75)]" />
          </span>
          <div className="leading-tight">
            <div className="font-heading text-sm tracking-[0.22em] text-white">
              TESLA CODELAB
            </div>
            <div className="text-xs text-white/60">Growth Engineering Lab</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "rounded-full px-4 py-2 text-sm transition " +
                  (active
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/case-studies"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 md:inline-flex"
          >
            View Case Studies
          </Link>
          <Link
            href="/contact"
            className="cta-pulse inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#00F5FF_0%,#00A3FF_100%)] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_26px_rgba(0,245,255,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_0_42px_rgba(0,245,255,0.48)]"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </header>
  );
}
