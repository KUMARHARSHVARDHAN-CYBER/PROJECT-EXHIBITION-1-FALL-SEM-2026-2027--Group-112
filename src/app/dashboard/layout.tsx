"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  Home,
  Printer,
  Star,
  User,
  LogOut,
  History,
  Phone,
  Briefcase,
  Info,
  PawPrint,
  GraduationCap,
  Landmark,
  BookOpen,
  Rocket,
  Award,
  CreditCard,
  Building,
  Shield,
  Trophy,
  Anchor,
  Lock,
  ChevronDown,
  ChevronRight,
  X,
  CircleDot,
  Check
} from "lucide-react";
import NotificationSystem from "@/components/NotificationSystem";
import SearchBar from "@/components/Navigation/SearchBar";

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  subItems?: { name: string; href?: string }[];
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // Interactive UI state
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("Academics");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  // Session timer countdown simulation (20 minutes)
  const [remainingSeconds, setRemainingSeconds] = useState(20 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSec: number) => {
    const minutes = Math.floor(totalSec / 60);
    const seconds = totalSec % 60;
    return `${minutes}m ${seconds < 10 ? "0" : ""}${seconds}s`;
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (e) {
      console.error("Logout request error:", e);
    }
    router.push("/login");
  };

  const menuStructure: MenuItem[] = [
    {
      title: "Contact Us",
      icon: <Phone className="w-4 h-4 text-blue-800" />,
      subItems: [{ name: "Contact Details", href: "/dashboard/contact" }],
    },
    {
      title: "My Info",
      icon: <Briefcase className="w-4 h-4 text-blue-800" />,
      subItems: [
        { name: "Profile", href: "/dashboard/profile" },
        { name: "Credentials", href: "/dashboard/credentials" },
        { name: "Acknowledgement View", href: "/dashboard/acknowledgement" },
        { name: "Student Bank Info", href: "/dashboard/bank-info" },
        { name: "AAPAR ID Upload", href: "/dashboard/apaar-id" },
      ],
    },
    {
      title: "Info Corner",
      icon: <Info className="w-4 h-4 text-blue-800" />,
      subItems: [
        { name: "FAQ", href: "/dashboard/faq" },
        { name: "Spotlight", href: "/dashboard/spotlight" },
        { name: "General", href: "/dashboard/general" },
      ],
    },
    {
      title: "Proctor",
      icon: <PawPrint className="w-4 h-4 text-blue-800" />,
      subItems: [
        { name: "Proctor Details", href: "/dashboard/proctor-details" },
        { name: "Meeting Scheduler", href: "/dashboard/proctor-scheduler" },
      ],
    },
    {
      title: "Academics",
      icon: <GraduationCap className="w-4 h-4 text-blue-800" />,
      subItems: [
        { name: "My Curriculum", href: "/dashboard/curriculum" },
        { name: "Time Table", href: "/dashboard/timetable" },
        { name: "Class Attendance", href: "/dashboard/attendance" },
        { name: "Academics Calendar", href: "/dashboard/calendar" },
      ],
    },

    {
      title: "Examination",
      icon: <BookOpen className="w-4 h-4 text-blue-800" />,
      subItems: [
        { name: "Exam Schedule", href: "/dashboard/exam-schedule" },
        { name: "Marks", href: "/dashboard/marks" },
        { name: "Grades", href: "/dashboard/grades" },
        { name: "Grade History", href: "/dashboard/grade-history" },
      ],
    },
    {
      title: "Services",
      icon: <Rocket className="w-4 h-4 text-blue-800" />,
      subItems: [    
        { name: "Water Facility", href: "/dashboard/water-facility" },
        { name: "Transport Facility", href: "/dashboard/transport-facility" },
      ],
    },
    {
      title: "Bonafide",
      icon: <Award className="w-4 h-4 text-blue-800" />,
      subItems: [{ name: "Apply Bonafide", href: "/dashboard/bonafide" }],
    },
    {
      title: "Online Payments",
      icon: <CreditCard className="w-4 h-4 text-blue-800" />,
      subItems: [
        { name: "Payments and Receipts", href: "/dashboard/payments" },
        { name: "Fees Intimation", href: "/dashboard/fees-intimation" },
      ],
    },
    {
      title: "Hostels",
      icon: <Building className="w-4 h-4 text-blue-800" />,
      subItems: [
        { name: "Leave Request and History", href: "/dashboard/leave-request" },
        { name: "Hostel Room Allotment", href: "/dashboard/room-allotment" },
      ],
    },
    
    {
      title: "ECA Club Registration",
      icon: <Anchor className="w-4 h-4 text-blue-800" />,
      subItems: [{ name: "Club Enrollment", href: "/dashboard/club-registration" }],
    },
    {
      title: "My Account",
      icon: <Lock className="w-4 h-4 text-blue-800" />,
      subItems: [
        { name: "Change Password", href: "/dashboard/change-password" },
        { name: "Backup Codes", href: "/dashboard/backup-codes" },
        { name: "Login History", href: "/dashboard/login-history" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f9] text-[#212529] font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* ================= FIXED TOP HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B365D] text-white h-12 shadow px-2 flex items-center justify-between border-b border-blue-900">
        <div className="flex items-center space-x-2">
          {/* Sidebar Toggle Button */}
          <button
            type="button"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="p-1 hover:bg-blue-800/60 rounded text-white transition-colors"
            title="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* VIT Brand */}
          <Link href="/dashboard" className="flex items-center space-x-1">
            <span className="text-2xl font-black tracking-wider text-white">
              VIT
            </span>
            <span className="text-xs text-gray-200 font-normal hidden sm:inline">
              (Bhopal Campus)
            </span>
          </Link>

          {/* Quick Icons */}
          <Link
            href="/dashboard"
            className="text-gray-200 hover:text-white p-1 ml-1"
            title="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="text-gray-200 hover:text-white p-1"
            title="Print Document"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Quick Links Dropdown */}
          <div className="relative inline-block ml-1">
            <div className="flex items-center">
              <button
                type="button"
                className="p-1 text-yellow-400 hover:text-yellow-300"
                title="Favourites"
              >
                <Star className="w-3.5 h-3.5 fill-yellow-400" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setQuickLinksOpen(!quickLinksOpen);
                  setUserDropdownOpen(false);
                }}
                className="flex items-center gap-1 text-xs border border-blue-400/50 hover:bg-blue-800/70 px-2 py-0.5 rounded text-white transition-colors"
              >
                <span>Quick Links</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            {quickLinksOpen && (
              <div className="absolute left-0 mt-1 w-52 bg-white text-gray-800 shadow-lg rounded border border-gray-200 py-1 z-50 text-xs animate-in fade-in duration-100">
                <Link
                  href="/dashboard/profile"
                  onClick={() => setQuickLinksOpen(false)}
                  className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100 text-blue-900 font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <CircleDot className="w-3 h-3 text-blue-600" />
                    Student Profile
                  </span>
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setQuickLinksOpen(false)}
                  className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100"
                >
                  <span className="flex items-center gap-2">
                    <CircleDot className="w-3 h-3 text-blue-600" />
                    Course Details
                  </span>
                </Link>
                <Link
                  href="/dashboard/contact"
                  onClick={() => setQuickLinksOpen(false)}
                  className="flex items-center justify-between px-3 py-1.5 hover:bg-gray-100"
                >
                  <span className="flex items-center gap-2">
                    <CircleDot className="w-3 h-3 text-blue-600" />
                    Contact Directory
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Center / Omnibar Search */}
        <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 sm:mx-4">
          <SearchBar />
        </div>

        {/* Middle Quick Badges (Desktop) */}
        <div className="hidden xl:flex items-center space-x-2 shrink-0">
          <Link
            href="/dashboard"
            className="text-xs font-semibold text-white/90 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition"
          >
            Academics
          </Link>
          <Link
            href="/dashboard/profile"
            className="text-xs font-semibold bg-white/20 text-white px-2.5 py-0.5 rounded shadow-xs hover:bg-white/30 transition"
          >
            My Profile
          </Link>
          <span className="bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase px-2 py-0.5 rounded shadow-xs">
            DEVELOPMENT
          </span>
          <div className="text-xs text-white font-semibold flex items-center gap-1">
            <span className="text-gray-300">Session:</span>
            <span className="font-mono">{formatTimer(remainingSeconds)}</span>
          </div>
        </div>

        {/* Right User Info, Notifications & Dropdown */}
        <div className="flex items-center space-x-2 relative">
          {/* Real-Time Push Notification Bell */}
          <NotificationSystem userId="25MIM10100" />

          <button
            type="button"
            onClick={() => {
              setUserDropdownOpen(!userDropdownOpen);
              setQuickLinksOpen(false);
            }}
            className="flex items-center space-x-2 hover:bg-blue-800/60 py-1 px-2 rounded transition-colors text-left"
          >
            <div className="w-7 h-7 rounded-full bg-blue-200 border border-white/60 flex items-center justify-center text-[#1B365D] font-bold text-xs">
              <User className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-white hidden sm:inline">
              25MIM10100 (STUDENT)
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-300" />
          </button>

          {/* User Profile Menu */}
          {userDropdownOpen && (
            <div className="absolute right-0 top-11 w-60 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 text-xs text-gray-800 animate-in fade-in duration-100">
              <div className="px-4 py-2 border-b border-gray-100 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-[#1B365D] mb-1 font-bold text-lg">
                  KH
                </div>
                <div className="font-bold text-[#1B365D]">KUMAR HARSHVARDHAN</div>
                <div className="text-[11px] text-gray-500 font-mono">25MIM10100</div>
              </div>
              <div className="p-2 space-y-1.5">
                <Link
                  href="/dashboard/profile"
                  onClick={() => setUserDropdownOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>View Student Profile</span>
                </Link>
                <Link
                  href="/dashboard/login-history"
                  onClick={() => setUserDropdownOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded font-semibold transition"
                >
                  <History className="w-3.5 h-3.5" />
                  <span>Login History</span>
                </Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-green-600 hover:bg-green-700 text-white rounded font-semibold transition"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ================= BODY CONTAINER (SIDEBAR + MAIN) ================= */}
      <div className="flex-1 flex pt-12 overflow-hidden">
        {/* Slim Icon Bar (Fixed Left) */}
        <aside className="w-12 bg-[#e9ecef] border-r border-gray-300 flex flex-col items-center py-2 space-y-1 z-30 shrink-0 select-none">
          {menuStructure.map((item, idx) => (
            <div key={idx} className="relative group">
              <button
                type="button"
                onClick={() => {
                  setSidebarExpanded(true);
                  setOpenAccordion(item.title);
                }}
                className="w-9 h-9 flex items-center justify-center rounded hover:bg-blue-100 hover:text-blue-800 transition-colors"
                title={item.title}
              >
                {item.icon}
              </button>
              {/* Flyout Label on hover for slim bar */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-1 hidden group-hover:flex items-center px-2 py-1 bg-gray-900 text-white text-[11px] whitespace-nowrap rounded shadow-lg z-50 pointer-events-none">
                {item.title}
              </div>
            </div>
          ))}
        </aside>

        {/* Expandable Accordion Sidebar Drawer */}
        {sidebarExpanded && (
          <aside className="w-64 bg-white border-r border-gray-300 flex flex-col z-40 shrink-0 shadow-lg animate-in slide-in-from-left duration-150">
            <div className="bg-[#1B365D] text-white px-3 py-2 flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider">
                VTOP Menu
              </span>
              <button
                type="button"
                onClick={() => setSidebarExpanded(false)}
                className="text-gray-300 hover:text-white p-0.5"
                title="Close Sidebar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-gray-100 text-xs">
              {menuStructure.map((item, idx) => {
                const isOpen = openAccordion === item.title;
                return (
                  <div key={idx} className="bg-white">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenAccordion(isOpen ? null : item.title)
                      }
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-left font-semibold transition-colors ${
                        isOpen
                          ? "bg-blue-50 text-blue-900"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      {item.subItems && item.subItems.length > 0 && (
                        <ChevronRight
                          className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                            isOpen ? "rotate-90 text-blue-700" : ""
                          }`}
                        />
                      )}
                    </button>

                    {isOpen && item.subItems && (
                      <div className="bg-gray-50/80 py-1 pl-6 pr-2 border-t border-gray-100 space-y-0.5">
                        {item.subItems.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href || "/dashboard"}
                            onClick={() => setSidebarExpanded(false)}
                            className="flex items-center gap-2 py-1 px-2 rounded text-[11px] text-gray-600 hover:text-blue-900 hover:bg-blue-100/60 transition-colors"
                          >
                            <CircleDot className="w-2.5 h-2.5 text-blue-700 shrink-0" />
                            <span>{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>
        )}

        {/* ================= MAIN CONTENT AREA ================= */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#f4f6f9] flex flex-col justify-between">
          <div className="flex-1">
            {children}
          </div>
          <footer className="mt-8 pt-4 pb-2 border-t border-gray-200/80 text-center text-xs text-gray-500">
            <p>Copyright © 2026 Enhanced VTOP • Project Exhibition 1 (Group 112). All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
