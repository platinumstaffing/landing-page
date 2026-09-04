import type { Metadata } from "next";

import { SubmitResumeForm } from "@/components/forms/submit-resume-form";
import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Submit Your Résumé",
  description:
    "Join the Platinum Staffing talent network. Submit your résumé and a recruiter will contact you when a role aligns with your experience.",
};

export default function SubmitResumePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Job Seekers", href: "/job-seekers" },
          { name: "Submit Your Résumé", href: "/job-seekers/submit-resume" },
        ]}
      />
      <EditorialPageHero
        index="04.1"
        eyebrow="Join Our Talent Network"
        title="Submit Your Résumé"
        description={
          <p>
            Don&apos;t see the right opportunity today? Submit your résumé and
            join our growing talent network. Our team reviews submissions and
            will contact you when a role aligns with your experience and career
            goals.
          </p>
        }
        primary={{ label: "Search Jobs", href: "/jobs" }}
        note="Reviewed by a recruiter · Not a black hole"
        banner={{ family: "Job Seekers", page: "Submit Your Résumé" }}
        image={pageImages.resumeSupport}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <SectionHeader
                title="Join Our Talent Network"
                description="Share your experience, preferred industry, and the kind of work you want next. Consent is required so we can contact you about matching roles."
              />
              <div className="mt-8 hidden lg:block">
                <EditorialImage image={pageImages.resumeSupport} />
              </div>
            </div>
            <div className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <SubmitResumeForm />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Ready to Take the Next Step?"
        description="You can also browse current openings while we review your résumé."
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Application Process",
          href: "/job-seekers/application-process",
        }}
      />
    </>
  );
}
