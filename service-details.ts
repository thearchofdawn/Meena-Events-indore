/**
 * Extended copy for the Services overview and service pages.
 * Benefits are general descriptions of how the service helps clients.
 * They make no claims about specific results, awards or client outcomes.
 */
import { images, type SiteImage } from "./images";

export type ServiceDetail = {
  id: string;
  title: string;
  intro: string;
  inclusions: string[];
  benefits: string[];
  image: SiteImage;
  portfolioCategory: "weddings" | "decor" | "engagements" | "social" | "corporate" | "special";
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    intro:
      "Whether you need full coordination from the first idea or support for particular functions, we plan the wedding around your family's traditions, your style and your schedule.",
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
    benefits: [
      "One team managing the timeline, so the family can focus on the celebration.",
      "Plans shaped around the rituals and preferences that matter to you.",
      "Vendors, venues and schedules brought together in one place.",
    ],
    image: images.services.wedding,
    portfolioCategory: "weddings",
  },
  {
    id: "wedding-decor",
    title: "Wedding Décor & Design",
    intro:
      "Stage, mandap and venue design built around a clear concept, so every space reflects the story of the couple and their families.",
    inclusions: [
      "Theme decoration",
      "Stage design",
      "Floral styling",
      "Venue ambience",
      "Lighting arrangements",
      "Bride and groom entries",
      "Custom decorative concepts",
    ],
    benefits: [
      "Decor concepts developed for your venue and your guest count.",
      "Lighting and floral choices planned together, so the space feels cohesive.",
      "Custom pieces created when a standard arrangement is not enough.",
    ],
    image: images.services.decor,
    portfolioCategory: "decor",
  },
  {
    id: "engagements",
    title: "Engagement & Pre-Wedding Functions",
    intro:
      "Engagement ceremonies, mehendi, haldi and sangeet evenings each have their own mood. We design each function to feel distinct and to flow smoothly into the next.",
    inclusions: [
      "Engagement ceremony planning",
      "Mehendi and haldi setups",
      "Sangeet evening production",
      "Guest flow and seating",
      "Ceremony timelines",
    ],
    benefits: [
      "Each function gets its own atmosphere, without repeating the same look.",
      "Clear timelines for families and performers.",
      "Coordinated set-up and clean-up across the function days.",
    ],
    image: images.pages.weddings,
    portfolioCategory: "engagements",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    intro:
      "Conferences, product launches and institutional events need clear structure as much as good design. We plan the programme, the venue and the guest experience with equal care.",
    inclusions: [
      "Conferences and seminars",
      "Award nights",
      "Exhibitions",
      "Product launches",
      "Roadshows",
      "Corporate celebrations",
      "Institutional events",
    ],
    benefits: [
      "Programme and run-of-show planning, so sessions start and end on time.",
      "Brand-aligned design and staging.",
      "Vendor and production coordination on the day.",
    ],
    image: images.pages.corporate,
    portfolioCategory: "corporate",
  },
  {
    id: "social-celebrations",
    title: "Social Celebrations",
    intro:
      "Birthdays, anniversaries and private gatherings deserve the same thought as a wedding. We create the theme, the décor and the hosting plan for an evening that feels personal.",
    inclusions: [
      "Birthdays",
      "Anniversaries",
      "Theme parties",
      "Private celebrations",
      "Kitty parties",
      "Special occasions",
    ],
    benefits: [
      "A theme developed around the guest of honour.",
      "Décor and hosting planned so the host can stay with their guests.",
      "A simple, well-paced evening programme.",
    ],
    image: images.pages.social,
    portfolioCategory: "social",
  },
  {
    id: "special-events",
    title: "Special Events",
    intro:
      "Milestone functions, ceremonies and bespoke gatherings that do not fit a standard format. We start with the purpose of the occasion and design around it.",
    inclusions: ["Milestone functions", "Bespoke gatherings", "Ceremonial functions", "Custom event formats"],
    benefits: [
      "A concept shaped around the purpose of the occasion.",
      "Flexible planning for formats that are not standard.",
      "Coordinated execution from concept to closing.",
    ],
    image: images.pages.services,
    portfolioCategory: "special",
  },
  {
    id: "event-production",
    title: "Event Production & Management",
    intro:
      "The planning only works if execution does. We coordinate vendors, sound, lighting, artists and guests so the event runs as designed.",
    inclusions: [
      "Vendor coordination",
      "Catering coordination",
      "Sound and lighting",
      "Artist management",
      "Guest handling",
      "Event-day operations",
    ],
    benefits: [
      "A single point of contact for vendors and the event team.",
      "Event-day operations led by a dedicated coordinator.",
      "Clear run-of-show documents shared in advance.",
    ],
    image: images.services.production,
    portfolioCategory: "corporate",
  },
];
