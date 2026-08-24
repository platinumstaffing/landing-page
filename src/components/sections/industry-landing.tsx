import Link from "next/link";
import { Check } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FaqList } from "@/components/sections/faq-list";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import type { Industry } from "@/content/industries";

type IndustryLandingProps = {
  industry: Industry;
};

function requestHref(industry: string) {
  return `/contact?industry=${industry}#request-talent`;
}

export function IndustryLanding({ industry }: IndustryLandingProps) {
  return (
    <>
      <EditorialPageHero
        index={industry.index}
        eyebrow={industry.name}
        title={industry.headline}
        description={<p>{industry.lede}</p>}
        primary={{
          label: industry.ctaLabel,
          href: requestHref(industry.slug),
        }}
        secondary={{
          label: "Schedule a Consultation",
          href: "/contact#consultation",
        }}
        note={`${industry.name} · Industry focus`}
        tone={industry.heroTone}
        banner={{ family: "Industries", page: industry.name }}
        image={industry.image}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Industry Reality"
            title={industry.challengesTitle}
            description="These are the operational pressures we hear most often — framed as challenges we help employers address, not as guaranteed outcomes."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industry.challenges.map((challenge) => (
              <li
                key={challenge}
                className="border-border bg-surface text-foreground flex items-start gap-3 rounded-lg border px-4 py-3 text-sm font-medium"
              >
                <Check
                  className="text-primary mt-0.5 size-4 shrink-0"
                  weight="bold"
                  aria-hidden
                />
                {challenge}
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
                eyebrow="Positions Platinum Recruits"
                title={`${industry.name} roles we commonly fill`}
              />
              <ul className="text-muted-foreground mt-8 columns-1 gap-x-10 text-sm sm:columns-2">
                {industry.positions.map((role) => (
                  <li key={role} className="mb-2 break-inside-avoid">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                eyebrow="Industry-Specific Hiring Solutions"
                title={industry.solutionsTitle}
              />
              <ul className="mt-8 space-y-0">
                {industry.solutions.map((item, index) => (
                  <li
                    key={item}
                    className="border-border flex items-baseline gap-4 border-b py-3.5"
                  >
                    <span className="font-heading text-primary text-xs font-bold tracking-[0.14em] tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="border-border bg-surface flex flex-col gap-6 rounded-xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-2xl">
              <h2 className="font-heading text-foreground text-2xl font-bold tracking-[-0.02em]">
                Need {industry.name.toLowerCase()} talent?
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Share the roles, shifts, and timeline. The Request Talent form
                will arrive with this industry already selected.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href={requestHref(industry.slug)}>{industry.ctaLabel}</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container narrow>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mt-8">
            <FaqList items={industry.faqs} />
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Need help finding the right workforce solution?"
        description="Not sure which staffing model fits your operation? Our team is ready to understand your workforce needs and recommend a customized hiring approach."
        primary={{
          label: industry.ctaLabel,
          href: requestHref(industry.slug),
        }}
        secondary={{
          label: "Explore all industries",
          href: "/industries",
        }}
      />
    </>
  );
}
