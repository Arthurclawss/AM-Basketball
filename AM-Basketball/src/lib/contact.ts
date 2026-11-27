// Dados de contato centralizados.
// Formato: código do país + DDD + número, só dígitos.
export const WHATSAPP_NUMBER = "558488734892"; // Contato provisório mantido a pedido do responsável; atualizar após confirmação do Arthur

export const INSTAGRAM_URL = "https://www.instagram.com/ambasketball__/";

const DEFAULT_MESSAGE =
  "Oi, Arthur! Vi teu site e queria conversar sobre teu trabalho no basquete.";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
