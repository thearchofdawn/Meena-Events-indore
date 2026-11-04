import { site } from "@/config/site";

/**
 * Builds a wa.me link. The message is only pre-filled. The visitor reviews it
 * and presses send inside WhatsApp; nothing is sent automatically.
 */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsAppUrl = buildWhatsAppUrl(site.whatsappGreeting);
