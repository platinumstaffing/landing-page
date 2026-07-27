import Link from "next/link";
import { MapPin, Clock, Briefcase } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { industryLabel, type Job } from "@/content/jobs";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            {industryLabel(job.industry)}
          </p>
          <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
            {job.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {job.summary}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/80">
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" aria-hidden />
              {job.location.city}, {job.location.state}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Briefcase className="size-4 text-primary" aria-hidden />
              {job.employmentType}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Clock className="size-4 text-primary" aria-hidden />
              {job.shift}
            </li>
            {job.payRange ? <li>{job.payRange}</li> : null}
          </ul>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <Button asChild size="sm">
            <Link href={`/job-seekers#submit-resume`}>Apply Now</Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            Ref. {job.referenceNumber}
          </p>
        </div>
      </div>
    </article>
  );
}
