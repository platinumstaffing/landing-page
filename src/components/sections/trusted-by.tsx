import { Container } from "@/components/layout/container";
import { employers } from "@/content/employers";

export function TrustedBy() {
  if (employers.length === 0) return null;

  return (
    <section className="border-b border-border bg-surface py-8">
      <Container>
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Trusted by Employers
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {employers.map((employer) => (
            <li
              key={employer.id}
              className="font-heading text-sm font-semibold tracking-wide text-navy/70 uppercase"
            >
              {employer.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
