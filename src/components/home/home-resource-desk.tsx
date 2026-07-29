import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { homeImages } from "@/content/home-images";
import { EditorialImage } from "./editorial-image";
import { EditorialIntro } from "./editorial-intro";

const resourceRows = [
  {
    label: "For employers",
    title: "Hiring guidance grounded in the realities of running a team.",
    topics: "Hiring guides · Workforce insights · Employment trends",
    image: homeImages.employerResource,
  },
  {
    label: "For professionals",
    title: "Practical preparation for the next step in your career.",
    topics: "Interview preparation · Résumé guidance · Job search tips",
    image: homeImages.careerResource,
  },
] as const;

export function HomeResourceDesk() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-36">
      <Container>
        <EditorialIntro
          index="06"
          eyebrow="Resource desk"
          title="Useful guidance for both sides of the workforce conversation."
          description="The resource library is being built carefully. These pathways show what is coming without pretending unfinished articles are already available."
        />

        <div className="border-border mt-14 border-t">
          {resourceRows.map((row, index) => (
            <article
              key={row.label}
              className="border-border grid gap-7 border-b py-8 lg:grid-cols-[13rem_minmax(0,1fr)_minmax(18rem,0.62fr)] lg:items-center lg:gap-10"
            >
              <EditorialImage
                image={row.image}
                sizes="(min-width: 1024px) 13rem, 100vw"
                className="max-w-lg"
              />
              <div>
                <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                  {String(index + 1).padStart(2, "0")} / {row.label}
                </p>
                <h3 className="font-heading mt-4 max-w-2xl text-2xl leading-tight font-semibold tracking-[-0.025em] sm:text-3xl">
                  {row.title}
                </h3>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  {row.topics}
                </p>
              </div>
              <div className="lg:text-right">
                <span className="text-muted-foreground block text-xs font-medium">
                  Articles in progress
                </span>
                <Link
                  href="/resources"
                  className="text-primary mt-4 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
                >
                  Visit the resource center
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
