"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

import { workforceStats } from "@/content/stats";
import { cn } from "@/lib/utils";

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
    <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[0.82fr_1.28fr_1.18fr_0.72fr] lg:gap-x-0 lg:pb-12">
      {workforceStats.map((stat, index) => (
        <div
          key={stat.id}
          className={cn(
            "border-silver/45 relative border-t pt-5",
            "lg:min-h-52 lg:pr-8",
            index > 0 && "lg:pl-10",
            index % 2 === 1 && "lg:translate-y-12",
          )}
        >
          <dt className="flex items-start justify-between gap-4">
            <span
              aria-hidden
              className="bg-navy-foreground absolute -top-px left-0 h-px w-14"
            />
            <span className="text-silver max-w-[18ch] text-xs font-semibold tracking-[0.14em] uppercase">
              {stat.label}
            </span>
            <span
              aria-hidden
              className="font-heading text-silver/70 text-[0.65rem] font-bold tracking-[0.16em] tabular-nums"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </dt>
          <dd className="pt-10 lg:pt-12">
            <span className="font-heading text-navy-foreground block text-[clamp(2.75rem,4.5vw,4.75rem)] leading-none font-bold tracking-[-0.055em] tabular-nums">
              <LedgerValue value={stat.value} display={stat.display} />
            </span>
            <span className="text-silver mt-4 block min-h-4 max-w-[18ch] text-xs leading-relaxed">
              {stat.suffix.trim() || "\u00a0"}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
