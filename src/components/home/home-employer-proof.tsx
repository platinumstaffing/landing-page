import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { employerPillars } from "@/content/solutions";
import { homeImages } from "@/content/home-images";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialIntro } from "./editorial-intro";

export function HomeEmployerProof() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-36">
      <Container>
        <EditorialIntro
          index="02"
          eyebrow="Why Platinum"
          title="A staffing partner who understands the floor, not just the vacancy."
          description="We work as an extension of your hiring team, learning the operation first and building a workforce response around what the business actually needs."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(20rem,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <EditorialImage
              image={homeImages.employerPartnership}
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
          </div>

          <div className="border-border border-t">
            {employerPillars.map((pillar, index) => (
              <article
                key={pillar.id}
                className="group border-border grid gap-4 border-b py-7 sm:grid-cols-[4rem_1fr] sm:py-9"
              >
                <span className="font-heading text-primary text-sm font-bold tracking-[0.12em] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-foreground text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 max-w-[55ch] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
            <Link
              href="/employers"
              className="text-primary focus-visible:ring-ring/40 mt-8 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-3 focus-visible:outline-none"
            >
              See how we support employers
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
