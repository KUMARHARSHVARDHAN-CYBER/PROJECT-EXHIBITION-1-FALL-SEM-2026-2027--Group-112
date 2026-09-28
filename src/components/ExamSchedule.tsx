"use client";

import React, { useState } from "react";

export interface ExamRecord {
  sNo: number;
  courseCode: string;
  courseTitle: string;
  courseType: string;
  classId: string;
  slot: string;
  examDate: string;
  examSession: string;
  reportingTime: string;
  examTime: string;
  venue: string;
  seatLocation: string;
  seatNo: string;
  examType: "CAT1" | "CAT2" | "FAT" | string;
}

// Structured mock JSON array with exact requested university subjects across CAT1, CAT2, and FAT
export const examScheduleData: ExamRecord[] = [
  // ================= CAT1 EXAMS =================
  {
    sNo: 1,
    courseCode: "CSA2001",
    courseTitle: "Fundamentals in AI and ML",
    courseType: "LTP",
    classId: "BL2026270100659",
    slot: "B14+B23+D21",
    examDate: "10-Aug-2026",
    examSession: "AN1",
    reportingTime: "02:00 PM",
    examTime: "02:30 PM - 04:00 PM",
    venue: "AB02-414",
    seatLocation: "R2C9",
    seatNo: "75",
    examType: "CAT1",
  },
  {
    sNo: 2,
    courseCode: "CSE2002",
    courseTitle: "Data Structures and Algorithms",
    courseType: "LTP",
    classId: "BL2026270100272",
    slot: "C21+F11+F12",
    examDate: "11-Aug-2026",
    examSession: "FN1",
    reportingTime: "09:00 AM",
    examTime: "09:30 AM - 11:00 AM",
    venue: "AB02-323",
    seatLocation: "R2C3",
    seatNo: "15",
    examType: "CAT1",
  },
  {
    sNo: 3,
    courseCode: "ECE2002",
    courseTitle: "Digital Logic Design",
    courseType: "LTP",
    classId: "BL2026270100888",
    slot: "C11+C12+C13",
    examDate: "12-Aug-2026",
    examSession: "AN1",
    reportingTime: "02:00 PM",
    examTime: "02:30 PM - 04:00 PM",
    venue: "AB-229",
    seatLocation: "R6C8",
    seatNo: "48",
    examType: "CAT1",
  },
  {
    sNo: 4,
    courseCode: "HUM1012",
    courseTitle: "Logic And Language Structure",
    courseType: "LT",
    classId: "BL2026270100259",
    slot: "B21+E14",
    examDate: "13-Aug-2026",
    examSession: "FN1",
    reportingTime: "09:00 AM",
    examTime: "09:30 AM - 11:00 AM",
    venue: "AB02-318",
    seatLocation: "R4C7",
    seatNo: "43",
    examType: "CAT1",
  },
  {
    sNo: 5,
    courseCode: "MAT2002",
    courseTitle: "Discrete Mathematics and Graph Theory",
    courseType: "LT",
    classId: "BL2026270100033",
    slot: "A14+D11+D12",
    examDate: "14-Aug-2026",
    examSession: "AN1",
    reportingTime: "02:00 PM",
    examTime: "02:30 PM - 04:00 PM",
    venue: "AB02-103",
    seatLocation: "R4C7",
    seatNo: "43",
    examType: "CAT1",
  },

  // ================= CAT2 EXAMS =================
  {
    sNo: 1,
    courseCode: "CSA2001",
    courseTitle: "Fundamentals in AI and ML",
    courseType: "LTP",
    classId: "BL2026270100659",
    slot: "B14+B23+D21",
    examDate: "21-Sep-2026",
    examSession: "AN1",
    reportingTime: "02:00 PM",
    examTime: "02:30 PM - 04:00 PM",
    venue: "AB02-414",
    seatLocation: "R3C5",
    seatNo: "62",
    examType: "CAT2",
  },
  {
    sNo: 2,
    courseCode: "CSE2002",
    courseTitle: "Data Structures and Algorithms",
    courseType: "LTP",
    classId: "BL2026270100272",
    slot: "C21+F11+F12",
    examDate: "22-Sep-2026",
    examSession: "FN1",
    reportingTime: "09:00 AM",
    examTime: "09:30 AM - 11:00 AM",
    venue: "AB02-323",
    seatLocation: "R1C8",
    seatNo: "19",
    examType: "CAT2",
  },
  {
    sNo: 3,
    courseCode: "ECE2002",
    courseTitle: "Digital Logic Design",
    courseType: "LTP",
    classId: "BL2026270100888",
    slot: "C11+C12+C13",
    examDate: "23-Sep-2026",
    examSession: "AN1",
    reportingTime: "02:00 PM",
    examTime: "02:30 PM - 04:00 PM",
    venue: "AB-229",
    seatLocation: "R5C4",
    seatNo: "36",
    examType: "CAT2",
  },
  {
    sNo: 4,
    courseCode: "HUM1012",
    courseTitle: "Logic And Language Structure",
    courseType: "LT",
    classId: "BL2026270100259",
    slot: "B21+E14",
    examDate: "24-Sep-2026",
    examSession: "FN1",
    reportingTime: "09:00 AM",
    examTime: "09:30 AM - 11:00 AM",
    venue: "AB02-318",
    seatLocation: "R2C6",
    seatNo: "28",
    examType: "CAT2",
  },
  {
    sNo: 5,
    courseCode: "MAT2002",
    courseTitle: "Discrete Mathematics and Graph Theory",
    courseType: "LT",
    classId: "BL2026270100033",
    slot: "A14+D11+D12",
    examDate: "25-Sep-2026",
    examSession: "AN1",
    reportingTime: "02:00 PM",
    examTime: "02:30 PM - 04:00 PM",
    venue: "AB02-103",
    seatLocation: "R4C3",
    seatNo: "50",
    examType: "CAT2",
  },

  // ================= FAT EXAMS =================
  {
    sNo: 1,
    courseCode: "CSA2001",
    courseTitle: "Fundamentals in AI and ML",
    courseType: "LTP",
    classId: "BL2026270100659",
    slot: "B14+B23+D21",
    examDate: "16-Nov-2026",
    examSession: "AN1",
    reportingTime: "01:30 PM",
    examTime: "02:00 PM - 05:00 PM",
    venue: "AB-402",
    seatLocation: "R3C2",
    seatNo: "18",
    examType: "FAT",
  },
  {
    sNo: 2,
    courseCode: "CSE2002",
    courseTitle: "Data Structures and Algorithms",
    courseType: "LTP",
    classId: "BL2026270100272",
    slot: "C21+F11+F12",
    examDate: "18-Nov-2026",
    examSession: "FN1",
    reportingTime: "09:00 AM",
    examTime: "09:30 AM - 12:30 PM",
    venue: "AB02-105",
    seatLocation: "R1C5",
    seatNo: "09",
    examType: "FAT",
  },
  {
    sNo: 3,
    courseCode: "ECE2002",
    courseTitle: "Digital Logic Design",
    courseType: "LTP",
    classId: "BL2026270100888",
    slot: "C11+C12+C13",
    examDate: "20-Nov-2026",
    examSession: "AN1",
    reportingTime: "01:30 PM",
    examTime: "02:00 PM - 05:00 PM",
    venue: "AB02-312",
    seatLocation: "R6C7",
    seatNo: "54",
    examType: "FAT",
  },
  {
    sNo: 4,
    courseCode: "HUM1012",
    courseTitle: "Logic And Language Structure",
    courseType: "LT",
    classId: "BL2026270100259",
    slot: "B21+E14",
    examDate: "23-Nov-2026",
    examSession: "FN1",
    reportingTime: "09:00 AM",
    examTime: "09:30 AM - 12:30 PM",
    venue: "AB02-210",
    seatLocation: "R4C1",
    seatNo: "31",
    examType: "FAT",
  },
  {
    sNo: 5,
    courseCode: "MAT2002",
    courseTitle: "Discrete Mathematics and Graph Theory",
    courseType: "LT",
    classId: "BL2026270100033",
    slot: "A14+D11+D12",
    examDate: "25-Nov-2026",
    examSession: "AN1",
    reportingTime: "01:30 PM",
    examTime: "02:00 PM - 05:00 PM",
    venue: "AB-315",
    seatLocation: "R5C4",
    seatNo: "42",
    examType: "FAT",
  },
];

