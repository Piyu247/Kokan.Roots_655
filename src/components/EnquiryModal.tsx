import React, { useState } from 'react';
import { X, Send, Copy, Check, AlertCircle, ShoppingBag, MessageSquare } from 'lucide-react';
import type { CartItem, Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { lockBodyScroll, unlockBodyScroll } from '../utils/scrollLock';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  language: Language;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  items,
  language
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const t = translations[language];

  // Prevent background scrolling while preserving exact position
  React.useEffect(() => {
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

  const totalCalculated = items.reduce((acc, item) => {
    return acc + (item.product.price ? item.product.price * item.quantity : 0);
  }, 0);

  // Generate clean, readable WhatsApp Order Message
  const generateMessageText = () => {
    let msg = `🌿 *Kokan Roots Product Enquiry*\n`;
    msg += `---------------------------------\n`;
    msg += `👤 *Customer:* ${customerName || '[Name]'}\n`;
    msg += `📞 *Phone:* ${phone || '[Phone]'}\n`;
    if (city) msg += `📍 *City / Area:* ${city}\n`;
    if (notes) msg += `📝 *Notes:* ${notes}\n`;
    msg += `---------------------------------\n`;
    msg += `*Selected Items:*\n`;

    items.forEach((item, index) => {
      const name = language === 'mr' ? item.product.nameMr : item.product.nameEn;
      const pack = language === 'mr' ? item.product.packageSizeMr : item.product.packageSize;
      const priceText = item.product.price !== null ? `₹${item.product.price * item.quantity}` : 'Price on request';
      msg += `${index + 1}. ${name} (${pack}) x ${item.quantity} = ${priceText}\n`;
    });

    msg += `---------------------------------\n`;
    msg += `*Estimated Subtotal:* ₹${totalCalculated}\n`;
    msg += `Order enquiry sent via Kokan Roots website`;

    return msg;
  };

  const formattedMessage = generateMessageText();

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) {
      alert(t.formError);
      return;
    }

    setSubmitted(true);

    const waUrl = getWhatsAppUrl(formattedMessage);
    if (waUrl) {
      window.open(waUrl, '_blank');
    }
  };

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

      <div className="relative bg-[#FCFAF5] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EDE5D2] z-10 animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#F8F4EA] border-b border-[#EDE5D2] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-5 h-5 text-[#244D3A]" />
            <div>
              <h2 className="text-lg font-serif font-bold text-[#244D3A]">
                {t.enquiryTitle}
              </h2>
              <p className="text-xs text-[#595852]">
                {t.enquirySubheading}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 text-[#595852] hover:text-[#244D3A] rounded-full hover:bg-[#EDE5D2] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Order Summary Box */}
          <div className="bg-[#EDE5D2]/40 rounded-2xl p-4 border border-[#EDE5D2]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#244D3A] flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-[#B96551]" />
                {t.orderSummary} ({items.length})
              </span>
              <span className="text-xs font-bold text-[#244D3A]">
                {t.subtotal}: ₹{totalCalculated}
              </span>
            </div>

            <div className="space-y-1.5 divide-y divide-[#EDE5D2]/60 max-h-36 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.product.id} className="pt-1.5 flex items-center justify-between text-xs">
                  <span className="text-[#282824] truncate mr-2">
                    {language === 'mr' ? item.product.nameMr : item.product.nameEn}
                    <span className="text-[#6B4633] ml-1">x {item.quantity}</span>
                  </span>
                  <span className="font-semibold text-[#244D3A] shrink-0">
                    {item.product.price ? `₹${item.product.price * item.quantity}` : t.priceOnRequest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Details Form */}
          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#244D3A] mb-1">
                  {t.customerName} *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rahul Patil"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EDE5D2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#244D3A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#244D3A] mb-1">
                  {t.customerPhone} *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98200 XXXXX"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EDE5D2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#244D3A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#244D3A] mb-1">
                {t.deliveryCity} (Optional)
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Mumbai, Pune, Thane, Alibaug"
                className="w-full px-3.5 py-2.5 bg-white border border-[#EDE5D2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#244D3A]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#244D3A] mb-1">
                {t.notesLabel}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special packing request or question..."
                className="w-full px-3.5 py-2 bg-white border border-[#EDE5D2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#244D3A] resize-none"
              />
            </div>

            {/* Generated WhatsApp Message Preview */}
            <div className="bg-[#244D3A]/5 border border-[#244D3A]/20 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-[#244D3A] uppercase tracking-wider">
                  WhatsApp Enquiry Preview
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-xs text-[#244D3A] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t.copiedText : t.copySummaryBtn}</span>
                </button>
              </div>
              <pre className="text-[11px] text-[#282824] bg-white p-3 rounded-xl border border-[#EDE5D2] font-mono whitespace-pre-wrap max-h-32 overflow-y-auto">
                {formattedMessage}
              </pre>
            </div>

            {/* Demo Notice if WhatsApp number not yet supplied */}
            {!siteConfig.whatsappNumber && (
              <div className="p-3 bg-[#DFE9D9]/80 border border-[#A8BEA3] rounded-xl text-xs text-[#244D3A] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#244D3A] shrink-0 mt-0.5" />
                <p>{t.demoEnquiryNotice}</p>
              </div>
            )}

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{t.submitEnquiry}</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="px-6 py-3.5 bg-[#EDE5D2] hover:bg-[#EDE5D2]/80 text-[#244D3A] font-semibold text-xs sm:text-sm rounded-full cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? t.copiedText : t.copySummaryBtn}</span>
              </button>
            </div>

            {submitted && !siteConfig.whatsappNumber && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-2xl text-xs text-green-900 mt-2">
                <p className="font-bold">{t.enquirySuccessTitle}</p>
                <p className="mt-1">{t.enquirySuccessMessage}</p>
              </div>
            )}

          </form>

        </div>

      </div>
    </div>
  );
};
