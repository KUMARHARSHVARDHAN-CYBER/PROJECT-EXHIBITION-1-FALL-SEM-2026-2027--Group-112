"use client";

import React, { useState } from "react";

// ==========================================
// 1. DATA CONTRACTS & MOCK DATASET
// ==========================================

export interface LeaveRequestFormData {
  leaveCode: string;
  visitingPlace: string;
  leaveFromDate: string;
  fromTime: string;
  leaveToDate: string;
  toTime: string;
  reason: string;
}

export interface LeaveRecord {
  id: string;
  appNo: string;
  applyDate: string;
  leaveCode: string;
  leaveTypeName: string;
  visitingPlace: string;
  fromDateTime: string;
  toDateTime: string;
  duration: string;
  reason: string;
  status: "Approved" | "Rejected" | "Pending" | "Availed" | "Cancelled";
  approverName: string;
  remarks: string;
}

export const LEAVE_TYPES = [
  { code: "SO", label: "SPECIAL OUTING" },
  { code: "WP", label: "WITH PARENT LEAVE" },
  { code: "EP", label: "OFFICIAL LEAVES (GATE / CAMPUS INTERVIEW )" },
  { code: "SV", label: "SUMMER VACATION" },
  { code: "WV", label: "WINTER VACATION" },
  { code: "HT1", label: "HOME TOWN" },
  { code: "LG1", label: "LOCAL GUARDIAN" },
  { code: "EY1", label: "EMERGENCY LEAVE" },
  { code: "OG1", label: "DAY OUTING" },
];

export const initialLeaveHistory: LeaveRecord[] = [
  {
    id: "LR-2026-003",
    appNo: "LR2026021004",
    applyDate: "10-Feb-2026",
    leaveCode: "OG1",
    leaveTypeName: "DAY OUTING",
    visitingPlace: "Bhopal City (DB Mall)",
    fromDateTime: "15-Feb-2026 09:00",
    toDateTime: "15-Feb-2026 18:30",
    duration: "9 Hours 30 Mins",
    reason: "Project work discussion and book procurement at Central Library.",
    status: "Approved",
    approverName: "JALALUDDIN KHAN (100700)",
    remarks: "Approved by Proctor. Return before 19:00 strictly.",
  },
  {
    id: "LR-2026-002",
    appNo: "LR2026011892",
    applyDate: "18-Jan-2026",
    leaveCode: "HT1",
    leaveTypeName: "HOME TOWN",
    visitingPlace: "Indore, Madhya Pradesh",
    fromDateTime: "23-Jan-2026 06:00",
    toDateTime: "26-Jan-2026 21:00",
    duration: "3 Days 15 Hours",
    reason: "Family function and Republic day weekend festival at hometown.",
    status: "Approved",
    approverName: "JALALUDDIN KHAN (100700)",
    remarks: "Approved by Proctor & Chief Warden.",
  },
  {
    id: "LR-2026-001",
    appNo: "LR2026010512",
    applyDate: "05-Jan-2026",
    leaveCode: "SO",
    leaveTypeName: "SPECIAL OUTING",
    visitingPlace: "Kolar Road, Bhopal",
    fromDateTime: "08-Jan-2026 14:00",
    toDateTime: "08-Jan-2026 22:00",
    duration: "8 Hours",
    reason: "Personal outing with friends for dinner.",
    status: "Rejected",
    approverName: "JALALUDDIN KHAN (100700)",
    remarks: "Night outing beyond 20:00 not permitted on weekdays.",
  },
];

// ==========================================
// 2. MAIN COMPONENT: LeaveRequest
// ==========================================

