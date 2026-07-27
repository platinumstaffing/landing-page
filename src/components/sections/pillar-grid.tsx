import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Pillar = {
  id: string;
  title: string;
  description: string;
};

/**
 * Hairline-framed "industrial grid" of value pillars. Cells sit on a 1px border
 * matrix (no floating cards, no shadows) per the Hairline-First rule, with a
 * leading index number for editorial rhythm.
 */
export function PillarGrid({
  pillars,
  className,
}: {
  pillars: readonly Pillar[];
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border", className)}>
      <ul className="grid gap-px bg-border sm:grid-cols-2">
        {pillars.map((pillar, index) => (
          <Reveal
            key={pillar.id}
            as="li"
            delay={index * 0.06}
            className="bg-surface"
          >
            <div className="flex h-full flex-col gap-3 p-6 sm:p-8">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
