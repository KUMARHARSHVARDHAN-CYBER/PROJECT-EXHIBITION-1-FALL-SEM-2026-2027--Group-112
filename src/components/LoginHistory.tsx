"use client";

import React, { useState } from "react";
import { ShieldAlert, LogOut, CheckCircle2, AlertTriangle, Monitor, Smartphone, Laptop, RefreshCw } from "lucide-react";

export interface LoginSession {
  id: number;
  dateTime: string;
  ipAddress: string;
  deviceBrowser: string;
  deviceType: "desktop" | "mobile" | "laptop";
  location: string;
  status: "Success" | "Failed";
  isCurrentSession?: boolean;
  failureReason?: string;
}

export const initialLoginSessions: LoginSession[] = [
  {
    id: 1,
    dateTime: "08-Sep-2026 09:42:15 AM",
    ipAddress: "117.240.18.92",
    deviceBrowser: "Windows 11 / Chrome 128.0.6613.85",
    deviceType: "desktop",
    location: "Bhopal, MP, India (Campus Wi-Fi / CTS-AP-04)",
    status: "Success",
    isCurrentSession: true,
  },
  {
    id: 2,
    dateTime: "07-Sep-2026 11:15:40 PM",
    ipAddress: "49.207.215.110",
    deviceBrowser: "Android 14 / Mobile Chrome 128.0",
    deviceType: "mobile",
    location: "Indore, MP, India (Airtel Broadband)",
    status: "Success",
    isCurrentSession: false,
  },
  {
    id: 3,
    dateTime: "07-Sep-2026 08:30:22 PM",
    ipAddress: "106.51.72.18",
    deviceBrowser: "Windows 10 / Microsoft Edge 127.0",
    deviceType: "laptop",
    location: "Bhopal, MP, India (Hostel Block-2)",
    status: "Failed",
    isCurrentSession: false,
    failureReason: "Invalid Captcha Code",
  },
  {
    id: 4,
    dateTime: "06-Sep-2026 04:12:09 PM",
    ipAddress: "157.48.12.89",
    deviceBrowser: "macOS Sonoma / Safari 17.5",
    deviceType: "laptop",
    location: "Mumbai, MH, India (Jio Fiber)",
    status: "Success",
    isCurrentSession: false,
  },
  {
    id: 5,
    dateTime: "05-Sep-2026 09:05:47 AM",
    ipAddress: "14.139.241.2",
    deviceBrowser: "Ubuntu 22.04 LTS / Firefox 129.0",
    deviceType: "desktop",
    location: "Bhopal, MP, India (Lab-304 Terminal)",
    status: "Success",
    isCurrentSession: false,
  },
  {
    id: 6,
    dateTime: "04-Sep-2026 10:20:11 PM",
    ipAddress: "182.74.88.19",
    deviceBrowser: "iOS 17.6 / Mobile Safari",
    deviceType: "mobile",
    location: "Delhi, DL, India (Vodafone Idea)",
    status: "Failed",
    isCurrentSession: false,
    failureReason: "Bad Password Credentials (3 attempts)",
  },
  {
    id: 7,
    dateTime: "03-Sep-2026 02:44:50 PM",
    ipAddress: "117.240.18.44",
    deviceBrowser: "Windows 10 / Chrome 127.0",
    deviceType: "desktop",
    location: "Bhopal, MP, India (Library Reference Section)",
    status: "Success",
    isCurrentSession: false,
  },
];

