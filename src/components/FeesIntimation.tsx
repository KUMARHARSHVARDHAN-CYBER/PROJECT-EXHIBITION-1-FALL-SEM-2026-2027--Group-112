"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Printer,
  Download,
  CreditCard,
  FileText,
  Building,
  CheckCircle2,
  AlertCircle,
  Phone,
  Calendar,
  User,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Share2,
} from "lucide-react";

// ==========================================
// 1. DATA CONTRACTS & STRUCTURED MOCK JSON
// ==========================================

export interface FeeItem {
  sNo: number;
  nature: string;
  amount: number;
  remarks?: string;
}

export interface StudentIntimationMeta {
  studentName: string;
  registerNumber: string;
  course: string;
  academicYear: string;
  notificationDate: string;
  phoneNumber: string;
  dueDate: string;
  academicPeriod: string;
  campus: string;
}

export const studentIntimationData: StudentIntimationMeta = {
  studentName: "KUMAR HARSHVARDHAN",
  registerNumber: "25MIM10100",
  course: "Artificial Intelligence",
  academicYear: "2",
  notificationDate: "08/09/2026",
  phoneNumber: "+91 75 6035 0900/901/902",
  dueDate: "17.06.2026",
  academicPeriod: "2026-27",
  campus: "VIT Bhopal University",
};

export const feeDetails: FeeItem[] = [
  {
    sNo: 1,
    nature: "Tuition Fees",
    amount: 120000.0,
    remarks: "Annual Academic Tuition & Core Instructional Services",
  },
];

// Compute Grand Total constant
export const grandTotalAmount: number = feeDetails.reduce(
  (acc, curr) => acc + curr.amount,
  0
);

// ==========================================
// 2. MAIN COMPONENT: FeesIntimation
// ==========================================

