import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  right,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <div className="text-xs font-medium tracking-[0.22em] text-white/50">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="font-heading text-2xl tracking-tight text-white md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm leading-7 text-white/60 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
