import { cn } from "@/lib/utils";

export function EditorialIntro({
  index,
  eyebrow,
  title,
  description,
  onDark = false,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "grid gap-6 border-t pt-5 lg:grid-cols-[8rem_minmax(0,1fr)]",
        onDark ? "border-silver/35" : "border-border",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-start justify-between gap-3 text-xs font-semibold tracking-[0.16em] uppercase lg:block",
          onDark ? "text-silver" : "text-primary",
        )}
      >
        <span>{index}</span>
        <span className="lg:mt-2 lg:block">{eyebrow}</span>
      </div>
      <div className="max-w-4xl">
        <h2
          className={cn(
            "font-heading text-[clamp(2.2rem,5vw,4.75rem)] leading-[0.98] font-bold tracking-[-0.04em] text-balance",
            onDark ? "text-navy-foreground" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-[62ch] text-base leading-relaxed text-pretty sm:text-lg",
              onDark ? "text-silver" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
