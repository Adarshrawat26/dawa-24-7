"use client";

import React, { useState, useMemo } from "react";
import { SAMPLE_PRODUCTS } from "@/data/products";
import { ProductCategory } from "@/types";
import { ProductSearch } from "@/components/ProductSearch";
import { ProductGrid } from "@/components/ProductGrid";
import { ShieldCheck, Info } from "lucide-react";

interface ProductsClientProps {
  initialCategory?: ProductCategory | "all";
}

export function ProductsClient({ initialCategory = "all" }: ProductsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">(initialCategory);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "name-asc">("featured");
  const [filterRx, setFilterRx] = useState<"all" | "otc" | "rx">("all");

  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((prod) => {
      // Category filter
      if (selectedCategory !== "all" && prod.category !== selectedCategory) {
        return false;
      }
      // Rx Filter
      if (filterRx === "otc" && prod.isPrescriptionRequired) return false;
      if (filterRx === "rx" && !prod.isPrescriptionRequired) return false;

      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = prod.name.toLowerCase().includes(q);
        const matchBrand = prod.brand.toLowerCase().includes(q);
        const matchDesc = prod.shortDescription.toLowerCase().includes(q);
        return matchName || matchBrand || matchDesc;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return 0; // featured default
    });
  }, [searchQuery, selectedCategory, filterRx, sortBy]);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Product Catalogue
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Medicines & Healthcare Essentials
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Browse sample healthcare essentials, over-the-counter wellness products, and prescription-aware medicine enquiries for Lucknow.
          </p>
        </div>

        {/* Development Data Disclaimer */}
        <div className="mb-8 p-4 rounded-2xl bg-emerald-50/70 border border-slate-200 flex items-start gap-3 text-xs text-emerald-950">
          <Info className="w-4 h-4 text-[#087443] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Development Notice:</strong> This catalogue is a demonstration dataset for testing the user experience. It does not represent confirmed live stock. Prescription medicines require a valid prescription and applicable licensed-pharmacy review before any fulfilment.
          </p>
        </div>

        {/* Search, Filter & Sort Controls */}
        <ProductSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          filterRx={filterRx}
          onFilterRxChange={setFilterRx}
          totalResults={filteredProducts.length}
        />

        {/* Products Grid */}
        <ProductGrid
          products={filteredProducts}
          emptyMessage="No medicines or healthcare essentials found matching your search. Try adjusting filters or contact us on WhatsApp."
        />
      </div>
    </div>
  );
}
