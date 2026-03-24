"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, BookOpen, Settings, LogOut } from "lucide-react";
import LogoSVG from "@/components/logo/LogoSVG";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Manage Users", href: "/admin/users", icon: Users },
    { name: "Manage Courses", href: "/admin/courses", icon: BookOpen },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <LogoSVG size={28} color="#818cf8" />
            <span className="text-xl font-extrabold tracking-tight">Admin<span className="text-indigo-400">Panel</span></span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm ${isActive ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link 
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm text-slate-400 hover:text-white hover:bg-white/5"
          >
            <LogOut size={18} />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <h1 className="text-xl font-bold text-slate-800">Admin Workspace</h1>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
               A
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}