export default function LeaveRequest() {
  // Tab / View state: "APPLY" | "STATUS"
  const [activeTab, setActiveTab] = useState<"APPLY" | "STATUS">("APPLY");

  // Form State
  const [formData, setFormData] = useState<LeaveRequestFormData>({
    leaveCode: "",
    visitingPlace: "",
    leaveFromDate: "",
    fromTime: "",
    leaveToDate: "",
    toTime: "",
    reason: "",
  });

  // Table Data State
  const [leaveHistory, setLeaveHistory] = useState<LeaveRecord[]>(initialLeaveHistory);

  // Message / Notification state
  const [systemMessage, setSystemMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });

  // Handle Input Changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear message on typing
    if (systemMessage.text) {
      setSystemMessage({ text: "", type: "" });
    }
  };

  // Helper to format date for display
  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      const day = String(d.getDate()).padStart(2, "0");
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[d.getMonth()];
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    } catch {
      return dateStr;
    }
  };

  // Calculate Duration Estimate
  const calculateDuration = (
    fromDate: string,
    fromTime: string,
    toDate: string,
    toTime: string
  ): string => {
    if (!fromDate || !toDate) return "N/A";
    const start = new Date(`${fromDate}T${fromTime || "00:00"}`);
    const end = new Date(`${toDate}T${toTime || "23:59"}`);
    const diffMs = end.getTime() - start.getTime();

    if (isNaN(diffMs) || diffMs < 0) return "1 Day";

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffHours / 24);
    const hours = diffHours % 24;

    if (days > 0) {
      return hours > 0 ? `${days} Day(s) ${hours} Hr(s)` : `${days} Day(s)`;
    }
    return `${diffHours} Hr(s)`;
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Institutional Form Validation
    if (!formData.leaveCode) {
      setSystemMessage({
        text: "Please select a Leave Type before submitting.",
        type: "error",
      });
      return;
    }

    if (!formData.visitingPlace.trim()) {
      setSystemMessage({
        text: "Please specify the Visiting Place.",
        type: "error",
      });
      return;
    }

    if (!formData.leaveFromDate) {
      setSystemMessage({
        text: "Please select Leave From Date.",
        type: "error",
      });
      return;
    }

    if (!formData.leaveToDate) {
      setSystemMessage({
        text: "Please select Leave To Date.",
        type: "error",
      });
      return;
    }

    // Check date ordering
    if (new Date(formData.leaveFromDate) > new Date(formData.leaveToDate)) {
      setSystemMessage({
        text: "From Date cannot be later than To Date.",
        type: "error",
      });
      return;
    }

    if (!formData.reason.trim()) {
      setSystemMessage({
        text: "Please enter a reason for your leave application.",
        type: "error",
      });
      return;
    }

    // Lookup Leave Type Label
    const selectedType = LEAVE_TYPES.find((t) => t.code === formData.leaveCode);
    const leaveTypeName = selectedType ? selectedType.label : formData.leaveCode;

    // Generate Current Timestamp & Application No
    const now = new Date();
    const todayFormatted = formatDateDisplay(now.toISOString().split("T")[0]);
    const randomAppNo = `LR${now.getFullYear()}${String(Math.floor(100000 + Math.random() * 900000))}`;

    const newRecord: LeaveRecord = {
      id: `LR-${now.getFullYear()}-${Date.now()}`,
      appNo: randomAppNo,
      applyDate: todayFormatted,
      leaveCode: formData.leaveCode,
      leaveTypeName: leaveTypeName,
      visitingPlace: formData.visitingPlace.trim(),
      fromDateTime: `${formatDateDisplay(formData.leaveFromDate)} ${formData.fromTime || "00:00"}`,
      toDateTime: `${formatDateDisplay(formData.leaveToDate)} ${formData.toTime || "23:59"}`,
      duration: calculateDuration(
        formData.leaveFromDate,
        formData.fromTime,
        formData.leaveToDate,
        formData.toTime
      ),
      reason: formData.reason.trim(),
      status: "Pending",
      approverName: "JALALUDDIN KHAN (100700)",
      remarks: "Application submitted. Awaiting Proctor recommendation.",
    };

    // Prepend new request to leave history
    setLeaveHistory((prev) => [newRecord, ...prev]);

    // Show Institutional Success Message
    setSystemMessage({
      text: `Leave Application (${randomAppNo}) submitted successfully! Status: PENDING PROCTOR APPROVAL.`,
      type: "success",
    });

    // Reset Form
    setFormData({
      leaveCode: "",
      visitingPlace: "",
      leaveFromDate: "",
      fromTime: "",
      leaveToDate: "",
      toTime: "",
      reason: "",
    });
  };

  return (
    <div className="bootstrap3-iso w-full bg-[#f4f6f9] text-[#333333] font-sans antialiased" id="page-wrapper">
      <div className="container-fluid max-w-7xl mx-auto px-2 sm:px-4 py-3">
        <div className="row">
          <div className="col-12 bg-white">
            {/* VTOP Card Frame */}
            <div className="card mt-2 mb-5 border border-[#d2d6de] shadow-none rounded-none bg-white">
              {/* Card Header with legacy primaryBorderTop border */}
              <div className="card-header border-b border-[#e5e5e5] border-t-4 border-t-[#295b86] bg-[#f9fafb] px-4 py-3">
                <strong className="text-xl sm:text-2xl font-bold text-[#333333] block">
                  Hostel Leave Request Screen
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4">
                <div id="MainBlock">
                  {/* Top Mode Selection Buttons */}
                  <form
                    className="flex flex-wrap items-center gap-2 mb-4"
                    role="form"
                    autoComplete="off"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="col-auto">
                      <button
                        tabIndex={1}
                        type="button"
                        id="apply"
                        name="apply"
                        onClick={() => {
                          setActiveTab("APPLY");
                          setSystemMessage({ text: "", type: "" });
                        }}
                        className={`text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border transition-colors cursor-pointer ${
                          activeTab === "APPLY"
                            ? "bg-[#31b0d5] text-white border-[#269abc] shadow-inner"
                            : "bg-[#5bc0de] hover:bg-[#31b0d5] text-white border-[#46b8da]"
                        }`}
                      >
                        Leave Request
                      </button>
                    </div>

                    <div className="col-auto">
                      <button
                        tabIndex={2}
                        type="button"
                        id="status"
                        name="status"
                        onClick={() => {
                          setActiveTab("STATUS");
                          setSystemMessage({ text: "", type: "" });
                        }}
                        className={`text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border transition-colors cursor-pointer ${
                          activeTab === "STATUS"
                            ? "bg-[#31b0d5] text-white border-[#269abc] shadow-inner"
                            : "bg-[#5bc0de] hover:bg-[#31b0d5] text-white border-[#46b8da]"
                        }`}
                      >
                        Leave Status / History
                      </button>
                    </div>
                  </form>

                  {/* System Messages Banner */}
                  {systemMessage.text && (
                    <div
                      id="Message"
                      className={`mb-4 p-2.5 text-center text-sm font-bold border ${
                        systemMessage.type === "error"
                          ? "bg-[#f2dede] border-[#ebccd1] text-[#a94442]"
                          : "bg-[#dff0d8] border-[#d6e9c6] text-[#3c763d]"
                      }`}
                    >
                      <p id="pageMessage" className="m-0">
                        {systemMessage.text}
                      </p>
                    </div>
                  )}

                  {/* Main Data Block */}
                  <div id="DataBlock" className="mt-4 mb-4">
                    {/* APPLY LEAVE FORM SECTION */}
                    {activeTab === "APPLY" && (
                      <div id="LeaveRequest" className="border border-[#e5e5e5] p-4 bg-[#fcfcfc]">
                        <form
                          id="LeaveRequestForm"
                          name="LeaveRequestForm"
                          role="form"
                          autoComplete="off"
                          onSubmit={handleSubmit}
                        >
                          {/* Proctor Information Row */}
                          <div className="form-group mb-4 pb-2 border-b border-[#e5e5e5]">
                            <label
                              htmlFor="approver"
                              className="font-bold text-xs sm:text-sm text-[#333333] mr-2"
                            >
                              PROCTOR NAME:
                            </label>
                            <span className="font-semibold text-xs sm:text-sm text-[#295b86]">
                              JALALUDDIN KHAN (100700)
                            </span>
                          </div>

                          {/* Grid of Inputs */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {/* Leave Type */}
                            <div className="form-group">
                              <label
                                htmlFor="leaveCode"
                                className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                              >
                                Leave Type <span className="text-red-600">*</span>
                              </label>
                              <select
                                tabIndex={2}
                                id="leaveCode"
                                name="leaveCode"
                                value={formData.leaveCode}
                                onChange={handleInputChange}
                                className="w-full h-8 text-xs sm:text-sm px-2 bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none"
                              >
                                <option value="">-Select-</option>
                                {LEAVE_TYPES.map((type) => (
                                  <option key={type.code} value={type.code}>
                                    {type.label}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Visiting Place */}
                            <div className="form-group">
                              <label
                                htmlFor="visitingPlace"
                                className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                              >
                                Visiting Place <span className="text-red-600">*</span>
                              </label>
                              <input
                                tabIndex={3}
                                type="text"
                                maxLength={150}
                                name="visitingPlace"
                                id="visitingPlace"
                                value={formData.visitingPlace}
                                onChange={handleInputChange}
                                placeholder="Enter city / destination / address"
                                className="w-full h-8 text-xs sm:text-sm px-2 bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none"
                              />
                            </div>

                            {/* From Date */}
                            <div className="form-group">
                              <label
                                htmlFor="leaveFromDate"
                                className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                              >
                                From Date <span className="text-red-600">*</span>
                              </label>
                              <input
                                tabIndex={5}
                                type="date"
                                name="leaveFromDate"
                                id="leaveFromDate"
                                value={formData.leaveFromDate}
                                onChange={handleInputChange}
                                className="w-full h-8 text-xs sm:text-sm px-2 bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none"
                              />
                            </div>

                            {/* Time From */}
                            <div className="form-group">
                              <label
                                htmlFor="fromTime"
                                className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                              >
                                Time From
                              </label>
                              <div className="flex">
                                <input
                                  tabIndex={6}
                                  type="time"
                                  name="fromTime"
                                  id="fromTime"
                                  value={formData.fromTime}
                                  onChange={handleInputChange}
                                  className="w-full h-8 text-xs sm:text-sm px-2 bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none"
                                />
                              </div>
                            </div>

                            {/* To Date */}
                            <div className="form-group">
                              <label
                                htmlFor="leaveToDate"
                                className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                              >
                                To Date <span className="text-red-600">*</span>
                              </label>
                              <input
                                tabIndex={7}
                                type="date"
                                name="leaveToDate"
                                id="leaveToDate"
                                value={formData.leaveToDate}
                                onChange={handleInputChange}
                                className="w-full h-8 text-xs sm:text-sm px-2 bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none"
                              />
                            </div>

                            {/* Time To */}
                            <div className="form-group">
                              <label
                                htmlFor="toTime"
                                className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                              >
                                Time To
                              </label>
                              <div className="flex">
                                <input
                                  tabIndex={8}
                                  type="time"
                                  name="toTime"
                                  id="toTime"
                                  value={formData.toTime}
                                  onChange={handleInputChange}
                                  className="w-full h-8 text-xs sm:text-sm px-2 bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Reason */}
                          <div className="form-group mt-3">
                            <label
                              htmlFor="reason"
                              className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                            >
                              Reason <span className="text-red-600">*</span>
                            </label>
                            <textarea
                              tabIndex={4}
                              id="reason"
                              name="reason"
                              rows={3}
                              value={formData.reason}
                              onChange={handleInputChange}
                              placeholder="State clear justification for leave..."
                              className="w-full p-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none resize-none"
                            ></textarea>
                          </div>

                          {/* Submit Button */}
                          <div className="text-center mt-5">
                            <button
                              tabIndex={9}
                              type="submit"
                              id="submitControl2"
                              name="submitControl2"
                              className="bg-[#d9534f] hover:bg-[#c9302c] text-white font-semibold text-xs sm:text-sm py-1.5 px-4 rounded-none border border-[#d43f3a] cursor-pointer transition-colors shadow-none"
                            >
                              Submit Leave Application
                            </button>
                          </div>
                        </form>
                      </div>
                    )}

                    {/* RECENT / ALL LEAVE HISTORY TABLE */}
                    <div id="LeaveHistory" className="mt-6">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#d2d6de]">
                        <h4 className="font-bold text-sm sm:text-base text-[#333333] m-0">
                          {activeTab === "APPLY" ? "Recent Leave Applications" : "Leave History & Status"}
                        </h4>
                        <span className="text-xs text-[#777777] font-medium">
                          Total Records: {leaveHistory.length}
                        </span>
                      </div>

                      <div className="overflow-x-auto border border-[#d2d6de]">
                        <table className="table w-full text-xs sm:text-sm border-collapse bg-white">
                          <thead>
                            <tr className="bg-[#f5f5f5] text-[#333333] border-b border-[#d2d6de] text-left">
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center w-12">
                                S.No
                              </th>
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap">
                                App No & Apply Date
                              </th>
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold">
                                Leave Type
                              </th>
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold">
                                Visiting Place
                              </th>
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap">
                                From (Date & Time)
                              </th>
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap">
                                To (Date & Time)
                              </th>
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                                Duration
                              </th>
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold min-w-[140px]">
                                Reason
                              </th>
                              <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                                Status
                              </th>
                              <th className="px-2.5 py-2 font-bold min-w-[150px]">
                                Approver / Remarks
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {leaveHistory.length === 0 ? (
                              <tr>
                                <td
                                  colSpan={10}
                                  className="text-center py-6 text-gray-500 italic font-medium"
                                >
                                  No leave requests found.
                                </td>
                              </tr>
                            ) : (
                              leaveHistory.map((item, index) => {
                                return (
                                  <tr
                                    key={item.id}
                                    className="border-b border-[#d2d6de] even:bg-[#f9f9f9] hover:bg-[#f5f5f5] text-[#333333]"
                                  >
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-medium">
                                      {index + 1}
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de] whitespace-nowrap">
                                      <div className="font-bold text-[#295b86]">
                                        {item.appNo}
                                      </div>
                                      <div className="text-[11px] text-[#777777]">
                                        {item.applyDate}
                                      </div>
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de] font-medium">
                                      <span className="font-bold text-[#333333]">
                                        {item.leaveTypeName}
                                      </span>
                                      <span className="text-[11px] text-[#777777] block">
                                        ({item.leaveCode})
                                      </span>
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de]">
                                      {item.visitingPlace}
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de] whitespace-nowrap text-xs">
                                      {item.fromDateTime}
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de] whitespace-nowrap text-xs">
                                      {item.toDateTime}
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-semibold text-xs whitespace-nowrap">
                                      {item.duration}
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de] text-xs">
                                      {item.reason}
                                    </td>
                                    <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center whitespace-nowrap">
                                      <span
                                        className={`font-bold text-xs ${
                                          item.status === "Approved"
                                            ? "text-[#3c763d]"
                                            : item.status === "Rejected"
                                            ? "text-[#a94442]"
                                            : item.status === "Pending"
                                            ? "text-[#8a6d3b]"
                                            : "text-[#31708f]"
                                        }`}
                                      >
                                        {item.status.toUpperCase()}
                                      </span>
                                    </td>
                                    <td className="px-2.5 py-2 text-xs">
                                      <div className="font-semibold text-[#444444]">
                                        {item.approverName}
                                      </div>
                                      <div className="text-[11px] text-[#666666] italic">
                                        {item.remarks}
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legacy box-footer */}
                <div className="box-footer pt-3 border-t border-[#eeeeee]">
                  <div className="text-center font-bold text-xs text-[#777777]">
                    VIT Bhopal University - Hostel Management Information System
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
