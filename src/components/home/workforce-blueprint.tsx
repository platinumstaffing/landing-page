import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { homeImages } from "@/content/home-images";
import { solutions } from "@/content/solutions";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialIntro } from "./editorial-intro";
import { PartnershipJourney } from "./partnership-journey";

export function WorkforceBlueprint() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-36">
      <Container className="max-w-[90rem]">
        <EditorialIntro
          index="04"
          eyebrow="Workforce blueprint"
          title="The right model, followed through from first conversation to placement."
          description="Choose the workforce approach that fits the need. We manage the recruiting process with clear communication and stay involved after the placement."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-16">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
              Staffing models
            </p>
            <nav
              aria-label="Employer staffing solutions"
              className="border-border mt-5 border-t"
            >
              {solutions.map((solution, index) => (
                <Link
                  key={solution.slug}
                  href={solution.href}
                  className="group border-border text-foreground hover:text-primary focus-visible:ring-ring/40 grid grid-cols-[2.5rem_1fr_auto] items-center gap-2 border-b py-4 transition-colors focus-visible:ring-3 focus-visible:outline-none focus-visible:ring-inset"
                >
                  <span className="text-muted-foreground text-xs font-semibold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading font-semibold">
                    {solution.name}
                  </span>
                  <ArrowUpRight
                    className="ease-brand size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </Link>
              ))}
            </nav>
          </div>

          <EditorialImage
            image={homeImages.staffingModels}
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="w-full"
          />
        </div>

        <div className="border-border mt-20 border-t pt-10 sm:mt-24 sm:pt-12">
          <div className="grid gap-5 lg:grid-cols-[minmax(14rem,0.42fr)_minmax(0,1.58fr)] lg:gap-16">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                How the partnership works
              </p>
              <p className="text-muted-foreground mt-3 max-w-[54ch] text-sm leading-relaxed">
                A five-step route from understanding the need to supporting the
                relationship after placement.
              </p>
            </div>
            <p className="font-heading text-foreground max-w-2xl text-2xl leading-tight font-semibold tracking-[-0.03em] sm:text-3xl">
              One connected journey, with a clear handoff at every stage.
            </p>
          </div>
          <PartnershipJourney />
        </div>
      </Container>
    </section>
  );
}
