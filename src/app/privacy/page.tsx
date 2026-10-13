import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and patient data security guidelines for ${siteConfig.brandName}.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-xs space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Patient Confidentiality
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Last updated: March 2025 • Applicable to {siteConfig.brandName} (Lucknow, Uttar Pradesh)
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Commitment to Health Data Privacy</h2>
              <p>
                At {siteConfig.brandName}, we understand that medical and healthcare information is deeply personal. We are committed to safeguarding your privacy in compliance with applicable Indian information technology and healthcare privacy principles.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
              <p>
                When you initiate an order enquiry or communicate with us, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Your contact name, telephone number, and Lucknow residential delivery address.</li>
                <li>Details of requested medicines, wellness essentials, or health kits.</li>
                <li>Prescription images shared by you via WhatsApp or approved channels for statutory verification.</li>
                <li>Delivery instructions and optional landmark references.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. How Information is Used</h2>
              <p>
                Collected data is used strictly for fulfilling order enquiries, verifying prescription compliance with licensed pharmacists, calculating delivery charges, and facilitating dispatch to your doorstep in Lucknow. We do not sell, rent, or trade customer health information to third-party advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Prescription Handling & Pharmacist Verification</h2>
              <p>
                Doctor&apos;s prescriptions are accessible exclusively to registered pharmacists and authorized healthcare coordinators tasked with validating dosage, schedule compliance, and product suitability.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">5. Contact Information</h2>
              <p>
                For questions regarding your data privacy, contact our support desk at{" "}
                <span className="font-semibold text-slate-900">{siteConfig.supportEmail}</span> or reach out via our official WhatsApp support channel.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
