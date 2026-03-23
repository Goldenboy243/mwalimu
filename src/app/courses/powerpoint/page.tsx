"use client";

import React from "react";
import Link from "next/link";
import { Presentation, CheckCircle, ArrowRight } from "lucide-react";

export default function PowerPointCoursePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-orange-600 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-400 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/30 border border-orange-400/30 rounded-full text-xs font-bold uppercase tracking-widest text-orange-100 mb-6">
              <Presentation size={14} /> Official Course
            </div>
            <h1 className="text-5xl font-extrabold mb-6">Master PowerPoint</h1>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Create presentations that stick. Learn design principles, animations, and delivery techniques.
            </p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-lg">
                 Start Learning
               </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <div className="relative aspect-video w-full max-w-sm bg-white rounded-lg shadow-2xl p-1 border-4 border-orange-200">
                <div className="h-full w-full bg-slate-100 rounded flex items-center justify-center">
                   <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-2 opacity-20"></div>
                      <div className="w-24 h-2 bg-slate-300 rounded-full mx-auto"></div>
                   </div>
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
             { title: "Slide Basics", desc: "Layouts, placeholders, and themes." },
             { title: "Visual Assets", desc: "Images, ions, SmartArt, and shapes." },
             { title: "Animations", desc: "Entrance, emphasis, and exit effects." },
             { title: "Transitions", desc: "Seamless slide switching with Morph." },
             { title: "Multimedia", desc: "Embedding video and audio." },
             { title: "Delivery Mode", desc: "Presenter view and rehearsal timings." }
           ].map((module, i) => (
             <div key={i} className="p-6 rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all group bg-white">
               <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4 font-bold group-hover:bg-orange-600 group-hover:text-white transition-colors">
                 {i + 1}
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-4">{module.desc}</p>
               <Link href="#" className="inline-flex items-center text-orange-600 font-semibold text-sm hover:translate-x-1 transition-transform">
                 View Lesson <ArrowRight size={14} className="ml-1" />
               </Link>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}