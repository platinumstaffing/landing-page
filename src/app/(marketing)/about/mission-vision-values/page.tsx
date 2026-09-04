import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { coreValues, mission, vision } from "@/content/about";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Mission, Vision & Values",
  description:
    "The mission, vision, and five core values that guide Platinum Staffing & Recruitment: Integrity, Partnership, Excellence, Responsiveness, and Opportunity.",
};

export default function MissionVisionValuesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          {
            name: "Mission, Vision & Values",
            href: "/about/mission-vision-values",
          },
        ]}
      />
      <EditorialPageHero
        index="01.2"
        eyebrow="Mission, Vision & Values"
        title="What we stand for"
        description={
          <p>
            Five principles guide how we work with every employer and every
            professional we place. They are the standard, not the slogan.
          </p>
        }
        primary={{
          label: "Why Platinum",
          href: "/about/why-platinum",
        }}
        secondary={{ label: "Our Story", href: "/about/our-story" }}
        note="Integrity · Partnership · Excellence"
        banner={{ family: "About", page: "Mission, Vision & Values" }}
        image={pageImages.missionInPractice}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_minmax(16rem,0.7fr)_1fr] lg:gap-6">
            <Reveal className="border-border bg-surface rounded-xl border p-8 sm:p-10">
              <Eyebrow>Our Mission</Eyebrow>
              <p className="font-heading text-foreground mt-4 text-xl leading-snug font-semibold text-balance sm:text-2xl">
                {mission}
              </p>
            </Reveal>
            <EditorialImage
              image={pageImages.missionInPractice}
              className="hidden lg:block"
            />
            <Reveal
              delay={0.06}
              className="border-border bg-surface rounded-xl border p-8 sm:p-10"
            >
              <Eyebrow>Our Vision</Eyebrow>
              <p className="font-heading text-foreground mt-4 text-xl leading-snug font-semibold text-balance sm:text-2xl">
                {vision}
              </p>
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
              description="Integrity, Partnership, Excellence, Responsiveness, and Opportunity."
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

      <FinalCta
        title="Let's Build Something Great Together"
        description="Values only matter if they show up in the work. Talk with us about hiring or your next role."
      />
    </>
  );
}
