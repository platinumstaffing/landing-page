"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { industries } from "@/content/industries";
import { industryHomeImages } from "@/content/home-images";
import { cn } from "@/lib/utils";
import { EditorialImage } from "./editorial-image";
import { EditorialIntro } from "./editorial-intro";

export function HomeIndustries() {
  const [activeSlug, setActiveSlug] = useState(industries[0].slug);
  const activeIndustry =
    industries.find((industry) => industry.slug === activeSlug) ??
    industries[0];

  return (
    <section className="bg-surface-muted py-20 sm:py-28 lg:py-36">
      <Container>
        <EditorialIntro
          index="03"
          eyebrow="Industries"
          title="Workforce knowledge shaped by how your operation runs."
          description="Six focused areas, one standard: dependable people who understand the pace, safety, and expectations of the work."
        />

        <div className="mt-14 hidden gap-10 md:grid md:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1.05fr)] lg:gap-16">
          <div className="border-border border-t">
            {industries.map((industry, index) => {
              const active = industry.slug === activeIndustry.slug;
              return (
                <Link
                  key={industry.slug}
                  href={industry.href}
                  onMouseEnter={() => setActiveSlug(industry.slug)}
                  onFocus={() => setActiveSlug(industry.slug)}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "group border-border focus-visible:ring-ring/40 grid grid-cols-[3rem_1fr_auto] items-center gap-3 border-b py-5 transition-colors duration-300 focus-visible:ring-3 focus-visible:outline-none focus-visible:ring-inset",
                    active
                      ? "text-primary"
                      : "text-foreground hover:text-primary",
                  )}
                >
                  <span className="text-xs font-semibold tracking-[0.12em] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-xl font-semibold tracking-[-0.02em] lg:text-2xl">
                    {industry.name}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className={cn(
                      "ease-brand size-5 transition-transform duration-300",
                      active && "translate-x-0.5 -translate-y-0.5",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div aria-live="polite" className="self-start md:sticky md:top-28">
            <EditorialImage
              key={activeIndustry.slug}
              image={industryHomeImages[activeIndustry.slug]}
              sizes="(min-width: 1024px) 46vw, 52vw"
            />
            <p className="text-muted-foreground mt-5 max-w-[58ch] leading-relaxed">
              {activeIndustry.summary}
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-10 md:hidden">
          {industries.map((industry, index) => (
            <article key={industry.slug}>
              <EditorialImage
                image={industryHomeImages[industry.slug]}
                sizes="100vw"
              />
              <div className="mt-5 grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="text-primary pt-1 text-xs font-semibold tracking-[0.12em] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {industry.summary}
                  </p>
                  <Link
                    href={industry.href}
                    className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    Explore this industry
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
