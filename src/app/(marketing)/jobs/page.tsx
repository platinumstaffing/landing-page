import type { Metadata } from "next";
import Link from "next/link";

import { JobCard } from "@/components/jobs/job-card";
import { JobFiltersForm } from "@/components/jobs/job-filters";
import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { filterJobs, type JobFilters } from "@/content/jobs";

export const metadata: Metadata = {
  title: "Search Jobs",
  description:
    "Explore current employment opportunities available through Platinum Staffing & Recruitment across manufacturing, warehouse, logistics, and related industries.",
};

type JobsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const params = await searchParams;
  const filters: JobFilters = {
    q: first(params.q),
    location: first(params.location),
    industry: first(params.industry),
    employmentType: first(params.employmentType),
    shift: first(params.shift),
    workArrangement: first(params.workArrangement),
  };

  const results = filterJobs(filters);
  const hasFilters = Object.values(filters).some(
    (value) => typeof value === "string" && value.length > 0,
  );

  return (
    <>
      <EditorialPageHero
        index="05"
        eyebrow="Search Jobs"
        title="Find an opportunity that moves your career forward."
        description={
          <p>
            Explore current opportunities across manufacturing, warehousing and
            distribution, logistics, administrative support, customer service,
            and light industrial operations.
          </p>
        }
        primary={{
          label: "Join Our Talent Network",
          href: "/job-seekers#submit-resume",
        }}
        note="Current openings · Multiple industries"
        banner={{ family: "Job Seekers", page: "Search Jobs" }}
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-10">
            <aside>
              <JobFiltersForm filters={filters} />
            </aside>

            <div>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="font-heading text-foreground text-2xl font-bold">
                    Current Open Positions
                  </h2>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {results.length}{" "}
                    {results.length === 1 ? "position" : "positions"}
                    {hasFilters ? " matching your search" : " available"}
                  </p>
                </div>
              </div>

              {results.length === 0 ? (
                <div className="border-border bg-surface rounded-xl border p-8 sm:p-10">
                  <h3 className="font-heading text-foreground text-2xl font-bold">
                    New Opportunities Are Coming
                  </h3>
                  <p className="text-muted-foreground mt-3 max-w-2xl">
                    We do not currently have an opportunity that matches your
                    search, but new positions are added as they become available
                    through our employer partners. Join the Platinum Staffing
                    talent network by submitting your résumé and employment
                    preferences.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/job-seekers#submit-resume">
                        Join Our Talent Network
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/jobs">View All Jobs</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <ul className="space-y-4">
                  {results.map((job) => (
                    <li key={job.slug}>
                      <JobCard job={job} />
                    </li>
                  ))}
                </ul>
              )}

              <div className="border-border bg-muted/60 mt-10 rounded-xl border p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-heading text-lg font-bold">
                    Don&apos;t see the right fit?
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Submit your résumé and we&apos;ll contact you when a
                    matching opportunity opens.
                  </p>
                </div>
                <Button asChild className="mt-4 sm:mt-0">
                  <Link href="/job-seekers#submit-resume">
                    Submit Your Résumé
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
