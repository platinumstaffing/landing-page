import type { Metadata } from "next";
import {
  Briefcase,
  ChartBar,
  GraduationCap,
  Newspaper,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { LinkCard } from "@/components/layout/link-card";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { pageImages, reusedPageImages } from "@/content/page-images";
import { resourceCategories } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The Platinum Staffing Resource Center — workforce insights, industry reports, employer guides, career advice, and company news for employers and job seekers.",
};

const categoryIcons: Record<string, Icon> = {
  insights: TrendUp,
  reports: ChartBar,
  employer: Briefcase,
  career: GraduationCap,
  news: Newspaper,
};

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
              Articles and reports are in progress; each category page already
              frames the topics we will cover.
            </p>
          </>
        }
        primary={{
          label: "Employer resources",
          href: "/resources/employer-resources",
        }}
        secondary={{
          label: "Career advice",
          href: "/resources/career-advice",
        }}
        note="Guides in progress · Honest by design"
        banner={{ family: "Resources", page: "Resource Center" }}
        image={pageImages.resourcesHero}
      />

      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Browse by Topic"
              title="Resource Categories"
              description="Each category has its own page. Articles will appear there as they are published — never as invented placeholders."
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category, index) => (
              <Reveal as="li" key={category.id} delay={index * 0.04}>
                <LinkCard
                  href={category.href}
                  icon={categoryIcons[category.id]}
                  title={category.name}
                  summary={category.description}
                  cta={`Open ${category.name}`}
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <Reveal>
              <EditorialImage image={reusedPageImages.resourceDesk} />
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeader
                eyebrow="In the Meantime"
                title="Resources available right now"
                description="While the article library is being built, these pages already help employers and job seekers take the next step."
              />
            </Reveal>
          </div>
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

      <FinalCta
        title="Ready to Take the Next Step?"
        description="Whether you're hiring or exploring your next opportunity, Platinum Staffing & Recruitment is ready to help."
        primary={{
          label: "Request Talent",
          href: "/employers/request-talent",
        }}
        secondary={{ label: "Search Jobs", href: "/jobs" }}
      />
    </>
  );
}
