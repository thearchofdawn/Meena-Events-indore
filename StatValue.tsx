"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const pattern = /^(\d+)(\.(\d))?(\+?)$/;

/**
 * Counts a statistic up when it scrolls into view. Values that are not simple
 * numbers (such as the founding year) are shown as written. Reduced-motion
 * users see the final value immediately.
 */
export function StatValue({ value }: { value: string }) {
  const match = value.match(pattern);
  if (!match || value === "2014") return <>{value}</>;
  return <CountUp value={value} />;
}

function CountUp({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [text, setText] = useState(value);

  useEffect(() => {
    if (!inView || reduce) return;
    const m = value.match(pattern);
    if (!m) return;
    const target = parseFloat(value);
    const decimals = m[3] ? 1 : 0;
    const suffix = m[4] || "";
    const duration = 1600;
    let start: number | null = null;
    let frame = 0;

    const step = (now: number) => {
      if (start === null) start = now;
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setText((target * eased).toFixed(decimals) + (p < 1 ? "" : suffix));
      if (p < 1) frame = requestAnimationFrame(step);
    };

    setText((0).toFixed(decimals));
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return <span ref={ref}>{text}</span>;
}
