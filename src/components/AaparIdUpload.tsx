"use client";

import React, { useState } from "react";
import { Eye, Loader2 } from "lucide-react";

export default function AaparIdUpload() {
  const [apaarId, setApaarId] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Format APAAR ID with dashes after every 3 digits (e.g. 123-456-789-012)
  const handleApaarInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/[^0-9]/g, "");
    if (raw.length > 12) {
      raw = raw.slice(0, 12);
    }
    const formatted = raw.match(/.{1,3}/g)?.join("-") || "";
    setApaarId(formatted);
    if (errorMessage) setErrorMessage("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    if (selected) {
      if (selected.type !== "application/pdf" && !selected.name.toLowerCase().endsWith(".pdf")) {
        setErrorMessage("Only PDF files are allowed.");
        setFile(null);
        return;
      }
      if (selected.size > 2 * 1024 * 1024) {
        setErrorMessage("File size exceeds maximum limit of 2 MB.");
        setFile(null);
        return;
      }
      setErrorMessage("");
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const digitsOnly = apaarId.replace(/-/g, "");
    if (!digitsOnly || digitsOnly.length < 12) {
      setErrorMessage("Please enter a valid 12-digit Apaar ID.");
      return;
    }

    if (!file) {
      setErrorMessage("Please select a PDF file to upload.");
      return;
    }

    // Set loading state and simulate upload API call
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("File uploaded");
      setSuccessMessage("Apaar ID and document uploaded successfully.");
    }, 800);
  };

  const handleViewSample = () => {
    window.open(
      "https://dms.vit.ac.in/dms/open/public/doc/cb15234b-77f5-422b-82f2-f2afd1e27d44",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="w-full mt-[30px]" id="page-wrapper">
      <div id="mainFrag" className="w-full">
        <div className="w-full">
          <div className="w-full bg-white border border-gray-300 rounded-none shadow-none">
            {/* Card Header with cyan top accent border */}
            <div className="border-b border-gray-200 px-4 py-3 bg-white border-t-[3px] border-t-[#00c0ef]">
              <strong className="font-bold text-xl sm:text-2xl text-gray-900 tracking-wide">
                Apaar ID Form
              </strong>
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-8 text-center">
              <form
                id="apaarForm"
                name="apaarForm"
                autoComplete="off"
                onSubmit={handleSubmit}
                className="w-full max-w-2xl mx-auto space-y-6"
              >
                <input
                  type="hidden"
                  name="_csrf"
                  value="9fa5d4d9-ad11-4101-83dc-8edc46a166d4"
                />
                <input
                  type="hidden"
                  name="authorizedID"
                  id="authorizedID"
                  value="25MIM10100"
                />

                {/* Apaar ID Input Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3">
                  <label
                    htmlFor="apaarId"
                    className="sm:w-[30%] text-left sm:text-right font-bold text-xs sm:text-sm text-gray-800"
                  >
                    Apaar ID
                  </label>
                  <div className="sm:w-[70%]">
                    <input
                      type="text"
                      className="w-full px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-none bg-white text-gray-900 focus:outline-hidden focus:border-blue-500 font-mono"
                      id="apaarId"
                      name="apaarId"
                      value={apaarId}
                      onChange={handleApaarInputChange}
                      maxLength={15}
                      placeholder="Enter Apaar ID"
                      required
                    />
                  </div>
                </div>

                {/* PDF Upload Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3">
                  <label
                    htmlFor="pdfFile"
                    className="sm:w-[30%] text-left sm:text-right font-bold text-xs sm:text-sm text-gray-800"
                  >
                    Upload PDF
                  </label>
                  <div className="sm:w-[70%] text-left">
                    <input
                      type="file"
                      className="w-full text-xs sm:text-sm border border-gray-300 p-1 bg-white cursor-pointer"
                      id="pdfFile"
                      name="pdfFile"
                      accept="application/pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between pt-4 gap-3 sm:pl-[30%]">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#337ab7] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-6 py-2 rounded-none border border-[#2e6da4] transition cursor-pointer shadow-none disabled:opacity-50"
                  >
                    {isLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    <span>Submit</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleViewSample}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border border-[#5cb85c] text-[#5cb85c] hover:bg-[#5cb85c] hover:text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-none transition cursor-pointer shadow-none"
                    title="Click to View Sample File"
                  >
                    <Eye className="w-3.5 h-3.5 inline" />
                    <span>View</span>
                  </button>
                </div>

                {/* Status Messages */}
                {errorMessage && (
                  <div className="text-red-600 text-xs sm:text-sm font-bold text-center mt-3">
                    <span>{errorMessage}</span>
                  </div>
                )}
                {successMessage && (
                  <div className="text-green-700 text-xs sm:text-sm font-bold text-center mt-3">
                    <span>{successMessage}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Card Footer with Legacy Note */}
            <div className="bg-[#fcfcfc] border-t border-gray-200 px-4 py-3">
              <div className="text-xs sm:text-sm font-bold text-gray-900 leading-relaxed font-mono sm:font-sans">
                NOTE: Only PDF files are allowed, and the maximum file upload size is 2 MB.
                <br />
                <a
                  href="https://dms.vit.ac.in/dms/open/public/doc/cb15234b-77f5-422b-82f2-f2afd1e27d44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-bold"
                  download
                >
                  Download Sample PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
