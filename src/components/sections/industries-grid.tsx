import Link from "next/link";
import {
  Factory,
  HardHat,
  Headset,
  Package,
  Truck,
  Buildings,
} from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
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
                <article
                  id={industry.slug}
                  className="flex h-full flex-col rounded-xl border border-border bg-surface p-6"
                >
                  <Icon className="size-6 text-primary" weight="regular" aria-hidden />
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {industry.summary}
                  </p>
                  <Link
                    href={industry.href}
                    className="mt-5 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Learn More
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
