import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { EditorialImage } from "@/components/layout/editorial-image";
import { EditorialPageHero } from "@/components/layout/editorial-page-hero";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FinalCta } from "@/components/sections/final-cta";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { leadershipIntro } from "@/content/about";
import { pageImages } from "@/content/page-images";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Leadership at Platinum Staffing & Recruitment is committed to integrity, experience, and personalized service. Biographies will be published as they are confirmed.",
};

export default function LeadershipPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Leadership", href: "/about/leadership" },
        ]}
      />
      <EditorialPageHero
        index="01.3"
        eyebrow="Leadership"
        title="Leadership that puts people first"
        description={<p>{leadershipIntro}</p>}
        primary={{ label: "Why Platinum", href: "/about/why-platinum" }}
        secondary={{ label: "Contact our team", href: "/contact" }}
        note="Bios forthcoming · Culture first"
        banner={{ family: "About", page: "Leadership" }}
        image={pageImages.teamCulture}
      />

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <EditorialImage image={pageImages.teamCulture} />
            <div>
              <SectionHeader
                eyebrow="As they become available"
                title="Leadership biographies will be published here"
                description="Names, roles, and photographs are not invented. When the client confirms leadership details, this page will carry them."
              />
              <Prose className="mt-6">
                <p>
                  Until then, the standard is already public: decisions are
                  guided by a commitment to helping employers build dependable
                  teams while creating opportunities for professionals to grow
                  their careers.
                </p>
              </Prose>
              <p className="border-border bg-muted text-muted-foreground mt-6 rounded-lg border px-4 py-3 text-sm">
                Leadership biographies and photographs will be added here as
                they become available.
              </p>
              <Button asChild variant="outline" className="mt-8">
                <Link href="/about/our-story">Read our story</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Let's Build Something Great Together"
        description="Talk with the team about workforce solutions or your next career opportunity."
      />
    </>
  );
}
