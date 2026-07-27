import type { Metadata } from "next";

import { ComingSoon } from "@/components/layout/coming-soon";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <ComingSoon
      title="Terms & Conditions"
      description="Legal copy has not been provided yet. This page will be published once the client supplies approved Terms & Conditions."
    />
  );
}
