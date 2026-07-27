import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Prose } from "@/components/layout/prose";
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
  primary = { label: "Request Talent", href: "/contact#request-talent" },
  secondary = { label: "Schedule a Consultation", href: "/contact#consultation" },
}: FinalCtaProps) {
  return (
    <Section tone="navy" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Heading as="h2" level="h2" onDark>
              {title}
            </Heading>
            <Prose onDark size="lg" className="mt-4">
              <p>{description}</p>
            </Prose>
          </div>
          <div className="flex flex-wrap gap-3">
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
      </Container>
    </Section>
  );
}
