import React from 'react';
import { BrandLogo } from './BrandLogo';
import type { Language } from '../types';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';
import { categories } from '../data/categories';

interface FooterProps {
  language: Language;
  onSelectCategory: (catId: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ language, onSelectCategory }) => {
  const t = translations[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#244D3A] text-[#F8F4EA] border-t-4 border-[#6B4633] pt-10 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-[#2E5F48]">
          
          {/* Col 1: Brand Info & Wordmark */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" showTagline={true} language={language} />

            <p className="text-xs sm:text-sm text-[#DFE9D9]/85 leading-relaxed pt-2">
              {t.footerDesc}
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-[#A8BEA3] block uppercase tracking-wider mb-2">
                {language === 'mr' ? 'आम्हाला फॉलो करा' : 'Connect With Us'}
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={`https://www.instagram.com/${siteConfig.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#1A392B] flex items-center justify-center text-[#DFE9D9] hover:text-white hover:bg-[#B96551] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-serif font-bold text-[#A8BEA3] uppercase tracking-wider mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DFE9D9]/85">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {t.navHome}
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  {t.shopCategories}
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  {t.navShop}
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  {t.navStory}
                </a>
              </li>
              <li>
                <a href="#specialities" className="hover:text-white transition-colors">
                  {t.navSpecialities}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  {t.navWhyUs}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories Selection */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-serif font-bold text-[#A8BEA3] uppercase tracking-wider mb-4">
              {t.shopCategories}
            </h4>
            <ul className="space-y-2 text-xs text-[#DFE9D9]/85">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      const el = document.getElementById('shop');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:underline transition-colors text-left cursor-pointer"
                  >
                    {language === 'mr' ? cat.nameMr : cat.nameEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Store Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-serif font-bold text-[#A8BEA3] uppercase tracking-wider mb-4">
              {t.contactInfo}
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-[#DFE9D9]/85">
              <MapPin className="w-4 h-4 text-[#A8BEA3] shrink-0 mt-0.5" />
              <span>
                {language === 'mr' ? siteConfig.addressPlaceholderMr : siteConfig.addressPlaceholder}
              </span>
            </div>

            <a
              href="tel:+919082330655"
              className="flex items-center gap-2.5 text-xs text-[#DFE9D9]/85 hover:text-white transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#A8BEA3] shrink-0" />
              <span>{siteConfig.phonePlaceholder}</span>
            </a>

            <a
              href={`mailto:${siteConfig.emailPlaceholder}`}
              className="flex items-center gap-2.5 text-xs text-[#DFE9D9]/85 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#A8BEA3] shrink-0" />
              <span>{siteConfig.emailPlaceholder}</span>
            </a>

            <div className="pt-2">
              <span className="text-[11px] text-[#A8BEA3]/80 italic">
                {language === 'mr' ? siteConfig.hoursPlaceholderMr : siteConfig.hoursPlaceholder}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DFE9D9]/70">
          <div>
            © {CURRENT_YEAR} {siteConfig.brandName}. {t.copyrightText}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-['Noto_Sans_Devanagari'] text-[#A8BEA3]">
              {siteConfig.tagline}
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-full bg-[#1A392B] hover:bg-[#B96551] text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
