"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowRight, ChevronDown } from "lucide-react";
import LogoSVG from "@/components/logo/LogoSVG";

/* Lazy-load the 3D logo — heavy WebGL bundle */
const Logo3D = dynamic(() => import("@/components/logo/Logo3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] flex items-center justify-center">
      <div className="animate-pulse">
        <LogoSVG size={120} />
      </div>
    </div>
  ),
});

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
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
            // ease-out cubic
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

/* ── Stats data ── */
const STATS = [
  { target: 500, suffix: "+", label: "Students Learning", desc: "on our platform" },
  { target: 10, suffix: "+", label: "Countries", desc: "across Africa & beyond" },
  { target: 4.8, suffix: "", label: "User Rating", desc: "out of 5 stars", decimal: true },
  { target: 10, suffix: "+", label: "Courses", desc: "and growing" },
];

function StatItem({ target, suffix, label, desc, decimal }: { target: number; suffix: string; label: string; desc: string; decimal?: boolean }) {
  const { count, ref } = useCountUp(decimal ? target * 10 : target, 2200);
  const display = decimal ? (count / 10).toFixed(1) : count;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-black text-primary tracking-tighter mb-1">
        {display}{suffix}
      </div>
      <div className="text-sm font-bold text-foreground/80 mb-0.5">{label}</div>
      <div className="text-xs text-foreground/40">{desc}</div>
    </div>
  );
}

