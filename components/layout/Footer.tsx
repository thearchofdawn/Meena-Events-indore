import Link from "next/link";
import { footerServiceLinks, navigation, site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wine-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-10 md:grid-cols-12 lg:px-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl tracking-[0.22em]">MEENA EVENTS</p>
          <p className="font-display mt-5 max-w-xs text-2xl italic leading-snug text-ivory/85">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:col-span-5 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-champagne">Explore</h2>
            <ul className="space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/80 transition-colors hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-champagne">Services</h2>
            <ul className="space-y-3 text-sm">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/80 transition-colors hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="md:col-span-3">
          <h2 className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-champagne">Contact</h2>
          <address className="space-y-1 text-sm not-italic leading-relaxed text-ivory/80">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={`tel:${site.contact.phoneE164}`} className="text-ivory/80 transition-colors hover:text-ivory">
                {site.contact.phoneDisplay}
              </a>
            </li>
            {site.contact.email && (
              <li>
                <a href={`mailto:${site.contact.email}`} className="text-ivory/80 transition-colors hover:text-ivory">
                  {site.contact.email}
                </a>
              </li>
            )}
            <li>
              <a
                href={site.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/80 underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-ivory"
              >
                Get directions
              </a>
            </li>
            {site.instagramUrl && (
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/80 underline decoration-champagne/60 underline-offset-4 transition-colors hover:text-ivory"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-champagne/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-ivory/65 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-ivory">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-ivory">
                Terms and conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
