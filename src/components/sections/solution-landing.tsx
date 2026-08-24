import Link from "next/link";
import { Check } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FaqList } from "@/components/sections/faq-list";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import type { Solution } from "@/content/solutions";

type SolutionLandingProps = {
  solution: Solution;
};

function requestHref(service: string) {
  return `/contact?service=${service}#request-talent`;
}

export function SolutionLanding({ solution }: SolutionLandingProps) {
  return (
    <>
      <EditorialPageHero
        index={solution.index}
        eyebrow={solution.name}
        title={solution.headline}
        description={<p>{solution.lede}</p>}
        primary={{
          label: solution.ctaLabel,
          href: requestHref(solution.slug),
        }}
        secondary={{
          label: "Schedule a Consultation",
          href: "/contact#consultation",
        }}
        note={`${solution.name} · Employer solutions`}
        tone={solution.heroTone}
        banner={{ family: "Employer Solutions", page: solution.name }}
        image={solution.image}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Why This Solution"
            title={solution.benefitsTitle}
            description="A clear look at how this staffing model supports operational needs without inventing outcomes we cannot verify."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solution.benefits.map((benefit) => (
              <li
                key={benefit}
                className="border-border bg-surface text-foreground flex items-start gap-3 rounded-lg border px-4 py-3 text-sm font-medium"
              >
                <Check
                  className="text-primary mt-0.5 size-4 shrink-0"
                  weight="bold"
                  aria-hidden
                />
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Positions We Recruit"
                title="Roles this solution commonly supports"
              />
              <ul className="text-muted-foreground mt-8 columns-1 gap-x-10 text-sm sm:columns-2">
                {solution.positions.map((role) => (
                  <li key={role} className="mb-2 break-inside-avoid">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                eyebrow="How It Works"
                title={solution.processTitle}
              />
              <ol className="mt-8 space-y-0">
                {solution.process.map((step, index) => (
                  <li
                    key={step}
                    className="border-border flex items-baseline gap-4 border-b py-3.5"
                  >
                    <span className="font-heading text-primary text-xs font-bold tracking-[0.14em] tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground text-sm font-medium">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="border-border bg-surface flex flex-col gap-6 rounded-xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-2xl">
              <h2 className="font-heading text-foreground text-2xl font-bold tracking-[-0.02em]">
                Ready to request {solution.name.toLowerCase()}?
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Tell us about the roles, volume, and timeline. The Request
                Talent form will arrive with this staffing service already
                selected.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href={requestHref(solution.slug)}>{solution.ctaLabel}</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container narrow>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-8">
            <FaqList items={solution.faqs} />
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Let's build the right staffing approach"
        description="Whether you need immediate coverage or a longer hiring plan, Platinum Staffing is ready to help."
        primary={{
          label: solution.ctaLabel,
          href: requestHref(solution.slug),
        }}
        secondary={{
          label: "Explore all solutions",
          href: "/employers",
        }}
      />
    </>
  );
}
