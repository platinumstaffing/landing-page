import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { homeImages } from "@/content/home-images";
import { EditorialImage } from "./editorial-image";

export function HomeCandidatePathway() {
  return (
    <section className="border-y border-border bg-surface py-8 sm:py-12">
      <Container>
        <div className="grid overflow-hidden border border-border bg-background lg:grid-cols-[1.08fr_0.92fr]">
          <EditorialImage
            image={homeImages.candidatePathway}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="min-h-[22rem] border-0 border-b lg:min-h-[36rem] lg:border-r lg:border-b-0"
          />
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                05 / For job seekers
              </p>
              <h2 className="mt-6 font-heading text-[clamp(2.5rem,5vw,4.75rem)] font-bold leading-[0.96] tracking-[-0.045em] text-balance">
                Work that respects what you bring.
              </h2>
              <p className="mt-6 max-w-[52ch] leading-relaxed text-muted-foreground">
                Whether you are beginning your career or ready for a new challenge,
                we connect you with employers who value your skills and potential.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/jobs">Search Open Positions</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/job-seekers#submit-resume">Submit Your Résumé</Link>
                </Button>
              </div>
              <Link
                href="/job-seekers"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Explore career resources
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
