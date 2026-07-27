import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "@phosphor-icons/react/dist/ssr";

import { BrandGraphic } from "@/components/brand/brand-graphic";
import { SubmitResumeForm } from "@/components/forms/submit-resume-form";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Heading } from "@/components/layout/heading";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FaqList } from "@/components/sections/faq-list";
import { FinalCta } from "@/components/sections/final-cta";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Button } from "@/components/ui/button";
import { candidateFaqs } from "@/content/faqs";
import { candidateProcess } from "@/content/process";

export const metadata: Metadata = {
  title: "Job Seekers",
  description:
    "Find your next opportunity with Platinum Staffing & Recruitment. Search jobs, submit your résumé, and get support throughout the hiring process.",
};

const benefits = [
  "Access to diverse job opportunities",
  "Professional career guidance",
  "Personalized recruiter support",
  "Temporary and permanent opportunities",
  "Career growth opportunities",
  "A trusted workforce partner",
];

export default function JobSeekersPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow>Job Seekers</Eyebrow>
            <Heading as="h1" level="h1" className="mt-4">
              Your Next Career Opportunity Starts Here
            </Heading>
            <Prose size="lg" className="mt-5">
              <p>
                At Platinum Staffing & Recruitment, we believe meaningful careers
                begin with the right opportunity. Whether you&apos;re searching
                for temporary work, a long-term career, or your next professional
                challenge, we&apos;re committed to connecting talented individuals
                with employers who value their skills, experience, and potential.
              </p>
            </Prose>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/jobs">Search Jobs</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#submit-resume">Submit Your Résumé</Link>
              </Button>
            </div>
          </div>
          <BrandGraphic className="aspect-4/3 min-h-64" />
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Career Center"
            title="Helping You Build a Career, Not Just Find a Job"
            description="Our Career Center is designed to provide the tools, resources, and opportunities you need to succeed — from job searching and résumé submission to interview preparation and career development."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/jobs">Search Open Jobs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#submit-resume">Submit Your Résumé</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#process">Application Process</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#faq">Frequently Asked Questions</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <div id="process">
        <ProcessSteps
          tone="muted"
          eyebrow="Application Process"
          title="What to Expect"
          steps={candidateProcess}
        />
      </div>

      <Section id="submit-resume">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Join Our Talent Network"
              title="Submit Your Résumé"
              description="Don't see the right opportunity today? Submit your résumé and join our growing talent network. Our recruiters will review your qualifications and contact you when opportunities become available that match your experience and career goals."
            />
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <SubmitResumeForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Why Work With Platinum"
            title="More Than a Staffing Agency"
            description="We are committed to helping talented professionals find meaningful employment with organizations that value their skills and contributions."
          />
          <ul className="mt-10 grid gap-x-10 gap-y-1 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 border-b border-border/70 py-3.5 text-sm font-medium text-foreground"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  weight="bold"
                  aria-hidden
                />
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="faq">
        <Container narrow>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-8">
            <FaqList items={candidateFaqs} />
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Ready to Take the Next Step?"
        description="Whether you're looking for your first opportunity, a career change, or your next professional challenge, Platinum Staffing & Recruitment is here to help you achieve your goals."
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "#submit-resume",
        }}
      />
    </>
  );
}