export default function LoginHistory() {
  const [loginSessions, setLoginSessions] = useState<LoginSession[]>(initialLoginSessions);
  const [isTerminating, setIsTerminating] = useState<boolean>(false);
  const [systemNotice, setSystemNotice] = useState<{
    text: string;
    type: "success" | "warning" | "info" | "";
  }>({ text: "", type: "" });

  // Terminate all other sessions except current session
  const handleLogoutAllOtherDevices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsTerminating(true);
    setSystemNotice({ text: "", type: "" });

    setTimeout(() => {
      // Retain only current session
      setLoginSessions((prevSessions) =>
        prevSessions.filter((session) => session.isCurrentSession)
      );
      setIsTerminating(false);
      setSystemNotice({
        text: "AUTHENTICATION AUDIT: All other 6 active and historical remote device tokens have been forcefully terminated and invalidated from the central session registry.",
        type: "success",
      });
    }, 1000);
  };

  // Re-populate mock records for interactive testing
  const handleResetLog = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoginSessions(initialLoginSessions);
    setSystemNotice({
      text: "Audit logs refreshed from central authentication server.",
      type: "info",
    });
  };

  const otherSessionsCount = loginSessions.filter((s) => !s.isCurrentSession).length;

  return (
    <div
      className="bootstrap3-iso w-full bg-[#f4f6f9] text-[#333333] font-sans antialiased selection:bg-[#295b86] selection:text-white"
      id="page-wrapper"
    >
      <div className="container-fluid max-w-7xl mx-auto px-2 sm:px-4 py-3" id="main-section">
        <div className="row">
          <div className="col-12 bg-white">
            {/* Legacy Portal Card Frame (Dense Utilitarian Box with Sharp Corners & Zero Drop Shadows) */}
            <div className="card mt-2 mb-5 border border-[#d2d6de] shadow-none rounded-none bg-white">
              
              {/* Card Header with Legacy Primary Navy/Blue Top Bar Border */}
              <div className="card-header border-b border-[#e5e5e5] border-t-4 border-t-[#295b86] bg-[#f9fafb] px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <strong className="text-xl sm:text-2xl font-bold text-[#333333] block tracking-tight">
                    Login History &amp; Active Sessions
                  </strong>
                  <span className="text-xs text-[#666666] font-mono">
                    SECURITY MODULE :: AUTH_LOG_TRACKING_V2.4 (PORTAL BUILD 2026.09.08)
                  </span>
                </div>
                <div className="text-left sm:text-right font-mono text-xs text-[#555555]">
                  <div><span className="font-semibold text-[#295b86]">AUTHORIZED ID:</span> 25MIM10100</div>
                  <div><span className="font-semibold text-[#666]">AUDIT TIMELOCKED:</span> 08-Sep-2026 10:09:34 IST</div>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 sm:p-5">
                
                {/* Institutional Security Notice Bar */}
                <div className="bg-[#eef2f7] border border-[#d2d6de] p-3 mb-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div>
                      <span className="font-bold text-[#295b86]">User ID: </span>
                      <span className="font-semibold text-[#333333]">25MIM10100 (STUDENT)</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Active Protocol: </span>
                      <span className="font-semibold text-[#333333]">TLS 1.3 / AES-256-GCM</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Registered Email: </span>
                      <span className="font-semibold text-[#333333]">kumar.25mim10100@vitbhopal.ac.in</span>
                    </div>
                  </div>
                </div>

                {/* Legacy Warning & Instructions Alert Box */}
                <div className="bg-[#fcf8e3] border border-[#faebcc] text-[#8a6d3b] p-3 mb-4 rounded-none text-xs leading-relaxed flex items-start gap-2.5">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#8a6d3b]" />
                  <div>
                    <strong className="font-bold block uppercase tracking-wide mb-0.5">
                      Security Policy &amp; Access Monitoring:
                    </strong>
                    All successful and failed authentication attempts to your university portal account are recorded with timestamp, IP address, and browser fingerprinting. If you notice any unauthorized successful or failed attempts, terminate all active sessions immediately and report to the IT Helpdesk.
                  </div>
                </div>

                {/* System Feedback Message Box */}
                {systemNotice.text && (
                  <div
                    className={`p-3 mb-4 text-xs font-semibold border rounded-none flex items-center justify-between gap-2 ${
                      systemNotice.type === "success"
                        ? "bg-[#dff0d8] border-[#d6e9c6] text-[#3c763d]"
                        : systemNotice.type === "warning"
                        ? "bg-[#fcf8e3] border-[#faebcc] text-[#8a6d3b]"
                        : "bg-[#d9edf7] border-[#bce8f1] text-[#31708f]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {systemNotice.type === "success" && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                      {systemNotice.type === "warning" && <AlertTriangle className="w-4 h-4 shrink-0" />}
                      <span>{systemNotice.text}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSystemNotice({ text: "", type: "" })}
                      className="text-xs underline hover:opacity-75 cursor-pointer ml-3 uppercase font-bold"
                    >
                      [Dismiss]
                    </button>
                  </div>
                )}

                {/* Utilitarian Action Toolstrip with Strict Legacy Button */}
                <div className="bg-[#f8f9fa] border border-[#d2d6de] p-3 mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#444444] uppercase tracking-wide">
                      Total Displayed Sessions:
                    </span>
                    <span className="inline-block bg-[#295b86] text-white font-mono font-bold text-xs px-2 py-0.5 rounded-none">
                      {loginSessions.length}
                    </span>
                    {otherSessionsCount > 0 && (
                      <span className="text-xs text-[#c9302c] font-semibold hidden sm:inline">
                        ({otherSessionsCount} remote/untrusted active session{otherSessionsCount > 1 ? "s" : ""})
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Strict "Logout from all other devices" Button */}
                    <button
                      type="button"
                      id="btn-logout-other-devices"
                      onClick={handleLogoutAllOtherDevices}
                      disabled={isTerminating || otherSessionsCount === 0}
                      className={`inline-flex items-center gap-1.5 text-xs uppercase font-bold px-3.5 py-2 border rounded-none shadow-none transition-colors duration-100 ${
                        isTerminating
                          ? "bg-[#e0e0e0] border-[#cccccc] text-[#777777] cursor-not-allowed"
                          : otherSessionsCount === 0
                          ? "bg-[#e6e6e6] border-[#cccccc] text-[#999999] cursor-not-allowed"
                          : "bg-[#c9302c] hover:bg-[#ac2925] active:bg-[#761c19] text-white border-[#ac2925] cursor-pointer"
                      }`}
                      title="Forcefully terminate and revoke all tokens on all devices except this one"
                    >
                      {isTerminating ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>TERMINATING ACTIVE SESSIONS...</span>
                        </>
                      ) : (
                        <>
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Logout from all other devices</span>
                        </>
                      )}
                    </button>

                    {/* Reset / Reload Log Button for Testing */}
                    {loginSessions.length < initialLoginSessions.length && (
                      <button
                        type="button"
                        onClick={handleResetLog}
                        className="inline-flex items-center gap-1 text-xs font-bold px-3 py-2 bg-[#ffffff] hover:bg-[#e6e6e6] text-[#333333] border border-[#cccccc] rounded-none cursor-pointer"
                        title="Reload full mock audit history"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Reload History</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Dense, Utilitarian Legacy Data Table */}
                <div className="overflow-x-auto border border-[#d2d6de]">
                  <table
                    className="w-full table-auto border-collapse text-left text-xs bg-white"
                    style={{ borderSpacing: 0 }}
                  >
                    <thead>
                      <tr className="bg-[#295b86] text-white font-bold border-b border-[#d2d6de]">
                        <th className="border-r border-[#3b719f] p-2.5 text-center w-12 font-bold uppercase tracking-wider">
                          Sl. No.
                        </th>
                        <th className="border-r border-[#3b719f] p-2.5 font-bold uppercase tracking-wider whitespace-nowrap">
                          Date &amp; Time (IST)
                        </th>
                        <th className="border-r border-[#3b719f] p-2.5 font-bold uppercase tracking-wider whitespace-nowrap">
                          IP Address
                        </th>
                        <th className="border-r border-[#3b719f] p-2.5 font-bold uppercase tracking-wider">
                          Device / Browser Details
                        </th>
                        <th className="border-r border-[#3b719f] p-2.5 font-bold uppercase tracking-wider">
                          Access Location / Network
                        </th>
                        <th className="p-2.5 text-center font-bold uppercase tracking-wider whitespace-nowrap w-36">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loginSessions.length === 0 ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="text-center p-6 text-gray-500 italic bg-[#f9f9f9] border border-[#d2d6de]"
                          >
                            No login audit records found for this account.
                          </td>
                        </tr>
                      ) : (
                        loginSessions.map((session, index) => {
                          const isSuccess = session.status === "Success";
                          return (
                            <tr
                              key={session.id}
                              className={`border-b border-[#d2d6de] transition-colors duration-75 ${
                                session.isCurrentSession
                                  ? "bg-[#eef6fc] hover:bg-[#e3f0fa]"
                                  : index % 2 === 0
                                  ? "bg-white hover:bg-[#f1f1f1]"
                                  : "bg-[#f9f9f9] hover:bg-[#f1f1f1]"
                              }`}
                            >
                              {/* Serial Number */}
                              <td className="border-r border-[#d2d6de] p-2.5 text-center font-mono font-medium text-[#555555]">
                                {index + 1}
                              </td>

                              {/* Date & Time */}
                              <td className="border-r border-[#d2d6de] p-2.5 font-mono text-[#222222] whitespace-nowrap">
                                {session.dateTime}
                              </td>

                              {/* IP Address */}
                              <td className="border-r border-[#d2d6de] p-2.5 font-mono text-[#333333] whitespace-nowrap">
                                <span className="font-semibold">{session.ipAddress}</span>
                              </td>

                              {/* Device & Browser */}
                              <td className="border-r border-[#d2d6de] p-2.5 text-[#333333]">
                                <div className="flex items-center gap-1.5">
                                  {session.deviceType === "mobile" ? (
                                    <Smartphone className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                                  ) : session.deviceType === "laptop" ? (
                                    <Laptop className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                                  ) : (
                                    <Monitor className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                                  )}
                                  <span className="font-medium">{session.deviceBrowser}</span>
                                </div>
                              </td>

                              {/* Location / Network */}
                              <td className="border-r border-[#d2d6de] p-2.5 text-[#555555]">
                                {session.location}
                              </td>

                              {/* Status (Conditional Styling with Ternary Operators & Current Session Badge) */}
                              <td className="p-2.5 text-center whitespace-nowrap">
                                <div className="flex flex-col items-center justify-center gap-1">
                                  <span
                                    className={`text-xs uppercase tracking-wide ${
                                      isSuccess
                                        ? "text-[#3c763d] font-bold"
                                        : "text-[#c9302c] font-black"
                                    }`}
                                  >
                                    {session.status === "Success" ? "● Success" : "▲ Failed"}
                                  </span>

                                  {/* Current Session Badge */}
                                  {session.isCurrentSession && (
                                    <span className="inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#d9edf7] text-[#31708f] border border-[#bce8f1] rounded-none">
                                      Current Session
                                    </span>
                                  )}

                                  {/* Failure Reason Note */}
                                  {!isSuccess && session.failureReason && (
                                    <span
                                      className="text-[10px] text-[#a94442] italic block"
                                      title={session.failureReason}
                                    >
                                      [{session.failureReason}]
                                    </span>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Legacy Portal Table Footer Info */}
                <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-[#777777] border-t border-[#e5e5e5] pt-2.5">
                  <div>
                    <span>Showing 1 to {loginSessions.length} of {loginSessions.length} total active and historical authentication entries.</span>
                  </div>
                  <div className="font-mono mt-1 sm:mt-0">
                    Host: <span className="text-[#333333]">vtop2.vitbhopal.ac.in (172.16.0.12)</span>
                  </div>
                </div>

                {/* Security Guidelines Bottom Callout */}
                <div className="mt-5 border border-[#d2d6de] bg-[#f9fafb] p-3 rounded-none">
                  <h4 className="text-xs font-bold text-[#333333] uppercase tracking-wide mb-1.5">
                    Institutional Password &amp; Session Hygiene Guidelines:
                  </h4>
                  <ul className="list-disc list-inside text-xs text-[#555555] space-y-1">
                    <li>Always log out from shared systems in computer labs, libraries, or cyber cafes after completing academic work.</li>
                    <li>Avoid checking "Remember Me" on public or unmanaged mobile devices.</li>
                    <li>If you suspect your credentials have been compromised, immediately change your password in the <strong className="text-[#295b86]">Change Password</strong> module.</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
