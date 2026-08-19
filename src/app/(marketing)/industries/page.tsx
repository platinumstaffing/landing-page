import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
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

export default function IndustriesPage() {
  return (
    <>
      <EditorialPageHero
        index="03"
        eyebrow="Industries We Serve"
        title="Industry expertise that moves work forward."
        description={
          <p>
            Each sector has its own demands, pace, and operational realities. We
            shape staffing solutions around those differences so employers can
            build dependable teams and maintain productivity.
          </p>
        }
        primary={{ label: "Explore Industries", href: "#industries" }}
        secondary={{ label: "Request Talent", href: "/contact#request-talent" }}
        note="Six sectors · One accountable partner"
        banner={{ family: "Industries", page: "Overview" }}
      />

      <div id="industries">
        <IndustriesGrid
          eyebrow="Industries We Serve"
          title="Select an industry to learn more"
          description="Each industry opens a dedicated landing page with tailored challenges, positions, hiring solutions, and a Request Talent path."
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
                className="border-border bg-surface text-foreground rounded-lg border px-4 py-3 text-sm font-medium"
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

      <FinalCta
        title="Need Help Finding the Right Workforce Solution?"
        description="Not sure which staffing solution best fits your organization? Our team is ready to understand your workforce needs and recommend a customized hiring strategy."
      />
    </>
  );
}
