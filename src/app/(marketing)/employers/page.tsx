import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FaqList } from "@/components/sections/faq-list";
import { FinalCta } from "@/components/sections/final-cta";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { PillarGrid } from "@/components/sections/pillar-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { Button } from "@/components/ui/button";
import { employerFaqs } from "@/content/faqs";
import { employerProcess } from "@/content/process";
import { employerPillars, solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Employer Solutions",
  description:
    "Flexible staffing and recruitment solutions for Pennsylvania employers — temporary, temp-to-hire, direct hire, seasonal, high-volume, and workforce planning.",
};

export default function EmployersPage() {
  return (
    <>
      <EditorialPageHero
        index="02"
        eyebrow="Employer Solutions"
        title="Workforce solutions designed around your business."
        description={
          <p>
            No two hiring needs are the same. We build flexible staffing and
            recruitment solutions that help organizations respond to demand,
            hire with confidence, and build dependable teams.
          </p>
        }
        primary={{ label: "Request Talent", href: "/contact#request-talent" }}
        secondary={{
          label: "Schedule a Consultation",
          href: "/contact#consultation",
        }}
        note="Employer-first · Built for operational reality"
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Overview"
            title="Flexible Staffing Solutions for Every Hiring Need"
            description="Platinum Staffing offers a comprehensive range of staffing and recruitment services tailored to organizations of all sizes. Whether your hiring needs are temporary, permanent, seasonal, or project-based, we partner with your organization to develop a workforce solution that supports operational success."
          />
        </Container>
      </Section>

      <SolutionsGrid tone="muted" showIds />

      <Section>
        <Container>
          <SectionHeader
            title="Our Staffing Solutions in Detail"
            description="Select a solution below to understand how it supports your hiring goals. Dedicated service pages are coming next."
          />
          <div className="mt-10 space-y-8">
            {solutions.map((solution) => (
              <article
                key={solution.slug}
                id={solution.slug}
                className="scroll-mt-28 rounded-xl border border-border bg-surface p-6 sm:p-8"
              >
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {solution.name}
                </h3>
                <p className="mt-3 max-w-3xl text-muted-foreground">
                  {solution.summary}
                </p>
                <Button asChild variant="link" className="mt-4 px-0">
                  <Link href="/contact#request-talent">
                    Request {solution.name}
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <ProcessSteps
        steps={employerProcess}
        tone="muted"
        description="This section demonstrates Platinum Staffing’s structured and partnership-focused approach."
      />

      <IndustriesGrid
        eyebrow="Industries We Support"
        title="Industry Expertise That Delivers Results"
        description="Our staffing solutions support employers across a wide range of industries. We understand the workforce demands, operational challenges, and hiring expectations unique to each sector."
        tone="default"
      />

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Why Partner With Platinum"
            title="Why Businesses Choose Platinum Staffing"
          />
          <PillarGrid pillars={employerPillars} className="mt-10" />
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <SectionHeader
            title="Frequently Asked Questions"
            description="Answers to common questions from employers evaluating a staffing partnership."
          />
          <div className="mt-8">
            <FaqList items={employerFaqs} />
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Let's Build Your Workforce Together"
        description="Whether you're hiring one employee or building an entire team, Platinum Staffing & Recruitment is ready to deliver workforce solutions tailored to your organization's needs."
      />
    </>
  );
}
