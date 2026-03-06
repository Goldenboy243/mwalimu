"use client";

import React, { useState, useCallback } from "react";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Save,
  Undo2,
  Redo2,
  Printer,
  ChevronDown,
} from "lucide-react";

/* ── Helpers ── */
const COLS = 26; // A-Z
const ROWS = 50;
const colLabel = (i: number) => String.fromCharCode(65 + i);

type CellData = Record<string, string>;

export default function ExcelEnvironment() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeCell, setActiveCell] = useState("A1");
  const [cells, setCells] = useState<CellData>({});
  const [editingCell, setEditingCell] = useState<string | null>(null);
  const [sheetTabs] = useState(["Sheet1", "Sheet2", "Sheet3"]);
  const [activeSheet, setActiveSheet] = useState("Sheet1");

  const cellKey = (col: number, row: number) => `${colLabel(col)}${row + 1}`;

  const handleCellChange = useCallback(
    (key: string, value: string) => {
      setCells((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  /* ── Simple formula evaluator ── */
  const evaluate = (raw: string): string => {
    if (!raw) return "";
    if (!raw.startsWith("=")) return raw;

    try {
      const expr = raw
        .slice(1)
        .replace(/\b([A-Z])(\d+)\b/g, (_, col, row) => {
          const ref = `${col}${row}`;
          return cells[ref] || "0";
        });
      // eslint-disable-next-line no-eval
      return String(eval(expr));
    } catch {
      return "#ERROR";
    }
  };

  const RIBBON_TABS = [
    { id: "home", label: "Home" },
    { id: "insert", label: "Insert" },
    { id: "formulas", label: "Formulas" },
    { id: "data", label: "Data" },
    { id: "view", label: "View" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f3f3f3] dark:bg-[#1e1e2e]">
      {/* ── Title bar ── */}
      <div className="flex items-center gap-3 px-4 py-1.5 bg-[#107C41] text-white">
        <div className="flex items-center gap-2">
          <Save size={13} className="opacity-70" />
          <Undo2 size={13} className="opacity-70" />
          <Redo2 size={13} className="opacity-70" />
        </div>
        <span className="flex-1 text-center text-xs font-medium opacity-90">Book1 — Mwalimu Excel</span>
        <Printer size={13} className="opacity-70" />
      </div>

      {/* ── Ribbon tabs ── */}
      <div className="flex items-end gap-0.5 px-2 pt-1 bg-white dark:bg-[#2d2d3f] border-b border-slate-200 dark:border-slate-700">
        {RIBBON_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-t-md transition-colors ${activeTab === tab.id ? "bg-[#f3f3f3] dark:bg-[#1e1e2e] text-[#107C41] border-t-2 border-x border-[#107C41] border-x-slate-200 dark:border-x-slate-700" : "text-foreground/50 hover:text-foreground/80 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Ribbon toolbar ── */}
      <div className="bg-white dark:bg-[#2d2d3f] border-b border-slate-200 dark:border-slate-700 px-3 py-1.5">
        <div className="flex items-center gap-0.5 flex-wrap">
          <select className="h-7 px-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded text-foreground/80 w-24">
            {["Calibri", "Arial", "Times New Roman"].map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
          <div className="flex items-center border border-slate-200 dark:border-slate-600 rounded overflow-hidden ml-1">
            <input type="number" defaultValue={11} className="h-7 w-10 text-center text-xs bg-white dark:bg-slate-800 text-foreground/80 border-none outline-none" />
            <ChevronDown size={12} className="text-foreground/40 mr-1" />
          </div>
          <div className="w-px h-7 bg-slate-200 dark:bg-slate-700 mx-1.5" />
          <button className="p-1.5 rounded text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800"><Bold size={15} /></button>
          <button className="p-1.5 rounded text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800"><Italic size={15} /></button>
          <button className="p-1.5 rounded text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800"><Underline size={15} /></button>
          <div className="w-px h-7 bg-slate-200 dark:bg-slate-700 mx-1.5" />
          <button className="p-1.5 rounded text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800"><AlignLeft size={15} /></button>
          <button className="p-1.5 rounded text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800"><AlignCenter size={15} /></button>
          <button className="p-1.5 rounded text-foreground/60 hover:bg-slate-100 dark:hover:bg-slate-800"><AlignRight size={15} /></button>
        </div>
      </div>

      {/* ── Formula bar ── */}
      <div className="flex items-center bg-white dark:bg-[#2d2d3f] border-b border-slate-200 dark:border-slate-700 px-1">
        <div className="w-16 shrink-0 text-center text-xs font-semibold text-foreground/70 border-r border-slate-200 dark:border-slate-700 py-1.5">
          {activeCell}
        </div>
        <div className="px-2 text-xs text-foreground/40 shrink-0">fx</div>
        <input
          type="text"
          value={cells[activeCell] ?? ""}
          onChange={(e) => handleCellChange(activeCell, e.target.value)}
          className="flex-1 h-7 px-2 text-xs bg-transparent text-foreground/80 outline-none"
          placeholder="Enter a value or formula (e.g. =A1+B1)"
        />
      </div>

      {/* ── Spreadsheet grid ── */}
      <div className="flex-1 overflow-auto">
        <table className="border-collapse w-full">
          <thead className="sticky top-0 z-10">
            <tr>
              {/* Row number header (top-left corner) */}
              <th className="w-10 min-w-[40px] h-6 bg-[#e8e8e8] dark:bg-[#2a2a3c] border border-slate-300 dark:border-slate-600 text-[10px] text-foreground/40" />
              {Array.from({ length: COLS }).map((_, ci) => (
                <th
                  key={ci}
                  className="min-w-[80px] h-6 bg-[#e8e8e8] dark:bg-[#2a2a3c] border border-slate-300 dark:border-slate-600 text-[10px] font-semibold text-foreground/50 select-none"
                >
                  {colLabel(ci)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: ROWS }).map((_, ri) => (
              <tr key={ri}>
                {/* Row number */}
                <td className="w-10 min-w-[40px] h-6 bg-[#e8e8e8] dark:bg-[#2a2a3c] border border-slate-300 dark:border-slate-600 text-[10px] text-center font-semibold text-foreground/50 select-none">
                  {ri + 1}
                </td>
                {Array.from({ length: COLS }).map((_, ci) => {
                  const key = cellKey(ci, ri);
                  const isActive = key === activeCell;
                  const isEditing = key === editingCell;

                  return (
                    <td
                      key={ci}
                      onClick={() => {
                        setActiveCell(key);
                        setEditingCell(null);
                      }}
                      onDoubleClick={() => setEditingCell(key)}
                      className={`min-w-[80px] h-6 border text-xs px-1 cursor-cell transition-colors ${isActive ? "border-[#107C41] border-2 bg-white dark:bg-[#1a1a2e]" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e1e2e]"}`}
                    >
                      {isEditing ? (
                        <input
                          autoFocus
                          value={cells[key] ?? ""}
                          onChange={(e) => handleCellChange(key, e.target.value)}
                          onBlur={() => setEditingCell(null)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === "Tab") {
                              e.preventDefault();
                              setEditingCell(null);
                              // Move down on Enter, right on Tab
                              if (e.key === "Enter") {
                                setActiveCell(cellKey(ci, Math.min(ri + 1, ROWS - 1)));
                              } else {
                                setActiveCell(cellKey(Math.min(ci + 1, COLS - 1), ri));
                              }
                            }
                          }}
                          className="w-full h-full text-xs bg-transparent outline-none text-foreground/80"
                        />
                      ) : (
                        <span className="text-foreground/70 truncate block">{evaluate(cells[key] ?? "")}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Sheet tabs ── */}
      <div className="flex items-center gap-0.5 px-2 py-1 bg-[#e8e8e8] dark:bg-[#2a2a3c] border-t border-slate-300 dark:border-slate-600">
        {sheetTabs.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSheet(s)}
            className={`px-4 py-1 text-[10px] font-semibold rounded-sm transition-colors ${activeSheet === s ? "bg-white dark:bg-[#1e1e2e] text-foreground/80 shadow-sm" : "text-foreground/40 hover:text-foreground/60"}`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#107C41] text-white/70 text-[10px]">
        <span>Ready</span>
        <span>Sum: 0 | Average: 0 | Count: 0</span>
      </div>
    </div>
  );
}
