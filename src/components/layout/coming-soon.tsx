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
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden border-b border-border bg-muted">
      {/* Brand arc motif drawn from the logo geometry */}
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -top-20 -right-20 h-120 w-120 text-primary/10 sm:h-140 sm:w-140"
      >
        <path
          d="M400 0 A400 400 0 0 0 0 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M400 90 A310 310 0 0 0 90 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <Container className="relative max-w-3xl py-24 sm:py-32">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          In development
        </p>
        <Heading as="h1" level="h1" className="mt-4">
          {title}
        </Heading>
        <Prose size="lg" className="mt-5">
          <p>{description}</p>
        </Prose>
        <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-8">
          <Button asChild size="lg">
            <Link href="/contact">Contact our team</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
