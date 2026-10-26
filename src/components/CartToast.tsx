import React from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';
import type { Language } from '../types';

interface CartToastProps {
  message: string;
  subMessage?: string;
  language: Language;
  onOpenCart: () => void;
  onDismiss: () => void;
}

export const CartToast: React.FC<CartToastProps> = ({
  message,
  subMessage,
  language,
  onOpenCart,
  onDismiss
}) => {
  return (
    <aside
      aria-live="polite"
      aria-label="Cart Notification"
      className="fixed top-14 sm:top-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm sm:max-w-md pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-300"
    >
      <div className="bg-[#244D3A] text-[#F8F4EA] border border-[#A8BEA3]/50 shadow-2xl rounded-2xl p-3 sm:px-4 sm:py-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#244D3A]" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-bold text-white truncate">
              {message}
            </p>
            {subMessage && (
              <p className="text-[11px] text-[#DFE9D9]/80 truncate">
                {subMessage}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            className="px-3 py-1.5 rounded-full bg-[#DFE9D9] text-[#244D3A] hover:bg-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{language === 'mr' ? 'बॅग पहा' : 'View Cart'}</span>
          </button>
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Close notification"
            className="p-1 text-[#DFE9D9]/70 hover:text-white rounded-full transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
