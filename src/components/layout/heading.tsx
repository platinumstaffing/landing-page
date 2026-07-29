import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

const sizeClasses: Record<HeadingLevel, string> = {
  h1: "text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]",
  h2: "text-3xl leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl",
  h3: "text-xl leading-snug sm:text-2xl",
  h4: "text-lg leading-snug sm:text-xl",
};

type HeadingProps = React.ComponentProps<"h1"> & {
  as?: HeadingLevel;
  level?: HeadingLevel;
  onDark?: boolean;
};

export function Heading({
  as,
  level = "h2",
  onDark = false,
  className,
  ...props
}: HeadingProps) {
  const Tag = as ?? level;

  return (
    <Tag
      className={cn(
        "font-heading font-bold text-balance",
        sizeClasses[level],
        onDark ? "text-navy-foreground" : "text-foreground",
        className,
      )}
      {...props}
    />
  );
}
