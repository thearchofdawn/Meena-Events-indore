import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceList } from "@/components/home/ServiceList";
import { Process } from "@/components/home/Process";
import { Experience } from "@/components/home/Experience";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { SiteImage } from "@/components/ui/SiteImage";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { images } from "@/config/images";
import { portfolioProjects, sectionFlags } from "@/config/content";
import { buildMetadata } from "@/lib/seo";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { defaultWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: "Wedding Planner & Event Management in Indore",
  description:
    "Meena Events is a wedding planning and event management studio in Indore, creating thoughtfully planned weddings, décor, corporate events and celebrations.",
  path: "/",
});

export default function HomePage() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <>
      <Hero />
      <Intro />
      <TrustStrip />

      {/* Services */}
      <section aria-labelledby="services-heading" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12 lg:py-40">
        <SectionHeading eyebrow="WHAT WE CREATE" title={<span id="services-heading">One Vision. Every Detail. Endless Possibilities.</span>} className="mb-24" />
        <ServiceList />
      </section>

      {/* Portfolio preview */}
      <section aria-labelledby="portfolio-heading" className="bg-ivory-soft py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading eyebrow="SELECTED CELEBRATIONS" title={<span id="portfolio-heading">Stories Told Through Beautiful Experiences.</span>} />
            <Button href="/portfolio" variant="secondary">
              View All Celebrations
            </Button>
          </div>
          <ul className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-3">
            {featured.map((project, i) => (
              <li key={project.slug} className={i === 1 ? "md:mt-24" : ""}>
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <ProjectCard project={project} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience-heading" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12 lg:py-40">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading as="h2" title={<span id="experience-heading">More Than Planning. A Team That Truly Cares.</span>} />
          </div>
          <div className="lg:col-span-8">
            <Experience />
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="relative overflow-hidden bg-wine-deep py-28 text-ivory lg:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <SectionHeading tone="dark" eyebrow="OUR PROCESS" title={<span id="process-heading">From Your First Idea to the Final Applause.</span>} className="mb-20" />
          <Process />
        </div>
      </section>

      {/* Reviews */}
      <section aria-labelledby="reviews-heading" className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12 lg:py-40">
        <SectionHeading eyebrow="KIND WORDS" title={<span id="reviews-heading">Kind Words. Beautiful Memories.</span>} className="mb-16" />
        <ReviewsTeaser />
      </section>

      {/* Destination */}
      {sectionFlags.destinationEvents && (
        <section aria-labelledby="destination-heading" className="bg-ivory-soft">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-28 sm:px-10 md:grid-cols-12 lg:px-12 lg:py-36">
            <ClipReveal className="relative aspect-[4/5] overflow-hidden md:col-span-6">
              <SiteImage image={images.destination} sizes="(min-width: 768px) 50vw, 100vw" />
            </ClipReveal>
            <div className="md:col-span-5 md:col-start-8">
              <h2 id="destination-heading" className="text-balance text-4xl leading-[1.08] sm:text-5xl">
                Wherever Your Celebration Takes You.
              </h2>
              <p className="mt-8 text-base leading-relaxed text-charcoal/80 sm:text-lg">
                From intimate celebrations to elaborate wedding experiences, we bring thoughtful planning and coordinated
                execution wherever your special moments take place.
              </p>
              <div className="mt-10">
                <Button href="/contact" variant="secondary">
                  Discuss Your Destination Event
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Let's Create Something Unforgettable."
        text="Tell us about your celebration. We'll help you take the first step towards bringing your vision to life."
        primaryLabel="Start Planning Your Event"
        secondaryHref={defaultWhatsAppUrl}
        secondaryLabel="Chat on WhatsApp"
      />
    </>
  );
}
