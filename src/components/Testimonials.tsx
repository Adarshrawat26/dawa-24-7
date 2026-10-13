import React from "react";
import { SAMPLE_TESTIMONIALS } from "@/data/testimonials";
import { Star, MessageSquareQuote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-[#f7fdf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-bold uppercase tracking-wider mb-2">
            Feedback & Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Lucknow Residents
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            See how convenient WhatsApp-first medicine enquiry makes managing prescriptions and healthcare essentials.
          </p>
          <div className="mt-3 inline-block bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-semibold px-3 py-1 rounded-full">
            Demo Showcase: Illustrative customer cards for design review
          </div>
        </div>

        {/* Green Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative p-6 rounded-3xl bg-[#E4F9EB]/70 border border-[#CBF3D8] hover:border-[#20C765] hover:bg-[#E4F9EB] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Demo Content Watermark Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/80 text-[#087443] px-2 py-0.5 rounded-full border border-emerald-100">
                    Demo
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.reviewText}&rdquo;
                </p>
              </div>

              {/* Author & Locality */}
              <div className="pt-4 border-t border-[#CBF3D8]/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#087443] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {item.customerName.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {item.customerName}
                  </h4>
                  <p className="text-[11px] text-[#087443] font-medium truncate">
                    {item.locality}
                  </p>
                </div>
              </div>

              {/* Subtle Quote Icon background */}
              <div className="absolute top-5 right-5 text-[#CBF3D8] pointer-events-none -z-0 opacity-40">
                <MessageSquareQuote className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
