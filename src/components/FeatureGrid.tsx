import React from "react";
import {
  Smartphone,
  MapPin,
  ShieldCheck,
  FileCheck2,
  Headphones,
  PackagePlus,
} from "lucide-react";

const FEATURES = [
  {
    icon: Smartphone,
    title: "Convenient Ordering",
    description: "Place an enquiry or start your order from your phone.",
  },
  {
    icon: MapPin,
    title: "Local Service",
    description: "Check delivery availability for your area in Lucknow.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    description: "Medicines must be sourced through appropriately licensed suppliers.",
  },
  {
    icon: FileCheck2,
    title: "Prescription Support",
    description: "Prescription medicines are handled subject to applicable requirements.",
  },
  {
    icon: Headphones,
    title: "Helpful Assistance",
    description: "Get help with product availability and order-related questions.",
  },
  {
    icon: PackagePlus,
    title: "Healthcare Essentials",
    description: "Explore medicines, health kits, and personal care products.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-semibold mb-3">
            Why Choose Dawa Lucknow
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Designed for Transparent Healthcare Access
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3">
            A straightforward process designed to provide convenient medicine enquiry and local delivery across Lucknow.
          </p>
        </div>

        {/* 6 Consistent Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-white border border-[#E2F5E9] hover:border-[#CBF3D8] hover:shadow-lg transition-all duration-200 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E4F9EB] group-hover:bg-[#087443] text-[#087443] group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-200">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#087443] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
