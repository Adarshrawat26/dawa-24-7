import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns and Refunds Policy",
  description: `Returns, replacements, and cancellations policy for medicine orders with ${siteConfig.brandName}.`,
};

export default function ReturnsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-semibold mb-3">
              <RefreshCw className="w-3.5 h-3.5" />
              Returns & Cancellations
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Returns & Refund Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Statutory pharmaceutical return rules and customer protection guidelines
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">1. Regulatory Pharmacy Standards</h2>
              <p>
                Due to stringent healthcare safety guidelines and the potential risk of contamination or compromised storage, medicines and ingestible health products once delivered cannot be returned for resale under statutory pharmacy regulations, except under specific circumstances outlined below.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">2. Eligible Reasons for Replacement or Refund</h2>
              <p>
                You are entitled to a full replacement or refund in the event of:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Receipt of a wrong product or incorrect dosage compared to the verified order.</li>
                <li>Product received in damaged, broken, or tampered packaging.</li>
                <li>Product received with an expired or near-expiry shelf life.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">3. Claim Notification Period</h2>
              <p>
                In case of damaged or incorrect items, please inform our WhatsApp support desk within 24 hours of delivery with photographic evidence of the package and retail invoice. Our team will promptly review and arrange a return pickup or replacement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">4. Order Cancellation</h2>
              <p>
                You may cancel your order enquiry at any time before the partner chemist completes verification and dispatches the delivery agent. Once a rider has departed with temperature-regulated medications, cancellation may not be possible.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">5. Refund Processing</h2>
              <p>
                Approved refunds for pre-paid transactions will be credited back via the original payment method or UPI within 3 to 5 business days. Cash-on-delivery orders eligible for returns will be reimbursed via instant UPI transfer.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
