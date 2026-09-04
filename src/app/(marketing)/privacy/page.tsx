import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/legal-page";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      status="Status: Draft — pending legal review"
      draft
      draftNote="This Privacy Policy is a working draft prepared to reflect how the website currently handles information. It is not yet in effect and must be reviewed and approved before publication. Items in [brackets] require confirmation from Platinum Staffing."
    >
      <p>
        {siteConfig.name} (&ldquo;Platinum Staffing,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;) respects your privacy. This policy explains what
        information we collect through this website, how we use it, and the
        choices you have. It applies to this website only and does not cover any
        separate agreements between Platinum Staffing and its clients or
        candidates. [Confirm legal entity name and any affiliated companies.]
      </p>

      <h2>Information we collect</h2>
      <h3>Information you provide</h3>
      <p>
        We collect information you submit through our forms. Depending on the
        form, this may include:
      </p>
      <ul>
        <li>
          <strong>Contact and inquiry details</strong> such as your name, email
          address, phone number, company or organization, and the message or
          hiring details you send us.
        </li>
        <li>
          <strong>Job seeker information</strong> such as your name, contact
          details, work preferences, and any résumé or document you upload to
          join our talent network.
        </li>
      </ul>
      <h3>Information we do not collect</h3>
      <p>
        This website does not use third-party advertising or analytics tracking
        cookies, and it does not build advertising profiles about you. We use a
        hidden anti-spam field on our forms to help prevent automated
        submissions. [Confirm whether any analytics or marketing tools will be
        added; if so, this section must be updated.]
      </p>

      <h2>How we use your information</h2>
      <p>We use the information you provide to:</p>
      <ul>
        <li>Respond to your inquiry or request for talent;</li>
        <li>
          Review your qualifications and match you with employment opportunities
          in our network;
        </li>
        <li>Provide staffing and recruitment services; and</li>
        <li>
          Contact you about your request and, where you have agreed, about
          related opportunities.
        </li>
      </ul>

      <h2>How your information is handled and shared</h2>
      <p>
        We use trusted service providers to operate this website and process
        submissions. These currently include:
      </p>
      <ul>
        <li>
          <strong>Hosting</strong> of the website with our hosting provider.
        </li>
        <li>
          <strong>Email delivery</strong> to route form submissions to our team.
        </li>
        <li>
          <strong>Secure file storage</strong> for résumés and documents you
          upload, stored in non-public storage.
        </li>
      </ul>
      <p>
        We may share your information with employer partners as part of
        providing staffing services, for example when presenting your
        qualifications for a role. [Confirm employer-sharing practices and
        whether candidate consent is obtained before sharing.] We do not sell
        your personal information.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep the information you provide for as long as needed to provide our
        services and for legitimate business or legal purposes. [Confirm
        specific retention periods for inquiries and for résumés in the talent
        network.]
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You may contact us to request access to, correction of, or deletion of
        the personal information you have submitted, and to ask that we stop
        contacting you. [Confirm which privacy laws apply (for example,
        applicable U.S. state privacy laws, including Pennsylvania, New Jersey,
        and New York) and list the specific rights and response times those laws
        require.]
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable measures to protect the information submitted through
        this website, including storing uploaded documents in non-public
        storage. No method of transmission or storage is completely secure, and
        we cannot guarantee absolute security.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        This website is intended for adults seeking employment or staffing
        services and is not directed to children. [Confirm minimum age, for
        example 16 or 18.]
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will revise
        the date shown at the top of this page.
      </p>

      <h2>Contact us</h2>
      <p>
        For privacy questions or requests, please{" "}
        <Link href="/contact">contact our team</Link>. [Add a dedicated privacy
        contact email and mailing address once confirmed.]
      </p>
    </LegalPage>
  );
}
