import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions governing order enquiries and medicine services with ${siteConfig.brandName}.`,
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-semibold mb-3">
              <FileText className="w-3.5 h-3.5" />
              Service Terms
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Governing use of {siteConfig.brandName} services in Lucknow, Uttar Pradesh
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">1. Nature of the Service</h2>
              <p>
                {siteConfig.brandName} provides an order enquiry and technology communication platform connecting consumers located in Lucknow with appropriately licensed retail chemists and pharmacists. Submitting a cart request via WhatsApp constitutes an enquiry, not an automatic sale or guaranteed delivery contract.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">2. Prescription Verification Requirement</h2>
              <p>
                In compliance with the Indian Drugs and Cosmetics Act, 1940 and the Drugs and Cosmetics Rules, 1945:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Prescription drugs (Schedule H, H1, etc.) will not be dispensed without a valid prescription written by a Registered Medical Practitioner (RMP).</li>
                <li>Prescriptions must be clear, legible, and specify patient name, date, doctor registration number, and prescribed dosage.</li>
                <li>The dispensing pharmacist reserves the right to decline or request additional clinical clarification before releasing any medication.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">3. No Replacement for Medical Advice</h2>
              <p>
                The descriptions, categories, and educational content available on this website are for informational orientation only and do not constitute clinical diagnosis, medical counsel, or self-medication recommendations. Always follow instructions from your treating physician.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">4. Pricing and Payment Confirmation</h2>
              <p>
                Product prices displayed in the development catalogue are indicative maximum retail prices (MRP) or estimated costs. Exact payable amounts, applicable delivery fees, and discounts will be confirmed by the pharmacy team during the WhatsApp review before dispatch.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">5. Jurisdiction</h2>
              <p>
                These terms and conditions shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts in Lucknow, Uttar Pradesh.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
