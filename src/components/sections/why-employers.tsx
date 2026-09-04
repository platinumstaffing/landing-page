import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { PillarGrid } from "@/components/sections/pillar-grid";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { employerPillars } from "@/content/solutions";

export function WhyEmployers() {
  return (
    <Section tone="muted">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Why Platinum"
            title="Building Workforce Partnerships That Deliver Results"
            description="At Platinum Staffing & Recruitment, we believe successful staffing extends beyond filling positions. We become an extension of your hiring team by understanding your workforce goals, recruiting qualified professionals, and providing responsive support that helps your business succeed."
          />
        </Reveal>
        <PillarGrid pillars={employerPillars} className="mt-12" />
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/about/why-platinum">
              Why employers choose Platinum
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
