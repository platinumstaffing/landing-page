import { Container } from "@/components/layout/container";
import { employers } from "@/content/employers";

export function TrustedBy() {
  if (employers.length === 0) return null;

  return (
    <section className="border-border bg-surface border-b py-8">
      <Container>
        <p className="text-muted-foreground text-center text-xs font-semibold tracking-[0.18em] uppercase">
          Trusted by Employers
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {employers.map((employer) => (
            <li
              key={employer.id}
              className="font-heading text-navy/70 text-sm font-semibold tracking-wide uppercase"
            >
              {employer.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
