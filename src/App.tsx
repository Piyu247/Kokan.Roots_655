import React, { useState, useEffect, useRef } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { OurStory } from './components/OurStory';
import { SpecialitiesBanner } from './components/SpecialitiesBanner';
import { WhyKokanRoots } from './components/WhyKokanRoots';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomCartBar } from './components/MobileBottomCartBar';
import { CartToast } from './components/CartToast';
import type { Product, CartItem, Language } from './types';

export const App: React.FC = () => {
  // Language State
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('kokan_roots_lang');
    return (saved === 'mr' || saved === 'en') ? saved : 'en';
  });

  // Cart State (Persisted in LocalStorage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kokan_roots_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return [];
  });

  // UI Modals and Navigation States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Toast Notification State
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    subMessage?: string;
  }>({
    visible: false,
    message: ''
  });
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up toast timer on unmount
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const triggerCartToast = (product: Product, quantity = 1) => {
    const productName = language === 'mr' ? product.nameMr : product.nameEn;
    const msg = language === 'mr' ? 'कार्टमध्ये जोडले गेले' : 'Added to cart successfully';
    const sub = `${productName}${quantity > 1 ? ` x ${quantity}` : ''}`;

    setToast({
      visible: true,
      message: msg,
      subMessage: sub
    });

    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 5000);
  };

  // Persist language
  useEffect(() => {
    localStorage.setItem('kokan_roots_lang', language);
  }, [language]);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('kokan_roots_cart', JSON.stringify(cart));
    } catch {
      // Fallback
    }
  }, [cart]);

  // Cart Operations (Safe without scroll jumping)
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    // Show temporary 5s confirmation toast
    triggerCartToast(product, quantity);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Navigates down to #shop when clicked from overview categories
  const handleSelectCategoryFromOverview = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSearch = () => {
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
      const inputEl = shopEl.querySelector('input');
      if (inputEl) inputEl.focus();
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartSubtotal = cart.reduce((acc, item) => {
    return acc + (item.product.price !== null ? item.product.price * item.quantity : 0);
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F4EA] text-[#282824]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar language={language} />

      {/* 2. Sticky Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={handleOpenSearch}
        activeSection=""
      />

      {/* 5-Second Temporary Confirmation Toast */}
      {toast.visible && (
        <CartToast
          message={toast.message}
          subMessage={toast.subMessage}
          language={language}
          onOpenCart={() => {
            setToast((prev) => ({ ...prev, visible: false }));
            setIsCartOpen(true);
          }}
          onDismiss={() => setToast((prev) => ({ ...prev, visible: false }))}
        />
      )}

      {/* Main Page Flow */}
      <main className={`flex-1 ${cart.length > 0 ? 'pb-20 sm:pb-0' : ''}`}>
        {/* 3. Hero Section */}
        <Hero language={language} />

        {/* 4. Shop By Category */}
        <CategoryGrid
          language={language}
          onSelectCategory={handleSelectCategoryFromOverview}
        />

        {/* 5. Featured Products Catalog with Search & Filter */}
        <ProductGrid
          language={language}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onQuickView={(p) => setModalProduct(p)}
        />

        {/* 6. Specialities Campaign Banner */}
        <SpecialitiesBanner
          language={language}
          onExploreSpecialities={() => handleSelectCategoryFromOverview('special-products')}
        />

        {/* 7. Our Konkan Story (Editorial) */}
        <OurStory language={language} />

        {/* 8. Why Kokan Roots */}
        <WhyKokanRoots language={language} />

        {/* 9. Contact & Enquiry */}
        <ContactSection language={language} />
      </main>

      {/* 10. Deep Forest-Green Footer */}
      <Footer
        language={language}
        onSelectCategory={handleSelectCategoryFromOverview}
      />

      {/* Slide-Over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        language={language}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToEnquiry={() => {
          setIsCartOpen(false);
          setIsEnquiryOpen(true);
        }}
      />

      {/* WhatsApp Enquiry Checkout Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        items={cart}
        language={language}
      />

      {/* Product Quick View / Detail Modal */}
      <ProductModal
        product={modalProduct}
        language={language}
        onClose={() => setModalProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Mobile Sticky Bottom Cart Bar */}
      <MobileBottomCartBar
        itemCount={totalCartCount}
        subtotal={cartSubtotal}
        language={language}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Floating Instant WhatsApp Chat CTA */}
      <FloatingWhatsApp
        language={language}
        hasCartItems={cart.length > 0}
      />
    </div>
  );
};

export default App;
