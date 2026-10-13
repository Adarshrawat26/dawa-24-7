import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/data/products";

export function CategoryGrid() {
  return (
    <section className="py-12 sm:py-16 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-title mb-6">Shop by category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <h3 className="mt-2.5 text-sm font-medium text-slate-900 group-hover:underline underline-offset-4">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
