import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import type { Language } from '../types';
import { translations } from '../data/translations';

interface SpecialitiesBannerProps {
  language: Language;
  onExploreSpecialities: () => void;
}

export const SpecialitiesBanner: React.FC<SpecialitiesBannerProps> = ({
  language,
  onExploreSpecialities
}) => {
  const t = translations[language];

  return (
    <section id="specialities" className="py-8 sm:py-12 lg:py-16 bg-[#F8F4EA]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Banner Container in Muted Terracotta & Forest Green styling */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#244D3A] via-[#1D4030] to-[#142A20] text-[#F8F4EA] shadow-2xl border border-[#A8BEA3]/30">
          
          {/* Subtle decorative circles & foliage */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#B96551]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8BEA3]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 z-10">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B96551]/30 border border-[#B96551]/50 text-[#F8F4EA] text-xs font-semibold tracking-wide mb-6">
                <Flame className="w-3.5 h-3.5 text-[#E8A598]" />
                <span>{t.specialitiesBadge}</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl xl:text-5xl font-serif font-bold tracking-tight text-white leading-tight mb-4 sm:mb-5">
                {language === 'mr' ? (
                  <span className="font-['Rozha_One']">{t.specialitiesHeading}</span>
                ) : (
                  <>
                    Authentic <span className="italic text-[#E8A598]">Coastal Treasures</span>
                  </>
                )}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#DFE9D9]/90 leading-relaxed max-w-xl mb-8 font-normal">
                {t.specialitiesDescription}
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-[#F8F4EA]/90">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8A598]" />
                  <span>{language === 'mr' ? 'अस्सल मालवणी कोंबडी वडे पीठ' : 'Traditional Kombdi Vade Peeth'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8A598]" />
                  <span>{language === 'mr' ? '२८ घटकांचा मालवणी संडे मसाला' : '28-Spice Malvani Blend'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8A598]" />
                  <span>{language === 'mr' ? 'उन्हात वाळवलेली आंबोशी' : 'Sun-Dried Amboshi'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8A598]" />
                  <span>{language === 'mr' ? 'अस्सल कोकम आगळ व सोलकढी' : 'Natural Kokum Agal'}</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={onExploreSpecialities}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#B96551] hover:bg-[#9E4D3A] text-white rounded-full font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <span>{t.exploreSpecialitiesBtn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

            </div>

            {/* Right Photography Column: Featuring the Authentic Kombdi Vade */}
            <div className="lg:col-span-5 relative h-52 sm:h-72 lg:h-full min-h-[420px] overflow-hidden bg-[#1A392B]">
              <img
                src="/assets/images/kombdi_vade.png"
                alt="Traditional Konkan Malvani Kombdi Vade on terracotta plate"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#244D3A] via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#244D3A] via-transparent to-transparent lg:hidden" />

              {/* Floating label badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#244D3A]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#A8BEA3]/40 text-[#F8F4EA] flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A8BEA3] font-semibold block">
                    {language === 'mr' ? 'कोकणची खास मेजवानी' : 'Iconic Konkan Dish'}
                  </span>
                  <span className="text-xs font-bold text-white">
                    {language === 'mr' ? 'पारंपारिक मालवणी कोंबडी वडे' : 'Authentic Malvani Kombdi Vade'}
                  </span>
                </div>
                <span className="text-[11px] font-semibold bg-[#B96551] px-2.5 py-1 rounded-full text-white">
                  {language === 'mr' ? 'पीठ उपलब्ध' : 'Peeth Mix Available'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
