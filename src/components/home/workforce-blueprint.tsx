import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { homeImages } from "@/content/home-images";
import { solutions } from "@/content/solutions";
import { EditorialImage } from "./editorial-image";
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
            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              Staffing models
            </p>
            <nav aria-label="Employer staffing solutions" className="mt-5 border-t border-border">
              {solutions.map((solution, index) => (
                <Link
                  key={solution.slug}
                  href={solution.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-2 border-b border-border py-4 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/40"
                >
                  <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading font-semibold">{solution.name}</span>
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 ease-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

        <div className="mt-20 border-t border-border pt-10 sm:mt-24 sm:pt-12">
          <div className="grid gap-5 lg:grid-cols-[minmax(14rem,0.42fr)_minmax(0,1.58fr)] lg:gap-16">
            <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              How the partnership works
            </p>
            <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-muted-foreground">
              A five-step route from understanding the need to supporting the
              relationship after placement.
            </p>
            </div>
            <p className="max-w-2xl font-heading text-2xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
              One connected journey, with a clear handoff at every stage.
            </p>
          </div>
          <PartnershipJourney />
        </div>
      </Container>
    </section>
  );
}
