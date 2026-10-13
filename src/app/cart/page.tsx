import { Metadata } from "next";
import { CartPageClient } from "./CartPageClient";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Shopping Cart & WhatsApp Checkout",
  description: `Review your healthcare items and continue your order enquiry on WhatsApp with ${siteConfig.brandName}.`,
};

export default function CartPage() {
  return <CartPageClient />;
}
