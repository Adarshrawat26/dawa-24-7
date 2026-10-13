import { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Healthcare Support in Lucknow",
  description: `Get in touch with ${siteConfig.brandName} for medicine delivery enquiries and customer support in Lucknow.`,
};

export default function ContactPage() {
  return <ContactClient />;
}
