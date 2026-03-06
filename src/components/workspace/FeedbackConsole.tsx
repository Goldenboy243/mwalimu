"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sparkles, Terminal, CheckCircle2, XCircle, Loader2 } from "lucide-react";

type Status = "idle" | "checking" | "success" | "error";

export default function FeedbackConsole() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [output, setOutput] = useState<string[]>([]);

  const handleVerify = () => {
    setStatus("checking");
    setOutput(["🔍 Analyzing your code..."]);

    // Simulated verification flow
    setTimeout(() => {
      setOutput((prev) => [...prev, "📦 Running test cases..."]);
    }, 800);

    setTimeout(() => {
      setOutput((prev) => [
        ...prev,
        '✅ Test 1: greet("World") → "Hello, World!" — PASSED',
        '✅ Test 2: greet("Mwalimu") → "Hello, Mwalimu!" — PASSED',
        "",
        "🎉 All tests passed! Great work!",
      ]);
      setStatus("success");
    }, 2200);
  };

  const statusIcon = {
    idle: null,
    checking: <Loader2 size={14} className="animate-spin" />,
    success: <CheckCircle2 size={14} className="text-emerald-500" />,
    error: <XCircle size={14} className="text-red-500" />,
  };

  return (
    <div className="flex flex-col h-full bg-surface border-t border-border">
      {/* Console header */}
      <div className="flex items-center justify-between px-5 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-foreground/40" />
          <span className="text-xs font-bold text-foreground/60">
            {t("feedback")}
          </span>
          {statusIcon[status]}
        </div>

        {/* ── Verify Button with Bloom Glow ── */}
        <button
          onClick={handleVerify}
          disabled={status === "checking"}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25 ${status === "idle" || status === "success" || status === "error" ? "bloom-glow" : ""}`}
        >
          <Sparkles size={14} />
          {status === "checking" ? (
            <span className="flex items-center gap-2">
              <Loader2 size={14} className="animate-spin" />
              Checking...
            </span>
          ) : (
            t("verify")
          )}
        </button>
      </div>

      {/* Console output */}
      <div className="flex-1 overflow-y-auto px-5 py-3 font-mono text-xs leading-relaxed">
        {output.length === 0 ? (
          <p className="text-foreground/30 italic">
            {t("console_placeholder")}
          </p>
        ) : (
          output.map((line, i) => (
            <div
              key={i}
              className={`py-0.5 ${
                line.includes("PASSED")
                  ? "text-emerald-500"
                  : line.includes("FAILED")
                  ? "text-red-500"
                  : "text-foreground/70"
              }`}
            >
              {line || "\u00A0"}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
