import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MapPin, Check, Plus, Minus, MessageCircle } from 'lucide-react';
import type { Product, Language } from '../types';
import { translations } from '../data/translations';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';
import { getCategoryTheme } from '../data/categoryThemes';

interface ProductModalProps {
  product: Product | null;
  language: Language;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  language,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [prevProductId, setPrevProductId] = useState<string | null>(product?.id ?? null);
  const t = translations[language];

  // Reset quantity when modal opens for a new product
  if (product && product.id !== prevProductId) {
    setPrevProductId(product.id);
    setQuantity(1);
    setAdded(false);
  }

  // Handle Escape key and safe scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      lockBodyScroll();
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (product) {
        unlockBodyScroll();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const name = language === 'mr' ? product.nameMr : product.nameEn;
  const secondaryName = language === 'mr' ? product.nameEn : product.nameMr;
  const description = language === 'mr' ? product.descriptionMr : product.descriptionEn;
  const packSize = language === 'mr' ? product.packageSizeMr : product.packageSize;
  const ingredients = language === 'mr' ? product.ingredientsMr : product.ingredientsEn;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const handleWhatsAppDirect = () => {
    const msg = language === 'mr'
      ? `नमस्कार कोकण रूट्स, मला "${name}" (${packSize}) x ${quantity} बद्दल थेट चौकशी करायची आहे.`
      : `Hello Kokan Roots, I would like to enquire about: ${name} (${packSize}) x ${quantity}.`;
    const url = getWhatsAppUrl(msg);
    if (url) {
      window.open(url, '_blank');
    } else {
      alert(`WhatsApp enquiry prepared for:\n${msg}`);
    }
  };

  const theme = getCategoryTheme(product.categoryId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog Content */}
      <div 
        className="relative bg-[#FCFAF5] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200"
        style={{ borderColor: theme.accentBorder, borderWidth: 1, borderStyle: 'solid' }}
      >
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.closeModal}
          className="absolute top-4 right-4 z-20 p-2 text-[#282824] hover:text-[#244D3A] bg-[#F8F4EA]/80 backdrop-blur-xs hover:bg-[#F8F4EA] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Image Area with Category Tinted Background */}
          <div 
            className="relative aspect-square md:aspect-auto h-52 sm:h-64 md:h-full overflow-hidden flex items-center justify-center p-4 transition-colors"
            style={{ backgroundColor: theme.containerBg }}
          >
            <img
              src={product.image}
              alt={name}
              className="w-full h-full object-contain"
            />
            {product.origin && (
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#A8BEA3]" />
                <span>{product.origin}</span>
              </div>
            )}
          </div>

          {/* Right: Product Info & Actions */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: theme.bgTint, color: theme.badgeBg }}
                >
                  {packSize}
                </span>
                {product.badgeEn && (
                  <span 
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}
                  >
                    {language === 'mr' ? product.badgeMr : product.badgeEn}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#244D3A] leading-tight">
                {name}
              </h2>
              <p className="text-xs text-[#6B4633] italic mt-0.5">
                {secondaryName}
              </p>

              {/* Price */}
              <div 
                className="mt-4 pb-4 border-b"
                style={{ borderColor: theme.accentBorder }}
              >
                {product.price !== null ? (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-[#595852]">₹</span>
                    <span className="text-3xl font-bold text-[#244D3A]">
                      {product.price}
                    </span>
                    <span className="text-xs text-[#595852] ml-1">
                      / {packSize}
                    </span>
                  </div>
                ) : (
                  <div 
                    className="inline-block text-xs font-bold px-3 py-1.5 rounded-md"
                    style={{ backgroundColor: theme.bgTint, color: theme.badgeBg }}
                  >
                    {t.priceOnRequest}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-[#595852] leading-relaxed">
                {description}
              </p>

              {/* Key Ingredients */}
              {ingredients && (
                <div 
                  className="mt-4 p-3 rounded-xl border"
                  style={{ backgroundColor: theme.bgTint, borderColor: theme.accentBorder }}
                >
                  <span 
                    className="text-[11px] font-bold uppercase tracking-wider block mb-1"
                    style={{ color: theme.accentChip }}
                  >
                    {t.ingredients}
                  </span>
                  <p className="text-xs text-[#282824]">
                    {ingredients}
                  </p>
                </div>
              )}
            </div>

            {/* Stepper & Action Buttons */}
            <div className="mt-6 pt-5 border-t border-[#EDE5D2] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6B4633]">
                  {t.quantity}:
                </span>
                <div className="flex items-center bg-[#EDE5D2] rounded-full p-1 border border-[#A8BEA3]/40">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-7 h-7 rounded-full bg-[#FCFAF5] flex items-center justify-center text-[#244D3A] hover:bg-white shadow-xs cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-9 text-center font-bold text-sm text-[#244D3A]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="w-7 h-7 rounded-full bg-[#FCFAF5] flex items-center justify-center text-[#244D3A] hover:bg-white shadow-xs cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`w-full py-3 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer ${
                    added
                      ? 'bg-[#244D3A] text-white'
                      : 'bg-[#244D3A] hover:bg-[#1A392B] text-[#F8F4EA]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{t.addedToCart}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.addToCart}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] border border-[#25D366]/40 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{t.enquireProduct}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
