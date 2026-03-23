"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LogoSVG from "@/components/logo/LogoSVG";
import LanguageSelector from "./LanguageSelector";
import { ChevronDown } from "lucide-react";
import { WordLogo, ExcelLogo, PythonLogo, PowerPointLogo, WebDevLogo, DigitalLiteracyLogo } from "@/components/courses/CourseLogos";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="text-indigo-600 transition-transform duration-300 group-hover:scale-110">
            <LogoSVG size={36} color="#4f46e5" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Mwalimu<span className="text-indigo-600">.</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            Home
          </Link>

          {/* Courses Dropdown */}
          <div className="group relative h-full flex items-center">
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors py-4">
              Courses <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 cursor-default">
              <div className="mb-4 pb-2 border-b border-slate-100">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available Tracks</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Productivity Track */}
                <div className="col-span-2 mt-2 mb-1 border-b border-slate-100 pb-2">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Productivity Track</p>
                </div>
                <Link href="/courses/word" className="group/card flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 transition-transform group-hover/card:scale-110">
                    <WordLogo size={42} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover/card:text-blue-600 transition-colors">Microsoft Word</h4>
                    <p className="text-xs text-slate-500">Document Processing</p>
                  </div>
                </Link>
                <Link href="/courses/excel" className="group/card flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 transition-transform group-hover/card:scale-110">
                    <ExcelLogo size={42} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover/card:text-emerald-600 transition-colors">Microsoft Excel</h4>
                    <p className="text-xs text-slate-500">Data & Spreadsheets</p>
                  </div>
                </Link>

                {/* Programming Track */}
                <div className="col-span-2 mt-2 mb-1 border-b border-slate-100 pb-2">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Programming Track</p>
                </div>
                <Link href="/courses/python" className="group/card flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 transition-transform group-hover/card:scale-110">
                    <PythonLogo size={42} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover/card:text-yellow-600 transition-colors">Python</h4>
                    <p className="text-xs text-slate-500">Back-end Development</p>
                  </div>
                </Link>
                <Link href="/courses/web-dev" className="group/card flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 transition-transform group-hover/card:scale-110">
                    <WebDevLogo size={42} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover/card:text-rose-500 transition-colors">Web Dev</h4>
                    <p className="text-xs text-slate-500">HTML, CSS & JS</p>
                  </div>
                </Link>

                {/* Digital Literacy Track */}
                <div className="col-span-2 mt-2 mb-1 border-b border-slate-100 pb-2">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Foundations Track</p>
                </div>
                <Link href="/courses/digital-literacy" className="group/card flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 transition-transform group-hover/card:scale-110">
                    <DigitalLiteracyLogo size={42} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover/card:text-slate-600 transition-colors">Digital Literacy</h4>
                    <p className="text-xs text-slate-500">Computer Basics</p>
                  </div>
                </Link>
                <Link href="/courses/powerpoint" className="group/card flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 transition-transform group-hover/card:scale-110">
                    <PowerPointLogo size={42} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm group-hover/card:text-orange-600 transition-colors">PowerPoint</h4>
                    <p className="text-xs text-slate-500">Presentations</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/how-it-works" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            How It Works
          </Link>
          <Link href="/about-us" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            About Us
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <LanguageSelector />
          <div className="hidden sm:flex items-center gap-4">
             <Link href="/auth" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
               Sign In
             </Link>
             <Link href="/auth" className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all">
               Get Started
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
