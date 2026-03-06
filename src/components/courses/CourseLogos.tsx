"use client";

import React from "react";

/* ─────────────────────────────────────
   Recognisable, brand-style SVG marks
   for each course card.
   ───────────────────────────────────── */

export function PythonLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue half */}
      <path d="M24 4C14.06 4 14.5 8.26 14.5 8.26L14.52 12.68H24.28V14H10.14S4 13.3 4 24s5.36 10 5.36 10H12.6v-4.82s-.28-5.36 5.26-5.36h9.06s5.1.08 5.1-4.94V8.94S32.7 4 24 4zm-5.04 2.84a1.64 1.64 0 110 3.28 1.64 1.64 0 010-3.28z" fill="#3776AB"/>
      {/* Yellow half */}
      <path d="M24 44c9.94 0 9.5-4.26 9.5-4.26l-.02-4.42H23.72V34h14.14S44 34.7 44 24s-5.36-10-5.36-10H35.4v4.82s.28 5.36-5.26 5.36h-9.06s-5.1-.08-5.1 4.94v9.94S15.3 44 24 44zm5.04-2.84a1.64 1.64 0 110-3.28 1.64 1.64 0 010 3.28z" fill="#FFD43B"/>
    </svg>
  );
}

export function WordLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="40" height="36" rx="4" fill="#185ABD"/>
      <rect x="20" y="6" width="24" height="36" rx="2" fill="#2B7CD3"/>
      <path d="M10 14h10v2H10zM10 20h10v2H10zM10 26h10v2H10zM10 32h10v2H10z" fill="rgba(255,255,255,0.3)"/>
      <text x="30" y="30" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" textAnchor="middle">W</text>
    </svg>
  );
}

export function ExcelLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="40" height="36" rx="4" fill="#107C41"/>
      <rect x="20" y="6" width="24" height="36" rx="2" fill="#21A366"/>
      {/* Grid lines */}
      <path d="M22 14h18M22 20h18M22 26h18M22 32h18M30 10v30M38 10v30" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <text x="12" y="30" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" textAnchor="middle">X</text>
    </svg>
  );
}

export function PowerPointLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="40" height="36" rx="4" fill="#C43E1C"/>
      <rect x="20" y="6" width="24" height="36" rx="2" fill="#E04E2C"/>
      {/* Slide representation */}
      <rect x="24" y="12" width="16" height="10" rx="1" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
      <rect x="24" y="25" width="16" height="10" rx="1" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
      <text x="12" y="30" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" textAnchor="middle">P</text>
    </svg>
  );
}

export function WebDevLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="40" height="32" rx="4" fill="#1E1E2E"/>
      {/* Browser chrome */}
      <rect x="4" y="8" width="40" height="8" rx="4" fill="#2D2D3F"/>
      <circle cx="11" cy="12" r="1.5" fill="#FF6B6B"/>
      <circle cx="16" cy="12" r="1.5" fill="#FFD93D"/>
      <circle cx="21" cy="12" r="1.5" fill="#6BCB77"/>
      {/* Code lines */}
      <text x="10" y="25" fill="#E06C75" fontFamily="monospace" fontSize="7">&lt;</text>
      <text x="15" y="25" fill="#61AFEF" fontFamily="monospace" fontSize="7">div</text>
      <text x="27" y="25" fill="#E06C75" fontFamily="monospace" fontSize="7">&gt;</text>
      <text x="14" y="33" fill="#98C379" fontFamily="monospace" fontSize="6">Hello</text>
      <text x="10" y="37" fill="#E06C75" fontFamily="monospace" fontSize="7">&lt;/&gt;</text>
    </svg>
  );
}

export function DigitalLiteracyLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Monitor */}
      <rect x="6" y="6" width="36" height="26" rx="3" fill="#4A5568"/>
      <rect x="8" y="8" width="32" height="20" rx="1" fill="#63B3ED"/>
      {/* Screen content */}
      <rect x="12" y="12" width="10" height="3" rx="1" fill="rgba(255,255,255,0.7)"/>
      <rect x="12" y="17" width="24" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
      <rect x="12" y="21" width="18" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
      {/* Stand */}
      <rect x="20" y="32" width="8" height="4" fill="#4A5568"/>
      <rect x="16" y="36" width="16" height="2" rx="1" fill="#4A5568"/>
      {/* Cursor */}
      <path d="M30 13l4 5h-3l-1.5 3L28 19l1.5-3H27z" fill="white"/>
    </svg>
  );
}
