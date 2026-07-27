import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const employerTopics = [
  "Hiring Guides",
  "Industry Reports",
  "Workforce Insights",
  "Hiring Best Practices",
  "Employment Trends",
];

const careerTopics = [
  "Interview Preparation",
  "Résumé Writing",
  "Career Development",
  "Professional Growth",
  "Job Search Tips",
];

export function ResourcesTeaser() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Workforce Resources"
            title="Workforce Insights for Employers and Job Seekers"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-border bg-surface p-8">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Employer Resources
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {employerTopics.map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {topic}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/resources">View Employer Resources</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-xl border border-border bg-surface p-8">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Career Resources
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {careerTopics.map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {topic}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/resources">View Career Resources</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
