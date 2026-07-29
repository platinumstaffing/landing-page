import {
  Factory,
  HardHat,
  Headset,
  Package,
  Truck,
  Buildings,
} from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { LinkCard } from "@/components/layout/link-card";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { industries } from "@/content/industries";

const icons = {
  manufacturing: Factory,
  "warehouse-distribution": Package,
  logistics: Truck,
  "administrative-support": Buildings,
  "customer-service": Headset,
  "light-industrial": HardHat,
} as const;

type IndustriesGridProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: "default" | "muted" | "surface";
};

export function IndustriesGrid({
  eyebrow = "Explore Our Industries",
  title = "Workforce Solutions Built Around Your Industry",
  description = "Every industry has unique hiring challenges. Platinum Staffing develops workforce solutions tailored to each client's operational needs, helping employers recruit dependable professionals while maintaining productivity and long-term growth.",
  tone = "default",
}: IndustriesGridProps) {
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
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = icons[industry.slug as keyof typeof icons] ?? Factory;
            return (
              <Reveal key={industry.slug} as="li" delay={index * 0.03}>
                <LinkCard
                  id={industry.slug}
                  href={industry.href}
                  icon={Icon}
                  title={industry.name}
                  summary={industry.summary}
                  cta={`${industry.name} staffing`}
                />
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
