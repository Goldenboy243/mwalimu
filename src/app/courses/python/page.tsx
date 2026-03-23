"use client";

import React from "react";
import Link from "next/link";
import { Code, Terminal, ArrowRight } from "lucide-react";

export default function PythonCoursePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-200 mb-6">
              <Code size={14} /> Programming Track
            </div>
            <h1 className="text-5xl font-extrabold mb-6">Python for Beginners</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Learn the world's most popular programming language. From basic syntax to building real-world automation scripts.
            </p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-yellow-400 text-slate-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg">
                 Start Coding
               </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-[#0f172a] p-1 rounded-xl shadow-2xl border border-slate-700 w-full max-w-md">
               <div className="bg-slate-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <span className="text-xs text-slate-400 ml-2 font-mono">hello_world.py</span>
               </div>
               <div className="p-6 font-mono text-sm text-slate-300 h-64">
                 <p><span className="text-purple-400">print</span>(<span className="text-green-400">"Hello, Mwalimu!"</span>)</p>
                 <p className="mt-4"><span className="text-purple-400">def</span> <span className="text-blue-400">add</span>(a, b):</p>
                 <p className="pl-4"><span className="text-purple-400">return</span> a + b</p>
                 <p className="mt-4"><span className="text-slate-500"># Start your journey here...</span></p>
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
             { title: "Variables & Types", desc: "Strings, Integers, Floats, and Booleans." },
             { title: "Control Flow", desc: "If statements, For loops, and While loops." },
             { title: "Functions", desc: "Defining reusable blocks of code." },
             { title: "Data Structures", desc: "Lists, Tuples, Sets, and Dictionaries." },
             { title: "File Handling", desc: "Reading and writing to files." },
             { title: "Modules & APIs", desc: "Using external libraries and data." }
           ].map((module, i) => (
             <div key={i} className="p-6 rounded-xl border border-slate-200 hover:border-yellow-200 hover:shadow-lg transition-all group bg-white">
               <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-lg flex items-center justify-center mb-4 font-bold group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors">
                 {i + 1}
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-4">{module.desc}</p>
               <Link href="#" className="inline-flex items-center text-yellow-700 font-semibold text-sm hover:translate-x-1 transition-transform">
                 View Lesson <ArrowRight size={14} className="ml-1" />
               </Link>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}