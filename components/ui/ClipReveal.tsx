"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)" },
  show: { clipPath: "inset(0% 0% 0% 0%)" },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Unveils an image from the bottom. The outer element is observed and the inner
 * element is clipped: clipped elements report zero visibility to IntersectionObserver,
 * so observing the clipped element directly would never trigger.
 */
export function ClipReveal({ children, className = "", delay = 0 }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <motion.div
        className="relative h-full w-full"
        variants={variants}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.18, 1], delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
