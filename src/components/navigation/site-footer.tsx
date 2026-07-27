import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-silver transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo variant="wordmark-dark" href="/" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver">
              Helping businesses build dependable workforces through responsive
              staffing solutions, industry expertise, and long-term partnerships
              across {siteConfig.region}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="sm">
                <Link href="/contact#request-talent">Request Talent</Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="quiet"
                className="border-silver/50 text-white hover:border-white hover:bg-white/5 hover:text-white"
              >
                <Link href="/jobs">Find Jobs</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FooterColumn title="Employers" links={footerNav.employers} />
            <FooterColumn title="Job Seekers" links={footerNav.jobSeekers} />
            <FooterColumn title="Company" links={footerNav.company} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.region}</p>
        </div>
      </div>
    </footer>
  );
}
