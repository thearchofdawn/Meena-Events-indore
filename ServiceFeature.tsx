import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import { ClipReveal } from "@/components/ui/ClipReveal";
import type { SiteImage as SiteImageConfig } from "@/config/images";

type Props = {
  id?: string;
  title: string;
  description: string;
  inclusions: string[];
  benefits?: string[];
  image: SiteImageConfig;
  href: string;
  cta: string;
  reverse?: boolean;
};

/** Editorial service row: image and text alternate sides. Not a card. */
export function ServiceFeature({ id, title, description, inclusions, benefits, image, href, cta, reverse = false }: Props) {
  return (
    <article id={id} className="scroll-mt-28 grid items-center gap-12 md:grid-cols-12 md:gap-16">
      <ClipReveal className={`relative aspect-[4/5] overflow-hidden md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        <div className="absolute inset-0 transition-transform duration-[1.4s] ease-out hover:scale-[1.02]">
          <SiteImage image={image} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </ClipReveal>
      <div className={`md:col-span-5 ${reverse ? "md:col-start-1 md:row-start-1" : "md:col-start-8"}`}>
        <h3 className="text-balance text-4xl leading-[1.08] sm:text-5xl">{title}</h3>
        <p className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg">{description}</p>

        <ul className="mt-8 grid gap-x-8 gap-y-3 border-t border-champagne/50 pt-8 text-sm text-charcoal/85 sm:grid-cols-2">
          {inclusions.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-champagne" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {benefits && benefits.length > 0 && (
          <div className="mt-10">
            <h4 className="font-display text-2xl">What this gives you</h4>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/80">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-champagne" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={href}
          className="group mt-10 inline-flex items-center gap-3 border-b border-champagne pb-2 text-sm font-medium tracking-wide text-wine transition-colors hover:text-wine-deep"
        >
          {cta}
          <span aria-hidden className="inline-block h-px w-6 bg-current transition-[width] duration-500 group-hover:w-10" />
        </Link>
      </div>
    </article>
  );
}
