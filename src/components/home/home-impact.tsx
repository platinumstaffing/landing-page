import { Container } from "@/components/layout/container";
import { HomeStatLedger } from "./home-stat-ledger";

export function HomeImpact() {
  return (
    <section className="bg-navy text-navy-foreground py-14 sm:py-18">
      <Container className="max-w-[90rem]">
        <div className="mb-10 grid gap-6 lg:grid-cols-[8rem_1fr]">
          <p className="text-silver text-xs font-semibold tracking-[0.16em] uppercase">
            01 / Proven scale
          </p>
          <p className="font-heading max-w-3xl text-[clamp(1.7rem,3.2vw,3rem)] leading-tight font-semibold tracking-[-0.03em] text-balance">
            Credibility measured in relationships built, professionals reached,
            and teams kept moving.
          </p>
        </div>
        <HomeStatLedger />
      </Container>
    </section>
  );
}
