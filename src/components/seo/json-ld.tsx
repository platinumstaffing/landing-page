import { siteConfig } from "@/content/site";

/**
 * Organization structured data. Address/telephone are omitted until the client
 * supplies verified contact details (see docs/CONTENT_GAPS.md).
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    foundingDate: String(siteConfig.founded),
    areaServed: siteConfig.region,
    description: siteConfig.description,
    logo: `${siteConfig.url.replace(/\/$/, "")}/logos/platinum-lockup.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
