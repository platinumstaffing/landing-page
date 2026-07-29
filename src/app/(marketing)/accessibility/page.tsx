import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Platinum Staffing & Recruitment is committed to digital accessibility. Read how we work to meet WCAG 2.2 AA and how to reach us with accessibility feedback.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      status="Last updated: July 27, 2026"
    >
      <p>
        {siteConfig.name} is committed to ensuring digital accessibility for
        people of all abilities. We want everyone, including employers and job
        seekers who rely on assistive technology, to be able to use this website
        to explore our services, search opportunities, and reach our team.
      </p>

      <h2>Our conformance goal</h2>
      <p>
        We aim to meet the{" "}
        <a
          href="https://www.w3.org/TR/WCAG22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.2, Level AA
        </a>
        . These guidelines explain how to make web content more accessible to
        people with a wide range of disabilities, including visual, auditory,
        physical, speech, cognitive, and neurological needs. Accessibility is
        part of how we build this site, not a step we add at the end.
      </p>

      <h2>What we do</h2>
      <p>Measures we take across the website include:</p>
      <ul>
        <li>
          <strong>Semantic structure.</strong> Pages use meaningful headings,
          landmarks, and lists so screen readers can navigate content in a
          logical order.
        </li>
        <li>
          <strong>Keyboard access.</strong> Interactive elements, including
          menus, forms, and dialogs, are operable with a keyboard, and a visible
          focus indicator shows where you are on the page.
        </li>
        <li>
          <strong>Reduced motion.</strong> Animation respects your system
          &ldquo;reduce motion&rdquo; preference; motion is used to support
          understanding, never to delay reading.
        </li>
        <li>
          <strong>Readable contrast.</strong> Text and interface colors are
          chosen to provide strong contrast against their backgrounds.
        </li>
        <li>
          <strong>Clear forms.</strong> Form fields have visible labels,
          required fields are marked, and errors are announced with guidance on
          how to fix them.
        </li>
        <li>
          <strong>Responsive design.</strong> Layouts adapt to phones, tablets,
          and desktops, and support browser zoom and larger text.
        </li>
      </ul>

      <h2>Ongoing effort</h2>
      <p>
        Accessibility is an ongoing commitment. We continue to review and
        improve the site as we add features and content. If you use assistive
        technology and encounter a barrier, please tell us, your feedback helps
        us prioritize fixes.
      </p>

      <h2>Contact us about accessibility</h2>
      <p>
        If you have difficulty accessing any part of this website, or you have a
        suggestion, please <Link href="/contact">contact our team</Link>. Let us
        know the page, the issue you experienced, and the assistive technology
        or browser you were using, and we will work to provide the information
        or resolve the barrier.
      </p>
    </LegalPage>
  );
}
