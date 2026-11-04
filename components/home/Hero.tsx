"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/config/images";

const headlineWords = "Turning Your Celebrations Into Timeless Memories.".split(" ");
const archRadii = [300, 420, 540, 660];
const archOpacity = [0.85, 0.5, 0.22, 0.12];

/**
 * The orchestrated moment on the site: arches draw in, the image settles from a
 * slight zoom, and the headline reveals word by word. Reduced-motion users see the
 * final composition immediately.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-wine-deep text-ivory">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduce ? false : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <SiteImage image={images.hero} priority sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-wine-deep/45" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-wine-deep/95 to-transparent" />

      <svg
        aria-hidden
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      >
        {archRadii.map((r, i) => {
          const cx = 1060;
          const base = 900;
          const d = `M${cx - r} ${base} L${cx - r} ${base - r} A${r} ${r} 0 0 1 ${cx + r} ${base - r} L${cx + r} ${base}`;
          return (
            <motion.path
              key={r}
              d={d}
              fill="none"
              stroke={i < 2 ? "#C5A46D" : "#F8F4EC"}
              strokeOpacity={archOpacity[i]}
              strokeWidth={1.2}
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 + i * 0.25 }}
            />
          );
        })}
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-44 sm:px-10 lg:px-12 lg:pb-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-champagne"
        >
          MEENA EVENTS · INDORE
        </motion.p>

        <h1 className="mt-6 max-w-4xl text-balance text-5xl leading-[1.0] sm:text-7xl lg:text-[6.25rem]">
          {headlineWords.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.5 + i * 0.09 }}
            >
              {word}
              {i < headlineWords.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.7 }}
          className="mt-8 max-w-lg text-base leading-relaxed text-ivory/85 sm:text-lg"
        >
          Thoughtfully curated weddings and extraordinary events, brought to life with creativity, care and seamless
          execution.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.85 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="light">
            Plan Your Celebration
          </Button>
          <Button href="/portfolio" variant="ghost" className="text-ivory">
            Explore Our Work
          </Button>
        </motion.div>
      </div>

      <a
        href="#intro"
        aria-label="Scroll to the introduction"
        className="group absolute bottom-32 right-6 z-10 hidden items-center gap-4 text-[0.7rem] uppercase tracking-[0.24em] text-ivory/75 sm:flex lg:right-12"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <span aria-hidden className="relative block h-16 w-px overflow-hidden bg-ivory/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-champagne"
            animate={reduce ? undefined : { y: ["-100%", "200%"] }}
            transition={{ duration: 2.4, ease: [0.65, 0, 0.35, 1], repeat: Infinity }}
          />
        </span>
      </a>
    </section>
  );
}
