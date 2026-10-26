import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-10 sm:pt-6 sm:pb-16 lg:py-20 bg-[#F8F4EA]">
      {/* Decorative background accents inspired by store's warm wood & sage arches */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DFE9D9]/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#EDE5D2]/70 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Brand Message & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFE9D9] text-[#244D3A] text-xs font-semibold tracking-wide border border-[#A8BEA3]/50 mb-5 shadow-xs">
              <Leaf className="w-3.5 h-3.5 text-[#244D3A]" />
              <span className="font-['Noto_Sans_Devanagari']">{siteConfig.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-6xl font-serif font-bold text-[#244D3A] tracking-tight leading-[1.15] mb-4 sm:mb-5">
              {language === 'mr' ? (
                <span className="font-['Rozha_One'] text-[#244D3A] block leading-tight">
                  {t.heroHeading}
                </span>
              ) : (
                <>
                  Bring the Taste of <span className="italic font-normal text-[#B96551]">Konkan</span> Home
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base sm:text-lg text-[#595852] max-w-xl mb-5 sm:mb-8 leading-relaxed font-normal">
              {t.heroSubheading}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#244D3A] hover:bg-[#1A392B] text-[#F8F4EA] rounded-full font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span>{t.heroCtaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#EDE5D2]/70 text-[#6B4633] border border-[#6B4633]/40 rounded-full font-medium text-sm sm:text-base transition-all duration-300 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#6B4633]" />
                <span>{t.heroCtaSecondary}</span>
              </a>
            </div>

            {/* Heritage Micro Trust Badges */}
            <div className="mt-6 sm:mt-10 pt-5 sm:pt-8 border-t border-[#EDE5D2] grid grid-cols-3 gap-2 sm:gap-4 w-full">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#244D3A] font-semibold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#244D3A] shrink-0" />
                  <span>{t.heroStatsPurity}</span>
                </div>
                <span className="text-[11px] text-[#595852] mt-0.5">
                  {language === 'mr' ? 'अस्सल चव आणि दर्जा' : 'Authentic taste'}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#244D3A] font-semibold text-xs sm:text-sm">
                  <HeartHandshake className="w-4 h-4 text-[#B96551] shrink-0" />
                  <span>{t.heroStatsCraft}</span>
                </div>
                <span className="text-[11px] text-[#595852] mt-0.5">
                  {language === 'mr' ? 'पारंपरिक पाककृती' : 'Time-tested recipes'}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#244D3A] font-semibold text-xs sm:text-sm">
                  <Leaf className="w-4 h-4 text-[#A8BEA3] shrink-0" />
                  <span>{t.heroStatsOrigin}</span>
                </div>
                <span className="text-[11px] text-[#595852] mt-0.5">
                  {language === 'mr' ? 'कोकणातील निवडक वाण' : 'Handpicked staples'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Food Photography with Shop-Inspired Arch Styling */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Sage Green Arch Backdrop (inspired by the physical shop's arched alcoves) */}
              <div className="absolute -inset-3 bg-[#A8BEA3]/30 rounded-3xl lg:rounded-t-[140px] lg:rounded-b-3xl transform rotate-1 scale-102 -z-10" />
              
              {/* Dark Wood Framing border */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-t-[130px] lg:rounded-b-2xl shadow-2xl border-4 border-[#F8F4EA] bg-[#6B4633]">
                <img
                  src="/assets/images/hero_feast.jpg"
                  alt="Traditional Konkan food delicacies flat lay including cashews, pickles, red poha, and red rice"
                  className="w-full h-[240px] sm:h-[380px] lg:h-[500px] object-cover hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />

                {/* Ambient dark gradient overlay at bottom for card badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Store Heritage Pill on image */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#F8F4EA]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#A8BEA3]/50 shadow-lg flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#B96551] animate-ping" />
                  <div>
                    <p className="text-xs font-bold text-[#244D3A]">
                      {language === 'mr' ? 'अस्सल कोकणी खाद्य दालन' : 'Authentic Konkan Delicacies'}
                    </p>
                    <p className="text-[11px] text-[#6B4633] font-medium">
                      {siteConfig.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Cashew / Spice Accent Floater */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#244D3A] text-[#F8F4EA] p-3.5 rounded-2xl shadow-xl border-2 border-[#A8BEA3] items-center gap-3 max-w-[210px]">
                <div className="w-10 h-10 rounded-xl bg-[#F8F4EA] overflow-hidden shrink-0">
                  <img
                    src="/assets/images/kaju_cashews.jpg"
                    alt="Cashew"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] text-[#A8BEA3] uppercase tracking-wider font-semibold">
                    {language === 'mr' ? 'कोकणचे प्रसिद्ध' : 'Konkan Pride'}
                  </div>
                  <div className="text-xs font-bold truncate">
                    {language === 'mr' ? 'काजू व लोणची' : 'Cashews & Pickles'}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
