"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { SiteImage } from "@/config/images";

export type LightboxItem = { image: SiteImage };

type Props = {
  items: LightboxItem[];
  index: number;
  title: string;
  projectHref?: string;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

/**
 * Accessible image lightbox: keyboard arrows and Escape, focus moves into the dialog
 * and returns to the trigger on close, page scroll is locked while open.
 */
export function Lightbox({ items, index, title, projectHref, onIndexChange, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = items.length;
  const current = items[index];

  const prev = () => onIndexChange((index - 1 + count) % count);
  const next = () => onIndexChange((index + 1) % count);

  // Scroll lock and focus handling happen once, on open and close.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  // Keyboard navigation follows the current index.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      if (e.key === "ArrowRight") onIndexChange((index + 1) % count);
      if (e.key === "Tab") {
        const dialog = closeRef.current?.closest('[role="dialog"]');
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onClose, onIndexChange]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      className="fixed inset-0 z-[70] flex flex-col bg-charcoal/97 text-ivory"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between gap-6 px-6 py-5 sm:px-10">
        <p className="min-w-0 truncate text-sm text-ivory/80">
          <span className="font-display text-xl text-ivory">{title}</span>
          <span className="ml-4 tabular-nums text-ivory/55">
            {index + 1} / {count}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ivory/25 hover:border-champagne"
          aria-label="Close gallery"
        >
          <X aria-hidden className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
        {count > 1 && (
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-ivory/25 bg-charcoal/60 hover:border-champagne sm:left-6"
          >
            <ChevronLeft aria-hidden className="h-6 w-6" strokeWidth={1.4} />
          </button>
        )}

        <div className="relative h-full w-full max-w-6xl">
          <Image
            key={current.image.src}
            src={current.image.src}
            alt={current.image.alt}
            fill
            sizes="90vw"
            className="object-contain"
            unoptimized={current.image.src.endsWith(".svg")}
            priority
          />
        </div>

        {count > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-ivory/25 bg-charcoal/60 hover:border-champagne sm:right-6"
          >
            <ChevronRight aria-hidden className="h-6 w-6" strokeWidth={1.4} />
          </button>
        )}
      </div>

      {projectHref && (
        <div className="flex justify-center px-6 py-6">
          <Link
            href={projectHref}
            className="border-b border-champagne pb-1 text-sm tracking-wide text-ivory hover:text-champagne"
          >
            View full project
          </Link>
        </div>
      )}
    </div>
  );
}
