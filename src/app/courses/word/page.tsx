"use client";

import React from "react";
import Link from "next/link";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

export default function WordCoursePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/30 border border-blue-400/30 rounded-full text-xs font-bold uppercase tracking-widest text-blue-100 mb-6">
              <FileText size={14} /> Official Course
            </div>
            <h1 className="text-5xl font-extrabold mb-6">Master Microsoft Word</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              From basic document formatting to advanced automation. Learn to create professional reports, resumes, and academic papers with ease.
            </p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                 Start Learning
               </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm">
               <div className="w-full h-48 bg-slate-100 rounded-lg mb-4"></div>
               <div className="space-y-3">
                 <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                 <div className="h-3 w-full bg-slate-100 rounded"></div>
                 <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Course Curriculum</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: "Getting Started", desc: "Interface tour, ribbons, and basic text editing." },
             { title: "Formatting & Styles", desc: "Paragraphs, fonts, and using styles for consistency." },
             { title: "Page Layout", desc: "Margins, orientation, columns, and breaks." },
             { title: "Tables & Graphics", desc: "Inserting images, shapes, and organizing data." },
             { title: "References & Citations", desc: "Footnotes, endnotes, and bibliography management." },
             { title: "Collaboration", desc: "Track changes, comments, and sharing documents." }
           ].map((module, i) => (
             <div key={i} className="p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group bg-white">
               <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                 {i + 1}
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-4">{module.desc}</p>
               <Link href="#" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:translate-x-1 transition-transform">
                 View Lesson <ArrowRight size={14} className="ml-1" />
               </Link>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}