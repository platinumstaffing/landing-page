import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { solutions } from "@/content/solutions";

type SolutionsGridProps = {
  tone?: "default" | "muted" | "surface";
  showIds?: boolean;
};

export function SolutionsGrid({
  tone = "muted",
  showIds = false,
}: SolutionsGridProps) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Explore Employer Solutions"
            title="Flexible Staffing Solutions Designed Around Your Business"
            description="Every business has different hiring needs. Platinum Staffing provides customized workforce solutions that help organizations respond to changing workforce demands while supporting long-term business growth."
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Reveal key={solution.slug} as="li" delay={index * 0.03}>
              <article
                id={showIds ? solution.slug : undefined}
                className="flex h-full flex-col rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {solution.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {solution.summary}
                </p>
                <Link
                  href={solution.href}
                  className="mt-5 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Learn More
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
