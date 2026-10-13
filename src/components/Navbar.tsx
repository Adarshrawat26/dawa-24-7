"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useCart } from "@/lib/cart-context";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { LogoMark } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${siteConfig.brandName} home`}>
          <LogoMark className="w-8 h-8" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            {siteConfig.brandName}
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm transition-colors ${
                isActive(link.href)
                  ? "text-slate-900 font-semibold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Link
            href="/products"
            className="p-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Search medicines"
          >
            <Search className="w-5 h-5" />
          </Link>

          <button
            onClick={openCart}
            className="relative p-2.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label={`Open cart, ${totalItems} items`}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 min-w-4 h-4 px-1 rounded-full bg-[#087443] text-white text-xs font-semibold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-4 py-2" aria-label="Mobile">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 text-base border-b border-slate-100 last:border-0 ${
                isActive(link.href) ? "font-semibold text-slate-900" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
