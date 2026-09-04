import Link from "next/link";
import { MapPin, Clock, Briefcase } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { industryLabel, type Job } from "@/content/jobs";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="border-border bg-surface rounded-xl border p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
            {industryLabel(job.industry)}
          </p>
          <h3 className="font-heading text-foreground mt-2 text-xl font-bold">
            {job.title}
          </h3>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            {job.summary}
          </p>
          <ul className="text-foreground/80 mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="text-primary size-4" aria-hidden />
              {job.location.city}, {job.location.state}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Briefcase className="text-primary size-4" aria-hidden />
              {job.employmentType}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Clock className="text-primary size-4" aria-hidden />
              {job.shift}
            </li>
            {job.payRange ? <li>{job.payRange}</li> : null}
          </ul>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <Button asChild size="sm">
            <Link href="/job-seekers/submit-resume">Apply Now</Link>
          </Button>
          <p className="text-muted-foreground text-xs">
            Ref. {job.referenceNumber}
          </p>
        </div>
      </div>
    </article>
  );
}
