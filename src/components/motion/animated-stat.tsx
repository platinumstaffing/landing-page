"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type AnimatedStatProps = {
  value: number;
  display: string;
  label: string;
  suffix?: string;
};

/**
 * Counts up once when scrolled into view. Respects prefers-reduced-motion.
 */
export function AnimatedStat({
  value,
  display,
  label,
  suffix,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(display);

  useEffect(() => {
    if (!inView || reduce || value < 100) return;

    let frame = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(value * eased);
      setShown(
        current >= 1000 ? `${current.toLocaleString("en-US")}+` : `${current}+`,
      );
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setShown(display);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [display, inView, reduce, value]);

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start">
      <span aria-hidden className="bg-silver/45 mb-4 block h-px w-8" />
      <p className="font-heading text-3xl font-bold tracking-tight text-white tabular-nums sm:text-4xl">
        {shown}
      </p>
      <p className="text-silver mt-2 text-sm font-medium tracking-wide uppercase">
        {label}
      </p>
      {suffix?.trim() ? (
        <p className="text-silver/70 mt-1 text-xs leading-snug">
          {suffix.trim()}
        </p>
      ) : null}
    </div>
  );
}
