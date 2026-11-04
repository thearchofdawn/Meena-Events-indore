import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/ui/CtaBand";
import { Experience } from "@/components/home/Experience";
import { Process } from "@/components/home/Process";
import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Meena Events is a wedding planning and event management studio in Indore. Learn about our philosophy, our approach and the care we bring to every celebration.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="Every Great Celebration Begins With a Thoughtful Vision."
        image={images.pages.services}
      />

      <section aria-labelledby="story-heading" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 sm:px-10 md:grid-cols-12 lg:px-12 lg:py-36">
        <div className="relative aspect-[4/5] md:col-span-6">
          <div className="arch-frame absolute inset-0">
            <SiteImage image={images.about} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <h2 id="story-heading" className="text-4xl leading-tight sm:text-5xl">
            Our story
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-charcoal/80 sm:text-lg">
            <p>
              Meena Events is a wedding planning and event management company based in Indore. We work with couples,
              families, companies and institutions who want their celebrations to feel considered from the first
              conversation to the final guest departing.
            </p>
            <p>
              We describe ourselves as a one-stop event management solution. That means one team that brings together
              concept, décor, vendors, schedules and on-the-day coordination, so you do not have to.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-heading" className="bg-ivory-soft py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 id="philosophy-heading" className="text-balance text-4xl leading-tight sm:text-5xl">
                Thoughtfully planned. Beautifully celebrated.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-charcoal/80 sm:text-lg md:col-span-6 md:col-start-7">
              <p>
                We believe the best celebrations do not feel planned. Behind the warmth and ease of a good evening is a
                great deal of careful thought: the sequence of rituals, the flow of guests, the lighting that flatters
                every face, and the small touches that are noticed without being mentioned.
              </p>
              <p>Our job is to carry that thought so that you can enjoy the moments that matter.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="different-heading" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12 lg:py-36">
        <SectionHeading
          eyebrow="WHAT MAKES US DIFFERENT"
          title={<span id="different-heading">A team that listens, plans and follows through.</span>}
          className="mb-20"
        />
        <Experience />
      </section>

      <section aria-labelledby="approach-heading" className="relative overflow-hidden bg-wine-deep py-28 text-ivory lg:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeading
            tone="dark"
            eyebrow="OUR APPROACH"
            title={<span id="approach-heading">From your first idea to the final applause.</span>}
            className="mb-20"
          />
          <Process />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-28 text-center sm:px-10 lg:py-36">
        <h2 className="text-4xl leading-tight sm:text-5xl">Meet the team</h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
          Team introductions will appear here once Meena Events provides the names, roles and photographs it wants to
          share.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="secondary">
            Speak with our team
          </Button>
        </div>
      </section>

      <CtaBand
        title="Let's talk about your celebration."
        text="Share a few details about your event and we will suggest how we can help."
      />
    </>
  );
}
