import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: `Shipping procedures, delivery coverage, and dispatch timelines for ${siteConfig.brandName} across Lucknow.`,
};

export default function ShippingPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E4F9EB] text-[#087443] text-xs font-semibold mb-3">
              <Truck className="w-3.5 h-3.5" />
              Lucknow Logistics
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Delivery guidelines and service procedures across Lucknow, Uttar Pradesh
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">1. Service Coverage Area</h2>
              <p>
                {siteConfig.brandName} coordinates deliveries specifically within the municipal boundaries of Lucknow, including primary residential and commercial areas such as Gomti Nagar, Indira Nagar, Hazratganj, Aliganj, Jankipuram, Alambagh, Mahanagar, and Chowk.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">2. Order Processing & Verification</h2>
              <p>
                Upon receiving an order enquiry on WhatsApp, our team coordinates with a licensed chemist in Lucknow to:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Confirm item stock and batch validity.</li>
                <li>Verify prescription documentation where applicable.</li>
                <li>Confirm the delivery address and estimated time of arrival with you.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">3. Delivery Timelines</h2>
              <p>
                Delivery schedules depend on route proximity, partner chemist operating hours, traffic conditions in Lucknow, and order volume. While many orders are fulfilled the same day, we do not make unverified express claims (such as 30-minute delivery guarantees) unless explicitly confirmed for your specific address.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">4. Delivery Charges</h2>
              <p>
                Delivery fees are calculated based on distance from the dispatching partner chemist to your locality. Any nominal delivery charge will be clearly conveyed before you finalize the order on WhatsApp.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-slate-900">5. Temperature-Sensitive Medicines</h2>
              <p>
                Cold-chain items (such as insulin or specific eye drops) are packaged in insulated containers with cold packs to preserve efficacy throughout transit within Lucknow.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
