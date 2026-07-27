import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  narrow?: boolean;
};

export function Container({
  className,
  narrow = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
      {...props}
    />
  );
}
