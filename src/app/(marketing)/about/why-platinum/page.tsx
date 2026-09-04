import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { PillarGrid } from "@/components/sections/pillar-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { whyPlatinumIntro, whyPlatinumPillars } from "@/content/about";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Why Platinum",
  description:
    "Employers choose Platinum Staffing because we understand the business before recommending a staffing solution — then stay accountable after placement.",
};

export default function WhyPlatinumPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Why Platinum", href: "/about/why-platinum" },
        ]}
      />
      <EditorialPageHero
        index="01.4"
        eyebrow="Why Platinum"
        title="Why employers choose Platinum Staffing & Recruitment"
        description={
          <p>
            We take the time to understand the business, workforce goals, and
            hiring challenges before recommending a staffing solution.
          </p>
        }
        primary={{
          label: "Request Talent",
          href: "/employers/request-talent",
        }}
        secondary={{ label: "Explore solutions", href: "/employers" }}
        note="Industry knowledge · Lasting partnership"
        banner={{ family: "About", page: "Why Platinum" }}
        image={pageImages.valuesOnTheFloor}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <EditorialImage image={pageImages.valuesOnTheFloor} />
            <Prose size="lg">
              {whyPlatinumIntro.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </Prose>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <PillarGrid pillars={whyPlatinumPillars} />
        </Container>
      </Section>

      <FinalCta
        title="Ready to see the difference?"
        description="Tell us about the roles, volume, and timeline. We will recommend a staffing approach that fits the work."
        primary={{
          label: "Request Talent",
          href: "/employers/request-talent",
        }}
        secondary={{
          label: "Schedule a Consultation",
          href: "/contact/schedule-consultation",
        }}
      />
    </>
  );
}
