import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import EducationalFloatingScene from '@/components/EducationalFloatingScene';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Sticky Glassmorphic Navigation Header */}
      <Navbar />

      {/* Main Hero Section */}
      <main className="flex-1">
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Hero Text & Call-To-Actions */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left z-10">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-500/40 backdrop-blur-md shadow-lg shadow-indigo-500/10">
                  <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-wide text-indigo-300 uppercase">
                    SCORM 2004 & xAPI Compliant Architecture
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                  Next-Gen <span className="gradient-text">Interactive LMS</span> For Enterprise Excellence
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                  Deliver interactive e-learning modules, enforce enterprise RBAC security, and capture real-time student analytics with our Java Spring Boot & Next.js cloud architecture.
                </p>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                  <Link
                    href="/register"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition duration-200 text-center"
                  >
                    Start Free Trial
                  </Link>

                  <Link
                    href="/login"
                    className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 font-bold text-base hover:border-slate-600 backdrop-blur-xl transition text-center shadow-inner"
                  >
                    Sign In to Portal
                  </Link>
                </div>

                {/* Trust Metrics */}
                <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 w-full max-w-lg">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">99.9%</p>
                    <p className="text-xs text-slate-400 font-medium">SCORM Runtime Uptime</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">100k+</p>
                    <p className="text-xs text-slate-400 font-medium">Active Learners</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-purple-400">&lt;10ms</p>
                    <p className="text-xs text-slate-400 font-medium">API Latency</p>
                  </div>
                </div>

              </div>

              {/* Right Column: 3D Floating Scene */}
              <div className="lg:col-span-5 relative flex items-center justify-center min-h-[450px]">
                <EducationalFloatingScene />
              </div>

            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section id="courses" className="py-16 bg-slate-950/60 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
                Featured <span className="gradient-text">Interactive Courses</span>
              </h2>
              <p className="text-slate-400 text-base">
                Explore real-time interactive SCORM packages with automated grade tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Course Card 1 */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 relative group overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-300 text-xs font-bold border border-indigo-800">Software Engineering</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">Microservices & Kafka Architecture</h3>
                <p className="text-slate-400 text-sm mb-6">Master event-driven microservices with Spring Boot, Kafka, and Redis caching.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                  <span>14 Modules</span>
                  <span className="text-emerald-400 font-semibold">Intermediate</span>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 relative group overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-purple-950 text-purple-300 text-xs font-bold border border-purple-800">Security</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">Spring Security & OAuth2 JWT</h3>
                <p className="text-slate-400 text-sm mb-6">Build stateless security layers, RBAC permissions, and BCrypt password encryption.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                  <span>8 Modules</span>
                  <span className="text-indigo-400 font-semibold">Advanced</span>
                </div>
              </div>

              {/* Course Card 3 */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 relative group overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-sky-950 text-sky-300 text-xs font-bold border border-sky-800">Data Analytics</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">SCORM Learner Progress Engine</h3>
                <p className="text-slate-400 text-sm mb-6">Capture CMI datamodel variables, completion status, and test scores in real time.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                  <span>10 Modules</span>
                  <span className="text-emerald-400 font-semibold">All Levels</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Antigravity SCORM LMS. Enterprise Grade Security & SCORM Analytics.</p>
        </div>
      </footer>

    </div>
  );
}
