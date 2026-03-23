import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Mwalimu<span className="text-indigo-500">.</span>
            </h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Democratizing access to digital skills through interactive, hands-on learning. From code to spreadsheets.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors text-slate-300 hover:text-white cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors text-slate-300 hover:text-white cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors text-slate-300 hover:text-white cursor-pointer">
                <Linkedin size={18} />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors text-slate-300 hover:text-white cursor-pointer">
                <Github size={18} />
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Courses</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/courses/python" className="hover:text-yellow-400 transition-colors">Python Programming</Link></li>
              <li><Link href="/courses/dsa" className="hover:text-purple-400 transition-colors">Data Structures (DSA)</Link></li>
              <li><Link href="/courses/excel" className="hover:text-emerald-400 transition-colors">Microsoft Excel</Link></li>
              <li><Link href="/courses/powerpoint" className="hover:text-orange-400 transition-colors">Microsoft PowerPoint</Link></li>
              <li><Link href="/workspace" className="hover:text-indigo-400 transition-colors">Practice Sandbox</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/docs" className="hover:text-white transition-colors">Lab Documentation</Link></li>
              <li><Link href="/exercises" className="hover:text-white transition-colors">Workout Exercises</Link></li>
              <li><Link href="/quiz" className="hover:text-white transition-colors">Quiz Portal</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community Forum</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li className="pt-2">
                <span className="block text-xs font-bold text-slate-500 mb-1">Contact us:</span>
                <a href="mailto:hello@mwalimu.com" className="text-white font-bold hover:text-blue-400 transition-colors">hello@mwalimu.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
          <p>© 2026 <strong>Mwalimu</strong> Learning Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Designed with Local Support</span>
            <span>Built for Professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}