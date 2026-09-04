import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function HomeConversionClose() {
  return (
    <section className="border-silver/20 bg-navy text-navy-foreground border-b py-18 sm:py-24 lg:py-28">
      <Container>
        <div className="border-silver/35 grid gap-10 border-t pt-6 lg:grid-cols-[8rem_minmax(0,1fr)]">
          <p className="text-silver text-xs font-semibold tracking-[0.16em] uppercase">
            07 / Start here
          </p>
          <div>
            <h2 className="font-heading max-w-5xl text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-bold tracking-[-0.055em] text-balance">
              Your next workforce move deserves a clear plan.
            </h2>
            <div className="border-silver/35 mt-9 flex flex-col gap-7 border-t pt-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-silver max-w-[55ch] leading-relaxed">
                Tell us what the operation needs. We will help shape a
                dependable staffing response around the roles, timeline, and
                goals.
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/employers/request-talent">Request Talent</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="quiet"
                  className="border-silver/50 text-navy-foreground hover:border-navy-foreground hover:text-navy-foreground hover:bg-transparent"
                >
                  <Link href="/contact/schedule-consultation">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
