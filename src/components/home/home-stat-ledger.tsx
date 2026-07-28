"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

import { workforceStats } from "@/content/stats";

function LedgerValue({
  value,
  display,
}: {
  value: number;
  display: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const shouldCount = value >= 10000;
  const [shown, setShown] = useState(display);

  useEffect(() => {
    if (!inView || reduce || !shouldCount) return;

    const controls = animate(0, value, {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setShown(`${Math.round(latest).toLocaleString("en-US")}+`);
      },
      onComplete: () => setShown(display),
    });

    return () => controls.stop();
  }, [display, inView, reduce, shouldCount, value]);

  return (
    <>
      <span className="sr-only">{display}</span>
      <span ref={ref} aria-hidden>
        {shown}
      </span>
    </>
  );
}

export function HomeStatLedger() {
  return (
    <dl className="grid border-t border-silver/35 sm:grid-cols-2 lg:grid-cols-4">
      {workforceStats.map((stat, index) => (
        <div
          key={stat.id}
          className="relative border-b border-silver/35 px-0 py-7 sm:px-6 lg:border-r lg:last:border-r-0"
        >
          <span
            aria-hidden
            className="absolute top-0 left-0 h-px w-10 bg-navy-foreground"
          />
          <dt className="text-xs font-semibold tracking-[0.14em] text-silver uppercase">
            {String(index + 1).padStart(2, "0")} / {stat.label}
          </dt>
          <dd className="mt-4 font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.05em] text-navy-foreground tabular-nums">
            <LedgerValue value={stat.value} display={stat.display} />
          </dd>
          {stat.suffix.trim() ? (
            <p className="mt-2 text-xs text-silver">{stat.suffix.trim()}</p>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
