import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { ServiceFeature } from "@/components/home/ServiceFeature";
import { serviceDetails } from "@/config/service-details";
import { images } from "@/config/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Wedding planning, wedding décor, engagement functions, corporate events, social celebrations and event production by Meena Events in Indore.",
  path: "/services",
});

const dedicatedPages: Record<string, string> = {
  "wedding-planning": "/wedding-planning",
  "corporate-events": "/corporate-events",
  "social-celebrations": "/social-celebrations",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="SERVICES" title="One Vision. Every Detail. Endless Possibilities." image={images.pages.services} />

      <section className="mx-auto max-w-7xl space-y-32 px-6 py-28 sm:px-10 lg:space-y-44 lg:px-12 lg:py-40">
        {serviceDetails.map((service, i) => {
          const dedicated = dedicatedPages[service.id];
          return (
            <ServiceFeature
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.intro}
              inclusions={service.inclusions}
              benefits={service.benefits}
              image={service.image}
              href={dedicated ?? "/contact"}
              cta={dedicated ? "Read more about this service" : "Enquire about this service"}
              reverse={i % 2 === 1}
            />
          );
        })}
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Tell us about your occasion. We will help you decide what to plan and what to leave to us."
        primaryLabel="Request a Consultation"
      />
    </>
  );
}
