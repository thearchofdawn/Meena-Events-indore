import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Enquire About Your Event",
  description:
    "Enquire about a wedding, engagement, birthday, corporate or other event with Meena Events in Indore. Call, message on WhatsApp or send an enquiry online.",
  path: "/contact",
  image: images.pages.contact,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Tell us about your celebration."
        intro="Share a few details and we will help you take the first step towards bringing your vision to life."
        image={images.pages.contact}
      />

      <section className="mx-auto grid max-w-7xl gap-20 px-6 py-24 sm:px-10 lg:grid-cols-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-7">
          <h2 className="font-display text-4xl leading-tight">Request a consultation</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/75">
            Fields marked with an asterisk are required. Everything else helps us prepare for your call.
          </p>
          <div className="mt-12">
            <EnquiryForm />
          </div>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9 lg:pt-20">
          <ContactDetails />
        </aside>
      </section>

      <section className="border-y border-charcoal/10 bg-ivory-soft">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-24">
          <div>
            <p className="text-xs tracking-[0.24em] text-wine">FIND US ON THE MAP</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal">Visit Meena Events in Indore.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-charcoal/75">
              Open the Google Maps listing for directions, business details and the photos shared on the listing.
              Photos remain hosted by Google and their respective contributors.
            </p>
            <a
              href={site.googleMapsListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border-b border-champagne pb-2 text-sm tracking-wide text-wine hover:text-wine-deep"
            >
              View listing and photos on Google Maps ↗
            </a>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-white shadow-sm">
            <iframe
              title="Meena Events location on Google Maps"
              src={site.googleMapsEmbedUrl}
              className="h-full min-h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
