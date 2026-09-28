"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Video,
  MapPin,
  XCircle,
  Loader2,
  HelpCircle,
  History,
  Send,
  Building,
  Mail,
  Phone,
} from "lucide-react";
import { mockProctorDetails } from "@/components/ProctorDetails";

// ==========================================
// 1. DATA CONTRACTS & MOCK DATASETS
// ==========================================

export interface MeetingSlot {
  id: string;
  date: string; // e.g. "12-Sep-2026"
  day: string; // e.g. "Thursday"
  time: string; // e.g. "10:00 AM - 10:30 AM"
  available: boolean;
  venue: string;
  totalSeats: number;
  bookedSeats: number;
}

export interface BookedMeeting {
  meetingId: string;
  slotId: string;
  slotDate: string;
  slotTime: string;
  category: string;
  mode: "IN_PERSON" | "ONLINE_TEAMS";
  venue: string;
  reason: string;
  status: "Confirmed" | "Completed" | "Cancelled";
  bookedOn: string;
  proctorRemarks?: string;
}

export const INITIAL_AVAILABLE_SLOTS: MeetingSlot[] = [
  {
    id: "SLOT-01",
    date: "12-Sep-2026",
    day: "Thursday",
    time: "10:00 AM - 10:30 AM",
    available: true,
    venue: "Cabin AB-308A, Ramanujan Block",
    totalSeats: 1,
    bookedSeats: 0,
  },
  {
    id: "SLOT-02",
    date: "12-Sep-2026",
    day: "Thursday",
    time: "11:30 AM - 12:00 PM",
    available: true,
    venue: "Cabin AB-308A, Ramanujan Block",
    totalSeats: 1,
    bookedSeats: 0,
  },
  {
    id: "SLOT-03",
    date: "12-Sep-2026",
    day: "Thursday",
    time: "02:00 PM - 02:30 PM",
    available: true,
    venue: "Cabin AB-308A, Ramanujan Block",
    totalSeats: 1,
    bookedSeats: 0,
  },
  {
    id: "SLOT-04",
    date: "13-Sep-2026",
    day: "Friday",
    time: "04:00 PM - 04:30 PM",
    available: true,
    venue: "Cabin AB-308A, Ramanujan Block",
    totalSeats: 1,
    bookedSeats: 0,
  },
  {
    id: "SLOT-05",
    date: "15-Sep-2026",
    day: "Monday",
    time: "09:30 AM - 10:00 AM",
    available: true,
    venue: "Cabin AB-308A, Ramanujan Block",
    totalSeats: 1,
    bookedSeats: 0,
  },
  {
    id: "SLOT-06",
    date: "15-Sep-2026",
    day: "Monday",
    time: "03:00 PM - 03:30 PM",
    available: true,
    venue: "MS Teams (Online Portal)",
    totalSeats: 1,
    bookedSeats: 0,
  },
];

export const MEETING_CATEGORIES = [
  { code: "ATTENDANCE_CONDONATION", label: "Attendance Condonation (Below 75%)" },
  { code: "ACADEMIC_GUIDANCE", label: "Academic Guidance & Course Registration" },
  { code: "GRADE_REVIEW", label: "Grade / Exam Performance Review" },
  { code: "HOSTEL_OUTING", label: "Hostel Leave / Special Outing Approval" },
  { code: "PERSONAL_GRIEVANCE", label: "Personal Guidance & Student Welfare" },
  { code: "PROJECT_CONSULTATION", label: "Cap-Stone / Thesis Project Consultation" },
];

export const INITIAL_BOOKING_HISTORY: BookedMeeting[] = [
  {
    meetingId: "PM-2026-0814",
    slotId: "SLOT-PAST-01",
    slotDate: "28-Aug-2026",
    slotTime: "11:00 AM - 11:30 AM",
    category: "Academic Guidance & Course Registration",
    mode: "IN_PERSON",
    venue: "Cabin AB-308A, Ramanujan Block",
    reason: "Discussing audit course registration and slot clash for Artificial Intelligence.",
    status: "Completed",
    bookedOn: "25-Aug-2026 14:22",
    proctorRemarks: "Student advised on slot rearrangement. Approved course drop.",
  },
  {
    meetingId: "PM-2026-0702",
    slotId: "SLOT-PAST-02",
    slotDate: "10-Jul-2026",
    slotTime: "03:30 PM - 04:00 PM",
    category: "Hostel Leave / Special Outing Approval",
    mode: "IN_PERSON",
    venue: "Cabin AB-308A, Ramanujan Block",
    reason: "Special weekend leave approval for hackathon participation at IIT Delhi.",
    status: "Completed",
    bookedOn: "08-Jul-2026 09:15",
    proctorRemarks: "Approved with OD letter verification.",
  },
];

