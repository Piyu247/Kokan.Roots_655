import React from 'react';
import { Compass, ShoppingBag, PackageCheck, MessageCircle, Sparkles } from 'lucide-react';
import type { Language } from '../types';
import { translations } from '../data/translations';

interface WhyKokanRootsProps {
  language: Language;
}

export const WhyKokanRoots: React.FC<WhyKokanRootsProps> = ({ language }) => {
  const t = translations[language];

  const features = [
    {
      icon: <Compass className="w-6 h-6 text-[#244D3A]" />,
      title: t.why1Title,
      desc: t.why1Desc,
      tag: language === 'mr' ? 'परंपरा' : 'Heritage'
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#B96551]" />,
      title: t.why2Title,
      desc: t.why2Desc,
      tag: language === 'mr' ? 'विविधता' : 'Variety'
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-[#244D3A]" />,
      title: t.why3Title,
      desc: t.why3Desc,
      tag: language === 'mr' ? 'स्वच्छता' : 'Hygiene'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#128C7E]" />,
      title: t.why4Title,
      desc: t.why4Desc,
      tag: language === 'mr' ? 'सुलभता' : 'Assistance'
    }
  ];

  return (
    <section id="why-us" className="py-10 sm:py-16 lg:py-24 bg-[#F8F4EA] border-t border-[#EDE5D2]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFE9D9] text-[#244D3A] text-xs font-semibold tracking-wide border border-[#A8BEA3]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#244D3A]" />
            <span>{t.whyBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#244D3A] tracking-tight">
            {language === 'mr' ? (
              <span className="font-['Rozha_One']">{t.whyHeading}</span>
            ) : (
              t.whyHeading
            )}
          </h2>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-[#FCFAF5] rounded-2xl p-4 sm:p-6 lg:p-7 border border-[#EDE5D2] hover:border-[#A8BEA3] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EDE5D2]/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#6B4633] bg-[#DFE9D9]/50 px-2 py-0.5 rounded-full">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-bold text-[#244D3A] group-hover:text-[#B96551] transition-colors leading-snug">
                  {feat.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#595852] leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EDE5D2]/60 w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
