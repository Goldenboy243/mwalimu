"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <main className="pt-20">
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
         <h1 className="text-5xl font-extrabold mb-6">How <span className="text-indigo-400">Mwalimu</span> Works</h1>
         <p className="text-xl text-slate-400 max-w-2xl mx-auto">
           We believe in learning by doing. Our platform guides you through real-world scenarios in a simulated environment, whether you're formatting documents or writing code.
         </p>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
         <div className="space-y-24">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 font-bold text-2xl flex items-center justify-center rounded-2xl mb-6 shadow-sm">1</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Track</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Select from our <strong>Productivity</strong> (Word, Excel) or <strong>Programming</strong> (Python, DSA) tracks. Each course is broken down into bite-sized modules focused on specific skills.
                  </p>
               </div>
               <div className="md:w-1/2 h-64 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <span className="text-slate-400 font-bold group-hover:text-indigo-600 transition-colors">Course Catalog UI</span>
               </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
               <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 font-bold text-2xl flex items-center justify-center rounded-2xl mb-6 shadow-sm">2</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Hands-On Practice</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    No installation required. Work directly in our web-based <strong>Office Simulators</strong> or execute Python code in our <strong>Integrated IDE</strong>.
                  </p>
               </div>
               <div className="md:w-1/2 h-64 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <span className="text-slate-400 font-bold group-hover:text-emerald-600 transition-colors">Simulator Interface UI</span>
               </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/2">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 font-bold text-2xl flex items-center justify-center rounded-2xl mb-6 shadow-sm">3</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Real-Time Feedback</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Get instant corrections. Our <strong>AI Tutor</strong> analyzes your work—whether it's a spreadsheet formula or a Python function—and suggests improvements immediately.
                  </p>
               </div>
               <div className="md:w-1/2 h-64 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <span className="text-slate-400 font-bold group-hover:text-orange-600 transition-colors">Feedback Console UI</span>
               </div>
            </div>
         </div>
      </section>

      <section className="bg-slate-50 py-24 px-6 text-center border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Start Your Journey Today</h2>
        <Link href="/auth" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-1">
          Create Free Account <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
}