function StatsCounter() {
  return (
    <section className="py-16 lg:py-20 border-t border-border bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ Accordion Item ── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden transition-all duration-200 hover:border-primary/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-surface hover:bg-surface-elevated transition-colors"
      >
        <span className="text-sm font-semibold text-foreground/80 pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-foreground/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48" : "max-h-0"}`}
      >
        <div className="px-6 pb-4 pt-1 text-sm text-foreground/50 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

/* ── Course card data ── */
const COURSES = [
  {
    logo: "/logos/python-logo.svg",
    title: "Python",
    level: "Beginner",
    lessons: 24,
    desc: "Learn Python from scratch — variables, loops, functions, and real projects.",
    slug: "python",
    bg: "bg-[#306998]/5 dark:bg-[#306998]/10",
    border: "hover:border-[#306998]/40",
  },
  {
    logo: "/logos/word-logo.svg",
    title: "Microsoft Word",
    level: "Beginner",
    lessons: 10,
    desc: "Create professional documents — formatting, tables, headers, and page layouts.",
    slug: "word",
    bg: "bg-[#185ABD]/5 dark:bg-[#185ABD]/10",
    border: "hover:border-[#185ABD]/40",
  },
  {
    logo: "/logos/excel-logo.svg",
    title: "Microsoft Excel",
    level: "Beginner",
    lessons: 12,
    desc: "Master spreadsheets — formulas, charts, data analysis, and pivot tables.",
    slug: "excel",
    bg: "bg-[#107C41]/5 dark:bg-[#107C41]/10",
    border: "hover:border-[#107C41]/40",
  },
  {
    logo: "/logos/powerpoint-logo.svg",
    title: "PowerPoint",
    level: "Beginner",
    lessons: 8,
    desc: "Design impactful presentations — slides, animations, and visual storytelling.",
    slug: "powerpoint",
    bg: "bg-[#C43E1C]/5 dark:bg-[#C43E1C]/10",
    border: "hover:border-[#C43E1C]/40",
  },
];

/* ── How-it-works steps ── */
const STEPS = [
  {
    number: "01",
    title: "Choose a Course",
    desc: "Pick from our growing library of guided courses tailored for African learners.",
  },
  {
    number: "02",
    title: "Read & Practice",
    desc: "Follow step-by-step instructions while working in the live sandbox environment.",
  },
  {
    number: "03",
    title: "Get Instant Feedback",
    desc: "Click Verify and our AI checks your work, highlights errors, and suggests fixes.",
  },
  {
    number: "04",
    title: "Master & Progress",
    desc: "Complete lessons, earn badges, and advance to more challenging material at your pace.",
  },
];

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen pt-16">
      {/* ════════════════════════════════════
          HERO SECTION
         ════════════════════════════════════ */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-1 bg-primary rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Learn-by-Doing Platform</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.92] mb-6">
                {t("hero_title")}
                <br />
                <span className="text-primary">{t("hero_highlight")}</span>
              </h1>

              <p className="text-lg text-foreground/50 max-w-lg leading-relaxed mb-10">{t("hero_description")}</p>

              <div className="flex flex-wrap gap-4">
                <Link href="/workspace?course=python" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/25">
                  {t("get_started")}
                </Link>
                <a href="#courses" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-border font-bold text-sm text-foreground/70 hover:border-primary/40 hover:text-primary transition-all duration-300">
                  Browse Courses
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Logo3D className="w-full h-[380px] lg:h-[460px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          ANIMATED STATS
         ════════════════════════════════════ */}
      <StatsCounter />

      {/* ════════════════════════════════════
          OUR COURSES
         ════════════════════════════════════ */}
      <section id="courses" className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Explore</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">Our Courses</h2>
            <p className="text-foreground/50 max-w-xl mx-auto leading-relaxed">Practical, project-based courses designed for real-world skills. Start from zero and build your way up.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {COURSES.map((course, i) => (
              <Link
                key={i}
                href={`/workspace?course=${course.slug}`}
                className={`group relative flex items-start gap-5 p-6 rounded-2xl ${course.bg} border border-border ${course.border} hover:shadow-xl hover:shadow-black/5 transition-all duration-300 hover:-translate-y-0.5`}
              >
                {/* Logo */}
                <div className="shrink-0 mt-0.5">
                  <Image src={course.logo} alt={course.title} width={48} height={48} className="rounded-lg" />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-base">{course.title}</h3>
                    <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary">{course.level}</span>
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed mb-3">{course.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground/35">{course.lessons} lessons</span>
                    <span className="text-xs font-bold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Start learning <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          HOW IT WORKS
         ════════════════════════════════════ */}
      <section id="how-it-works" className="py-20 lg:py-28 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Process</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">How It Works</h2>
            <p className="text-foreground/50 max-w-xl mx-auto leading-relaxed">Four simple steps from beginner to confident practitioner.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-border to-transparent" />
                )}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-5">
                    <span className="text-xl font-black text-primary">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/50 leading-relaxed max-w-[240px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/workspace?course=python" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/25">
              Try It Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FAQ + CONTACT
         ════════════════════════════════════ */}
      <section id="contact" className="py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Support</span>
              <div className="w-8 h-0.5 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">Frequently Asked Questions</h2>
            <p className="text-foreground/50 max-w-xl mx-auto leading-relaxed">Got questions? We&apos;ve got answers. If you don&apos;t find what you need, reach out below.</p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto mb-16 space-y-3">
            <FAQItem question="Is Mwalimu free to use?" answer="Yes! All courses and the practice workspace are completely free. We believe quality education should be accessible to everyone." />
            <FAQItem question="Do I need to install anything?" answer="No installation needed. Mwalimu runs entirely in your browser. Just open the website, pick a course, and start learning immediately." />
            <FAQItem question="What courses are available?" answer="We currently offer Python programming, Microsoft Word, Excel, and PowerPoint. More courses are being added regularly." />
            <FAQItem question="Can I learn on my phone?" answer="Mwalimu works on tablets and desktops. For the best experience with the practice workspace, we recommend using a laptop or desktop computer." />
            <FAQItem question="How does the feedback system work?" answer="After completing an exercise, click 'Verify My Work' and our AI-powered system checks your work instantly, highlights errors, and suggests improvements." />
            <FAQItem question="Is there a certificate after completion?" answer="We are working on adding certificates and badges for course completion. This feature will be available soon!" />
          </div>

          {/* Contact bar */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-surface border border-border p-8 sm:p-10">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-sm text-foreground/50">Our team is here to help. Reach out through any of these channels.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-1">Email</p>
                <a href="mailto:support@mwalimu.app" className="text-sm text-primary hover:underline font-medium">support@mwalimu.app</a>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-1">Phone</p>
                <span className="text-sm text-foreground/60 font-medium">+243 81 000 0000</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-1">Location</p>
                <span className="text-sm text-foreground/60 font-medium">Kinshasa, DRC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FOOTER
         ════════════════════════════════════ */}
      <footer className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand col */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <LogoSVG size={24} />
                <span className="text-base font-extrabold tracking-tighter bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Mwalimu</span>
              </div>
              <p className="text-sm text-foreground/40 leading-relaxed">An iterative learn-by-doing platform. Master programming and digital skills through guided practice.</p>
            </div>

            {/* Courses col */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-4">Courses</h4>
              <ul className="space-y-2.5">
                {["Python", "Microsoft Word", "Microsoft Excel", "PowerPoint"].map((c, i) => (
                  <li key={i}>
                    <Link href={`/workspace?course=${["python","word","excel","powerpoint"][i]}`} className="text-sm text-foreground/50 hover:text-primary transition-colors">{c}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform col */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-4">Platform</h4>
              <ul className="space-y-2.5">
                <li><a href="#home" className="text-sm text-foreground/50 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#courses" className="text-sm text-foreground/50 hover:text-primary transition-colors">Browse Courses</a></li>
                <li><a href="#how-it-works" className="text-sm text-foreground/50 hover:text-primary transition-colors">How It Works</a></li>
                <li><Link href="/workspace?course=python" className="text-sm text-foreground/50 hover:text-primary transition-colors">Workspace</Link></li>
              </ul>
            </div>

            {/* Support col */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-4">Support</h4>
              <ul className="space-y-2.5">
                <li><a href="mailto:support@mwalimu.app" className="text-sm text-foreground/50 hover:text-primary transition-colors">support@mwalimu.app</a></li>
                <li><span className="text-sm text-foreground/50">+243 81 000 0000</span></li>
                <li><span className="text-sm text-foreground/50">Kinshasa, DRC</span></li>
              </ul>
              <div className="mt-5">
                <h4 className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-2">Having issues?</h4>
                <p className="text-xs text-foreground/40 leading-relaxed">Reach out to our support team via email and we&apos;ll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-foreground/30">&copy; 2026 Mwalimu. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
