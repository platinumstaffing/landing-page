import type { Metadata } from "next";

import { ComingSoon } from "@/components/layout/coming-soon";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  robots: { index: false, follow: false },
};

export default function AccessibilityPage() {
  return (
    <ComingSoon
      title="Accessibility Statement"
      description="An accessibility statement will be published once reviewed and approved. We are building toward WCAG 2.2 AA across the site."
    />
  );
}
