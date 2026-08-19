import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionLanding } from "@/components/sections/solution-landing";
import { getSolution, solutions } from "@/content/solutions";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  return {
    title: solution.name,
    description: solution.lede,
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return <SolutionLanding solution={solution} />;
}
