"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/utils";
import { X, Trash2, Plus, Minus, ArrowRight, AlertCircle, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    hasPrescriptionItems,
    isCartOpen,
    closeCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#E4F9EB]/40">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E4F9EB] text-[#087443] flex items-center justify-center font-semibold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900">Your Medicine Cart</h2>
                <p className="text-xs text-slate-500">
                  {totalItems} {totalItems === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {hasPrescriptionItems && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Prescription required:</strong> Some items in your enquiry require a doctor&apos;s prescription. You can upload/confirm this during review.
                </p>
              </div>
            )}

            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E4F9EB] text-[#087443] flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-slate-800 text-base mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                  Add medicines, health kits, or personal care essentials to start your enquiry.
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="btn-primary text-xs py-2.5 px-5 inline-flex"
                >
                  Explore Products
                </Link>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-3.5 p-3 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors bg-slate-50/50"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-white border border-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-xs font-semibold text-slate-900 truncate">
                        {product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-slate-400 hover:text-rose-500 p-1"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-400 mt-0.5">{product.unit}</p>

                    <div className="flex items-center justify-between mt-2.5">
                      <span className="text-xs font-semibold text-slate-900">
                        {formatINR(product.price * quantity)}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-slate-800 w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Link */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-white space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium">Estimated Subtotal:</span>
                <span className="text-lg font-semibold text-slate-900">{formatINR(subtotal)}</span>
              </div>
              <p className="text-xs text-slate-400">
                Delivery charges & pharmacist consultation will be confirmed on WhatsApp.
              </p>

              <div className="flex flex-col gap-2 pt-1">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
                >
                  <span>Review & WhatsApp Order</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex justify-between items-center px-1">
                  <button
                    onClick={clearCart}
                    className="text-xs text-slate-400 hover:text-rose-600 transition-colors"
                  >
                    Clear cart
                  </button>
                  <button
                    onClick={closeCart}
                    className="text-xs text-[#087443] font-semibold hover:underline"
                  >
                    Continue browsing
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
