import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

type FinalCtaProps = {
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function FinalCta({
  title,
  description,
  primary = { label: "Request Talent", href: "/employers/request-talent" },
  secondary = {
    label: "Schedule a Consultation",
    href: "/contact/schedule-consultation",
  },
}: FinalCtaProps) {
  return (
    <Section
      tone="navy"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="border-silver/35 grid gap-12 border-t pt-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-20">
          <div>
            <p className="text-silver text-xs font-semibold tracking-[0.15em] uppercase">
              Your next move
            </p>
            <h2 className="font-heading text-navy-foreground mt-6 max-w-[14ch] text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-balance">
              {title}
            </h2>
          </div>
          <div className="border-silver/25 flex flex-col justify-between border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <p className="text-silver max-w-[54ch] text-base leading-relaxed sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={primary.href}>{primary.label}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="quiet"
                className="border-silver/50 text-white hover:border-white hover:bg-white/5 hover:text-white"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
