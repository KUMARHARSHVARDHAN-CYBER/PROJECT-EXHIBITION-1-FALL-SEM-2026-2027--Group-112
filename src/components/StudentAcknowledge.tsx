"use client";

import React, { useState } from "react";

// Mock JSON dataset for Student Acknowledgment Details
interface StudentInfo {
  applicationNo: string;
  registerNo: string;
  name: string;
  programme: string;
  campus: string;
  branch: string;
}

interface DocumentItem {
  sNo: number;
  documentName: string;
  status: "Submitted" | "Not Applicable" | "Not Submitted";
}

const mockAcknowledgmentData: {
  authorizedID: string;
  csrfToken: string;
  studentInfo: StudentInfo;
  documents: DocumentItem[];
} = {
  authorizedID: "25MIM10XXX",
  csrfToken: "11158dce-fb5a-4779-9cd6-7a8373346b26",
  studentInfo: {
    applicationNo: "2025000001",
    registerNo: "25MIM10XXX",
    name: "DEMO STUDENT",
    programme: "Integrated M.Tech.",
    campus: "Bhopal",
    branch: "Artificial Intelligence",
  },
  documents: [
    {
      sNo: 1,
      documentName: "Mark List - HSC / +2",
      status: "Submitted",
    },
    {
      sNo: 2,
      documentName: "Memorandum of Marks (Only A.P. Candidates)",
      status: "Not Applicable",
    },
    {
      sNo: 3,
      documentName: "Transfer Certificate (or) School leaving Certificate",
      status: "Submitted",
    },
    {
      sNo: 4,
      documentName: "Migration Certificate (if available)",
      status: "Submitted",
    },
    {
      sNo: 5,
      documentName: "Score Card (if applicable)",
      status: "Not Applicable",
    },
    {
      sNo: 6,
      documentName: "Nativity Certificate (if applicable)",
      status: "Not Applicable",
    },
    {
      sNo: 7,
      documentName: "Conduct Certificate (if available)",
      status: "Submitted",
    },
    {
      sNo: 8,
      documentName: "Community Certificate (if applicable)",
      status: "Not Applicable",
    },
    {
      sNo: 9,
      documentName: "Affidavit for Student",
      status: "Submitted",
    },
    {
      sNo: 10,
      documentName: "Affidavit for Parent",
      status: "Not Applicable",
    },
    {
      sNo: 11,
      documentName: "Hostel Affidavit",
      status: "Submitted",
    },
    {
      sNo: 12,
      documentName: "Passport size Photograph",
      status: "Submitted",
    },
    {
      sNo: 13,
      documentName: "Student Profile",
      status: "Submitted",
    },
    {
      sNo: 14,
      documentName: "Physical Fitness",
      status: "Submitted",
    },
    {
      sNo: 15,
      documentName: "Age proof (photocopy)",
      status: "Submitted",
    },
    {
      sNo: 16,
      documentName: "Declaration (Student Sign)",
      status: "Submitted",
    },
    {
      sNo: 17,
      documentName: "Declaration (Parent Sign)",
      status: "Submitted",
    },
  ],
};

