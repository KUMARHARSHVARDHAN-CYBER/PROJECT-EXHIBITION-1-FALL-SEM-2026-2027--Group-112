"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Receipt,
  CheckCircle2,
  AlertCircle,
  Clock,
  Download,
  Printer,
  ExternalLink,
  ShieldCheck,
  Eye,
  RotateCw,
  Search,
  FileText,
  Wallet,
  X,
  Building,
  Info,
  Lock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  QrCode,
  Smartphone,
  ChevronRight,
  Check,
} from "lucide-react";

// ==========================================
// 1. DATA CONTRACTS & STRUCTURED MOCK JSON
// ==========================================

export interface PendingDue {
  id: string;
  feeCategory: string;
  invoiceNumber: string;
  academicYear: string;
  semester: string;
  amountDue: number;
  walletAdjustment: number;
  netPayable: number;
  dueDate: string;
  status: "Pending" | "Overdue" | "Processing";
  description: string;
}

export interface TransactionRecord {
  slNo: number;
  transactionId: string;
  invoiceNumber: string;
  amount: number;
  status: "SUCCESS" | "FAILED" | "PENDING";
  transactionTime: string;
  response: string;
  paymentMode: string;
  feeType: string;
  authId: string;
  bankRefNumber?: string;
}

export interface PaymentsMockData {
  pendingDues: PendingDue[];
  transactionHistory: TransactionRecord[];
  walletBalance: number;
  studentId: string;
  csrfToken: string;
}

export const initialPaymentsData: PaymentsMockData = {
  studentId: "25MIM10100",
  csrfToken: "b4a45b31-bbba-4d06-8b30-db2607b6a74b",
  walletBalance: 2500,
  pendingDues: [
    {
      id: "DUE-2025-01",
      feeCategory: "Tuition & Special Training Fee (Winter 2025-26)",
      invoiceNumber: "INV-2025-26-89102",
      academicYear: "2025-26",
      semester: "Winter Semester",
      amountDue: 198000,
      walletAdjustment: 0,
      netPayable: 198000,
      dueDate: "15-Jan-2026",
      status: "Pending",
      description: "Academic Tuition, Laboratory Usage & Semester Examination Fee",
    },
    {
      id: "DUE-2025-02",
      feeCategory: "Hostel & Mess Maintenance Fee (Winter 2025-26)",
      invoiceNumber: "INV-HSTL-2025-4421",
      academicYear: "2025-26",
      semester: "Winter Semester",
      amountDue: 45000,
      walletAdjustment: 2500,
      netPayable: 42500,
      dueDate: "20-Jan-2026",
      status: "Pending",
      description: "Block 1 Non-AC 2-Bedded Room & Special Mess Maintenance Fee",
    },
  ],
  transactionHistory: [
    {
      slNo: 1,
      transactionId: "TXN2025081298412",
      invoiceNumber: "INV-2024-25-10294",
      amount: 198000,
      status: "SUCCESS",
      transactionTime: "12-Aug-2025 11:20:45 AM",
      response: "SUCCESS - Payment captured successfully via NetBanking (SBI Core)",
      paymentMode: "Net Banking (SBI)",
      feeType: "Tuition & Special Fee (Fall 2025-26)",
      authId: "25MIM10100",
      bankRefNumber: "SBIN890412891",
    },
    {
      slNo: 2,
      transactionId: "TXN2025072044192",
      invoiceNumber: "INV-HSTL-2024-819",
      amount: 135000,
      status: "SUCCESS",
      transactionTime: "20-Jul-2025 04:45:12 PM",
      response: "SUCCESS - Payment captured via HDFC UPI Gateway (Ref: 42091823901)",
      paymentMode: "UPI / QR",
      feeType: "Hostel & Mess Fee (Fall 2025-26)",
      authId: "25MIM10100",
      bankRefNumber: "HDFC42091823901",
    },
    {
      slNo: 3,
      transactionId: "TXN2025071533219",
      invoiceNumber: "INV-HSTL-2024-819",
      amount: 135000,
      status: "FAILED",
      transactionTime: "15-Jul-2025 08:14:02 PM",
      response: "FAILED - User cancelled transaction at bank 3D-Secure page",
      paymentMode: "Credit Card (Visa)",
      feeType: "Hostel & Mess Fee (Fall 2025-26)",
      authId: "25MIM10100",
      bankRefNumber: "N/A",
    },
    {
      slNo: 4,
      transactionId: "TXN2024090100412",
      invoiceNumber: "INV-2024-25-00124",
      amount: 10000,
      status: "SUCCESS",
      transactionTime: "01-Sep-2024 10:05:30 AM",
      response: "SUCCESS - Institutional Caution Deposit Fee Settled",
      paymentMode: "Debit Card (Mastercard)",
      feeType: "Institutional Caution Deposit",
      authId: "25MIM10100",
      bankRefNumber: "ICIC902183102",
    },
    {
      slNo: 5,
      transactionId: "TXN2024081077619",
      invoiceNumber: "INV-WF-2024-08412",
      amount: 14500,
      status: "SUCCESS",
      transactionTime: "10-Aug-2024 02:30:18 PM",
      response: "SUCCESS - Subsidized Packaged Water Facility Fee Settled",
      paymentMode: "UPI / BharatPe",
      feeType: "Subsidized Water Bottle Facility",
      authId: "25MIM10100",
      bankRefNumber: "UPI881920391",
    },
  ],
};

