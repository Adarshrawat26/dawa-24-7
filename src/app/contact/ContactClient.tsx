"use client";

import React, { useState } from "react";
import { siteConfig, isWhatsAppConfigured } from "@/config/site";
import { buildGeneralEnquiryUrl } from "@/lib/whatsapp";
import { WhatsAppConfigModal } from "@/components/WhatsAppConfigModal";
import {
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";

export function ContactClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const enquiry = buildGeneralEnquiryUrl();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!isWhatsAppConfigured()) {
      e.preventDefault();
      setModalOpen(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <div className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-semibold mb-2">
              Get in Touch
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Contact {siteConfig.brandName}
            </h1>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Have questions about medicine availability, prescription verification, or delivery routes in Lucknow? We are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info & WhatsApp CTA */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-[#E4F9EB] border border-[#CBF3D8] rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#087443] text-white flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Fastest Response via WhatsApp
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Chat directly with our Lucknow healthcare coordination desk for instant medicine queries and order status.
                  </p>
                </div>
                <a
                  href={enquiry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="btn-primary w-full py-3 text-sm sm:text-base font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Contact Details List */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Support Channels & Desk
                </h3>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E4F9EB] text-[#087443] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Operational Hours</h4>
                      <p className="text-slate-500 mt-0.5">{siteConfig.supportHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E4F9EB] text-[#087443] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email Enquiries</h4>
                      <p className="text-slate-500 mt-0.5">{siteConfig.supportEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E4F9EB] text-[#087443] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Coordination Desk Location</h4>
                      <p className="text-slate-500 mt-0.5">{siteConfig.officeAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Send an Online Message
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out this form and our Lucknow team will respond promptly.
                </p>

                {formSubmitted ? (
                  <div className="p-8 text-center bg-[#E4F9EB]/60 border border-[#CBF3D8] rounded-2xl space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#087443] text-white flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-base">
                      Message Received!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you for contacting {siteConfig.brandName}. We have received your query and will reply shortly. For urgent needs, please reach out via WhatsApp.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#087443] font-semibold underline mt-2"
                    >
                      Send another note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Singh"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="yourname@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Lucknow Locality *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Indira Nagar, Sector 14"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Query or Medicine Enquiry *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please describe which medicines or health kits you require or any questions about Lucknow service coverage..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary py-3 px-6 text-sm sm:text-base font-semibold flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Query</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
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
