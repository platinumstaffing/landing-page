export type ImageAspectRatio =
  "16:10" | "16:9" | "16:7" | "4:5" | "4:3" | "3:2";

export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  label: string;
  aspectRatio: ImageAspectRatio;
  width: number;
  height: number;
  focalPoint: string;
};

export const imageAspectClasses: Record<ImageAspectRatio, string> = {
  "16:10": "aspect-[16/10]",
  "16:9": "aspect-[16/9]",
  "16:7": "aspect-[16/7]",
  "4:5": "aspect-[4/5]",
  "4:3": "aspect-[4/3]",
  "3:2": "aspect-[3/2]",
};
