import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { careerResourceTopics } from "@/content/job-seekers";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Career Resources",
  description:
    "Resources to help you succeed — résumé writing, interview preparation, workplace success, career planning, and more from Platinum Staffing.",
};

export default function CareerResourcesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Job Seekers", href: "/job-seekers" },
          { name: "Career Resources", href: "/job-seekers/career-resources" },
        ]}
      />
      <EditorialPageHero
        index="04.3"
        eyebrow="Career Resources"
        title="Resources to Help You Succeed"
        description={
          <p>
            Practical guidance for résumés, interviews, workplace success, and
            career planning — written to help you prepare, apply, and grow.
          </p>
        }
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Career Advice library",
          href: "/resources/career-advice",
        }}
        note="Preparation · Application · Growth"
        banner={{ family: "Job Seekers", page: "Career Resources" }}
        image={pageImages.careerCenter}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <EditorialImage image={pageImages.careerCenter} />
            <div>
              <SectionHeader
                title="Topics we cover with candidates"
                description="Longer articles will live in Career Advice as they are published. These are the subjects recruiters already walk through with job seekers."
              />
            </div>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {careerResourceTopics.map((topic, index) => (
              <Reveal as="li" key={topic.name} delay={index * 0.04}>
                <article className="border-border border-t pt-5">
                  <span className="font-heading text-primary text-sm font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-foreground mt-3 text-lg font-bold">
                    {topic.name}
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-10">
            <Link href="/resources/career-advice">
              View Career Advice articles
            </Link>
          </Button>
        </Container>
      </Section>

      <FinalCta
        title="Ready to Take the Next Step?"
        description="Search openings or submit your résumé so a recruiter can help you apply what you prepare."
        primary={{ label: "Search Jobs", href: "/jobs" }}
        secondary={{
          label: "Submit Your Résumé",
          href: "/job-seekers/submit-resume",
        }}
      />
    </>
  );
}
