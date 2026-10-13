"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/lib/cart-context";
import { checkoutSchema, CheckoutFormData } from "@/lib/validation";
import { formatINR } from "@/lib/utils";
import { buildCartWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppConfigModal } from "@/components/WhatsAppConfigModal";
import {
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  AlertTriangle,
  ShoppingBag,
  ArrowRight,
  Info,
} from "lucide-react";

export function CartPageClient() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    hasPrescriptionItems,
  } = useCart();

  const [modalOpen, setModalOpen] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      addressLine: "",
      locality: "Gomti Nagar",
      pinCode: "226010",
      landmark: "",
      deliveryNotes: "",
      prescriptionAgreed: false,
    },
  });

  const onSubmit = (data: CheckoutFormData) => {
    if (hasPrescriptionItems && !data.prescriptionAgreed) {
      alert("Please check the box confirming you will share a valid doctor's prescription for prescription medicines.");
      return;
    }

    const { url, rawText, isConfigured } = buildCartWhatsAppUrl(
      items,
      {
        fullName: data.fullName,
        phone: data.phone,
        addressLine: data.addressLine,
        locality: data.locality,
        pinCode: data.pinCode,
        landmark: data.landmark,
        deliveryNotes: data.deliveryNotes,
        prescriptionAgreed: data.prescriptionAgreed,
      },
      subtotal
    );

    setGeneratedMessage(rawText);

    if (!isConfigured) {
      setModalOpen(true);
    } else {
      window.open(url, "_blank");
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-[#E4F9EB] text-[#087443] flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto">
            You have not added any medicines or healthcare essentials yet. Browse the demo catalogue to get started.
          </p>
          <Link href="/products" className="btn-primary py-3 px-8 text-sm inline-flex items-center gap-2">
            <span>Browse Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              Order Enquiry
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Review Cart & Customer Details
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Review your requested essentials and provide your Lucknow delivery address to continue on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Cart Items List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <h2 className="text-base font-bold text-slate-900">
                    Selected Items ({items.length})
                  </h2>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-slate-400 hover:text-rose-600 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {hasPrescriptionItems && (
                  <div className="mb-5 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Prescription Notice</p>
                      <p className="text-amber-800 leading-relaxed mt-0.5">
                        Your cart contains prescription items. By placing an enquiry, you understand that an original doctor&apos;s prescription is mandatory for pharmacist approval before dispensing.
                      </p>
                    </div>
                  </div>
                )}

                <div className="divide-y divide-slate-100">
                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="py-4 first:pt-0 last:pb-0 flex gap-4 items-center"
                    >
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-[#E4F9EB]/60 shrink-0 border border-slate-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            href={`/products/${product.slug}`}
                            className="font-semibold text-slate-900 text-sm hover:text-[#087443] truncate block"
                          >
                            {product.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                            className="text-slate-400 hover:text-rose-500 p-1"
                            aria-label={`Remove ${product.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-400">
                            {formatINR(product.price)} each
                          </span>
                          {product.isPrescriptionRequired ? (
                            <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                              Rx
                            </span>
                          ) : (
                            <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                              OTC
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 border border-slate-200 rounded-xl bg-slate-50 p-0.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-white rounded-lg"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold text-slate-800 w-5 text-center">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-white rounded-lg"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <span className="text-sm font-bold text-slate-900">
                            {formatINR(product.price * quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Disclaimer Banner */}
              <div className="p-4 rounded-2xl bg-white border border-emerald-100 text-xs text-slate-500 space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Info className="w-4 h-4 text-[#087443]" />
                  <span>Important Enquiry Protocol</span>
                </div>
                <p className="leading-relaxed">
                  • This WhatsApp action initiates an order availability enquiry, not a finalized charge.
                </p>
                <p className="leading-relaxed">
                  • Availability, prescription requirements, delivery coverage, fees, and final charges are reviewed before any fulfilment.
                </p>
              </div>
            </div>

            {/* Right: Customer Delivery Form & Checkout Summary */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-xs sticky top-28">
                <h2 className="text-lg font-bold text-slate-900 mb-1">
                  Delivery Details (Lucknow)
                </h2>
                <p className="text-xs text-slate-500 mb-5">
                  Enter your address so our team can check route coverage.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Adarsh Rawat"
                      {...register("fullName")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-500 mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      10-digit WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      {...register("phone")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-500 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Address Line */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      House / Flat, Street / Sector *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Flat 302, Green Enclave, Sector 4"
                      {...register("addressLine")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                    />
                    {errors.addressLine && (
                      <p className="text-[11px] text-rose-500 mt-1">
                        {errors.addressLine.message}
                      </p>
                    )}
                  </div>

                  {/* Locality & PIN Code in Lucknow */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Lucknow Locality *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Gomti Nagar"
                        {...register("locality")}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                      />
                      {errors.locality && (
                        <p className="text-[11px] text-rose-500 mt-1">
                          {errors.locality.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        PIN Code (Lucknow) *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 226010"
                        {...register("pinCode")}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                      />
                      {errors.pinCode && (
                        <p className="text-[11px] text-rose-500 mt-1">
                          {errors.pinCode.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Landmark */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Near Patrakarpuram Crossing"
                      {...register("landmark")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                    />
                  </div>

                  {/* Delivery Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Delivery Instructions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Please call upon arrival, leave with security"
                      {...register("deliveryNotes")}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none resize-none"
                    />
                  </div>

                  {/* Prescription Agreement Checkbox */}
                  {hasPrescriptionItems && (
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register("prescriptionAgreed")}
                          className="mt-0.5 rounded border-slate-300 text-[#087443] focus:ring-[#20C765]"
                        />
                        <span className="leading-snug">
                          I agree to share a registered doctor&apos;s prescription for verification on WhatsApp before delivery.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Subtotal & Summary */}
                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Items Subtotal:</span>
                      <span className="font-semibold text-slate-900">
                        {formatINR(subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Estimated Delivery:</span>
                      <span>To be confirmed</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-100">
                      <span>Estimated Total:</span>
                      <span className="text-[#087443] text-base">
                        {formatINR(subtotal)}
                      </span>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 mt-4"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Continue on WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Sends your items and delivery address directly to WhatsApp for pharmacist assistance.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppConfigModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rawText={generatedMessage}
      />
    </>
  );
}
