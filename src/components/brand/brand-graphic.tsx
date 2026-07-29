import { cn } from "@/lib/utils";

/**
 * Restrained brand-graphic placeholder derived from the logo's stem + arc motif.
 * Swappable for real photography via the same aspect-ratio container.
 */
type BrandGraphicProps = {
  className?: string;
  label?: string;
};

export function BrandGraphic({
  className,
  label = "Platinum Staffing & Recruitment",
}: BrandGraphicProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("bg-navy relative overflow-hidden rounded-xl", className)}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1e2a44 0%, #2a1f4a 48%, #4b2e83 100%)",
        }}
      />
      <div
        aria-hidden
        className="border-silver/30 absolute -right-8 -bottom-16 h-[140%] w-[70%] rounded-full border"
      />
      <div
        aria-hidden
        className="bg-primary absolute top-1/4 left-[18%] h-[55%] w-3 rounded-full"
      />
      <div
        aria-hidden
        className="border-silver/70 absolute top-[22%] left-[22%] h-[38%] w-[38%] rounded-full border-[10px]"
        style={{ clipPath: "inset(0 0 0 45%)" }}
      />
      <div
        aria-hidden
        className="from-navy/80 absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent"
      />
    </div>
  );
}
