import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { getResourceCategory, resourceCategories } from "@/content/resources";

type ResourceCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: ResourceCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getResourceCategory(slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.lede,
  };
}

export default async function ResourceCategoryPage({
  params,
}: ResourceCategoryPageProps) {
  const { slug } = await params;
  const category = getResourceCategory(slug);
  if (!category) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: category.name, href: category.href },
        ]}
      />
      <EditorialPageHero
        index={category.index}
        eyebrow={category.name}
        title={category.headline}
        description={<p>{category.lede}</p>}
        primary={category.cta}
        secondary={{ label: "All resource categories", href: "/resources" }}
        note={`${category.audience} · Articles in progress`}
        banner={{ family: "Resources", page: category.name }}
        image={category.image}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {category.image ? (
              <EditorialImage image={category.image} />
            ) : (
              <SectionHeader
                eyebrow="What this library covers"
                title="Topics we will publish here"
              />
            )}
            <div>
              {category.image ? (
                <SectionHeader
                  eyebrow="What this library covers"
                  title="Topics we will publish here"
                />
              ) : null}
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed lg:mt-0">
                {category.description} Individual articles will appear on this
                page as they are written — we will not invent titles or dates to
                fill the list.
              </p>
            </div>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {category.topics.map((topic, index) => (
              <Reveal as="li" key={topic} delay={index * 0.04}>
                <article className="border-border bg-surface rounded-xl border p-6">
                  <span className="font-heading text-primary text-xs font-bold tracking-[0.14em] uppercase tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-foreground mt-3 text-lg font-bold">
                    {topic}
                  </h2>
                </article>
              </Reveal>
            ))}
          </ul>
          <p className="border-border bg-muted text-muted-foreground mt-8 rounded-lg border px-4 py-3 text-sm">
            Articles in progress. Contact our team if you need guidance on this
            topic now.
          </p>
          <Button asChild className="mt-6">
            <Link href={category.cta.href}>{category.cta.label}</Link>
          </Button>
        </Container>
      </Section>

      <FinalCta
        title="Need help before the next article ships?"
        description="The Resource Center is being built in public. The staffing work does not wait on it."
        primary={category.cta}
        secondary={{ label: "Back to Resources", href: "/resources" }}
      />
    </>
  );
}
