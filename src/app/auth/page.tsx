"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Mail, Lock, Facebook, Github, Linkedin } from "lucide-react";
import "./auth.css";

export default function AuthPage() {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/workspace");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/workspace");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-50 to-indigo-100 font-sans p-4 pt-20 overflow-hidden relative">
      <div className={`auth-container ${isActive ? "active" : ""}`}>
        
        {/* --- Login Form --- */}
        <div className="form-box login">
          <form onSubmit={handleLogin} className="w-full">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Login</h1>
            
            <div className="input-box">
              <input type="text" placeholder="Username or Email" required />
              <User size={20} />
            </div>
            
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <Lock size={20} />
            </div>
            
            <div className="text-right -mt-2 mb-6">
              <Link href="#" className="text-sm font-medium text-indigo-600 hover:underline">Forgot Password?</Link>
            </div>
            
            <button type="submit" className="submit-btn mb-6">Login</button>
            
            <p className="text-sm text-slate-400 mb-4">or login with social platforms</p>
            <div className="social-icons">
              <a href="#">
                <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </a>
              <a href="#"><Facebook size={24} /></a>
              <a href="#"><Github size={24} /></a>
              <a href="#"><Linkedin size={24} /></a>
            </div>
          </form>
        </div>

        {/* --- Setup Form --- */}
        <div className="form-box register">
          <form onSubmit={handleRegister} className="w-full">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Registration</h1>
            
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <User size={20} />
            </div>
            
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <Mail size={20} />
            </div>
            
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <Lock size={20} />
            </div>
            
            <button type="submit" className="submit-btn mb-6 mt-2">Register</button>
            
            <p className="text-sm text-slate-400 mb-4">or register with social platforms</p>
            <div className="social-icons">
              <a href="#">
                <svg className="w-6 h-6" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              </a>
              <a href="#"><Facebook size={24} /></a>
              <a href="#"><Github size={24} /></a>
              <a href="#"><Linkedin size={24} /></a>
            </div>
          </form>
        </div>

        {/* --- Toggle Panels --- */}
        <div className="toggle-box pointer-events-none">
          {/* Using pointer-events-none on parent, enable on buttons */}
          
          <div className="toggle-panel toggle-left">
            <h1 className="text-4xl font-extrabold mb-4">Hello, Welcome!</h1>
            <p className="text-indigo-100 text-sm mb-8 leading-relaxed px-12">
              Don't have an account yet? <br/> Join Mwalimu today and start your journey towards digital mastery.
            </p>
            <button 
              className="toggle-btn pointer-events-auto"
              onClick={() => setIsActive(true)}
            >
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1 className="text-4xl font-extrabold mb-4">Welcome Back!</h1>
            <p className="text-indigo-100 text-sm mb-8 leading-relaxed px-12">
              Already have an account? <br/> Sign in to access your projects and continue where you left off.
            </p>
            <button 
              className="toggle-btn pointer-events-auto"
              onClick={() => setIsActive(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}