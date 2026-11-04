import Image from "next/image";
import type { SiteImage as SiteImageConfig } from "@/config/images";

type Props = {
  image: SiteImageConfig;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fit?: "cover" | "contain";
};

/**
 * Renders an image from config/images.ts. Raster photographs are optimised
 * (AVIF/WebP, responsive sizes, lazy loading). SVG placeholders bypass the optimiser.
 */
export function SiteImage({ image, sizes = "100vw", priority = false, className = "", fit = "cover" }: Props) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      unoptimized={image.src.endsWith(".svg")}
      className={`${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
    />
  );
}
