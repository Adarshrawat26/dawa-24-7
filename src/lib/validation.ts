import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)"),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number"
    ),
  addressLine: z
    .string()
    .min(5, "Please enter complete house/flat and street address"),
  locality: z
    .string()
    .min(2, "Please specify your Lucknow locality/area"),
  pinCode: z
    .string()
    .regex(/^[1-9][0-9]{5}$/, "Please enter a valid 6-digit Indian PIN code (e.g. 226010)"),
  landmark: z.string().optional(),
  deliveryNotes: z.string().optional(),
  prescriptionAgreed: z.boolean().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
