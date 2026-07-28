import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { employerProcess } from "@/content/process";
import { solutions } from "@/content/solutions";
import { EditorialIntro } from "./editorial-intro";

export function WorkforceBlueprint() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-36">
      <Container>
        <EditorialIntro
          index="04"
          eyebrow="Workforce blueprint"
          title="The right model, followed through from first conversation to placement."
          description="Choose the workforce approach that fits the need. We manage the recruiting process with clear communication and stay involved after the placement."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] lg:gap-24">
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

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              How the partnership works
            </p>
            <ol className="relative mt-5 border-t border-border">
              {employerProcess.map((step, index) => (
                <li
                  key={step.step}
                  className="group relative grid gap-4 border-b border-border py-6 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-7"
                >
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 h-px w-0 bg-primary transition-[width] duration-500 ease-brand group-hover:w-full"
                  />
                  <span className="font-heading text-sm font-bold tracking-[0.12em] text-primary tabular-nums">
                    {String(index + 1).padStart(2, "0")} / 05
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
