"use client";

import React from "react";
import Link from "next/link";
import { Table, CheckCircle, ArrowRight } from "lucide-react";

export default function ExcelCoursePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-emerald-700 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600/30 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-100 mb-6">
              <Table size={14} /> Official Course
            </div>
            <h1 className="text-5xl font-extrabold mb-6">Master Microsoft Excel</h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Unlock the power of data. Learn formulas, pivot tables, and data visualization to make informed decisions.
            </p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg">
                 Start Learning
               </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-2xl shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm border-4 border-emerald-100">
               <div className="grid grid-cols-4 gap-1 bg-slate-100 p-1 rounded-lg">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="h-8 bg-white rounded-sm border border-slate-200"></div>
                  ))}
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
             { title: "Workbook Basics", desc: "Cells, ranges, and basic navigation." },
             { title: "Essential Formulas", desc: "SUM, AVERAGE, MIN, MAX, and basic math." },
             { title: "Data Management", desc: "Sorting, filtering, and validation." },
             { title: "Advanced Functions", desc: "VLOOKUP, XLOOKUP, IF statements." },
             { title: "Pivot Tables", desc: "Summarizing large datasets instantly." },
             { title: "Charts & Graphs", desc: "Visualizing your data effectively." }
           ].map((module, i) => (
             <div key={i} className="p-6 rounded-xl border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all group bg-white">
               <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4 font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                 {i + 1}
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-4">{module.desc}</p>
               <Link href="#" className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:translate-x-1 transition-transform">
                 View Lesson <ArrowRight size={14} className="ml-1" />
               </Link>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}