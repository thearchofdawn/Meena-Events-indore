import { site } from "@/config/site";
import { services, trustStats } from "@/config/content";

/**
 * LocalBusiness structured data.
 * Includes only verified facts. Unverified statistics are omitted until confirmed
 * (set `verified: true` in config/content.ts after the business confirms them).
 */
export function localBusinessJsonLd() {
  const founded = trustStats.find((s) => s.id === "founded");
  const rating = trustStats.find((s) => s.id === "rating");
  const reviews = trustStats.find((s) => s.id === "reviews");
  const ratingVerified = Boolean(rating?.verified && reviews?.verified && rating.enabled && reviews.enabled);
  const sameAs = [site.instagramUrl].filter((u): u is string => Boolean(u));

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    description: site.description,
    ...(site.businessContactDetailsVerified
      ? {
          telephone: site.contact.phoneE164,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.streetAddress,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country,
          },
        }
      : {}),
    areaServed: { "@type": "City", name: "Indore" },
    serviceType: services.map((s) => s.title),
    hasMap: site.mapsDirectionsUrl,
    ...(founded?.verified && founded.enabled ? { foundingDate: String(site.foundingYear) } : {}),
    ...(ratingVerified && rating && reviews
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: rating.value,
            reviewCount: reviews.value,
            bestRating: "5",
          },
        }
      : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en-IN",
  };
}
