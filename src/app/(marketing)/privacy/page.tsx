import type { Metadata } from "next";

import { ComingSoon } from "@/components/layout/coming-soon";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <ComingSoon
      title="Privacy Policy"
      description="Legal copy has not been provided yet. This page will be published once the client supplies the approved Privacy Policy."
    />
  );
}
