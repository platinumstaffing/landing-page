import type { Metadata } from "next";
import {
  Briefcase,
  Buildings,
  CalendarBlank,
  EnvelopeSimple,
  User,
} from "@phosphor-icons/react/dist/ssr";

import { GeneralContactForm } from "@/components/forms/general-contact-form";
import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { LinkCard } from "@/components/layout/link-card";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FaqList } from "@/components/sections/faq-list";
import { FinalCta } from "@/components/sections/final-cta";
import { contactFaqs } from "@/content/faqs";
import { pageImages, reusedPageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Platinum Staffing & Recruitment to request talent, ask a question, or begin a consultation about workforce solutions.",
};

export default function ContactPage() {
  return (
    <>
      <EditorialPageHero
        index="06"
        eyebrow="Contact"
        title="Let’s build your workforce—or advance your career."
        description={
          <p>
            Tell us what you need. Employers can start a hiring conversation,
            while job seekers can ask about opportunities, applications, or
            career support.
          </p>
        }
        primary={{
          label: "Request Talent",
          href: "/employers/request-talent",
        }}
        secondary={{ label: "Contact Our Team", href: "#message" }}
        note="Two clear paths · One responsive team"
        banner={{ family: "Contact", page: "Get in Touch" }}
        image={pageImages.contactHero}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="How Can We Help?"
            title="Choose the path that fits your needs"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <LinkCard
              href="/employers/request-talent"
              icon={Briefcase}
              title="Request Talent"
              summary="Looking to hire qualified professionals for your organization."
              cta="Request talent"
            />
            <LinkCard
              href="/contact/schedule-consultation"
              icon={CalendarBlank}
              title="Schedule a Consultation"
              summary="Walk through hiring needs, staffing strategy, and available services with a representative."
              cta="Request a consultation"
            />
            <LinkCard
              href="/job-seekers"
              icon={User}
              title="Job Seekers"
              summary="Looking for employment opportunities or help with an application."
              cta="Visit the Career Center"
            />
            <LinkCard
              href="/contact/office-information"
              icon={Buildings}
              title="Office Information"
              summary="Service area, hours, and how to reach Platinum Staffing while a street address is confirmed."
              cta="View office information"
            />
            <LinkCard
              href="#message"
              icon={EnvelopeSimple}
              title="General Inquiry"
              summary="Questions about Platinum Staffing & Recruitment or our services."
              cta="Send a message"
            />
          </div>
        </Container>
      </Section>

      <Section id="message" tone="muted">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <SectionHeader
                title="Send Us a Message"
                description="For general questions, partnerships, or website feedback."
              />
              <div className="mt-8 hidden lg:block">
                <EditorialImage
                  image={reusedPageImages.candidateConversation}
                />
              </div>
            </div>
            <div className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <GeneralContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-8">
            <FaqList items={contactFaqs} />
          </div>
        </Container>
      </Section>

      <FinalCta
        title="We're Here to Help"
        description="Partner with Platinum Staffing & Recruitment for workforce solutions that drive results."
        primary={{
          label: "Request Talent",
          href: "/employers/request-talent",
        }}
        secondary={{ label: "Search Jobs", href: "/jobs" }}
      />
    </>
  );
}
