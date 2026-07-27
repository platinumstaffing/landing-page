import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { employerPillars } from "@/content/solutions";

export function WhyEmployers() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Why Platinum"
            title="Building Workforce Partnerships That Deliver Results"
            description="At Platinum Staffing & Recruitment, we believe successful staffing extends beyond filling positions. We become an extension of your hiring team by understanding your workforce goals, recruiting qualified professionals, and providing responsive support that helps your business succeed."
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {employerPillars.map((pillar, index) => (
            <Reveal key={pillar.id} as="li" delay={index * 0.04}>
              <div className="h-full rounded-xl border border-border bg-surface p-6">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/employers">Discover The Platinum Difference</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
