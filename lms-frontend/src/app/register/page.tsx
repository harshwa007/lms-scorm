'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import EducationalFloatingScene from '@/components/EducationalFloatingScene';
import { apiFetch } from '@/lib/api';

interface UserResponse {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  roleName: string;
  isActive: boolean;
}

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [roleName, setRoleName] = useState('STUDENT');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await apiFetch<UserResponse>('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, firstName, lastName, roleName }),
      });

      router.push('/login');
    } catch (err: any) {
      setError(err.message || 'Failed to create account.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Split-Screen Container */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-12 relative overflow-hidden">
        
        {/* Background Ambient Glowing Orbs */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          
          {/* Left Column: 3D Educational Scene */}
          <div className="hidden lg:flex lg:col-span-6 flex-col justify-center min-h-[500px]">
            <div className="mb-6 space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-bold uppercase tracking-widest shadow-lg">
                Join the Enterprise Platform
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
                Start Learning with <span className="gradient-text">Interactive SCORM</span>
              </h2>
              <p className="text-slate-400 text-sm max-w-md">
                Create your student or instructor profile to access real-time course analytics, gradebooks, and learning paths.
              </p>
            </div>

            <EducationalFloatingScene />
          </div>

          {/* Right Column: Glassmorphic Registration Form */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md p-8 sm:p-10 glass-card rounded-3xl shadow-2xl border border-slate-700/60 bg-slate-900/80 relative">
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-white tracking-tight">
                  Create Account
                </h2>
                <p className="text-slate-400 text-xs mt-2">
                  Fill out your details to join the SCORM LMS platform
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-950/50 border border-red-800/80 rounded-xl text-red-300 text-xs flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-4">
                
                {/* Role Pill Selectors */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Account Role
                  </label>
                  <div className="grid grid-cols-3 gap-2 p-1 bg-slate-950/80 border border-slate-800 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setRoleName('STUDENT')}
                      className={`py-2 text-xs font-bold rounded-lg transition ${
                        roleName === 'STUDENT'
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Student
                    </button>
                    <button
                      type="button"
                      onClick={() => setRoleName('INSTRUCTOR')}
                      className={`py-2 text-xs font-bold rounded-lg transition ${
                        roleName === 'INSTRUCTOR'
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Instructor
                    </button>
                    <button
                      type="button"
                      onClick={() => setRoleName('ADMIN')}
                      className={`py-2 text-xs font-bold rounded-lg transition ${
                        roleName === 'ADMIN'
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Admin
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white text-sm transition"
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white text-sm transition"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white text-sm transition"
                    placeholder="jane.doe@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3.5 py-3 bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white text-sm transition"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-[0.99] transition duration-200 text-sm disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    'Complete Registration'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center border-t border-slate-800/80 pt-4">
                <p className="text-xs text-slate-400">
                  Already have an account?{' '}
                  <Link href="/login" className="text-indigo-400 font-bold hover:text-indigo-300 transition underline underline-offset-4">
                    Sign in here
                  </Link>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
