import { MessageCircle } from "lucide-react";
import { getWhatsAppHref } from "@/config/whatsapp";

// Fixed, bottom-right, offset from the viewport edge on every breakpoint.
// WhatsApp's own green is used deliberately here — it's a recognized
// utility affordance, not a brand-consistency break — everywhere else on
// the site stays on the ink/surface/blue system.
export function WhatsAppButton() {
  const href = getWhatsAppHref();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" strokeWidth={2} />
    </a>
  );
}
