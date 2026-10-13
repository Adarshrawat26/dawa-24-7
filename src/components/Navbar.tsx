"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useCart } from "@/lib/cart-context";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  Plus,
  MessageCircle,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/products" && pathname === "/products") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-emerald-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#087443] text-white flex items-center justify-center shadow-xs group-hover:bg-[#20C765] transition-colors">
            <Plus className="w-6 h-6 stroke-[3]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-[#087443] transition-colors">
              {siteConfig.brandName}
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#087443]">
              Lucknow Healthcare
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {siteConfig.navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-[#E4F9EB] text-[#087443] font-semibold"
                    : "text-slate-600 hover:text-[#087443] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Search, Cart & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Link */}
          <Link
            href="/products"
            className="p-2.5 rounded-xl text-slate-600 hover:text-[#087443] hover:bg-[#E4F9EB] transition-colors hidden sm:flex items-center gap-2 text-xs font-medium"
            aria-label="Search medicines"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span className="hidden md:inline text-slate-500">Search</span>
          </Link>

          {/* Cart Icon with badge */}
          <button
            onClick={openCart}
            className="relative p-2.5 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#E4F9EB] text-[#087443] hover:bg-[#CBF3D8] transition-colors flex items-center gap-2 font-semibold text-xs"
            aria-label={`Open shopping cart with ${totalItems} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#20C765] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            )}
          </button>

          {/* WhatsApp Quick CTA button on desktop */}
          <Link
            href="/cart"
            className="hidden xl:inline-flex items-center gap-1.5 bg-[#20C765] hover:bg-[#18A953] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Order</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid gap-1 pt-2">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    active
                      ? "bg-[#E4F9EB] text-[#087443]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#20C765]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold"
            >
              <Search className="w-4 h-4" />
              <span>Search All Medicines</span>
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
