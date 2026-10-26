import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import type { Language } from '../types';

interface FloatingWhatsAppProps {
  language: Language;
  hasCartItems?: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language, hasCartItems = false }) => {
  const greeting = language === 'mr'
    ? 'नमस्कार कोकण रूट्स! मला आपल्या उत्पादनांबद्दल माहिती हवी आहे.'
    : 'Hello Kokan Roots! I would like to inquire about your products.';

  const waUrl = getWhatsAppUrl(greeting);

  if (!waUrl) return null;

  const tooltipText = language === 'mr' ? 'व्हॉट्सॲपवर संपर्क करा' : 'Chat on WhatsApp';

  return (
    <aside
      aria-label="WhatsApp Contact"
      className={`fixed right-4 sm:right-6 z-30 group transition-all duration-300 ${
        hasCartItems ? 'bottom-20 sm:bottom-6' : 'bottom-6'
      }`}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltipText}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

        <MessageCircle className="w-6 h-6 shrink-0 fill-current" />
        
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide whitespace-nowrap pr-1">
          {tooltipText}
        </span>
      </a>
    </aside>
  );
};
