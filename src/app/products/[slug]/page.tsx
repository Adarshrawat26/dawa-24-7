import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SAMPLE_PRODUCTS } from "@/data/products";
import { siteConfig } from "@/config/site";
import { ProductDetailClient } from "./ProductDetailClient";

export const instant = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = SAMPLE_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${siteConfig.brandName}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - Lucknow Medicine Delivery`,
      description: product.shortDescription,
    },
  };
}

export function generateStaticParams() {
  return SAMPLE_PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = SAMPLE_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = SAMPLE_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
