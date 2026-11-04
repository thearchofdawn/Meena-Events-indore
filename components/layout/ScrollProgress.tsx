"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";

/** A thin champagne line across the top of the page that tracks scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-champagne"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
