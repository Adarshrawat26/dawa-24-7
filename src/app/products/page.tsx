import { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "All Products & Medicines Catalogue",
  description: `Browse healthcare essentials, medicines, health kits, and personal care products for delivery in Lucknow with ${siteConfig.brandName}.`,
};

export default function ProductsPage() {
  return <ProductsClient />;
}
