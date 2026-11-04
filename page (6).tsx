import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { serviceDetails } from "@/config/service-details";
import { images } from "@/config/images";
import { buildMetadata } from "@/lib/seo";

const detail = serviceDetails.find((s) => s.id === "corporate-events")!;

export const metadata: Metadata = buildMetadata({
  title: "Corporate Event Management in Indore",
  description:
    "Corporate event management in Indore by Meena Events. Conferences, seminars, award nights, exhibitions, product launches and institutional events.",
  path: "/corporate-events",
  image: images.pages.corporate,
});

export default function CorporateEventsPage() {
  return (
    <ServiceLandingPage
      detail={detail}
      eyebrow="CORPORATE EVENTS · INDORE"
      heroImage={images.pages.corporate}
      ctaTitle="Plan your next event with a clear brief."
      ctaText="Share the purpose of your event, your audience and your timeline. We will recommend a format and a plan."
    />
  );
}
