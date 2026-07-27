import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Heading } from "@/components/layout/heading";
import { Prose } from "@/components/layout/prose";
import { Button } from "@/components/ui/button";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border">
      <Container className="max-w-3xl py-20 sm:py-28">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Coming soon
        </p>
        <Heading as="h1" level="h1" className="mt-4">
          {title}
        </Heading>
        <Prose size="lg" className="mt-5">
          <p>{description}</p>
        </Prose>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
