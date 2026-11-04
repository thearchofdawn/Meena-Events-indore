import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { portfolioProjects } from "@/config/content";
import { site } from "@/config/site";
import { images } from "@/config/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Explore Meena Events' portfolio of weddings, wedding décor, engagements, social celebrations and corporate events in Indore.",
  path: "/portfolio",
  image: images.pages.portfolio,
});

export default function PortfolioPage() {
  const hasDemo = portfolioProjects.some((p) => p.demo);

  return (
    <>
      <PageHero
        eyebrow="SELECTED CELEBRATIONS"
        title="Stories Told Through Beautiful Experiences."
        intro={hasDemo ? "A preview of how Meena Events' work will be presented. Verified event photographs and project stories will be added after client approval." : "Explore weddings, celebrations and corporate events planned by Meena Events. Select a category to filter, or open a gallery to view the images."}
        image={images.pages.portfolio}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        {site.showPlaceholderNotice && hasDemo && (
          <p className="mb-12 border-l-2 border-champagne bg-ivory-soft px-5 py-4 text-sm leading-relaxed text-charcoal/80">
            Sample layout. The projects below are placeholders for design review. Replace them with verified Meena Events
            projects in config/content.ts before launch.
          </p>
        )}
        <PortfolioGallery projects={portfolioProjects} />
        <div className="mt-16 border-t border-charcoal/10 pt-10">
          <p className="max-w-2xl text-sm leading-relaxed text-charcoal/70">
            Want to see photos currently shared on the public business listing? You can view them directly on Google Maps.
            They are not reproduced in this website gallery.
          </p>
          <a
            href={site.googleMapsListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex border-b border-champagne pb-2 text-sm tracking-wide text-wine hover:text-wine-deep"
          >
            Explore Meena Events photos on Google Maps ↗
          </a>
        </div>
      </section>

      <CtaBand
        title="Would you like something like this?"
        text="Tell us about your celebration and we will show you how we would approach it."
      />
    </>
  );
}
