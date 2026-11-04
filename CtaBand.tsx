import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/config/images";

type Props = {
  title: string;
  text: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/** Full-width closing call to action, used at the end of most pages. */
export function CtaBand({
  title,
  text,
  primaryHref = "/contact",
  primaryLabel = "Start Planning Your Event",
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-ivory">
      <div className="absolute inset-0 -z-10">
        <SiteImage image={images.finalCta} sizes="100vw" className="opacity-35" />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:px-10 lg:py-36">
        <h2 className="text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">{text}</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="light">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel && (
            <Button href={secondaryHref} external={secondaryHref.startsWith("http")} variant="ghost" className="text-ivory">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
