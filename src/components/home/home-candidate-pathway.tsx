import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { homeImages } from "@/content/home-images";
import { EditorialImage } from "@/components/layout/editorial-image";

export function HomeCandidatePathway() {
  return (
    <section className="border-border bg-surface border-y py-8 sm:py-12">
      <Container>
        <div className="border-border bg-background grid overflow-hidden border lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <EditorialImage
            image={homeImages.candidatePathway}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="relative z-0 min-h-[22rem] border-0 border-b lg:min-h-[36rem] lg:border-r lg:border-b-0"
          />
          <div className="bg-background relative z-10 flex min-w-0 flex-col justify-between p-7 sm:p-10 lg:-ml-px lg:p-12">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.16em] uppercase">
                05 / For job seekers
              </p>
              <h2 className="font-heading mt-6 text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.96] font-bold tracking-[-0.045em] text-balance">
                Work that respects what you bring.
              </h2>
              <p className="text-muted-foreground mt-6 max-w-[52ch] leading-relaxed">
                Whether you are beginning your career or ready for a new
                challenge, we connect you with employers who value your skills
                and potential.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/jobs">Search Open Positions</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/job-seekers/submit-resume">
                    Submit Your Résumé
                  </Link>
                </Button>
              </div>
              <Link
                href="/job-seekers"
                className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
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
