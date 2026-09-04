import type { Metadata } from "next";
import {
  ChatCircle,
  FileText,
  ListChecks,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { LinkCard } from "@/components/layout/link-card";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { jobSeekerPages } from "@/content/job-seekers";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Job Seekers",
  description:
    "Find your next opportunity with Platinum Staffing & Recruitment. Search jobs, submit your résumé, and get support throughout the hiring process.",
};

const pageIcons: Record<(typeof jobSeekerPages)[number]["slug"], Icon> = {
  "submit-resume": FileText,
  "application-process": ListChecks,
  "career-resources": ChatCircle,
  faq: MagnifyingGlass,
};

export default function JobSeekersPage() {
  return (
    <>
      <EditorialPageHero
        index="04"
        eyebrow="Job Seekers"
        title="Your next career opportunity starts here."
        description={
          <p>
            Whether you&apos;re looking for temporary work, a long-term career,
            or your next professional challenge, we connect people with
            employers who value their skills, experience, and potential.
          </p>
        }
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "/job-seekers/submit-resume",
        }}
        note="Clear opportunities · Human support"
        tone="muted"
        banner={{ family: "Job Seekers", page: "Career Center" }}
        image={pageImages.jobSeekersHero}
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Career Center"
              title="Helping You Build a Career, Not Just Find a Job"
              description="The Career Center is designed to provide the tools, resources, and opportunities you need to succeed — from job searching and résumé submission to interview preparation and career development."
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal as="li">
              <LinkCard
                href="/jobs"
                icon={MagnifyingGlass}
                title="Search Jobs"
                summary="Browse current openings across manufacturing, warehouse, logistics, administrative support, customer service, and light industrial."
                cta="Search available jobs"
              />
            </Reveal>
            {jobSeekerPages.map((page, index) => (
              <Reveal as="li" key={page.slug} delay={(index + 1) * 0.04}>
                <LinkCard
                  href={page.href}
                  icon={pageIcons[page.slug]}
                  title={page.label}
                  summary={page.summary}
                  cta={`Open ${page.label}`}
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta
        title="Ready to Take the Next Step?"
        description="Whether you're looking for your first opportunity, a career change, or your next professional challenge, Platinum Staffing & Recruitment is here to help you achieve your goals."
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "/job-seekers/submit-resume",
        }}
      />
    </>
  );
}
