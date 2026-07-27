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
 * Elegant, fully-clickable content card. The whole surface is the target (a
 * stretched link) for larger tap areas on touch devices; the arrow is a hover
 * affordance. Hairline-first: a border that warms to primary on hover, no shadow.
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
        "group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-300 ease-brand hover:border-primary/60 sm:p-7",
        className,
      )}
    >
      {IconCmp ? (
        <IconCmp
          className="size-6 text-primary"
          weight="regular"
          aria-hidden
        />
      ) : null}
      <h3
        className={cn(
          "font-heading text-lg font-bold text-foreground",
          IconCmp && "mt-4",
        )}
      >
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {summary}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        <Link
          href={href}
          className="absolute inset-0 rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
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
