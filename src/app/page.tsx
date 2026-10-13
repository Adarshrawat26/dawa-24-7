import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SAMPLE_PRODUCTS } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProducts = SAMPLE_PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col">
      <Hero />
      <CategoryGrid />

      <section className="py-12 sm:py-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-6 gap-4">
            <h2 className="section-title">Popular products</h2>
            <Link
              href="/products"
              className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:underline underline-offset-4 shrink-0"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
            {featuredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      <DeliveryChecker />
      <FAQ />
      <CTASection />
    </div>
  );
}
