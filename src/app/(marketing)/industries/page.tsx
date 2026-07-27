import type { Metadata } from "next";
import Link from "next/link";

import { BrandGraphic } from "@/components/brand/brand-graphic";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Heading } from "@/components/layout/heading";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Button } from "@/components/ui/button";
import { employerProcess } from "@/content/process";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-focused staffing solutions across manufacturing, warehouse & distribution, logistics, administrative support, customer service, and light industrial.",
};

const benefits = [
  "Industry-focused recruitment",
  "Access to qualified professionals",
  "Faster hiring timelines",
  "Reduced turnover",
  "Customized workforce solutions",
  "Responsive partnership",
];

const commonRoles = [
  "Production Associates",
  "Machine Operators",
  "Assemblers",
  "Forklift Operators",
  "Warehouse Associates",
  "Shipping & Receiving",
  "Inventory Specialists",
  "Customer Service Representatives",
  "Administrative Assistants",
  "Office Coordinators",
  "Operations Supervisors",
  "Maintenance Technicians",
  "Quality Inspectors",
  "Packaging Associates",
  "General Labor Professionals",
];

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow>Industries We Serve</Eyebrow>
            <Heading as="h1" level="h1" className="mt-4">
              Industry Expertise That Delivers Workforce Solutions
            </Heading>
            <Prose size="lg" className="mt-5">
              <p>
                Every industry has its own workforce challenges, hiring demands,
                and operational goals. Platinum Staffing & Recruitment provides
                customized staffing and recruitment solutions designed to help
                organizations build dependable teams, maintain productivity, and
                achieve long-term success.
              </p>
            </Prose>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#industries">Explore Industries</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact#request-talent">Request Talent</Link>
              </Button>
            </div>
          </div>
          <BrandGraphic className="aspect-[4/3] min-h-64" />
        </Container>
      </section>

      <div id="industries">
        <IndustriesGrid
          eyebrow="Industries We Serve"
          title="Select an industry to learn more"
          description="Our recruiters understand the unique hiring needs of each industry we serve, allowing us to connect employers with professionals who are prepared to contribute from day one."
        />
      </div>

      <Section tone="muted">
        <Container>
          <SectionHeader
            title="Why Industry Specialization Matters"
            description="Successful staffing begins with understanding the industry you're hiring for. Every workforce operates differently, and every position requires specific skills, experience, certifications, and workplace expectations."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Our Staffing Process"
        title="From discovery to ongoing support"
        steps={employerProcess}
      />

      <Section tone="muted">
        <Container>
          <SectionHeader
            title="Positions We Frequently Recruit"
            description="A sample of roles we regularly fill across the industries we serve."
          />
          <ul className="mt-8 columns-1 gap-x-10 text-sm text-muted-foreground sm:columns-2 lg:columns-3">
            {commonRoles.map((role) => (
              <li key={role} className="mb-2 break-inside-avoid">
                {role}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta
        title="Need Help Finding the Right Workforce Solution?"
        description="Not sure which staffing solution best fits your organization? Our team is ready to understand your workforce needs and recommend a customized hiring strategy."
      />
    </>
  );
}
