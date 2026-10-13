import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SAMPLE_PRODUCTS } from "@/data/products";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  // Select top 4 featured products for homepage preview
  const featuredProducts = SAMPLE_PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Problem and Solution Section */}
      <ProblemSolution />

      {/* 3. Product Categories */}
      <CategoryGrid />

      {/* 4. Featured Essentials Preview Grid */}
      <section className="py-16 sm:py-20 bg-white border-y border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Essentials
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Popular Healthcare Products
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-2">
                Sample everyday items available for enquiry and local delivery in Lucknow.
              </p>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-[#087443] hover:text-[#05502E] inline-flex items-center gap-1 hover:underline shrink-0"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <FeatureGrid />

      {/* 6. Lucknow Delivery Coverage */}
      <DeliveryChecker />

      {/* 7. Customer Testimonials (Demo Content) */}
      <Testimonials />

      {/* 8. Frequently Asked Questions */}
      <FAQ />

      {/* 9. Final Call-to-Action Section */}
      <CTASection />
    </div>
  );
}
