import type { Metadata } from "next";
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { reusedPageImages } from "@/content/page-images";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Office Information",
  description:
    "Service area, hours, and contact pathways for Platinum Staffing & Recruitment across the tri-state region.",
};

export default function OfficeInformationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
          { name: "Office Information", href: "/contact/office-information" },
        ]}
      />
      <EditorialPageHero
        index="06.2"
        eyebrow="Office Information"
        title="How and where to reach us."
        description={
          <p>
            Platinum Staffing & Recruitment partners with employers and
            professionals across {siteConfig.region}. A public street address
            will be published here once it is confirmed.
          </p>
        }
        primary={{ label: "Send a message", href: "/contact#message" }}
        secondary={{
          label: "Schedule a Consultation",
          href: "/contact/schedule-consultation",
        }}
        note={`${siteConfig.regionLabel} · Hours pending confirmation`}
        banner={{ family: "Contact", page: "Office Information" }}
        image={reusedPageImages.serviceAreaOperations}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Get in Touch"
            title="Service area, hours, and contact paths"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            <li className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <MapPin className="text-primary size-5" aria-hidden />
              <h2 className="font-heading text-foreground mt-4 text-lg font-bold">
                Service Area
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {siteConfig.address.display}
              </p>
              <p className="text-muted-foreground mt-3 text-xs">
                Full office address pending client confirmation. A map embed
                will be added when the location is verified.
              </p>
            </li>
            <li className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <Clock className="text-primary size-5" aria-hidden />
              <h2 className="font-heading text-foreground mt-4 text-lg font-bold">
                Business Hours
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {siteConfig.hours.weekdays}
                <span className="mt-1 block">{siteConfig.hours.weekend}</span>
              </p>
              <p className="text-muted-foreground mt-3 text-xs">
                {siteConfig.hours.note}
              </p>
            </li>
            <li className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <Phone className="text-primary size-5" aria-hidden />
              <h2 className="font-heading text-foreground mt-4 text-lg font-bold">
                Phone
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Pending confirmation
              </p>
            </li>
            <li className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <EnvelopeSimple className="text-primary size-5" aria-hidden />
              <h2 className="font-heading text-foreground mt-4 text-lg font-bold">
                Email
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Use the contact form — a public inbox will be published once
                confirmed.
              </p>
            </li>
          </ul>
        </Container>
      </Section>

      <FinalCta
        title="We're Here to Help"
        description="Reach the team through Request Talent, a consultation, or a general message while office details are confirmed."
        primary={{
          label: "Request Talent",
          href: "/employers/request-talent",
        }}
        secondary={{ label: "Send a message", href: "/contact#message" }}
      />
    </>
  );
}
