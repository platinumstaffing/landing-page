import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IndustryLanding } from "@/components/sections/industry-landing";
import { getIndustry, industries } from "@/content/industries";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return {
    title: `${industry.name} Staffing`,
    description: industry.lede,
  };
}

export default async function IndustryDetailPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return <IndustryLanding industry={industry} />;
}
