const PHONE = "5531999625891";
const DEFAULT_MESSAGE = "Olá, vi o site da Stractor e gostaria de solicitar um orçamento para serviços de retroescavadeira ou trator.";

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message || DEFAULT_MESSAGE);
  return `https://wa.me/${PHONE}?text=${msg}`;
}
