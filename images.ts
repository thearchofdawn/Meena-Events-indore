/**
 * IMAGE CONFIGURATION — replace image files here when real photographs are available.
 *
 * Every image on the site is referenced from this file. To replace one:
 *   1. Add your photo to /public/images/ (JPG, PNG or WebP; 2400px wide or larger for heroes).
 *   2. Change `src` below to the new path, e.g. "/images/hero-mandap.jpg".
 *   3. Update `alt` so it describes the photograph accurately.
 *
 * Current files in /public/images/placeholders/ are illustrative placeholders only.
 * They are NOT photographs of Meena Events' work and must be replaced before launch.
 */

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** true for illustrative placeholders. Used to show a notice in dev and for audit. */
  placeholder: boolean;
};

const placeholder = (name: string, alt: string): SiteImage => ({
  src: `/images/placeholders/${name}.svg`,
  alt,
  width: 1600,
  height: 1200,
  placeholder: true,
});

export const images = {
  hero: placeholder(
    "hero",
    "Placeholder for a cinematic photograph of a floral mandap at an Indian wedding"
  ),
  intro: placeholder("intro", "Placeholder for an editorial wedding ceremony photograph"),
  about: placeholder("about", "Placeholder for an editorial photograph of styled wedding florals"),
  services: {
    wedding: placeholder("service-wedding", "Placeholder for a wedding planning photograph"),
    decor: placeholder("service-decor", "Placeholder for a wedding décor and stage photograph"),
    corporate: placeholder("service-corporate", "Placeholder for a corporate event photograph"),
    social: placeholder("service-social", "Placeholder for a private celebration photograph"),
    production: placeholder("service-production", "Placeholder for an event production photograph"),
  },
  pages: {
    weddings: placeholder("page-weddings", "Placeholder for a wedding page feature photograph"),
    corporate: placeholder("page-corporate", "Placeholder for a corporate event page feature photograph"),
    social: placeholder("page-social", "Placeholder for a social celebration page feature photograph"),
    services: placeholder("page-services", "Placeholder for a services overview photograph"),
    testimonials: placeholder("page-testimonials", "Placeholder for a testimonials page photograph"),
    contact: placeholder("page-contact", "Placeholder for a contact page photograph"),
    portfolio: placeholder("page-portfolio", "Placeholder for a portfolio page photograph"),
  },
  destination: placeholder(
    "destination",
    "Placeholder for a destination celebration photograph"
  ),
  finalCta: placeholder("final-cta", "Placeholder for a cinematic event photograph"),
  portfolio: {
    p1: placeholder("portfolio-01", "Placeholder portfolio image 1"),
    p2: placeholder("portfolio-02", "Placeholder portfolio image 2"),
    p3: placeholder("portfolio-03", "Placeholder portfolio image 3"),
    p4: placeholder("portfolio-04", "Placeholder portfolio image 4"),
    p5: placeholder("portfolio-05", "Placeholder portfolio image 5"),
    p6: placeholder("portfolio-06", "Placeholder portfolio image 6"),
  },
} as const;
