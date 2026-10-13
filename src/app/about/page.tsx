import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, HeartHandshake, FileCheck2, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Transparent Medicine Delivery in Lucknow",
  description:
    "Learn about Dawa Lucknow, our prescription-aware order facilitation, and our commitment to safe healthcare deliveries.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-semibold">
            About {siteConfig.brandName}
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
            Committed to Simpler Healthcare in Lucknow
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We are building a convenient, prescription-aware medicine ordering experience tailored specifically for the residents and families of Lucknow, Uttar Pradesh.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E2F5E9] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E4F9EB] text-[#087443] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h2 className="text-base font-semibold text-slate-900">Patient-Centric Simplicity</h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Managing healthcare shouldn&apos;t feel stressful. We use familiar WhatsApp interactions to make requesting everyday essentials natural and fast.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2F5E9] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E4F9EB] text-[#087443] flex items-center justify-center">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h2 className="text-base font-semibold text-slate-900">Prescription Vigilance</h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Medicines are not ordinary consumer goods. We follow strict statutory guidelines for prescription verification before any pharmaceutical dispatch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2F5E9] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E4F9EB] text-[#087443] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-base font-semibold text-slate-900">Hyperlocal Network</h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Dedicated exclusively to Lucknow localities—from Gomti Nagar and Hazratganj to Aliganj and Indira Nagar.
            </p>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Finding needed medications, checking which pharmacy has stock, and arranging dependable delivery can be challenging, especially for senior citizens or busy households. {siteConfig.brandName} bridges this gap with transparent technology and localized support.
            </p>
          </div>

          <div id="prescription-policy" className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#087443]" />
              Prescription & Safety Guidelines
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We strictly adhere to the regulatory frameworks governing pharmaceuticals in India (including the Drugs and Cosmetics Act, 1940 and rules thereunder):
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-slate-600 list-disc list-inside">
              <li>
                <strong>Schedule H / H1 / X Drugs:</strong> Can only be fulfilled against an authentic, legible prescription issued by a Registered Medical Practitioner (RMP).
              </li>
              <li>
                <strong>Prescription Review:</strong> Every prescription submitted via our verification workflow is examined by a qualified registered pharmacist prior to packaging.
              </li>
              <li>
                <strong>No Unauthorized Substitutions:</strong> We never swap prescribed molecules without explicit confirmation from the prescribing medical practitioner.
              </li>
              <li>
                <strong>Licensed Partner Chemists:</strong> All items are sourced and billed by licensed retail chemists in Lucknow.
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Transparency & Operational Status</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {siteConfig.brandName} operates with total clarity. We do not manufacture drugs, nor do we present simulated customer statistics or exaggerated delivery promises. If you have questions about licensing or partner pharmacy credentials, our team is always available to assist.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#E4F9EB] border border-[#CBF3D8] rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Have Questions About Our Lucknow Services?</h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Connect with our team directly on WhatsApp or explore our available healthcare catalog.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link href="/products" className="btn-primary text-xs py-3 px-6">
              Browse Catalogue
            </Link>
            <Link href="/contact" className="btn-secondary text-xs py-3 px-6">
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
