"use client";

import React from "react";
import Link from "next/link";
import { Braces, Network, ArrowRight } from "lucide-react";

export default function DSACoursePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-purple-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-800 border border-purple-700 rounded-full text-xs font-bold uppercase tracking-widest text-purple-200 mb-6">
              <Braces size={14} /> Advanced Track
            </div>
            <h1 className="text-5xl font-extrabold mb-6">Algorithms & Data Structures</h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Crack the coding interview. Master the fundamental concepts that power specialized software engineering.
            </p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-400 transition-colors shadow-lg">
                 Start Solving
               </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <div className="relative w-full max-w-sm aspect-square">
                {/* Abstract Graph Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative w-64 h-64">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center border-4 border-purple-900 z-10 shadow-lg">Root</div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center border-4 border-purple-900 z-10">L</div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center border-4 border-purple-900 z-10">R</div>
                      
                      {/* Connections */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                         <line x1="50%" y1="10%" x2="20%" y2="80%" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="4" />
                         <line x1="50%" y1="10%" x2="80%" y2="80%" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="4" />
                      </svg>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Concepts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: "Big O Notation", desc: "Time and Space complexity analysis." },
             { title: "Arrays & Strings", desc: "Two pointers, sliding window techniques." },
             { title: "Linked Lists", desc: "Traversal, reversal, and cycle detection." },
             { title: "Stacks & Queues", desc: "LIFO/FIFO principles and applications." },
             { title: "Trees & Graphs", desc: "DFS, BFS, and shortest path algorithms." },
             { title: "Dynamic Programming", desc: "Memoization and tabulation strategies." }
           ].map((module, i) => (
             <div key={i} className="p-6 rounded-xl border border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all group bg-white">
               <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 font-bold group-hover:bg-purple-600 group-hover:text-white transition-colors">
                 {i + 1}
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-4">{module.desc}</p>
               <Link href="#" className="inline-flex items-center text-purple-600 font-semibold text-sm hover:translate-x-1 transition-transform">
                 View Lesson <ArrowRight size={14} className="ml-1" />
               </Link>
             </div>
           ))}
        </div>
      </section>
    </main>
  );
}