"use client";

import { useEffect, useMemo, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function MetricCounter({
  value,
  suffix,
  prefix,
  decimals = 0,
  durationMs = 900,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  durationMs?: number;
}) {
  const [display, setDisplay] = useState(0);

  const formatter = useMemo(() => {
    return new Intl.NumberFormat(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  }, [decimals]);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = clamp((now - start) / durationMs, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, value]);

  return (
    <span>
      {prefix}
      {formatter.format(display)}
      {suffix}
    </span>
  );
}