// ==========================================
// 2. MAIN COMPONENT: ProctorScheduler
// ==========================================

export default function ProctorScheduler() {
  const [activeTab, setActiveTab] = useState<"SCHEDULE" | "HISTORY" | "REGULATIONS">("SCHEDULE");

  // State for available slots & history
  const [slots, setSlots] = useState<MeetingSlot[]>(INITIAL_AVAILABLE_SLOTS);
  const [history, setHistory] = useState<BookedMeeting[]>(INITIAL_BOOKING_HISTORY);

  // Form input state
  const [selectedSlotId, setSelectedSlotId] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [meetingMode, setMeetingMode] = useState<"IN_PERSON" | "ONLINE_TEAMS">("IN_PERSON");
  const [reason, setReason] = useState<string>("");

  // Loading & simulated network latency state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Feedback messages
  const [systemMessage, setSystemMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });

  const [confirmedMeeting, setConfirmedMeeting] = useState<BookedMeeting | null>(null);

  // Form submission handler with simulated 1000ms latency
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!selectedSlotId) {
      setSystemMessage({
        text: "Please select a valid proctor meeting slot from the available list.",
        type: "error",
      });
      return;
    }

    if (!category) {
      setSystemMessage({
        text: "Please specify the meeting category / purpose.",
        type: "error",
      });
      return;
    }

    if (!reason.trim()) {
      setSystemMessage({
        text: "Please provide a brief reason or justification for the meeting.",
        type: "error",
      });
      return;
    }

    const slot = slots.find((s) => s.id === selectedSlotId);
    if (!slot || !slot.available) {
      setSystemMessage({
        text: "The selected time slot is no longer available. Please select another slot.",
        type: "error",
      });
      return;
    }

    // Trigger simulated network latency
    setIsSubmitting(true);
    setSystemMessage({ text: "", type: "" });

    setTimeout(() => {
      // Generate realistic institutional meeting ID
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const meetingId = `PM-2026-${randomNum}`;

      const selectedCategoryObj = MEETING_CATEGORIES.find((c) => c.code === category);
      const categoryLabel = selectedCategoryObj ? selectedCategoryObj.label : category;

      const newMeeting: BookedMeeting = {
        meetingId,
        slotId: slot.id,
        slotDate: slot.date,
        slotTime: slot.time,
        category: categoryLabel,
        mode: meetingMode,
        venue: meetingMode === "ONLINE_TEAMS" ? "MS Teams (Proctor Channel)" : slot.venue,
        reason: reason.trim(),
        status: "Confirmed",
        bookedOn: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Update available slots (mark chosen slot as booked)
      setSlots((prev) =>
        prev.map((s) =>
          s.id === slot.id
            ? { ...s, available: false, bookedSeats: s.bookedSeats + 1 }
            : s
        )
      );

      // Append to booking history
      setHistory((prev) => [newMeeting, ...prev]);

      // Set confirmed meeting & success state
      setConfirmedMeeting(newMeeting);
      setSystemMessage({
        text: `Meeting (${meetingId}) confirmed with ${mockProctorDetails.facultyName} for ${slot.date} [${slot.time}]. Automated calendar reminder notification has been dispatched to your university email.`,
        type: "success",
      });

      // Reset form fields
      setSelectedSlotId("");
      setCategory("");
      setReason("");
      setIsSubmitting(false);
    }, 1000);
  };

  // Cancel Meeting Handler
  const handleCancelMeeting = (meetingId: string) => {
    const confirmCancel = window.confirm(
      `Are you sure you want to cancel proctor meeting ${meetingId}? This will release the slot.`
    );
    if (!confirmCancel) return;

    const targetMeeting = history.find((m) => m.meetingId === meetingId);
    if (!targetMeeting) return;

    // Release slot in available list if still present
    setSlots((prev) =>
      prev.map((s) =>
        s.id === targetMeeting.slotId
          ? { ...s, available: true, bookedSeats: Math.max(0, s.bookedSeats - 1) }
          : s
      )
    );

    // Update history record status
    setHistory((prev) =>
      prev.map((m) =>
        m.meetingId === meetingId
          ? {
              ...m,
              status: "Cancelled",
              proctorRemarks: "Cancelled by student.",
            }
          : m
      )
    );

    setSystemMessage({
      text: `Meeting ${meetingId} has been successfully cancelled.`,
      type: "success",
    });
  };

  return (
    <div className="bootstrap3-iso w-full bg-[#f4f6f9] text-[#333333] font-sans antialiased" id="page-wrapper">
      <div className="container-fluid max-w-7xl mx-auto px-2 sm:px-4 py-3">
        <div className="row">
          <div className="col-12 bg-white">
            {/* VTOP Card Frame */}
            <div className="card mt-2 mb-5 border border-[#d2d6de] shadow-none rounded-none bg-white">
              {/* Institutional Card Header */}
              <div className="card-header border-b border-[#e5e5e5] border-t-4 border-t-[#295b86] bg-[#f9fafb] px-4 py-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <strong className="text-xl sm:text-2xl font-bold text-[#333333] block">
                    Proctor Meeting Scheduler
                  </strong>
                  <span className="text-xs text-[#666666]">
                    Select and reserve an official counseling slot with your designated Faculty Proctor
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#e8f0fe] text-[#1a73e8] border border-[#d2e3fc] px-2.5 py-1 text-xs font-semibold rounded-none">
                    Proctor: {mockProctorDetails.facultyName} ({mockProctorDetails.facultyId})
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body p-3 sm:p-5">
                {/* Faculty Quick Summary Banner */}
                <div className="mb-4 p-3 bg-[#eef3f7] border border-[#c9d7e3] text-xs sm:text-sm text-[#2c3e50] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#295b86] shrink-0" />
                    <span>
                      <strong>Assigned Proctor:</strong> {mockProctorDetails.facultyName} (
                      {mockProctorDetails.designation})
                    </span>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap text-xs text-[#555]">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-[#295b86]" />
                      <strong>Cabin:</strong> {mockProctorDetails.cabin}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-[#295b86]" />
                      <strong>Email:</strong> {mockProctorDetails.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#295b86]" />
                      <strong>Mobile:</strong> {mockProctorDetails.mobile}
                    </span>
                  </div>
                </div>

                {/* Mode Selection Tabs */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("SCHEDULE");
                      setSystemMessage({ text: "", type: "" });
                    }}
                    className={`text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "SCHEDULE"
                        ? "bg-[#31b0d5] text-white border-[#269abc] shadow-inner font-bold"
                        : "bg-[#5bc0de] hover:bg-[#31b0d5] text-white border-[#46b8da]"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Meeting Slot
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("HISTORY");
                      setSystemMessage({ text: "", type: "" });
                    }}
                    className={`text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "HISTORY"
                        ? "bg-[#31b0d5] text-white border-[#269abc] shadow-inner font-bold"
                        : "bg-[#5bc0de] hover:bg-[#31b0d5] text-white border-[#46b8da]"
                    }`}
                  >
                    <History className="w-3.5 h-3.5" />
                    Scheduled Meetings / History ({history.length})
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("REGULATIONS");
                      setSystemMessage({ text: "", type: "" });
                    }}
                    className={`text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "REGULATIONS"
                        ? "bg-[#31b0d5] text-white border-[#269abc] shadow-inner font-bold"
                        : "bg-[#5bc0de] hover:bg-[#31b0d5] text-white border-[#46b8da]"
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    Proctoring Guidelines
                  </button>
                </div>

                {/* System Messages Banner */}
                {systemMessage.text && (
                  <div
                    id="Message"
                    className={`mb-4 p-3 text-sm font-semibold border rounded-none flex items-start gap-2.5 ${
                      systemMessage.type === "error"
                        ? "bg-[#f2dede] border-[#ebccd1] text-[#a94442]"
                        : "bg-[#dff0d8] border-[#d6e9c6] text-[#3c763d]"
                    }`}
                  >
                    {systemMessage.type === "error" ? (
                      <AlertTriangle className="w-5 h-5 shrink-0 text-[#a94442] mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#3c763d] mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="m-0 leading-snug">{systemMessage.text}</p>
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* TAB 1: SCHEDULE PROCTOR MEETING FORM */}
                {/* ========================================================= */}
                {activeTab === "SCHEDULE" && (
                  <div className="border border-[#e5e5e5] p-3 sm:p-5 bg-[#fcfcfc]">
                    <div className="border-b border-[#e5e5e5] pb-2 mb-4">
                      <h4 className="text-base font-bold text-[#295b86] uppercase m-0 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#295b86]" />
                        Book Appointment with Proctor
                      </h4>
                      <p className="text-xs text-[#777777] mt-1 mb-0">
                        Please review the available meeting slots below and fill in the required academic reason.
                      </p>
                    </div>

                    <form onSubmit={handleBooking} className="space-y-4 text-xs sm:text-sm">
                      {/* Grid Layout for Form Controls */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* 1. Time Slot Selector */}
                        <div className="md:col-span-2">
                          <label className="block text-[#333333] font-bold mb-1.5">
                            Available Meeting Slots <span className="text-red-600">*</span>
                          </label>
                          <select
                            value={selectedSlotId}
                            onChange={(e) => setSelectedSlotId(e.target.value)}
                            disabled={isSubmitting}
                            className="w-full bg-white border border-[#d2d6de] text-[#333333] p-2.5 rounded-none text-xs sm:text-sm font-medium focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] outline-none disabled:bg-gray-100"
                          >
                            <option value="">-- Choose an Available Time Slot --</option>
                            {slots.map((slot) => (
                              <option
                                key={slot.id}
                                value={slot.id}
                                disabled={!slot.available}
                              >
                                {slot.date} ({slot.day}) | {slot.time} - [Venue: {slot.venue}]{" "}
                                {!slot.available ? "(BOOKED / FULL)" : "(AVAILABLE)"}
                              </option>
                            ))}
                          </select>
                          <span className="text-[11px] text-[#666666] block mt-1">
                            Slots are updated in real-time according to Dr. S. POORNIMA&apos;s weekly academic timetable.
                          </span>
                        </div>

                        {/* 2. Meeting Category / Purpose */}
                        <div>
                          <label className="block text-[#333333] font-bold mb-1.5">
                            Meeting Category / Purpose <span className="text-red-600">*</span>
                          </label>
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled={isSubmitting}
                            className="w-full bg-white border border-[#d2d6de] text-[#333333] p-2.5 rounded-none text-xs sm:text-sm font-medium focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] outline-none disabled:bg-gray-100"
                          >
                            <option value="">-- Select Purpose of Meeting --</option>
                            {MEETING_CATEGORIES.map((cat) => (
                              <option key={cat.code} value={cat.code}>
                                {cat.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* 3. Meeting Mode */}
                        <div>
                          <label className="block text-[#333333] font-bold mb-1.5">
                            Meeting Mode <span className="text-red-600">*</span>
                          </label>
                          <div className="flex items-center gap-4 mt-2">
                            <label className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-xs sm:text-sm text-[#333333]">
                              <input
                                type="radio"
                                name="meetingMode"
                                value="IN_PERSON"
                                checked={meetingMode === "IN_PERSON"}
                                onChange={() => setMeetingMode("IN_PERSON")}
                                disabled={isSubmitting}
                                className="text-[#3c8dbc] focus:ring-0"
                              />
                              <MapPin className="w-3.5 h-3.5 text-[#295b86]" />
                              In-Person (Cabin AB-308A)
                            </label>

                            <label className="inline-flex items-center gap-1.5 cursor-pointer font-medium text-xs sm:text-sm text-[#333333]">
                              <input
                                type="radio"
                                name="meetingMode"
                                value="ONLINE_TEAMS"
                                checked={meetingMode === "ONLINE_TEAMS"}
                                onChange={() => setMeetingMode("ONLINE_TEAMS")}
                                disabled={isSubmitting}
                                className="text-[#3c8dbc] focus:ring-0"
                              />
                              <Video className="w-3.5 h-3.5 text-[#295b86]" />
                              MS Teams Online
                            </label>
                          </div>
                        </div>

                        {/* 4. Reason for Meeting */}
                        <div className="md:col-span-2">
                          <label className="block text-[#333333] font-bold mb-1.5">
                            Reason for Meeting / Agenda Details <span className="text-red-600">*</span>
                          </label>
                          <textarea
                            rows={3}
                            placeholder="e.g., Requesting attendance condonation for medical emergency / Course withdrawal query..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            disabled={isSubmitting}
                            className="w-full bg-white border border-[#d2d6de] text-[#333333] p-2.5 rounded-none text-xs sm:text-sm font-medium focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] outline-none disabled:bg-gray-100 placeholder:text-gray-400"
                          />
                          <div className="flex justify-between text-[11px] text-[#777777] mt-0.5">
                            <span>Be specific so the proctor can review your academic records in advance.</span>
                            <span>{reason.length} characters</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons with Simulated Latency Feedback */}
                      <div className="border-t border-[#e5e5e5] pt-3 flex flex-wrap items-center gap-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#337ab7] hover:bg-[#286090] text-white font-bold py-2 px-5 rounded-none text-xs sm:text-sm border border-[#2e6da4] cursor-pointer inline-flex items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-none"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-white" />
                              <span>Processing Reservation with Server...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Confirm Reservation</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => {
                            setSelectedSlotId("");
                            setCategory("");
                            setReason("");
                            setSystemMessage({ text: "", type: "" });
                          }}
                          className="bg-[#e0e0e0] hover:bg-[#d5d5d5] text-[#333333] font-semibold py-2 px-4 rounded-none text-xs sm:text-sm border border-[#cccccc] cursor-pointer transition-colors disabled:opacity-50"
                        >
                          Reset Fields
                        </button>
                      </div>
                    </form>

                    {/* Recently Confirmed Receipt Card */}
                    {confirmedMeeting && (
                      <div className="mt-6 border border-[#b2dba1] bg-[#f9fdf7] p-4">
                        <div className="flex items-center justify-between border-b border-[#d6e9c6] pb-2 mb-3">
                          <h5 className="font-bold text-sm text-[#3c763d] m-0 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            Latest Reservation Confirmation Slip
                          </h5>
                          <span className="text-xs bg-[#dff0d8] text-[#3c763d] font-bold px-2 py-0.5 border border-[#d6e9c6]">
                            {confirmedMeeting.meetingId}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                          <div>
                            <span className="text-[#666666] block">Faculty Proctor:</span>
                            <span className="font-bold text-[#333333]">{mockProctorDetails.facultyName}</span>
                          </div>
                          <div>
                            <span className="text-[#666666] block">Date & Time:</span>
                            <span className="font-bold text-[#333333]">
                              {confirmedMeeting.slotDate} ({confirmedMeeting.slotTime})
                            </span>
                          </div>
                          <div>
                            <span className="text-[#666666] block">Venue / Mode:</span>
                            <span className="font-bold text-[#333333]">{confirmedMeeting.venue}</span>
                          </div>
                          <div>
                            <span className="text-[#666666] block">Category:</span>
                            <span className="font-bold text-[#333333]">{confirmedMeeting.category}</span>
                          </div>
                          <div className="sm:col-span-2">
                            <span className="text-[#666666] block">Reason / Agenda:</span>
                            <span className="font-medium text-[#333333] italic">&quot;{confirmedMeeting.reason}&quot;</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ========================================================= */}
                {/* TAB 2: SCHEDULED MEETINGS & HISTORY TABLE */}
                {/* ========================================================= */}
                {activeTab === "HISTORY" && (
                  <div className="border border-[#e5e5e5] p-3 sm:p-4 bg-white">
                    <div className="border-b border-[#e5e5e5] pb-2 mb-3 flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#295b86] uppercase m-0 flex items-center gap-2">
                        <History className="w-4 h-4 text-[#295b86]" />
                        Proctor Meeting History & Current Status
                      </h4>
                      <span className="text-xs text-[#666666]">Total Records: {history.length}</span>
                    </div>

                    <div className="table-responsive overflow-x-auto">
                      <table className="table w-full border-collapse text-xs border border-[#d2d6de]">
                        <thead>
                          <tr style={{ backgroundColor: "#295b86", color: "#ffffff" }}>
                            <th className="p-2 border border-[#d2d6de] text-center w-10">S.No</th>
                            <th className="p-2 border border-[#d2d6de] text-center whitespace-nowrap">Meeting ID</th>
                            <th className="p-2 border border-[#d2d6de] text-left whitespace-nowrap">Meeting Date & Time</th>
                            <th className="p-2 border border-[#d2d6de] text-left">Purpose / Category</th>
                            <th className="p-2 border border-[#d2d6de] text-left">Venue / Mode</th>
                            <th className="p-2 border border-[#d2d6de] text-center">Status</th>
                            <th className="p-2 border border-[#d2d6de] text-left">Proctor Remarks</th>
                            <th className="p-2 border border-[#d2d6de] text-center w-24">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {history.length === 0 ? (
                            <tr>
                              <td colSpan={8} className="p-4 text-center text-gray-500 font-medium">
                                No proctor meeting records found.
                              </td>
                            </tr>
                          ) : (
                            history.map((record, index) => (
                              <tr
                                key={record.meetingId}
                                className={`border-b border-[#d2d6de] ${
                                  index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"
                                } hover:bg-[#f5f8fa]`}
                              >
                                <td className="p-2 border-r border-[#d2d6de] text-center font-bold">
                                  {index + 1}
                                </td>
                                <td className="p-2 border-r border-[#d2d6de] text-center font-mono font-bold text-[#295b86] whitespace-nowrap">
                                  {record.meetingId}
                                </td>
                                <td className="p-2 border-r border-[#d2d6de] whitespace-nowrap">
                                  <div className="font-bold text-[#333333]">{record.slotDate}</div>
                                  <div className="text-[11px] text-[#666666] flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {record.slotTime}
                                  </div>
                                </td>
                                <td className="p-2 border-r border-[#d2d6de]">
                                  <span className="font-bold text-[#333333] block">{record.category}</span>
                                  <span className="text-[11px] text-[#555555] italic line-clamp-1">
                                    &quot;{record.reason}&quot;
                                  </span>
                                </td>
                                <td className="p-2 border-r border-[#d2d6de]">
                                  <span className="inline-block text-[11px] font-semibold text-[#444444]">
                                    {record.venue}
                                  </span>
                                </td>
                                <td className="p-2 border-r border-[#d2d6de] text-center whitespace-nowrap">
                                  {record.status === "Confirmed" && (
                                    <span className="bg-[#dff0d8] text-[#3c763d] border border-[#d6e9c6] px-2 py-0.5 font-bold uppercase text-[10px]">
                                      Confirmed
                                    </span>
                                  )}
                                  {record.status === "Completed" && (
                                    <span className="bg-[#d9edf7] text-[#31708f] border border-[#bce8f1] px-2 py-0.5 font-bold uppercase text-[10px]">
                                      Completed
                                    </span>
                                  )}
                                  {record.status === "Cancelled" && (
                                    <span className="bg-[#f2dede] text-[#a94442] border border-[#ebccd1] px-2 py-0.5 font-bold uppercase text-[10px]">
                                      Cancelled
                                    </span>
                                  )}
                                </td>
                                <td className="p-2 border-r border-[#d2d6de] text-xs text-[#555]">
                                  {record.proctorRemarks || <span className="text-gray-400 italic">Pending review</span>}
                                </td>
                                <td className="p-2 border-[#d2d6de] text-center">
                                  {record.status === "Confirmed" ? (
                                    <button
                                      type="button"
                                      onClick={() => handleCancelMeeting(record.meetingId)}
                                      className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-2 py-1 text-[11px] font-bold rounded-none border border-[#d43f3a] cursor-pointer inline-flex items-center gap-1"
                                      title="Cancel Reservation"
                                    >
                                      <XCircle className="w-3 h-3" />
                                      Cancel
                                    </button>
                                  ) : (
                                    <span className="text-gray-400 text-[11px] italic">N/A</span>
                                  )}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* TAB 3: PROCTORING REGULATIONS & GUIDELINES */}
                {/* ========================================================= */}
                {activeTab === "REGULATIONS" && (
                  <div className="border border-[#e5e5e5] p-4 bg-[#fcfcfc] text-xs sm:text-sm text-[#444444] space-y-3">
                    <div className="border-b border-[#e5e5e5] pb-2">
                      <h4 className="text-base font-bold text-[#295b86] uppercase m-0 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#295b86]" />
                        University Proctoring Guidelines & Office Protocol
                      </h4>
                    </div>

                    <ul className="list-disc pl-5 space-y-2 leading-relaxed">
                      <li>
                        <strong>Mandatory Attendance Discussion:</strong> Any student with cumulative theory/lab attendance between 65% and 74% must schedule a proctor meeting before CAT-II / FAT examinations with supportive medical certificates or OD documentation.
                      </li>
                      <li>
                        <strong>Punctuality & Decorum:</strong> Students must report to <strong>Cabin AB-308A (Ramanujan Block)</strong> 5 minutes prior to the scheduled slot carrying their valid University Student ID card.
                      </li>
                      <li>
                        <strong>Cancellation Policy:</strong> In case of exigencies, students must cancel their scheduled slot at least 2 hours prior to allow peer students to book the vacant slot.
                      </li>
                      <li>
                        <strong>Online Video Meetings:</strong> For online sessions, ensure your camera and microphone are active on the Microsoft Teams institutional domain (<code className="text-blue-700">@vitbhopal.ac.in</code>).
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
