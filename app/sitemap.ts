import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { portfolioProjects } from "@/config/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const isPreview = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV !== "production"; if (isPreview) return []; const routes = ["/","/about","/services","/wedding-planning","/corporate-events","/social-celebrations","/portfolio","/testimonials","/contact","/privacy","/terms"]; const projects = portfolioProjects.filter(p => !p.demo).map(p => `/portfolio/${p.slug}`); return [...routes,...projects].map(path => ({ url: new URL(path,site.url).toString(), lastModified: new Date(), changeFrequency: path === "/portfolio" ? "weekly" : "monthly", priority: path === "/" ? 1 : path === "/contact" ? .9 : .7 })); }
