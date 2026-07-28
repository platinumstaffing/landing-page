import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HomeConversionClose() {
  return (
    <section className="border-b border-silver/20 bg-navy py-18 text-navy-foreground sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 border-t border-silver/35 pt-6 lg:grid-cols-[8rem_minmax(0,1fr)]">
          <p className="text-xs font-semibold tracking-[0.16em] text-silver uppercase">
            07 / Start here
          </p>
          <div>
            <h2 className="max-w-5xl font-heading text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.9] tracking-[-0.055em] text-balance">
              Your next workforce move deserves a clear plan.
            </h2>
            <div className="mt-9 flex flex-col gap-7 border-t border-silver/35 pt-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[55ch] leading-relaxed text-silver">
                Tell us what the operation needs. We will help shape a dependable
                staffing response around the roles, timeline, and goals.
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact#request-talent">Request Talent</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="quiet"
                  className="border-silver/50 text-navy-foreground hover:border-navy-foreground hover:bg-transparent hover:text-navy-foreground"
                >
                  <Link href="/contact#consultation">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
