import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { FaqList } from "@/components/sections/faq-list";
import { FinalCta } from "@/components/sections/final-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { candidateFaqs } from "@/content/faqs";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Job Seeker FAQs",
  description:
    "Frequently asked questions for job seekers working with Platinum Staffing & Recruitment — applying, interviews, timelines, and the talent network.",
};

export default function JobSeekerFaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Job Seekers", href: "/job-seekers" },
          { name: "Frequently Asked Questions", href: "/job-seekers/faq" },
        ]}
      />
      <EditorialPageHero
        index="04.4"
        eyebrow="Frequently Asked Questions"
        title="Common questions from job seekers"
        description={
          <p>
            How to apply, what to bring, how long the process takes, and whether
            you can apply to more than one role. If yours is not listed, contact
            our team.
          </p>
        }
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
        note="Straight answers · Recruiter follow-up"
        banner={{ family: "Job Seekers", page: "FAQs" }}
        image={pageImages.recruiterSupport}
      />

      <Section>
        <Container narrow>
          <div className="mt-2">
            <FaqList items={candidateFaqs} />
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Still have a question?"
        description="Send a message and a recruiter will follow up during business hours."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "/job-seekers/submit-resume",
        }}
      />
    </>
  );
}
