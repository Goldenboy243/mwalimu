"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight, Code, Terminal, Database, Star, Users, CheckCircle, Smartphone, Braces, Brain, Layout, Monitor } from "lucide-react";
import LogoSVG from "@/components/logo/LogoSVG";

/* Lazy-load the 3D logo */
const Logo3D = dynamic(() => import("@/components/logo/Logo3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="animate-pulse">
        <LogoSVG size={120} color="#4f46e5" />
      </div>
    </div>
  ),
});

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function Counter({ target, label, icon: Icon, colorClass }: { target: number; label: string; icon: any; colorClass: string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
      <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${colorClass}`}>
        <Icon size={24} />
      </div>
      <p className="text-4xl font-extrabold text-slate-900 mb-2 flex justify-center items-center">
        <span ref={ref}>{count}</span>+
      </p>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="overflow-x-hidden pt-20">
      {/* ── Hero Section ── */}
      <section className="relative pb-20 pt-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[90vh]">
        <div className="lg:w-1/2 z-10 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold text-[11px] uppercase tracking-widest mb-8 border border-indigo-100 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Iterative Learning Platform
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-8 animate-fade-in-up [animation-delay:100ms]">
            Master Skills.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Build Futures.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 max-w-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            From <span className="font-semibold text-slate-700">Python</span> algorithms to <span className="font-semibold text-slate-700">Excel</span> financial models. Mwalimu is the interactive platform that teaches you by doing, not just watching.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Link href="/auth" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              Start Learning Free 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/how-it-works" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center">
              View Curriculum
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[500px] w-full animate-float-slow z-0 flex items-center justify-center mt-[-40px]">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-100 rounded-full filter blur-[100px] opacity-50"></div>
          <div className="relative z-10 w-full h-full">
            <Logo3D />
          </div>
          
          {/* Floating badges */}
          <div className="absolute top-20 right-0 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-yellow-100 animate-float-med hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                <Code size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold">New Course</p>
                <p className="text-sm font-bold text-slate-900">Python for Beginners</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-20 left-0 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-purple-100 animate-float-fast hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                 <Braces size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold">Popular</p>
                <p className="text-sm font-bold text-slate-900">Data Structures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-20 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <Counter target={2500} label="Active Learners" icon={Users} colorClass="bg-indigo-100 text-indigo-600" />
          <Counter target={120} label="Coding Challenges" icon={Terminal} colorClass="bg-rose-100 text-rose-600" />
          <Counter target={500} label="Certificates Earned" icon={CheckCircle} colorClass="bg-emerald-100 text-emerald-600" />
          <Counter target={15} label="Expert Courses" icon={Brain} colorClass="bg-orange-100 text-orange-600" />
        </div>
      </section>

      {/* ── Features List (Why Mwalimu, Redesigned to left/right layout instead of centered) ── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Header / Context */}
            <div className="lg:w-1/3 sticky top-32">
               <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Mwalimu Advantage</span>
               <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                 Why Choose Mwalimu?
               </h2>
               <p className="text-lg text-slate-500 leading-relaxed mb-8">
                 We combine the best of interactive learning with professional-grade tools, completely avoiding the boring video-only approach. Learn by practicing locally without configuring any environment.
               </p>
               <Link href="/about-us" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
                 Read our mission <ArrowRight size={20} />
               </Link>
            </div>
            
            {/* Right Cards Stack */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              <div className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300">
                <div className="w-16 h-16 shrink-0 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl">
                  <Terminal />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Live Coding Environments</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">Run Python, build Excel sheets, and design slides directly in your browser. No setup required.</p>
                </div>
              </div>
              
              <div className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300">
                <div className="w-16 h-16 shrink-0 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl">
                  <Database />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Project-Based</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">Build real things. From a budget tracker in Excel to a web scraper in Python. Learn by creating.</p>
                </div>
              </div>

              <div className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300">
                <div className="w-16 h-16 shrink-0 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-2xl">
                  <CheckCircle />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Instant Feedback</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">Our automated tests check your code and documents instantly, giving you specific hints on how to improve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tracks Wrapper ── */}
      <div className="flex flex-col">
        {/* 1. Programming Track (Python/DSA) */}
        <section className="py-24 bg-[#1e1b4b] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10 w-full">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-indigo-100 mb-6">
                <Code size={14} /> Programming Track
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">Think in <br/><span className="text-yellow-400 italic">Code.</span></h2>
              <p className="text-xl text-indigo-100 opacity-90 mb-8 leading-relaxed max-w-xl">
                Don't just copy tutorials. Solve real algorithmic problems. From mastering Python syntax to cracking complex Data Structures & Algorithms.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                 {["Python Basics", "Arrays & Linked Lists", "Recursion", "Trees & Graphs"].map((tag) => (
                   <span key={tag} className="px-4 py-2 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold">{tag}</span>
                 ))}
              </div>
              <Link href="/courses/python" className="inline-block px-8 py-4 bg-yellow-400 text-slate-900 font-black rounded-xl hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg">
                  Start Python
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-700 p-2 rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="rounded-xl overflow-hidden relative">
                    <div className="bg-slate-800 p-4 flex items-center gap-2 border-b border-slate-700">
                       <div className="flex gap-2 mr-4">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       </div>
                       <span className="text-xs font-mono text-slate-400">solution.py</span>
                    </div>
                    <div className="p-6 font-mono text-sm leading-relaxed text-slate-300 bg-[#0f172a] h-[280px]">
                       <p><span className="text-purple-400">def</span> <span className="text-blue-400">binary_search</span>(arr, target):</p>
                       <p className="pl-4">low, high = <span className="text-orange-400">0</span>, <span className="text-blue-400">len</span>(arr) - <span className="text-orange-400">1</span></p>
                       <p className="pl-4">while low &lt;= high:</p>
                       <p className="pl-8">mid = (low + high) // <span className="text-orange-400">2</span></p>
                       <p className="pl-8"><span className="text-purple-400">if</span> arr[mid] == target:</p>
                       <p className="pl-12"><span className="text-purple-400">return</span> mid</p>
                       <p className="pl-8"><span className="text-purple-400">elif</span> arr[mid] &lt; target:</p>
                       <p className="pl-12">low = mid + <span className="text-orange-400">1</span></p>
                       <p className="pl-8"><span className="text-purple-400">else</span>:</p>
                       <p className="pl-12">high = mid - <span className="text-orange-400">1</span></p>
                       <p className="pl-4"><span className="text-purple-400">return</span> -<span className="text-orange-400">1</span></p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Web Development / Design Track */}
        <section className="py-24 bg-rose-50 text-slate-900 border-b border-rose-100 relative">
           <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-16 relative z-10 w-full">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 rounded-full border border-rose-200 text-xs font-bold uppercase tracking-widest text-rose-600 mb-6">
                <Layout size={14} /> Web Development Track
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">Build the <br/><span className="text-rose-500 italic">Web.</span></h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                 Craft beautiful user interfaces from scratch using modern HTML, CSS, and interactive JavaScript. Understand the fabric of the internet.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                 {["Responsive Design", "Flexbox/Grid", "DOM Manipulation", "Modern JavaScript"].map((tag) => (
                   <span key={tag} className="px-4 py-2 bg-white border border-rose-100 text-rose-800 rounded-lg text-sm font-semibold">{tag}</span>
                 ))}
              </div>
              <Link href="/courses/web-dev" className="inline-block px-8 py-4 bg-rose-500 text-white font-black rounded-xl hover:bg-rose-600 hover:shadow-[0_20px_40px_rgba(244,63,94,0.3)] hover:scale-105 transition-all">
                Start Web Dev
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative group w-full">
              <div className="relative bg-white border border-slate-200 rounded-[2rem] p-4 shadow-xl rotate-[2deg] group-hover:rotate-0 transition-transform duration-500">
                 <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
                   <div className="bg-slate-200 p-3 flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                       <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                   </div>
                   <div className="p-6 h-[250px] flex items-center justify-center">
                       <div className="text-center">
                           <div className="w-20 h-20 bg-rose-500 rounded-2xl mx-auto mb-4 animate-bounce"></div>
                           <p className="font-bold text-slate-700 text-xl font-mono">&lt;div class="box"&gt;&lt;/div&gt;</p>
                       </div>
                   </div>
                 </div>
              </div>
            </div>
           </div>
        </section>

        {/* 3. Productivity Track (Excel/Word) */}
        <section className="py-24 bg-slate-900 text-white relative">
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

           <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10 w-full">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/50 rounded-full border border-emerald-500/50 text-xs font-bold uppercase tracking-widest text-emerald-300 mb-6">
                <Smartphone size={14} /> Productivity Track
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">Work Smarter, <br/><span className="text-emerald-400 italic">Not Harder.</span></h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                 Office tools are the backbone of modern business. Master Excel, Word, and PowerPoint to boost your productivity and value.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                 {["Advanced Excel", "Report Writing", "Presentation Design", "Data Analysis"].map((tag) => (
                   <span key={tag} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm font-semibold">{tag}</span>
                 ))}
              </div>
              <Link href="/courses/excel" className="inline-block px-8 py-4 bg-emerald-500 text-white font-black rounded-xl hover:bg-emerald-600 hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:scale-105 transition-all">
                Master Office Tools
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative group w-full">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-[2.5rem] blur-xl transition-all duration-500"></div>
              <div className="relative bg-white border border-slate-200 rounded-[2rem] p-4 shadow-2xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
                 <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
                   <div className="grid grid-cols-5 border-b border-slate-200 bg-slate-50">
                      <div className="p-3 border-r border-slate-200 text-xs font-bold text-slate-400">A1</div>
                      <div className="p-3 border-r border-slate-200 col-span-4 text-xs font-mono text-emerald-600">=SUM(B2:B10)</div>
                   </div>
                   {[...Array(5)].map((_, i) => (
                     <div key={i} className="grid grid-cols-5 border-b border-slate-100 last:border-0">
                        <div className="p-4 border-r border-slate-100 bg-slate-50 text-xs text-slate-400 font-bold flex items-center justify-center">{i+1}</div>
                        <div className="p-4 border-r border-slate-100"></div>
                        <div className="p-4 border-r border-slate-100 bg-emerald-50/30"></div>
                        <div className="p-4 border-r border-slate-100"></div>
                        <div className="p-4"></div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
           </div>
        </section>
      </div>

      {/* ── CTA Final ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl group">
             {/* Gradient glow top border */}
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
             
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "30px 30px" }}></div>
             
             <div className="relative z-10">
               <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">Ready to Upgrade Your Skills?</h2>
               <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                 Join thousands of learners mastering the tools of the future with Mwalimu.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Link href="/auth" className="px-10 py-5 bg-white text-indigo-900 font-bold text-xl rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                   Start Learning Free
                 </Link>
                 <Link href="/about-us" className="px-10 py-5 text-white font-bold text-xl rounded-2xl border border-white/20 hover:bg-white/10 transition-all">
                   Meet the Team
                 </Link>
               </div>
             </div>
        </div>
      </section>
    </main>
  );
}
