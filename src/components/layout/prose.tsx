import { cn } from "@/lib/utils";

type ProseProps = React.ComponentProps<"div"> & {
  size?: "sm" | "base" | "lg";
  onDark?: boolean;
};

const sizeClasses = {
  sm: "text-sm leading-relaxed",
  base: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
};

export function Prose({
  className,
  size = "base",
  onDark = false,
  ...props
}: ProseProps) {
  return (
    <div
      className={cn(
        "max-w-prose text-pretty",
        sizeClasses[size],
        onDark ? "text-navy-foreground/85" : "text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
