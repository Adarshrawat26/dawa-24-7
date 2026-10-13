"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/utils";
import { PrescriptionBadge } from "./PrescriptionBadge";
import { Plus, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useCart();
  const cartItem = items.find((i) => i.product.id === product.id);
  const isInCart = Boolean(cartItem);

  return (
    <div className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover"
          />
        </div>
        <h3 className="mt-3 text-sm font-medium text-slate-900 line-clamp-2 leading-snug group-hover:underline underline-offset-4">
          {product.name}
        </h3>
      </Link>
      <p className="mt-0.5 text-xs text-slate-500">{product.unit}</p>

      <div className="mt-2">
        <PrescriptionBadge isRequired={product.isPrescriptionRequired} size="sm" />
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-semibold text-slate-900 tabular-nums">{formatINR(product.price)}</span>
          {product.mrp > product.price && (
            <span className="text-xs text-slate-400 line-through">{formatINR(product.mrp)}</span>
          )}
        </div>

        <button
          onClick={() => addItem(product, 1)}
          className={`h-10 px-3.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
            isInCart
              ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
              : "bg-[#087443] text-white hover:bg-[#05502E]"
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {isInCart ? (
            <>
              <Check className="w-4 h-4" />
              {cartItem?.quantity}
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Add
            </>
          )}
        </button>
      </div>
    </div>
  );
}
