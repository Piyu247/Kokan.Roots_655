export type Language = 'en' | 'mr';

export interface Product {
  id: string;
  categoryId: string;
  nameEn: string;
  nameMr: string;
  descriptionEn: string;
  descriptionMr: string;
  price: number | null; // null represents "Price on request"
  packageSize: string;
  packageSizeMr: string;
  image: string;
  badgeEn?: string;
  badgeMr?: string;
  isPopular?: boolean;
  isSugarFree?: boolean;
  ingredientsEn?: string;
  ingredientsMr?: string;
  origin?: string;
}

export interface Category {
  id: string;
  nameEn: string;
  nameMr: string;
  descriptionEn: string;
  descriptionMr: string;
  image: string;
  itemCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SiteConfig {
  brandName: string;
  brandNameMr: string;
  tagline: string;
  taglineEn: string;
  phonePlaceholder: string;
  whatsappNumber: string; // editable phone for WhatsApp API
  instagramHandle: string;
  emailPlaceholder: string;
  addressPlaceholder: string;
  addressPlaceholderMr: string;
  hoursPlaceholder: string;
  hoursPlaceholderMr: string;
  announcementEn: string;
  announcementMr: string;
}
