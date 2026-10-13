"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/utils";
import { buildProductEnquiryUrl } from "@/lib/whatsapp";
import { isWhatsAppConfigured } from "@/config/site";
import { PrescriptionBadge } from "@/components/PrescriptionBadge";
import { WhatsAppConfigModal } from "@/components/WhatsAppConfigModal";
import { ProductCard } from "@/components/ProductCard";
import {
  ShoppingBag,
  MessageCircle,
  Plus,
  Minus,
  CheckCircle,
  AlertTriangle,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { addItem, items } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const cartItem = items.find((i) => i.product.id === product.id);
  const enquiry = buildProductEnquiryUrl(product);

  const discountPercent =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <>
      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 overflow-x-auto"
          >
            <Link href="/" className="hover:text-[#087443]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products" className="hover:text-[#087443]">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href={`/categories/${product.category}`}
              className="hover:text-[#087443] capitalize"
            >
              {product.category.replace("-", " ")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-xs">
              {product.name}
            </span>
          </nav>

          {/* Main Product Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 mb-16">
            {/* Left: Product Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 sm:aspect-square rounded-2xl bg-[#E4F9EB]/60 border border-[#CBF3D8] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
                {discountPercent > 0 && (
                  <span className="absolute top-4 left-4 bg-[#087443] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Right: Product Details & Purchase Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-[#087443] bg-[#E4F9EB] px-3 py-1 rounded-full">
                    {product.brand}
                  </span>
                  <PrescriptionBadge
                    isRequired={product.isPrescriptionRequired}
                    size="md"
                  />
                </div>

                <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug mt-3">
                  {product.name}
                </h1>

                <p className="text-xs text-slate-400 mt-1">
                  Packaging: <span className="text-slate-700 font-medium">{product.unit}</span>
                </p>

                {/* Price Display */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-baseline gap-3">
                  <span className="text-3xl font-semibold text-slate-900">
                    {formatINR(product.price)}
                  </span>
                  {product.mrp > product.price && (
                    <span className="text-sm text-slate-400 line-through">
                      MRP {formatINR(product.mrp)}
                    </span>
                  )}
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md font-semibold">
                    Inclusive of all taxes
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mt-4">
                  {product.shortDescription}
                </p>

                {/* Prescription Warning if required */}
                {product.isPrescriptionRequired ? (
                  <div className="mt-5 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Prescription Required (Schedule H)</p>
                      <p className="text-amber-800 mt-0.5 leading-relaxed">
                        Under Indian drug regulations, this medicine requires a valid prescription from a registered medical practitioner. You will be asked to share your prescription on WhatsApp prior to order fulfillment.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 p-3.5 rounded-2xl bg-emerald-50/70 border border-slate-200 text-xs text-emerald-900 flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#087443] shrink-0" />
                    <span>Over-the-counter wellness product. No prescription required.</span>
                  </div>
                )}
              </div>

              {/* Quantity & CTA Buttons */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-slate-200 rounded-2xl p-1 bg-slate-50 w-36 justify-between">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-semibold text-slate-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-white hover:text-slate-900 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary flex-1 py-3.5 px-6 text-sm"
                  >
                    <ShoppingBag className="w-4 h-4 mr-1.5" />
                    <span>Add {quantity} to Cart</span>
                    {cartItem && (
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-1">
                        ({cartItem.quantity} already in cart)
                      </span>
                    )}
                  </button>
                </div>

                {/* Direct WhatsApp Enquiry */}
                <a
                  href={enquiry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="w-full btn-secondary py-3 text-sm sm:text-base font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#087443]" />
                  <span>Enquire Availability for this Item on WhatsApp</span>
                </a>

                {/* Delivery Note */}
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#087443]" />
                  <span>Delivery availability is confirmed after locality, prescription, and product review.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Disclaimers Tabs/Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
                <ShieldCheck className="w-5 h-5 text-[#087443]" />
                <h3>Product Overview & Description</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>
              {product.usageNotes && (
                <div className="pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-800 mb-1">
                    Usage Guidelines:
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {product.usageNotes}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-base">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3>Safety & Legal Disclaimers</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {product.safetyDisclaimer ||
                  "Always read product labelling before usage. If you have pre-existing conditions, consult a licensed healthcare practitioner."}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                <p>• Any medicine supply must be handled through appropriately licensed retail pharmacy channels.</p>
                <p>• No substitutions are performed without registered doctor approval.</p>
                <p>• Store in a cool, dry place away from direct sunlight.</p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Related Healthcare Products
                </h3>
                <p className="text-xs text-slate-500">
                  More essentials in {product.categoryLabel}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <WhatsAppConfigModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rawText={enquiry.rawText}
      />
    </>
  );
}
