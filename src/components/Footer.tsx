import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LogoMark } from "./Logo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Prescription guidelines", href: "/about#prescription-policy" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <ul className="mt-5 space-y-3.5">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-base text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${siteConfig.brandName} home`}>
              <LogoMark className="w-9 h-9" />
              <span className="text-xl font-semibold tracking-tight text-slate-900">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="mt-5 text-base text-slate-500 leading-relaxed max-w-xs">
              Medicines and healthcare essentials, ordered on WhatsApp and delivered in Lucknow.
            </p>
            <p className="mt-4 text-sm text-slate-400">{siteConfig.supportHours}</p>
          </div>

          <FooterColumn
            title="Shop"
            links={siteConfig.footerCategories}
          />
          <FooterColumn title="Help" links={siteConfig.footerSupport} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={siteConfig.footerLegal} />
        </div>

        {/* Regulatory notice — kept, but quiet */}
        <p className="mt-14 max-w-3xl text-xs text-slate-400 leading-relaxed">
          {siteConfig.legalDisclaimer} Licence: {siteConfig.pharmacyLicenceNumber}
        </p>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link href="/shipping" className="hover:text-slate-900 transition-colors">Delivery</Link>
            <Link href="/returns" className="hover:text-slate-900 transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
