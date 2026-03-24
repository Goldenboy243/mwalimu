"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LogoSVG from "@/components/logo/LogoSVG";
import LanguageSelector from "./LanguageSelector";
import { ChevronDown, LayoutGrid } from "lucide-react";
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
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 cursor-default">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 tracking-widest uppercase mb-2">Learning Modules</h3>
                  <p className="text-sm text-slate-500 font-medium">Select an application to start your interactive lab.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                  <LayoutGrid className="w-5 h-5 text-slate-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {/* Word Card */}
                <Link href="/courses/word" className="group/card bg-white rounded-3xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-blue-50 flex items-center justify-center mb-6 overflow-hidden">
                     <WordLogo size={36} />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-2">Word</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed pr-4">Master professional documents.</p>
                </Link>

                {/* Excel Card */}
                <Link href="/courses/excel" className="group/card bg-white rounded-3xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-50 flex items-center justify-center mb-6 overflow-hidden">
                     <ExcelLogo size={36} />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-2">Excel</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed pr-4">Crunch data and visual charts.</p>
                </Link>

                {/* PowerPoint Card */}
                <Link href="/courses/powerpoint" className="group/card bg-white rounded-3xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-orange-50 flex items-center justify-center mb-6 overflow-hidden">
                     <PowerPointLogo size={36} />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-2">PowerPoint</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed pr-4">Design stunning slide pitches.</p>
                </Link>

                {/* Python Card */}
                <Link href="/courses/python" className="group/card bg-white rounded-3xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-amber-50 flex items-center justify-center mb-6 overflow-hidden">
                     <PythonLogo size={36} />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-2">Python</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed pr-4">Back-end & App Development.</p>
                </Link>

                {/* Web Dev Card */}
                <Link href="/courses/web-dev" className="group/card bg-white rounded-3xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-rose-50 flex items-center justify-center mb-6 overflow-hidden">
                     <WebDevLogo size={36} />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-2">Web Dev</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed pr-4">Become a Full-Stack expert.</p>
                </Link>

                {/* Digital Literacy Card */}
                <Link href="/courses/digital-literacy" className="group/card bg-white rounded-3xl p-6 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-indigo-50 flex items-center justify-center mb-6 overflow-hidden">
                     <DigitalLiteracyLogo size={36} />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-xl mb-2">Digital Lit.</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed pr-4">Essential computer basics.</p>
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
             <Link href="/profile" className="px-5 py-2.5 border border-slate-300 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 hover:text-indigo-600 transition-all">
               Profile
             </Link>
             <Link href="/admin" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all">
               Admin
             </Link>
             <Link href="/auth" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all">
               Sign Up
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
