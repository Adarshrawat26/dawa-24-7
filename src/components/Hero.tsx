"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Search } from "lucide-react";
import { isWhatsAppConfigured } from "@/config/site";
import { buildGeneralEnquiryUrl } from "@/lib/whatsapp";
import { WhatsAppConfigModal } from "./WhatsAppConfigModal";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const enquiry = buildGeneralEnquiryUrl();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  return (
    <>
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Medicines delivered in Lucknow.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-md">
              Send your list or prescription on WhatsApp. We confirm availability and delivery before anything is dispatched.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={enquiry.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="btn-primary py-3.5 px-6 text-base"
                id="hero-whatsapp-cta"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
              <Link
                href="/products"
                className="btn-secondary py-3.5 px-6 text-base"
                id="hero-explore-cta"
              >
                <Search className="w-4 h-4" />
                Browse medicines
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Prescription reviewed where required · Locality confirmed before dispatch
            </p>
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 order-first lg:order-last max-h-64 lg:max-h-none">
            <Image
              src="/images/hero-delivery.jpg"
              alt="Medicine delivery package and healthcare essentials"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <WhatsAppConfigModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rawText={enquiry.rawText}
      />
    </>
  );
}
