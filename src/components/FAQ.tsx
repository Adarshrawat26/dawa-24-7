"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faqs" className="py-12 sm:py-16 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="section-title mb-6">Questions</h2>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div key={faq.id}>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(idx)}
                  className="w-full text-left py-4 flex items-center justify-between gap-4"
                >
                  <span className="text-base font-medium text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-5 text-sm text-slate-600 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
