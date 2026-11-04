import Link from "next/link";
import { SiteImage } from "@/components/ui/SiteImage";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { images } from "@/config/images";

export function Intro() {
  return (
    <section id="intro" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12 lg:py-40">
      <div className="grid items-center gap-16 md:grid-cols-12">
        <div className="md:col-span-5 md:pr-6">
          <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-wine">THE ART OF CELEBRATION</p>
          <h2 className="text-balance text-4xl leading-[1.08] sm:text-5xl">
            Beautiful Moments Don&rsquo;t Happen by Accident.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-charcoal/80 sm:text-lg">
            Behind every unforgettable celebration is a thoughtful plan, a creative vision and a team that cares about
            every detail. At Meena Events, we bring these elements together to create experiences that feel personal,
            seamless and memorable.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-4 border-b border-champagne pb-2 text-sm font-medium tracking-wide text-wine transition-colors hover:text-wine-deep"
          >
            Discover Meena Events
          </Link>
        </div>

        <div className="relative md:col-span-7">
          <ClipReveal className="arch-frame relative aspect-[4/5] w-full md:ml-auto md:w-[88%]">
            <SiteImage image={images.intro} sizes="(min-width: 768px) 50vw, 100vw" />
          </ClipReveal>
          <div className="absolute -bottom-10 left-0 hidden aspect-[4/3] w-2/5 border border-ivory bg-ivory p-2 shadow-[0_30px_60px_-30px_rgba(36,33,33,0.35)] md:block">
            <div className="relative h-full w-full">
              <SiteImage image={images.about} sizes="30vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
