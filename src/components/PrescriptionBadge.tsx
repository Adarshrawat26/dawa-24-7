import React from "react";

interface PrescriptionBadgeProps {
  isRequired: boolean;
  size?: "sm" | "md";
}

/** Rx items get a clear amber tag; OTC stays quiet so the warning stands out. */
export function PrescriptionBadge({ isRequired, size = "sm" }: PrescriptionBadgeProps) {
  const pad = size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs";
  if (isRequired) {
    return (
      <span className={`inline-block font-semibold rounded-md bg-amber-100 text-amber-900 ${pad}`}>
        Rx required
      </span>
    );
  }
  return (
    <span className={`inline-block font-medium rounded-md bg-slate-100 text-slate-600 ${pad}`}>
      No prescription needed
    </span>
  );
}
