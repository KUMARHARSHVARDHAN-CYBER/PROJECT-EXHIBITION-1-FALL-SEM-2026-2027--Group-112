"use client";

import React, { useState } from "react";

// ==========================================
// 1. DATA CONTRACTS & MOCK DATASET
// ==========================================

export interface BonafideRecord {
  id: string;
  requestNo: string;
  applyDate: string;
  purpose: string;
  addressedTo: string;
  copies: number;
  status: "Approved" | "Pending" | "Rejected";
  issuedDate?: string;
  remarks?: string;
}

export const BONAFIDE_PURPOSES = [
  "Bank Loan / Education Loan",
  "Passport / Visa Application",
  "Internship / Industrial Training",
  "Scholarship / Financial Grant",
  "Bus / Railway Student Concession",
  "Telecom / SIM Card Verification",
  "Income Tax Exemption / Parent Employer",
  "Higher Education Application",
  "Other / General Purpose",
];

export const initialBonafideHistory: BonafideRecord[] = [
  {
    id: "BON-2026-002",
    requestNo: "BNF2026011409",
    applyDate: "14-Jan-2026",
    purpose: "Passport / Visa Application",
    addressedTo: "Passport Seva Kendra, Regional Passport Office, Bhopal",
    copies: 1,
    status: "Approved",
    issuedDate: "16-Jan-2026",
    remarks: "Digitally signed bonafide certificate issued.",
  },
  {
    id: "BON-2025-001",
    requestNo: "BNF2025110284",
    applyDate: "02-Nov-2025",
    purpose: "Bank Loan / Education Loan",
    addressedTo: "The Branch Manager, State Bank of India, MP Nagar Branch, Bhopal",
    copies: 2,
    status: "Approved",
    issuedDate: "04-Nov-2025",
    remarks: "Fee structure & bonafide certificate issued.",
  },
];

// ==========================================
// 2. MAIN COMPONENT: BonafideRequest
// ==========================================

