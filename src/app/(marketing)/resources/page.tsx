import type { Metadata } from "next";

import { ComingSoon } from "@/components/layout/coming-soon";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Workforce insights, employer resources, and career advice from Platinum Staffing & Recruitment.",
  robots: { index: false, follow: true },
};

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Resource Center"
      description="The Resource Center — workforce insights, industry reports, employer guides, career advice, and company news — is planned for the next implementation pass."
    />
  );
}
