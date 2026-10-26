import React from 'react';
import { siteConfig } from '../data/siteConfig';
import type { Language } from '../types';
import { translations } from '../data/translations';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'emblem';
  className?: string;
  showTagline?: boolean;
  language?: Language;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true,
  language = 'en'
}) => {
  const isLight = variant === 'light';
  const tagline = translations[language]?.brandTagline || (language === 'mr' ? siteConfig.tagline : 'Authentic Konkan Flavours');

  // Footer variant
  if (isLight) {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Main circular brand logo */}
        <img
          src="/images/kokan-roots-logo.png"
          alt={siteConfig.brandName}
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full ring-2 ring-[#EDE5D2]/30 shadow-md bg-[#F8F4EA] shrink-0"
        />
        <div className="flex flex-col items-start">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#F8F4EA] leading-tight">
            {siteConfig.brandName}
          </span>
          {showTagline && (
            <span className={`text-[11px] font-medium tracking-wide text-[#DFE9D9]/85 mt-0.5 ${language === 'mr' ? "font-['Noto_Sans_Devanagari']" : ""}`}>
              {tagline}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Header / default variant: Circular brand logo on the LEFT + Kokan Roots text & tagline on the RIGHT
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 select-none ${className}`}>
      {/* Main circular logo of Kokan Roots on the left */}
      <img
        src="/images/kokan-roots-logo.png"
        alt={siteConfig.brandName}
        className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full shadow-xs border border-[#A8BEA3]/40 bg-[#F8F4EA] shrink-0 transition-transform duration-300 hover:scale-105"
      />

      {/* Brand title and tagline on the right */}
      <div className="flex flex-col items-start justify-center text-left leading-none">
        <span className="font-serif text-[20px] sm:text-[22px] font-bold tracking-tight text-[#244D3A] flex items-center leading-tight">
          Kokan
          {/* Coconut tree between Kokan & Roots */}
          <span className="inline-flex items-center justify-center mx-1 shrink-0 -translate-y-0.5">
            <svg
              className="w-4 h-5.5 text-[#244D3A] overflow-visible"
              viewBox="0 0 40 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Slender curved trunk with natural texture */}
              <path
                d="M19 22 C20 30 22 40 21 48 C19 48 18 30 17 22 Z"
                fill="#6B4633"
              />
              {/* Left flowing palm fronds */}
              <path
                d="M18 22 C14 18 6 18 1 23 C5 14 13 15 18 21 Z"
                fill="#244D3A"
              />
              <path
                d="M18 20 C13 14 6 11 2 13 C8 7 14 9 18 19 Z"
                fill="#2E5F48"
              />
              <path
                d="M19 18 C16 10 11 5 7 6 C13 1 17 4 19 17 Z"
                fill="#3B7A5D"
              />
              {/* Center vertical top sprout */}
              <path
                d="M19 17 C18.5 9 19 3 20 1 C21 3 21.5 9 20 17 Z"
                fill="#2E5F48"
              />
              {/* Right flowing palm fronds */}
              <path
                d="M20 18 C23 10 28 5 32 6 C26 1 22 4 20 17 Z"
                fill="#3B7A5D"
              />
              <path
                d="M21 20 C26 14 33 11 37 13 C31 7 25 9 21 19 Z"
                fill="#2E5F48"
              />
              <path
                d="M21 22 C25 18 33 18 38 23 C34 14 26 15 21 21 Z"
                fill="#244D3A"
              />
              {/* Small cluster of coconuts */}
              <circle cx="18" cy="22" r="1.5" fill="#8A5C43" />
              <circle cx="21" cy="22" r="1.5" fill="#6B4633" />
              <circle cx="19.5" cy="23.5" r="1.4" fill="#5A3A29" />
            </svg>
          </span>
          Roots
        </span>

        {/* Dynamic Marathi/English Tagline */}
        {showTagline && (
          <span
            className={`text-[9px] sm:text-[10px] tracking-wide text-[#9E7D46] font-medium mt-0.5 whitespace-nowrap leading-tight transition-all duration-200 ${
              language === 'mr' ? "font-['Noto_Sans_Devanagari'] font-semibold" : ""
            }`}
          >
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
};
