"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HeroCanvas } from "@/components/motion/hero-canvas";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HERO_IMAGE = "/brand/hero.jpg";
const HEADLINE = ["Workforce", "Solutions", "That", "Keep", "Your", "Business", "Moving."];

export function HomeHero() {
  const reduce = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const [canvasFailed, setCanvasFailed] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  useGSAP(
    () => {
      if (reduce) return;

      // Intro choreography on load: headline lifts word-by-word behind a mask.
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });
      intro
        .from(".hero-word", {
          yPercent: 118,
          duration: 0.9,
          stagger: 0.075,
        })
        .from(".hero-eyebrow", { autoAlpha: 0, y: 14, duration: 0.5 }, 0.15)
        .from(
          ".hero-fade",
          { autoAlpha: 0, y: 18, duration: 0.6, stagger: 0.1 },
          0.45,
        )
        .fromTo(
          ".hero-arc",
          { strokeDashoffset: 640, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
          0.2,
        );

      // Scroll handoff: hero pins, content dissolves upward, canvas deepens to navy.
      // Pin only on pointer-precise, larger viewports — mobile address-bar resize
      // makes pinned heroes jump, so touch/small screens scroll normally.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=62%",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
              progressRef.current = self.progress;
            },
          },
        }).to(".hero-content", { yPercent: -14, autoAlpha: 0, ease: "none" }, 0);
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reduce] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-navy sm:min-h-[calc(100svh-4.25rem)]"
    >
      {/* CSS-branded fallback + LCP image; sits under the canvas, visible on WebGL failure */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-[70%_center] brightness-90 contrast-[1.05] grayscale"
        />
        <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_35%_45%,transparent_0%,rgba(20,28,50,0.55)_70%,rgba(13,18,32,0.9)_100%)]" />
      </div>

      {!canvasFailed ? (
        <HeroCanvas
          src={HERO_IMAGE}
          progressRef={progressRef}
          reducedMotion={reduce}
          onReady={() => setCanvasReady(true)}
          onError={() => setCanvasFailed(true)}
          className={cn(
            "absolute inset-0 -z-10 transition-opacity duration-700",
            canvasReady ? "opacity-100" : "opacity-0",
          )}
        />
      ) : null}

      {/* Left-anchored scrim keeps type at AA contrast over the image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-navy/85 via-navy/45 to-transparent"
      />

      {/* Brand arc motif drawn from the logo geometry (top-right) */}
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -top-24 -right-24 -z-10 h-130 w-130 text-silver/25"
      >
        <path
          className="hero-arc"
          d="M400 0 A400 400 0 0 0 0 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="640"
          strokeDashoffset="0"
        />
      </svg>

      <Container className="hero-content relative py-20">
        <div className="max-w-2xl">
          <p className="hero-eyebrow font-heading text-xs font-semibold uppercase tracking-[0.22em] text-silver">
            Workforce Solutions Since 2019
          </p>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.04] tracking-tight text-navy-foreground text-balance sm:text-5xl lg:text-[3.5rem]">
            {HEADLINE.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="inline-flex overflow-hidden pb-[0.08em] pr-[0.28em] align-bottom"
              >
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/85 text-pretty">
            Platinum Staffing & Recruitment partners with employers across
            Pennsylvania to solve workforce challenges through dependable
            staffing. A growing network of more than{" "}
            <strong className="font-semibold text-navy-foreground">
              40,000 professionals
            </strong>{" "}
            helps organizations build stronger teams and meaningful careers.
          </p>

          <div className="hero-fade mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact#request-talent">Request Talent</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="quiet"
              className="border-silver/40 text-navy-foreground hover:border-silver hover:text-navy-foreground"
            >
              <Link href="/jobs">Find Jobs</Link>
            </Button>
          </div>
        </div>

        <div className="hero-fade mt-16 flex items-center gap-3 text-silver">
          <span className="h-10 w-px bg-silver/40" />
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
        </div>
      </Container>
    </section>
  );
}
