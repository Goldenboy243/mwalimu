"use client";

import React from "react";
import { Users, BookOpen, Activity, ArrowUpRight } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "1,248", increase: "+12%", icon: Users, color: "text-indigo-600", bg: "bg-indigo-100" },
    { title: "Active Courses", value: "24", increase: "+3%", icon: BookOpen, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "Daily Active Users", value: "432", increase: "+8%", icon: Activity, color: "text-amber-600", bg: "bg-amber-100" },
  ];

  const recentUsers = [
    { id: 1, name: "Sarah Connor", email: "sarah@example.com", role: "Student", date: "Oct 24, 2026" },
    { id: 2, name: "John Doe", email: "john@example.com", role: "Student", date: "Oct 23, 2026" },
    { id: 3, name: "Emily Chen", email: "emily@example.com", role: "Instructor", date: "Oct 22, 2026" },
    { id: 4, name: "Marcus Johnson", email: "marcus@example.com", role: "Student", date: "Oct 22, 2026" },
  ];

  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
        <p className="text-slate-500">Welcome back. Here is what's happening on your platform today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-slate-500 mb-1">{stat.title}</p>
              <h3 className="text-3xl font-extrabold text-slate-900">{stat.value}</h3>
              <div className="flex items-center gap-1 mt-2 text-emerald-600 text-sm font-semibold">
                <ArrowUpRight size={16} />
                {stat.increase} this month
              </div>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Users Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Recent Registrations</h3>
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Email</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Joined</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">{user.name}</td>
                  <td className="p-4 text-slate-500">{user.email}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${user.role === 'Instructor' ? 'bg-amber-100 text-amber-700' : 'bg-indigo-100 text-indigo-700'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">{user.date}</td>
                  <td className="p-4 text-right">
                    <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}