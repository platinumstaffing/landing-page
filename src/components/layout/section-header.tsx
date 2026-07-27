import { Eyebrow } from "@/components/layout/eyebrow";
import { Heading } from "@/components/layout/heading";
import { Prose } from "@/components/layout/prose";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
  level?: "h1" | "h2" | "h3";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
  level = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Heading
        level={level}
        onDark={onDark}
        className={cn(eyebrow && "mt-3")}
      >
        {title}
      </Heading>
      {description ? (
        <Prose onDark={onDark} size="lg" className="mt-4">
          <p>{description}</p>
        </Prose>
      ) : null}
    </div>
  );
}
