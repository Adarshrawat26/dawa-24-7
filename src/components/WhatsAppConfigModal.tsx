"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Check, Copy, ExternalLink, MessageCircle, X } from "lucide-react";

interface WhatsAppConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  rawText?: string;
  defaultPhone?: string;
}

export function WhatsAppConfigModal({
  isOpen,
  onClose,
  rawText,
  defaultPhone,
}: WhatsAppConfigModalProps) {
  const [copied, setCopied] = useState(false);
  const [testNumber, setTestNumber] = useState(
    defaultPhone && !defaultPhone.includes("X") ? defaultPhone : ""
  );

  if (!isOpen) return null;

  const handleCopy = () => {
    if (rawText) {
      navigator.clipboard.writeText(rawText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleLaunchTest = () => {
    const cleanNum = testNumber.replace(/\D/g, "");
    if (!cleanNum || cleanNum.length < 10) {
      alert("Please enter a valid 10-digit mobile number with country code (e.g. 919876543210)");
      return;
    }
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(rawText || "")}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-100 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-[#E4F9EB] flex items-center justify-center text-[#087443]">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              WhatsApp Order Preview
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Notice: Business phone is in test configuration mode
            </p>
          </div>
        </div>

        <div className="bg-[#E4F9EB] border border-[#CBF3D8] rounded-2xl p-4 mb-5 text-sm text-[#087443]">
          <p className="font-semibold mb-1">
            Central Placeholder: <code className="bg-white/80 px-1.5 py-0.5 rounded text-xs">{siteConfig.whatsAppNumber}</code>
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            To connect your live pharmacy WhatsApp business account, set{" "}
            <code className="bg-white px-1 rounded font-mono text-[11px]">NEXT_PUBLIC_WHATSAPP_NUMBER</code> in{" "}
            <code className="bg-white px-1 rounded font-mono text-[11px]">.env.local</code> or update{" "}
            <code className="bg-white px-1 rounded font-mono text-[11px]">src/config/site.ts</code>.
          </p>
        </div>

        {rawText && (
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-700">
                Formatted Order Enquiry Message
              </label>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs text-[#087443] font-medium flex items-center gap-1 hover:underline"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied to clipboard" : "Copy text"}
              </button>
            </div>
            <pre className="text-xs font-mono bg-slate-50 border border-slate-200 rounded-xl p-3 max-h-40 overflow-y-auto whitespace-pre-wrap text-slate-800">
              {rawText}
            </pre>
          </div>
        )}

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <label className="block text-xs font-semibold text-slate-700">
            Test Send to Your Own WhatsApp (Optional for testing)
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              placeholder="e.g. 919876543210"
              value={testNumber}
              onChange={(e) => setTestNumber(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#20C765]/30 focus:border-[#20C765]"
            />
            <button
              onClick={handleLaunchTest}
              className="btn-primary py-2.5 px-4 text-xs shrink-0"
            >
              Test Send <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
          <p className="text-[11px] text-slate-400">
            Include country code without &apos;+&apos; (e.g. 91 for India).
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
