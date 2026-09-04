import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { CareerPathway } from "@/components/sections/career-pathway";
import { FinalCta } from "@/components/sections/final-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { careersIntro } from "@/content/about";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Careers at Platinum",
  description:
    "Grow your career with Platinum Staffing & Recruitment. Search open positions or submit your résumé to join the talent network.",
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Careers at Platinum", href: "/about/careers" },
        ]}
      />
      <EditorialPageHero
        index="01.5"
        eyebrow="Careers at Platinum"
        title="Grow your career with Platinum"
        description={
          <p>
            Whether you&apos;re entering the workforce, seeking a new
            opportunity, or advancing your career, we are committed to helping
            you succeed.
          </p>
        }
        primary={{ label: "Search Open Positions", href: "/jobs" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "/job-seekers/submit-resume",
        }}
        note="Open roles · Talent network"
        banner={{ family: "About", page: "Careers at Platinum" }}
        image={pageImages.jobSeekersHero}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeader
              eyebrow="For professionals"
              title="Opportunities across the industries we staff"
            />
            <div>
              <Prose size="lg">
                {careersIntro.map((paragraph) => (
                  <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                ))}
              </Prose>
              <p className="border-border bg-muted text-muted-foreground mt-6 rounded-lg border px-4 py-3 text-sm">
                Internal openings at Platinum Staffing will be listed here as
                they are confirmed. Current client roles are on the Search Jobs
                page.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/jobs">Search Open Positions</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/job-seekers/submit-resume">
                    Submit Your Résumé
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CareerPathway />

      <FinalCta
        title="Ready to take the next step?"
        description="Search current openings or join the talent network so a recruiter can consider you for future roles."
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "/job-seekers/submit-resume",
        }}
      />
    </>
  );
}
