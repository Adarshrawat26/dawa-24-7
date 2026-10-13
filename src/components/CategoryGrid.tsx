import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-20 bg-[#f7fdf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-bold uppercase tracking-wider mb-2">
              Browse by Category
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Essential Healthcare Categories
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-xl">
              From daily prescription drugs and emergency kits to wellness supplements and personal hygiene products.
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-[#087443] hover:text-[#05502E] inline-flex items-center gap-1.5 shrink-0 hover:underline"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              className="group brand-card flex flex-col justify-between overflow-hidden bg-white p-4 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-4 bg-[#E4F9EB]/60 border border-[#CBF3D8]/50">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#087443] text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
                    {cat.badgeText}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#087443] transition-colors mb-1.5">
                  {cat.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                  {cat.shortDescription}
                </p>
              </div>

              {/* Link */}
              <Link
                href={`/categories/${cat.slug}`}
                className="inline-flex items-center justify-between w-full py-2 px-3 rounded-xl bg-slate-50 group-hover:bg-[#E4F9EB] text-xs font-semibold text-slate-700 group-hover:text-[#087443] transition-colors"
              >
                <span>Explore Category</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
