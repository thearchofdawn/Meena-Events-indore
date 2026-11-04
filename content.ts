/**
 * CONTENT CONFIGURATION — services, portfolio, statistics and page copy.
 *
 * Items marked `demo: true` are layout placeholders. Replace them with verified
 * Meena Events projects before launch and delete the flag.
 * Statistics are public only when BOTH `enabled` and `verified` are true.
 * Unverified values remain editable but are hidden from the website and structured data.
 */
import { images, type SiteImage } from "./images";

/* ------------------------------------------------------------------ */
/* Statistics                                                          */
/* ------------------------------------------------------------------ */

export type TrustStat = {
  id: string;
  value: string;
  label: string;
  note?: string;
  enabled: boolean;
  verified: boolean;
};

export const trustStats: TrustStat[] = [
  {
    id: "founded",
    value: "2014",
    label: "Established",
    note: "As listed in public business profiles. Confirm before launch.",
    enabled: true,
    verified: false,
  },
  {
    id: "events",
    value: "100+",
    label: "Events executed",
    note: "Only display if the business confirms this figure is accurate.",
    enabled: true,
    verified: false,
  },
  {
    id: "rating",
    value: "5.0",
    label: "Google rating",
    note: "Captured from the public Google listing. Update from the live listing.",
    enabled: true,
    verified: false,
  },
  {
    id: "reviews",
    value: "106",
    label: "Google reviews",
    note: "Captured at research time. Update from the live listing.",
    enabled: true,
    verified: false,
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  title: string;
  description: string;
  inclusions: string[];
  image: SiteImage;
  /** Where the "explore" link for this service leads. */
  href: string;
  cta: string;
  /** Matching portfolio category, for "related work" links. */
  portfolioCategory: PortfolioCategoryId;
};

export const services: Service[] = [
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    description:
      "From the first idea to the final celebration, we coordinate every element of your wedding with creativity, care and attention to detail.",
    inclusions: [
      "Complete wedding planning",
      "Partial wedding planning",
      "Engagement ceremonies",
      "Mehendi and haldi",
      "Sangeet and reception",
      "Wedding-day coordination",
      "Venue coordination",
      "Guest management",
    ],
    image: images.services.wedding,
    href: "/wedding-planning",
    cta: "Explore Wedding Planning",
    portfolioCategory: "weddings",
  },
  {
    id: "wedding-decor",
    title: "Wedding Décor & Design",
    description:
      "Transforming spaces into beautiful settings that reflect your story, style and vision.",
    inclusions: [
      "Theme decoration",
      "Stage design",
      "Floral styling",
      "Venue ambience",
      "Lighting arrangements",
      "Bride and groom entries",
      "Custom decorative concepts",
    ],
    image: images.services.decor,
    href: "/services#wedding-decor",
    cta: "Explore Wedding Decor",
    portfolioCategory: "decor",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    description:
      "Professional event experiences designed to bring teams, clients and audiences together.",
    inclusions: [
      "Conferences and seminars",
      "Award nights",
      "Exhibitions",
      "Product launches",
      "Roadshows",
      "Corporate celebrations",
      "Institutional events",
    ],
    image: images.services.corporate,
    href: "/corporate-events",
    cta: "Explore Corporate Events",
    portfolioCategory: "corporate",
  },
  {
    id: "social-celebrations",
    title: "Social Celebrations",
    description:
      "Thoughtfully planned celebrations for the occasions that deserve to be remembered.",
    inclusions: [
      "Birthdays",
      "Anniversaries",
      "Theme parties",
      "Private celebrations",
      "Kitty parties",
      "Special occasions",
    ],
    image: images.services.social,
    href: "/social-celebrations",
    cta: "Explore Social Events",
    portfolioCategory: "social",
  },
  {
    id: "event-production",
    title: "Event Production & Management",
    description:
      "Reliable coordination and execution that brings every moving part together.",
    inclusions: [
      "Vendor coordination",
      "Catering coordination",
      "Sound and lighting",
      "Artist management",
      "Guest handling",
      "Event-day operations",
    ],
    image: images.services.production,
    href: "/services#event-production",
    cta: "Discover Our Approach",
    portfolioCategory: "special",
  },
];

/** Extra service areas that appear on the Services overview page. */
export const specialEventsDescription =
  "Milestone functions, ceremonies and bespoke gatherings planned around the specific tone and purpose of each occasion.";

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export const portfolioCategories = [
  { id: "weddings", label: "Weddings" },
  { id: "decor", label: "Wedding Decor" },
  { id: "engagements", label: "Engagements" },
  { id: "social", label: "Social Events" },
  { id: "corporate", label: "Corporate Events" },
  { id: "special", label: "Special Celebrations" },
] as const;

export type PortfolioCategoryId = (typeof portfolioCategories)[number]["id"];

