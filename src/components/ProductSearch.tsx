"use client";

import React from "react";
import { ProductCategory } from "@/types";
import { Search, X, SlidersHorizontal } from "lucide-react";

interface ProductSearchProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCategory: ProductCategory | "all";
  onCategoryChange: (cat: ProductCategory | "all") => void;
  sortBy: "featured" | "price-asc" | "price-desc" | "name-asc";
  onSortChange: (sort: "featured" | "price-asc" | "price-desc" | "name-asc") => void;
  filterRx: "all" | "otc" | "rx";
  onFilterRxChange: (filter: "all" | "otc" | "rx") => void;
  totalResults: number;
}

const CATEGORIES_LIST: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All Items" },
  { id: "medicines", label: "Medicines" },
  { id: "first-aid", label: "Health Kits" },
  { id: "personal-care", label: "Personal Care" },
  { id: "wellness", label: "Wellness" },
  { id: "medical-supplies", label: "Medical Supplies" },
];

export function ProductSearch({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  filterRx,
  onFilterRxChange,
  totalResults,
}: ProductSearchProps) {
  const hasActiveFilters =
    Boolean(searchQuery) || selectedCategory !== "all" || filterRx !== "all";

  const clearAll = () => {
    onSearchChange("");
    onCategoryChange("all");
    onFilterRxChange("all");
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-100/80 shadow-xs mb-8 space-y-5">
      {/* Search Bar + Sort Row */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search medicines, health kits, wellness supplies..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                onSortChange(
                  e.target.value as "featured" | "price-asc" | "price-desc" | "name-asc"
                )
              }
              className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold py-3 pl-4 pr-9 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#20C765]/30 cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Categories Horizontal Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES_LIST.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-[#087443] text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-[#E4F9EB] hover:text-[#087443]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Secondary filter & active summary */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium">Type:</span>
          <button
            onClick={() => onFilterRxChange("all")}
            className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
              filterRx === "all"
                ? "bg-slate-800 text-white"
                : "text-slate-500 hover:bg-slate-100"
            }`}
          >
            All Types
          </button>
          <button
            onClick={() => onFilterRxChange("otc")}
            className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
              filterRx === "otc"
                ? "bg-emerald-700 text-white"
                : "text-slate-500 hover:bg-emerald-50"
            }`}
          >
            OTC Only
          </button>
          <button
            onClick={() => onFilterRxChange("rx")}
            className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
              filterRx === "rx"
                ? "bg-amber-700 text-white"
                : "text-slate-500 hover:bg-amber-50"
            }`}
          >
            Prescription Only
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{totalResults}</strong> items
          </span>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="text-xs font-medium text-rose-600 hover:text-rose-700 flex items-center gap-1 hover:underline"
            >
              <X className="w-3.5 h-3.5" />
              Reset filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