export const semesterOptions = [
  { value: "BL20262701", label: "Fall Semester 2026-27" },
];

export const examTabs = [
  { id: "CAT1", label: "CAT 1", fullTitle: "Continuous Assessment Test 1 (CAT-1)" },
  { id: "CAT2", label: "CAT 2", fullTitle: "Continuous Assessment Test 2 (CAT-2)" },
  { id: "FAT", label: "FAT", fullTitle: "Final Assessment Test (FAT)" },
] as const;

export default function ExamSchedule() {
  const [selectedSemester, setSelectedSemester] = useState<string>("BL20262701");
  const [activeTab, setActiveTab] = useState<string>("CAT2");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 200);
  };

  // Client-side filtering for zero-latency data swapping
  const filteredExams = examScheduleData.filter(
    (exam) => exam.examType === activeTab
  );

  const currentTabInfo = examTabs.find((t) => t.id === activeTab) || examTabs[1];

  return (
    <div className="w-full bg-[#f4f6f9] min-h-screen p-3 text-[#333333] font-sans text-xs">
      <div className="max-w-[1400px] mx-auto">
        {/* Legacy AdminLTE Box Container */}
        <div className="bg-white border border-[#d2d6de] border-t-4 border-t-[#00c0ef] shadow-sm mb-6 rounded-none">
          {/* Box Header */}
          <div className="px-4 py-3 border-b border-[#f4f4f4] flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#333333] m-0">
              Exam Schedule
            </h3>
          </div>

          {/* Box Body */}
          <div className="p-4">
            <form role="form" onSubmit={handleSearch} className="mb-4">
              <input
                type="hidden"
                name="authorizedID"
                id="authorizedID"
                value="25MIM10100"
              />

              <div className="max-w-3xl mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <label
                    htmlFor="semesterSubId"
                    className="font-bold text-[#333333] text-sm min-w-[140px]"
                  >
                    Select Semester
                  </label>
                  <div className="flex-1 min-w-[240px]">
                    <select
                      id="semesterSubId"
                      name="semesterSubId"
                      value={selectedSemester}
                      onChange={(e) => setSelectedSemester(e.target.value)}
                      required
                      className="w-full border border-[#d2d6de] bg-white px-3 py-1.5 text-xs text-[#555] rounded-none focus:outline-none focus:border-[#3c8dbc] shadow-inner"
                    >
                      <option value="">-- Choose Semester --</option>
                      {semesterOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-24">
                    <button
                      type="submit"
                      name="action"
                      className="w-full bg-[#337ab7] hover:bg-[#286090] text-white font-medium py-1.5 px-3 text-xs rounded-none border border-[#2e6da4] transition-colors cursor-pointer"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Reporting Time Warning Notice */}
              <div className="my-3">
                <span className="text-sm text-red-600 font-normal">
                  <b className="font-bold">Exam Reporting Time </b> : 30 minutes
                  before schedule
                </span>
              </div>
            </form>

            {/* Institutional Tab Group for Exam Types (CAT1, CAT2, FAT) */}
            <div className="mt-6 mb-3">
              <div className="flex items-center border-b border-[#d2d6de] gap-1">
                {examTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-5 py-2 text-xs font-bold transition-colors cursor-pointer border-t border-l border-r -mb-px select-none ${
                        isActive
                          ? "bg-[#337ab7] text-white border-[#2e6da4] shadow-sm"
                          : "bg-[#f4f4f4] text-[#555555] border-[#d2d6de] hover:bg-[#e7e7e7] hover:text-[#333333]"
                      }`}
                    >
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results Table Section */}
            {isSearching ? (
              <div className="py-12 text-center text-gray-500 font-bold">
                Loading Exam Schedule... Please Wait
              </div>
            ) : !hasSearched || selectedSemester === "" ? (
              <div className="py-8 text-center text-gray-500 italic">
                Please select a semester and click Search to view the exam schedule.
              </div>
            ) : (
              <div className="overflow-x-auto border border-[#ddd]">
                <table
                  className="w-full border-collapse text-xs border border-[#ddd]"
                  style={{ fontSize: "12px" }}
                >
                  <tbody>
                    {/* Super Header: General (Semester) */}
                    <tr
                      style={{
                        backgroundColor: "#3c8dbc",
                        borderColor: "#fff",
                        color: "#fff",
                      }}
                      className="font-bold text-white text-center"
                    >
                      <td colSpan={13} className="p-2 border border-[#ddd] text-center">
                        <span className="text-sm font-bold">General (Semester)</span>
                      </td>
                    </tr>

                    {/* Column Headers */}
                    <tr
                      style={{
                        backgroundColor: "#3c8dbc",
                        borderColor: "#fff",
                        color: "#fff",
                      }}
                      className="font-bold text-white text-center"
                    >
                      <td className="p-2 border border-[#ddd] text-center w-[5%] font-bold">
                        <span>S.No.</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[8%] font-bold">
                        <span>Course Code</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[18%] font-bold">
                        <span>Course Title</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[5%] font-bold">
                        <span>Course Type</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[10%] font-bold">
                        <span>Class ID</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[10%] font-bold">
                        <span>Slot</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[10%] font-bold">
                        <span>Exam Date</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[5%] font-bold">
                        <span>Exam Session</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[5%] font-bold">
                        <span>Reporting Time</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[14%] font-bold">
                        <span>Exam Time</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[5%] font-bold">
                        <span>Venue</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[5%] font-bold">
                        <span>Seat Location</span>
                      </td>
                      <td className="p-2 border border-[#ddd] text-center w-[5%] font-bold">
                        <span>Seat No.</span>
                      </td>
                    </tr>

                    {/* Subheader: Active Tab Name */}
                    <tr className="bg-[#e8f0fe] font-bold text-[#333]">
                      <td
                        colSpan={13}
                        className="p-1.5 border border-[#ddd] text-center font-bold text-sm bg-slate-100 text-[#337ab7]"
                      >
                        {currentTabInfo.fullTitle}
                      </td>
                    </tr>

                    {/* Exam Rows dynamically rendered based on active tab */}
                    {filteredExams.length > 0 ? (
                      filteredExams.map((exam, index) => {
                        const isEven = index % 2 === 1;
                        return (
                          <tr
                            key={`${exam.examType}-${exam.courseCode}-${exam.sNo}`}
                            className={`border-b border-[#ddd] hover:bg-[#f5f5f5] transition-colors ${
                              isEven ? "bg-[#f9f9f9]" : "bg-white"
                            }`}
                          >
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{exam.sNo}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                              <span>{exam.courseCode}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-left align-middle text-[#333] font-medium">
                              <span>{exam.courseTitle}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{exam.courseType}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{exam.classId}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{exam.slot}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                              <span>{exam.examDate}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{exam.examSession}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle text-gray-700">
                              <span>{exam.reportingTime}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{exam.examTime}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                              <span>{exam.venue}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{exam.seatLocation}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-bold text-blue-900">
                              <span>{exam.seatNo}</span>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={13}
                          className="p-4 text-center text-gray-500 italic bg-white"
                        >
                          No exams scheduled for {activeTab}.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
