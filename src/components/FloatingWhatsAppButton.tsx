"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { isWhatsAppConfigured } from "@/config/site";
import { buildGeneralEnquiryUrl } from "@/lib/whatsapp";
import { WhatsAppConfigModal } from "./WhatsAppConfigModal";

export function FloatingWhatsAppButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const enquiry = buildGeneralEnquiryUrl("immediate medicine enquiry in Lucknow");

  const handleClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  return (
    <>
      <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 group">
        <a
          href={enquiry.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-label="Chat with Dawa Lucknow on WhatsApp for medicine enquiries"
          className="w-14 h-14 rounded-full bg-[#20C765] hover:bg-[#18A953] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#20C765]/40"
        >
          <MessageCircle className="w-7 h-7 stroke-[2.2]" />

          {/* Pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#20C765]/30 animate-ping -z-10 group-hover:hidden" />
        </a>

        {/* Tooltip on hover */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center">
          <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md whitespace-nowrap">
            Chat on WhatsApp
          </div>
          <div className="w-2 h-2 bg-slate-900 rotate-45 -ml-1" />
        </div>
      </aside>

      <WhatsAppConfigModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rawText={enquiry.rawText}
      />
    </>
  );
}
