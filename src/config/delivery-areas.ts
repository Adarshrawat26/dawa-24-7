import { LocalityCoverage } from "@/types";

/**
 * Lucknow Illustrative Locality Dataset
 * IMPORTANT: These are example localities for prototype and testing.
 * Do not treat as guaranteed service until operational verification is active.
 */
export const LUCKNOW_EXAMPLE_LOCALITIES: LocalityCoverage[] = [
  {
    id: "gomti-nagar",
    name: "Gomti Nagar",
    pinCode: "226010",
    status: "serviceable_enquiry",
    zone: "East Lucknow",
    note: "Primary enquiry corridor (Vipin Khand, Patrakarpuram, Vibhuti Khand). WhatsApp verification required.",
  },
  {
    id: "indira-nagar",
    name: "Indira Nagar",
    pinCode: "226016",
    status: "serviceable_enquiry",
    zone: "North-East Lucknow",
    note: "Covering Sectors 1 to 25. Route subject to local chemist partner availability.",
  },
  {
    id: "hazratganj",
    name: "Hazratganj",
    pinCode: "226001",
    status: "serviceable_enquiry",
    zone: "Central Lucknow",
    note: "Central hub corridor (Vidhan Sabha Marg, Ashok Marg, Mayfair).",
  },
  {
    id: "aliganj",
    name: "Aliganj",
    pinCode: "226024",
    status: "serviceable_enquiry",
    zone: "North Lucknow",
    note: "Sectors A through Q. Confirmed via WhatsApp order review.",
  },
  {
    id: "jankipuram",
    name: "Jankipuram",
    pinCode: "226021",
    status: "serviceable_enquiry",
    zone: "North Lucknow",
    note: "Jankipuram Extension and Ring Road belt. Schedule dependent on delivery partner.",
  },
  {
    id: "alambagh",
    name: "Alambagh",
    pinCode: "226005",
    status: "serviceable_enquiry",
    zone: "South-West Lucknow",
    note: "Key transit area (Phoenix Mall vicinity, Singar Nagar, Chander Nagar).",
  },
  {
    id: "mahanagar",
    name: "Mahanagar",
    pinCode: "226006",
    status: "serviceable_enquiry",
    zone: "Central-North Lucknow",
    note: "Kapurthala and Gole Market corridors. Fast routing access.",
  },
  {
    id: "chowk",
    name: "Chowk",
    pinCode: "226003",
    status: "serviceable_enquiry",
    zone: "Old Lucknow",
    note: "Heritage commercial sector. Standard delivery routing available upon confirmation.",
  },
];

/**
 * Feature flag for whether verified operational service area database is officially launched.
 * Set to `false` by default per specification:
 * "If no verified service-area data has been configured, display:
 * 'Please contact us on WhatsApp to confirm delivery availability in your area.'"
 */
export const IS_OPERATIONAL_DATA_VERIFIED = false;

export interface CheckAvailabilityResult {
  found: boolean;
  locality?: LocalityCoverage;
  message: string;
  isVerifiedService: boolean;
}

/**
 * Checks locality or PIN code in Lucknow.
 */
export function checkDeliveryAvailability(query: string): CheckAvailabilityResult {
  const sanitized = query.trim().toLowerCase();
  if (!sanitized) {
    return {
      found: false,
      message: "Enter your locality or PIN code to check availability.",
      isVerifiedService: false,
    };
  }

  // If live operational data is not yet certified, inform user per specification
  if (!IS_OPERATIONAL_DATA_VERIFIED) {
    // Check if query matches any known Lucknow locality name or pin
    const match = LUCKNOW_EXAMPLE_LOCALITIES.find(
      (loc) =>
        loc.pinCode === sanitized ||
        loc.name.toLowerCase().includes(sanitized) ||
        sanitized.includes(loc.name.toLowerCase())
    );

    if (match) {
      return {
        found: true,
        locality: match,
        message: `Found "${match.name}" (PIN: ${match.pinCode}). Note: Live operational coverage data is currently in development. Please contact us on WhatsApp to confirm delivery availability in your area.`,
        isVerifiedService: false,
      };
    }

    return {
      found: false,
      message:
        "Please contact us on WhatsApp to confirm delivery availability in your area.",
      isVerifiedService: false,
    };
  }

  const match = LUCKNOW_EXAMPLE_LOCALITIES.find(
    (loc) =>
      loc.pinCode === sanitized ||
      loc.name.toLowerCase().includes(sanitized)
  );

  if (match) {
    return {
      found: true,
      locality: match,
      message: `Delivery enquiry available for ${match.name} (${match.pinCode}) - ${match.zone}.`,
      isVerifiedService: true,
    };
  }

  return {
    found: false,
    message:
      "This PIN code or locality is not currently in our primary list. Please contact us on WhatsApp to check if special delivery can be arranged.",
    isVerifiedService: false,
  };
}
