import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, MapPin } from 'lucide-react';
import type { Product, Language } from '../types';
import { translations } from '../data/translations';
import { getCategoryTheme, type CategoryTheme } from '../data/categoryThemes';

interface ProductCardProps {
  product: Product;
  language: Language;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  language,
  onAddToCart,
  onQuickView
}) => {
  const [justAdded, setJustAdded] = useState(false);
  const t = translations[language];
  const theme: CategoryTheme = getCategoryTheme(product.categoryId);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const name = language === 'mr' ? product.nameMr : product.nameEn;
  const secondaryName = language === 'mr' ? product.nameEn : product.nameMr;
  const description = language === 'mr' ? product.descriptionMr : product.descriptionEn;
  const packSize = language === 'mr' ? product.packageSizeMr : product.packageSize;
  const badge = language === 'mr' ? product.badgeMr : product.badgeEn;

  return (
    <div
      onClick={() => onQuickView(product)}
      style={{
        backgroundColor: theme.bgTint,
        borderColor: theme.accentBorder
      }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Product Image Area — category-tinted container, original photos untouched */}
      <div
        style={{ backgroundColor: theme.containerBg, aspectRatio: '4/3' }}
        className="relative w-full overflow-hidden flex items-center justify-center p-2"
      >
        <img
          src={product.image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-106 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Product Badges — use category dark accent */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {badge && (
            <span
              style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-sm"
            >
              {badge}
            </span>
          )}
          {product.isSugarFree && (
            <span className="bg-[#A8BEA3] text-[#244D3A] px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide shadow-sm">
              Sugar Free
            </span>
          )}
        </div>

        {/* Quick View Button Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-[#F8F4EA]/95 text-[#244D3A] hover:bg-[#244D3A] hover:text-[#F8F4EA] px-4 py-2 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1.5 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t.viewDetails}</span>
          </button>
        </div>

        {/* Origin Pill at bottom */}
        {product.origin && (
          <div className="absolute bottom-2.5 left-2.5 bg-black/55 backdrop-blur-xs text-white/95 px-2 py-0.5 rounded-md text-[10px] flex items-center gap-1 font-medium">
            <MapPin className="w-2.5 h-2.5 text-[#A8BEA3]" />
            <span>{product.origin}</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-2.5 sm:p-4 md:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Package Weight info — category-tinted chip */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#6B4633] font-medium mb-1">
            <span
              style={{ backgroundColor: `${theme.accentBorder}50` }}
              className="px-1.5 py-0.5 rounded-sm"
            >
              {packSize}
            </span>
          </div>

          {/* Product Name */}
          <h3
            className="text-sm sm:text-base md:text-lg font-serif font-bold text-[#244D3A] group-hover:text-[#6B4633] transition-colors line-clamp-1 leading-snug"
          >
            {name}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-[#6B4633]/80 italic line-clamp-1">
            {secondaryName}
          </p>

          {/* Short Description */}
          <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-[#595852] line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price & Action Button — category-tinted divider */}
        <div
          style={{ borderColor: theme.accentBorder }}
          className="mt-2.5 sm:mt-4 pt-2 sm:pt-3.5 border-t flex items-center justify-between gap-1.5"
        >
          <div className="flex flex-col min-w-0">
            {product.price !== null ? (
              <div className="flex items-baseline gap-0.5">
                <span className="text-[10px] sm:text-xs font-medium text-[#595852]">₹</span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-[#244D3A] tracking-tight">
                  {product.price}
                </span>
              </div>
            ) : (
              <span className="text-[10px] sm:text-xs font-semibold text-[#B96551] bg-[#DFE9D9]/50 px-1.5 py-0.5 rounded-sm">
                {t.priceOnRequest}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${name} to bag`}
            className={`flex items-center gap-1 px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-200 shadow-xs cursor-pointer shrink-0 ${
              justAdded
                ? 'bg-[#244D3A] text-[#F8F4EA]'
                : 'bg-[#DFE9D9] hover:bg-[#244D3A] text-[#244D3A] hover:text-[#F8F4EA]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3 h-3" />
                <span className="hidden sm:inline">{t.addedToCart}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3" />
                <span>{t.addToCart}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
