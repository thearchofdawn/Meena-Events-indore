import type { ReactNode } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import type { SiteImage as SiteImageConfig } from "@/config/images";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: SiteImageConfig;
  actions?: ReactNode;
  priority?: boolean;
};

/** Shared editorial header used on interior pages. */
export function PageHero({ eyebrow, title, intro, image, actions, priority = true }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-wine-deep text-ivory">
      <div className="absolute inset-0 -z-10">
        <SiteImage image={image} priority={priority} sizes="100vw" className="opacity-45" />
        <div className="absolute inset-0 bg-linear-to-r from-wine-deep via-wine-deep/80 to-wine-deep/30" />
      </div>
      <div className="mx-auto flex min-h-[72svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 sm:px-10 lg:px-12 lg:pb-28">
        <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-champagne">{eyebrow}</p>
        <h1 className="max-w-4xl text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
        {intro && <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">{intro}</p>}
        {actions && <div className="mt-10 flex flex-wrap gap-4">{actions}</div>}
      </div>
    </section>
  );
}
