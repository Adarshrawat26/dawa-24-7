"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
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
      <section className="py-16 sm:py-24 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title">Need something specific?</h2>
          <p className="section-sub">
            Tell us what you need. We&apos;ll confirm availability, prescription requirements and delivery.
          </p>
          <a
            href={enquiry.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="btn-primary mt-7 py-3.5 px-7 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
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
