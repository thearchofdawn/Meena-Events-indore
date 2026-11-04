import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots { const isPreview = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV !== "production"; if (isPreview) return { rules: [{ userAgent: "*", disallow: "/" }] }; return { rules: [{ userAgent: "*", allow: "/" }], sitemap: new URL("/sitemap.xml", site.url).toString(), host: site.url }; }
