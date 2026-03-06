"use client";

import React from "react";
import dynamic from "next/dynamic";

/* Lazy-load each environment */
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full text-sm text-foreground/40">Loading editor...</div>,
});

const WordEnvironment = dynamic(() => import("./WordEnvironment"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full text-sm text-foreground/40">Loading Word...</div>,
});

const ExcelEnvironment = dynamic(() => import("./ExcelEnvironment"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full text-sm text-foreground/40">Loading Excel...</div>,
});

const PowerPointEnvironment = dynamic(() => import("./PowerPointEnvironment"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full text-sm text-foreground/40">Loading PowerPoint...</div>,
});

/* ── Default code for Python ── */
const DEFAULT_PYTHON = `# Write your solution below
def greet(name):
    """Return a greeting string."""
    return f"Hello, {name}!"


# Test it
print(greet("Mwalimu"))
`;

interface PracticeSandboxProps {
  course: string;
}

export default function PracticeSandbox({ course }: PracticeSandboxProps) {
  /* Route to the correct environment */
  switch (course) {
    case "word":
      return <WordEnvironment />;
    case "excel":
      return <ExcelEnvironment />;
    case "powerpoint":
      return <PowerPointEnvironment />;
    case "python":
    default:
      return (
        <div className="flex flex-col h-full">
          {/* Language label */}
          <div className="flex items-center px-4 py-2 bg-surface border-b border-border">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg">
              Python
            </span>
          </div>

          <div className="flex-1 min-h-0">
            <MonacoEditor
              height="100%"
              defaultLanguage="python"
              defaultValue={DEFAULT_PYTHON}
              theme="vs-dark"
              options={{
                fontSize: 14,
                fontFamily: "'Geist Mono', 'Fira Code', monospace",
                minimap: { enabled: false },
                padding: { top: 16, bottom: 16 },
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
        </div>
      );
  }
}
