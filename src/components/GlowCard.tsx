import { type ReactNode } from "react";

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "group relative rounded-2xl border border-white/10 bg-[rgba(14,22,40,0.55)] p-6 shadow-[0_0_0_1px_rgba(0,245,255,0.05)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-[rgba(14,22,40,0.68)] " +
        (className ?? "")
      }
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(600px_circle_at_12%_8%,rgba(0,245,255,0.16),transparent_52%),radial-gradient(700px_circle_at_92%_18%,rgba(0,163,255,0.12),transparent_55%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
