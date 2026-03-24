"use client";

import React, { useState } from "react";
import { User, Mail, Book, Settings, Shield, Bell, LogOut, Camera } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6 flex flex-col items-center text-center">
            <div className="relative mb-4 group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 overflow-hidden">
                <User size={40} />
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="text-white" size={24} />
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Alex Student</h2>
            <p className="text-sm text-slate-500 mb-4">alex@example.com</p>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Pro Member</span>
          </div>

          <nav className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab("personal")}
              className={`flex items-center gap-3 w-full p-3 rounded-xl text-left text-sm font-semibold transition-all ${activeTab === "personal" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <User size={18} /> Personal Info
            </button>
            <button 
              onClick={() => setActiveTab("learning")}
              className={`flex items-center gap-3 w-full p-3 rounded-xl text-left text-sm font-semibold transition-all ${activeTab === "learning" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <Book size={18} /> My Learning
            </button>
            <button 
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-3 w-full p-3 rounded-xl text-left text-sm font-semibold transition-all ${activeTab === "security" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <Shield size={18} /> Security
            </button>
            <button 
              onClick={() => setActiveTab("notifications")}
              className={`flex items-center gap-3 w-full p-3 rounded-xl text-left text-sm font-semibold transition-all ${activeTab === "notifications" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"}`}
            >
              <Bell size={18} /> Notifications
            </button>
            <div className="h-px bg-slate-100 my-2"></div>
            <Link 
              href="/"
              className="flex items-center gap-3 w-full p-3 rounded-xl text-left text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-all"
            >
              <LogOut size={18} /> Sign Out
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            {activeTab === "personal" && (
              <div className="animate-fade-in-up">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Personal Information</h2>
                <form className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input type="text" defaultValue="Alex" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input type="text" defaultValue="Student" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" defaultValue="alex@example.com" disabled className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed outline-none" />
                    <p className="text-xs text-slate-500 mt-2">Email changes require verification.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Bio</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="Tell us about yourself..."></textarea>
                  </div>
                  <div className="pt-4">
                    <button type="button" className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "learning" && (
              <div className="animate-fade-in-up">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">My Enrolled Courses</h2>
                <div className="space-y-4">
                  {[
                    { title: "Python for Beginners", progress: 75, color: "bg-yellow-500" },
                    { title: "Microsoft Excel Wizardry", progress: 30, color: "bg-emerald-500" },
                  ].map((course, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-slate-100 rounded-xl hover:shadow-md transition-all">
                      <div className="mb-4 sm:mb-0">
                        <h4 className="font-bold text-slate-900">{course.title}</h4>
                        <p className="text-sm text-slate-500 mt-1">{course.progress}% Completed</p>
                      </div>
                      <div className="w-full sm:w-1/2 flex items-center gap-4">
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${course.color}`} style={{ width: `${course.progress}%` }}></div>
                        </div>
                        <button className="px-4 py-2 border border-slate-200 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors">
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Other tabs would go here */}
            {(activeTab === "security" || activeTab === "notifications") && (
              <div className="py-12 text-center text-slate-500">
                <Settings className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-bold text-slate-700">Settings Section</h3>
                <p>Placeholder for {activeTab} settings.</p>
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}