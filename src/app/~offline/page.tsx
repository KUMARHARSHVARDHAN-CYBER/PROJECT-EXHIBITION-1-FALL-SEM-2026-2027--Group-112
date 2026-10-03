"use client";

import React, { useState, useEffect } from "react";
import { WifiOff, RefreshCw, Database, Clock, ShieldCheck, Home } from "lucide-react";
import Link from "next/link";

export default function OfflineFallbackPage() {
  const [isRetrying, setIsRetrying] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOnlineStatus(navigator.onLine);

      const handleOnline = () => setOnlineStatus(true);
      const handleOffline = () => setOnlineStatus(false);

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  const handleRetry = () => {
    setIsRetrying(true);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Brand Bar */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-md shadow-blue-900/40">
              V
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
                Enhanced VTOP
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Portal
                </span>
              </h1>
              <p className="text-xs text-slate-400">Institutional Student Information System</p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            {onlineStatus ? "Connection Restored" : "Offline Mode Active"}
          </div>
        </div>
      </header>

      {/* Center Content */}
      <section className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="max-w-xl w-full text-center">
          {/* Animated Offline Icon */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-amber-500/40 flex items-center justify-center shadow-xl shadow-amber-950/40">
              <WifiOff className="w-10 h-10 text-amber-400" />
            </div>
          </div>

          {/* Titles */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            You are Offline
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
            Enhanced VTOP cannot establish a live connection to the institutional network.
            Cached records and offline pages remain accessible.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <button
              id="retry-connection-button"
              onClick={handleRetry}
              disabled={isRetrying}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isRetrying ? "animate-spin" : ""}`} />
              {isRetrying ? "Checking Connection..." : "Retry Connection"}
            </button>

            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all hover:text-white active:scale-[0.98]"
            >
              <Home className="w-4 h-4 text-slate-400" />
              Go to Dashboard
            </Link>
          </div>

          {/* Information Badges / Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs mb-1">
                <Database className="w-4 h-4" />
                <span>Cached Data</span>
              </div>
              <p className="text-slate-400 text-xs leading-normal">
                Previously loaded timetable and attendance are preserved offline.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Safe Storage</span>
              </div>
              <p className="text-slate-400 text-xs leading-normal">
                Academic data is securely encrypted in your browser cache.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs mb-1">
                <Clock className="w-4 h-4" />
                <span>Auto Reconnect</span>
              </div>
              <p className="text-slate-400 text-xs leading-normal">
                The portal automatically syncs once internet is restored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-900/40 py-4 px-6 text-center text-xs text-slate-500">
        <p>Enhanced VTOP Progressive Web Application &bull; Service Worker Cache Active</p>
      </footer>
    </main>
  );
}
