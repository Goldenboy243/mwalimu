"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Target, Globe, Heart, ArrowRight, User } from "lucide-react";

export default function AboutUsPage() {
  return (
    <main className="overflow-x-hidden pt-20">
      {/* ── Hero ── */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
           <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">Our Story</span>
           <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
             Empowering the <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Next Generation.</span>
           </h1>
           <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
             Mwalimu means "Teacher" in Swahili. We are on a mission to democratize digital education by building the world's most interactive learning platform.
           </p>
        </div>
      </section>

      {/* ── Mission Values ── */}
      <section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Goal-Oriented</h3>
              <p className="text-slate-500 leading-relaxed">
                We believe learning shouldn't be passive. Our platform forces you to engage, write code, and build documents—skills that actually get you hired.
              </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Universal Access</h3>
              <p className="text-slate-500 leading-relaxed">
                Talent is everywhere, but opportunity is not. We make high-quality tools accessible directly in the browser, removing hardware barriers.
              </p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Community First</h3>
              <p className="text-slate-500 leading-relaxed">
                We are building Mwalimu together with our users. Feedback drives our iterative development process, ensuring we build what you actually need.
              </p>
           </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Driven by a shared passion for education and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="w-48 h-48 mx-auto bg-slate-100 rounded-full mb-6 overflow-hidden relative border-4 border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                 {/* Placeholder for uploaded image */}
                 <div className="absolute inset-0 flex items-center justify-center bg-indigo-50 text-indigo-300 group-hover:bg-indigo-100 transition-colors">
                    <User size={64} />
                 </div>
                 {/* Once image is available, use: <Image src="/path" alt="Name" fill className="object-cover" /> */}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Founder & CEO</h3>
              <p className="text-indigo-600 font-medium mb-3">Vision & Strategy</p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="w-48 h-48 mx-auto bg-slate-100 rounded-full mb-6 overflow-hidden relative border-4 border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                 <div className="absolute inset-0 flex items-center justify-center bg-purple-50 text-purple-300 group-hover:bg-purple-100 transition-colors">
                    <User size={64} />
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Lead Developer</h3>
              <p className="text-purple-600 font-medium mb-3">Architecture & Code</p>
            </div>

            {/* Team Member 3 */}
            <div className="group text-center">
              <div className="w-48 h-48 mx-auto bg-slate-100 rounded-full mb-6 overflow-hidden relative border-4 border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                 <div className="absolute inset-0 flex items-center justify-center bg-rose-50 text-rose-300 group-hover:bg-rose-100 transition-colors">
                    <User size={64} />
                 </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Head of Education</h3>
              <p className="text-rose-600 font-medium mb-3">Curriculum Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="py-24 px-6 bg-slate-900 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-8">Join Us on Our Journey</h2>
        <Link href="/auth" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-400 transition-all hover:-translate-y-1">
          Start Learning <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
}