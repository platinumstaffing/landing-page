import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import type { HomeImageAsset } from "@/content/home-images";
import { cn } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
};

type HeroBanner = {
  family: string;
  page: string;
};

type EditorialPageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  primary?: HeroAction;
  secondary?: HeroAction;
  note?: string;
  tone?: "canvas" | "muted" | "navy";
  banner?: HeroBanner;
  image?: HomeImageAsset;
  className?: string;
};

/**
 * Shared asymmetric page opener for marketing routes. Tone and optional
 * photography create section identity without inventing a second palette.
 */
export function EditorialPageHero({
  index,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  note = "Workforce solutions partner",
  tone = "canvas",
  banner,
  image,
  className,
}: EditorialPageHeroProps) {
  const isNavy = tone === "navy";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        tone === "canvas" && "border-border bg-background",
        tone === "muted" && "border-border bg-surface-muted",
        tone === "navy" && "border-navy bg-navy text-navy-foreground",
        className,
      )}
    >
      {banner ? (
        <div
          className={cn(
            "border-b",
            isNavy ? "border-white/15" : "border-border",
          )}
        >
          <Container className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3 text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
            <span
              className={
                isNavy ? "text-navy-foreground/70" : "text-muted-foreground"
              }
            >
              {banner.family}
            </span>
            <span
              className={cn("h-px w-6", isNavy ? "bg-white/25" : "bg-border")}
              aria-hidden
            />
            <span
              className={isNavy ? "text-navy-foreground" : "text-foreground"}
            >
              {banner.page}
            </span>
          </Container>
        </div>
      ) : null}

      <Container
        className={cn(
          "relative grid gap-12 py-16 sm:py-20 lg:gap-20 lg:py-28",
          image
            ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]"
            : "lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)]",
        )}
      >
        <div>
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "font-heading text-xs font-bold tracking-[0.16em] tabular-nums",
                isNavy ? "text-navy-foreground" : "text-primary",
              )}
            >
              {index}
            </span>
            <span
              className={cn("h-px w-10", isNavy ? "bg-white/25" : "bg-border")}
              aria-hidden
            />
            <p
              className={cn(
                "text-xs font-semibold tracking-[0.14em] uppercase",
                isNavy ? "text-navy-foreground/70" : "text-muted-foreground",
              )}
            >
              {eyebrow}
            </p>
          </div>
          <h1
            className={cn(
              "font-heading mt-7 max-w-[18ch] text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-balance",
              isNavy ? "text-navy-foreground" : "text-foreground",
            )}
          >
            {title}
          </h1>
          <div
            className={cn(
              "mt-7 max-w-[66ch] text-base leading-relaxed sm:text-lg [&_p+p]:mt-4 [&_strong]:font-semibold",
              isNavy
                ? "text-navy-foreground/80 [&_strong]:text-navy-foreground"
                : "text-muted-foreground [&_strong]:text-foreground",
            )}
          >
            {description}
          </div>
          {primary || secondary ? (
            <div className="mt-9 flex flex-wrap gap-3">
              {primary ? (
                <Button
                  asChild
                  size="lg"
                  variant={isNavy ? "secondary" : "default"}
                >
                  <Link href={primary.href}>
                    {primary.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              ) : null}
              {secondary ? (
                <Button
                  asChild
                  size="lg"
                  variant={isNavy ? "outline" : "quiet"}
                  className={
                    isNavy
                      ? "border-navy-foreground/40 text-navy-foreground hover:bg-navy-foreground/10 bg-transparent"
                      : undefined
                  }
                >
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>

        <aside
          className={cn(
            "relative min-h-64 pt-5 lg:min-h-full lg:pt-0 lg:pl-8",
            isNavy
              ? "border-t border-white/15 lg:border-t-0 lg:border-l"
              : "border-border border-t lg:border-t-0 lg:border-l",
          )}
        >
          <div className="flex items-start justify-between gap-5">
            <p
              className={cn(
                "max-w-[18ch] text-xs leading-relaxed font-semibold tracking-[0.1em] uppercase",
                isNavy ? "text-navy-foreground/70" : "text-muted-foreground",
              )}
            >
              {note}
            </p>
            <ArrowDownRight
              className={cn(
                "size-7",
                isNavy ? "text-navy-foreground" : "text-primary",
              )}
              aria-hidden
            />
          </div>

          {image ? (
            <figure className="border-border bg-surface-muted relative mt-8 aspect-[4/3] overflow-hidden border lg:mt-10">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover object-center"
                style={{ objectPosition: image.focalPoint }}
                priority
              />
              <span
                aria-hidden
                className="border-silver absolute top-3 left-4 z-10 size-3 border-t border-l"
              />
              <span
                aria-hidden
                className="border-silver absolute right-4 bottom-3 z-10 size-3 border-r border-b"
              />
            </figure>
          ) : (
            <>
              <div
                className="absolute right-0 bottom-0 left-0 grid h-40 grid-cols-6 items-end gap-2 lg:left-8"
                aria-hidden
              >
                {[42, 68, 34, 86, 56, 100].map((height, itemIndex) => (
                  <span
                    key={height}
                    className={cn(
                      "border-t",
                      isNavy
                        ? "border-navy-foreground/40 bg-navy-foreground/10"
                        : "border-primary bg-surface-muted",
                    )}
                    style={{ height: `${height}%` }}
                  >
                    <span className="sr-only">{itemIndex + 1}</span>
                  </span>
                ))}
              </div>
              <p
                className={cn(
                  "font-heading absolute right-0 bottom-2 text-[clamp(4rem,9vw,7rem)] leading-none font-semibold tracking-[-0.08em] select-none lg:-right-2",
                  isNavy ? "text-navy-foreground/15" : "text-border",
                )}
              >
                {index}
              </p>
            </>
          )}
        </aside>
      </Container>
    </section>
  );
}
