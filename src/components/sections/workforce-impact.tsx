import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { AnimatedStat } from "@/components/motion/animated-stat";
import { Reveal } from "@/components/motion/reveal";
import { workforceStats } from "@/content/stats";

export function WorkforceImpact() {
  return (
    <Section tone="navy">
      <Container>
        <Reveal>
          <SectionHeader
            onDark
            eyebrow="Workforce Impact"
            title="Delivering Workforce Solutions That Make an Impact"
            description="Our success is measured by the businesses we've supported and the professionals we've connected with meaningful opportunities. Every placement reflects our commitment to quality, responsiveness, and long-term partnership."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workforceStats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.05}>
              <AnimatedStat
                value={stat.value}
                display={stat.display}
                label={stat.label}
                suffix={stat.suffix}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
