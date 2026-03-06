"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import WorkspaceLayout from "@/components/workspace/WorkspaceLayout";

function WorkspaceInner() {
  const searchParams = useSearchParams();
  const course = searchParams.get("course") ?? "python";

  return <WorkspaceLayout course={course} />;
}

export default function WorkspacePage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-foreground/40">Loading workspace...</div>}>
      <WorkspaceInner />
    </Suspense>
  );
}
