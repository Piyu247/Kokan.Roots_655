import React from 'react';
import { Sparkles, Utensils, PackageCheck, Store } from 'lucide-react';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface OurStoryProps {
  language: Language;
}

export const OurStory: React.FC<OurStoryProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="story" className="py-12 sm:py-20 lg:py-28 bg-[#F8F4EA] relative overflow-hidden border-t border-[#EDE5D2]">
      {/* Background ambient touches */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#A8BEA3]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Editorial Top Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DFE9D9] text-[#244D3A] text-xs font-semibold tracking-wide border border-[#A8BEA3]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#244D3A]" />
            <span>{t.storyBadge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#244D3A] tracking-tight leading-tight">
            {language === 'mr' ? (
              <span className="font-['Rozha_One']">{t.storyHeading}</span>
            ) : (
              t.storyHeading
            )}
          </h2>

          <p className="mt-3 text-sm font-medium text-[#B96551] font-['Noto_Sans_Devanagari']">
            {siteConfig.tagline}
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#595852] leading-relaxed">
            {t.storyP1}
          </p>
        </div>

        {/* Story Content Grid with Shop-inspired Arch Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Atmospheric Images with Signature Arches */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end">
              
              {/* Arch Card 1: Coastal Landscape & Coconut groves */}
              <div className="relative overflow-hidden rounded-t-[100px] rounded-b-2xl shadow-xl border-2 border-[#A8BEA3]/60 bg-[#244D3A]">
                <img
                  src="/assets/images/konkan_coastal.jpg"
                  alt="Konkan coastal greenery and coconut groves"
                  className="w-full h-44 sm:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[#F8F4EA] text-xs font-medium">
                  {language === 'mr' ? 'कोकण किनारपट्टी व निसर्ग' : 'Lush Coastal Orchards'}
                </div>
              </div>

              {/* Arch Card 2: Physical Store & Packaged presentation */}
              <div className="relative overflow-hidden rounded-t-[100px] rounded-b-2xl shadow-xl border-2 border-[#6B4633]/60 bg-[#6B4633] translate-y-4">
                <img
                  src="/assets/images/shop/media_1792632786384.jpg"
                  alt="Kokan Roots physical retail store display and atmosphere"
                  className="w-full h-52 sm:h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[#F8F4EA] text-xs font-medium">
                  {language === 'mr' ? 'दालनातील स्वच्छ मांडणी' : 'Our Physical Store Showcase'}
                </div>
              </div>

            </div>

            {/* Floating Brand Stamp Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#FCFAF5] px-5 py-2.5 rounded-full shadow-lg border border-[#EDE5D2] flex items-center gap-2 text-xs font-bold text-[#244D3A] whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>{siteConfig.brandName}</span>
              <span className="text-[#A8BEA3]">•</span>
              <span className="font-['Noto_Sans_Devanagari'] font-normal text-[#6B4633]">
                कोकण संस्कृती
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Points & Values */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pl-6">
            
            {/* Context paragraph */}
            <div className="bg-[#FCFAF5] p-6 sm:p-7 rounded-2xl border border-[#EDE5D2] shadow-xs">
              <p className="text-sm sm:text-base text-[#595852] leading-relaxed">
                {t.storyP2}
              </p>
            </div>

            {/* Feature Points */}
            <div className="space-y-4">
              
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FCFAF5] transition-colors border border-transparent hover:border-[#EDE5D2]">
                <div className="w-10 h-10 rounded-xl bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#244D3A]">
                    {t.storyPoint1Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595852] mt-0.5 leading-relaxed">
                    {t.storyPoint1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FCFAF5] transition-colors border border-transparent hover:border-[#EDE5D2]">
                <div className="w-10 h-10 rounded-xl bg-[#EDE5D2] text-[#6B4633] flex items-center justify-center shrink-0">
                  <PackageCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#244D3A]">
                    {t.storyPoint2Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595852] mt-0.5 leading-relaxed">
                    {t.storyPoint2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#FCFAF5] transition-colors border border-transparent hover:border-[#EDE5D2]">
                <div className="w-10 h-10 rounded-xl bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#244D3A]">
                    {t.storyPoint3Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595852] mt-0.5 leading-relaxed">
                    {t.storyPoint3Desc}
                  </p>
                </div>
              </div>

            </div>

            {/* Note about physical store */}
            <div className="p-4 bg-[#244D3A]/5 border-l-4 border-[#244D3A] rounded-r-xl text-xs text-[#244D3A] leading-relaxed">
              <span className="font-bold">{language === 'mr' ? 'दालन भेट:' : 'In-Store Experience:'}</span>{' '}
              {t.visitShopNote}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
