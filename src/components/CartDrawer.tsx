import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import type { CartItem, Language } from '../types';
import { translations } from '../data/translations';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  language: Language;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onProceedToEnquiry: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  language,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToEnquiry
}) => {
  const t = translations[language];

  // Prevent background scrolling while maintaining exact scroll position
  useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
    }
    return () => {
      if (isOpen) {
        unlockBodyScroll();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate Subtotal for products with numerical price
  const subtotal = items.reduce((acc, item) => {
    if (item.product.price !== null) {
      return acc + item.product.price * item.quantity;
    }
    return acc;
  }, 0);

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-sm sm:max-w-md bg-[#FCFAF5] shadow-2xl flex flex-col border-l border-[#EDE5D2] animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-6 bg-[#F8F4EA] border-b border-[#EDE5D2] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#244D3A]" />
              <h2 className="text-lg font-serif font-bold text-[#244D3A]">
                {t.cartTitle}
              </h2>
              <span className="bg-[#DFE9D9] text-[#244D3A] text-xs font-bold px-2.5 py-0.5 rounded-full">
                {totalCount}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 text-[#595852] hover:text-[#244D3A] rounded-full hover:bg-[#EDE5D2] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#DFE9D9] flex items-center justify-center text-[#244D3A] mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#244D3A]">
                  {t.cartEmptyTitle}
                </h3>
                <p className="mt-1 text-xs text-[#595852] max-w-xs">
                  {t.cartEmptyDesc}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-[#244D3A] hover:bg-[#1A392B] text-white text-xs font-semibold rounded-full shadow-sm transition-colors cursor-pointer"
                >
                  {t.cartEmptyCta}
                </button>
              </div>
            ) : (
              items.map((item) => {
                const name = language === 'mr' ? item.product.nameMr : item.product.nameEn;
                const packSize = language === 'mr' ? item.product.packageSizeMr : item.product.packageSize;

                return (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#EDE5D2] shadow-xs hover:border-[#A8BEA3]/60 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#EDE5D2]/70 shrink-0 flex items-center justify-center p-1">
                      <img
                        src={item.product.image}
                        alt={name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#244D3A] line-clamp-1">
                            {name}
                          </h4>
                          <span className="text-[11px] text-[#6B4633] font-medium">
                            {packSize}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          aria-label="Remove item"
                          className="text-[#595852] hover:text-[#B96551] p-1 cursor-pointer transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity Stepper & Price */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F8F4EA]">
                        <div className="flex items-center bg-[#F8F4EA] rounded-full p-0.5 border border-[#EDE5D2]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#244D3A] hover:bg-[#EDE5D2] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center font-bold text-xs text-[#244D3A]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#244D3A] hover:bg-[#EDE5D2] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          {item.product.price !== null ? (
                            <span className="text-sm font-bold text-[#244D3A]">
                              ₹{item.product.price * item.quantity}
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold text-[#B96551]">
                              {t.priceOnRequest}
                            </span>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer actions & Checkout */}
          {items.length > 0 && (
            <div
              className="p-4 sm:p-6 bg-[#F8F4EA] border-t border-[#EDE5D2] space-y-4"
              style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
            >
              
              {/* Estimated Subtotal */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#595852]">
                  {t.subtotal}
                </span>
                <span className="text-xl font-bold text-[#244D3A]">
                  ₹{subtotal}
                </span>
              </div>

              {/* Promo note */}
              <div className="p-2.5 rounded-xl bg-[#DFE9D9]/70 text-[#244D3A] text-[11px] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#244D3A] shrink-0" />
                <span>{t.cartNotice}</span>
              </div>

              {/* Primary Enquiry Button */}
              <button
                type="button"
                onClick={onProceedToEnquiry}
                className="w-full py-3.5 bg-[#244D3A] hover:bg-[#1A392B] text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#A8BEA3]" />
                <span>{t.proceedToEnquiry}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Buttons */}
              <div className="flex items-center justify-between pt-1 text-xs">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-[#595852] hover:text-[#B96551] underline transition-colors cursor-pointer"
                >
                  {t.clearCart}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-[#244D3A] font-semibold hover:underline cursor-pointer"
                >
                  {t.continueShopping}
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
