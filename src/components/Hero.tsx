"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, FileCheck2, MapPin } from "lucide-react";
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
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#E4F9EB]/50 via-[#F5FCF7] to-[#f7fdf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F9EB] border border-[#CBF3D8] text-[#087443] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#20C765] animate-pulse" />
                YOUR HEALTH, DELIVERED
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Medicines Delivered to Your Doorstep in{" "}
                <span className="text-[#087443] underline decoration-[#20C765]/40 decoration-wavy decoration-from-font">
                  Lucknow
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Order your medicines and everyday healthcare essentials from the
                comfort of your home. Simple ordering, reliable support, and a
                smoother healthcare experience.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={enquiry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="btn-primary py-3.5 px-7 text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
                  id="hero-whatsapp-cta"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>

                <Link
                  href="/products"
                  className="btn-secondary py-3.5 px-7 text-sm font-semibold flex items-center justify-center gap-2"
                  id="hero-explore-cta"
                >
                  <span>Explore Medicines</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3 Compact Trust Indicators */}
              <div className="pt-6 border-t border-emerald-100/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E4F9EB] text-[#087443] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Easy WhatsApp Ordering</h4>
                    <p className="text-[11px] text-slate-500">Simple enquiry flow</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E4F9EB] text-[#087443] flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Prescription-Aware Ordering</h4>
                    <p className="text-[11px] text-slate-500">Review required</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E4F9EB] text-[#087443] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Local Delivery Availability</h4>
                    <p className="text-[11px] text-slate-500">Confirm by locality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Large Natural Healthcare Delivery Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Subtle soft green back aura */}
                <div className="absolute -inset-4 bg-[#CBF3D8]/40 rounded-3xl blur-2xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-100/90 shadow-xl bg-white aspect-4/3">
                  <Image
                    src="/images/hero-delivery.jpg"
                    alt="Medicine delivery package and healthcare essentials for Lucknow"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                  />
                  
                  {/* Subtle badge overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 border border-emerald-100 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#20C765]/20 text-[#087443] flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Dawa Lucknow Service</p>
                        <p className="text-[10px] text-slate-500">Healthcare enquiry support</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#087443] bg-[#E4F9EB] px-2.5 py-1 rounded-full">
                      Lucknow, UP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Configuration Modal */}
      <WhatsAppConfigModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rawText={enquiry.rawText}
      />
    </>
  );
}
