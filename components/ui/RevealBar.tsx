"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** A progress bar that fills to `percent` once it scrolls into view. */
export function RevealBar({
  percent,
  tone = "light",
}: {
  percent: number;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [intersected, setIntersected] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const filled = reducedMotion || intersected;

  return (
    <div
      ref={ref}
      className={`h-1.5 w-full overflow-hidden rounded-sm ${
        tone === "dark" ? "bg-ink-50/10" : "bg-ink-200"
      }`}
    >
      <div
        className="h-full rounded-sm bg-accent-500 transition-[width] duration-[1200ms] ease-out"
        style={{ width: filled ? `${percent}%` : "0%" }}
      />
    </div>
  );
}
