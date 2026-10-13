"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { isWhatsAppConfigured } from "@/config/site";
import { buildGeneralEnquiryUrl } from "@/lib/whatsapp";
import { WhatsAppConfigModal } from "./WhatsAppConfigModal";

export function CTASection() {
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
      <section className="py-16 sm:py-24 bg-[#f7fdf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wide rounded pale-green CTA panel with ample whitespace */}
          <div className="bg-[#E4F9EB] border border-[#CBF3D8] rounded-3xl p-8 sm:p-14 md:p-20 text-center shadow-xs">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#087443] bg-white px-3.5 py-1 rounded-full border border-[#CBF3D8]">
                Lucknow Quick Support Desk
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Need Medicines or Healthcare Essentials?
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mx-auto">
                Start an enquiry and get help with availability, prescription
                requirements, and delivery options in Lucknow.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={enquiry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="btn-primary py-3.5 px-8 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md hover:shadow-lg w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat With Us on WhatsApp</span>
                </a>

                <Link
                  href="/products"
                  className="btn-secondary py-3.5 px-7 text-sm font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Browse Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-[11px] text-slate-500 pt-3">
                No automatic debit • Review before fulfilment • Clear pricing confirmation before dispatch
              </p>
            </div>
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
