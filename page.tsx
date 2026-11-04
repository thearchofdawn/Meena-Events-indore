import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { serviceDetails } from "@/config/service-details";
import { images } from "@/config/images";
import { buildMetadata } from "@/lib/seo";

const detail = serviceDetails.find((s) => s.id === "social-celebrations")!;

export const metadata: Metadata = buildMetadata({
  title: "Social Celebrations & Private Events in Indore",
  description:
    "Birthday, anniversary and private celebration planning in Indore by Meena Events. Theme parties, kitty parties and special occasions planned with care.",
  path: "/social-celebrations",
  image: images.pages.social,
});

export default function SocialCelebrationsPage() {
  return (
    <ServiceLandingPage
      detail={detail}
      eyebrow="SOCIAL CELEBRATIONS · INDORE"
      heroImage={images.pages.social}
      ctaTitle="Make the occasion feel personal."
      ctaText="Tell us who the celebration is for and how you would like it to feel. We will shape the rest."
    />
  );
}
