"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Asset = {
  src: string;
  kind: "gif" | "mp4";
  durationMs?: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)] as T;
}

export function LightningMediaOverlay() {
  const assets = useMemo<Asset[]>(
    () => [
      { src: "/Lightning Background.gif", kind: "gif", durationMs: 1600 },
      { src: "/_720P.mp4", kind: "mp4" },
      { src: "/Thunder_overlay_720P.mp4", kind: "mp4" },
    ],
    []
  );

  const [active, setActive] = useState<null | { asset: Asset; id: number }>(
    null
  );

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined);
  const aliveRef = useRef(true);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }, []);

  const scheduleNext = useCallback(() => {
    clearTimer();
    const next = rand(5200, 8800);
    timeoutRef.current = window.setTimeout(() => {
      if (!aliveRef.current) return;
      const asset = pick(assets);
      const id = Date.now();
      setActive({ asset, id });
    }, next);
  }, [assets, clearTimer]);

  useEffect(() => {
    aliveRef.current = true;
    scheduleNext();
    return () => {
      aliveRef.current = false;
      clearTimer();
    };
  }, [clearTimer, scheduleNext]);

  useEffect(() => {
    if (!active) return;

    if (active.asset.kind === "gif") {
      const t = window.setTimeout(() => {
        if (!aliveRef.current) return;
        setActive(null);
        scheduleNext();
      }, active.asset.durationMs ?? 1600);

      return () => window.clearTimeout(t);
    }

    const v = videoRef.current;
    if (!v) {
      const fallback = window.setTimeout(() => {
        if (!aliveRef.current) return;
        setActive(null);
        scheduleNext();
      }, 1600);

      return () => window.clearTimeout(fallback);
    }

    let cancelled = false;

    const start = async () => {
      try {
        v.currentTime = 0;
        await v.play();
      } catch {
        // ignore autoplay failures
      }
    };

    start();

    const onEnded = () => {
      if (cancelled) return;
      setActive(null);
      scheduleNext();
    };

    v.addEventListener("ended", onEnded);

    const fallback = window.setTimeout(() => {
      if (cancelled) return;
      setActive(null);
      scheduleNext();
    }, 2400);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
      v.removeEventListener("ended", onEnded);
    };
  }, [active, scheduleNext]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {active ? (
        <div
          key={active.id}
          className="absolute inset-0 lightning-media"
          style={{
            background:
              "radial-gradient(900px circle at 30% 18%, rgba(0,245,255,0.10), transparent 55%), radial-gradient(800px circle at 78% 40%, rgba(0,163,255,0.08), transparent 58%)",
          }}
        >
          {active.asset.kind === "gif" ? (
            <img
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              src={encodeURI(active.asset.src)}
            />
          ) : (
            <video
              ref={videoRef}
              muted
              playsInline
              className="h-full w-full object-cover"
              src={encodeURI(active.asset.src)}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}
