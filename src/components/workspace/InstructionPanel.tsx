"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";

/* ── Course-specific instructions ── */
const COURSE_INSTRUCTIONS: Record<string, { title: string; content: string }> = {
  python: {
    title: "Getting Started with Python",
    content: `Welcome to your first lesson! In this exercise, you will learn to write a simple Python function.

### Objective
Write a function called \`greet\` that takes a **name** parameter and returns a greeting string.

### Example
\`\`\`python
def greet(name):
    return f"Hello, {name}!"
\`\`\`

### Steps
1. Define the function with \`def\`
2. Use an f-string for the return value
3. Click **Verify My Work** when ready`,
  },
};

interface InstructionPanelProps {
  course: string;
}

export default function InstructionPanel({ course }: InstructionPanelProps) {
  const { t } = useTranslation();

  const instructions = COURSE_INSTRUCTIONS[course] ?? COURSE_INSTRUCTIONS.python;

  return (
    <aside className="flex flex-col h-full bg-surface border-r border-border">
      {/* Panel header */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
        <BookOpen size={16} className="text-primary" />
        <h2 className="text-sm font-bold tracking-tight">{t("instructions")}</h2>
      </div>

      {/* Markdown content */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="markdown-body text-sm text-foreground/80">
          <ReactMarkdown>{`## ${instructions.title}\n\n${instructions.content}`}</ReactMarkdown>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="px-5 py-3 border-t border-border">
        <div className="flex items-center justify-between text-xs text-foreground/50 mb-1.5">
          <span>Lesson 1 of 12</span>
          <span>8%</span>
        </div>
        <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: "8%" }}
          />
        </div>
      </div>
    </aside>
  );
}
