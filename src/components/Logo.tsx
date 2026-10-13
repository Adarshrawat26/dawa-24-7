import React, { useId } from "react";

/** Dawa capsule mark. Inline SVG so it stays crisp and needs no extra request. */
export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  const id = useId();
  const clip = `cap-${id.replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <rect x="9" y="23" width="46" height="18" rx="9" />
        </clipPath>
      </defs>
      <rect width="64" height="64" rx="16" fill="#087443" />
      <g transform="rotate(-45 32 32)">
        <rect x="9" y="23" width="46" height="18" rx="9" fill="none" stroke="#fff" strokeWidth="3" />
        <rect x="9" y="23" width="23" height="18" fill="#fff" clipPath={`url(#${clip})`} />
      </g>
    </svg>
  );
}
