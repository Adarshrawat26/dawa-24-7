"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { CategoryInfo, Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { Search, ChevronRight, SlidersHorizontal, X } from "lucide-react";

interface CategoryPageClientProps {
  category: CategoryInfo;
  products: Product[];
}

export function CategoryPageClient({ category, products }: CategoryPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "name-asc">("featured");
  const [filterRx, setFilterRx] = useState<"all" | "otc" | "rx">("all");

  const filtered = useMemo(() => {
    return products
      .filter((p) => {
        if (filterRx === "otc" && p.isPrescriptionRequired) return false;
        if (filterRx === "rx" && !p.isPrescriptionRequired) return false;

        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          return (
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.shortDescription.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        return 0;
      });
  }, [products, searchQuery, filterRx, sortBy]);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-slate-500 mb-6"
        >
          <Link href="/" className="hover:text-[#087443]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products" className="hover:text-[#087443]">
            Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{category.name}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="bg-[#E4F9EB]/60 border border-[#CBF3D8] rounded-2xl p-6 sm:p-10 mb-10 overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="inline-block text-xs font-semibold text-[#087443] bg-white px-3 py-1 rounded-full border border-[#CBF3D8]">
                {category.badgeText}
              </span>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                {category.name} in Lucknow
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {category.shortDescription}
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Filter / Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 mb-8 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative flex-1 w-full sm:w-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search within ${category.name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setFilterRx("all")}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                  filterRx === "all"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterRx("otc")}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                  filterRx === "otc"
                    ? "bg-emerald-700 text-white"
                    : "text-slate-600 hover:bg-emerald-50"
                }`}
              >
                OTC
              </button>
              <button
                onClick={() => setFilterRx("rx")}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                  filterRx === "rx"
                    ? "bg-amber-700 text-white"
                    : "text-slate-600 hover:bg-amber-50"
                }`}
              >
                Rx
              </button>
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "featured" | "price-asc" | "price-desc" | "name-asc"
                  )
                }
                className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold py-2 pl-3 pr-8 rounded-xl focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="name-asc">Name A-Z</option>
              </select>
              <SlidersHorizontal className="w-3 h-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-slate-300">
            <h3 className="font-semibold text-slate-800 text-base mb-1">
              No products found in this category
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Try adjusting your search terms or view our complete catalogue.
            </p>
            <Link href="/products" className="btn-primary text-xs py-2 px-4">
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
