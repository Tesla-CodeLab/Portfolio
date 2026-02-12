"use client";

import { useEffect, useMemo, useState } from "react";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function RandomLightningStreaks() {
  const [pulse, setPulse] = useState<null | {
    id: number;
    topPct: number;
    rotateDeg: number;
  }>(null);

  const seed = useMemo(() => Math.random(), []);

  useEffect(() => {
    let active = true;
    let timeoutId: number | undefined;

    const schedule = () => {
      const next = rand(5000, 8000);
      timeoutId = window.setTimeout(() => {
        if (!active) return;

        const id = Date.now();
        setPulse({
          id,
          topPct: rand(18, 82),
          rotateDeg: rand(-10, 10),
        });

        window.setTimeout(() => {
          if (!active) return;
          setPulse(null);
          schedule();
        }, 900);
      }, next);
    };

    schedule();

    return () => {
      active = false;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [seed]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pulse ? (
        <>
          <div
            key={pulse.id}
            className="lightning-streak"
            style={{
              top: `${pulse.topPct}%`,
              transform: `rotate(${pulse.rotateDeg}deg)`,
            }}
          />
          <div
            key={`${pulse.id}-b`}
            className="lightning-streak lightning-streak--secondary"
            style={{
              top: `${Math.min(92, pulse.topPct + rand(-6, 6))}%`,
              transform: `rotate(${pulse.rotateDeg * 0.8}deg)`,
            }}
          />
        </>
      ) : null}
    </div>
  );
}
