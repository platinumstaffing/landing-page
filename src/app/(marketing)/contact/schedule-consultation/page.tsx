import type { Metadata } from "next";

import { ConsultationForm } from "@/components/forms/consultation-form";
import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { pageImages, reusedPageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description:
    "Request a consultation with Platinum Staffing & Recruitment to review hiring needs, staffing strategies, and available services.",
};

export default function ScheduleConsultationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
          {
            name: "Schedule a Consultation",
            href: "/contact/schedule-consultation",
          },
        ]}
      />
      <EditorialPageHero
        index="06.1"
        eyebrow="Schedule a Consultation"
        title="Review hiring needs with a representative."
        description={
          <p>
            Employers interested in discussing workforce solutions can request a
            consultation to review hiring needs, staffing strategies, and
            available services.
          </p>
        }
        primary={{
          label: "Request Talent",
          href: "/employers/request-talent",
        }}
        note="Phone · Virtual · In person"
        banner={{ family: "Contact", page: "Schedule a Consultation" }}
        image={pageImages.contactHero}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <SectionHeader
                title="Request Consultation"
                description="Share a preferred date, time, and meeting format. We will confirm a time during business hours."
              />
              <div className="mt-8 hidden lg:block">
                <EditorialImage
                  image={reusedPageImages.serviceAreaOperations}
                />
              </div>
            </div>
            <div className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Ready to request talent instead?"
        description="If you already know the roles and volume, the Request Talent form is the faster path."
        primary={{
          label: "Request Talent",
          href: "/employers/request-talent",
        }}
        secondary={{ label: "Back to Contact", href: "/contact" }}
      />
    </>
  );
}
