import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Business contact block. Only shows links that have been configured. */
export function ContactDetails() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="font-display text-3xl text-wine">Visit or call</h2>
        <address className="mt-5 space-y-1 text-base not-italic leading-relaxed text-charcoal/85">
          {site.address.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <a
          href={site.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block border-b border-champagne pb-1 text-sm tracking-wide text-wine hover:text-wine-deep"
        >
          Get directions on Google Maps
        </a>
      </div>

      <div>
        <h2 className="font-display text-3xl text-wine">Phone and WhatsApp</h2>
        <a href={`tel:${site.contact.phoneE164}`} className="mt-5 block font-display text-3xl text-charcoal hover:text-wine">
          {site.contact.phoneDisplay}
        </a>
        <div className="mt-6">
          <Button href={buildWhatsAppUrl(site.whatsappGreeting)} external variant="primary">
            Chat on WhatsApp
          </Button>
        </div>
      </div>

      {(site.contact.email || site.instagramUrl) && (
        <div className="space-y-3 text-base text-charcoal/85">
          {site.contact.email && (
            <p>
              Email:{" "}
              <a href={`mailto:${site.contact.email}`} className="text-wine underline underline-offset-4">
                {site.contact.email}
              </a>
            </p>
          )}
          {site.instagramUrl && (
            <p>
              Instagram:{" "}
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-wine underline underline-offset-4">
                Follow our work
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
