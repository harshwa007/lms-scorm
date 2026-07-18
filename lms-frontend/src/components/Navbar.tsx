'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAuthToken, removeAuthToken } from '@/lib/api';

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    removeAuthToken();
    setIsAuthenticated(false);
    router.push('/login');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/80 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white group-hover:text-indigo-300 transition">
              Antigravity <span className="gradient-text font-extrabold">SCORM</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">Enterprise LMS</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link href="#courses" className="hover:text-indigo-400 transition">Courses Catalog</Link>
          <Link href="#features" className="hover:text-indigo-400 transition">SCORM Engine</Link>
          <Link href="#pricing" className="hover:text-indigo-400 transition">Enterprise</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2.5 rounded-xl border border-red-800/80 bg-red-950/40 hover:bg-red-900/60 text-red-300 text-sm font-semibold transition shadow-inner"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="px-5 py-2.5 rounded-xl border border-slate-700/80 bg-slate-900/50 hover:bg-slate-800 text-slate-200 text-sm font-semibold hover:border-slate-600 transition shadow-inner"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-95 transition duration-200"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl">
          <Link href="/" className="block py-2 text-slate-300 hover:text-indigo-400 font-medium">Home</Link>
          <Link href="#courses" className="block py-2 text-slate-300 hover:text-indigo-400 font-medium">Courses</Link>
          <Link href="#features" className="block py-2 text-slate-300 hover:text-indigo-400 font-medium">SCORM Engine</Link>
          <div className="pt-4 flex flex-col gap-3">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full text-center py-2.5 rounded-xl border border-red-800 bg-red-950 text-red-300 font-semibold"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link href="/login" className="w-full text-center py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white font-semibold">
                  Sign In
                </Link>
                <Link href="/register" className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
