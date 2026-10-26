import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { getCategoryTheme } from '../data/categoryThemes';

interface CategoryGridProps {
  language: Language;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  language,
  onSelectCategory
}) => {
  const t = translations[language];

  return (
    <section id="categories" className="py-5 sm:py-12 lg:py-16 bg-[#F8F4EA] border-t border-[#EDE5D2]">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* Section Header with reduced vertical margin on mobile */}
        <div className="text-center max-w-2xl mx-auto mb-3.5 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#DFE9D9] text-[#244D3A] text-[11px] sm:text-xs font-semibold tracking-wide border border-[#A8BEA3]/40 mb-1.5 sm:mb-3">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#244D3A]" />
            <span>{t.categoriesBadge}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#244D3A] tracking-tight">
            {language === 'mr' ? (
              <span className="font-['Rozha_One']">{t.categoriesHeading}</span>
            ) : (
              t.categoriesHeading
            )}
          </h2>
          <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm lg:text-base text-[#595852] max-w-xl mx-auto">
            {t.categoriesSubheading}
          </p>
        </div>

        {/* Categories Grid: exactly 3 cols on mobile (3x3 = 9 categories) and 3 cols on md/lg */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-5">
          {categories.map((cat) => {
            const theme = getCategoryTheme(cat.id);

            const count = products.filter((p) => p.categoryId === cat.id).length;
            const countLabel = language === 'mr'
              ? `${count} ${count === 1 ? 'उत्पादन' : 'उत्पादने'}`
              : `${count} ${count === 1 ? 'item' : 'items'}`;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  backgroundColor: theme.bgTint,
                  borderColor: theme.accentBorder
                }}
                className="group relative flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
              >
                {/* Category Image Container */}
                <div
                  style={{ backgroundColor: theme.containerBg }}
                  className="relative aspect-square sm:aspect-auto sm:h-44 md:h-48 w-full overflow-hidden flex items-center justify-center p-1.5 sm:p-3"
                >
                  {/* Subtle inner backdrop highlight on tablet/desktop */}
                  <div
                    style={{ borderColor: theme.accentBorder }}
                    className="hidden sm:block absolute inset-1.5 sm:inset-2 rounded-lg sm:rounded-xl border border-white/40 -z-0"
                  />
                  
                  <img
                    src={cat.image}
                    alt={language === 'mr' ? cat.nameMr : cat.nameEn}
                    className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-300 ease-out"
                    loading="lazy"
                  />

                  {/* Floating Explore Pill (tablet/desktop only) */}
                  <div className="hidden sm:flex absolute bottom-2.5 right-2.5 z-20 bg-white/90 backdrop-blur-xs text-[#244D3A] p-1.5 sm:p-2 rounded-full shadow-xs group-hover:bg-[#244D3A] group-hover:text-[#F8F4EA] transition-colors duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  {/* Compact Product Count Badge */}
                  <div
                    style={{
                      backgroundColor: theme.badgeBg,
                      color: theme.badgeText
                    }}
                    className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 z-20 px-1.5 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[11px] font-semibold tracking-wide shadow-xs"
                  >
                    {/* On mobile, show concise number (e.g. 8) or compact label */}
                    <span className="sm:hidden">{count}</span>
                    <span className="hidden sm:inline">{countLabel}</span>
                  </div>
                </div>

                {/* Content: Compact on mobile with name only; full on tablet/desktop */}
                <div className="p-2 sm:p-4 flex-1 flex flex-col justify-between text-center sm:text-left">
                  <div>
                    <h3 className="text-[11px] leading-tight sm:text-base font-serif font-bold text-[#244D3A] group-hover:text-[#6B4633] transition-colors line-clamp-2">
                      {language === 'mr' ? cat.nameMr : cat.nameEn}
                    </h3>
                    {/* Description hidden on mobile, visible on sm+ */}
                    <p className="hidden sm:block mt-1 text-[10px] sm:text-xs text-[#595852] leading-relaxed line-clamp-2">
                      {language === 'mr' ? cat.descriptionMr : cat.descriptionEn}
                    </p>
                  </div>

                  {/* Explore link row hidden on mobile, visible on sm+ */}
                  <div className="hidden sm:flex mt-2.5 pt-2 border-t border-black/8 items-center justify-between text-[11px] sm:text-xs font-semibold text-[#6B4633] group-hover:text-[#244D3A]">
                    <span className="text-[10px] sm:text-[11px]">{t.exploreCategory}</span>
                    <span
                      style={{ color: theme.accentChip }}
                      className="group-hover:translate-x-1 transition-transform font-bold"
                    >
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
