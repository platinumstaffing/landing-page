import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
};

type EditorialPageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  primary?: HeroAction;
  secondary?: HeroAction;
  note?: string;
  className?: string;
};

export function EditorialPageHero({
  index,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  note = "Pennsylvania workforce solutions",
  className,
}: EditorialPageHeroProps) {
  return (
    <section
      className={cn(
        "border-border bg-background relative overflow-hidden border-b",
        className,
      )}
    >
      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:gap-20 lg:py-28">
        <div>
          <div className="flex items-center gap-4">
            <span className="font-heading text-primary text-xs font-bold tracking-[0.16em] tabular-nums">
              {index}
            </span>
            <span className="bg-border h-px w-10" aria-hidden />
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.14em] uppercase">
              {eyebrow}
            </p>
          </div>
          <h1 className="font-heading text-foreground mt-7 max-w-[18ch] text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-balance">
            {title}
          </h1>
          <div className="text-muted-foreground [&_strong]:text-foreground mt-7 max-w-[66ch] text-base leading-relaxed sm:text-lg [&_p+p]:mt-4 [&_strong]:font-semibold">
            {description}
          </div>
          {primary || secondary ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {primary ? (
                <Button asChild size="lg">
                  <Link href={primary.href}>
                    {primary.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              ) : null}
              {secondary ? (
                <Button asChild size="lg" variant="quiet">
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>

        <aside className="border-border relative min-h-64 border-t pt-5 lg:min-h-full lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <div className="flex items-start justify-between gap-5">
            <p className="text-muted-foreground max-w-[18ch] text-xs leading-relaxed font-semibold tracking-[0.1em] uppercase">
              {note}
            </p>
            <ArrowDownRight className="text-primary size-7" aria-hidden />
          </div>
          <div
            className="absolute right-0 bottom-0 left-0 grid h-40 grid-cols-6 items-end gap-2 lg:left-8"
            aria-hidden
          >
            {[42, 68, 34, 86, 56, 100].map((height, itemIndex) => (
              <span
                key={height}
                className="border-primary bg-surface-muted border-t"
                style={{ height: `${height}%` }}
              >
                <span className="sr-only">{itemIndex + 1}</span>
              </span>
            ))}
          </div>
          <p className="font-heading text-border absolute right-0 bottom-2 text-[clamp(4rem,9vw,7rem)] leading-none font-semibold tracking-[-0.08em] select-none lg:-right-2">
            {index}
          </p>
        </aside>
      </Container>
    </section>
  );
}
