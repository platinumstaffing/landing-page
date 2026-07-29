import { cn } from "@/lib/utils";

type SectionTone = "default" | "muted" | "navy" | "surface";

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  muted: "bg-surface-muted text-foreground",
  surface: "bg-surface text-foreground",
  navy: "bg-navy text-navy-foreground",
};

type SectionProps = React.ComponentProps<"section"> & {
  tone?: SectionTone;
  bleed?: boolean;
};

export function Section({
  className,
  tone = "default",
  bleed = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 sm:py-24 lg:py-32",
        toneClasses[tone],
        bleed && "w-full",
        className,
      )}
      {...props}
    />
  );
}
