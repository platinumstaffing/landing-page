import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Heading } from "@/components/layout/heading";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { ourStory } from "@/content/about";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Platinum Staffing & Recruitment was founded to connect exceptional talent with outstanding employers — and to be the workforce partner businesses actually need.",
};

export default function OurStoryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Our Story", href: "/about/our-story" },
        ]}
      />
      <EditorialPageHero
        index="01.1"
        eyebrow="Our Story"
        title="Our Journey"
        description={
          <p>
            Platinum Staffing & Recruitment was founded with a simple mission:
            to connect exceptional talent with outstanding employers.
          </p>
        }
        primary={{ label: "Explore our services", href: "/employers" }}
        secondary={{ label: "Why Platinum", href: "/about/why-platinum" }}
        note="Founded 2019 · Partnership first"
        banner={{ family: "About", page: "Our Story" }}
        image={pageImages.companyJourney}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <Eyebrow>From day one</Eyebrow>
                <Heading level="h2" className="mt-3">
                  A partnership-first approach
                </Heading>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <Prose size="lg" className="max-w-2xl">
                {ourStory.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </Prose>
              <Button asChild variant="outline" className="mt-8">
                <Link href="/about/mission-vision-values">
                  Mission, vision, and values
                </Link>
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <EditorialImage image={pageImages.companyJourney} />
            <div>
              <Eyebrow>Continuity</Eyebrow>
              <Heading level="h2" className="mt-3">
                The work is still the same
              </Heading>
              <Prose className="mt-5">
                <p>
                  Employers still need a partner who understands hiring
                  challenges, responds quickly, and consistently delivers
                  qualified professionals. That is the standard we set in 2019,
                  and it is the standard we hold now — across the tri-state
                  region and across the industries we staff.
                </p>
              </Prose>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Let's Build Something Great Together"
        description="Whether you're hiring or looking for your next role, Platinum Staffing is ready to help."
        primary={{ label: "Request Talent", href: "/employers/request-talent" }}
        secondary={{ label: "Find Jobs", href: "/jobs" }}
      />
    </>
  );
}
