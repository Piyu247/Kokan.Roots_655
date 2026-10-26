import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, Sparkles, AlertCircle } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product, Language } from '../types';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { translations } from '../data/translations';
import { getCategoryTheme } from '../data/categoryThemes';

interface ProductGridProps {
  language: Language;
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'name-asc';

export const ProductGrid: React.FC<ProductGridProps> = ({
  language,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onAddToCart,
  onQuickView
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const t = translations[language];

  // Filter products based on search query, category, etc.
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.categoryId !== selectedCategory) {
        return false;
      }

      // Search query filter (matches English or Marathi name, description, ingredients, origin)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchEn =
          item.nameEn.toLowerCase().includes(query) ||
          item.descriptionEn.toLowerCase().includes(query) ||
          (item.ingredientsEn && item.ingredientsEn.toLowerCase().includes(query));
        const matchMr =
          item.nameMr.includes(query) ||
          item.descriptionMr.includes(query) ||
          (item.ingredientsMr && item.ingredientsMr.includes(query));
        const matchOrigin = item.origin && item.origin.toLowerCase().includes(query);

        if (!matchEn && !matchMr && !matchOrigin) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Sort filtered products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    switch (sortBy) {
      case 'price-asc':
        return list.sort((a, b) => (a.price ?? 99999) - (b.price ?? 99999));
      case 'price-desc':
        return list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
      case 'name-asc':
        return list.sort((a, b) =>
          language === 'mr' ? a.nameMr.localeCompare(b.nameMr) : a.nameEn.localeCompare(b.nameEn)
        );
      case 'popular':
      default:
        return list.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }
  }, [filteredProducts, sortBy, language]);

  // Resolve the active category theme (for header accent, border, etc.)
  const activeCategoryObj = selectedCategory !== 'all'
    ? categories.find((c) => c.id === selectedCategory)
    : null;
  const activeTheme = selectedCategory !== 'all'
    ? getCategoryTheme(selectedCategory)
    : null;

  return (
    <section id="shop" className="pt-6 pb-12 sm:py-16 lg:py-24 bg-[#F8F4EA] scroll-mt-6 sm:scroll-mt-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-4 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#DFE9D9] text-[#244D3A] text-[11px] sm:text-xs font-semibold tracking-wide border border-[#A8BEA3]/40 mb-1.5 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#244D3A]" />
              <span>
                {activeCategoryObj
                  ? (language === 'mr' ? activeCategoryObj.nameMr : activeCategoryObj.nameEn)
                  : t.productsBadge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#244D3A] tracking-tight">
              {activeCategoryObj ? (
                language === 'mr' ? (
                  <span className="font-['Rozha_One']">{activeCategoryObj.nameMr}</span>
                ) : (
                  activeCategoryObj.nameEn
                )
              ) : (
                language === 'mr' ? (
                  <span className="font-['Rozha_One']">{t.productsHeading}</span>
                ) : (
                  t.productsHeading
                )
              )}
            </h2>
            <p className="mt-1 sm:mt-2 text-xs sm:text-base text-[#595852] max-w-xl">
              {activeCategoryObj
                ? (language === 'mr' ? activeCategoryObj.descriptionMr : activeCategoryObj.descriptionEn)
                : t.productsSubheading}
            </p>
          </div>

          {/* Search Bar Input */}
          <div className="w-full md:w-80 relative mt-1 md:mt-0">
            <Search className="w-4 h-4 text-[#6B4633] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-9 py-2.5 bg-[#FCFAF5] border border-[#EDE5D2] focus:border-[#244D3A] rounded-full text-xs sm:text-sm text-[#282824] placeholder-[#595852]/60 focus:outline-none focus:ring-2 focus:ring-[#244D3A]/20 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#595852] hover:text-[#282824] p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter and Sorting Controls Bar */}
        <div
          style={activeTheme ? { borderBottomColor: activeTheme.accentBorder } : undefined}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-[#EDE5D2]"
        >
          
          {/* Category Filter Pills (Horizontal scrollable) — themed when active */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full lg:w-auto min-w-0">
            <button
              type="button"
              onClick={() => onSelectCategory('all')}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#244D3A] text-[#F8F4EA] shadow-xs'
                  : 'bg-[#EDE5D2]/70 text-[#282824] hover:bg-[#EDE5D2] hover:text-[#244D3A]'
              }`}
            >
              {t.allProducts} ({products.length})
            </button>

            {categories.map((cat) => {
              const count = products.filter((p) => p.categoryId === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              const catTheme = getCategoryTheme(cat.id);

              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  style={isSelected ? {
                    backgroundColor: catTheme.badgeBg,
                    color: catTheme.badgeText,
                    borderColor: catTheme.accentBorder
                  } : undefined}
                  className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'shadow-xs'
                      : 'bg-[#EDE5D2]/70 text-[#282824] hover:bg-[#EDE5D2] hover:text-[#244D3A]'
                  }`}
                >
                  {language === 'mr' ? cat.nameMr : cat.nameEn}
                  {count > 0 && <span className="ml-1.5 opacity-70">({count})</span>}
                </button>
              );
            })}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center justify-between lg:justify-end gap-3 shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-[#595852]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#244D3A]" />
              <span>{t.sortLabel}:</span>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-[#FCFAF5] border border-[#EDE5D2] text-[#282824] text-xs font-medium rounded-lg px-3 py-2 focus:outline-none focus:border-[#244D3A] cursor-pointer shadow-xs"
            >
              <option value="popular">{t.sortPopular}</option>
              <option value="price-asc">{t.sortPriceLowHigh}</option>
              <option value="price-desc">{t.sortPriceHighLow}</option>
              <option value="name-asc">{t.sortNameAZ}</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-7">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                language={language}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="text-center py-16 px-4 bg-[#FCFAF5] rounded-3xl border border-[#EDE5D2] max-w-xl mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#DFE9D9] flex items-center justify-center mx-auto mb-4 text-[#244D3A]">
              <Search className="w-8 h-8 opacity-70" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#244D3A]">
              {language === 'mr' ? 'कोणतीही उत्पादने सापडली नाहीत' : 'No products found'}
            </h3>
            <p className="mt-2 text-xs text-[#595852] max-w-md mx-auto leading-relaxed">
              {t.searchNoResults}
            </p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('all');
                onSearchChange('');
              }}
              className="mt-6 px-5 py-2.5 bg-[#244D3A] hover:bg-[#1A392B] text-[#F8F4EA] rounded-full text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              {t.clearFilters}
            </button>
          </div>
        )}

        {/* Demo Notice footer disclaimer */}
        <div className="mt-12 text-center flex items-center justify-center gap-1.5 text-xs text-[#6B4633]/80">
          <AlertCircle className="w-3.5 h-3.5 text-[#B96551] shrink-0" />
          <span>{t.demoDataNotice}</span>
        </div>

      </div>
    </section>
  );
};
