import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Reveal } from "@/components/motion/reveal";
import { industries } from "@/content/industries";
import { industryHomeImages } from "@/content/home-images";

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
            const image = industryHomeImages[industry.slug];
            const cta = `${industry.name} staffing`;
            return (
              <Reveal key={industry.slug} as="li" delay={index * 0.03}>
                <article
                  id={industry.slug}
                  className="group border-border bg-surface ease-brand hover:border-primary relative flex h-full min-h-60 flex-col overflow-hidden rounded-[1.25rem] border transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1"
                >
                  {image ? (
                    <div className="border-border relative aspect-[16/10] overflow-hidden border-b">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover object-center"
                        style={{ objectPosition: image.focalPoint }}
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="text-muted-foreground text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
                      Industry field note
                    </span>
                    <h3 className="font-heading text-foreground mt-4 max-w-[18ch] text-xl leading-tight font-semibold tracking-[-0.025em]">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                      {industry.summary}
                    </p>
                    <span className="text-primary mt-7 inline-flex items-center gap-1.5 text-sm font-semibold">
                      <Link
                        href={industry.href}
                        className="focus-visible:ring-ring/40 absolute inset-0 rounded-[1.25rem] focus-visible:ring-3 focus-visible:outline-none"
                        aria-label={cta}
                      >
                        <span className="sr-only">{cta}</span>
                      </Link>
                      <span aria-hidden>{cta}</span>
                      <ArrowRight
                        aria-hidden
                        className="ease-brand size-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