export default function FeesIntimation() {
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  // Print Handler
  const handlePrint = () => {
    window.print();
  };

  // Download Simulation Handler
  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    setTimeout(() => {
      setIsGeneratingPdf(false);
      setDownloadSuccessToast(true);
      alert("Invoice PDF generated securely on client-side.");
    }, 1000);
  };

  return (
    <div className="w-full bg-[#f4f6f9] min-h-screen text-gray-800 font-sans pb-16">
      
      {/* Toast Alert */}
      {downloadSuccessToast && (
        <div className="max-w-4xl mx-auto px-4 pt-3 print:hidden">
          <div className="bg-green-50 border-l-4 border-green-600 p-3 shadow-xs rounded-r flex items-center justify-between text-xs sm:text-sm text-green-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <span className="font-semibold">
                Invoice PDF generated securely on client-side. Document ready for official archival.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setDownloadSuccessToast(false)}
              className="text-green-700 hover:text-green-900 font-bold px-2 py-0.5"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Action Toolbar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 pt-3 pb-2 flex flex-wrap items-center justify-between gap-2 print:hidden">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-gray-700">Document Type:</span>
          <span className="bg-blue-100 text-blue-900 font-semibold px-2.5 py-0.5 rounded border border-blue-200">
            Official Tuition Fees Intimation Circular (2026-27)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/payments"
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded shadow-xs flex items-center gap-1.5 transition"
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Proceed to Online Payment</span>
          </Link>

          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="px-3 py-1.5 bg-[#3c8dbc] hover:bg-[#367fa9] text-white text-xs font-bold rounded shadow-xs flex items-center gap-1.5 transition disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isGeneratingPdf ? "Generating..." : "Download PDF"}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            id="printBtn"
            className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded shadow-xs flex items-center gap-1.5 transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Document</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FORMAL INSTITUTIONAL DOCUMENT CONTAINER (#printDetails)  */}
      {/* ======================================================== */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div
          id="printDetails"
          className="bg-white border border-gray-300 shadow-md sm:rounded-xs p-6 sm:p-10 font-['Times_New_Roman',serif] text-gray-900 leading-normal"
        >
          {/* Institutional Header with Logo & Crest */}
          <div className="text-center border-b border-gray-300 pb-4 mb-4">
            <div className="flex flex-col items-center justify-center">
              {/* Emblem Text / Graphic */}
              <div className="text-3xl sm:text-4xl font-black tracking-widest text-[#1B365D] uppercase mb-0.5">
                VIT
              </div>
              <div className="text-sm font-bold text-gray-800 tracking-wider uppercase">
                Vellore Institute of Technology
              </div>
              <div className="text-xs font-semibold text-gray-600">
                (Bhopal Campus - Madhya Pradesh)
              </div>
              <div className="text-[11px] text-gray-500 italic mt-0.5">
                Deemed to be University under section 3 of UGC Act, 1956
              </div>
            </div>
          </div>

          {/* Contact Bar & Date Table (Noborder exact legacy structure) */}
          <div className="mb-4">
            <table className="w-full text-[12px] font-bold border-none" style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td className="p-[1px] text-left border-none" style={{ fontFamily: "'Times New Roman', serif" }}>
                    <b>Phone number: {studentIntimationData.phoneNumber}</b>
                  </td>
                  <td className="p-[1px] text-right border-none" style={{ fontFamily: "'Times New Roman', serif" }}>
                    Date : {studentIntimationData.notificationDate}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Salutation & Notification Letter Lead */}
          <div className="text-left text-[13px] sm:text-[14px] leading-relaxed mb-4 text-gray-900" style={{ fontFamily: "'Times New Roman', serif" }}>
            Dear Student,<br />
            We would like to inform you that the Tution fee for the academic year {studentIntimationData.academicPeriod} is as detailed below:-.
          </div>

          {/* Student Identification Meta Table (.table-striped .table-bordered) */}
          <div className="mb-5 overflow-x-auto">
            <table className="w-full text-[12px] border border-black border-collapse" style={{ fontFamily: "'Times New Roman', serif" }}>
              <tbody>
                <tr className="bg-gray-50/50">
                  <th className="border border-black p-1.5 text-left font-bold w-1/4">
                    Name
                  </th>
                  <td className="border border-black p-1.5 text-left font-bold text-gray-900 w-1/4">
                    {studentIntimationData.studentName}
                  </td>
                  <th className="border border-black p-1.5 text-left font-bold w-1/4">
                    Register Number
                  </th>
                  <td className="border border-black p-1.5 text-center font-bold text-gray-900 w-1/4">
                    {studentIntimationData.registerNumber}
                  </td>
                </tr>
                <tr>
                  <th className="border border-black p-1.5 text-left font-bold">
                    Course
                  </th>
                  <td className="border border-black p-1.5 text-left font-bold text-gray-900">
                    {studentIntimationData.course}
                  </td>
                  <th className="border border-black p-1.5 text-left font-bold">
                    Academic Year
                  </th>
                  <td className="border border-black p-1.5 text-center font-bold text-gray-900">
                    {studentIntimationData.academicYear}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fees Breakdown Table (.table-striped .table-bordered) */}
          <div className="mb-6 overflow-x-auto">
            <table className="w-full text-[12px] border border-black border-collapse" style={{ fontFamily: "'Times New Roman', serif" }}>
              <tbody>
                {/* Table Heading Banner */}
                <tr className="bg-gray-100">
                  <td
                    colSpan={3}
                    className="border border-black p-2 text-center font-bold text-[14px] uppercase tracking-wide"
                  >
                    Fees Details
                  </td>
                </tr>

                {/* Column Headers */}
                <tr className="bg-gray-50 font-bold">
                  <td className="border border-black p-1.5 text-center w-[10%] font-bold">
                    S.No
                  </td>
                  <td className="border border-black p-1.5 text-left w-[60%] font-bold">
                    Nature
                  </td>
                  <td className="border border-black p-1.5 text-right w-[30%] font-bold">
                    Amount (₹)
                  </td>
                </tr>

                {/* Dynamic Data Rows via .map() */}
                {feeDetails.map((item) => (
                  <tr key={item.sNo}>
                    <td className="border border-black p-1.5 text-center">
                      {item.sNo}
                    </td>
                    <td className="border border-black p-1.5 text-left">
                      {item.nature}
                    </td>
                    <td className="border border-black p-1.5 text-right font-bold">
                      {item.amount.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                ))}

                {/* Grand Total Row */}
                <tr className="bg-gray-100 font-bold text-[13px]">
                  <td colSpan={2} className="border border-black p-2 text-right">
                    Grand Total Payable:
                  </td>
                  <td className="border border-black p-2 text-right font-bold text-[14px]">
                    ₹{grandTotalAmount.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment Instructions Section */}
          <div className="mb-6 text-left">
            <p className="font-bold text-[13px] mb-2">
              <em>Payment Instructions:</em>
            </p>

            <ol className="list-decimal pl-5 space-y-2 text-[12px] sm:text-[13px] text-gray-800 leading-relaxed font-sans">
              <li>
                <span>
                  Online Payment of tuition fees is facilitated through VTOP Students Login (
                  <span className="text-blue-700 underline font-mono text-xs">
                    https://vtop.vitbhopal.ac.in/vtop
                  </span>
                  ). Payment should be made through VTOP only by using Net banking / Credit Card / Debit Card mode.
                </span>
              </li>
              <li>
                <span>
                  On successful payment of tuition fees receipt can be downloaded immediately. If receipt is not generated, but the amount got debited from your account, login again after some time on the same day and check Receipts menu.
                </span>
              </li>
              <li>
                <span>
                  In case, if the receipt is not generated after 24hrs of payment and for any fee related clarifications, please send email to{" "}
                  <a href="mailto:feescollection@vitbhopal.ac.in" className="text-blue-800 font-bold underline">
                    feescollection@vitbhopal.ac.in
                  </a>{" "}
                  only.
                </span>
              </li>
              <li>
                <span className="font-bold text-red-800">
                  Last date for Tuition fees payment is {studentIntimationData.dueDate}.
                </span>
              </li>
            </ol>
          </div>

          {/* Closing Salutation & Signatures */}
          <div className="pt-4 text-left text-[13px]" style={{ fontFamily: "'Times New Roman', serif" }}>
            <div className="mb-1">Thank You,</div>
            <div className="font-bold mb-3">Yours Sincerely,</div>

            {/* Stylized Digital Signature Graphic */}
            <div className="my-2">
              <svg width="180" height="55" viewBox="0 0 180 55" className="text-blue-900 fill-none stroke-current stroke-2">
                <path d="M 10 35 C 30 10, 50 45, 70 20 C 85 5, 95 40, 110 25 C 125 15, 140 38, 165 20" />
                <path d="M 30 42 C 60 40, 120 38, 150 40" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>

            <div className="font-bold text-[13px] tracking-wide text-gray-900 uppercase">
              ACTING REGISTRAR
            </div>
            <div className="text-[11px] text-gray-600 font-sans">
              VIT Bhopal University
            </div>
          </div>
        </div>

        {/* Bottom Print Button Bar */}
        <div className="mt-4 flex justify-end print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-auto px-6 py-2 bg-[#3c8dbc] hover:bg-[#367fa9] text-white font-bold text-xs rounded shadow-xs flex items-center justify-center gap-2 transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print Invoice</span>
          </button>
        </div>
      </div>
    </div>
  );
}
