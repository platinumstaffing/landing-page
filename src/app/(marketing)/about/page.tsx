import type { Metadata } from "next";
import {
  Briefcase,
  Flag,
  Handshake,
  Path,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { LinkCard } from "@/components/layout/link-card";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { WhyEmployers } from "@/components/sections/why-employers";
import { WorkforceImpact } from "@/components/sections/workforce-impact";
import { Reveal } from "@/components/motion/reveal";
import { aboutPages } from "@/content/about";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Platinum Staffing & Recruitment — our story, mission, vision, core values, and commitment to employers and job seekers since 2019.",
};

const pageIcons: Record<(typeof aboutPages)[number]["slug"], Icon> = {
  "our-story": Path,
  "mission-vision-values": Flag,
  leadership: UsersThree,
  "why-platinum": Handshake,
  careers: Briefcase,
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
              We partner with employers to solve workforce challenges,
              strengthen operations, and support long-term success.
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
        note="Established 2019 · Growing with employers"
        banner={{ family: "About", page: "Overview" }}
        image={pageImages.aboutHero}
      />

      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Inside Platinum"
              title="Five ways to know the firm"
              description="Each topic has its own page. Start with the story, then move into values, leadership, the employer case, or careers."
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPages.map((page, index) => (
              <Reveal as="li" key={page.slug} delay={index * 0.04}>
                <LinkCard
                  href={page.href}
                  icon={pageIcons[page.slug]}
                  title={page.label}
                  summary={page.summary}
                  cta={`Read ${page.label}`}
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <WorkforceImpact />

      <WhyEmployers />

      <FinalCta
        title="Let's Build Something Great Together"
        description="Whether you're looking for dependable workforce solutions or your next career opportunity, Platinum Staffing & Recruitment is ready to help you build stronger businesses, meaningful careers, and lasting partnerships."
        primary={{ label: "Request Talent", href: "/employers/request-talent" }}
        secondary={{ label: "Find Jobs", href: "/jobs" }}
      />
    </>
  );
}
