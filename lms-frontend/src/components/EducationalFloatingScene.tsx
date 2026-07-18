'use client';

import React from 'react';

export default function EducationalFloatingScene() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center perspective-1000 overflow-hidden">
      
      {/* Background Animated Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/30 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/25 rounded-full blur-[110px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D Floating Scene Container */}
      <div className="relative w-full max-w-lg preserve-3d flex items-center justify-center p-4">
        
        {/* Main Central Interactive Course Card */}
        <div className="w-full glass-card glass-card-hover rounded-3xl p-6 shadow-2xl relative z-20 border border-slate-700/60 bg-slate-900/80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Active SCORM Module</span>
                <h4 className="text-lg font-bold text-white">Full-Stack Enterprise Architecture</h4>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-full">
              SCORM 2004
            </span>
          </div>

          {/* Progress Bar & Stat */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs font-medium text-slate-300">
              <span>Course Progress</span>
              <span className="text-indigo-300 font-bold">88% Completed</span>
            </div>
            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
              <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-1000 shadow-sm" style={{ width: '88%' }} />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>1,420 Students Live</span>
            </div>
            <span className="font-semibold text-slate-300">4.9 / 5.0 Rating</span>
          </div>
        </div>

        {/* Floating Element 1: Top Right Achievement Badge */}
        <div className="absolute -top-10 -right-6 z-30 animate-float">
          <div className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-purple-500/40 shadow-xl bg-purple-950/40 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 shadow-md">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-extrabold text-white">Certified Master</p>
              <p className="text-[10px] text-purple-300">SCORM Verified</p>
            </div>
          </div>
        </div>

        {/* Floating Element 2: Bottom Left Interactive Quiz Card */}
        <div className="absolute -bottom-8 -left-6 z-30 animate-float-delayed">
          <div className="glass-card p-4 rounded-2xl flex items-center gap-3 border border-sky-500/40 shadow-xl bg-sky-950/40 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-white">Interactive Assessment</p>
              <p className="text-[10px] text-sky-300">Instant Real-time Scoring</p>
            </div>
          </div>
        </div>

        {/* Floating Graphic 3: 3D Decorative Orb Ring */}
        <div className="absolute top-1/2 -right-12 -translate-y-1/2 z-10 opacity-70 animate-spin-slow pointer-events-none">
          <div className="w-36 h-36 rounded-full border-2 border-dashed border-indigo-500/30" />
        </div>

      </div>
    </div>
  );
}
