import { siteConfig } from "@/content/site";

function siteUrl(path: string): string {
  return `${siteConfig.url.replace(/\/$/, "")}${path}`;
}

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
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "State",
      name,
    })),
    description: siteConfig.description,
    logo: siteUrl("/logos/platinum-lockup.png"),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: siteUrl(item.href),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
