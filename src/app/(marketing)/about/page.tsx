import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
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
      <EditorialPageHero
        index="01"
        eyebrow="About Platinum"
        title="Building stronger workforces since 2019."
        description={
          <>
            <p>
              We partner with employers across Pennsylvania to solve workforce
              challenges, strengthen operations, and support long-term success.
            </p>
            <p>
              Our network includes more than{" "}
              <strong>40,000 professionals</strong> and over{" "}
              <strong>10,000 successful placements</strong>.
            </p>
          </>
        }
        primary={{ label: "Explore employer solutions", href: "/employers" }}
        secondary={{ label: "Contact our team", href: "/contact" }}
        note="Established 2019 · Pennsylvania"
      />

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
          <div className="border-border bg-border grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2">
            <Reveal className="bg-surface">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <Eyebrow>Our Mission</Eyebrow>
                <p className="font-heading text-foreground mt-4 text-xl leading-snug font-semibold text-balance sm:text-2xl">
                  {mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="bg-surface">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <Eyebrow>Our Vision</Eyebrow>
                <p className="font-heading text-foreground mt-4 text-xl leading-snug font-semibold text-balance sm:text-2xl">
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
                <div className="border-border border-t pt-5">
                  <span className="font-heading text-primary text-sm font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-foreground mt-3 text-lg font-bold">
                    {value.name}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
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
                <p className="border-border bg-muted text-muted-foreground mt-6 rounded-lg border px-4 py-3 text-sm">
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