export default function StudentAcknowledge() {
  const data = mockAcknowledgmentData;
  const [isAcknowledged, setIsAcknowledged] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const getStatusColorClass = (status: DocumentItem["status"]) => {
    switch (status) {
      case "Submitted":
        return "text-green-700 font-bold";
      case "Not Submitted":
        return "text-red-600 font-bold";
      case "Not Applicable":
      default:
        return "text-black font-bold";
    }
  };

  return (
    <div className="w-full" id="page-wrapper">
      <div className="content" id="ackView">
        <div className="w-full">
          <div className="w-full bg-white">
            {/* Main Legacy Card */}
            <div className="w-full my-5 bg-white border border-gray-300 rounded-none shadow-none">
              {/* Card Header with legacy cyan border top */}
              <div className="border-b border-gray-200 px-4 py-3 bg-white border-t-[3px] border-t-[#00c0ef]">
                <strong className="font-bold text-xl sm:text-2xl text-gray-900 tracking-wide">
                  ACKNOWLEDGMENT DETAILS
                </strong>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6">
                {/* Hidden legacy form parameter containers */}
                <form
                  className="hidden"
                  id="studentViewInfo"
                  autoComplete="off"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value={data.csrfToken}
                  />
                  <input
                    type="hidden"
                    name="authorizedID"
                    id="authorizedID"
                    value={data.authorizedID}
                  />
                </form>

                <form
                  className="w-full"
                  id="addacknowledgement"
                  name="addacknowledgement"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value={data.csrfToken}
                  />
                  <input
                    type="hidden"
                    name="authorizedID"
                    value={data.authorizedID}
                  />

                  <div className="space-y-6">
                    {/* Student Basic Information Table */}
                    <div className="overflow-x-auto">
                      <table
                        className="border-collapse text-left font-bold text-[14px] sm:text-[15px] border border-[#c0c0c0] w-full max-w-[830px]"
                        style={{ borderColor: "silver" }}
                      >
                        <tbody>
                          {/* Row 1 */}
                          <tr className="border border-[#c0c0c0]">
                            <td
                              className="border border-[#c0c0c0] bg-[#d4d3d3] p-2 text-gray-900 w-[230px]"
                              style={{ borderColor: "silver" }}
                            >
                              Application No.
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#f1d6d6] p-2 text-gray-900 w-[450px]"
                              style={{ borderColor: "silver" }}
                            >
                              {data.studentInfo.applicationNo}
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#d4d3d3] p-2 text-gray-900 w-[230px]"
                              style={{ borderColor: "silver" }}
                            >
                              Register No.
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#f1d6d6] p-2 text-gray-900 w-[450px]"
                              style={{ borderColor: "silver" }}
                            >
                              {data.studentInfo.registerNo}
                            </td>
                          </tr>

                          {/* Row 2 */}
                          <tr className="border border-[#c0c0c0]">
                            <td
                              className="border border-[#c0c0c0] bg-[#d4d3d3] p-2 text-gray-900 w-[200px]"
                              style={{ borderColor: "silver" }}
                            >
                              Name
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#f1d6d6] p-2 text-gray-900 w-[450px]"
                              style={{ borderColor: "silver" }}
                            >
                              {data.studentInfo.name}
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#d4d3d3] p-2 text-gray-900 w-[200px]"
                              style={{ borderColor: "silver" }}
                            >
                              Programme
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#f1d6d6] p-2 text-gray-900 w-[450px]"
                              style={{ borderColor: "silver" }}
                            >
                              {data.studentInfo.programme}
                            </td>
                          </tr>

                          {/* Row 3 */}
                          <tr className="border border-[#c0c0c0]">
                            <td
                              className="border border-[#c0c0c0] bg-[#d4d3d3] p-2 text-gray-900 w-[200px]"
                              style={{ borderColor: "silver" }}
                            >
                              Campus
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#f1d6d6] p-2 text-gray-900 w-[450px]"
                              style={{ borderColor: "silver" }}
                            >
                              {data.studentInfo.campus}
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#d4d3d3] p-2 text-gray-900 w-[200px]"
                              style={{ borderColor: "silver" }}
                            >
                              Branch
                            </td>
                            <td
                              className="border border-[#c0c0c0] bg-[#f1d6d6] p-2 text-gray-900 w-[450px]"
                              style={{ borderColor: "silver" }}
                            >
                              {data.studentInfo.branch}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Document Status List Table */}
                    <div className="overflow-x-auto">
                      <table
                        className="border-collapse text-left font-bold text-[14px] sm:text-[15px] border border-[#c0c0c0] w-full max-w-[830px]"
                        style={{ borderColor: "silver" }}
                      >
                        <tbody>
                          {data.documents.map((doc) => (
                            <tr key={doc.sNo} className="border border-[#c0c0c0]">
                              <td
                                className="border border-[#c0c0c0] bg-[#bfdef1] p-2 text-gray-900 w-[40px] text-center"
                                style={{ borderColor: "silver" }}
                              >
                                {doc.sNo}.
                              </td>
                              <td
                                className="border border-[#c0c0c0] bg-[#d4d3d3] p-2 text-gray-900 w-[450px]"
                                style={{ borderColor: "silver" }}
                              >
                                {doc.documentName}
                              </td>
                              <td
                                className="border border-[#c0c0c0] bg-[#f1d6d6] p-2 w-[450px]"
                                style={{ borderColor: "silver" }}
                              >
                                <label className={getStatusColorClass(doc.status)}>
                                  {doc.status}
                                </label>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Controlled Acknowledgement Checkbox & Form Controls */}
                    <div className="pt-2 max-w-[830px]">
                      <div className="flex items-start gap-2.5 bg-gray-50 border border-gray-300 p-3 text-xs text-gray-800">
                        <input
                          type="checkbox"
                          id="ackAgreement"
                          name="ackAgreement"
                          checked={isAcknowledged}
                          onChange={(e) => setIsAcknowledged(e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded-none text-blue-600 focus:ring-0 cursor-pointer"
                        />
                        <label
                          htmlFor="ackAgreement"
                          className="cursor-pointer select-none font-medium text-gray-700"
                        >
                          I hereby confirm that I have verified the above-listed acknowledgment details and documents submitted for admission registration.
                        </label>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          type="submit"
                          disabled={!isAcknowledged}
                          className={`px-4 py-1.5 text-xs font-bold text-white transition ${
                            isAcknowledged
                              ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                        >
                          Confirm &amp; Acknowledge
                        </button>
                        <button
                          type="button"
                          onClick={() => window.print()}
                          className="px-4 py-1.5 text-xs font-bold bg-[#1B365D] hover:bg-blue-900 text-white transition cursor-pointer"
                        >
                          Print Acknowledgment
                        </button>
                      </div>

                      {formSubmitted && (
                        <div className="mt-3 text-xs font-bold text-green-700">
                          Acknowledgment status confirmed and saved successfully.
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <noscript>
        <h2 className="text-red-600 font-bold text-base mt-2">
          Enable JavaScript to Access VTOP
        </h2>
      </noscript>
    </div>
  );
}
