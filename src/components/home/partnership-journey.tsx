"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { partnershipJourneyImages } from "@/content/partnership-journey-images";
import { employerProcess } from "@/content/process";
import { cn } from "@/lib/utils";

const desktopRoute =
  "M18 18 C54 18 70 18 100 18 C170 18 230 62 300 62 C370 62 430 18 500 18 C570 18 630 62 700 62 C770 62 830 18 900 18 C936 18 958 18 986 18";

function DesktopJourneyRoute({ reduce }: { reduce: boolean | null }) {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 -bottom-24 hidden h-24 w-full overflow-visible lg:block"
      viewBox="0 0 1000 96"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <defs>
        <marker
          id="journey-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10Z" className="fill-primary" />
        </marker>
      </defs>
      <path
        d={desktopRoute}
        stroke="currentColor"
        className="text-border"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <motion.path
        d={desktopRoute}
        stroke="currentColor"
        className="text-primary"
        strokeWidth="3"
        strokeLinecap="round"
        markerEnd="url(#journey-arrow)"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
      />
      {[100, 300, 500, 700, 900].map((x, index) => (
        <g key={x}>
          <circle
            cx={x}
            cy={index % 2 === 1 ? 62 : 18}
            r="8"
            className="fill-background stroke-primary"
            strokeWidth="2"
          />
          <circle
            cx={x}
            cy={index % 2 === 1 ? 62 : 18}
            r="3"
            className="fill-primary"
          />
        </g>
      ))}
    </svg>
  );
}

function MobileJourneyRoute({ reduce }: { reduce: boolean | null }) {
  return (
    <svg
      className="pointer-events-none absolute top-0 bottom-0 left-0 h-full w-10 overflow-visible lg:hidden"
      viewBox="0 0 40 1000"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path
        d="M14 0C14 210 26 255 14 445C4 605 25 760 14 1000"
        className="text-border"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <motion.path
        d="M14 0C14 210 26 255 14 445C4 605 25 760 14 1000"
        className="text-primary"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export function PartnershipJourney() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-8">
      <MobileJourneyRoute reduce={reduce} />

      <div className="relative">
        <DesktopJourneyRoute reduce={reduce} />

        <ol className="relative grid gap-7 pl-10 lg:grid-cols-5 lg:gap-5 lg:pl-0">
          {employerProcess.map((step, index) => {
            const image = partnershipJourneyImages[index];

            return (
              <li
                key={step.step}
                className={cn(
                  "relative z-10",
                  index % 2 === 1 && "lg:translate-y-11",
                )}
              >
                <span
                  aria-hidden
                  className="absolute top-[9.25rem] -left-7 h-0.5 w-7 bg-primary lg:hidden"
                />
                <span
                  aria-hidden
                  className="absolute top-[9rem] -left-8 size-2.5 rounded-full border-2 border-primary bg-background lg:hidden"
                />
                <span
                  aria-hidden
                  className="absolute top-full left-1/2 hidden h-[1.125rem] w-px -translate-x-1/2 bg-border lg:block"
                />

                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button
                      type="button"
                      className="group relative flex w-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface text-left outline-none transition-[border-color,background-color] hover:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                      whileHover={reduce ? undefined : { y: -5 }}
                      whileTap={reduce ? undefined : { scale: 0.985 }}
                    >
                      <span className="flex items-center justify-between gap-4 px-5 py-4">
                        <span className="font-heading text-xs font-bold tracking-[0.14em] text-primary tabular-nums">
                          {String(index + 1).padStart(2, "0")} / 05
                        </span>
                        <span className="size-2 rounded-full border border-primary bg-background transition-colors group-hover:bg-primary group-focus-visible:bg-primary" />
                      </span>

                      <span className="relative block aspect-[75/56] w-full overflow-hidden border-y border-border bg-surface-muted">
                        <Image
                          src={image.src}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 18vw, calc(100vw - 5rem)"
                          className="object-contain object-center"
                        />
                      </span>

                      <span className="flex min-h-40 flex-col p-5">
                        <span className="max-w-[15ch] font-heading text-lg leading-tight font-semibold tracking-[-0.025em] text-foreground">
                          {step.title}
                        </span>
                        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-semibold tracking-[0.08em] text-primary uppercase">
                          Open step
                          <ArrowRight
                            className="size-3.5 transition-transform group-hover:translate-x-1"
                            aria-hidden
                          />
                        </span>
                      </span>
                    </motion.button>
                  </DialogTrigger>

                  <DialogContent className="max-h-[min(92vh,54rem)] overflow-y-auto rounded-[1.5rem] border border-border bg-surface p-0 sm:max-w-2xl">
                    <div className="border-b border-border bg-surface-muted">
                      <div className="flex items-center justify-between gap-4 px-6 py-4 sm:px-8">
                        <span className="font-heading text-xs font-bold tracking-[0.14em] text-primary tabular-nums">
                          Partnership step{" "}
                          {String(index + 1).padStart(2, "0")} / 05
                        </span>
                      </div>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="(min-width: 640px) 42rem, calc(100vw - 2rem)"
                        className="h-auto w-full border-t border-border object-contain"
                      />
                    </div>
                    <DialogHeader className="px-6 pt-2 pb-8 sm:px-8">
                      <DialogTitle className="max-w-[18ch] text-2xl leading-tight font-semibold tracking-[-0.03em] sm:text-3xl">
                        {step.title}
                      </DialogTitle>
                      <DialogDescription className="mt-2 text-base leading-relaxed">
                        {step.description}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="mt-9 pl-10 text-xs leading-relaxed text-muted-foreground lg:mt-20 lg:pl-0">
        Follow the route, then select any step for the full partnership detail.
      </p>
    </div>
  );
}
