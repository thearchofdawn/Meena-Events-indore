import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ServiceFeature } from "@/components/home/ServiceFeature";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { portfolioProjects } from "@/config/content";
import type { ServiceDetail } from "@/config/service-details";
import type { SiteImage } from "@/config/images";

type Props = {
  detail: ServiceDetail;
  eyebrow: string;
  heroImage: SiteImage;
  ctaTitle: string;
  ctaText: string;
  introParagraphs?: string[];
};

/** Shared template for the dedicated service pages (weddings, corporate, social). */
export function ServiceLandingPage({ detail, eyebrow, heroImage, ctaTitle, ctaText, introParagraphs = [] }: Props) {
  const related = portfolioProjects.filter((p) => p.category === detail.portfolioCategory).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={detail.title}
        image={heroImage}
        actions={
          <>
            <Button href="/contact" variant="light">
              Request a Consultation
            </Button>
            <Button href="/portfolio" variant="ghost" className="text-ivory">
              View Related Work
            </Button>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-12 lg:py-36">
        {introParagraphs.length > 0 && (
          <div className="mx-auto mb-24 max-w-3xl space-y-6 text-lg leading-relaxed text-charcoal/80">
            {introParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
        <ServiceFeature
          title={detail.title}
          description={detail.intro}
          inclusions={detail.inclusions}
          benefits={detail.benefits}
          image={detail.image}
          href="/contact"
          cta="Enquire about this service"
        />
      </section>

      {related.length > 0 && (
        <section className="bg-ivory-soft py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <h2 className="text-4xl leading-tight sm:text-5xl">Related celebrations</h2>
              <Link href="/portfolio" className="border-b border-champagne pb-1 text-sm tracking-wide text-wine hover:text-wine-deep">
                View all celebrations
              </Link>
            </div>
            <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project) => (
                <li key={project.slug}>
                  <Link href={`/portfolio/${project.slug}`} className="block">
                    <ProjectCard project={project} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand title={ctaTitle} text={ctaText} secondaryHref="/services" secondaryLabel="All services" />
    </>
  );
}
