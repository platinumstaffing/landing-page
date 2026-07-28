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
      <h2 className="text-xs font-semibold tracking-[0.14em] text-silver uppercase">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-navy-foreground/85 underline-offset-4 transition-colors hover:text-white hover:underline"
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
      <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="border-t border-silver/35 pt-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(28rem,0.65fr)] lg:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-silver uppercase">
                Platinum Staffing & Recruitment
              </p>
              <p className="mt-7 max-w-4xl font-heading text-[clamp(2.35rem,5vw,5.4rem)] font-bold leading-[0.94] tracking-[-0.05em] text-balance">
                Dependable people. Stronger operations. Work that moves forward.
              </p>
              <p className="mt-7 max-w-[58ch] leading-relaxed text-silver">
                Responsive staffing solutions, industry knowledge, and long-term
                partnerships across {siteConfig.region}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact#request-talent">Request Talent</Link>
                </Button>
                <Button
                  asChild
                  variant="quiet"
                  className="border-silver/50 text-navy-foreground hover:border-navy-foreground hover:bg-transparent hover:text-navy-foreground"
                >
                  <Link href="/jobs">Find Jobs</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-9 border-t border-silver/35 pt-7 sm:grid-cols-3 lg:border-t-0 lg:pt-1">
              <FooterColumn title="Employers" links={footerNav.employers} />
              <FooterColumn title="Job Seekers" links={footerNav.jobSeekers} />
              <FooterColumn title="Company" links={footerNav.company} />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-silver/35 pt-6 text-xs tracking-wide text-silver sm:flex-row sm:items-center sm:justify-between">
          <Logo variant="wordmark-dark" href="/" />
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.region}</p>
        </div>
      </div>
    </footer>
  );
}