// ==========================================
// 2. MAIN COMPONENT EXPORT
// ==========================================

export default function Payments() {
  // State management
  const [activeTab, setActiveTab] = useState<"DUES" | "HISTORY" | "STATUS_LOOKUP">("DUES");
  const [duesState, setDuesState] = useState<PendingDue[]>(initialPaymentsData.pendingDues);
  const [history, setHistory] = useState<TransactionRecord[]>(initialPaymentsData.transactionHistory);
  const [walletBalance, setWalletBalance] = useState<number>(initialPaymentsData.walletBalance);
  const [applyWallet, setApplyWallet] = useState<Record<string, boolean>>({});

  // Simulation states
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingStage, setProcessingStage] = useState<string>("");
  const [selectedDueForPayment, setSelectedDueForPayment] = useState<PendingDue | null>(null);
  const [paymentGatewayModal, setPaymentGatewayModal] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"UPI" | "NET_BANKING" | "CARD" | "WALLET">("UPI");
  const [selectedBank, setSelectedBank] = useState<string>("SBI");
  const [upiIdInput, setUpiIdInput] = useState<string>("student@okaxis");

  // Modals from Legacy HTML
  const [previewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [previewInvoiceNo, setPreviewInvoiceNo] = useState<string>("");
  
  const [statusModalOpen, setStatusModalOpen] = useState<boolean>(false);
  const [statusDetailTxn, setStatusDetailTxn] = useState<TransactionRecord | null>(null);
  
  const [searchTxnInput, setSearchTxnInput] = useState<string>("");
  const [searchInvoiceInput, setSearchInvoiceInput] = useState<string>("");

  // Receipt view modal
  const [receiptModalOpen, setReceiptModalOpen] = useState<boolean>(false);
  const [activeReceipt, setActiveReceipt] = useState<TransactionRecord | null>(null);

  // Success alert message
  const [alertSuccessMsg, setAlertSuccessMsg] = useState<string | null>(null);

  // Toggle demo between "With Dues" and "Zero Dues (Legacy Clear State)"
  const [forceEmptyDues, setForceEmptyDues] = useState<boolean>(false);

  // Calculate actual payable for a due item
  const getNetPayable = (due: PendingDue) => {
    const isWalletApplied = applyWallet[due.id] ?? false;
    if (isWalletApplied) {
      const deduction = Math.min(walletBalance, due.amountDue);
      return due.amountDue - deduction;
    }
    return due.amountDue;
  };

  // Trigger Pay Now Action (Replaces legacy form submit)
  const handlePayNowClick = (e: React.MouseEvent, due: PendingDue) => {
    e.preventDefault();
    setSelectedDueForPayment(due);
    setProcessingStage("Connecting to Bank Payment Gateway...");
    setIsProcessing(true);

    // 2-second simulation connecting to bank gateway
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentGatewayModal(true);
    }, 2000);
  };

  // Complete Payment Simulation
  const handleAuthorizePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDueForPayment) return;

    setIsProcessing(true);
    setProcessingStage("Authorizing transaction with Bank Gateway & Settling VTOP Ledger...");

    setTimeout(() => {
      const netPaid = getNetPayable(selectedDueForPayment);
      const isWalletUsed = applyWallet[selectedDueForPayment.id] ?? false;
      const walletDeducted = isWalletUsed ? Math.min(walletBalance, selectedDueForPayment.amountDue) : 0;

      // Update wallet if used
      if (walletDeducted > 0) {
        setWalletBalance((prev) => Math.max(0, prev - walletDeducted));
      }

      // Generate transaction record
      const newTxnId = "TXN" + Date.now().toString().slice(-9);
      const newBankRef = "REF" + Math.floor(100000000 + Math.random() * 900000000);
      const newRecord: TransactionRecord = {
        slNo: history.length + 1,
        transactionId: newTxnId,
        invoiceNumber: selectedDueForPayment.invoiceNumber,
        amount: netPaid,
        status: "SUCCESS",
        transactionTime: new Date().toLocaleString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
        response: `SUCCESS - Payment of ₹${netPaid.toLocaleString("en-IN")} captured successfully via ${selectedPaymentMethod} (${newBankRef})`,
        paymentMode:
          selectedPaymentMethod === "UPI"
            ? `UPI (${upiIdInput})`
            : selectedPaymentMethod === "NET_BANKING"
            ? `Net Banking (${selectedBank})`
            : selectedPaymentMethod === "CARD"
            ? "Credit / Debit Card"
            : "VTOP Student Wallet",
        feeType: selectedDueForPayment.feeCategory,
        authId: "25MIM10100",
        bankRefNumber: newBankRef,
      };

      // Update lists
      setHistory([newRecord, ...history]);
      setDuesState((prev) => prev.filter((d) => d.id !== selectedDueForPayment.id));
      setIsProcessing(false);
      setPaymentGatewayModal(false);
      setActiveReceipt(newRecord);
      setAlertSuccessMsg(
        `Payment successful! Transaction ID: ${newTxnId} for Invoice ${selectedDueForPayment.invoiceNumber}. Receipt generated.`
      );

      // Auto scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  // Preview Transaction Details (Legacy getPreview(invoiceNo))
  const handleOpenPreview = (invoiceNo: string) => {
    setPreviewInvoiceNo(invoiceNo);
    setPreviewModalOpen(true);
  };

  // Check Status Detail (Legacy doPaymentStatus(txnId, invoiceNo))
  const handleCheckStatus = (txn: TransactionRecord) => {
    setStatusDetailTxn(txn);
    setStatusModalOpen(true);
  };

  // Search by Txn ID / Invoice No
  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = history.find(
      (t) =>
        (searchTxnInput && t.transactionId.toLowerCase().includes(searchTxnInput.trim().toLowerCase())) ||
        (searchInvoiceInput && t.invoiceNumber.toLowerCase().includes(searchInvoiceInput.trim().toLowerCase()))
    );

    if (found) {
      handleCheckStatus(found);
    } else {
      setStatusDetailTxn({
        slNo: 0,
        transactionId: searchTxnInput || "UNKNOWN",
        invoiceNumber: searchInvoiceInput || "UNKNOWN",
        amount: 0,
        status: "FAILED",
        transactionTime: new Date().toLocaleString(),
        response: "BANK RESPONSE: null - No corresponding transaction log found in payment gateway database",
        paymentMode: "N/A",
        feeType: "Fee Query",
        authId: "25MIM10100",
      });
      setStatusModalOpen(true);
    }
  };

  const effectiveDues = forceEmptyDues ? [] : duesState;

  return (
    <div className="w-full bg-[#f4f6f9] min-h-screen text-gray-800 font-sans pb-16">
      {/* Hidden legacy form tokens preserved */}
      <input type="hidden" name="_csrf" value={initialPaymentsData.csrfToken} />
      <input type="hidden" name="authorizedID" id="authorizedID" value={initialPaymentsData.studentId} />

      {/* Main Process Section */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-3">
        {/* ======================================================== */}
        {/* TOP STATUS TOAST / ALERT BANNER                          */}
        {/* ======================================================== */}
        {alertSuccessMsg && (
          <div className="mb-4 bg-green-50 border-l-4 border-green-600 p-3.5 shadow-sm rounded-r flex items-start justify-between">
            <div className="flex items-center gap-2 text-green-800 font-semibold text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <span>{alertSuccessMsg}</span>
            </div>
            <button
              onClick={() => setAlertSuccessMsg(null)}
              className="text-green-700 hover:text-green-900 text-xs font-bold px-2 py-0.5"
            >
              ✕
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* ADMINLTE MAIN CARD: .box.box-solid.box.box-info           */}
        {/* ======================================================== */}
        <div className="bg-white border border-gray-300 border-t-4 border-t-[#00c0ef] rounded-xs shadow-xs mb-6 overflow-hidden">
          
          {/* Box Header */}
          <div className="border-b border-gray-200 px-4 py-3 bg-white flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#00c0ef]" />
              <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-wide uppercase">
                ONLINE PAYMENT
              </h3>
            </div>

            {/* Quick Demo Controller Bar */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 font-medium">Student ID:</span>
              <span className="bg-blue-100 text-blue-900 font-mono font-bold px-2 py-0.5 rounded border border-blue-200">
                25MIM10100
              </span>
              <button
                type="button"
                onClick={() => setForceEmptyDues(!forceEmptyDues)}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold border transition ${
                  forceEmptyDues
                    ? "bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
                title="Toggle between Zero Dues state and Pending Dues"
              >
                {forceEmptyDues ? "🔄 View With Mock Dues" : "🟢 View 'No Dues' State"}
              </button>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="bg-[#f8f9fa] border-b border-gray-200 px-4 pt-2 flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab("DUES")}
              className={`px-4 py-2 text-xs font-bold rounded-t-sm flex items-center gap-1.5 transition border-t border-x ${
                activeTab === "DUES"
                  ? "bg-white text-blue-900 border-gray-300 border-b-white -mb-px shadow-xs"
                  : "bg-transparent text-gray-600 border-transparent hover:text-blue-800"
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pending Fee Dues ({effectiveDues.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("HISTORY")}
              className={`px-4 py-2 text-xs font-bold rounded-t-sm flex items-center gap-1.5 transition border-t border-x ${
                activeTab === "HISTORY"
                  ? "bg-white text-blue-900 border-gray-300 border-b-white -mb-px shadow-xs"
                  : "bg-transparent text-gray-600 border-transparent hover:text-blue-800"
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>Transaction History & Receipts ({history.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("STATUS_LOOKUP")}
              className={`px-4 py-2 text-xs font-bold rounded-t-sm flex items-center gap-1.5 transition border-t border-x ${
                activeTab === "STATUS_LOOKUP"
                  ? "bg-white text-blue-900 border-gray-300 border-b-white -mb-px shadow-xs"
                  : "bg-transparent text-gray-600 border-transparent hover:text-blue-800"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Check Transaction Status</span>
            </button>

            {/* Wallet Balance Summary Indicator */}
            <div className="ml-auto flex items-center gap-1.5 text-xs pb-1 pr-2">
              <Wallet className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-gray-600">Student Wallet:</span>
              <span className="font-bold text-green-700 font-mono">
                ₹{walletBalance.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Box Body */}
          <div className="p-4 sm:p-6 space-y-6">

            {/* ======================================================== */}
            {/* TAB 1: PENDING DUES TABLE                                */}
            {/* ======================================================== */}
            {activeTab === "DUES" && (
              <div className="space-y-4">
                {effectiveDues.length === 0 ? (
                  /* Exact Green Banner from Legacy HTML */
                  <div className="py-12 px-4 text-center bg-gray-50 border border-dashed border-gray-300 rounded">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-green-700 tracking-wide mb-1">
                      There is no payment dues in your account!
                    </h4>
                    <p className="text-xs text-gray-500 max-w-md mx-auto">
                      All academic fees, hostel charges, and institutional subscriptions for the current semester are fully settled.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab("HISTORY")}
                        className="px-3 py-1.5 bg-[#3c8dbc] hover:bg-[#367fa9] text-white text-xs font-semibold rounded shadow-xs"
                      >
                        View Past Payment Receipts
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="font-semibold text-gray-700">
                        Select a fee invoice below to proceed with institutional gateway payment:
                      </span>
                      <span className="text-red-600 font-bold">
                        * Please verify amount before clicking Pay Now
                      </span>
                    </div>

                    <div className="overflow-x-auto border border-gray-300 rounded shadow-xs">
                      <table className="w-full text-xs text-left border-collapse">
                        <thead>
                          <tr className="bg-[#cfe2ff] text-[#084298] font-bold border-b border-gray-300">
                            <th className="p-2.5 border-r border-gray-300 text-center w-12">SL.NO</th>
                            <th className="p-2.5 border-r border-gray-300">FEE CATEGORY & DETAILS</th>
                            <th className="p-2.5 border-r border-gray-300">INVOICE NUMBER</th>
                            <th className="p-2.5 border-r border-gray-300 text-center">ACADEMIC PERIOD</th>
                            <th className="p-2.5 border-r border-gray-300 text-center">DUE DATE</th>
                            <th className="p-2.5 border-r border-gray-300 text-right">TOTAL AMOUNT</th>
                            <th className="p-2.5 border-r border-gray-300 text-center">WALLET ADJUSTMENT</th>
                            <th className="p-2.5 border-r border-gray-300 text-right">NET PAYABLE</th>
                            <th className="p-2.5 text-center w-36">PAYMENT ACTION</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {effectiveDues.map((due, idx) => {
                            const isWalletOn = applyWallet[due.id] ?? false;
                            const netAmt = getNetPayable(due);
                            const walletDeduction = isWalletOn ? Math.min(walletBalance, due.amountDue) : 0;

                            return (
                              <tr key={due.id} className="hover:bg-blue-50/40 transition">
                                <td className="p-2.5 border-r border-gray-300 text-center font-bold text-gray-600">
                                  {idx + 1}
                                </td>
                                <td className="p-2.5 border-r border-gray-300">
                                  <div className="font-bold text-blue-900">{due.feeCategory}</div>
                                  <div className="text-[11px] text-gray-500">{due.description}</div>
                                </td>
                                <td className="p-2.5 border-r border-gray-300 font-mono font-semibold text-gray-800">
                                  <button
                                    type="button"
                                    onClick={() => handleOpenPreview(due.invoiceNumber)}
                                    className="text-blue-700 hover:underline flex items-center gap-1 font-semibold"
                                    title="Click to view transaction details preview"
                                  >
                                    <span>{due.invoiceNumber}</span>
                                    <Eye className="w-3 h-3 text-gray-400" />
                                  </button>
                                </td>
                                <td className="p-2.5 border-r border-gray-300 text-center text-gray-700">
                                  <span className="font-semibold">{due.academicYear}</span>
                                  <div className="text-[10px] text-gray-500">{due.semester}</div>
                                </td>
                                <td className="p-2.5 border-r border-gray-300 text-center font-bold text-red-700 whitespace-nowrap">
                                  {due.dueDate}
                                </td>
                                <td className="p-2.5 border-r border-gray-300 text-right font-mono font-bold text-gray-900">
                                  ₹{due.amountDue.toLocaleString("en-IN")}
                                </td>
                                <td className="p-2.5 border-r border-gray-300 text-center">
                                  {walletBalance > 0 ? (
                                    <label className="inline-flex items-center gap-1.5 cursor-pointer select-none">
                                      <input
                                        type="checkbox"
                                        checked={isWalletOn}
                                        onChange={(e) =>
                                          setApplyWallet({
                                            ...applyWallet,
                                            [due.id]: e.target.checked,
                                          })
                                        }
                                        className="w-3.5 h-3.5 text-blue-600 rounded border-gray-300"
                                      />
                                      <span className="text-[11px] text-gray-700 font-medium">
                                        {isWalletOn ? `-₹${walletDeduction.toLocaleString("en-IN")}` : "Use Wallet"}
                                      </span>
                                    </label>
                                  ) : (
                                    <span className="text-[11px] text-gray-400 italic">No Balance</span>
                                  )}
                                </td>
                                <td className="p-2.5 border-r border-gray-300 text-right font-mono font-extrabold text-blue-900 text-sm">
                                  ₹{netAmt.toLocaleString("en-IN")}
                                </td>
                                <td className="p-2.5 text-center">
                                  <button
                                    type="button"
                                    onClick={(e) => handlePayNowClick(e, due)}
                                    disabled={isProcessing}
                                    className="w-full py-1.5 px-3 bg-[#3c8dbc] hover:bg-[#367fa9] active:bg-[#285e8e] text-white font-bold text-xs rounded shadow-xs transition flex items-center justify-center gap-1.5 disabled:opacity-50"
                                  >
                                    <CreditCard className="w-3.5 h-3.5" />
                                    <span>Pay Now</span>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 2: TRANSACTION HISTORY & RECEIPTS                    */}
            {/* ======================================================== */}
            {activeTab === "HISTORY" && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="font-semibold text-gray-700">
                    Showing past institutional fee payments and transaction logs ({history.length} records):
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded font-semibold flex items-center gap-1"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Summary</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto border border-gray-300 rounded shadow-xs">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#cfe2ff] text-[#084298] font-bold border-b border-gray-300">
                        <th className="p-2.5 border-r border-gray-300 text-center w-12">SL.NO</th>
                        <th className="p-2.5 border-r border-gray-300">TRANSACTION ID</th>
                        <th className="p-2.5 border-r border-gray-300">INVOICE NUMBER</th>
                        <th className="p-2.5 border-r border-gray-300">FEE TYPE</th>
                        <th className="p-2.5 border-r border-gray-300 text-right">AMOUNT (₹)</th>
                        <th className="p-2.5 border-r border-gray-300 text-center">STATUS</th>
                        <th className="p-2.5 border-r border-gray-300 text-center">TRANSACTION TIME</th>
                        <th className="p-2.5 border-r border-gray-300">RESPONSE</th>
                        <th className="p-2.5 text-center w-36">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {history.map((item, idx) => (
                        <tr key={item.transactionId} className="hover:bg-blue-50/40 transition">
                          <td className="p-2.5 border-r border-gray-300 text-center font-bold text-gray-600">
                            {idx + 1}
                          </td>
                          <td className="p-2.5 border-r border-gray-300 font-mono font-bold text-gray-900">
                            {item.transactionId}
                          </td>
                          <td className="p-2.5 border-r border-gray-300 font-mono font-semibold text-blue-800">
                            {item.invoiceNumber}
                          </td>
                          <td className="p-2.5 border-r border-gray-300 text-gray-700">
                            <div className="font-semibold">{item.feeType}</div>
                            <div className="text-[10px] text-gray-500">{item.paymentMode}</div>
                          </td>
                          <td className="p-2.5 border-r border-gray-300 text-right font-mono font-bold text-gray-900">
                            ₹{item.amount.toLocaleString("en-IN")}
                          </td>
                          <td className="p-2.5 border-r border-gray-300 text-center">
                            {item.status === "SUCCESS" ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 border border-green-300">
                                SUCCESS
                              </span>
                            ) : item.status === "FAILED" ? (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-300">
                                FAILED
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                                PENDING
                              </span>
                            )}
                          </td>
                          <td className="p-2.5 border-r border-gray-300 text-center text-gray-600 whitespace-nowrap">
                            {item.transactionTime}
                          </td>
                          <td className="p-2.5 border-r border-gray-300 text-gray-600 max-w-xs truncate" title={item.response}>
                            {item.response}
                          </td>
                          <td className="p-2.5 text-center">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleCheckStatus(item)}
                                className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-blue-900 border border-gray-300 text-[11px] font-semibold rounded"
                                title="Check Status & Bank Response"
                              >
                                Status
                              </button>
                              {item.status === "SUCCESS" && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveReceipt(item);
                                    setReceiptModalOpen(true);
                                  }}
                                  className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white text-[11px] font-semibold rounded flex items-center gap-1 shadow-xs"
                                  title="View & Download Official Receipt"
                                >
                                  <Receipt className="w-3 h-3" />
                                  <span>Receipt</span>
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 3: TRANSACTION STATUS QUERY LOOKUP                   */}
            {/* ======================================================== */}
            {activeTab === "STATUS_LOOKUP" && (
              <div className="max-w-2xl mx-auto py-4 space-y-5">
                <div className="bg-blue-50 border border-blue-200 rounded p-4 text-xs text-blue-900 flex items-start gap-3">
                  <Search className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Transaction Status Query:</span>
                    <p className="mt-1 text-gray-700">
                      If amount was deducted from your bank account but status shows Pending/Failed, please enter the Transaction ID or Invoice Number below to query live bank gateway clearance.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleLookupSubmit} className="bg-gray-50 p-5 rounded border border-gray-300 space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Transaction Reference ID (e.g., TXN2025081298412)
                    </label>
                    <input
                      type="text"
                      value={searchTxnInput}
                      onChange={(e) => setSearchTxnInput(e.target.value)}
                      placeholder="Enter Transaction ID"
                      className="w-full p-2 border border-gray-300 rounded font-mono text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div className="text-center font-bold text-gray-400">--- OR ---</div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Fee Invoice Number (e.g., INV-2024-25-10294)
                    </label>
                    <input
                      type="text"
                      value={searchInvoiceInput}
                      onChange={(e) => setSearchInvoiceInput(e.target.value)}
                      placeholder="Enter Invoice Number"
                      className="w-full p-2 border border-gray-300 rounded font-mono text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 bg-[#3c8dbc] hover:bg-[#367fa9] text-white font-bold rounded shadow-xs flex items-center justify-center gap-2 text-sm transition"
                  >
                    <Search className="w-4 h-4" />
                    <span>Query Bank Gateway Response</span>
                  </button>
                </form>
              </div>
            )}

            {/* ======================================================== */}
            {/* EXACT LEGACY INSTRUCTION NOTE ALERT BOX                   */}
            {/* ======================================================== */}
            <div
              className="bg-[#d9edf7] border border-[#bce8f1] rounded p-4 text-xs text-[#31708f] space-y-2 shadow-2xs"
              role="alert"
            >
              <div className="font-bold text-sm text-[#245269] flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                <span>Important Institutional Note:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 font-bold text-[11px] sm:text-xs">
                <li>
                  <span className="text-[#800000]">
                    Kindly use Chrome Browser For Payments
                  </span>
                </li>
                <li>
                  <span className="text-[#800000]">
                    Fire Fox Users kindly Allow Block pop-up windows, Move to Settings Type &quot;Block pop-up&quot; uncheck the check box
                  </span>
                </li>
                <li>
                  <span className="text-[#800000]">
                    Click &apos;Pay Now&apos; button to make fee adjustment using Wallet (if any amount available in it), view the balance amount to be paid and proceed payment
                  </span>
                </li>
                <li>
                  <span className="text-[#800000]">
                    All the payments are suspended between 11:30 PM to 12:30 AM. Please try after 12:30 AM.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SIMULATED PAYMENT GATEWAY MODAL (Replaces legacy bank form redirect)   */}
      {/* ========================================================================= */}
      {paymentGatewayModal && selectedDueForPayment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden border border-gray-300">
            {/* Gateway Header */}
            <div className="bg-[#1B365D] text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <h4 className="font-bold text-sm tracking-wide">VTOP SECURE PAYMENT GATEWAY</h4>
                  <div className="text-[10px] text-gray-300">256-Bit SSL Encrypted Banking Channel</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPaymentGatewayModal(false)}
                className="text-gray-300 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Gateway Body */}
            <form onSubmit={handleAuthorizePayment} className="p-5 space-y-4 text-xs">
              {/* Invoice Summary Box */}
              <div className="bg-gray-50 border border-gray-200 rounded p-3 space-y-1.5">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Student Authorized ID:</span>
                  <span className="font-mono font-bold text-gray-900">25MIM10100</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Invoice Number:</span>
                  <span className="font-mono font-bold text-blue-900">{selectedDueForPayment.invoiceNumber}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Fee Category:</span>
                  <span className="font-bold text-gray-900">{selectedDueForPayment.feeCategory}</span>
                </div>
                <div className="border-t border-gray-200 pt-1.5 flex justify-between items-center">
                  <span className="font-bold text-gray-800">Total Payable Amount:</span>
                  <span className="font-mono font-black text-lg text-blue-900">
                    ₹{getNetPayable(selectedDueForPayment).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Payment Mode Selection */}
              <div>
                <label className="block font-bold text-gray-700 mb-2">Select Payment Mode:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod("UPI")}
                    className={`p-2.5 rounded border text-left flex items-center gap-2 transition ${
                      selectedPaymentMethod === "UPI"
                        ? "bg-blue-50 border-blue-600 text-blue-900 font-bold ring-1 ring-blue-600"
                        : "border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>UPI / QR Code</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod("NET_BANKING")}
                    className={`p-2.5 rounded border text-left flex items-center gap-2 transition ${
                      selectedPaymentMethod === "NET_BANKING"
                        ? "bg-blue-50 border-blue-600 text-blue-900 font-bold ring-1 ring-blue-600"
                        : "border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <Building className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Net Banking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod("CARD")}
                    className={`p-2.5 rounded border text-left flex items-center gap-2 transition ${
                      selectedPaymentMethod === "CARD"
                        ? "bg-blue-50 border-blue-600 text-blue-900 font-bold ring-1 ring-blue-600"
                        : "border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Debit / Credit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPaymentMethod("WALLET")}
                    className={`p-2.5 rounded border text-left flex items-center gap-2 transition ${
                      selectedPaymentMethod === "WALLET"
                        ? "bg-blue-50 border-blue-600 text-blue-900 font-bold ring-1 ring-blue-600"
                        : "border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <Wallet className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>VTOP Wallet (₹{walletBalance})</span>
                  </button>
                </div>
              </div>

              {/* Mode Specific Inputs */}
              {selectedPaymentMethod === "UPI" && (
                <div className="space-y-2 bg-gray-50 p-3 rounded border border-gray-200">
                  <label className="block font-semibold text-gray-700">Enter Virtual Payment Address (UPI ID):</label>
                  <input
                    type="text"
                    value={upiIdInput}
                    onChange={(e) => setUpiIdInput(e.target.value)}
                    required
                    placeholder="e.g. mobile@upi or username@okaxis"
                    className="w-full p-2 border border-gray-300 rounded font-mono text-xs bg-white"
                  />
                  <div className="text-[10px] text-gray-500">
                    A collect request will be sent to your UPI App (GPay, PhonePe, Paytm).
                  </div>
                </div>
              )}

              {selectedPaymentMethod === "NET_BANKING" && (
                <div className="space-y-2 bg-gray-50 p-3 rounded border border-gray-200">
                  <label className="block font-semibold text-gray-700">Select Core Retail Banking Partner:</label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded text-xs bg-white"
                  >
                    <option value="State Bank of India">State Bank of India (SBI Core)</option>
                    <option value="HDFC Bank">HDFC Bank NetBanking</option>
                    <option value="ICICI Bank">ICICI Bank Corporate/Retail</option>
                    <option value="Punjab National Bank">Punjab National Bank</option>
                    <option value="Axis Bank">Axis Bank Internet Banking</option>
                    <option value="Canara Bank">Canara Bank</option>
                  </select>
                </div>
              )}

              {selectedPaymentMethod === "CARD" && (
                <div className="space-y-2 bg-gray-50 p-3 rounded border border-gray-200">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Card Number (Simulated):</label>
                    <input
                      type="text"
                      defaultValue="4111 2222 3333 4444"
                      className="w-full p-2 border border-gray-300 rounded font-mono text-xs bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">Expiry (MM/YY):</label>
                      <input
                        type="text"
                        defaultValue="12/28"
                        className="w-full p-2 border border-gray-300 rounded font-mono text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700 mb-1">CVV:</label>
                      <input
                        type="password"
                        defaultValue="892"
                        className="w-full p-2 border border-gray-300 rounded font-mono text-xs bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setPaymentGatewayModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 font-semibold hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded shadow-xs flex items-center gap-1.5 transition"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Authorize & Pay ₹{getNetPayable(selectedDueForPayment).toLocaleString("en-IN")}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MODAL 1: TRANSACTION DETAILS PREVIEW (Legacy #myModal)                */}
      {/* ========================================================================= */}
      {previewModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white rounded shadow-2xl max-w-3xl w-full overflow-hidden border border-gray-300">
            <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex items-center justify-between">
              <h4 className="font-bold text-sm text-gray-800 uppercase tracking-wide">
                TRANSACTION DETAILS (INVOICE: {previewInvoiceNo})
              </h4>
              <button
                type="button"
                onClick={() => setPreviewModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-4 text-xs">
              <div className="overflow-x-auto border border-gray-300 rounded">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-[#cfe2ff] text-[#084298] font-bold border-b border-gray-300 text-center">
                      <th className="p-2 border-r border-gray-300">SL.NO</th>
                      <th className="p-2 border-r border-gray-300">TRANSACTION ID</th>
                      <th className="p-2 border-r border-gray-300">INVOICE NUMBER</th>
                      <th className="p-2 border-r border-gray-300">AMOUNT</th>
                      <th className="p-2 border-r border-gray-300">STATUS</th>
                      <th className="p-2 border-r border-gray-300">TRANSACTION TIME</th>
                      <th className="p-2 border-r border-gray-300">RESPONSE</th>
                      <th className="p-2">CHECK STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.filter((t) => t.invoiceNumber === previewInvoiceNo).length > 0 ? (
                      history
                        .filter((t) => t.invoiceNumber === previewInvoiceNo)
                        .map((t, i) => (
                          <tr key={t.transactionId} className="border-b border-gray-200 text-center">
                            <td className="p-2 border-r border-gray-300">{i + 1}</td>
                            <td className="p-2 border-r border-gray-300 font-mono font-bold">{t.transactionId}</td>
                            <td className="p-2 border-r border-gray-300 font-mono">{t.invoiceNumber}</td>
                            <td className="p-2 border-r border-gray-300 font-mono font-bold">₹{t.amount.toLocaleString()}</td>
                            <td className="p-2 border-r border-gray-300">
                              <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                                t.status === "SUCCESS" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}>
                                {t.status}
                              </span>
                            </td>
                            <td className="p-2 border-r border-gray-300">{t.transactionTime}</td>
                            <td className="p-2 border-r border-gray-300 text-left truncate max-w-xs">{t.response}</td>
                            <td className="p-2">
                              <button
                                type="button"
                                onClick={() => handleCheckStatus(t)}
                                className="px-2 py-1 bg-blue-600 text-white rounded font-bold text-[10px]"
                              >
                                Check Status
                              </button>
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="p-8 text-center text-red-600 font-bold text-sm">
                          NO TRANSACTION DETAILS FOUND
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200 flex justify-end">
              <button
                type="button"
                onClick={() => setPreviewModalOpen(false)}
                className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. MODAL 2: TRANSACTION STATUS DETAIL (Legacy #myModalDetails)            */}
      {/* ========================================================================= */}
      {statusModalOpen && statusDetailTxn && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white rounded shadow-2xl max-w-md w-full overflow-hidden border border-gray-300">
            <div className="bg-gray-100 border-b border-gray-300 px-4 py-3 flex items-center justify-between">
              <h4 className="font-bold text-xs text-gray-800 uppercase tracking-wide">
                BANK RESPONSE & TRANSACTION CLEARANCE
              </h4>
              <button
                type="button"
                onClick={() => setStatusModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 text-center space-y-3 text-xs">
              {statusDetailTxn.status === "SUCCESS" ? (
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-green-700">TRANSACTION SETTLED & VERIFIED</h4>
                  <div className="bg-gray-50 border border-gray-200 p-3 rounded text-left space-y-1 font-mono text-[11px]">
                    <div><span className="text-gray-500">TXN ID:</span> <span className="font-bold">{statusDetailTxn.transactionId}</span></div>
                    <div><span className="text-gray-500">INVOICE:</span> <span className="font-bold">{statusDetailTxn.invoiceNumber}</span></div>
                    <div><span className="text-gray-500">AMOUNT:</span> <span className="font-bold">₹{statusDetailTxn.amount.toLocaleString()}</span></div>
                    <div><span className="text-gray-500">BANK REF:</span> <span className="font-bold">{statusDetailTxn.bankRefNumber || "SBIN890412891"}</span></div>
                  </div>
                  <div className="text-gray-700 font-semibold text-left p-2 bg-green-50 border border-green-200 rounded">
                    BANK RESPONSE: <span className="font-normal">{statusDetailTxn.response}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <AlertCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-red-600">TRANSACTION FAILED</h4>
                  <div className="text-gray-700 font-bold p-3 bg-red-50 border border-red-200 rounded text-left font-mono">
                    BANK RESPONSE: <span className="font-normal">{statusDetailTxn.response}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200 flex justify-end">
              <button
                type="button"
                onClick={() => setStatusModalOpen(false)}
                className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. MODAL 3: INSTITUTIONAL FEE RECEIPT (Printable & Downloadable)          */}
      {/* ========================================================================= */}
      {receiptModalOpen && activeReceipt && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-3 animate-in fade-in duration-150">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden border border-gray-300">
            {/* Header bar */}
            <div className="bg-[#1B365D] text-white px-4 py-3 flex items-center justify-between print:hidden">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-xs uppercase tracking-wider">OFFICIAL PAYMENT RECEIPT</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-2.5 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-xs font-semibold flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReceiptModalOpen(false)}
                  className="text-gray-300 hover:text-white font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Receipt Content */}
            <div className="p-6 space-y-4 text-xs bg-white text-gray-900" id="official-receipt">
              {/* Institutional Header */}
              <div className="border-b-2 border-blue-900 pb-3 text-center">
                <h2 className="text-xl font-black text-blue-900 tracking-wider">VELLORE INSTITUTE OF TECHNOLOGY</h2>
                <div className="text-[11px] font-bold text-gray-600">BHOPAL CAMPUS (FINANCE & ACCOUNTS DEPARTMENT)</div>
                <div className="text-[10px] text-gray-500">Kotri Kalan, Ashta, Sehore, Madhya Pradesh - 466114</div>
                <div className="inline-block mt-1 px-3 py-0.5 bg-blue-100 text-blue-900 font-bold rounded text-[11px]">
                  E-PAYMENT ACKNOWLEDGEMENT RECEIPT
                </div>
              </div>

              {/* Student & Invoice Meta Grid */}
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded border border-gray-200">
                <div className="space-y-1">
                  <div><span className="text-gray-500">Student Name:</span> <span className="font-bold">HARSHVARDHAN</span></div>
                  <div><span className="text-gray-500">Application / Reg No:</span> <span className="font-bold font-mono">25MIM10100</span></div>
                  <div><span className="text-gray-500">Programme / Branch:</span> <span className="font-semibold">Integrated M.Tech (CSE)</span></div>
                </div>
                <div className="space-y-1 text-right">
                  <div><span className="text-gray-500">Receipt No:</span> <span className="font-mono font-bold text-blue-900">REC-{activeReceipt.transactionId}</span></div>
                  <div><span className="text-gray-500">Payment Date:</span> <span className="font-semibold">{activeReceipt.transactionTime}</span></div>
                  <div><span className="text-gray-500">Payment Mode:</span> <span className="font-semibold">{activeReceipt.paymentMode}</span></div>
                </div>
              </div>

              {/* Table of Charges */}
              <table className="w-full text-xs border border-gray-300 border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300 font-bold">
                    <th className="p-2 border-r border-gray-300 text-center w-12">#</th>
                    <th className="p-2 border-r border-gray-300">FEE PARTICULARS / INVOICE NUMBER</th>
                    <th className="p-2 border-r border-gray-300 text-center">BANK REFERENCE</th>
                    <th className="p-2 text-right">AMOUNT PAID (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 border-r border-gray-300 text-center">1</td>
                    <td className="p-2 border-r border-gray-300">
                      <div className="font-bold text-gray-900">{activeReceipt.feeType}</div>
                      <div className="text-[10px] text-gray-500 font-mono">Invoice Ref: {activeReceipt.invoiceNumber}</div>
                    </td>
                    <td className="p-2 border-r border-gray-300 text-center font-mono text-[11px]">
                      {activeReceipt.bankRefNumber || "SBIN890412891"}
                    </td>
                    <td className="p-2 text-right font-mono font-bold text-sm">
                      ₹{activeReceipt.amount.toLocaleString("en-IN")}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-blue-50 font-bold">
                    <td colSpan={3} className="p-2 border-r border-gray-300 text-right">TOTAL AMOUNT CREDITED:</td>
                    <td className="p-2 text-right font-mono text-base text-blue-900">
                      ₹{activeReceipt.amount.toLocaleString("en-IN")}
                    </td>
                  </tr>
                </tfoot>
              </table>

              {/* Institutional QR & Stamp Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 border border-gray-300 rounded p-1 flex items-center justify-center bg-gray-50">
                    <QrCode className="w-12 h-12 text-gray-800" />
                  </div>
                  <div className="text-[10px] text-gray-500 leading-tight">
                    This is a computer-generated digital receipt.<br />
                    No physical signature required.<br />
                    <span className="text-green-700 font-bold">✓ VTOP Finance Core Verified</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800 text-[11px]">ACCOUNTS OFFICER</div>
                  <div className="text-[10px] text-gray-500">VIT Bhopal Campus</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-200 flex justify-end print:hidden">
              <button
                type="button"
                onClick={() => setReceiptModalOpen(false)}
                className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. LOADING OVERLAY (Replaces legacy blockUI with institutional GIF/Spinner)*/}
      {/* ========================================================================= */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 shadow-2xl max-w-sm w-full text-center space-y-4 border border-gray-300">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin mx-auto" />
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-sm">Processing Payment Request</h4>
              <p className="text-xs text-gray-600">{processingStage || "loading... Just a moment..."}</p>
            </div>
            <div className="text-[10px] font-mono text-gray-400">
              Connecting securely to Finance Gateway server...
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
