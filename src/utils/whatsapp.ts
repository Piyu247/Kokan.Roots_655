import { siteConfig } from '../data/siteConfig';

/**
 * Returns a clean international phone number suitable for WhatsApp links (wa.me)
 * Defaults Indian 10-digit numbers to country code 91.
 */
export const getCleanWhatsAppNumber = (number: string = siteConfig.whatsappNumber): string => {
  const digits = number.replace(/\D/g, '');
  if (digits.length === 10) {
    return `91${digits}`;
  }
  return digits;
};

/**
 * Generates an official WhatsApp Click-to-Chat URL
 */
export const getWhatsAppUrl = (message?: string, number: string = siteConfig.whatsappNumber): string => {
  const cleanNumber = getCleanWhatsAppNumber(number);
  if (!cleanNumber) return '';
  if (message && message.trim()) {
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${cleanNumber}`;
};
