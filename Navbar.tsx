"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { navigation, site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Header stays transparent while the mobile menu is open so its toggle remains visible.
  const solid = scrolled && !menuOpen;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,color] duration-500 ${
        solid
          ? "border-b border-champagne/40 bg-ivory/95 text-charcoal shadow-[0_1px_0_rgba(36,33,33,0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-ivory"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-12">
        <Link href="/" aria-label={`${site.name} home`} className="font-display text-xl tracking-[0.22em] sm:text-2xl">
          MEENA EVENTS
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 text-sm font-medium tracking-wide ${
                    active ? "" : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-champagne transition-transform duration-500 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href="/contact" variant={solid ? "primary" : "light"} className="min-h-11 px-5 text-[0.72rem]">
              Plan Your Event
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 items-center gap-3 px-2 text-sm font-medium uppercase tracking-[0.18em] lg:hidden"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

    </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
