"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/utils";
import { PrescriptionBadge } from "./PrescriptionBadge";
import { Plus, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart();

  const cartItem = items.find((i) => i.product.id === product.id);
  const isInCart = Boolean(cartItem);

  const discountPercent =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  return (
    <div className="group brand-card flex flex-col justify-between overflow-hidden p-4 bg-white transition-all duration-300 hover:-translate-y-1">
      <div>
        {/* Top Badges and Image */}
        <div className="relative w-full aspect-4/3 rounded-2xl bg-[#E4F9EB]/60 overflow-hidden flex items-center justify-center mb-3.5 border border-[#CBF3D8]/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Discount Pill */}
          {discountPercent > 0 && (
            <span className="absolute top-2.5 left-2.5 bg-[#20C765] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              {discountPercent}% OFF
            </span>
          )}

          {/* Rx / OTC Badge */}
          <div className="absolute top-2.5 right-2.5">
            <PrescriptionBadge isRequired={product.isPrescriptionRequired} size="sm" />
          </div>
        </div>

        {/* Brand & Category */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
          <span className="font-medium text-[#087443]">{product.brand}</span>
          <span className="text-slate-400 capitalize">{product.category.replace("-", " ")}</span>
        </div>

        {/* Product Title */}
        <Link href={`/products/${product.slug}`} className="block group-hover:text-[#087443] transition-colors">
          <h3 className="font-semibold text-slate-900 text-sm line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Pack / Unit */}
        <p className="text-xs text-slate-400 mt-1">{product.unit}</p>
      </div>

      {/* Pricing & Add to Cart */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-slate-900">
              {formatINR(product.price)}
            </span>
            {product.mrp > product.price && (
              <span className="text-xs text-slate-400 line-through">
                {formatINR(product.mrp)}
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-400">MRP incl. taxes</span>
        </div>

        <button
          onClick={() => addItem(product, 1)}
          className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 ${
            isInCart
              ? "bg-[#E4F9EB] text-[#087443] border border-[#CBF3D8] hover:bg-[#CBF3D8]"
              : "bg-[#20C765] text-white hover:bg-[#18A953] shadow-xs hover:shadow-md"
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {isInCart ? (
            <>
              <ShoppingBag className="w-3.5 h-3.5 text-[#087443]" />
              <span>In Cart ({cartItem?.quantity})</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
