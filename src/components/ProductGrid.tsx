"use client";

import React from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { PackageOpen } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export function ProductGrid({
  products,
  emptyMessage = "No medicines or healthcare essentials found matching your criteria.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-slate-300 max-w-xl mx-auto my-8">
        <div className="w-14 h-14 rounded-full bg-[#E4F9EB] text-[#087443] flex items-center justify-center mx-auto mb-4">
          <PackageOpen className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">No Matching Products</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          {emptyMessage}
        </p>
        <p className="text-xs text-slate-400">
          Try adjusting your search terms or filter selection. You can also contact us on WhatsApp to enquire about specific Lucknow pharmacy availability.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
