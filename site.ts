/**
 * SITE CONFIGURATION — single source of truth for business details.
 *
 * Verification flags:
 *   `verified: true`  -> the fact has been confirmed by Meena Events and may appear in
 *                        structured data (SEO) as well as on the page.
 *   `verified: false` -> the fact is withheld from public display and structured data.
 *
 * Before launch: confirm every item marked `verified: false`, then flip the flag.
 */

export const site = {
  name: "Meena Events",
  legalName: "Meena Events",
  tagline: "Thoughtfully Planned. Beautifully Celebrated.",
  // Set NEXT_PUBLIC_SITE_URL in the deployment environment. Preview deployments
  // fall back to their Vercel URL rather than claiming the production domain.
  url: (process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}` || "https://meenaevents.com").replace(/\/$/, ""),
  locale: "en_IN",
  description:
    "Meena Events is a wedding planning and event management studio in Indore, Madhya Pradesh, creating thoughtfully planned weddings, corporate events and celebrations.",

  /**
   * Public listing details are populated for the preview, but keep this false
   * until Meena Events confirms the phone and address for production use.
   */
  businessContactDetailsVerified: false,

  contact: {
    phoneDisplay: "+91 96852 72524",
    phoneE164: "+919685272524",
    // Used for wa.me links. Must be digits only, country code included.
    whatsappNumber: "919685272524",
    // Not provided yet. Leave null until confirmed; the site hides email links when null.
    email: null as string | null,
  },

  address: {
    lines: ["42, Vasant Vihar Colony", "Vijay Nagar", "Indore, Madhya Pradesh 452010"],
    streetAddress: "42, Vasant Vihar Colony, Vijay Nagar",
    locality: "Indore",
    region: "Madhya Pradesh",
    postalCode: "452010",
    country: "IN",
  },

  // Directions link built from the Google Maps business address. No coordinates are used.
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Meena Events, 42 Vasant Vihar Colony, Vijay Nagar, Indore, Madhya Pradesh 452010"),
  // Official Google Maps place listing. Visitors can view the listing photos within Google Maps.
  googleMapsListingUrl:
    "https://www.google.com/maps/search/?api=1&query=Meena%20Events&query_place_id=ChIJZzlAcVodYzkRHF54zHddkug",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Meena%20Events%2C%2042%20Vasant%20Vihar%20Colony%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010&output=embed",

  // Set to a verified URL to show the link. Leave null to hide it.
  instagramUrl: null as string | null,
  // Set to the verified Google review page URL to show the link. Leave null to hide it.
  googleReviewsUrl: null as string | null,

  // Chosen for the whole site. Change in one place.
  whatsappGreeting:
    "Hello Meena Events, I would like to plan an event. Could you help me with the details?",

  foundingYear: 2014,

  /** Hide the placeholder notice on the portfolio page once real projects are added. */
  showPlaceholderNotice: true,
} as const;

export type SiteConfig = typeof site;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerServiceLinks = [
  { label: "Wedding Planning", href: "/wedding-planning" },
  { label: "Wedding Décor", href: "/services#wedding-decor" },
  { label: "Corporate Events", href: "/corporate-events" },
  { label: "Social Celebrations", href: "/social-celebrations" },
  { label: "Event Management", href: "/services#event-production" },
] as const;
