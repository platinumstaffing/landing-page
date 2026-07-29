import { Info } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/layout/eyebrow";
import { Heading } from "@/components/layout/heading";

type LegalPageProps = {
  title: string;
  /** Short status line, e.g. "Last updated: July 27, 2026". */
  status: string;
  /** When true, shows the "draft, not yet in effect" review banner. */
  draft?: boolean;
  draftNote?: string;
  children: React.ReactNode;
};

/**
 * Shared layout for long-form legal content. Provides a hero, an optional
 * "pending legal review" notice, and manually-styled prose (no typography
 * plugin in this project) so pages can pass clean semantic HTML.
 */
export function LegalPage({
  title,
  status,
  draft = false,
  draftNote,
  children,
}: LegalPageProps) {
  return (
    <>
      <section className="border-border bg-surface-muted border-b">
        <Container className="grid max-w-5xl gap-8 py-16 sm:py-20 lg:grid-cols-[8rem_1fr] lg:py-24">
          <div className="border-primary border-t pt-4">
            <Eyebrow>Legal desk</Eyebrow>
          </div>
          <div>
            <Heading as="h1" level="h1" className="max-w-[18ch]">
              {title}
            </Heading>
            <p className="text-muted-foreground mt-5 text-sm font-medium">
              {status}
            </p>
          </div>
        </Container>
      </section>

      <Container className="max-w-3xl py-14 sm:py-16">
        {draft ? (
          <div className="border-primary/30 bg-accent mb-10 flex gap-3 rounded-xl border p-4 sm:p-5">
            <Info
              className="text-primary mt-0.5 size-5 shrink-0"
              weight="fill"
              aria-hidden
            />
            <p className="text-foreground text-sm leading-relaxed">
              {draftNote ??
                "This is a working draft provided for review. It is not yet in effect and is pending legal review. Items shown in [brackets] require confirmation before publication."}
            </p>
          </div>
        ) : null}

        <div className="text-muted-foreground [&_a]:text-primary [&_h2]:font-heading [&_h2]:text-foreground [&_h3]:font-heading [&_h3]:text-foreground [&_strong]:text-foreground max-w-none text-[0.95rem] leading-relaxed [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_li]:mt-1.5 [&_p]:mt-3 [&_strong]:font-semibold [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </>
  );
}
