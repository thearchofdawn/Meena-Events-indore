import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { portfolioCategories, portfolioProjects } from "@/config/content";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return buildMetadata({ title: "Project not found", description: "", path: "/portfolio" });
  const metadata = buildMetadata({
    title: `${project.title} | Portfolio`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
    image: project.cover,
  });
  // Demo concept pages are useful in a client preview but must not rank as
  // actual Meena Events case studies before verified project content is added.
  return project.demo ? { ...metadata, robots: { index: false, follow: false } } : metadata;
}

export default async function PortfolioProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = portfolioProjects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = portfolioProjects[index];
  const category = portfolioCategories.find((c) => c.id === project.category)?.label;
  const next = portfolioProjects[(index + 1) % portfolioProjects.length];
  const related = portfolioProjects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 2);
  const meta = [project.location, project.date].filter(Boolean).join(", ");

  return (
    <>
      <article>
        <header className="mx-auto max-w-7xl px-6 pb-16 pt-36 sm:px-10 lg:px-12">
          <Link href="/portfolio" className="text-sm tracking-wide text-wine underline underline-offset-4 hover:text-wine-deep">
            Back to portfolio
          </Link>
          <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              {category && <p className="text-xs font-medium tracking-wide text-wine">{category}</p>}
              <h1 className="mt-4 text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{project.title}</h1>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-base leading-relaxed text-charcoal/80">{project.summary}</p>
              {meta && <p className="mt-4 text-sm text-charcoal/60">{meta}</p>}
              {project.demo && <p className="mt-4 inline-flex border border-champagne/70 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-wine">Illustrative concept · Not a completed client project</p>}
            </div>
          </div>
        </header>

        <div className="relative mx-auto aspect-[16/10] max-w-7xl overflow-hidden px-0 sm:px-10 lg:px-12">
          <div className="relative h-full w-full overflow-hidden">
            <SiteImage image={project.cover} priority sizes="100vw" />
          </div>
        </div>

        {project.videoEmbedUrl && (
          <div className="mx-auto mt-16 max-w-5xl px-6 sm:px-10">
            <div className="relative aspect-video w-full overflow-hidden bg-charcoal">
              <iframe
                src={project.videoEmbedUrl}
                title={`${project.title} video`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {project.gallery.length > 1 && (
          <section aria-label="Project gallery" className="mx-auto mt-20 grid max-w-7xl gap-6 px-6 sm:px-10 md:grid-cols-2 lg:px-12">
            {project.gallery.map((image, i) => (
              <div key={`${image.src}-${i}`} className={`relative aspect-[4/5] overflow-hidden ${i % 2 === 1 ? "md:mt-16" : ""}`}>
                <SiteImage image={image} sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            ))}
          </section>
        )}

        <nav aria-label="Project navigation" className="mx-auto mt-24 flex max-w-7xl flex-col gap-6 border-t border-champagne/50 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <Link href={`/portfolio/${next.slug}`} className="group">
            <span className="block text-xs tracking-wide text-charcoal/55">Next project</span>
            <span className="font-display mt-1 block text-3xl text-wine group-hover:text-wine-deep">{next.title}</span>
          </Link>
          <Button href="/portfolio" variant="secondary">
            All celebrations
          </Button>
        </nav>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="bg-ivory-soft py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
            <h2 id="related-heading" className="text-4xl leading-tight">
              More {category?.toLowerCase()}
            </h2>
            <ul className="mt-14 grid gap-10 md:grid-cols-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link href={`/portfolio/${p.slug}`} className="block">
                    <ProjectCard project={p} tall={false} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand title="Planning something similar?" text="Share a few details and we will suggest how this could look for your celebration." />
    </>
  );
}
