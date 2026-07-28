import Image from "next/image";

import type { HomeImageAsset } from "@/content/home-images";
import { cn } from "@/lib/utils";

const aspectClasses = {
  "16:10": "aspect-[16/10]",
  "4:5": "aspect-[4/5]",
  "4:3": "aspect-[4/3]",
  "3:2": "aspect-[3/2]",
  "3:4": "aspect-[3/4]",
} as const;

export function EditorialImage({
  image,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  image: HomeImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "relative isolate overflow-hidden border border-border bg-surface-muted",
        aspectClasses[image.aspectRatio],
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain object-center"
        style={{ objectPosition: image.focalPoint }}
      />
      <span
        aria-hidden
        className="absolute top-4 left-4 z-10 size-3 border-t border-l border-silver"
      />
      <span
        aria-hidden
        className="absolute right-4 bottom-4 z-10 size-3 border-r border-b border-silver"
      />
    </figure>
  );
}
