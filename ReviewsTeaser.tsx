import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { reviewThemes, trustStats } from "@/config/content";
import { site } from "@/config/site";

/**
 * Shows Google rating and count from config, plus a few public review themes.
 * No quotations or reviewer names are shown.
 */
export function ReviewsTeaser() {
  const rating = trustStats.find((s) => s.id === "rating");
  const reviews = trustStats.find((s) => s.id === "reviews");
  const showRating = Boolean(rating?.enabled && rating.verified && reviews?.enabled && reviews.verified);
  const verifiedThemes = reviewThemes.filter((theme) => theme.verified);

  if (!showRating && verifiedThemes.length === 0) return null;

  return (
    <div className="grid gap-16 md:grid-cols-12">
      <div className="md:col-span-5">
        {showRating && rating && reviews && (
          <p className="font-display text-7xl leading-none text-wine">
            {rating.value}
            <span className="ml-4 align-middle font-sans text-sm uppercase tracking-[0.2em] text-charcoal/65">
              Google rating from {reviews.value} reviews
            </span>
          </p>
        )}
        <p className="mt-8 text-base leading-relaxed text-charcoal/80 sm:text-lg">
          Clients often mention professionalism, creative décor, timely execution and attention to small details. Read
          more about what they value in our client feedback.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
          <Link href="/testimonials" className="border-b border-champagne pb-1 text-sm tracking-wide text-wine hover:text-wine-deep">
            What clients value
          </Link>
          {site.googleReviewsUrl && (
            <Button href={site.googleReviewsUrl} external variant="secondary">
              Read Our Google Reviews
            </Button>
          )}
        </div>
      </div>

      <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:col-span-7">
        {verifiedThemes.slice(0, 6).map((theme) => (
          <li key={theme.title} className="border-t border-champagne/50 pt-5">
            <p className="font-display text-2xl text-charcoal">{theme.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
