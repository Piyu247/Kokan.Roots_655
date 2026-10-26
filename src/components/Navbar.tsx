import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  // Prevent background scroll when mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      lockBodyScroll();
    }
    return () => {
      if (mobileMenuOpen) {
        unlockBodyScroll();
      }
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: t.navHome },
    { href: '#categories', label: t.shopCategories },
    { href: '#shop', label: t.navShop },
    { href: '#story', label: t.navStory },
    { href: '#specialities', label: t.navSpecialities },
    { href: '#why-us', label: t.navWhyUs },
    { href: '#contact', label: t.navContact }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F4EA] border-b border-[#EDE5D2] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-200">
      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          
          {/* MOBILE LEFT: Three-line hamburger menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 -ml-1 text-[#282824] hover:text-[#244D3A] active:bg-[#A8BEA3]/20 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.2]" /> : <Menu className="w-6 h-6 stroke-[2.2]" />}
            </button>
          </div>

          {/* DESKTOP LEFT: Brand Logo */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#home"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244D3A] rounded-lg"
            >
              <BrandLogo showTagline={true} language={language} />
            </a>
          </div>

          {/* MOBILE CENTRE: Kokan Roots logo and tagline */}
          <div className="flex lg:hidden flex-1 items-center justify-center min-w-0 px-1">
            <a
              href="#home"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244D3A] rounded-lg"
            >
              <BrandLogo showTagline={true} language={language} />
            </a>
          </div>

          {/* DESKTOP CENTRE: Navigation links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-[#282824] hover:text-[#244D3A] hover:bg-[#A8BEA3]/15 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTIONS: Search, Cart Icon with live badge (and Desktop Language Switcher) */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search products"
              className="p-2 text-[#282824] hover:text-[#244D3A] hover:bg-[#A8BEA3]/20 rounded-full transition-colors cursor-pointer"
              title={t.searchPlaceholder}
            >
              <Search className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.2]" />
            </button>

            {/* Desktop Language Switcher */}
            <div className="hidden lg:flex items-center bg-[#EDE5D2]/70 rounded-full p-0.5 border border-[#A8BEA3]/40">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#244D3A] text-white shadow-xs'
                    : 'text-[#282824] hover:text-[#244D3A]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('mr')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all font-['Noto_Sans_Devanagari'] cursor-pointer ${
                  language === 'mr'
                    ? 'bg-[#244D3A] text-white shadow-xs'
                    : 'text-[#282824] hover:text-[#244D3A]'
                }`}
              >
                मराठी
              </button>
            </div>

            {/* Cart Icon with Live Badge (Wireframe cart icon matching reference image) */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Open Shopping Bag"
              className="relative p-2 -mr-1 sm:mr-0 text-[#282824] hover:text-[#244D3A] active:bg-[#A8BEA3]/20 rounded-full transition-colors cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6 stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 -right-0.5 bg-[#B96551] text-white text-[11px] font-bold min-w-4.5 h-4.5 px-1 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-75 duration-200">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Secondary Mobile Header Row: Visible, functional English | मराठी Toggle */}
      <div className="lg:hidden bg-[#F2EDE0] border-t border-[#E5DCBE] py-1.5 px-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-center">
          <div
            role="group"
            aria-label="Language selection"
            className="inline-flex items-center bg-[#E5DEC7]/90 p-0.5 rounded-full border border-[#D5CBB0] shadow-xs"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              className={`px-4 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                language === 'en'
                  ? 'bg-[#244D3A] text-[#F8F4EA] shadow-xs'
                  : 'text-[#595852] hover:text-[#244D3A]'
              }`}
            >
              English
            </button>
            <span className="text-[#A8BEA3]/60 px-0.5 text-xs select-none">|</span>
            <button
              type="button"
              onClick={() => onLanguageChange('mr')}
              aria-pressed={language === 'mr'}
              className={`px-4 py-1 text-xs font-bold rounded-full transition-all duration-200 font-['Noto_Sans_Devanagari'] cursor-pointer ${
                language === 'mr'
                  ? 'bg-[#244D3A] text-[#F8F4EA] shadow-xs'
                  : 'text-[#595852] hover:text-[#244D3A]'
              }`}
            >
              मराठी
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (When hamburger menu is opened) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F4EA] border-b border-[#A8BEA3]/40 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#282824] hover:text-[#244D3A] hover:bg-[#A8BEA3]/20 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#EDE5D2] flex flex-col gap-3">
            <a
              href="tel:+919082330655"
              className="flex items-center gap-2 text-xs text-[#595852] hover:text-[#244D3A] bg-[#EDE5D2]/50 p-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#244D3A]" />
              <span>{siteConfig.phonePlaceholder}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
