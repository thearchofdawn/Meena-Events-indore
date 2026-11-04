import { SiteImage } from "@/components/ui/SiteImage";
import { portfolioCategories, type PortfolioProject } from "@/config/content";

type Props = {
  project: PortfolioProject;
  tall?: boolean;
  className?: string;
};

/**
 * Presentational only: contains no interactive elements, so it can sit inside
 * a link (home preview) or a button (filterable gallery).
 * Uses spans so it is valid inside both.
 */
export function ProjectCard({ project, tall = true, className = "" }: Props) {
  const category = portfolioCategories.find((c) => c.id === project.category)?.label;
  const meta = [project.location, project.date].filter(Boolean).join(", ");

  return (
    <span className={`group block ${className}`}>
      <span className={`relative block overflow-hidden bg-ivory-soft ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <span className="absolute inset-0 block transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]">
          <SiteImage
            image={project.cover}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </span>
        {project.demo && (
          <span className="absolute left-3 top-3 bg-ivory/95 px-2.5 py-1 text-[0.68rem] font-medium text-charcoal">
            Sample layout
          </span>
        )}
      </span>
      <span className="mt-6 block">
        {category && <span className="block text-xs font-medium tracking-wide text-wine">{category}</span>}
        <span className="font-display mt-2 block text-3xl leading-tight text-charcoal">{project.title}</span>
        <span className="mt-3 block text-sm leading-relaxed text-charcoal/70">{project.summary}</span>
        {meta && <span className="mt-3 block text-xs text-charcoal/55">{meta}</span>}
      </span>
    </span>
  );
}
