import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Plus, Mail, Clock, MapPin, ShieldAlert } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#20C765] text-white flex items-center justify-center font-bold">
                <Plus className="w-5 h-5 stroke-[3]" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {siteConfig.brandName}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description} Built for medicine and healthcare
              essential enquiries across Lucknow, Uttar Pradesh.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#20C765] shrink-0 mt-0.5" />
                <span>{siteConfig.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#20C765] shrink-0" />
                <span>{siteConfig.supportHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#20C765] shrink-0" />
                <span>{siteConfig.supportEmail}</span>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {siteConfig.footerCategories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#20C765] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {siteConfig.footerSupport.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#20C765] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Policies & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {siteConfig.footerLegal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#20C765] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-[11px] text-slate-500">
                Licence: {siteConfig.pharmacyLicenceNumber}
              </li>
            </ul>
          </div>
        </div>

        {/* Prescription and Legal Disclaimers Banner */}
        <div className="py-6 my-6 border-b border-slate-800 text-xs text-slate-400 space-y-3">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-300">
                Prescription & Healthcare Supply Compliance Information
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {siteConfig.legalDisclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.brandName}. All rights reserved. (Lucknow, UP, India)
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/shipping" className="hover:text-slate-300 transition-colors">
              Delivery
            </Link>
            <Link href="/returns" className="hover:text-slate-300 transition-colors">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
