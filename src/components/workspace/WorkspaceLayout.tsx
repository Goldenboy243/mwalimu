"use client";

import React from "react";
import InstructionPanel from "./InstructionPanel";
import PracticeSandbox from "./PracticeSandbox";
import FeedbackConsole from "./FeedbackConsole";

/* Courses that use the full-screen environment (no instructions panel) */
const FULL_SCREEN_COURSES = new Set(["word", "excel", "powerpoint"]);

interface WorkspaceLayoutProps {
  course: string;
}

export default function WorkspaceLayout({ course }: WorkspaceLayoutProps) {
  const isFullScreen = FULL_SCREEN_COURSES.has(course);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] mt-16">
      {/* Top row: Instructions + Sandbox */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Instruction Panel (only for coding courses) */}
        {!isFullScreen && (
          <div className="w-80 xl:w-96 shrink-0 hidden md:flex">
            <InstructionPanel course={course} />
          </div>
        )}

        {/* Center: Practice Sandbox / Environment */}
        <div className="flex-1 min-w-0">
          <PracticeSandbox course={course} />
        </div>
      </div>

      {/* Bottom: Feedback Console */}
      <div className="h-48 lg:h-56 shrink-0">
        <FeedbackConsole />
      </div>
    </div>
  );
}
