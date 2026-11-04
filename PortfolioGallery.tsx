"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolioCategories, type PortfolioCategoryId, type PortfolioProject } from "@/config/content";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Lightbox } from "@/components/portfolio/Lightbox";

type Filter = "all" | PortfolioCategoryId;

export function PortfolioGallery({ projects }: { projects: PortfolioProject[] }) {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");
  const [openProject, setOpenProject] = useState<PortfolioProject | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );

  const available = useMemo(
    () => portfolioCategories.filter((c) => projects.some((p) => p.category === c.id)),
    [projects]
  );

  const openFor = (project: PortfolioProject) => {
    setImageIndex(0);
    setOpenProject(project);
  };
  const close = useCallback(() => setOpenProject(null), []);
  const changeIndex = useCallback((i: number) => setImageIndex(i), []);

  const filters: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...available];

  return (
    <>
      <div className="flex flex-wrap gap-2 border-b border-champagne/40 pb-6" role="group" aria-label="Filter celebrations by category">
        {filters.map((f) => {
          const pressed = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(f.id)}
              className={`min-h-11 border px-5 text-sm tracking-wide transition-colors duration-300 ${
                pressed
                  ? "border-wine bg-wine text-ivory"
                  : "border-charcoal/20 text-charcoal hover:border-wine hover:text-wine"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <motion.ul layout={!reduce} className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.li
              key={project.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={i % 3 === 1 ? "lg:mt-24" : ""}
            >
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => openFor(project)}
                  aria-label={`Open gallery: ${project.title}`}
                  className="block w-full text-left"
                >
                  <ProjectCard project={project} tall={i % 3 !== 2} />
                </button>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="self-start border-b border-champagne pb-1 text-sm tracking-wide text-wine hover:text-wine-deep"
                >
                  View project details
                </Link>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="mt-16 text-charcoal/70">No projects in this category yet. Choose another filter to continue.</p>
      )}

      {openProject && (
        <Lightbox
          items={openProject.gallery.map((image) => ({ image }))}
          index={imageIndex}
          title={openProject.title}
          projectHref={`/portfolio/${openProject.slug}`}
          onIndexChange={changeIndex}
          onClose={close}
        />
      )}
    </>
  );
}
