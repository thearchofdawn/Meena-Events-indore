import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { portfolioProjects } from "@/config/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const isPreview = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV !== "production";
  if (isPreview) return [];
  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/wedding-planning",
    "/corporate-events",
    "/social-celebrations",
    "/portfolio",
    "/testimonials",
    "/contact",
    "/privacy",
    "/terms",
  ];

  // Demo projects must not be indexed as Meena Events case studies.
  const projectRoutes = portfolioProjects.filter((p) => !p.demo).map((p) => `/portfolio/${p.slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/portfolio" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.9 : 0.7,
  }));
}
