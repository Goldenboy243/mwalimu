"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Save,
  Undo2,
  Redo2,
  Printer,
  Plus,
  Trash2,
  Square,
  Circle,
  Type,
  Image,
  Minus,
  ChevronDown,
} from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
}

export default function PowerPointEnvironment() {
  const [activeTab, setActiveTab] = useState("home");
  const [slides, setSlides] = useState<Slide[]>([
    { id: 1, title: "Click to add title", subtitle: "Click to add subtitle" },
  ]);
  const [activeSlide, setActiveSlide] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  const RIBBON_TABS = [
    { id: "home", label: "Home" },
    { id: "insert", label: "Insert" },
    { id: "design", label: "Design" },
    { id: "transitions", label: "Transitions" },
    { id: "animations", label: "Animations" },
    { id: "slideshow", label: "Slide Show" },
  ];

  const addSlide = () => {
    const newSlide: Slide = {
      id: Date.now(),
      title: "Click to add title",
      subtitle: "Click to add subtitle",
    };
    setSlides((prev) => [...prev, newSlide]);
    setActiveSlide(slides.length);
  };

  const deleteSlide = (index: number) => {
    if (slides.length <= 1) return;
    setSlides((prev) => prev.filter((_, i) => i !== index));
    setActiveSlide(Math.max(0, index - 1));
  };

  const updateSlide = (index: number, field: "title" | "subtitle", value: string) => {
    setSlides((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)),
    );
  };

  /* Design themes */
  const themes = [
    { name: "White", bg: "bg-white", text: "text-slate-800" },
    { name: "Dark", bg: "bg-[#1e1e2e]", text: "text-white" },
    { name: "Blue", bg: "bg-[#0B2545]", text: "text-white" },
    { name: "Green", bg: "bg-[#1B4332]", text: "text-white" },
    { name: "Red", bg: "bg-[#641220]", text: "text-white" },
  ];
  const [activeTheme, setActiveTheme] = useState(0);
  const theme = themes[activeTheme];

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-[#1e1e2e]">
      {/* ── Title bar ── */}
      <div className="flex items-center gap-3 px-4 py-1.5 bg-[#C43E1C] text-white">
        <div className="flex items-center gap-2">
          <Save size={13} className="opacity-70" />
          <Undo2 size={13} className="opacity-70" />
          <Redo2 size={13} className="opacity-70" />
        </div>
        <span className="flex-1 text-center text-xs font-medium opacity-90">Presentation1 — Mwalimu PowerPoint</span>
        <Printer size={13} className="opacity-70" />
      </div>

      {/* ── Ribbon tabs ── */}
      <div className="flex items-end gap-0.5 px-2 pt-1 bg-white dark:bg-[#2d2d3f] border-b border-slate-200 dark:border-slate-700">
        {RIBBON_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-t-md transition-colors ${activeTab === tab.id ? "bg-[#f3f3f3] dark:bg-[#1e1e2e] text-[#C43E1C] border-t-2 border-x border-[#C43E1C] border-x-slate-200 dark:border-x-slate-700" : "text-foreground/50 hover:text-foreground/80 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Ribbon toolbar ── */}
      <div className="bg-white dark:bg-[#2d2d3f] border-b border-slate-200 dark:border-slate-700 px-3 py-1.5">
        {activeTab === "home" && (
          <div className="flex items-center gap-1">
            <button onClick={addSlide} className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#C43E1C] bg-[#C43E1C]/10 rounded hover:bg-[#C43E1C]/20 transition-colors">
              <Plus size={13} /> New Slide
            </button>
            <div className="w-px h-7 bg-slate-200 dark:bg-slate-700 mx-1" />
            <select className="h-7 px-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-foreground/80 w-24">
              {["Calibri", "Arial", "Impact", "Georgia"].map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
            <div className="flex items-center border border-slate-200 dark:border-slate-600 rounded overflow-hidden ml-1">
              <input type="number" defaultValue={24} className="h-7 w-10 text-center text-xs bg-white dark:bg-slate-800 text-foreground/80 border-none outline-none" />
              <ChevronDown size={12} className="text-foreground/40 mr-1" />
            </div>
          </div>
        )}

        {activeTab === "insert" && (
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><Type size={14} /> Text Box</button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><Image size={14} /> Picture</button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><Square size={14} /> Shape</button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><Circle size={14} /> Oval</button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><Minus size={14} /> Line</button>
          </div>
        )}

        {activeTab === "design" && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-foreground/50 mr-2">Themes:</span>
            {themes.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveTheme(i)}
                className={`w-12 h-8 rounded border-2 transition-all ${t.bg} ${i === activeTheme ? "border-[#C43E1C] shadow-md" : "border-slate-300 dark:border-slate-600 hover:border-slate-400"}`}
                title={t.name}
              >
                <span className={`text-[7px] font-bold ${t.text}`}>Aa</span>
              </button>
            ))}
          </div>
        )}

        {(activeTab === "transitions" || activeTab === "animations" || activeTab === "slideshow") && (
          <div className="flex items-center gap-2 px-2">
            <span className="text-xs text-foreground/40 italic">Coming soon — available in future lessons</span>
          </div>
        )}
      </div>

      {/* ── Main area ── */}
      <div className="flex flex-1 min-h-0">
        {/* Slide panel (left) */}
        <div className="w-48 shrink-0 bg-[#e8e8e8] dark:bg-[#2a2a3c] border-r border-slate-300 dark:border-slate-600 overflow-y-auto py-2 px-2 space-y-2">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              onClick={() => setActiveSlide(i)}
              className={`group relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${i === activeSlide ? "border-[#C43E1C] shadow-md" : "border-transparent hover:border-slate-400"}`}
            >
              {/* Thumbnail */}
              <div className={`aspect-[16/9] ${theme.bg} flex flex-col items-center justify-center p-2`}>
                <p className={`text-[6px] font-bold ${theme.text} truncate w-full text-center`}>{slide.title}</p>
                <p className={`text-[5px] ${theme.text} opacity-60 truncate w-full text-center`}>{slide.subtitle}</p>
              </div>
              {/* Slide number */}
              <div className="absolute bottom-0.5 left-1 text-[8px] text-foreground/30 font-semibold">{i + 1}</div>
              {/* Delete button */}
              {slides.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); deleteSlide(i); }}
                  className="absolute top-0.5 right-0.5 p-0.5 rounded bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={8} />
                </button>
              )}
            </div>
          ))}

          <button onClick={addSlide} className="w-full aspect-[16/9] rounded-lg border-2 border-dashed border-slate-400/50 flex items-center justify-center text-slate-400 hover:border-[#C43E1C] hover:text-[#C43E1C] transition-colors">
            <Plus size={16} />
          </button>
        </div>

        {/* Slide editor (center) */}
        <div className="flex-1 overflow-auto flex items-center justify-center bg-[#d4d4d4] dark:bg-[#151520] p-8">
          <div className={`w-full max-w-[960px] aspect-[16/9] ${theme.bg} rounded-lg shadow-2xl shadow-black/20 flex flex-col items-center justify-center p-12 relative`}>
            {/* Title */}
            <div
              ref={titleRef}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateSlide(activeSlide, "title", e.currentTarget.textContent ?? "")}
              className={`text-3xl sm:text-4xl font-bold text-center outline-none border-2 border-transparent hover:border-dashed hover:border-slate-400/50 focus:border-[#C43E1C] px-6 py-2 rounded transition-colors w-full max-w-2xl ${theme.text}`}
            >
              {slides[activeSlide]?.title}
            </div>

            {/* Subtitle */}
            <div
              ref={subtitleRef}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateSlide(activeSlide, "subtitle", e.currentTarget.textContent ?? "")}
              className={`text-lg sm:text-xl text-center outline-none border-2 border-transparent hover:border-dashed hover:border-slate-400/50 focus:border-[#C43E1C] px-6 py-2 rounded transition-colors w-full max-w-xl mt-4 ${theme.text} opacity-60`}
            >
              {slides[activeSlide]?.subtitle}
            </div>
          </div>
        </div>
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#C43E1C] text-white/70 text-[10px]">
        <span>Slide {activeSlide + 1} of {slides.length}</span>
        <span>Click on a slide to edit</span>
        <span>Mwalimu PowerPoint</span>
      </div>
    </div>
  );
}
