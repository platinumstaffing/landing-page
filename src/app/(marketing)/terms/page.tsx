import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      status="Status: Draft — pending legal review"
      draft
      draftNote="These Terms & Conditions are a working skeleton for review only. They are not yet in effect and require review and approval by qualified counsel before publication. Items in [brackets] require confirmation from Platinum Staffing."
    >
      <p>
        These Terms &amp; Conditions govern your use of the {siteConfig.name}{" "}
        website. By accessing or using this website, you agree to these terms.
        If you do not agree, please do not use the site. [Confirm legal entity
        name and any separate client or candidate agreements that take
        precedence.]
      </p>

      <h2>Use of this website</h2>
      <p>
        You may use this website for lawful purposes, to learn about our
        services, search opportunities, and contact our team. You agree not to
        misuse the site, interfere with its operation, attempt to access it in
        an unauthorized way, or submit false or misleading information.
      </p>

      <h2>Our services</h2>
      <p>
        This website provides information about Platinum Staffing&rsquo;s
        workforce solutions. Nothing on this site is a guarantee of employment,
        placement, or a particular result. Staffing and recruitment services are
        provided under separate agreements. [Confirm how services are contracted
        and any terms that should be referenced here.]
      </p>

      <h2>Submissions you provide</h2>
      <p>
        When you submit information, including résumés, applications, or
        inquiries, you confirm that it is accurate and that you have the right
        to share it. Your submissions are also handled as described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content on this website, including text, graphics, logos, and the
        Platinum Staffing name and marks, is owned by or licensed to Platinum
        Staffing and is protected by applicable law. You may not reproduce or
        reuse it without permission, except as reasonably needed to use the
        site.
      </p>

      <h2>Third-party links</h2>
      <p>
        This site may link to third-party websites we do not control. We are not
        responsible for the content or practices of those sites, and linking
        does not imply endorsement.
      </p>

      <h2>Disclaimers</h2>
      <p>
        This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis without warranties of any kind, to the extent
        permitted by law. [Legal review required: confirm the specific warranty
        disclaimers appropriate for this business and jurisdiction.]
      </p>

      <h2>Limitation of liability</h2>
      <p>
        [Legal review required: confirm the limitation of liability appropriate
        for Platinum Staffing, including any caps and excluded damages.]
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Commonwealth of
        Pennsylvania, without regard to conflict-of-law principles. [Confirm
        governing law, venue, and dispute-resolution approach.]
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. When we do, we will revise
        the date shown at the top of this page. Continued use of the site after
        changes take effect means you accept the updated terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms? Please{" "}
        <Link href="/contact">contact our team</Link>. [Add a legal or business
        contact address once confirmed.]
      </p>
    </LegalPage>
  );
}
