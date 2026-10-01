"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  LogIn,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Zap,
  Globe,
  X,
  Loader2,
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
  RefreshCw,
  ArrowLeft,
  AlertCircle
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [spotlightOpen, setSpotlightOpen] = useState<boolean>(false);

  // Credential Modal State
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<string>("Student");
  const [regNumber, setRegNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [captchaCode, setCaptchaCode] = useState<string>("7X9K2");
  const [captchaInput, setCaptchaInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
    // Eagerly prefetch dashboard immediately on mount for zero-latency transition
    router.prefetch("/dashboard");
    router.prefetch("/dashboard/timetable");
    router.prefetch("/dashboard/profile");
  }, [router]);

  const handleOpenLogin = (role: string) => {
    setSelectedRole(role);
    setErrorMessage("");
    setRegNumber("");
    setPassword("");
    setCaptchaInput("");
    generateCaptcha();
    router.prefetch("/dashboard");
    setLoginModalOpen(true);
  };

  // Instant 1-Click Fast Login directly to dashboard (zero-latency transition)
  const handleFastLogin = async (regNoToUse = "25MIM10100") => {
    setErrorMessage("");
    setLoading(true);

    // Eager instant redirect for lightning fast UX
    router.prefetch("/dashboard");
    router.replace("/dashboard");

    // Async session setup in parallel
    try {
      fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          regNo: regNoToUse,
          password: "password123",
        }),
      }).catch((err) => console.warn("Background auth sync notice:", err));
    } catch (error) {
      console.error("Fast login error:", error);
    }
  };

  const handleCredentialSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!regNumber.trim()) {
      setErrorMessage(`Please enter your ${selectedRole === "Student" ? "Registration Number" : "User ID"}.`);
      return;
    }

    if (!password.trim()) {
      setErrorMessage("Please enter your password.");
      return;
    }

    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      setErrorMessage("Invalid captcha code. Please try again.");
      generateCaptcha();
      return;
    }

    setLoading(true);
    router.prefetch("/dashboard");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          regNo: regNumber.trim(),
          password: password.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Direct instant navigation to dashboard without blocking router.refresh
        router.replace("/dashboard");
      } else {
        setErrorMessage(data.message || "Invalid Credentials");
        setLoading(false);
        generateCaptcha();
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Failed to connect to authentication server. Please try again.");
      setLoading(false);
      generateCaptcha();
    }
  };

  const handleAutoFillDemo = () => {
    setRegNumber("25MIM10100");
    setPassword("password123");
    setCaptchaInput(captchaCode);
    setErrorMessage("");
    router.prefetch("/dashboard");
  };

  return (
    <div className="relative min-h-screen text-[#212529] font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Background Campus Image with Clear View */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Image
          src="/vit-bhopal-bg.png"
          alt="VIT Bhopal Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Very subtle protective overlay to ensure clean contrast while keeping the campus fully clear */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Fixed Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#1B365D]/95 backdrop-blur-md text-white shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-white drop-shadow-sm">
              VIT
            </span>
            <span className="text-xs sm:text-sm text-blue-200 font-medium px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
              Bhopal Campus
            </span>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 bg-[#132845]/80 backdrop-blur-xs px-3 py-1.5 rounded-lg text-xs text-gray-200 border border-blue-400/20 shadow-inner">
            <Globe className="w-3.5 h-3.5 text-blue-300" />
            <span className="hidden sm:inline font-medium">Language:</span>
            <select
              className="bg-transparent text-xs text-gray-100 border-none outline-none cursor-pointer font-medium"
              defaultValue="en"
              aria-label="Language selection"
            >
              <option value="en" className="text-black">English</option>
              <option value="hi" className="text-black">Hindi</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 pt-10 pb-10 flex items-center justify-center">
        <div className="w-full bg-white/95 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-5 sm:p-8 transition-all">
          {/* Header Title Section */}
          <div className="flex flex-col justify-center items-center text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Official University Portal</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1B365D] tracking-tight">
              <strong>VTOP</strong> translates to &quot;<strong>V</strong>IT on <strong>TOP</strong>&quot;
            </h1>
            <p className="max-w-3xl mt-2 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
              A digital initiative by the institute facilitating Faculty, Staff, Students, Parents and
              Alumni to access and process Academics, Research, Supporting services at one common platform.
            </p>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-3">
            {/* Student Card */}
            <div className="group border border-gray-200/80 hover:border-blue-500/60 rounded-xl shadow-xs hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-white to-blue-50/20 p-4">
              <div className="text-center">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-1/2 flex items-center justify-center bg-blue-50 group-hover:bg-blue-100/80 py-3.5 rounded-lg transition-colors">
                    <GraduationCap className="w-10 h-10 text-[#0d6efd] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <span className="font-bold text-[#0d6efd] text-base sm:text-lg">Student</span>
                    <button
                      type="button"
                      id="student-login-btn"
                      onClick={() => handleOpenLogin("Student")}
                      onMouseEnter={() => router.prefetch("/dashboard")}
                      className="w-full bg-[#0d6efd] hover:bg-blue-700 active:scale-98 text-white font-bold py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Employee Card */}
            <div className="group border border-gray-200/80 hover:border-amber-500/60 rounded-xl shadow-xs hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-white to-amber-50/20 p-4">
              <div className="text-center">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-1/2 flex items-center justify-center bg-amber-50 group-hover:bg-amber-100/80 py-3.5 rounded-lg transition-colors">
                    <Briefcase className="w-10 h-10 text-[#d97706] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <span className="font-bold text-[#b45309] text-base sm:text-lg">Employee</span>
                    <button
                      type="button"
                      id="employee-login-btn"
                      onClick={() => handleOpenLogin("Employee")}
                      onMouseEnter={() => router.prefetch("/dashboard")}
                      className="w-full border-2 border-[#d97706] text-[#b45309] hover:bg-[#d97706] hover:text-white active:scale-98 font-bold py-1.5 px-3 rounded-lg text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent Card */}
            <div className="group border border-gray-200/80 hover:border-emerald-500/60 rounded-xl shadow-xs hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-white to-emerald-50/20 p-4">
              <div className="text-center">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-1/2 flex items-center justify-center bg-emerald-50 group-hover:bg-emerald-100/80 py-3.5 rounded-lg transition-colors">
                    <Users className="w-10 h-10 text-[#198754] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <span className="font-bold text-[#198754] text-base sm:text-lg">Parent</span>
                    <button
                      type="button"
                      id="parent-login-btn"
                      onClick={() => handleOpenLogin("Parent")}
                      onMouseEnter={() => router.prefetch("/dashboard")}
                      className="w-full bg-[#198754] hover:bg-emerald-700 active:scale-98 text-white font-bold py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Alumni Card */}
            <div className="group border border-gray-200/80 hover:border-cyan-500/60 rounded-xl shadow-xs hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-white to-cyan-50/20 p-4">
              <div className="text-center">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-1/2 flex items-center justify-center bg-cyan-50 group-hover:bg-cyan-100/80 py-3.5 rounded-lg transition-colors">
                    <Award className="w-10 h-10 text-[#0891b2] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <span className="font-bold text-[#0e7490] text-base sm:text-lg">Alumni</span>
                    <button
                      type="button"
                      id="alumni-login-btn"
                      onClick={() => handleOpenLogin("Alumni")}
                      onMouseEnter={() => router.prefetch("/dashboard")}
                      className="w-full bg-[#0891b2] hover:bg-cyan-700 active:scale-98 text-white font-bold py-2 px-3 rounded-lg text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spotlight Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="border border-gray-200/90 rounded-xl shadow-xs bg-white/80 overflow-hidden">
              <div className="bg-gray-50/80 border-b border-gray-200/90 px-4 py-2.5 flex justify-between items-center">
                <span className="font-bold text-[#1B365D] text-sm tracking-wide">Spotlight</span>
                <button
                  type="button"
                  onClick={() => setSpotlightOpen(true)}
                  className="text-xs text-[#0d6efd] hover:underline font-semibold cursor-pointer"
                >
                  More ...
                </button>
              </div>
              <ul className="divide-y divide-gray-100 text-xs">
                <li className="p-3.5 hover:bg-blue-50/40 flex items-start space-x-3 transition-colors">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="font-semibold text-gray-800 leading-snug">
                    THE FIRST UNIVERSITY IN INDIA TO INTRODUCE CALTECH (COLLABORATIVE AND ACTIVE LEARNING THROUGH TECHNOLOGY)
                  </span>
                </li>
                <li className="p-3.5 hover:bg-blue-50/40 flex items-start space-x-3 transition-colors">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="font-semibold text-gray-800 leading-snug">
                    THE FIRST PRIVATE UNIVERSITY IN INDIA TO HAVE 100% DOCTORAL FACULTY
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Student / Role Credential Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-[#1B365D] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  {selectedRole === "Student" && <GraduationCap className="w-6 h-6 text-blue-300" />}
                  {selectedRole === "Employee" && <Briefcase className="w-6 h-6 text-amber-300" />}
                  {selectedRole === "Parent" && <Users className="w-6 h-6 text-green-300" />}
                  {selectedRole === "Alumni" && <Award className="w-6 h-6 text-cyan-300" />}
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight">{selectedRole} Login</h2>
                  <p className="text-xs text-blue-200">VTOP Portal Authentication</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
                className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCredentialSubmit} className="p-6 space-y-4">
              {errorMessage && (
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Registration Number Input */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  {selectedRole === "Student" ? "Registration Number" : `${selectedRole} ID`}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="registration-number-input"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    placeholder={selectedRole === "Student" ? "e.g. 21BCE10234" : "Enter User ID"}
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    autoFocus
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-gray-700">
                    Password
                  </label>
                  <a
                    href="#forgot"
                    onClick={(e) => { e.preventDefault(); alert("Please contact administrator or click Forgot Password on official portal."); }}
                    className="text-xs text-blue-600 hover:underline font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-9 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Captcha Section */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Security Captcha
                </label>
                <div className="flex items-center gap-3">
                  {/* Captcha Display */}
                  <div className="flex-1 select-none flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-mono font-black text-lg tracking-widest py-2 rounded-lg shadow-inner border border-blue-950">
                    <span className="transform -skew-x-6 drop-shadow-sm">{captchaCode}</span>
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    title="Refresh Captcha"
                    className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
                <input
                  type="text"
                  id="captcha-input"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter characters above"
                  className="w-full mt-2 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition uppercase tracking-wider"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  id="submit-credentials-btn"
                  disabled={loading}
                  onMouseEnter={() => router.prefetch("/dashboard")}
                  className="w-full bg-[#1B365D] hover:bg-blue-900 active:scale-98 disabled:opacity-75 text-white font-bold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Authenticating & Entering Dashboard...</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4" />
                      <span>Sign In to VTOP</span>
                    </>
                  )}
                </button>

                {/* 1-Click Direct Fast Pass */}
                <button
                  type="button"
                  id="fast-login-btn"
                  disabled={loading}
                  onClick={() => handleFastLogin("25MIM10100")}
                  onMouseEnter={() => router.prefetch("/dashboard")}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 active:scale-98 disabled:opacity-75 text-white font-bold py-2 px-4 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  title="Direct 1-click authentication into dashboard (25MIM10100)"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>⚡ 1-Click Instant Demo Login</span>
                </button>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    type="button"
                    onClick={() => setLoginModalOpen(false)}
                    className="text-gray-500 hover:text-gray-800 font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Roles</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleAutoFillDemo}
                    onMouseEnter={() => router.prefetch("/dashboard")}
                    className="text-blue-600 hover:underline font-semibold cursor-pointer"
                  >
                    Auto-fill Demo Data
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Offcanvas Drawer for Spotlight Details */}
      {spotlightOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h2 className="text-base font-bold text-[#1B365D]">SPOTLIGHT</h2>
                <button
                  type="button"
                  onClick={() => setSpotlightOpen(false)}
                  className="text-gray-400 hover:text-gray-700 p-1 cursor-pointer rounded-lg hover:bg-gray-100 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="divide-y divide-gray-100 text-xs mt-4">
                <li className="py-3.5 flex items-start space-x-3">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-800 leading-relaxed">
                    The first University in India to introduce CALTech (Collaborative and Active Learning through Technology)
                  </span>
                </li>
                <li className="py-3.5 flex items-start space-x-3">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-gray-800 leading-relaxed">
                    The first Private University in India to have 100% Doctoral Faculty
                  </span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setSpotlightOpen(false)}
              className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs rounded-lg transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Fixed Bottom Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#1B365D]/95 backdrop-blur-md text-white py-2.5 text-center text-xs border-t border-white/10 shadow-lg">
        <span className="font-medium tracking-wide">
          Copyright © 2026 Software Development Cell, VIT, Bhopal-466 114.
        </span>
      </footer>
    </div>
  );
}
