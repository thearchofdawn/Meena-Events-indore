import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Button } from "@/components/ui/Button";
import { reviewThemes, trustStats } from "@/config/content";
import { site } from "@/config/site";
import { images } from "@/config/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Testimonials",
  description:
    "What clients value about working with Meena Events: professionalism, creative décor, timely execution and attention to detail.",
  path: "/testimonials",
  image: images.pages.testimonials,
});

export default function TestimonialsPage() {
  const rating = trustStats.find((s) => s.id === "rating");
  const reviews = trustStats.find((s) => s.id === "reviews");
  const showRating = Boolean(rating?.enabled && rating.verified && reviews?.enabled && reviews.verified);
  const verifiedThemes = reviewThemes.filter((theme) => theme.verified);

  return (
    <>
      <PageHero
        eyebrow="TESTIMONIALS"
        title="Kind Words. Beautiful Memories."
        intro="Themes from public client feedback about how we plan, design and coordinate celebrations."
        image={images.pages.testimonials}
      />

      {showRating && rating && reviews && (
        <section aria-label="Google rating" className="border-b border-champagne/40 bg-ivory-soft">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
            <p className="font-display text-6xl text-wine sm:text-7xl">
              {rating.value}
              <span className="ml-4 align-middle font-sans text-xs uppercase tracking-[0.2em] text-charcoal/65">
                Google rating from {reviews.value} reviews
              </span>
            </p>
            {site.googleReviewsUrl && (
              <Button href={site.googleReviewsUrl} external variant="secondary">
                Read Our Google Reviews
              </Button>
            )}
          </div>
        </section>
      )}

      <section aria-labelledby="themes-heading" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12 lg:py-36">
        <h2 id="themes-heading" className="sr-only">
          What clients value
        </h2>
        {verifiedThemes.length > 0 ? (
          <>
            <ul className="grid gap-x-12 gap-y-16 md:grid-cols-2">
              {verifiedThemes.map((theme) => (
                <li key={theme.title} className="border-t border-champagne/50 pt-7">
                  <h3 className="font-display text-3xl text-wine">{theme.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-charcoal/75">{theme.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-20 max-w-2xl text-sm leading-relaxed text-charcoal/60">
              These themes summarise checked public feedback. They are not direct quotations, and no reviewer names are shown.
            </p>
          </>
        ) : (
          <div className="max-w-2xl border-t border-champagne/50 pt-8">
            <h2 className="font-display text-3xl text-wine">Your celebration deserves thoughtful planning.</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/75">
              We are preparing this page with feedback confirmed directly against published client reviews. In the meantime, speak with our team about your event.
            </p>
          </div>
        )}
      </section>

      <CtaBand
        title="Start your own story with us."
        text="Tell us about your celebration. We will help you take the first step."
      />
    </>
  );
}