export default function BonafideRequest() {
  const [formData, setFormData] = useState({
    purpose: "",
    addressedTo: "",
    copies: "1",
    remarks: "",
  });

  const [pastRequests, setPastRequests] = useState<BonafideRecord[]>(initialBonafideHistory);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [systemMessage, setSystemMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });

  // Format today's date into VTOP format (dd-MMM-yyyy)
  const getTodayFormattedDate = () => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, "0");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (systemMessage.text) {
      setSystemMessage({ text: "", type: "" });
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormData({
      purpose: "",
      addressedTo: "",
      copies: "1",
      remarks: "",
    });
    setSystemMessage({ text: "", type: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.purpose) {
      setSystemMessage({
        text: "Please select a Purpose for the Bonafide Certificate.",
        type: "error",
      });
      return;
    }

    if (!formData.addressedTo.trim()) {
      setSystemMessage({
        text: "Please specify the Addressed To authority (e.g., 'The Branch Manager, SBI' or 'Passport Seva Kendra').",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    setSystemMessage({ text: "", type: "" });

    setTimeout(() => {
      const randomReqNo = `BNF${new Date().getFullYear()}${Math.floor(100000 + Math.random() * 900000)}`;
      const newRequest: BonafideRecord = {
        id: `BON-${new Date().getFullYear()}-${Date.now()}`,
        requestNo: randomReqNo,
        applyDate: getTodayFormattedDate(),
        purpose: formData.purpose,
        addressedTo: formData.addressedTo.trim(),
        copies: parseInt(formData.copies, 10) || 1,
        status: "Pending",
        remarks: "Application submitted. Awaiting Academic Office verification.",
      };

      // Add new Pending record to top of history
      setPastRequests((prev) => [newRequest, ...prev]);
      setIsSubmitting(false);

      // Display Success Alert
      setSystemMessage({
        text: `Bonafide Certificate request submitted successfully! Application No: ${randomReqNo}. Status: PENDING VERIFICATION.`,
        type: "success",
      });

      // Clear Form Inputs
      setFormData({
        purpose: "",
        addressedTo: "",
        copies: "1",
        remarks: "",
      });
    }, 500);
  };

  return (
    <div
      className="bootstrap3-iso w-full bg-[#f4f6f9] text-[#333333] font-sans antialiased"
      id="page-wrapper"
    >
      <div className="container-fluid max-w-7xl mx-auto px-2 sm:px-4 py-3" id="main-section">
        <div className="row">
          <div className="col-12 bg-white">
            {/* VTOP Card Frame */}
            <div className="card mt-2 mb-5 border border-[#d2d6de] shadow-none rounded-none bg-white">
              {/* Card Header with legacy primaryBorderTop border */}
              <div className="card-header border-b border-[#e5e5e5] border-t-4 border-t-[#295b86] bg-[#f9fafb] px-4 py-3">
                <strong className="text-xl sm:text-2xl font-bold text-[#333333] block">
                  Apply Bonafide Certificate
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 sm:p-6">
                {/* Institutional Student Header Info Bar */}
                <div className="bg-[#eef2f7] border border-[#d2d6de] p-3 mb-5 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                    <div>
                      <span className="font-bold text-[#295b86]">Reg. No: </span>
                      <span className="font-semibold text-[#333333]">25MIM10100</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Name: </span>
                      <span className="font-semibold text-[#333333]">KUMAR HARSHVARDHAN</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Programme: </span>
                      <span className="font-semibold text-[#333333]">Integrated M.Tech. AI</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Campus: </span>
                      <span className="font-semibold text-[#333333]">Bhopal Campus</span>
                    </div>
                  </div>
                </div>

                {/* System Message Banner */}
                {systemMessage.text && (
                  <div
                    id="Message"
                    className={`mb-5 p-3 text-center text-xs sm:text-sm font-bold border ${
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

                {/* Instructions Box */}
                <div className="bg-[#fff9e6] border border-[#ffe082] p-3 mb-5 text-xs text-[#8a6d3b]">
                  <strong className="block font-bold mb-1 text-[#6d4c41]">
                    Guidelines for Requesting Bonafide Certificates:
                  </strong>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Bonafide certificates are processed within 2–3 working days after online verification.</li>
                    <li>Specify the exact authority name and location under "Addressed To" for official acceptance.</li>
                    <li>For education loan bonafide with fee breakdown, attach required bank intimation letters to the Academic Office.</li>
                  </ul>
                </div>

                {/* SECTION 1: REQUEST FORM */}
                <div className="border border-[#d2d6de] p-4 bg-[#fcfcfc] mb-8">
                  <div className="pb-2 mb-4 border-b border-[#e5e5e5]">
                    <h4 className="font-bold text-sm sm:text-base text-[#333333] m-0">
                      New Bonafide Certificate Application
                    </h4>
                  </div>

                  <form
                    id="bonafideForm"
                    name="bonafideForm"
                    role="form"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Purpose Dropdown */}
                      <div className="form-group">
                        <label
                          htmlFor="purpose"
                          className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                        >
                          Certificate Purpose <span className="text-red-600">*</span>
                        </label>
                        <select
                          tabIndex={1}
                          id="purpose"
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleInputChange}
                          className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none"
                        >
                          <option value="">-Select Purpose-</option>
                          {BONAFIDE_PURPOSES.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Number of Copies */}
                      <div className="form-group">
                        <label
                          htmlFor="copies"
                          className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                        >
                          Number of Copies
                        </label>
                        <select
                          tabIndex={2}
                          id="copies"
                          name="copies"
                          value={formData.copies}
                          onChange={handleInputChange}
                          className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#555555] focus:border-[#66afe9] focus:outline-none"
                        >
                          <option value="1">1 Copy</option>
                          <option value="2">2 Copies</option>
                          <option value="3">3 Copies</option>
                          <option value="4">4 Copies</option>
                          <option value="5">5 Copies</option>
                        </select>
                      </div>

                      {/* Addressed To */}
                      <div className="form-group md:col-span-2">
                        <label
                          htmlFor="addressedTo"
                          className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                        >
                          Addressed To (Authority Name & Address) <span className="text-red-600">*</span>
                        </label>
                        <input
                          tabIndex={3}
                          type="text"
                          maxLength={200}
                          id="addressedTo"
                          name="addressedTo"
                          value={formData.addressedTo}
                          onChange={handleInputChange}
                          placeholder="e.g. The Branch Manager, State Bank of India, MP Nagar Branch, Bhopal"
                          className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                        />
                      </div>

                      {/* Additional Remarks */}
                      <div className="form-group md:col-span-2">
                        <label
                          htmlFor="remarks"
                          className="block font-bold text-xs sm:text-sm text-[#333333] mb-1"
                        >
                          Specific Inclusions / Remarks (Optional)
                        </label>
                        <textarea
                          tabIndex={4}
                          id="remarks"
                          name="remarks"
                          rows={2}
                          value={formData.remarks}
                          onChange={handleInputChange}
                          placeholder="Mention any specific clause (e.g., Medium of Instruction: English, Hosteller status, etc.)..."
                          className="w-full p-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 mt-4">
                      <button
                        tabIndex={5}
                        type="submit"
                        disabled={isSubmitting}
                        className={`text-xs sm:text-sm font-bold py-1.5 px-4 rounded-none border transition-colors cursor-pointer ${
                          isSubmitting
                            ? "bg-gray-400 text-white border-gray-500 cursor-not-allowed"
                            : "bg-[#337ab7] hover:bg-[#286090] text-white border-[#2e6da4]"
                        }`}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </button>
                      <button
                        tabIndex={6}
                        type="button"
                        onClick={handleReset}
                        className="text-xs sm:text-sm font-semibold py-1.5 px-4 rounded-none border bg-[#f0ad4e] hover:bg-[#ec971f] text-white border-[#eea236] transition-colors cursor-pointer"
                      >
                        Clear Form
                      </button>
                    </div>
                  </form>
                </div>

                {/* SECTION 2: PAST REQUESTS HISTORY TABLE */}
                <div className="mt-6">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#d2d6de]">
                    <h4 className="font-bold text-sm sm:text-base text-[#333333] m-0">
                      Bonafide Certificate Request History
                    </h4>
                    <span className="text-xs text-[#777777] font-medium">
                      Total Requests: {pastRequests.length}
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
                            Request No & Apply Date
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold min-w-[150px]">
                            Purpose
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold min-w-[200px]">
                            Addressed To
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Copies
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Status
                          </th>
                          <th className="px-2.5 py-2 font-bold min-w-[150px]">
                            Remarks / Issued Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {pastRequests.length === 0 ? (
                          <tr>
                            <td
                              colSpan={7}
                              className="text-center py-6 text-[#777777] italic font-medium"
                            >
                              No past bonafide requests found.
                            </td>
                          </tr>
                        ) : (
                          pastRequests.map((req, idx) => (
                            <tr
                              key={req.id}
                              className="border-b border-[#d2d6de] even:bg-[#f9f9f9] hover:bg-[#f5f5f5] text-[#333333]"
                            >
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-medium">
                                {idx + 1}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] whitespace-nowrap">
                                <div className="font-bold text-[#295b86]">
                                  {req.requestNo}
                                </div>
                                <div className="text-[11px] text-[#777777]">
                                  {req.applyDate}
                                </div>
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] font-medium">
                                {req.purpose}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-xs">
                                {req.addressedTo}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-semibold">
                                {req.copies}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center whitespace-nowrap">
                                <span
                                  className={`font-bold text-xs ${
                                    req.status === "Approved"
                                      ? "text-[#3c763d]"
                                      : req.status === "Rejected"
                                      ? "text-[#a94442]"
                                      : "text-[#8a6d3b]"
                                  }`}
                                >
                                  {req.status.toUpperCase()}
                                </span>
                              </td>
                              <td className="px-2.5 py-2 text-xs">
                                <div className="font-medium text-[#444444]">
                                  {req.remarks || "Processing request..."}
                                </div>
                                {req.issuedDate && (
                                  <div className="text-[11px] text-[#777777]">
                                    Issued on: {req.issuedDate}
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Legacy box-footer */}
                <div className="box-footer mt-8 pt-3 border-t border-[#eeeeee]">
                  <div className="text-center font-bold text-xs text-[#777777]">
                    VIT Bhopal University - Academic Certificates & Bonafide Issuance Service
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
