import { Testimonial } from "@/types";

/**
 * Testimonial Data Source
 * DEMO NOTICE: In accordance with project requirements, these cards are
 * illustrative mockups showing layout styling and font hierarchy.
 * Real reviews will be populated once verified customer feedback is collected with consent.
 */
export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-01",
    customerName: "R. Sharma",
    locality: "Gomti Nagar, Lucknow",
    rating: 5,
    reviewText:
      "Ordering elderly care medicines over WhatsApp was straightforward. The verification step gave peace of mind that prescriptions are handled properly.",
    isDemoContent: true,
  },
  {
    id: "test-02",
    customerName: "A. Srivastava",
    locality: "Indira Nagar, Lucknow",
    rating: 5,
    reviewText:
      "Appreciated having first aid supplies and daily health essentials delivered right to our doorstep without running between medical shops.",
    isDemoContent: true,
  },
  {
    id: "test-03",
    customerName: "P. Verma",
    locality: "Hazratganj, Lucknow",
    rating: 5,
    reviewText:
      "Clean website interface, quick WhatsApp enquiry response, and clear communication on item availability before confirming.",
    isDemoContent: true,
  },
  {
    id: "test-04",
    customerName: "Dr. K. Mishra",
    locality: "Aliganj, Lucknow",
    rating: 5,
    reviewText:
      "Good to see a local Lucknow initiative that insists on genuine prescription verification rather than unvetted medicine distribution.",
    isDemoContent: true,
  },
];
