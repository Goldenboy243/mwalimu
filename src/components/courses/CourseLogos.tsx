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
      {/* Background document */}
      <rect x="8" y="4" width="32" height="40" rx="4" fill="#E2EAFC" />
      <path d="M16 14h16M16 20h16M16 26h16M16 32h10" stroke="#B0C4DE" strokeWidth="2" strokeLinecap="round"/>
      {/* Front Blue Square */}
      <rect x="4" y="14" width="22" height="22" rx="4" fill="#2B579A" />
      <text x="15" y="29" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" textAnchor="middle">W</text>
    </svg>
  );
}

export function ExcelLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background document */}
      <rect x="8" y="4" width="32" height="40" rx="4" fill="#D3F9D8" />
      <path d="M14 14h20v20H14V14z" fill="#A8E6CF" />
      <path d="M14 20h20M14 27h20M21 14v20M28 14v20" stroke="#8DE0B6" strokeWidth="1.5" />
      {/* Front Green Square */}
      <rect x="4" y="14" width="22" height="22" rx="4" fill="#188941" />
      <text x="15" y="29" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" textAnchor="middle">X</text>
    </svg>
  );
}

export function PowerPointLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background document */}
      <rect x="8" y="4" width="32" height="40" rx="4" fill="#FFE8CC" />
      <rect x="14" y="14" width="20" height="14" rx="2" fill="#FFA94D" opacity="0.4" />
      {/* Front Orange Square */}
      <rect x="4" y="14" width="22" height="22" rx="4" fill="#D24726" />
      <text x="15" y="29" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" textAnchor="middle">P</text>
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
