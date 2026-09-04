import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { ProcessSteps } from "@/components/sections/process-steps";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { jobSeekerBenefits } from "@/content/job-seekers";
import { pageImages } from "@/content/page-images";
import { candidateProcess } from "@/content/process";

export const metadata: Metadata = {
  title: "Application Process",
  description:
    "What to expect when you apply with Platinum Staffing & Recruitment — from search or résumé submission through placement and support.",
};

export default function ApplicationProcessPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Job Seekers", href: "/job-seekers" },
          {
            name: "Application Process",
            href: "/job-seekers/application-process",
          },
        ]}
      />
      <EditorialPageHero
        index="04.2"
        eyebrow="Application Process"
        title="What to Expect"
        description={
          <p>
            Five clear steps from search or résumé submission through placement
            support. A recruiter stays with you so the process is never a
            mystery.
          </p>
        }
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "/job-seekers/submit-resume",
        }}
        note="Five steps · Recruiter support"
        banner={{ family: "Job Seekers", page: "Application Process" }}
        image={pageImages.applicationProcess}
      />

      <Section>
        <Container>
          <EditorialImage image={pageImages.applicationProcess} />
        </Container>
      </Section>

      <ProcessSteps
        tone="muted"
        eyebrow="Application Process"
        title="What to Expect"
        steps={candidateProcess}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Why Work With Platinum"
            title="More Than a Staffing Agency"
            description="We are committed to helping talented professionals find meaningful employment with organizations that value their skills and contributions."
          />
          <ul className="mt-10 grid gap-x-10 gap-y-1 sm:grid-cols-2">
            {jobSeekerBenefits.map((benefit) => (
              <li
                key={benefit}
                className="border-border/70 text-foreground flex items-start gap-3 border-b py-3.5 text-sm font-medium"
              >
                <Check
                  className="text-primary mt-0.5 size-4 shrink-0"
                  weight="bold"
                  aria-hidden
                />
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta
        title="Ready to Take the Next Step?"
        description="Search current openings or join the talent network."
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "/job-seekers/submit-resume",
        }}
      />
    </>
  );
}
