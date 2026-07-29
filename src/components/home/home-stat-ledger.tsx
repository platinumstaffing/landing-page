"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

import { workforceStats } from "@/content/stats";

function LedgerValue({ value, display }: { value: number; display: string }) {
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
    <dl className="border-silver/35 bg-silver/35 grid gap-px border sm:grid-cols-2 lg:grid-cols-4">
      {workforceStats.map((stat, index) => (
        <div
          key={stat.id}
          className="bg-navy relative flex min-h-48 flex-col justify-between px-5 py-7 sm:min-h-52 sm:px-7 lg:min-h-56 lg:px-8"
        >
          <span
            aria-hidden
            className="bg-navy-foreground absolute top-0 left-0 h-px w-10"
          />
          <dt className="text-silver text-xs font-semibold tracking-[0.14em] uppercase">
            {String(index + 1).padStart(2, "0")} / {stat.label}
          </dt>
          <dd className="mt-auto pt-8">
            <span className="font-heading text-navy-foreground block text-[clamp(2.75rem,4.5vw,4.75rem)] leading-none font-bold tracking-[-0.055em] tabular-nums">
              <LedgerValue value={stat.value} display={stat.display} />
            </span>
            <span className="text-silver mt-4 block min-h-4 text-xs">
              {stat.suffix.trim() || "\u00a0"}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
