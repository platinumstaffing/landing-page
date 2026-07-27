import { cn } from "@/lib/utils";

type EyebrowProps = React.ComponentProps<"p"> & {
  onDark?: boolean;
};

export function Eyebrow({ className, onDark = false, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-heading text-xs font-semibold uppercase tracking-[0.18em]",
        onDark ? "text-silver" : "text-primary",
        className,
      )}
      {...props}
    />
  );
}
