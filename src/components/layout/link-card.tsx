import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

type LinkCardProps = {
  href: string;
  title: string;
  summary: string;
  /** Specific action label, e.g. "Explore Manufacturing". Avoid generic "Learn more". */
  cta: string;
  icon?: Icon;
  id?: string;
  className?: string;
};

/**
 * Fully-clickable editorial story row with a generous touch target. Hairline
 * borders and an offset corner marker replace the old repeated card catalogue.
 */
export function LinkCard({
  href,
  title,
  summary,
  cta,
  icon: IconCmp,
  id,
  className,
}: LinkCardProps) {
  return (
    <article
      id={id}
      className={cn(
        "group border-border bg-surface ease-brand hover:border-primary relative flex h-full min-h-60 flex-col overflow-hidden rounded-[1.25rem] border p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 sm:p-7",
        className,
      )}
    >
      <div className="border-border flex items-center justify-between gap-5 border-b pb-5">
        <span className="text-muted-foreground text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
          Platinum field note
        </span>
        {IconCmp ? (
          <IconCmp
            className="text-primary size-5"
            weight="regular"
            aria-hidden
          />
        ) : (
          <span
            className="border-primary size-2 rounded-full border"
            aria-hidden
          />
        )}
      </div>
      <h3
        className={cn(
          "font-heading text-foreground mt-6 max-w-[18ch] text-xl leading-tight font-semibold tracking-[-0.025em]",
        )}
      >
        {title}
      </h3>
      <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
        {summary}
      </p>
      <span className="text-primary mt-7 inline-flex items-center gap-1.5 text-sm font-semibold">
        <Link
          href={href}
          className="focus-visible:ring-ring/40 absolute inset-0 rounded-[1.25rem] focus-visible:ring-3 focus-visible:outline-none"
          aria-label={cta}
        >
          <span className="sr-only">{cta}</span>
        </Link>
        <span aria-hidden>{cta}</span>
        <ArrowRight
          aria-hidden
          className="ease-brand size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </article>
  );
}
