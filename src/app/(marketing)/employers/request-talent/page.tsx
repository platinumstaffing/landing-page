import type { Metadata } from "next";

import { RequestTalentForm } from "@/components/forms/request-talent-form";
import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Request Talent",
  description:
    "Request talent from Platinum Staffing & Recruitment. Tell us about the roles, volume, and timeline so we can recommend the right staffing approach.",
};

type RequestTalentPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function RequestTalentPage({
  searchParams,
}: RequestTalentPageProps) {
  const params = await searchParams;
  const defaultService = first(params.service);
  const defaultIndustry = first(params.industry);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Employer Solutions", href: "/employers" },
          { name: "Request Talent", href: "/employers/request-talent" },
        ]}
      />
      <EditorialPageHero
        index="02.7"
        eyebrow="Request Talent"
        title="Tell us what the work requires."
        description={
          <p>
            Share the roles, volume, timeline, and industry. Selecting a
            staffing service helps us categorize the inquiry correctly so a
            representative can follow up with the right next step.
          </p>
        }
        secondary={{
          label: "Schedule a Consultation",
          href: "/contact/schedule-consultation",
        }}
        note="Employer path · One accountable follow-up"
        banner={{ family: "Employer Solutions", page: "Request Talent" }}
        image={pageImages.employerConversation}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <SectionHeader
                title="Request Talent"
                description="A Platinum Staffing representative will review the details and follow up. If you already know the service model, it will arrive pre-selected."
              />
              <div className="mt-8 hidden lg:block">
                <EditorialImage image={pageImages.employerConversation} />
              </div>
            </div>
            <div className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <RequestTalentForm
                defaultService={defaultService}
                defaultIndustry={defaultIndustry}
              />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Prefer to talk it through first?"
        description="Schedule a consultation if you would rather walk through hiring needs before submitting a full talent request."
        primary={{
          label: "Schedule a Consultation",
          href: "/contact/schedule-consultation",
        }}
        secondary={{ label: "Explore solutions", href: "/employers" }}
      />
    </>
  );
}
