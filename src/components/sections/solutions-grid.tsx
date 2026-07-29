import { Container } from "@/components/layout/container";
import { LinkCard } from "@/components/layout/link-card";
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
              <LinkCard
                id={showIds ? solution.slug : undefined}
                href={solution.href}
                title={solution.name}
                summary={solution.summary}
                cta={`How ${solution.name} works`}
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
