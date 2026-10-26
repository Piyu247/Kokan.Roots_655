import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import type { Language } from '../types';

interface MobileBottomCartBarProps {
  itemCount: number;
  subtotal: number;
  language: Language;
  onOpenCart: () => void;
}

export const MobileBottomCartBar: React.FC<MobileBottomCartBarProps> = ({
  itemCount,
  subtotal,
  language,
  onOpenCart
}) => {
  if (itemCount <= 0) return null;

  const itemText = language === 'mr'
    ? `${itemCount} ${itemCount === 1 ? 'वस्तू' : 'वस्तू'}`
    : `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;

  const viewText = language === 'mr' ? 'बॅग पहा' : 'View Cart';

  return (
    <aside
      aria-label="Mobile Cart Bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-35 bg-[#244D3A] text-[#F8F4EA] border-t border-[#A8BEA3]/30 shadow-2xl px-4 py-2.5 animate-in slide-in-from-bottom duration-300"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Left: Cart Info & Subtotal */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-9 h-9 rounded-full bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
            <ShoppingBag className="w-4 h-4 text-[#244D3A]" />
            <span className="absolute -top-1 -right-1 bg-[#B96551] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-[11px] font-medium text-[#DFE9D9]/80 truncate">
              {itemText}
            </span>
            {subtotal > 0 ? (
              <span className="text-sm font-bold text-white tracking-tight leading-none">
                ₹{subtotal}
              </span>
            ) : (
              <span className="text-xs font-semibold text-[#DFE9D9] leading-none">
                {language === 'mr' ? 'किंमत चौकशी' : 'Price on request'}
              </span>
            )}
          </div>
        </div>

        {/* Right: View Cart Action */}
        <button
          type="button"
          onClick={onOpenCart}
          className="px-4 py-2 rounded-full bg-[#DFE9D9] hover:bg-white text-[#244D3A] font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
        >
          <span>{viewText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
