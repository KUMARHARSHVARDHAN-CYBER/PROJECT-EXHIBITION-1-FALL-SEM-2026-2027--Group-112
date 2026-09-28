"use client";

import React, { useState } from "react";
import {
  Droplets,
  CheckCircle2,
  AlertCircle,
  Clock,
  Download,
  FileCheck,
  ShieldCheck,
  Receipt,
  HelpCircle,
} from "lucide-react";

export interface WaterInvoiceRecord {
  id: string;
  academicYear: string;
  facilityType: string;
  amount: number;
  invoiceNo: string;
  invoiceDate: string;
  status: "Paid" | "Pending" | "Generated";
  paymentRef?: string;
}

export const initialWaterHistory: WaterInvoiceRecord[] = [
  {
    id: "WF-2024-25-01",
    academicYear: "2024-25",
    facilityType: "Subsidized Packaged Drinking Water Bottle (Annual)",
    amount: 14500,
    invoiceNo: "WF/2024-25/08412",
    invoiceDate: "12-Aug-2024",
    status: "Paid",
    paymentRef: "PAY_WF_9841029",
  },
];

export default function WaterFacility() {
  const [agreementChecked, setAgreementChecked] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [statusState, setStatusState] = useState<
    "IDLE" | "GENERATING" | "SUCCESS" | "ALREADY_GENERATED" | "FAILED"
  >("IDLE");
  const [generatedInvoiceNo, setGeneratedInvoiceNo] = useState<string>("");
  const [history, setHistory] = useState<WaterInvoiceRecord[]>(initialWaterHistory);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleGenerateInvoice = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreementChecked) {
      setShowError(true);
      return;
    }

    setShowError(false);
    setStatusState("GENERATING");

    // Simulate API invoice generation
    setTimeout(() => {
      // If already generated in the state
      const alreadyExists = history.some((h) => h.academicYear === "2025-26");
      if (alreadyExists) {
        setStatusState("ALREADY_GENERATED");
        return;
      }

      const randomInvoice = "WF-2025-26-" + Math.floor(100000 + Math.random() * 900000);
      setGeneratedInvoiceNo(randomInvoice);
      setStatusState("SUCCESS");

      // Add to mock history table
      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).replace(/ /g, "-");

      const newRecord: WaterInvoiceRecord = {
        id: "WF-2025-26-" + Date.now(),
        academicYear: "2025-26",
        facilityType: "Subsidized Packaged Drinking Water Bottle (Annual)",
        amount: 15300,
        invoiceNo: randomInvoice,
        invoiceDate: formattedDate,
        status: "Generated",
      };

      setHistory((prev) => [newRecord, ...prev]);
    }, 900);
  };

  const handleDownloadReceipt = (invoice: WaterInvoiceRecord) => {
    setDownloadingId(invoice.id);
    setTimeout(() => {
      setDownloadingId(null);
      alert(`Water Facility Invoice ${invoice.invoiceNo} downloaded successfully.`);
    }, 700);
  };

  const isFormDisabled =
    statusState === "SUCCESS" ||
    statusState === "ALREADY_GENERATED" ||
    history.some((h) => h.academicYear === "2025-26");

  return (
    <div className="w-full bg-[#efefef] min-h-[calc(100vh-4rem)] text-[#333333] font-sans">
      {/* Top Legacy Page Header */}
      <div
        className="text-[30px] font-bold text-[#333] px-3 py-2.5 bg-[#f5f5f5] border-b-2 border-[#2b9fd8] flex items-center justify-between shadow-xs"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <div className="flex items-center gap-2">
          <Droplets className="w-7 h-7 text-[#2b9fd8]" />
          <span>Water Facility</span>
        </div>
        <span className="text-xs font-normal text-gray-500 hidden sm:inline">
          Hostel Services & Subscriptions
        </span>
      </div>

      {/* Main Content Panel */}
      <div className="p-4 sm:p-6 min-h-[500px] bg-[#efefef] max-w-[1200px] mx-auto">
        {/* Subscription Form Card */}
        <div className="bg-white border border-[#d9d9d9] shadow-sm p-5 mb-6">
          <form id="waterForm" onSubmit={handleGenerateInvoice}>
            <input
              type="hidden"
              name="_csrf"
              value="b4a45b31-bbba-4d06-8b30-db2607b6a74b"
            />
            <input
              type="hidden"
              name="authorizedID"
              id="authorizedID"
              value="25MIM10100"
            />

            {/* Title */}
            <div
              className="text-[22px] font-bold text-[#2c3e50] mb-4 flex items-center gap-2"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              <Droplets className="w-5 h-5 text-blue-600" />
              <span>Subscription for Subsidized Packaged Drinking Water Bottle</span>
            </div>

            {/* Information Paragraphs */}
            <div className="space-y-2 text-[13px] text-[#444] leading-relaxed mb-4">
              <div className="p-3 bg-[#eef7fc] border-l-4 border-[#2b9fd8] rounded-xs text-[#2c3e50]">
                This is a completely optional service. Safe drinking water through the
                existing upgraded RO-UV-Ozonator treated water system will continue to
                be available to all hostel residents as per the current arrangements.
              </div>
              <div className="font-semibold text-[#1B365D] text-sm pt-1">
                The Academic Year subscription charge for this facility is ₹15,300
              </div>
            </div>

            {/* Terms and Conditions Box */}
            <div
              className="bg-[#f8f8f8] border border-[#d9d9d9] p-4 mt-4"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="agreementCheck"
                  checked={agreementChecked || isFormDisabled}
                  disabled={isFormDisabled}
                  onChange={(e) => {
                    setAgreementChecked(e.target.checked);
                    if (e.target.checked) setShowError(false);
                  }}
                  className="mt-1 h-4 w-4 rounded-none text-[#2b9fd8] focus:ring-0 cursor-pointer disabled:cursor-not-allowed"
                />
                <label
                  htmlFor="agreementCheck"
                  className={`text-[13px] text-[#333] leading-snug cursor-pointer select-none ${
                    isFormDisabled ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  I hereby agree to subscribe for the subsidized packaged drinking water facility
                  provided by the institution and understand the applicable terms and conditions.
                </label>
              </div>

              {/* Error Message */}
              {showError && (
                <div
                  id="errorMessage"
                  className="text-red-600 text-[13px] font-bold mt-2.5 flex items-center gap-1.5"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>Please check the acknowledgement before generating the invoice.</span>
                </div>
              )}
            </div>

            {/* Button Area */}
            <div className="text-center mt-6">
              <button
                type="submit"
                id="generateBtn"
                disabled={isFormDisabled || statusState === "GENERATING"}
                className={`text-white px-6 py-2 rounded-[3px] text-[13px] font-medium transition-colors shadow-xs ${
                  isFormDisabled || statusState === "GENERATING"
                    ? "bg-[#cccccc] border border-[#b3b3b3] cursor-not-allowed text-gray-700"
                    : "bg-[#7395b7] border border-[#5f7f9d] hover:bg-[#5f7f9d] cursor-pointer"
                }`}
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {statusState === "GENERATING"
                  ? "Generating Invoice..."
                  : isFormDisabled
                  ? "Invoice Generated"
                  : "Generate Invoice"}
              </button>
            </div>

            {/* Status Message Boxes */}
            {statusState === "SUCCESS" && (
              <div
                id="statusMessage"
                className="mt-5 p-3 rounded-[4px] text-[14px] font-bold text-center bg-[#d4edda] text-[#155724] border border-[#c3e6cb] animate-in fade-in duration-200"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  <span>Invoice Generated Successfully.</span>
                </div>
                <div>
                  Invoice No : <span className="font-mono">{generatedInvoiceNo}</span>
                </div>
                <div className="text-xs font-normal text-green-800 mt-1">
                  You may proceed to Online Payments to complete the payment.
                </div>
              </div>
            )}

            {statusState === "ALREADY_GENERATED" && (
              <div
                id="statusMessage"
                className="mt-5 p-3 rounded-[4px] text-[14px] font-bold text-center bg-[#fff3cd] text-[#856404] border border-[#ffeeba] animate-in fade-in duration-200"
              >
                <div className="flex items-center justify-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>Water Facility Invoice Already Generated.</span>
                </div>
              </div>
            )}

            {statusState === "FAILED" && (
              <div
                id="statusMessage"
                className="mt-5 p-3 rounded-[4px] text-[14px] font-bold text-center bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb] animate-in fade-in duration-200"
              >
                <div className="flex items-center justify-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span>Invoice Generation Failed. Please try again later.</span>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Request & Invoice History Section */}
        <div className="bg-white border border-[#d9d9d9] shadow-sm p-4">
          <div className="border-b border-[#e5e5e5] pb-2 mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#2c3e50] flex items-center gap-2 m-0">
              <Receipt className="w-4 h-4 text-[#2b9fd8]" />
              <span>Subscription & Invoice History</span>
            </h3>
            <span className="text-xs text-gray-500">
              Total Records: <b>{history.length}</b>
            </span>
          </div>

          <div className="overflow-x-auto border border-[#ddd]">
            <table className="w-full border-collapse text-xs border border-[#ddd]">
              <thead>
                <tr
                  style={{ backgroundColor: "#3c8dbc", color: "#fff" }}
                  className="font-bold text-white text-center"
                >
                  <th className="p-2 border border-[#ddd] w-[6%]">Sl.No.</th>
                  <th className="p-2 border border-[#ddd] w-[14%]">Academic Year</th>
                  <th className="p-2 border border-[#ddd] text-left w-[36%]">
                    Facility Type
                  </th>
                  <th className="p-2 border border-[#ddd] w-[12%]">Amount (₹)</th>
                  <th className="p-2 border border-[#ddd] w-[14%]">Invoice No.</th>
                  <th className="p-2 border border-[#ddd] w-[10%]">Status</th>
                  <th className="p-2 border border-[#ddd] w-[8%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={`border-b border-[#ddd] text-center transition-colors ${
                      idx % 2 === 1 ? "bg-[#f9f9f9]" : "bg-white"
                    } hover:bg-[#eef5fa]`}
                  >
                    <td className="p-2 border border-[#ddd] font-medium">{idx + 1}</td>
                    <td className="p-2 border border-[#ddd] font-bold text-[#337ab7]">
                      {item.academicYear}
                    </td>
                    <td className="p-2 border border-[#ddd] text-left text-gray-800">
                      {item.facilityType}
                    </td>
                    <td className="p-2 border border-[#ddd] font-semibold text-gray-900">
                      ₹{item.amount.toLocaleString("en-IN")}
                    </td>
                    <td className="p-2 border border-[#ddd] font-mono text-[#333]">
                      {item.invoiceNo}
                    </td>
                    <td className="p-2 border border-[#ddd]">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                          item.status === "Paid"
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : item.status === "Generated"
                            ? "bg-amber-100 text-amber-800 border border-amber-300"
                            : "bg-blue-100 text-blue-800 border border-blue-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-2 border border-[#ddd]">
                      <button
                        type="button"
                        onClick={() => handleDownloadReceipt(item)}
                        disabled={downloadingId === item.id}
                        className="bg-[#7395b7] hover:bg-[#5f7f9d] text-white px-2 py-1 text-[11px] rounded-[2px] border border-[#5f7f9d] inline-flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                        title="Download Invoice / Receipt"
                      >
                        <Download className="w-3 h-3" />
                        <span>
                          {downloadingId === item.id ? "..." : "Invoice"}
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Instructions Accordion / Note */}
        <div className="mt-4 p-3 bg-white border border-[#d9d9d9] text-xs text-gray-600">
          <div className="font-bold text-[#2c3e50] mb-1 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Important Guidelines:</span>
          </div>
          <ul className="list-disc pl-5 space-y-0.5 text-[11px]">
            <li>Packaged water bottles will be delivered to designated floor distribution counters twice daily.</li>
            <li>Invoices generated can be paid online via the VTOP Online Payments portal.</li>
            <li>Subscription is non-transferable and valid strictly for the active registered Academic Year.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
