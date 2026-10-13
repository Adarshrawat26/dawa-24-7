"use client";

import React, { useState } from "react";
import {
  LUCKNOW_EXAMPLE_LOCALITIES,
  checkDeliveryAvailability,
  CheckAvailabilityResult,
} from "@/config/delivery-areas";
import { MapPin, Search, MessageCircle, AlertCircle } from "lucide-react";
import { buildGeneralEnquiryUrl } from "@/lib/whatsapp";
import { isWhatsAppConfigured } from "@/config/site";
import { WhatsAppConfigModal } from "./WhatsAppConfigModal";

export function DeliveryChecker() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<CheckAvailabilityResult | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const res = checkDeliveryAvailability(query);
    setResult(res);
  };

  const handleLocalityCardClick = (localityName: string) => {
    setQuery(localityName);
    const res = checkDeliveryAvailability(localityName);
    setResult(res);
  };

  const whatsappEnquiry = buildGeneralEnquiryUrl(
    query ? `delivery availability in ${query}` : "delivery coverage in Lucknow"
  );

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  return (
    <>
      <section id="delivery-coverage" className="py-16 sm:py-20 bg-white border-b border-emerald-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Service Areas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Delivery Across Lucknow
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-3">
              Explore example Lucknow localities. Check your PIN code or locality below and confirm live delivery availability on WhatsApp.
            </p>
          </div>

          {/* Interactive PIN / Locality Checker Box */}
          <div className="max-w-xl mx-auto bg-[#E4F9EB]/50 border border-[#CBF3D8] rounded-3xl p-6 sm:p-8 mb-12 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-2 text-center">
              Check Your Locality or PIN Code
            </h3>
            <p className="text-xs text-slate-600 mb-5 text-center">
              Enter your Lucknow locality name (e.g. Gomti Nagar) or 6-digit PIN code.
            </p>

            <form onSubmit={handleSearch} className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. 226010 or Hazratganj"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (!e.target.value) setResult(null);
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#CBF3D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765]"
                />
              </div>
              <button type="submit" className="btn-primary py-3 px-5 text-xs shrink-0 font-bold">
                Check
              </button>
            </form>

            {/* Response Box */}
            <div className="rounded-2xl p-4 text-xs bg-white border border-[#CBF3D8]">
              {result ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-[#087443] shrink-0 mt-0.5" />
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {result.message}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      Need instant confirmation?
                    </span>
                    <a
                      href={whatsappEnquiry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="text-xs font-bold text-[#087443] hover:underline inline-flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <p className="text-slate-500 text-center font-medium">
                  Enter your locality or PIN code to check availability.
                </p>
              )}
            </div>
          </div>

          {/* 8 Illustrative Locality Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">
                Example Lucknow Localities
              </h3>
              <span className="text-xs text-slate-400">
                Click any locality to check
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {LUCKNOW_EXAMPLE_LOCALITIES.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => handleLocalityCardClick(loc.name)}
                  className="p-4 rounded-2xl bg-white border border-[#E2F5E9] hover:border-[#20C765] hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-[#087443] transition-colors">
                      {loc.name}
                    </span>
                    <span className="text-[10px] font-mono bg-slate-100 group-hover:bg-[#E4F9EB] text-slate-600 group-hover:text-[#087443] px-2 py-0.5 rounded-md font-semibold transition-colors">
                      {loc.pinCode}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">{loc.zone}</p>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-[#087443] font-semibold group-hover:underline">
                      Enquire status
                    </span>
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 text-center pt-2">
              Note: Localities listed are illustrative examples only. Live coverage, product availability, and delivery charges must be confirmed before fulfilment.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppConfigModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        rawText={whatsappEnquiry.rawText}
      />
    </>
  );
}
