"use client";

import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-sm text-foreground/40">Loading editor...</div>
  ),
});

const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #f0f4f8;
    }
    .card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.1);
      text-align: center;
    }
    h1 { color: #1e293b; }
    p  { color: #64748b; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, World!</h1>
    <p>Edit this code and see the preview update.</p>
  </div>

  <script>
    console.log("Page loaded!");
  </script>
</body>
</html>`;

export default function WebDevEnvironment() {
  const [activeFile, setActiveFile] = useState<"html" | "preview">("html");
  const [code, setCode] = useState(DEFAULT_HTML);
  const [showSplit, setShowSplit] = useState(true);

  const handleCodeChange = useCallback((value: string | undefined) => {
    setCode(value ?? "");
  }, []);

  const previewSrc = `data:text/html;charset=utf-8,${encodeURIComponent(code)}`;

  return (
    <div className="flex flex-col h-full bg-[#1e1e2e]">
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#2d2d3f] border-b border-slate-700">
        <div className="flex items-center gap-1">
          {/* File tabs */}
          <button
            onClick={() => { setActiveFile("html"); setShowSplit(true); }}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-colors ${activeFile === "html" ? "bg-[#1e1e2e] text-[#E06C75] border border-slate-600" : "text-slate-400 hover:text-slate-200"}`}
          >
            <span className="text-[#E06C75]">&lt;/&gt;</span> index.html
          </button>
          <button
            onClick={() => { setActiveFile("preview"); setShowSplit(false); }}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded transition-colors ${activeFile === "preview" ? "bg-[#1e1e2e] text-[#98C379] border border-slate-600" : "text-slate-400 hover:text-slate-200"}`}
          >
            Preview
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSplit(!showSplit)}
            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white border border-slate-600 rounded transition-colors"
          >
            {showSplit ? "Full Editor" : "Split View"}
          </button>
        </div>
      </div>

      {/* ── Editor + Preview ── */}
      <div className="flex-1 flex min-h-0">
        {/* Code editor */}
        {(activeFile === "html" || showSplit) && (
          <div className={`${showSplit ? "w-1/2" : "flex-1"} min-h-0 border-r border-slate-700`}>
            <MonacoEditor
              height="100%"
              defaultLanguage="html"
              value={code}
              onChange={handleCodeChange}
              theme="vs-dark"
              options={{
                fontSize: 14,
                fontFamily: "'Geist Mono', 'Fira Code', monospace",
                minimap: { enabled: false },
                padding: { top: 12, bottom: 12 },
                lineNumbers: "on",
                renderLineHighlight: "gutter",
                scrollBeyondLastLine: false,
                wordWrap: "on",
                bracketPairColorization: { enabled: true },
                smoothScrolling: true,
                cursorBlinking: "smooth",
                cursorSmoothCaretAnimation: "on",
              }}
            />
          </div>
        )}

        {/* Live preview */}
        {(activeFile === "preview" || showSplit) && (
          <div className={`${showSplit ? "w-1/2" : "flex-1"} min-h-0 bg-white`}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f1f5f9] border-b border-slate-200">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded px-3 py-0.5 text-[10px] text-slate-400 border border-slate-200">
                localhost:3000/preview
              </div>
            </div>
            <iframe
              srcDoc={code}
              title="Preview"
              className="w-full h-[calc(100%-32px)] border-none"
              sandbox="allow-scripts"
            />
          </div>
        )}
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#007ACC] text-white/70 text-[10px]">
        <span>HTML</span>
        <span>UTF-8</span>
        <span>Mwalimu Web IDE</span>
      </div>
    </div>
  );
}
