import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ChartBar,
  GraduationCap,
  Newspaper,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Heading } from "@/components/layout/heading";
import { LinkCard } from "@/components/layout/link-card";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { resourceCategories } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The Platinum Staffing Resource Center — workforce insights, industry reports, employer guides, career advice, and company news for employers and job seekers.",
};

const categoryIcons = {
  insights: TrendUp,
  reports: ChartBar,
  employer: Briefcase,
  career: GraduationCap,
  news: Newspaper,
} as const;

export default function ResourcesPage() {
  return (
    <>
      <EditorialPageHero
        index="07"
        eyebrow="Resource Center"
        title="Workforce knowledge for better decisions."
        description={
          <>
            <p>
              Practical information for employers and job seekers—designed to
              support stronger workforce strategies and career development.
            </p>
            <p>
              Articles and reports are in progress; the pathways already
              available are clearly marked below.
            </p>
          </>
        }
        primary={{ label: "Employer resources", href: "#employer" }}
        secondary={{ label: "Career advice", href: "#career" }}
        note="Guides in progress · Honest by design"
        banner={{ family: "Resources", page: "Resource Center" }}
      />

      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Browse by Topic"
              title="Resource Categories"
              description="We're preparing articles, reports, and guides for each category below. Explore what's coming, and reach out any time if there's something specific you need."
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category, index) => {
              const Icon =
                categoryIcons[category.id as keyof typeof categoryIcons];
              return (
                <Reveal as="li" key={category.id} delay={index * 0.04}>
                  <article
                    id={category.id}
                    className="border-border bg-surface flex h-full scroll-mt-28 flex-col rounded-xl border p-6 sm:p-7"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Icon className="text-primary size-6" aria-hidden />
                      <span className="border-border text-muted-foreground rounded-full border px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide uppercase">
                        {category.audience}
                      </span>
                    </div>
                    <h3 className="font-heading text-foreground mt-4 text-lg font-bold">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <span className="text-primary/70 mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                      <span
                        aria-hidden
                        className="bg-primary/60 size-1.5 rounded-full"
                      />
                      Articles in progress
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="In the Meantime"
              title="Resources available right now"
              description="While the article library is being built, these pages already help employers and job seekers take the next step."
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal as="li">
              <LinkCard
                href="/employers"
                icon={Briefcase}
                title="Employer Solutions"
                summary="Compare temporary, temp-to-hire, direct hire, seasonal, high-volume, and workforce planning options."
                cta="View employer solutions"
              />
            </Reveal>
            <Reveal as="li" delay={0.05}>
              <LinkCard
                href="/job-seekers"
                icon={GraduationCap}
                title="Career Center"
                summary="Search jobs, submit your résumé, and see what to expect from the Platinum application process."
                cta="Visit the Career Center"
              />
            </Reveal>
            <Reveal as="li" delay={0.1}>
              <LinkCard
                href="/industries"
                icon={ChartBar}
                title="Industries We Serve"
                summary="See how our staffing solutions support each sector, from manufacturing to customer service."
                cta="Explore industries"
              />
            </Reveal>
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="border-border bg-surface flex flex-col gap-6 rounded-xl border p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Stay Informed</Eyebrow>
              <Heading level="h2" className="mt-3">
                Be the first to know when new resources launch
              </Heading>
              <Prose className="mt-3">
                <p>
                  Contact our team to receive workforce insights, hiring
                  updates, career advice, and Platinum Staffing news as new
                  resources become available.
                </p>
              </Prose>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/contact#message">Contact our team</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Ready to Take the Next Step?"
        description="Whether you're hiring or exploring your next opportunity, Platinum Staffing & Recruitment is ready to help."
        primary={{ label: "Request Talent", href: "/contact#request-talent" }}
        secondary={{ label: "Search Jobs", href: "/jobs" }}
      />
    </>
  );
}
