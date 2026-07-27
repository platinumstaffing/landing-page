import Link from "next/link";

import { BrandGraphic } from "@/components/brand/brand-graphic";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Heading } from "@/components/layout/heading";
import { Prose } from "@/components/layout/prose";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <div>
          <Eyebrow>Workforce Solutions</Eyebrow>
          <Heading as="h1" level="h1" className="mt-4">
            Workforce Solutions That Keep Your Business Moving.
          </Heading>
          <Prose size="lg" className="mt-5">
            <p>
              Since 2019, Platinum Staffing & Recruitment has partnered with
              employers across Pennsylvania to solve workforce challenges through
              dependable staffing and recruitment solutions. With a growing
              network of more than{" "}
              <strong className="font-semibold text-foreground">
                40,000 professionals
              </strong>
              , we help organizations build stronger teams while creating
              meaningful career opportunities.
            </p>
          </Prose>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact#request-talent">Request Talent</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/jobs">Find Jobs</Link>
            </Button>
          </div>
        </div>
        <BrandGraphic
          className="aspect-[4/3] w-full min-h-64"
          label="Brand graphic representing Platinum Staffing’s industrial-editorial identity"
        />
      </Container>
    </section>
  );
}
