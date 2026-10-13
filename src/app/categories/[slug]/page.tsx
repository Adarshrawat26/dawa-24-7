import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, SAMPLE_PRODUCTS } from "@/data/products";
import { siteConfig } from "@/config/site";
import { CategoryPageClient } from "./CategoryPageClient";

export const instant = false;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} in Lucknow | ${siteConfig.brandName}`,
    description: category.shortDescription,
  };
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const products = SAMPLE_PRODUCTS.filter((p) => p.category === category.slug);

  return <CategoryPageClient category={category} products={products} />;
}
