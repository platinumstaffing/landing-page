import type { Metadata } from "next";
import Link from "next/link";

import { BrandGraphic } from "@/components/brand/brand-graphic";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Heading } from "@/components/layout/heading";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { CareerPathway } from "@/components/sections/career-pathway";
import { FinalCta } from "@/components/sections/final-cta";
import { WhyEmployers } from "@/components/sections/why-employers";
import { WorkforceImpact } from "@/components/sections/workforce-impact";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import {
  coreValues,
  leadershipIntro,
  mission,
  ourStory,
  vision,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Platinum Staffing & Recruitment — our story, mission, vision, core values, and commitment to Pennsylvania employers and job seekers since 2019.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div>
            <Eyebrow>About Platinum</Eyebrow>
            <Heading as="h1" level="h1" className="mt-4">
              Building Stronger Workforces Since 2019
            </Heading>
            <Prose size="lg" className="mt-5">
              <p>
                At Platinum Staffing &amp; Recruitment, we believe every
                successful business begins with the right people. Since 2019, we
                have partnered with employers across Pennsylvania to deliver
                dependable staffing and recruitment solutions that help
                organizations overcome workforce challenges, strengthen
                operations, and achieve long-term success.
              </p>
              <p className="mt-4">
                With a growing network of more than{" "}
                <strong className="font-semibold text-foreground">
                  40,000 professionals
                </strong>{" "}
                and over{" "}
                <strong className="font-semibold text-foreground">
                  10,000 successful placements
                </strong>
                , we connect businesses with qualified talent while creating
                meaningful career opportunities.
              </p>
            </Prose>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/employers">Explore employer solutions</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact our team</Link>
              </Button>
            </div>
          </div>
          <BrandGraphic
            className="aspect-4/3 w-full min-h-64"
            label="Platinum Staffing & Recruitment — a Pennsylvania workforce solutions partner since 2019"
          />
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <Eyebrow>Our Journey</Eyebrow>
                <Heading level="h2" className="mt-3">
                  A partnership-first approach, from day one
                </Heading>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div>
                <Prose size="lg" className="max-w-2xl">
                  {ourStory.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="mt-4 first:mt-0">
                      {paragraph}
                    </p>
                  ))}
                </Prose>
                <Button asChild variant="outline" className="mt-8">
                  <Link href="/employers">Explore our services</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <WorkforceImpact />

      <Section>
        <Container>
          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            <Reveal className="bg-surface">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <Eyebrow>Our Mission</Eyebrow>
                <p className="mt-4 font-heading text-xl font-semibold leading-snug text-foreground text-balance sm:text-2xl">
                  {mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="bg-surface">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <Eyebrow>Our Vision</Eyebrow>
                <p className="mt-4 font-heading text-xl font-semibold leading-snug text-foreground text-balance sm:text-2xl">
                  {vision}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="What We Stand For"
              title="Our Core Values"
              description="Five principles guide how we work with every employer and every professional we place."
            />
          </Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <Reveal as="li" key={value.name} delay={index * 0.05}>
                <div className="border-t border-border pt-5">
                  <span className="font-heading text-sm font-bold text-primary tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div>
                <Eyebrow>Leadership</Eyebrow>
                <Heading level="h2" className="mt-3">
                  Leadership that puts people first
                </Heading>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div>
                <Prose size="lg" className="max-w-2xl">
                  <p>{leadershipIntro}</p>
                </Prose>
                <p className="mt-6 rounded-lg border border-border bg-muted px-4 py-3 text-sm text-muted-foreground">
                  Leadership biographies and photographs will be added here as
                  they become available.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <WhyEmployers />

      <CareerPathway />

      <FinalCta
        title="Let's Build Something Great Together"
        description="Whether you're looking for dependable workforce solutions or your next career opportunity, Platinum Staffing & Recruitment is ready to help you build stronger businesses, meaningful careers, and lasting partnerships."
        primary={{ label: "Request Talent", href: "/contact#request-talent" }}
        secondary={{ label: "Find Jobs", href: "/jobs" }}
      />
    </>
  );
}
