import React from "react";
import { FileText, ShieldCheck } from "lucide-react";

interface PrescriptionBadgeProps {
  isRequired: boolean;
  size?: "sm" | "md";
}

export function PrescriptionBadge({ isRequired, size = "sm" }: PrescriptionBadgeProps) {
  if (isRequired) {
    return (
      <span
        className={`inline-flex items-center gap-1 font-semibold rounded-full bg-amber-50 text-amber-800 border border-amber-200 ${
          size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs"
        }`}
      >
        <FileText className={size === "sm" ? "w-3 h-3 text-amber-600" : "w-3.5 h-3.5 text-amber-600"} />
        Rx Required
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 ${
        size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs"
      }`}
    >
      <ShieldCheck className={size === "sm" ? "w-3 h-3 text-emerald-600" : "w-3.5 h-3.5 text-emerald-600"} />
      Over The Counter
    </span>
  );
}
