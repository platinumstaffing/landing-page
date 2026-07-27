import type { Metadata } from "next";

import { ComingSoon } from "@/components/layout/coming-soon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Platinum Staffing & Recruitment — our story, mission, values, and commitment to Pennsylvania employers and job seekers.",
  robots: { index: false, follow: true },
};

export default function AboutPage() {
  return (
    <ComingSoon
      title="About Platinum Staffing"
      description="Our full About experience — story, mission, vision, values, leadership, and why employers choose Platinum — is next in the build plan. In the meantime, explore Employer Solutions or Contact our team."
    />
  );
}
