import type { Metadata } from "next";
import { site } from "@/config/site";
import type { SiteImage } from "@/config/images";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: SiteImage;
};

/**
 * Builds consistent page metadata: canonical URL, Open Graph and Twitter tags.
 * SVG placeholders are skipped for social previews because most crawlers do not
 * render SVG. Replace them with JPG or PNG images in config/images.ts.
 */
export function buildMetadata({ title, description, path = "/", image }: MetaInput): Metadata {
  const url = new URL(path, site.url).toString();
  const ogImage =
    image && !image.src.endsWith(".svg")
      ? [{ url: new URL(image.src, site.url).toString(), width: image.width, height: image.height, alt: image.alt }]
      : undefined;

  const isPreview = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV !== "production";
  return {
    title,
    description,
    alternates: isPreview ? undefined : { canonical: url },
    robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: ogImage,
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      images: ogImage?.map((i) => i.url),
    },
  };
}
