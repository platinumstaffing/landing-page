import { HomeCandidatePathway } from "@/components/home/home-candidate-pathway";
import { HomeConversionClose } from "@/components/home/home-conversion-close";
import { HomeEmployerProof } from "@/components/home/home-employer-proof";
import { HomeHero } from "@/components/home/home-hero";
import { HomeImpact } from "@/components/home/home-impact";
import { HomeIndustries } from "@/components/home/home-industries";
import { HomeResourceDesk } from "@/components/home/home-resource-desk";
import { WorkforceBlueprint } from "@/components/home/workforce-blueprint";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeImpact />
      <HomeEmployerProof />
      <HomeIndustries />
      <WorkforceBlueprint />
      <HomeCandidatePathway />
      <HomeResourceDesk />
      <HomeConversionClose />
    </>
  );
}
