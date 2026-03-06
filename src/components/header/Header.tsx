"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LogoSVG from "@/components/logo/LogoSVG";
import LanguageSelector from "./LanguageSelector";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <LogoSVG size={30} />
          </div>
          <span className="text-lg font-extrabold tracking-tighter bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {t("brand")}
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="px-3.5 py-2 text-sm font-medium text-foreground/50 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link href="/workspace" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors duration-200 shadow-md shadow-primary/20">
            {t("workspace")}
          </Link>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
