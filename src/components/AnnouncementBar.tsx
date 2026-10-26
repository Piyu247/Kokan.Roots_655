import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import type { Language } from '../types';

interface AnnouncementBarProps {
  language: Language;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ language }) => {
  const message = language === 'mr' ? siteConfig.announcementMr : siteConfig.announcementEn;

  return (
    <div className="bg-[#244D3A] text-[#F8F4EA] border-b border-[#2E5F48] py-2 px-4 text-xs font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 truncate">
          <Sparkles className="w-3.5 h-3.5 text-[#A8BEA3] shrink-0 animate-pulse" />
          <span className="truncate">{message}</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[#DFE9D9]/90 text-xs shrink-0">
          <a
            href="tel:+919082330655"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <PhoneCall className="w-3 h-3 text-[#A8BEA3]" />
            <span>{siteConfig.phonePlaceholder}</span>
          </a>
          <span className="text-[#A8BEA3]/40">|</span>
          <span className="font-['Noto_Sans_Devanagari'] text-[#A8BEA3]">
            {siteConfig.tagline}
          </span>
        </div>
      </div>
    </div>
  );
};
