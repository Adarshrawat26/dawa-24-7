import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-12 sm:py-16 bg-[#f7fdf9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large lightly bordered rounded panel with generous padding */}
        <div className="bg-[#E4F9EB]/60 border border-[#CBF3D8] rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-xs">
          {/* Problem Block */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Getting Your Medicines Should Be Simple
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Finding the right medicines, checking availability, and arranging
              delivery can be inconvenient when you need healthcare essentials.
            </p>
          </div>

          {/* Divider line with small leaf/plus node */}
          <div className="relative my-8 max-w-xs mx-auto">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#CBF3D8]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#087443] border border-[#CBF3D8]">
                Our Approach
              </span>
            </div>
          </div>

          {/* Solution Block */}
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#CBF3D8] text-[#087443] mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#087443] mb-3">
              A Simpler Way to Order
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              Browse available products, share prescription details when
              required, and contact us through WhatsApp for assistance with
              your order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
