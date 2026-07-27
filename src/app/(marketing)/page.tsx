import { CareerPathway } from "@/components/sections/career-pathway";
import { FinalCta } from "@/components/sections/final-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ResourcesTeaser } from "@/components/sections/resources-teaser";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { TrustedBy } from "@/components/sections/trusted-by";
import { WorkforceImpact } from "@/components/sections/workforce-impact";
import { WhyEmployers } from "@/components/sections/why-employers";
import { employerProcess } from "@/content/process";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustedBy />
      <WorkforceImpact />
      <WhyEmployers />
      <CareerPathway />
      <IndustriesGrid tone="muted" />
      <SolutionsGrid tone="default" />
      <ProcessSteps steps={employerProcess} tone="muted" />
      <ResourcesTeaser />
      <FinalCta
        title="Ready to Build Your Workforce?"
        description="Whether you're hiring for one position or building an entire team, Platinum Staffing & Recruitment is ready to provide dependable workforce solutions tailored to your business."
        primary={{ label: "Request Talent", href: "/contact#request-talent" }}
        secondary={{
          label: "Schedule a Consultation",
          href: "/contact#consultation",
        }}
      />
    </>
  );
}
