import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { serviceDetails } from "@/config/service-details";
import { images } from "@/config/images";
import { buildMetadata } from "@/lib/seo";

const detail = serviceDetails.find((s) => s.id === "wedding-planning")!;

export const metadata: Metadata = buildMetadata({
  title: "Wedding Planning in Indore",
  description:
    "Wedding planning in Indore by Meena Events. Complete and partial planning, engagement functions, mehendi, haldi, sangeet, venue coordination and wedding-day management.",
  path: "/wedding-planning",
  image: images.pages.weddings,
});

export default function WeddingPlanningPage() {
  return (
    <ServiceLandingPage
      detail={detail}
      eyebrow="WEDDING PLANNING · INDORE"
      heroImage={images.pages.weddings}
      ctaTitle="Begin with a conversation."
      ctaText="Tell us about your wedding, the functions you have in mind and the families involved. We will help you plan the next step."
      introParagraphs={[
        "Every wedding has its own rhythm, traditions and expectations. We start by understanding yours, then build a plan that covers everything from the first ceremony to the final guest departing.",
      ]}
    />
  );
}
