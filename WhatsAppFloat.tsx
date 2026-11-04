import { MessageCircle } from "lucide-react";
import { defaultWhatsAppUrl } from "@/lib/whatsapp";

/** Floating WhatsApp link. Opens a chat with a greeting. Nothing is sent automatically. */
export function WhatsAppFloat() {
  return (
    <a
      href={defaultWhatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Meena Events on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-3 border border-champagne bg-wine px-5 text-ivory shadow-[0_10px_30px_-12px_rgba(53,16,29,0.6)] transition-colors hover:bg-wine-deep focus-visible:outline-champagne sm:bottom-8 sm:right-8 pb-[env(safe-area-inset-bottom)]"
    >
      <MessageCircle aria-hidden className="h-5 w-5" strokeWidth={1.6} />
      <span className="hidden text-sm font-medium tracking-wide sm:inline">WhatsApp</span>
    </a>
  );
}
