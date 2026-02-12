"use client";

import { useEffect, useState } from "react";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function RandomLightningStreaks() {
  const [pulse, setPulse] = useState<null | {
    id: number;
    topPct: number;
    topPctSecondary: number;
    rotateDeg: number;
  }>(null);

  useEffect(() => {
    let active = true;
    let timeoutId: number | undefined;

    const schedule = () => {
      const next = rand(5000, 8000);
      timeoutId = window.setTimeout(() => {
        if (!active) return;

        const id = Date.now();
        const topPct = rand(18, 82);
        const topPctSecondary = Math.min(92, topPct + rand(-6, 6));
        setPulse({
          id,
          topPct,
          topPctSecondary,
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
  }, []);

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
              top: `${pulse.topPctSecondary}%`,
              transform: `rotate(${pulse.rotateDeg * 0.8}deg)`,
            }}
          />
        </>
      ) : null}
    </div>
  );
}
