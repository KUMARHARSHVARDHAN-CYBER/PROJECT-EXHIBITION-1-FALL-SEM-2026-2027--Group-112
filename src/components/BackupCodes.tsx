"use client";

import React, { useState } from "react";

export const initialBackupCodes: string[] = [
  "4829 1042",
  "8192 7341",
  "9034 5612",
  "1749 2835",
  "6291 8473",
  "3518 9204",
  "7462 1095",
  "5820 3719",
  "2901 4836",
  "6173 9540",
];

export default function BackupCodes() {
  const [codes, setCodes] = useState<string[]>(initialBackupCodes);
  const [generatedDate, setGeneratedDate] = useState<string>("08-Sep-2026 01:30:15");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // Generate 10 new random 8-digit codes (formatted as "XXXX XXXX")
  const handleGenerateNewCodes = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setAlertMessage("");
    setCopySuccess(false);

    setTimeout(() => {
      const newCodes: string[] = [];
      for (let i = 0; i < 10; i++) {
        const p1 = Math.floor(1000 + Math.random() * 9000);
        const p2 = Math.floor(1000 + Math.random() * 9000);
        newCodes.push(`${p1} ${p2}`);
      }

      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      const time = now.toTimeString().split(" ")[0];

      setCodes(newCodes);
      setGeneratedDate(`${day}-${month}-${year} ${time}`);
      setIsGenerating(false);
      setAlertMessage("New backup recovery codes generated successfully. Any previously saved codes are now permanently revoked.");
    }, 400);
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopyCodes = (e: React.MouseEvent) => {
    e.preventDefault();
    const textToCopy = `VIT Bhopal University - 2FA Backup Recovery Codes\nUser ID: 25MIM10100\nGenerated Date: ${generatedDate}\n\n` +
      codes.map((c, i) => `Code #${i + 1 < 10 ? "0" + (i + 1) : i + 1}: ${c}`).join("\n");

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
      });
    }
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
                  Two-Factor Authentication (2FA) - Backup Recovery Codes
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 sm:p-6">
                {/* Institutional Student Header Info Bar */}
                <div className="bg-[#eef2f7] border border-[#d2d6de] p-3 mb-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div>
                      <span className="font-bold text-[#295b86]">User ID: </span>
                      <span className="font-semibold text-[#333333]">25MIM10100 (STUDENT)</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Name: </span>
                      <span className="font-semibold text-[#333333]">KUMAR HARSHVARDHAN</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Generated On: </span>
                      <span className="font-semibold text-[#333333]">{generatedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Legacy Yellow / Red Warning Box */}
                <div className="bg-[#fff3cd] border border-[#ffeeba] text-[#856404] p-3.5 mb-4 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="font-black text-sm text-[#d9534f]">⚠</span>
                    <div>
                      <strong className="font-bold text-[#856404] block text-sm">
                        Print or save these codes. Each code can only be used once.
                      </strong>
                      <p className="mt-1 text-xs text-[#73510d] leading-relaxed">
                        If you lose access to your primary authentication device (mobile phone or authenticator app), you can enter one of these one-time backup codes to access your VTOP account. Store these codes in a secure, confidential place.
                      </p>
                    </div>
                  </div>
                </div>

                {/* System Message Banner */}
                {alertMessage && (
                  <div
                    id="Message"
                    className="mb-4 p-2.5 text-center text-xs sm:text-sm font-bold border bg-[#dff0d8] border-[#d6e9c6] text-[#3c763d]"
                  >
                    <p id="pageMessage" className="m-0">
                      {alertMessage}
                    </p>
                  </div>
                )}

                {/* Top Action Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#d2d6de]">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={isGenerating}
                      onClick={handleGenerateNewCodes}
                      className={`text-xs sm:text-sm font-bold py-1.5 px-3 rounded-none border transition-colors cursor-pointer ${
                        isGenerating
                          ? "bg-gray-400 text-white border-gray-500 cursor-not-allowed"
                          : "bg-[#d9534f] hover:bg-[#c9302c] text-white border-[#d43f3a]"
                      }`}
                    >
                      {isGenerating ? "Generating..." : "Generate New Codes"}
                    </button>

                    <button
                      type="button"
                      onClick={handlePrint}
                      className="text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border bg-[#337ab7] hover:bg-[#286090] text-white border-[#2e6da4] transition-colors cursor-pointer"
                    >
                      Print Codes
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyCodes}
                      className="text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border bg-[#5bc0de] hover:bg-[#31b0d5] text-white border-[#46b8da] transition-colors cursor-pointer"
                    >
                      {copySuccess ? "Copied!" : "Copy Codes"}
                    </button>
                  </div>

                  <span className="text-xs text-[#777777] font-medium">
                    Remaining Unused Codes: <strong className="text-[#333333]">{codes.length} of 10</strong>
                  </span>
                </div>

                {/* Backup Codes Technical Table / 2-Column Dense Grid */}
                <div className="border border-[#d2d6de] p-4 bg-[#fbfbfb] mb-6">
                  <div className="pb-2 mb-3 border-b border-[#e5e5e5] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#555555] uppercase tracking-wider">
                      One-Time Recovery Security Tokens
                    </span>
                    <span className="text-[11px] text-[#777777]">
                      Format: 8-Digit Alphanumeric
                    </span>
                  </div>

                  {/* Dense 2-Column Table */}
                  <div className="overflow-x-auto">
                    <table className="table w-full border-collapse border border-[#d2d6de] text-xs sm:text-sm bg-white">
                      <thead>
                        <tr className="bg-[#f5f5f5] text-[#333333] border-b border-[#d2d6de]">
                          <th className="w-1/2 px-4 py-2 text-left font-bold border-r border-[#d2d6de]">
                            Column A (Codes 1 - 5)
                          </th>
                          <th className="w-1/2 px-4 py-2 text-left font-bold">
                            Column B (Codes 6 - 10)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[0, 1, 2, 3, 4].map((rowIdx) => {
                          const colAIdx = rowIdx;
                          const colBIdx = rowIdx + 5;
                          const codeA = codes[colAIdx];
                          const codeB = codes[colBIdx];

                          return (
                            <tr
                              key={rowIdx}
                              className="border-b border-[#d2d6de] even:bg-[#f9f9f9] hover:bg-[#f5f5f5]"
                            >
                              {/* Column A */}
                              <td className="px-4 py-2.5 border-r border-[#d2d6de] align-middle">
                                <div className="flex items-center justify-between font-mono">
                                  <span className="text-[#777777] font-sans font-semibold text-xs w-20">
                                    Code #{colAIdx + 1 < 10 ? `0${colAIdx + 1}` : colAIdx + 1}:
                                  </span>
                                  <span className="text-sm sm:text-base font-bold text-[#2c3e50] tracking-wider bg-[#eef2f7] px-2.5 py-0.5 border border-[#d2d6de]">
                                    {codeA}
                                  </span>
                                  <span className="text-[10px] font-bold text-[#3c763d] bg-[#dff0d8] border border-[#d6e9c6] px-1.5 py-0.5">
                                    UNUSED
                                  </span>
                                </div>
                              </td>

                              {/* Column B */}
                              <td className="px-4 py-2.5 align-middle">
                                <div className="flex items-center justify-between font-mono">
                                  <span className="text-[#777777] font-sans font-semibold text-xs w-20">
                                    Code #{colBIdx + 1 < 10 ? `0${colBIdx + 1}` : colBIdx + 1}:
                                  </span>
                                  <span className="text-sm sm:text-base font-bold text-[#2c3e50] tracking-wider bg-[#eef2f7] px-2.5 py-0.5 border border-[#d2d6de]">
                                    {codeB}
                                  </span>
                                  <span className="text-[10px] font-bold text-[#3c763d] bg-[#dff0d8] border border-[#d6e9c6] px-1.5 py-0.5">
                                    UNUSED
                                  </span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Additional Institutional Notes */}
                <div className="bg-[#f5f5f5] border border-[#d2d6de] p-3 text-xs text-[#555555]">
                  <strong className="block text-[#333333] mb-1 font-bold">
                    Instructions on Using Backup Codes:
                  </strong>
                  <ol className="list-decimal pl-4 space-y-0.5">
                    <li>When prompted for your 2FA OTP code on the login screen, choose <em>"Try another way"</em> or <em>"Use Backup Code"</em>.</li>
                    <li>Enter any one of your available 8-digit codes shown above.</li>
                    <li>Once used, that specific code becomes invalid immediately and cannot be reused.</li>
                    <li>If you have used most of your codes, click <strong>"Generate New Codes"</strong> to receive a fresh set.</li>
                  </ol>
                </div>

                {/* Legacy box-footer */}
                <div className="box-footer mt-8 pt-3 border-t border-[#eeeeee]">
                  <div className="text-center font-bold text-xs text-[#777777]">
                    VIT Bhopal University - Two-Factor Authentication & Identity Management
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
