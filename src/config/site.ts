/**
 * Central Configuration for Dawa Lucknow
 * All brand naming, WhatsApp routing, contact information,
 * and operational disclaimers are managed here.
 */

export const siteConfig = {
  // Brand Identity
  brandName: "Dawa Lucknow",
  shortBrandName: "Dawa",
  city: "Lucknow",
  state: "Uttar Pradesh",
  country: "India",
  copyrightYear: "2026",
  tagline: "Medicines Delivered to Your Doorstep in Lucknow",
  description:
    "Order medicines and everyday healthcare essentials from the comfort of your home in Lucknow. Simple WhatsApp ordering, prescription-aware assistance, and local delivery.",
  url: "https://dawalucknow.example.in",

  // WhatsApp Configuration
  // Default to standard placeholder; replace via NEXT_PUBLIC_WHATSAPP_NUMBER or directly here.
  whatsAppNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX",
  whatsAppDefaultPlaceholder: "91XXXXXXXXXX",

  // Contact & Support Placeholders (Editable for verified business credentials)
  supportEmail: "support-email@example.com",
  supportPhoneDisplay: "+91 (Enquiry via WhatsApp)",
  supportHours: "8:00 AM – 10:00 PM IST, Monday to Sunday",
  officeAddress:
    "Verified business address pending. Replace this placeholder before launch.",
  pharmacyLicenceNumber:
    "Pharmacy licence details pending. Add verified licensed supplier information before launch.",
  fssaiNumber: "FSSAI details pending, if applicable.",

  // Navigation Links
  navLinks: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Footer Navigation
  footerCategories: [
    { label: "Prescription Medicines", href: "/categories/medicines" },
    { label: "First Aid & Health Kits", href: "/categories/first-aid" },
    { label: "Personal Care & Hygiene", href: "/categories/personal-care" },
    { label: "Daily Wellness & Vitamins", href: "/categories/wellness" },
    { label: "Home Medical Supplies", href: "/categories/medical-supplies" },
  ],

  footerSupport: [
    { label: "Order on WhatsApp", href: "/cart" },
    { label: "Delivery Locality Checker", href: "/#delivery-coverage" },
    { label: "Prescription Guidelines", href: "/about#prescription-policy" },
    { label: "Frequently Asked Questions", href: "/#faqs" },
    { label: "Contact Us", href: "/contact" },
  ],

  footerLegal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Shipping & Delivery Policy", href: "/shipping" },
    { label: "Returns & Refund Policy", href: "/returns" },
  ],

  // Mandatory Regulatory and Prescription Notice
  legalDisclaimer:
    "Dawa Lucknow is a prototype technology facilitation website for residents of Lucknow. Prescription medicine enquiries require verification of a valid registered medical practitioner's prescription and must be fulfilled only through appropriately licensed retail pharmacies under applicable Indian regulations.",
};

/**
 * Checks whether the WhatsApp number has been updated from the placeholder.
 */
export function isWhatsAppConfigured(): boolean {
  const num = siteConfig.whatsAppNumber.replace(/\D/g, "");
  return num.length >= 10 && !siteConfig.whatsAppNumber.includes("X");
}
