"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Table,
  Image,
  Minus,
  Undo2,
  Redo2,
  Printer,
  Save,
  ChevronDown,
} from "lucide-react";

/* ── Ribbon Tab ── */
const TABS = [
  { id: "home", label: "Home" },
  { id: "insert", label: "Insert" },
  { id: "layout", label: "Layout" },
  { id: "view", label: "View" },
];

function RibbonButton({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.FC<{ size?: number }>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`p-1.5 rounded transition-colors ${active ? "bg-blue-100 dark:bg-blue-900/40 text-[#185ABD]" : "text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground"}`}
    >
      <Icon size={15} />
    </button>
  );
}

function RibbonSeparator() {
  return <div className="w-px h-7 bg-slate-200 dark:bg-slate-700 mx-1" />;
}

export default function WordEnvironment() {
  const [activeTab, setActiveTab] = useState("home");
  const [fontSize, setFontSize] = useState(11);
  const [fontFamily, setFontFamily] = useState("Calibri");
  const editorRef = useRef<HTMLDivElement>(null);

  /* Focus the editor on mount */
  useEffect(() => {
    editorRef.current?.focus();
  }, []);

  const execCommand = (cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
    editorRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-[#1e1e2e]">
      {/* ── Title bar ── */}
      <div className="flex items-center gap-3 px-4 py-1.5 bg-[#185ABD] text-white">
        <div className="flex items-center gap-2">
          <Save size={13} className="opacity-70" />
          <Undo2 size={13} className="opacity-70" />
          <Redo2 size={13} className="opacity-70" />
        </div>
        <span className="flex-1 text-center text-xs font-medium opacity-90">Document1 — Mwalimu Word</span>
        <Printer size={13} className="opacity-70" />
      </div>

      {/* ── Ribbon tabs ── */}
      <div className="flex items-end gap-0.5 px-2 pt-1 bg-white dark:bg-[#2d2d3f] border-b border-slate-200 dark:border-slate-700">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t-md transition-colors ${activeTab === tab.id ? "bg-[#f3f3f3] dark:bg-[#1e1e2e] text-[#185ABD] border-t-2 border-x border-[#185ABD] border-x-slate-200 dark:border-x-slate-700" : "text-foreground/50 hover:text-foreground/80 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Ribbon toolbar ── */}
      <div className="bg-white dark:bg-[#2d2d3f] border-b border-slate-200 dark:border-slate-700 px-3 py-1.5">
        {activeTab === "home" && (
          <div className="flex items-center gap-0.5 flex-wrap">
            {/* Font family + size */}
            <div className="flex items-center gap-1 mr-1">
              <select
                value={fontFamily}
                onChange={(e) => {
                  setFontFamily(e.target.value);
                  execCommand("fontName", e.target.value);
                }}
                className="h-7 px-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-foreground/80 w-28"
              >
                {["Calibri", "Arial", "Times New Roman", "Georgia", "Verdana", "Courier New"].map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
              <div className="flex items-center border border-slate-200 dark:border-slate-600 rounded overflow-hidden">
                <input
                  type="number"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="h-7 w-10 text-center text-xs bg-white dark:bg-slate-800 text-foreground/80 border-none outline-none"
                />
                <ChevronDown size={12} className="text-foreground/40 mr-1" />
              </div>
            </div>

            <RibbonSeparator />

            {/* Format buttons */}
            <RibbonButton icon={Bold} label="Bold" onClick={() => execCommand("bold")} />
            <RibbonButton icon={Italic} label="Italic" onClick={() => execCommand("italic")} />
            <RibbonButton icon={Underline} label="Underline" onClick={() => execCommand("underline")} />

            <RibbonSeparator />

            {/* Alignment */}
            <RibbonButton icon={AlignLeft} label="Align Left" onClick={() => execCommand("justifyLeft")} />
            <RibbonButton icon={AlignCenter} label="Center" onClick={() => execCommand("justifyCenter")} />
            <RibbonButton icon={AlignRight} label="Align Right" onClick={() => execCommand("justifyRight")} />
            <RibbonButton icon={AlignJustify} label="Justify" onClick={() => execCommand("justifyFull")} />

            <RibbonSeparator />

            {/* Lists */}
            <RibbonButton icon={List} label="Bullet List" onClick={() => execCommand("insertUnorderedList")} />
            <RibbonButton icon={ListOrdered} label="Numbered List" onClick={() => execCommand("insertOrderedList")} />
          </div>
        )}

        {activeTab === "insert" && (
          <div className="flex items-center gap-0.5">
            <RibbonButton icon={Table} label="Table" />
            <RibbonButton icon={Image} label="Picture" />
            <RibbonButton icon={Minus} label="Horizontal Line" onClick={() => execCommand("insertHorizontalRule")} />
          </div>
        )}

        {activeTab === "layout" && (
          <div className="flex items-center gap-3 px-2">
            <div className="text-xs text-foreground/50">
              <span className="font-semibold text-foreground/70">Margins:</span> Normal (1&quot; all sides)
            </div>
            <div className="text-xs text-foreground/50">
              <span className="font-semibold text-foreground/70">Orientation:</span> Portrait
            </div>
            <div className="text-xs text-foreground/50">
              <span className="font-semibold text-foreground/70">Size:</span> Letter
            </div>
          </div>
        )}

        {activeTab === "view" && (
          <div className="flex items-center gap-3 px-2">
            <span className="text-xs text-foreground/50 font-semibold">Print Layout</span>
            <span className="text-xs text-foreground/30">|</span>
            <span className="text-xs text-foreground/30">Web Layout</span>
            <span className="text-xs text-foreground/30">|</span>
            <span className="text-xs text-foreground/30">Read Mode</span>
          </div>
        )}
      </div>

      {/* ── Ruler ── */}
      <div className="h-5 bg-white dark:bg-[#2d2d3f] border-b border-slate-200 dark:border-slate-700 flex items-center px-20">
        {Array.from({ length: 17 }).map((_, i) => (
          <div key={i} className="flex-1 flex items-end justify-center">
            <div className="text-[8px] text-foreground/25 leading-none">{i + 1}</div>
          </div>
        ))}
      </div>

      {/* ── Document area ── */}
      <div className="flex-1 overflow-auto flex justify-center py-6 px-4">
        <div className="bg-white dark:bg-[#1a1a2e] w-full max-w-[816px] min-h-[1056px] shadow-xl shadow-black/10 dark:shadow-black/40 border border-slate-200 dark:border-slate-700">
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            className="w-full min-h-full px-20 py-16 text-sm leading-7 text-foreground/80 outline-none"
            style={{ fontFamily, fontSize: `${fontSize}pt` }}
          >
            <p className="text-foreground/25 italic">Start typing your document here...</p>
          </div>
        </div>
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#185ABD] text-white/70 text-[10px]">
        <span>Page 1 of 1</span>
        <span>Words: 0</span>
        <span>English (United States)</span>
      </div>
    </div>
  );
}
