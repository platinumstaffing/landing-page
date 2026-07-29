"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { homeImages } from "@/content/home-images";
import { EditorialImage } from "./editorial-image";

const words = [
  "Workforce",
  "solutions",
  "built",
  "for",
  "the",
  "work",
  "ahead.",
];

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="border-border bg-background relative isolate overflow-hidden border-b">
      <Container className="relative grid min-h-[calc(100svh-4.75rem)] items-center gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] lg:gap-8 lg:py-18">
        <div className="relative z-10 max-w-3xl">
          <motion.p
            initial={reduce ? false : { y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-primary text-xs font-semibold tracking-[0.18em] uppercase"
          >
            Pennsylvania workforce partner · Since 2019
          </motion.p>

          <h1 className="font-heading text-foreground mt-6 text-[clamp(3.5rem,7.2vw,7.25rem)] leading-[0.88] font-bold tracking-[-0.065em]">
            {words.map((word, index) => (
              <span
                key={word}
                className="inline-block overflow-hidden pr-[0.22em] pb-[0.09em]"
              >
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.04 * index,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={reduce ? false : { y: 18 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-muted-foreground mt-7 max-w-[60ch] text-base leading-relaxed text-pretty sm:text-lg">
              We help Pennsylvania employers solve workforce gaps with
              dependable professionals, responsive support, and staffing
              strategies shaped around real operational needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact#request-talent">Request Talent</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/jobs">Find Jobs</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { x: 24 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:-mr-[8vw]"
        >
          <EditorialImage
            image={homeImages.hero}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="mx-auto w-full max-w-[34rem] lg:mr-0 lg:min-h-[42rem]"
          />
          <div className="border-border bg-background absolute -bottom-7 left-5 grid grid-cols-2 border sm:left-8">
            <div className="border-border border-r px-4 py-3 sm:px-5">
              <span className="text-muted-foreground block text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                Established
              </span>
              <span className="font-heading mt-1 block text-lg font-bold">
                2019
              </span>
            </div>
            <div className="px-4 py-3 sm:px-5">
              <span className="text-muted-foreground block text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                Serving
              </span>
              <span className="font-heading mt-1 block text-lg font-bold">
                Pennsylvania
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
