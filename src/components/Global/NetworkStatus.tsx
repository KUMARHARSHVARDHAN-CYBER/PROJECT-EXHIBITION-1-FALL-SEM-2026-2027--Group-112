"use client";

import React, { useState, useEffect } from "react";
import { WifiOff, Wifi, Database, CheckCircle2, AlertTriangle, X } from "lucide-react";

export default function NetworkStatus() {
  const [isOffline, setIsOffline] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // 1. Initial status detection
    if (typeof window !== "undefined") {
      setIsOffline(!navigator.onLine);
    }

    // 2. Event Listeners for Network State Transitions
    const handleOffline = () => {
      setIsOffline(true);
      setShowReconnected(false);
      setIsDismissed(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      // Auto-hide the "Connection Restored" badge after 4 seconds
      const timer = setTimeout(() => {
        setShowReconnected(false);
      }, 4000);
      return () => clearTimeout(timer);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // 3. Register Service Worker for Offline PWA Caching
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("[VTOP PWA] Service Worker registered with scope:", registration.scope);
          })
          .catch((error) => {
            console.warn("[VTOP PWA] Service Worker registration skipped:", error);
          });
      });
    }

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // If dismissed or fully online without recent reconnection notice, render nothing
  if ((!isOffline && !showReconnected) || (isOffline && isDismissed)) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300 transform translate-y-0"
    >
      {isOffline ? (
        /* ================= OFFLINE BANNER (Subdued Institutional Amber / Slate) ================= */
        <div className="bg-amber-950/90 backdrop-blur-md text-amber-100 border-b border-amber-600/40 shadow-lg px-4 py-2.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <div className="flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded bg-amber-900/80 border border-amber-700/50 text-[11px] font-semibold tracking-wide uppercase text-amber-200">
                <WifiOff className="w-3.5 h-3.5 text-amber-400" />
                Offline Mode
              </div>
              <p className="truncate text-amber-200">
                <span className="font-semibold text-amber-100">Currently viewing cached academic data.</span> All course registration, timetable, and attendance records remain available.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-amber-300/80 bg-amber-900/40 px-2 py-0.5 rounded border border-amber-700/30">
                <Database className="w-3 h-3 text-amber-400" />
                Local Cache Active
              </span>
              <button
                onClick={() => setIsDismissed(true)}
                className="text-amber-300/70 hover:text-amber-100 hover:bg-amber-800/50 p-1 rounded transition-colors"
                title="Dismiss banner"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : showReconnected ? (
        /* ================= ONLINE RECONNECTED TOAST ================= */
        <div className="bg-emerald-950/90 backdrop-blur-md text-emerald-100 border-b border-emerald-600/40 shadow-lg px-4 py-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">Connection Restored:</strong> You are back online. VTOP portal is operating with live connectivity.
              </span>
            </div>
            <button
              onClick={() => setShowReconnected(false)}
              className="text-emerald-300/70 hover:text-emerald-100 p-1 rounded transition-colors"
              title="Close"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
