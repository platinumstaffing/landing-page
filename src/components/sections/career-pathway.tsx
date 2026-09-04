import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function CareerPathway() {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="For Job Seekers"
              title="Build Your Career with Platinum Staffing"
              description="Whether you're beginning your career, exploring a new opportunity, or looking for your next professional challenge, Platinum Staffing is committed to connecting talented individuals with employers who value their skills and potential."
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/jobs">Search Open Positions</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/job-seekers/submit-resume">
                  Submit Your Résumé
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/job-seekers/career-resources">
                  Career Resources
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
