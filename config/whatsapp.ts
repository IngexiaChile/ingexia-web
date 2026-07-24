/**
 * Single source of truth for the floating WhatsApp button. Set
 * NEXT_PUBLIC_WHATSAPP_NUMBER in the environment (see .env.example) with
 * the full international number, digits only (e.g. "56912345678") — no
 * "+", spaces or dashes. The button renders nothing if it's unset, so an
 * unconfigured deploy never ships a dead link.
 */
export const whatsappConfig = {
  phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  message: "Hola, me interesa conocer más sobre los servicios de Ingexia.",
} as const;

export function getWhatsAppHref() {
  if (!whatsappConfig.phoneNumber) return null;
  const params = new URLSearchParams({ text: whatsappConfig.message });
  return `https://wa.me/${whatsappConfig.phoneNumber}?${params.toString()}`;
}