export type PortfolioProject = {
  slug: string;
  title: string;
  category: PortfolioCategoryId;
  location: string;
  summary: string;
  cover: SiteImage;
  gallery: SiteImage[];
  /** Optional event date, shown only when present. e.g. "February 2026". */
  date?: string;
  /** Optional video URL (YouTube or Vimeo embed URL). Only shown when present. */
  videoEmbedUrl?: string;
  /** Layout placeholder. Replace with a verified project and remove this flag. */
  demo: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "floral-mandap-concept",
    title: "Floral Mandap Concept",
    category: "decor",
    location: "Indore",
    summary:
      "A layered floral mandap with warm ambient lighting, designed around a family's colour story.",
    cover: images.portfolio.p1,
    gallery: [images.portfolio.p1, images.portfolio.p4],
    demo: true,
  },
  {
    slug: "sangeet-stage-design",
    title: "Sangeet Stage Design",
    category: "weddings",
    location: "Indore",
    summary:
      "An evening stage concept balancing dramatic lighting with a calm, uncluttered guest experience.",
    cover: images.portfolio.p2,
    gallery: [images.portfolio.p2, images.portfolio.p5],
    demo: true,
  },
  {
    slug: "engagement-garden-evening",
    title: "Garden Engagement Evening",
    category: "engagements",
    location: "Indore",
    summary:
      "An intimate garden engagement with soft candlelight, table styling and a timed programme of ceremonies.",
    cover: images.portfolio.p3,
    gallery: [images.portfolio.p3, images.portfolio.p6],
    demo: true,
  },
  {
    slug: "brand-launch-evening",
    title: "Brand Launch Evening",
    category: "corporate",
    location: "Indore",
    summary:
      "A product launch with a staged reveal, guest flow planning and coordinated sound and lighting.",
    cover: images.portfolio.p4,
    gallery: [images.portfolio.p4, images.portfolio.p1],
    demo: true,
  },
  {
    slug: "milestone-birthday-celebration",
    title: "Milestone Birthday Celebration",
    category: "social",
    location: "Indore",
    summary:
      "A private celebration built around a single theme, with décor, guest hosting and an evening timeline.",
    cover: images.portfolio.p5,
    gallery: [images.portfolio.p5, images.portfolio.p2],
    demo: true,
  },
  {
    slug: "anniversary-dinner-styling",
    title: "Anniversary Dinner Styling",
    category: "special",
    location: "Indore",
    summary:
      "A small dinner gathering with table design, floral accents and attentive service coordination.",
    cover: images.portfolio.p6,
    gallery: [images.portfolio.p6, images.portfolio.p3],
    demo: true,
  },
];

/* ------------------------------------------------------------------ */
/* Experience strengths (marketing interpretations of feedback themes) */
/* ------------------------------------------------------------------ */

export const experienceStrengths = [
  {
    title: "Creative Vision",
    text: "We bring fresh ideas and thoughtful concepts to every celebration.",
  },
  {
    title: "Attention to Detail",
    text: "Every little detail matters, from the first arrangement to the final guest experience.",
  },
  {
    title: "Personalised Planning",
    text: "We listen, understand your preferences and shape the celebration around your vision.",
  },
  {
    title: "Professional Coordination",
    text: "Our team brings vendors, schedules and event elements together.",
  },
  {
    title: "Timely Execution",
    text: "Structured planning and deadline-conscious execution help everything come together smoothly.",
  },
  {
    title: "Supportive Team",
    text: "We aim to make the planning experience as enjoyable and reassuring as the celebration itself.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    title: "Discover",
    text: "Understand your occasion, expectations, preferences and vision.",
  },
  {
    title: "Conceptualise",
    text: "Develop creative directions, themes and event concepts.",
  },
  {
    title: "Plan",
    text: "Coordinate the schedule, venue, vendors and key arrangements.",
  },
  {
    title: "Create",
    text: "Bring the décor, production and event experience together.",
  },
  {
    title: "Celebrate",
    text: "Manage event-day execution so you can enjoy the moments.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Testimonials page: public review themes (not quotations)            */
/* ------------------------------------------------------------------ */

/**
 * Review themes are hidden until each summary is checked against a real public
 * review and approved for use. Never publish unverified paraphrases as testimonials.
 */
export const reviewThemes = [
  { title: "Professionalism", text: "Clients often describe the team as professional and reliable from the first conversation.", verified: false },
  { title: "Unique ideas", text: "Clients mention concepts and décor ideas that felt personal rather than template-driven.", verified: false },
  { title: "Elegant and creative décor", text: "Décor and styling are a recurring point of praise in public feedback.", verified: false },
  { title: "Cooperative team", text: "Clients value how the team works with families, venues and vendors.", verified: false },
  { title: "Timely execution", text: "Clients note that schedules and deadlines were kept.", verified: false },
  { title: "Attention to small details", text: "Smaller touches are repeatedly mentioned as part of the overall impression.", verified: false },
  { title: "Supportive planning", text: "Clients describe the planning process as calm and reassuring.", verified: false },
  { title: "Smooth event management", text: "Event-day coordination is commonly described as smooth.", verified: false },
] as const;

/* ------------------------------------------------------------------ */
/* Enquiry form options                                                */
/* ------------------------------------------------------------------ */

export const eventTypes = [
  "Wedding",
  "Engagement",
  "Mehendi / Haldi",
  "Sangeet / Reception",
  "Birthday",
  "Anniversary",
  "Corporate Event",
  "Product Launch",
  "Other",
] as const;

/**
 * Budget ranges are optional and editable. Amounts are in INR.
 * Remove or edit entries here; the form updates automatically.
 */
export const budgetRanges = [
  "Under ₹5 lakh",
  "₹5 lakh – ₹10 lakh",
  "₹10 lakh – ₹25 lakh",
  "₹25 lakh and above",
  "Prefer to discuss",
] as const;

export const enquiryServiceOptions = services.map((s) => s.title);

/* ------------------------------------------------------------------ */
/* Section switches                                                    */
/* ------------------------------------------------------------------ */

/**
 * Turn sections on or off site-wide. Keep unconfirmed service capabilities hidden
 * until Meena Events verifies that it offers them.
 */
export const sectionFlags = {
  destinationEvents: false,
  googleReviewsTeaser: true,
} as const;
