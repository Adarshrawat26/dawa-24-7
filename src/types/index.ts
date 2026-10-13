export type ProductCategory =
  | 'medicines'
  | 'first-aid'
  | 'personal-care'
  | 'wellness'
  | 'medical-supplies';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  mrp: number;
  image: string;
  isPrescriptionRequired: boolean;
  inStock: boolean;
  unit: string;
  shortDescription: string;
  fullDescription: string;
  usageNotes?: string;
  safetyDisclaimer?: string;
  prescriptionNotice?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerCheckoutDetails {
  fullName: string;
  phone: string;
  addressLine: string;
  locality: string;
  pinCode: string;
  landmark?: string;
  deliveryNotes?: string;
  prescriptionAgreed?: boolean;
}

export interface LocalityCoverage {
  id: string;
  name: string;
  pinCode: string;
  status: 'serviceable_enquiry' | 'unconfirmed_contact_us';
  zone: string;
  note: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  locality: string;
  rating: number;
  reviewText: string;
  isDemoContent: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CategoryInfo {
  slug: ProductCategory;
  name: string;
  shortDescription: string;
  image: string;
  badgeText: string;
}
