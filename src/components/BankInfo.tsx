"use client";

import React, { useState } from "react";
import { Check, Download, Eye, EyeOff } from "lucide-react";

// Mock JSON dataset for Student Banking Details
const initialBankData = {
  authorizedID: "25MIM10100",
  csrfName: "_csrf",
  csrfValue: "9fa5d4d9-ad11-4101-83dc-8edc46a166d4",
  applicationNumber: "2025752485",
  beneficiaryName: "KUMAR HARSHVARDHAN",
  relationshipType: "SELF",
  accountNumber: "47",
  maskedAccountNumber: "47",
  ifscCode: "P",
  bankDetails: {
    bankName: "PUNJAB NATIONAL BANK",
    branch: "GURGAON",
  },
};

export default function BankInfo() {
  const [formData, setFormData] = useState({
    applicationNumber: initialBankData.applicationNumber,
    beneficiaryName: initialBankData.beneficiaryName,
    relationshipType: initialBankData.relationshipType,
    accountNumber: initialBankData.maskedAccountNumber,
    confirmAccountNumber: initialBankData.maskedAccountNumber,
    ifscCode: initialBankData.ifscCode,
    toUpload: "No",
  });

  const [rawAccountNumber, setRawAccountNumber] = useState(
    initialBankData.accountNumber
  );
  const [showAccountNum, setShowAccountNum] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [infoMessage, setInfoMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleShowAccount = () => {
    setShowAccountNum((prev) => {
      const next = !prev;
      setFormData((f) => ({
        ...f,
        accountNumber: next ? rawAccountNumber : initialBankData.maskedAccountNumber,
        confirmAccountNumber: next ? rawAccountNumber : initialBankData.maskedAccountNumber,
      }));
      return next;
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation Simulation
    if (!formData.beneficiaryName.trim()) {
      setInfoMessage({ text: "A/C Holder Name is Missing!", type: "error" });
      return;
    }
    if (!formData.relationshipType) {
      setInfoMessage({ text: "Relationship Type is Missing!", type: "error" });
      return;
    }
    if (!formData.accountNumber.trim()) {
      setInfoMessage({ text: "A/C Number is Missing!", type: "error" });
      return;
    }
    if (formData.accountNumber !== formData.confirmAccountNumber) {
      setInfoMessage({ text: "Account Number does not match", type: "error" });
      return;
    }
    if (formData.ifscCode.length !== 11) {
      setInfoMessage({
        text: "IFSC code should contain 11 characters!",
        type: "error",
      });
      return;
    }
    if (formData.toUpload === "Yes" && !selectedFile) {
      setInfoMessage({ text: "Attachment is Missing!", type: "error" });
      return;
    }

    setInfoMessage({
      text: "Bank Details Updated and Saved Successfully!",
      type: "success",
    });
  };



  return (
    <section className="content w-full mt-[30px]" id="bankInfoStudent">
      <div className="w-full">
        {/* Main Box - AdminLTE Success Card Style */}
        <div className="w-full bg-white border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] rounded-none shadow-none">
          {/* Header */}
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h3 className="text-lg sm:text-xl font-bold text-[#444] text-center m-0">
              STUDENT BANK INFORMATION
            </h3>
          </div>

          <div className="p-4 sm:p-6">
            {/* Status Messages */}
            <div className="text-center min-h-[24px] mb-2">
              {infoMessage.text && (
                <strong
                  id="infomsg"
                  className={`text-xs sm:text-sm font-bold block ${
                    infoMessage.type === "success"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {infoMessage.text}
                </strong>
              )}
            </div>

            {/* Form */}
            <form
              className="w-full"
              id="bankInfoStudentForm"
              name="bankInfoStudentForm"
              autoComplete="off"
              onSubmit={handleSave}
            >
              <input
                type="hidden"
                name={initialBankData.csrfName}
                value={initialBankData.csrfValue}
              />
              <input
                type="hidden"
                name="authorizedID"
                id="authorizedID"
                value={initialBankData.authorizedID}
              />

              <div className="overflow-x-auto">
                <table
                  className="w-full border-collapse border border-[#bbcbfd] text-xs sm:text-sm text-gray-900"
                  style={{ borderColor: "#bbcbfd" }}
                >
                  <tbody>
                    {/* Row 1: Application Number */}
                    <tr className="border-b border-[#bbcbfd]">
                      <td
                        className="p-2.5 font-bold w-[35%] align-middle border border-[#bbcbfd] bg-[#bbcbfd] text-gray-900"
                        style={{ backgroundColor: "#bbcbfd", borderColor: "#bbcbfd" }}
                      >
                        Application Number
                      </td>
                      <td
                        className="p-2.5 align-middle border border-[#bbcbfd] bg-[#f5dee7]"
                        style={{ backgroundColor: "#f5dee7", borderColor: "#bbcbfd" }}
                      >
                        <b>{formData.applicationNumber}</b>
                        <input
                          type="hidden"
                          id="studentbaseApplicationNumber"
                          name="studentbaseApplicationNumber"
                          value={formData.applicationNumber}
                        />
                      </td>
                    </tr>

                    {/* Row 2: Bank Holder Name */}
                    <tr className="border-b border-[#bbcbfd]">
                      <td
                        className="p-2.5 font-bold w-[35%] align-middle border border-[#bbcbfd] bg-[#bbcbfd] text-gray-900"
                        style={{ backgroundColor: "#bbcbfd", borderColor: "#bbcbfd" }}
                      >
                        Bank Holder Name
                      </td>
                      <td
                        className="p-2.5 align-middle border border-[#bbcbfd] bg-[#f5dee7]"
                        style={{ backgroundColor: "#f5dee7", borderColor: "#bbcbfd" }}
                      >
                        <input
                          className="w-full sm:max-w-md px-2.5 py-1 text-xs sm:text-sm border border-gray-300 rounded-none bg-white text-gray-900 focus:outline-hidden focus:border-blue-500 font-bold"
                          type="text"
                          id="beneficiaryName"
                          name="beneficiaryName"
                          value={formData.beneficiaryName}
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>

                    {/* Row 3: Relationship Type */}
                    <tr className="border-b border-[#bbcbfd]">
                      <td
                        className="p-2.5 font-bold w-[35%] align-middle border border-[#bbcbfd] bg-[#bbcbfd] text-gray-900"
                        style={{ backgroundColor: "#bbcbfd", borderColor: "#bbcbfd" }}
                      >
                        Relationship Type
                      </td>
                      <td
                        className="p-2.5 align-middle border border-[#bbcbfd] bg-[#f5dee7]"
                        style={{ backgroundColor: "#f5dee7", borderColor: "#bbcbfd" }}
                      >
                        <select
                          tabIndex={3}
                          className="w-full sm:max-w-xs px-2.5 py-1 text-xs sm:text-sm border border-gray-300 rounded-none bg-white text-gray-900 focus:outline-hidden focus:border-blue-500 font-medium"
                          id="relationshipWithStudent"
                          name="relationshipWithStudent"
                          value={formData.relationshipType}
                          onChange={handleInputChange}
                        >
                          <option value="">---Select---</option>
                          <option value="SELF">SELF</option>
                          <option value="FATHER">FATHER</option>
                          <option value="MOTHER">MOTHER</option>
                          <option value="GUARDIAN">GUARDIAN</option>
                        </select>
                      </td>
                    </tr>

                    {/* Row 4: Account Number */}
                    <tr className="border-b border-[#bbcbfd]">
                      <td
                        className="p-2.5 font-bold w-[35%] align-middle border border-[#bbcbfd] bg-[#bbcbfd] text-gray-900"
                        style={{ backgroundColor: "#bbcbfd", borderColor: "#bbcbfd" }}
                      >
                        Account Number
                      </td>
                      <td
                        className="p-2.5 align-middle border border-[#bbcbfd] bg-[#f5dee7]"
                        style={{ backgroundColor: "#f5dee7", borderColor: "#bbcbfd" }}
                      >
                        <div className="flex items-center gap-2 max-w-md">
                          <input
                            className="flex-1 px-2.5 py-1 text-xs sm:text-sm border border-gray-300 rounded-none bg-white text-gray-900 focus:outline-hidden focus:border-blue-500 font-mono"
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={(e) => {
                              handleInputChange(e);
                              if (showAccountNum) {
                                setRawAccountNumber(e.target.value);
                              }
                            }}
                          />
                          <button
                            type="button"
                            onClick={toggleShowAccount}
                            className="p-1.5 text-xs bg-gray-200 hover:bg-gray-300 border border-gray-400 text-gray-800 shrink-0"
                            title={showAccountNum ? "Mask Account" : "Unmask Account"}
                          >
                            {showAccountNum ? (
                              <EyeOff className="w-3.5 h-3.5 inline" />
                            ) : (
                              <Eye className="w-3.5 h-3.5 inline" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 5: Re-Enter Account Number */}
                    <tr className="border-b border-[#bbcbfd]">
                      <td
                        className="p-2.5 font-bold w-[35%] align-middle border border-[#bbcbfd] bg-[#bbcbfd] text-gray-900"
                        style={{ backgroundColor: "#bbcbfd", borderColor: "#bbcbfd" }}
                      >
                        Re-Enter Account Number
                      </td>
                      <td
                        className="p-2.5 align-middle border border-[#bbcbfd] bg-[#f5dee7]"
                        style={{ backgroundColor: "#f5dee7", borderColor: "#bbcbfd" }}
                      >
                        <input
                          className="w-full sm:max-w-md px-2.5 py-1 text-xs sm:text-sm border border-gray-300 rounded-none bg-white text-gray-900 focus:outline-hidden focus:border-blue-500 font-mono"
                          type="text"
                          id="confirmAccountNumber"
                          name="confirmAccountNumber"
                          value={formData.confirmAccountNumber}
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>

                    {/* Row 6: IFSC Code */}
                    <tr className="border-b border-[#bbcbfd]">
                      <td
                        className="p-2.5 font-bold w-[35%] align-middle border border-[#bbcbfd] bg-[#bbcbfd] text-gray-900"
                        style={{ backgroundColor: "#bbcbfd", borderColor: "#bbcbfd" }}
                      >
                        IFSC Code
                      </td>
                      <td
                        className="p-2.5 align-middle border border-[#bbcbfd] bg-[#f5dee7]"
                        style={{ backgroundColor: "#f5dee7", borderColor: "#bbcbfd" }}
                      >
                        <input
                          className="w-full sm:max-w-xs px-2.5 py-1 text-xs sm:text-sm border border-gray-300 rounded-none bg-white text-gray-900 uppercase focus:outline-hidden focus:border-blue-500 font-mono font-bold"
                          type="text"
                          id="bankMasterIfscCode"
                          name="bankMasterIfscCode"
                          maxLength={11}
                          value={formData.ifscCode}
                          onChange={handleInputChange}
                        />
                      </td>
                    </tr>

                    {/* Row 7: Bank Details */}
                    <tr className="border-b border-[#bbcbfd]">
                      <td
                        className="p-2.5 font-bold w-[35%] align-middle border border-[#bbcbfd] bg-[#bbcbfd] text-gray-900"
                        style={{ backgroundColor: "#bbcbfd", borderColor: "#bbcbfd" }}
                      >
                        Bank Details
                      </td>
                      <td
                        className="p-2.5 align-middle border border-[#bbcbfd] bg-[#f5dee7]"
                        id="ifscCodeBkFrag"
                        style={{ backgroundColor: "#f5dee7", borderColor: "#bbcbfd" }}
                      >
                        <div className="leading-snug text-xs sm:text-sm text-gray-900 space-y-0.5">
                          <b>{initialBankData.bankDetails.bankName}</b>
                          <br />
                          <b>{initialBankData.bankDetails.branch}</b>
                          <br />
                        </div>
                      </td>
                    </tr>

                    {/* Row 8: Passbook Upload / Download */}
                    <tr className="border-b border-[#bbcbfd]">
                      <td
                        className="p-2.5 font-bold w-[35%] align-middle border border-[#bbcbfd] bg-[#bbcbfd] text-gray-900"
                        style={{ backgroundColor: "#bbcbfd", borderColor: "#bbcbfd" }}
                      >
                        Click Here to Upload Bank Passbook / Statement{" "}
                        <span className="text-red-600 font-normal">[Max. 1 MB]</span>
                      </td>
                      <td
                        className="p-2.5 align-middle border border-[#bbcbfd] bg-[#f5dee7]"
                        style={{ backgroundColor: "#f5dee7", borderColor: "#bbcbfd" }}
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm">
                            <input
                              type="radio"
                              name="toUpload"
                              value="Yes"
                              checked={formData.toUpload === "Yes"}
                              onChange={() =>
                                setFormData((p) => ({ ...p, toUpload: "Yes" }))
                              }
                              className="rounded-none cursor-pointer"
                            />
                            <span>Yes</span>
                          </label>

                          <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs sm:text-sm">
                            <input
                              type="radio"
                              name="toUpload"
                              value="No"
                              checked={formData.toUpload === "No"}
                              onChange={() =>
                                setFormData((p) => ({ ...p, toUpload: "No" }))
                              }
                              className="rounded-none cursor-pointer"
                            />
                            <span>No</span>
                          </label>

                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 bg-[#337ab7] hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-none border border-[#2e6da4] transition shadow-none cursor-pointer"
                          >
                            <span>View your uploaded file</span>
                            <Download className="w-3.5 h-3.5 inline" />
                          </button>
                        </div>

                        {/* Conditional File Input */}
                        {formData.toUpload === "Yes" && (
                          <div className="mt-2.5">
                            <input
                              type="file"
                              tabIndex={12}
                              className="block w-full sm:max-w-md text-xs border border-gray-300 p-1 bg-white"
                              accept="image/jpg, image/jpeg, image/png, application/pdf"
                              id="accountImageDoc"
                              name="accountImageDoc"
                              onChange={(e) =>
                                setSelectedFile(e.target.files?.[0] || null)
                              }
                            />
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Action Buttons */}
              <div className="w-full text-center bg-white py-6">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-[#5cb85c] hover:bg-green-600 text-white font-bold text-xs sm:text-sm px-6 py-2 rounded-none border border-[#4cae4c] transition shadow-none cursor-pointer"
                >
                  <Check className="w-4 h-4 inline stroke-[3]" />
                  <span>Save</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
