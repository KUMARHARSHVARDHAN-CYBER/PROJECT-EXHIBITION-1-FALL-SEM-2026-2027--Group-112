"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  X,
  ChevronDown,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Send,
  SlidersHorizontal,
  RotateCcw,
  Save,
  CheckCircle2,
  AlertTriangle,
  Clock,
  MapPin,
  BookOpen,
  User,
  Sparkles,
  Search,
  School,
  FileText,
  Percent,
  Calculator,
  Calendar,
  MessageSquare,
  Award,
} from "lucide-react";
import { StudentProfile, Course, TimetableEntry, FacultyMember } from "@/lib/assistant/assistantData";
import { assistantService } from "@/lib/assistant/assistantService";
import { studentStore } from "@/lib/assistant/studentStore";
import { ChatResponse, WidgetType } from "@/lib/assistant/types";

interface MessageItem {
  id: string;
  sender: "user" | "bot";
  text: string;
  widget_type?: WidgetType;
  widget_data?: any;
  timestamp: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTTS, setIsTTS] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Student State
  const [activeStudent, setActiveStudent] = useState<StudentProfile | null>(null);
  const [allStudents, setAllStudents] = useState<StudentProfile[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string>("25MIM10100");
  const [editCgpa, setEditCgpa] = useState<string>("8.30");
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>("");
  const [editAttended, setEditAttended] = useState<number>(22);
  const [editTotal, setEditTotal] = useState<number>(22);

  // Messages
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize data
  useEffect(() => {
    loadProfiles();
    initSpeechRecognition();
  }, []);

  // Update initial welcome message once student loads
  useEffect(() => {
    if (activeStudent && messages.length === 0) {
      setMessages([
        {
          id: "msg-welcome",
          sender: "bot",
          text: `👋 Hello **${activeStudent.name}**! I am your **VTOP AI Academic Assistant** for VIT Bhopal.\n\nI can check your **attendance margins**, calculate **safe bunks**, show your **daily timetable**, locate **371 teacher cabins**, or estimate your **FAT exam marks**.\n\nHow can I help you today?`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  }, [activeStudent]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const loadProfiles = async () => {
    try {
      const profiles = studentStore.getAllStudents();
      setAllStudents(profiles);

      const active = studentStore.getActiveStudent();
      if (active) {
        syncActiveStudent(active);
      }
    } catch (e) {
      console.error("[AIAssistant] Error loading profiles:", e);
    }
  };

  const syncActiveStudent = (student: StudentProfile) => {
    setActiveStudent(student);
    setSelectedStudentId(student.id);
    setEditCgpa(student.cgpa.toString());

    if (student.courses && student.courses.length > 0) {
      const firstCourse = student.courses[0];
      setSelectedCourseCode(firstCourse.code);
      setEditAttended(firstCourse.attended || 0);
      setEditTotal(firstCourse.total || 0);
    }
  };

  const handleCourseChange = (courseCode: string) => {
    setSelectedCourseCode(courseCode);
    if (!activeStudent?.courses) return;
    const c = activeStudent.courses.find((item) => item.code === courseCode);
    if (c) {
      setEditAttended(c.attended || 0);
      setEditTotal(c.total || 0);
    }
  };

  const handleSwitchStudent = async (targetId: string) => {
    try {
      setSelectedStudentId(targetId);
      studentStore.setActiveStudent(targetId);
      const updated = studentStore.getActiveStudent();

      if (updated) {
        syncActiveStudent(updated);
        addBotMessage(
          `🔄 Switched active student profile to **${updated.name}** (\`${updated.reg_no}\`). All attendance calculations, timetable slots, and proctor details are now refreshed.`
        );
      }
    } catch (err) {
      console.error("[AIAssistant] Switch student error:", err);
    }
  };

  const handleResetToDefault = async () => {
    await handleSwitchStudent("25MIM10100");
    setDrawerOpen(false);
  };

  const handleSaveProfile = async () => {
    if (!activeStudent) return;
    const parsedCgpa = parseFloat(editCgpa) || activeStudent.cgpa;

    try {
      // 1. Update CGPA
      studentStore.updateProfile(activeStudent.id, { cgpa: parsedCgpa });

      // 2. Update Attendance
      if (selectedCourseCode) {
        studentStore.updateAttendance(activeStudent.id, selectedCourseCode, editAttended, editTotal);
      }

      // Refresh
      const updated = studentStore.getStudentById(activeStudent.id);
      if (updated) {
        syncActiveStudent(updated);
      }
      setDrawerOpen(false);

      const nineBadge = parsedCgpa >= 9.0 ? "🌟 (9-Pointer Attendance Exempt)" : "";
      addBotMessage(
        `💾 **Changes Saved!** Updated records for **${activeStudent.name}**.\n- **CGPA:** \`${parsedCgpa}\` ${nineBadge}\n- **Updated Course:** \`${selectedCourseCode}\` (${editAttended}/${editTotal} classes)`
      );
    } catch (err) {
      console.error("[AIAssistant] Save error:", err);
    }
  };

  // Speech Recognition (STT)
  const initSpeechRecognition = () => {
    if (typeof window === "undefined") return;
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      const recognition = new SpeechRec();
      recognition.continuous = false;
      recognition.lang = "en-IN";

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputValue(transcript);
          handleSendMessage(transcript);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
    }
  };

  // Text to Speech (TTS)
  const speakText = (text: string) => {
    if (!isTTS || typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const clean = text
      .replace(/###/g, "")
      .replace(/[*_`#]/g, "")
      .replace(/⚠️/g, "Warning:")
      .replace(/📍/g, "")
      .replace(/🕒/g, "")
      .replace(/🌟/g, "");

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const addBotMessage = (text: string, widget_type?: WidgetType, widget_data?: any) => {
    const newMsg: MessageItem = {
      id: `bot-${Date.now()}`,
      sender: "bot",
      text,
      widget_type,
      widget_data,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    if (isTTS) {
      speakText(text);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    // Add user message
    const userMsg: MessageItem = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Simulate realistic AI assistant response latency
      await new Promise((resolve) => setTimeout(resolve, 300));
      const response: ChatResponse = await assistantService.processQuery(query);

      addBotMessage(response.text, response.widget_type, response.widget_data);

      if (response.intent === "profile_switched") {
        const current = studentStore.getActiveStudent();
        if (current) syncActiveStudent(current);
      }
    } catch (err) {
      console.error("[AIAssistant] Message error:", err);
      addBotMessage("⚠️ Unable to process query. Please try asking again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Quick action chips
  const quickChips = [
    { label: "Attendance Summary", query: "Show my overall attendance summary", icon: <Percent className="w-3.5 h-3.5" /> },
    { label: "Leave in AI/ML?", query: "Can I take leave in Fundamentals in AI and ML tomorrow?", icon: <AlertTriangle className="w-3.5 h-3.5" /> },
    { label: "Today's Schedule", query: "What classes do I have today?", icon: <Clock className="w-3.5 h-3.5" /> },
    { label: "Locate Proctor", query: "Where is my proctor Dr. S. POORNIMA cabin?", icon: <MapPin className="w-3.5 h-3.5" /> },
    { label: "FAT Marks Predictor", query: "What marks do I need in FAT for S grade in Data Structures?", icon: <Calculator className="w-3.5 h-3.5" /> },
    { label: "9-Pointer Rule", query: "What is the 9-pointer attendance rule at VIT Bhopal?", icon: <Award className="w-3.5 h-3.5" /> },
    { label: "Faculty Cabins", query: "Where is Dr. RUDRA KALYAN NAYAK's cabin?", icon: <User className="w-3.5 h-3.5" /> },
  ];

  // Markdown simple renderer
  const renderFormattedText = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");

    return (
      <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1.5" />;

          // Heading 3
          if (line.startsWith("### ")) {
            return (
              <h4 key={idx} className="font-bold text-cyan-400 text-sm sm:text-base mt-2 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{line.replace("### ", "")}</span>
              </h4>
            );
          }
          // Heading 2
          if (line.startsWith("## ")) {
            return (
              <h3 key={idx} className="font-bold text-cyan-300 text-base mt-2 mb-1">
                {line.replace("## ", "")}
              </h3>
            );
          }
          // Divider
          if (line.trim() === "---") {
            return <hr key={idx} className="border-slate-700/60 my-2" />;
          }

          // Format bold and backticks inline
          const formattedLine = line
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-100">$1</strong>')
            .replace(/`([^`]+)`/g, '<code class="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded text-[11px] font-mono">$1</code>')
            .replace(/\*([^*]+)\*/g, '<em class="text-slate-300">$1</em>');

          if (line.startsWith("- ") || line.startsWith("• ")) {
            return (
              <div key={idx} className="flex items-start gap-2 ml-1">
                <span className="text-cyan-400 font-bold text-xs mt-0.5">•</span>
                <span dangerouslySetInnerHTML={{ __html: formattedLine.replace(/^[-•]\s*/, "") }} />
              </div>
            );
          }

          return <p key={idx} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
        })}
      </div>
    );
  };

  // Render Rich Widget Cards
  const renderWidget = (widgetType?: WidgetType, data?: any) => {
    if (!widgetType || !data) return null;

    if (widgetType === "attendance_card") {
      const c = data.course;
      const calc = data.calculation;
      if (!c || !calc) return null;

      const isSafe = calc.status === "safe";
      const isWarning = calc.status === "warning";
      const barColor = isSafe ? "bg-emerald-500" : isWarning ? "bg-amber-500" : "bg-rose-500";
      const statusBadge = isSafe ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" : isWarning ? "bg-amber-500/20 text-amber-300 border-amber-500/30" : "bg-rose-500/20 text-rose-300 border-rose-500/30";

      return (
        <div className="mt-3 p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl space-y-3 shadow-inner">
          <div className="flex items-center justify-between gap-2">
            <div className="font-semibold text-slate-200 text-xs sm:text-sm">
              {c.title} <span className="text-slate-400 font-mono text-xs">({c.code})</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs font-mono font-bold border ${statusBadge}`}>
              {calc.current_percentage}%
            </span>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div className={`h-full ${barColor} transition-all duration-500`} style={{ width: `${Math.min(calc.current_percentage, 100)}%` }} />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50">
              <span className="text-slate-400 block text-[10px]">Attended/Total</span>
              <span className="font-bold text-slate-200 font-mono text-xs">{calc.attended}/{calc.total}</span>
            </div>
            <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50">
              <span className="text-slate-400 block text-[10px]">Safe Bunks</span>
              <span className={`font-bold font-mono text-xs ${calc.safe_bunks > 0 ? "text-emerald-400" : "text-slate-400"}`}>
                {calc.safe_bunks}
              </span>
            </div>
            <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50">
              <span className="text-slate-400 block text-[10px]">To Recover</span>
              <span className={`font-bold font-mono text-xs ${calc.classes_needed_to_recover > 0 ? "text-rose-400" : "text-slate-400"}`}>
                {calc.classes_needed_to_recover}
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (widgetType === "timetable_card") {
      const schedule: TimetableEntry[] = data.schedule || [];
      if (schedule.length === 0) return null;

      return (
        <div className="mt-3 p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-2">
          <div className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Schedule for {data.day}:
          </div>
          <div className="space-y-2 divide-y divide-slate-800/60">
            {schedule.map((item, idx) => (
              <div key={idx} className="pt-2 first:pt-0 flex items-start gap-2.5">
                <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-[10px] font-mono font-bold whitespace-nowrap shrink-0 mt-0.5">
                  {item.time}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-slate-200 truncate">{item.course} <span className="text-slate-400 font-mono text-[10px]">({item.code})</span></div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5 flex-wrap">
                    <span>📍 {item.venue}</span>
                    <span className="text-slate-600">•</span>
                    <span className="font-mono bg-slate-800 px-1 py-0.2 rounded text-[10px] text-slate-300">Slot: {item.slot}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (widgetType === "marks_card") {
      const calc = data.calculation;
      if (!calc) return null;

      return (
        <div className="mt-3 p-3.5 bg-slate-900/90 border border-cyan-500/30 rounded-xl space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-cyan-300 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-cyan-400" /> Target Grade: <span className="text-amber-400 font-black">{calc.target_grade}</span>
            </span>
            <span className="text-slate-300 text-xs font-mono">Internal: {calc.internal_marks_scored}/60</span>
          </div>

          <div className="bg-cyan-950/40 border border-cyan-500/20 p-3 rounded-lg text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Required FAT Exam Written Score</span>
            <div className="text-lg font-black text-cyan-400 mt-0.5 font-mono">
              {calc.required_fat_raw_100} <span className="text-xs text-slate-400 font-normal">/ 100</span>
              <span className="text-xs text-cyan-300 font-medium ml-1.5">({calc.required_fat_weighted_40.toFixed(1)}/40)</span>
            </div>
          </div>
        </div>
      );
    }

    if (widgetType === "faculty_card") {
      const faculties: FacultyMember[] = Array.isArray(data) ? data : [data];
      return (
        <div className="mt-3 space-y-2">
          {faculties.map((f, idx) => (
            <div key={idx} className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl space-y-1.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-bold text-xs text-slate-200">{f.name}</div>
                  <div className="text-[11px] text-slate-400">{f.designation} • {f.school}</div>
                </div>
                <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded text-[11px] font-mono font-bold whitespace-nowrap">
                  📍 {f.cabin}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 space-y-0.5 pt-1 border-t border-slate-800/60">
                <div>✉️ <code className="text-cyan-400 font-mono text-[10px]">{f.email}</code></div>
                <div>🕒 <span className="text-slate-300">{f.office_hours}</span></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  // Calculate overall attendance for mini-bar
  const overallAttendancePct = () => {
    if (!activeStudent || !activeStudent.courses || activeStudent.courses.length === 0) return "100.0%";
    const totAtt = activeStudent.courses.reduce((sum, c) => sum + (c.attended || 0), 0);
    const totCls = activeStudent.courses.reduce((sum, c) => sum + (c.total || 0), 0);
    return totCls > 0 ? `${((totAtt / totCls) * 100).toFixed(1)}%` : "100.0%";
  };

  return (
    <div className="fixed bottom-5 right-5 z-[99999] font-sans antialiased text-slate-100">
      {/* -------------------------------------------------------------
          1. FLOATING LAUNCHER BUTTON
      ------------------------------------------------------------- */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/40"
          aria-label="Open VTOP AI Assistant"
          title="Chat with VTOP AI Assistant"
        >
          {/* Online Glowing Pulse Dot */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-950"></span>
          </span>

          <GraduationCap className="w-7 h-7 transition-transform group-hover:rotate-6" />
        </button>
      )}

      {/* -------------------------------------------------------------
          2. EXPANDED CHAT POPOVER WINDOW
      ------------------------------------------------------------- */}
      {isOpen && (
        <div
          className="flex flex-col w-[92vw] sm:w-[420px] md:w-[440px] h-[85vh] sm:h-[620px] max-h-[700px] bg-slate-950/95 backdrop-blur-2xl border border-slate-800/80 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border-b border-slate-800/80 p-3.5 flex flex-col gap-2 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-100 flex items-center gap-1.5 leading-none">
                    VTOP AI Assistant
                  </h3>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Online • VIT Bhopal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Voice TTS Toggle */}
                <button
                  onClick={() => {
                    setIsTTS(!isTTS);
                    if (isTTS && typeof window !== "undefined" && window.speechSynthesis) {
                      window.speechSynthesis.cancel();
                    }
                  }}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${
                    isTTS ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" : "text-slate-400 hover:bg-slate-800"
                  }`}
                  title={isTTS ? "Mute Voice Audio" : "Enable Voice Audio"}
                >
                  {isTTS ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
                  title="Close Assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Student Mini Status Bar */}
            {activeStudent && (
              <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800/80 px-2.5 py-1.5 rounded-lg text-[11px]">
                <div className="flex items-center gap-1.5 truncate max-w-[55%]">
                  <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-medium text-slate-200 truncate">
                    {activeStudent.name} <span className="text-slate-400 font-mono">({activeStudent.reg_no})</span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={`px-1.5 py-0.5 rounded font-mono font-bold text-[10px] ${
                    activeStudent.cgpa >= 9.0 ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" : "bg-slate-800 text-slate-300"
                  }`}>
                    {activeStudent.cgpa >= 9.0 ? "★ " : ""}CGPA {activeStudent.cgpa}
                  </span>
                  <span className="px-1.5 py-0.5 rounded font-mono font-bold text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {overallAttendancePct()}
                  </span>
                  <button
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2 py-0.5 rounded text-[10px] font-medium transition-colors border border-slate-700/60"
                    title="Switch student profile or edit attendance"
                  >
                    <SlidersHorizontal className="w-3 h-3" /> Edit
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* -------------------------------------------------------------
              3. SLIDE-IN STUDENT SWITCHER & RECORD EDITOR DRAWER
          ------------------------------------------------------------- */}
          {drawerOpen && (
            <div className="bg-slate-900 border-b border-slate-800 p-3 space-y-3 shrink-0 animate-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" /> Student Profile & Records Editor
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="text-slate-400 hover:text-white text-xs p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Select Active Student */}
              <div>
                <label className="text-[10px] text-slate-400 block mb-1">
                  Active Student (77 Roster Profiles):
                </label>
                <select
                  value={selectedStudentId}
                  onChange={(e) => handleSwitchStudent(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-cyan-500 font-mono"
                >
                  {allStudents.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.id === "25MIM10100" ? "⭐ " : ""}{s.name} ({s.reg_no}) — CGPA: {s.cgpa}
                    </option>
                  ))}
                </select>
              </div>

              {/* Edit CGPA & 9-Pointer Test */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">
                    Edit CGPA (9-Pointer Test):
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={editCgpa}
                    onChange={(e) => setEditCgpa(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">
                    Select Enrolled Course:
                  </label>
                  <select
                    value={selectedCourseCode}
                    onChange={(e) => handleCourseChange(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-cyan-500 font-mono"
                  >
                    {activeStudent?.courses?.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Edit Attendance */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Attended Classes:</label>
                  <input
                    type="number"
                    min="0"
                    value={editAttended}
                    onChange={(e) => setEditAttended(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 block mb-1">Total Classes:</label>
                  <input
                    type="number"
                    min="1"
                    value={editTotal}
                    onChange={(e) => setEditTotal(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-1 gap-2">
                <button
                  onClick={handleResetToDefault}
                  className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Reset to Harshvardhan
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="flex items-center gap-1 text-[10px] font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-3 py-1 rounded shadow transition-all"
                >
                  <Save className="w-3 h-3" /> Save & Recalculate
                </button>
              </div>
            </div>
          )}

          {/* -------------------------------------------------------------
              4. QUICK SUGGESTION CHIPS BAR
          ------------------------------------------------------------- */}
          <div className="flex items-center gap-1.5 p-2 bg-slate-900/40 border-b border-slate-800/40 overflow-x-auto no-scrollbar shrink-0">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip.query)}
                className="flex items-center gap-1.5 text-[11px] font-medium text-slate-300 hover:text-cyan-300 bg-slate-800/70 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/40 px-2.5 py-1 rounded-full whitespace-nowrap transition-all shrink-0"
              >
                {chip.icon}
                <span>{chip.label}</span>
              </button>
            ))}
          </div>

          {/* -------------------------------------------------------------
              5. MESSAGES BODY STREAM
          ------------------------------------------------------------- */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 bg-slate-950/40 scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/20 rounded-br-none"
                      : "bg-slate-900/90 border border-slate-800 text-slate-200 shadow-sm rounded-bl-none"
                  }`}
                >
                  {renderFormattedText(msg.text)}
                  {renderWidget(msg.widget_type, msg.widget_data)}

                  {/* Audio Listen Button for Bot Messages */}
                  {msg.sender === "bot" && (
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800/50 text-[10px] text-slate-500">
                      <span>{msg.timestamp}</span>
                      <button
                        onClick={() => speakText(msg.text)}
                        className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/20 transition-colors"
                        title="Read aloud"
                      >
                        <Volume2 className="w-3 h-3" /> Listen
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Loading / Thinking Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl rounded-bl-none px-3.5 py-2 text-xs text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Analyzing VTOP records & calculating margins...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* -------------------------------------------------------------
              6. VOICE LISTENING STATUS BAR
          ------------------------------------------------------------- */}
          {isListening && (
            <div className="bg-rose-950/80 border-t border-rose-500/30 px-3 py-1.5 flex items-center justify-between text-xs text-rose-300 shrink-0 animate-pulse">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                <span className="font-medium">Listening... Speak your question now!</span>
              </div>
              <button
                onClick={toggleListening}
                className="text-rose-400 hover:text-white text-[11px] underline"
              >
                Cancel
              </button>
            </div>
          )}

          {/* -------------------------------------------------------------
              7. INPUT BAR WITH VOICE STT & SUBMIT
          ------------------------------------------------------------- */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-slate-900 border-t border-slate-800/80 flex items-center gap-2 shrink-0"
          >
            {/* Mic STT Button */}
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2 rounded-xl transition-all ${
                isListening
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30 animate-pulse"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              }`}
              title="Speak Question (Voice Input)"
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            {/* Text Input */}
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask VTOP Assistant (e.g. Can I bunk AI/ML?)"
              className="flex-1 bg-slate-950 border border-slate-700/80 focus:border-cyan-500 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed shadow transition-all"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
