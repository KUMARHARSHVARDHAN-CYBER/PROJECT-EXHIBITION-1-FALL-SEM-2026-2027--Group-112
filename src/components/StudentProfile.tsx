"use client";

import React, { useState } from "react";
import {
  User,
  GraduationCap,
  Users,
  ShieldCheck,
  Copy,
  Check,
  Printer,
  ChevronDown,
  ChevronUp,
  BadgeCheck,
} from "lucide-react";

export default function StudentProfile() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    personal: true,
    educational: true,
    family: true,
    proctor: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const expandAll = () => {
    setOpenSections({
      personal: true,
      educational: true,
      family: true,
      proctor: true,
    });
  };

  const collapseAll = () => {
    setOpenSections({
      personal: false,
      educational: false,
      family: false,
      proctor: false,
    });
  };

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-5 font-sans">
      {/* ================= TOP HEADER CARD WITH AVATAR & ACADEMIC DETAILS ================= */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        {/* Banner Top Gradient */}
        <div className="bg-gradient-to-r from-[#1B365D] via-[#1e90e7] to-[#1B365D] h-20 sm:h-24 relative px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30 tracking-wide uppercase">
              Student Profile
            </span>
            <span className="hidden sm:inline-flex bg-emerald-500/90 text-white text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-400">
              Active / Enrolled
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-1.5 bg-white text-[#1B365D] hover:bg-gray-100 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Profile</span>
            </button>
          </div>
        </div>

        {/* Profile Info Details: Responsive Flexbox (flex-col md:flex-row) */}
        <div className="px-4 sm:px-6 pb-6 pt-0">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-10 sm:-mt-12 mb-5">
            {/* Student Avatar with modern styling */}
            <div className="relative group shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ui-avatars.com/api/?name=Demo+Student&background=1e40af&color=ffffff&size=256"
                alt="Demo Student"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-50 shadow-lg bg-blue-900"
              />
              <div
                className="absolute bottom-1 right-1 bg-emerald-500 text-white rounded-full p-1.5 border-2 border-white shadow-md"
                title="Active Student"
              >
                <BadgeCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Academic Details on the Right (Neatly Aligned) */}
            <div className="flex-1 text-center md:text-left space-y-2.5 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                      Demo Student
                    </h1>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900 w-fit mx-auto md:mx-0">
                      Integrated M.Tech Student
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    School of Computing Science and Engineering
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-end gap-2 text-xs">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-2.5 py-1 rounded-md">
                    CGPA: 8.75 / 10.0
                  </span>
                  <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold px-2.5 py-1 rounded-md">
                    Attendance: 88%
                  </span>
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 font-bold px-2.5 py-1 rounded-md">
                    Semester 3
                  </span>
                </div>
              </div>

              {/* Academic Grid Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs pt-2 border-t border-gray-100">
                <div className="flex items-center justify-center md:justify-start gap-1.5 bg-gray-50/80 p-2 rounded-lg border border-gray-200/60">
                  <span className="font-bold text-[#c7254e] uppercase text-[11px]">
                    Register No:
                  </span>
                  <span className="font-bold text-gray-900 font-mono">
                    25MIM1001
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("25MIM1001", "regno")}
                    className="text-gray-400 hover:text-blue-600 p-0.5 ml-auto"
                    title="Copy Register Number"
                  >
                    {copiedField === "regno" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-1.5 bg-gray-50/80 p-2 rounded-lg border border-gray-200/60">
                  <span className="font-bold text-[#c7254e] uppercase text-[11px]">
                    Application No:
                  </span>
                  <span className="font-bold text-gray-900 font-mono">
                    2025100987
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-1.5 bg-gray-50/80 p-2 rounded-lg border border-gray-200/60">
                  <span className="font-bold text-[#c7254e] uppercase text-[11px]">
                    Program:
                  </span>
                  <span
                    className="font-semibold text-gray-800 truncate"
                    title="Integrated M.Tech - Software Engineering"
                  >
                    Integrated M.Tech - Software Engineering
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-1.5 bg-gray-50/80 p-2 rounded-lg border border-gray-200/60 sm:col-span-2">
                  <span className="font-bold text-[#c7254e] uppercase text-[11px]">
                    Email:
                  </span>
                  <a
                    href="mailto:demo.student2025@university.edu"
                    className="text-blue-700 hover:underline font-medium truncate"
                  >
                    demo.student2025@university.edu
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        "demo.student2025@university.edu",
                        "vitemail"
                      )
                    }
                    className="text-gray-400 hover:text-blue-600 p-0.5 ml-auto shrink-0"
                    title="Copy Official Email"
                  >
                    {copiedField === "vitemail" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-1.5 bg-gray-50/80 p-2 rounded-lg border border-gray-200/60">
                  <span className="font-bold text-[#c7254e] uppercase text-[11px]">
                    Phone:
                  </span>
                  <span className="font-semibold text-gray-800">
                    +91 98765 43210
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-1.5 bg-gray-50/80 p-2 rounded-lg border border-gray-200/60 sm:col-span-3">
                  <span className="font-bold text-[#c7254e] uppercase text-[11px]">
                    Faculty Advisor:
                  </span>
                  <span className="font-semibold text-gray-800 truncate">
                    Dr. Faculty Mentor (Cabin: AB1-304)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stat Chips Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 pt-4 border-t border-gray-100 text-xs">
            <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-gray-500 font-medium block">Enrollment</span>
              <span className="font-bold text-gray-900 font-mono">2025-2030</span>
            </div>
            <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-gray-500 font-medium block">Residence</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">HOSTELLER</span>
            </div>
            <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-gray-500 font-medium block">Blood Group</span>
              <span className="font-bold text-red-600">O+</span>
            </div>
            <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-gray-500 font-medium block">Native State</span>
              <span className="font-bold text-gray-800">CENTRAL STATE</span>
            </div>
            <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-gray-500 font-medium block">Attendance</span>
              <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-[11px]">88.0%</span>
            </div>
            <div className="bg-gray-50 border border-gray-200/80 rounded-lg p-2.5 text-center">
              <span className="text-[11px] text-gray-500 font-medium block">Status</span>
              <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[11px]">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTROLS: EXPAND / COLLAPSE ALL ================= */}
      <div className="flex items-center justify-between px-1 text-xs">
        <span className="text-gray-500 font-medium">
          Comprehensive Academic Records &amp; Institutional Credentials
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="text-blue-700 hover:text-blue-900 font-semibold px-2 py-1 rounded hover:bg-blue-50 transition cursor-pointer"
          >
            Expand All
          </button>
          <span className="text-gray-300">|</span>
          <button
            type="button"
            onClick={collapseAll}
            className="text-gray-600 hover:text-gray-900 font-semibold px-2 py-1 rounded hover:bg-gray-100 transition cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* ================= SECTION 1: PERSONAL INFORMATION ================= */}
      <div className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("personal")}
          className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#1e90e7] via-[#2672a4] to-[#1f3f74] text-white font-bold flex items-center justify-between shadow-xs transition hover:opacity-95 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="bg-[#fbc902] text-gray-900 p-2 rounded-lg flex items-center justify-center shadow-xs">
              <User className="w-4 h-4" />
            </span>
            <span className="tracking-wide text-sm sm:text-base font-bold uppercase">
              1. Personal Information
            </span>
          </div>
          {openSections.personal ? (
            <ChevronUp className="w-5 h-5 text-gray-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-200" />
          )}
        </button>

        {openSections.personal && (
          <div className="p-0 sm:p-4 animate-in fade-in duration-150">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5 w-1/3">
                      APPLICATION NUMBER
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-mono font-bold p-2.5">
                      2025100987
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      STUDENT NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      Demo Student
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      DATE OF BIRTH
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      15-Jul-2005
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      GENDER
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      MALE
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      NATIVE LANGUAGE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      ENGLISH
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      NATIVE STATE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      CENTRAL STATE
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      BLOOD GROUP
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold text-red-600 p-2.5">
                      O+
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      PHYSICALLY CHALLENGED
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      NO
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      COMMUNITY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      GENERAL
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      RELIGION
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      NIL
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      CASTE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      NIL
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      NATIONALITY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      INDIAN
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      HOSTELLER
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      HOSTELLER
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      AADHAR NUMBER
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-mono p-2.5">
                      XXXX-XXXX-1001
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      MOBILE NUMBER
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      +91 98765 43210
                    </td>
                  </tr>

                  {/* CURRENT ADDRESS HEADER */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-blue-100 text-[#1B365D] font-bold text-center p-2 uppercase tracking-wide border-y border-blue-200"
                    >
                      Current Address
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      STREET NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      CAMPUS RESIDENCE BLOCK A
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      AREA NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      UNIVERSITY TOWNSHIP
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      CITY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      TECH CITY
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      STATE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      CENTRAL STATE
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      COUNTRY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      INDIA
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      PINCODE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-mono p-2.5">
                      462001
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      EMAIL
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      <a
                        href="mailto:demo.student2025@university.edu"
                        className="text-blue-700 hover:underline font-medium"
                      >
                        demo.student2025@university.edu
                      </a>
                    </td>
                  </tr>

                  {/* PERMANENT ADDRESS HEADER */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-blue-100 text-[#1B365D] font-bold text-center p-2 uppercase tracking-wide border-y border-blue-200"
                    >
                      Permanent Address
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      STREET NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      123 ACADEMIC ENCLAVE
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      AREA NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      NORTH CAMPUS
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      CITY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      TECH CITY
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      STATE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      CENTRAL STATE
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      COUNTRY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      INDIA
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      PINCODE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-mono p-2.5">
                      462001
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      EMAIL
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      <a
                        href="mailto:demo.student2025@university.edu"
                        className="text-blue-700 hover:underline font-medium"
                      >
                        demo.student2025@university.edu
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      EMERGENCY CONTACT
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-mono p-2.5">
                      +91 98765 43211
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ================= SECTION 2: EDUCATIONAL INFORMATION ================= */}
      <div className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("educational")}
          className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#1e90e7] via-[#2672a4] to-[#1f3f74] text-white font-bold flex items-center justify-between shadow-xs transition hover:opacity-95 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="bg-[#fbc902] text-gray-900 p-2 rounded-lg flex items-center justify-center shadow-xs">
              <GraduationCap className="w-4 h-4" />
            </span>
            <span className="tracking-wide text-sm sm:text-base font-bold uppercase">
              2. Educational Information
            </span>
          </div>
          {openSections.educational ? (
            <ChevronUp className="w-5 h-5 text-gray-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-200" />
          )}
        </button>

        {openSections.educational && (
          <div className="p-0 sm:p-4 animate-in fade-in duration-150">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5 w-1/3">
                      APPLIED DEGREE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-semibold p-2.5">
                      INTEGRATED PG
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      EDUCATIONAL QUALIFICATION
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      12TH / HIGHER SECONDARY
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      BRANCH / GROUP STUDIED
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      SCIENCE (PCM)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      SCHOOL NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-semibold p-2.5">
                      MODEL HIGHER SECONDARY SCHOOL
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      MEDIUM OF STUDY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      ENGLISH
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      BOARD / UNIVERSITY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      CENTRAL BOARD OF SECONDARY EDUCATION (CBSE)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      REGISTER NO / ROLL NO
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-mono font-bold p-2.5">
                      12345678
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      CLASS OBTAINED
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      FIRST CLASS WITH DISTINCTION
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      YEAR OF PASSING
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      2024
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      MONTH OF PASSING
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      MAY
                    </td>
                  </tr>

                  {/* SCHOOL ADDRESS */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-blue-100 text-[#1B365D] font-bold text-center p-2 uppercase tracking-wide border-y border-blue-200"
                    >
                      School / College Address
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      AREA NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      INSTITUTIONAL AREA
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      CITY / DISTRICT NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      TECH CITY
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      STATE NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      CENTRAL STATE
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      PINCODE / ZIPCODE
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-mono p-2.5">
                      462001
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      BREAK IN STUDY
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      NO
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      REASON
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      -
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ================= SECTION 3: FAMILY INFORMATION ================= */}
      <div className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("family")}
          className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#1e90e7] via-[#2672a4] to-[#1f3f74] text-white font-bold flex items-center justify-between shadow-xs transition hover:opacity-95 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="bg-[#fbc902] text-gray-900 p-2 rounded-lg flex items-center justify-center shadow-xs">
              <Users className="w-4 h-4" />
            </span>
            <span className="tracking-wide text-sm sm:text-base font-bold uppercase">
              3. Family Information
            </span>
          </div>
          {openSections.family ? (
            <ChevronUp className="w-5 h-5 text-gray-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-200" />
          )}
        </button>

        {openSections.family && (
          <div className="p-0 sm:p-4 animate-in fade-in duration-150">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5 w-1/3">
                      NO. OF BROTHERS
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      0
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      NO. OF SISTERS
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      0
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      IF SIBLING STUDYING IN VIT
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      NO
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      IF SIBLING STUDIED IN VIT
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      NO
                    </td>
                  </tr>

                  {/* FATHER DETAILS HEADER */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-blue-100 text-[#1B365D] font-bold text-center p-2 uppercase tracking-wide border-y border-blue-200"
                    >
                      Father Details
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      FATHER NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      GUARDIAN FATHER
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      QUALIFICATION
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      POST GRADUATE
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      OCCUPATION
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      PRIVATE SECTOR
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      ORGANIZATION
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      ENTERPRISE CORP
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      DESIGNATION
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-semibold p-2.5">
                      SENIOR MANAGER
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      EMPLOYED IN VIT
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      NO
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      MOBILE NUMBER
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      +91 98765 00001
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      EMAIL
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      <a
                        href="mailto:guardian.father@example.com"
                        className="text-blue-700 hover:underline"
                      >
                        guardian.father@example.com
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      ANNUAL INCOME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold text-emerald-700 p-2.5">
                      &gt; 10,00,000
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      OFFICIAL ADDRESS
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      SUITE 400, COMMERCIAL TOWER, TECH CITY
                    </td>
                  </tr>

                  {/* MOTHER DETAILS HEADER */}
                  <tr>
                    <td
                      colSpan={2}
                      className="bg-blue-100 text-[#1B365D] font-bold text-center p-2 uppercase tracking-wide border-y border-blue-200"
                    >
                      Mother Details
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      MOTHER NAME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      GUARDIAN MOTHER
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      QUALIFICATION
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      POST GRADUATE
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      OCCUPATION
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      EDUCATION / HOMEMAKER
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      MOBILE NUMBER
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                      +91 98765 00002
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      EMAIL
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                      <a
                        href="mailto:guardian.mother@example.com"
                        className="text-blue-700 hover:underline"
                      >
                        guardian.mother@example.com
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      ANNUAL INCOME
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-bold text-emerald-700 p-2.5">
                      &gt; 10,00,000
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                      GUARDIAN INFO
                    </td>
                    <td className="bg-[#FAF0DD] text-gray-900 font-semibold p-2.5">
                      PARENT
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ================= SECTION 4: PROCTOR INFORMATION ================= */}
      <div className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("proctor")}
          className="w-full text-left px-4 py-3 bg-gradient-to-r from-[#1e90e7] via-[#2672a4] to-[#1f3f74] text-white font-bold flex items-center justify-between shadow-xs transition hover:opacity-95 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="bg-[#fbc902] text-gray-900 p-2 rounded-lg flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <span className="tracking-wide text-sm sm:text-base font-bold uppercase">
              4. Proctor Information
            </span>
          </div>
          {openSections.proctor ? (
            <ChevronUp className="w-5 h-5 text-gray-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-200" />
          )}
        </button>

        {openSections.proctor && (
          <div className="p-4 sm:p-6 animate-in fade-in duration-150">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Proctor Photo Card */}
              <div className="md:col-span-4 flex flex-col items-center text-center p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="w-32 h-32 rounded-full border-4 border-blue-100 overflow-hidden shadow-md bg-white mb-3 relative flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ui-avatars.com/api/?name=Faculty+Mentor&background=0f172a&color=ffffff&size=256"
                    alt="Dr. Faculty Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Dr. Faculty Mentor</h3>
                <span className="text-[11px] text-blue-700 font-semibold mt-0.5">
                  PROFESSOR &amp; FACULTY ADVISOR
                </span>
                <span className="bg-blue-100 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-full mt-2 font-mono">
                  FACULTY ID: FAC-100201
                </span>
              </div>

              {/* Proctor Details Table */}
              <div className="md:col-span-8 overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 font-bold text-gray-700 p-2.5 w-1/3">
                        FACULTY ID
                      </td>
                      <td className="bg-[#FAF0DD] text-gray-900 font-mono font-bold p-2.5">
                        FAC-100201
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                        FACULTY NAME
                      </td>
                      <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                        Dr. Faculty Mentor
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                        CABIN
                      </td>
                      <td className="bg-[#FAF0DD] text-gray-900 font-semibold p-2.5">
                        AB1-304
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                        DEPARTMENT
                      </td>
                      <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                        Department of Software and Computer Engineering
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                        SCHOOL
                      </td>
                      <td className="bg-[#FAF0DD] text-gray-900 font-medium p-2.5">
                        School of Computing Science and Engineering
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                        DESIGNATION
                      </td>
                      <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                        PROFESSOR &amp; FACULTY ADVISOR
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                        EMAIL
                      </td>
                      <td className="bg-[#FAF0DD] text-gray-900 p-2.5">
                        <a
                          href="mailto:faculty.mentor@university.edu"
                          className="text-blue-700 hover:underline font-medium"
                        >
                          faculty.mentor@university.edu
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 font-bold text-gray-700 p-2.5">
                        MOBILE NUMBER
                      </td>
                      <td className="bg-[#FAF0DD] text-gray-900 font-bold p-2.5">
                        +91 98765 43200
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hidden inputs matching form schema */}
      <input type="hidden" name="applno" id="applno" value="2025100987" />
      <input type="hidden" name="regno" id="regno" value="25MIM1001" />
    </div>
  );
}
