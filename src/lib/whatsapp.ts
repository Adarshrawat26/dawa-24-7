import { CartItem, CustomerCheckoutDetails, Product } from "@/types";
import { siteConfig, isWhatsAppConfigured } from "@/config/site";
import { formatINR } from "./utils";

/**
 * Builds encoded WhatsApp URL for full cart checkout enquiry.
 */
export function buildCartWhatsAppUrl(
  items: CartItem[],
  customer: CustomerCheckoutDetails,
  subtotal: number
): { url: string; rawText: string; isConfigured: boolean } {
  const configured = isWhatsAppConfigured();
  const phone = siteConfig.whatsAppNumber.replace(/\D/g, "");

  const hasRx = items.some((item) => item.product.isPrescriptionRequired);

  const lines: string[] = [
    `*MEDICINE & HEALTHCARE ORDER ENQUIRY*`,
    `Platform: ${siteConfig.brandName} (${siteConfig.city})`,
    `----------------------------------------`,
    `*Customer Details:*`,
    `• Name: ${customer.fullName}`,
    `• Phone: ${customer.phone}`,
    `• Delivery Address: ${customer.addressLine}`,
    `• Locality: ${customer.locality}`,
    `• PIN Code: ${customer.pinCode}`,
    customer.landmark ? `• Landmark: ${customer.landmark}` : ``,
    customer.deliveryNotes ? `• Notes: ${customer.deliveryNotes}` : ``,
    `----------------------------------------`,
    `*Requested Items:*`,
  ];

  items.forEach((item, index) => {
    const rxTag = item.product.isPrescriptionRequired ? " [Rx Required]" : " [OTC]";
    lines.push(
      `${index + 1}. ${item.product.name}${rxTag}\n   Qty: ${item.quantity} × ${formatINR(
        item.product.price
      )} = ${formatINR(item.product.price * item.quantity)}`
    );
  });

  lines.push(`----------------------------------------`);
  lines.push(`*Estimated Items Subtotal:* ${formatINR(subtotal)}`);
  lines.push(`*(Final delivery charge & tax confirmed upon review)*`);
  lines.push(``);

  if (hasRx) {
    lines.push(
      `*Prescription Notice:* This enquiry contains prescription items. I understand a valid doctor's prescription must be verified before any fulfilment decision.`
    );
    lines.push(``);
  }

  lines.push(
    `*Important Notice:* This is an order availability enquiry, not a confirmed transaction. Availability, prescription requirements, delivery coverage, charges, and any licensed pharmacy fulfilment process must be confirmed before supply.`
  );

  const rawText = lines.filter(Boolean).join("\n");
  const encodedText = encodeURIComponent(rawText);

  // If not configured, provide an indicator url or wa.me with placeholder
  const url = `https://wa.me/${phone}?text=${encodedText}`;

  return { url, rawText, isConfigured: configured };
}

/**
 * Builds WhatsApp URL for single product enquiry.
 */
export function buildProductEnquiryUrl(
  product: Product,
  customerName?: string
): { url: string; rawText: string; isConfigured: boolean } {
  const configured = isWhatsAppConfigured();
  const phone = siteConfig.whatsAppNumber.replace(/\D/g, "");

  const lines = [
    `*PRODUCT AVAILABILITY ENQUIRY*`,
    `Platform: ${siteConfig.brandName} (${siteConfig.city})`,
    `----------------------------------------`,
    `Product: ${product.name}`,
    `Price: ${formatINR(product.price)} (${product.unit})`,
    `Prescription Status: ${product.isPrescriptionRequired ? "Prescription Required (Schedule H/Rx)" : "Over-The-Counter (OTC)"}`,
    customerName ? `Enquired by: ${customerName}` : ``,
    `----------------------------------------`,
    `Hello, I would like to check availability and delivery options for this product in Lucknow.`,
  ];

  const rawText = lines.filter(Boolean).join("\n");
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(rawText)}`;

  return { url, rawText, isConfigured: configured };
}

/**
 * Builds WhatsApp URL for general support enquiry.
 */
export function buildGeneralEnquiryUrl(subject?: string): {
  url: string;
  rawText: string;
  isConfigured: boolean;
} {
  const configured = isWhatsAppConfigured();
  const phone = siteConfig.whatsAppNumber.replace(/\D/g, "");

  const text = `Hello ${siteConfig.brandName}, I have an enquiry regarding ${
    subject || "medicine delivery and healthcare service availability in Lucknow"
  }.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  return { url, rawText: text, isConfigured: configured };
}
