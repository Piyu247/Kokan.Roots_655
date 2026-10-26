import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import type { Language } from '../types';
import { translations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone || !formMessage) {
      alert(t.formError);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormMessage('');
    }, 3000);
  };

  const handleWhatsAppQuick = () => {
    const text = language === 'mr'
      ? `नमस्कार कोकण रूट्स, मला आपल्या अस्सल कोकणी उत्पादनांबद्दल माहिती हवी आहे.`
      : `Hello Kokan Roots, I would like to know more about your regional products.`;
    const url = getWhatsAppUrl(text);
    if (url) {
      window.open(url, '_blank');
    } else {
      alert(`WhatsApp enquiry prepared for:\n${text}`);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F4EA] border-t border-[#EDE5D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFE9D9] text-[#244D3A] text-xs font-semibold tracking-wide border border-[#A8BEA3]/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#244D3A]" />
            <span>{t.contactBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#244D3A] tracking-tight">
            {language === 'mr' ? (
              <span className="font-['Rozha_One']">{t.contactHeading}</span>
            ) : (
              t.contactHeading
            )}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#595852]">
            {t.contactSubheading}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Store Details & Fast WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-[#FCFAF5] rounded-3xl p-6 sm:p-8 border border-[#EDE5D2] shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6B4633] uppercase tracking-wider">
                    {t.addressLabel}
                  </h4>
                  <p className="text-sm font-medium text-[#244D3A] mt-1 leading-snug">
                    {language === 'mr' ? siteConfig.addressPlaceholderMr : siteConfig.addressPlaceholder}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6B4633] uppercase tracking-wider">
                    {t.hoursLabel}
                  </h4>
                  <p className="text-sm font-medium text-[#244D3A] mt-1">
                    {language === 'mr' ? siteConfig.hoursPlaceholderMr : siteConfig.hoursPlaceholder}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6B4633] uppercase tracking-wider">
                    {t.phoneLabel}
                  </h4>
                  <a
                    href="tel:+919082330655"
                    className="text-sm font-medium text-[#244D3A] hover:underline mt-1 block"
                  >
                    {siteConfig.phonePlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6B4633] uppercase tracking-wider">
                    {t.emailLabel}
                  </h4>
                  <a
                    href={`mailto:${siteConfig.emailPlaceholder}`}
                    className="text-sm font-medium text-[#244D3A] hover:underline mt-1 block"
                  >
                    {siteConfig.emailPlaceholder}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#DFE9D9] text-[#244D3A] flex items-center justify-center shrink-0">
                  {/* Instagram icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#6B4633] uppercase tracking-wider">
                    Instagram
                  </h4>
                  <a
                    href={`https://www.instagram.com/${siteConfig.instagramHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#244D3A] hover:underline mt-1 block"
                  >
                    @{siteConfig.instagramHandle}
                  </a>
                </div>
              </div>

            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="bg-[#244D3A] text-[#F8F4EA] rounded-3xl p-6 sm:p-7 border border-[#A8BEA3]/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-lg text-white">
                  {language === 'mr' ? 'थेट व्हॉट्सॲप चौकशी' : 'Quick WhatsApp Chat'}
                </h4>
                <p className="text-xs text-[#DFE9D9] mt-0.5">
                  {language === 'mr' ? 'जलद प्रतिसाद व उत्पादनांची माहिती' : 'Instant help with products & gifting'}
                </p>
              </div>

              <button
                onClick={handleWhatsAppQuick}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappLabel}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FCFAF5] rounded-3xl p-7 sm:p-10 border border-[#EDE5D2] shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-[#244D3A] mb-2">
              {language === 'mr' ? 'आम्हाला संदेश पाठवा' : 'Send an Enquiry'}
            </h3>
            <p className="text-xs sm:text-sm text-[#595852] mb-6">
              {language === 'mr'
                ? 'उत्पादने, ऑर्डर किंवा कोणत्याही शंकेसाठी खालील फॉर्म भरा.'
                : 'Fill out this simple form and our team will get in touch with you.'}
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-green-50 rounded-2xl border border-green-200 text-[#244D3A] space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="text-lg font-bold">
                  {language === 'mr' ? 'संदेश पाठवला गेला आहे!' : 'Message Sent!'}
                </h4>
                <p className="text-xs sm:text-sm text-green-800">
                  {t.formSuccess}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#244D3A] mb-1">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Aniket Deshmukh"
                      className="w-full px-4 py-2.5 bg-white border border-[#EDE5D2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#244D3A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#244D3A] mb-1">
                      {t.formPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g. +91 98XXX XXXXX"
                      className="w-full px-4 py-2.5 bg-white border border-[#EDE5D2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#244D3A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#244D3A] mb-1">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. aniket@example.com"
                    className="w-full px-4 py-2.5 bg-white border border-[#EDE5D2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#244D3A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#244D3A] mb-1">
                    {t.formMessage} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder={
                      language === 'mr'
                        ? 'आपला संदेश, उत्पादनाची चौकशी किंवा प्रश्न येथे लिहा...'
                        : 'Write your message, product query or questions here...'
                    }
                    className="w-full px-4 py-3 bg-white border border-[#EDE5D2] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#244D3A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#244D3A] hover:bg-[#1A392B] text-white font-bold text-xs sm:text-sm rounded-full shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.formSubmit}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
