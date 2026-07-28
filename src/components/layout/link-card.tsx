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
        "group relative flex h-full min-h-60 flex-col overflow-hidden rounded-[1.25rem] border border-border bg-surface p-6 transition-[border-color,background-color,transform] duration-300 ease-brand hover:-translate-y-1 hover:border-primary sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-5 border-b border-border pb-5">
        <span className="text-[0.68rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          Platinum field note
        </span>
        {IconCmp ? (
          <IconCmp className="size-5 text-primary" weight="regular" aria-hidden />
        ) : (
          <span className="size-2 rounded-full border border-primary" aria-hidden />
        )}
      </div>
      <h3
        className={cn(
          "mt-6 max-w-[18ch] font-heading text-xl leading-tight font-semibold tracking-[-0.025em] text-foreground",
        )}
      >
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {summary}
      </p>
      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        <Link
          href={href}
          className="absolute inset-0 rounded-[1.25rem] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
          aria-label={cta}
        >
          <span className="sr-only">{cta}</span>
        </Link>
        <span aria-hidden>{cta}</span>
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 ease-brand group-hover:translate-x-1"
        />
      </span>
    </article>
  );
}
