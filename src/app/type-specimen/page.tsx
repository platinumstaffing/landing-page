import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";

// Temporary route to compare body-font candidates against the brand's Manrope headings.
// Remove once the body typeface is signed off (see docs/DECISIONS.md D1).

const instrument = Instrument_Sans({ subsets: ["latin"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Type specimen (internal)",
  robots: { index: false, follow: false },
};

const heading = "Workforce Solutions That Keep Your Business Moving";
const body =
  "Since 2019, Platinum Staffing & Recruitment has partnered with employers across Pennsylvania to solve workforce challenges through dependable staffing and recruitment solutions. With a growing network of more than 40,000 professionals, we help organizations build stronger teams while creating meaningful career opportunities.";

function Specimen({
  label,
  bodyClass,
  recommended,
}: {
  label: string;
  bodyClass?: string;
  recommended?: boolean;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-8">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
        {recommended ? " · recommended" : ""}
      </p>
      <h2 className="font-heading text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl">
        {heading}
      </h2>
      <p className={`mt-5 max-w-prose text-base leading-relaxed text-foreground/80 ${bodyClass ?? ""}`}>
        {body}
      </p>
      <div className={`mt-5 flex flex-wrap gap-4 text-sm ${bodyClass ?? ""}`}>
        <span>Request Talent</span>
        <span>Temp-to-Hire</span>
        <span>10,000+ successful placements</span>
        <span>abcdefghijklmnopqrstuvwxyz 0123456789</span>
      </div>
    </section>
  );
}

export default function TypeSpecimenPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-heading text-2xl font-bold text-foreground">
        Body font comparison
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Headings are Manrope in every card. Only the body face changes. Internal review only.
      </p>
      <div className="mt-10 space-y-8">
        <Specimen label="Libre Franklin (current)" recommended />
        <Specimen label="Instrument Sans" bodyClass={instrument.className} />
        <Specimen label="Inter (brand-guide default)" bodyClass={inter.className} />
      </div>
    </main>
  );
}
