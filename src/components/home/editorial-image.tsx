import Image from "next/image";

import type { HomeImageAsset } from "@/content/home-images";
import { cn } from "@/lib/utils";

const aspectClasses = {
  "16:10": "aspect-[16/10]",
  "4:5": "aspect-[4/5]",
  "4:3": "aspect-[4/3]",
  "3:2": "aspect-[3/2]",
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
        "group relative isolate overflow-hidden border border-border bg-secondary",
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
        className="object-cover transition-transform duration-700 ease-brand group-hover:scale-[1.015]"
        style={{ objectPosition: image.focalPoint }}
      />
      <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-4 border-t border-silver/60 bg-navy px-4 py-3 text-[0.68rem] font-semibold tracking-[0.14em] text-navy-foreground uppercase sm:px-5">
        <span>{image.label}</span>
        <span className="text-silver">{image.aspectRatio}</span>
      </figcaption>
      <span
        aria-hidden
        className="absolute top-4 left-4 z-10 size-3 border-t border-l border-silver"
      />
      <span
        aria-hidden
        className="absolute right-4 bottom-14 z-10 size-3 border-r border-b border-silver"
      />
    </figure>
  );
}
