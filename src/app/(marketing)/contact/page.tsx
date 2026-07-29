import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  EnvelopeSimple,
  MapPin,
  Phone,
  User,
} from "@phosphor-icons/react/dist/ssr";

import { GeneralContactForm } from "@/components/forms/general-contact-form";
import { RequestTalentForm } from "@/components/forms/request-talent-form";
import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { LinkCard } from "@/components/layout/link-card";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FaqList } from "@/components/sections/faq-list";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { contactFaqs } from "@/content/faqs";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Platinum Staffing & Recruitment to request talent, ask a question, or begin a consultation about workforce solutions in Pennsylvania.",
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
        primary={{ label: "Request Talent", href: "#request-talent" }}
        secondary={{ label: "Contact Our Team", href: "#message" }}
        note="Two clear paths · One responsive team"
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="How Can We Help?"
            title="Choose the path that fits your needs"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <LinkCard
              href="#request-talent"
              icon={Briefcase}
              title="Employers"
              summary="Looking to hire qualified professionals for your organization."
              cta="Request talent"
            />
            <LinkCard
              href="/job-seekers"
              icon={User}
              title="Job Seekers"
              summary="Looking for employment opportunities or help with an application."
              cta="Visit the Career Center"
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

      <Section tone="muted" id="request-talent">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader
              title="Request Talent"
              description="Tell us about your hiring needs and a Platinum Staffing representative will follow up."
            />
            <div className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <RequestTalentForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="message">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                title="Send Us a Message"
                description="For general questions, partnerships, or website feedback."
              />
              <div className="text-muted-foreground mt-8 space-y-4 text-sm">
                <p className="inline-flex items-start gap-3">
                  <MapPin className="text-primary mt-0.5 size-5" aria-hidden />
                  <span>
                    <strong className="font-heading text-foreground block">
                      Service Area
                    </strong>
                    {siteConfig.address.display}
                    <span className="mt-1 block text-xs">
                      Full office address pending client confirmation.
                    </span>
                  </span>
                </p>
                <p className="inline-flex items-start gap-3">
                  <Phone className="text-primary mt-0.5 size-5" aria-hidden />
                  <span>
                    <strong className="font-heading text-foreground block">
                      Phone
                    </strong>
                    Pending confirmation
                  </span>
                </p>
                <p className="inline-flex items-start gap-3">
                  <EnvelopeSimple
                    className="text-primary mt-0.5 size-5"
                    aria-hidden
                  />
                  <span>
                    <strong className="font-heading text-foreground block">
                      Email
                    </strong>
                    Use the form — public inbox pending confirmation
                  </span>
                </p>
              </div>
            </div>
            <div className="border-border bg-surface rounded-xl border p-6 sm:p-8">
              <GeneralContactForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted" id="consultation">
        <Container>
          <SectionHeader
            title="Schedule a Consultation"
            description="Employers interested in discussing workforce solutions can request a consultation with a Platinum Staffing representative. Use the Request Talent form and note your preferred meeting time, or send a general message with “Consultation” as the reason."
          />
          <Button asChild className="mt-6">
            <Link href="#request-talent">Request Consultation</Link>
          </Button>
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
        primary={{ label: "Request Talent", href: "#request-talent" }}
        secondary={{ label: "Search Jobs", href: "/jobs" }}
      />
    </>
  );
}
