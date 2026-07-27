import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";

type Step = {
  step: number;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps: readonly Step[];
  tone?: "default" | "muted" | "surface";
};

export function ProcessSteps({
  eyebrow = "Our Process",
  title = "A Simple Process. Exceptional Results.",
  description,
  steps,
  tone = "default",
}: ProcessStepsProps) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <ol className="mt-12 space-y-0 border-t border-border">
          {steps.map((step, index) => (
            <Reveal key={step.step} as="li" delay={index * 0.04}>
              <div className="grid gap-4 border-b border-border py-6 sm:grid-cols-[5rem_1fr] sm:gap-8">
                <span className="font-heading text-sm font-bold tracking-[0.14em] text-primary uppercase">
                  Step {step.step}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
