"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface AssessmentItem {
  slNo: number;
  markTitle: string;
  maxMark: number;
  weightagePercent: number;
  status: string;
  scoredMark: number | string;
  weightageMark: number | string;
  remark?: string;
}

export interface CourseMarksRecord {
  slNo: number;
  classNbr: string;
  courseCode: string;
  courseTitle: string;
  courseType: string;
  courseSystem: string;
  faculty: string;
  slot: string;
  courseMode: string;
  assessments: AssessmentItem[];
}

// Structured mock JSON array extracted directly from legacy VTOP payload
export const mockMarksData: CourseMarksRecord[] = [
  {
    slNo: 1,
    classNbr: "BL2026270100659",
    courseCode: "CSA2001",
    courseTitle: "Fundamentals in AI and ML",
    courseType: "Lecture and Tutorial ,practical hours only",
    courseSystem: "CAL",
    faculty: "RUDRA KALYAN NAYAK",
    slot: "B14+B23+D21",
    courseMode: "LTPM",
    assessments: [
      {
        slNo: 1,
        markTitle: "Continous Assessment Test - I",
        maxMark: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMark: 40.0,
        weightageMark: 12,
        remark: "",
      },
    ],
  },
  {
    slNo: 2,
    classNbr: "BL2026270100259",
    courseCode: "HUM1012",
    courseTitle: "Logic And Language Structure",
    courseType: "Lecture and Tutorial  Hours Only",
    courseSystem: "CAL",
    faculty: "VELMANI R",
    slot: "B21+E14",
    courseMode: "LTM",
    assessments: [
      {
        slNo: 1,
        markTitle: "Continous Assessment Test - I",
        maxMark: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMark: 40.0,
        weightageMark: 12,
        remark: "",
      },
    ],
  },
  {
    slNo: 3,
    classNbr: "BL2026270100272",
    courseCode: "CSE2002",
    courseTitle: "Data Structures and Algorithms",
    courseType: "Lecture and Tutorial ,practical hours only",
    courseSystem: "CAL",
    faculty: "VIPIN JAIN",
    slot: "C21+F11+F12",
    courseMode: "LTPM",
    assessments: [
      {
        slNo: 1,
        markTitle: "Continous Assessment Test - I",
        maxMark: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMark: 42.0,
        weightageMark: 12.6,
        remark: "",
      },
    ],
  },
  {
    slNo: 4,
    classNbr: "BL2026270100888",
    courseCode: "ECE2002",
    courseTitle: "Digital Logic Design",
    courseType: "Lecture and Tutorial ,practical hours only",
    courseSystem: "CAL",
    faculty: "ARJUN LAL KUMAWAT",
    slot: "C11+C12+C13",
    courseMode: "LTPM",
    assessments: [
      {
        slNo: 1,
        markTitle: "Continous Assessment Test - I",
        maxMark: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMark: 40.0,
        weightageMark: 12,
        remark: "",
      },
    ],
  },
  {
    slNo: 5,
    classNbr: "BL2026270100033",
    courseCode: "MAT2002",
    courseTitle: "Discrete Mathematics and Graph Theory",
    courseType: "Lecture and Tutorial  Hours Only",
    courseSystem: "CAL",
    faculty: "GIRIJA P",
    slot: "A14+D11+D12",
    courseMode: "LTM",
    assessments: [
      {
        slNo: 1,
        markTitle: "Continous Assessment Test - I",
        maxMark: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMark: 44.0,
        weightageMark: 13.2,
        remark: "",
      },
    ],
  },
  {
    slNo: 6,
    classNbr: "BL2026270101203",
    courseCode: "HUM0003",
    courseTitle: "INDIAN CONSTITUTION",
    courseType: "Lecture and Tutorial  Hours Only",
    courseSystem: "CAL",
    faculty: "JAGRITI GUPTA",
    slot: "A11",
    courseMode: "LTM",
    assessments: [
      {
        slNo: 1,
        markTitle: "Continous Assessment Test - I",
        maxMark: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMark: 40.0,
        weightageMark: 12,
        remark: "",
      },
    ],
  },
];

export const semesterOptions = [
  { value: "BL20262701", label: "Fall Semester 2026-27" },
];

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState<string>("BL20262701");
  // Set all rows expanded by default matching legacy VTOP behavior, but allowing toggling
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  });

  const toggleRow = (slNo: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [slNo]: !prev[slNo],
    }));
  };

  return (
    <div className="w-full bg-[#f4f6f9] min-h-screen p-3 text-[#333333] font-sans text-xs">
      <div className="max-w-[1400px] mx-auto">
        {/* Legacy AdminLTE Box Container */}
        <div className="bg-white border border-[#d2d6de] border-t-4 border-t-[#00c0ef] shadow-sm mb-6 rounded-none">
          {/* Box Header */}
          <div className="px-4 py-3 border-b border-[#f4f4f4] flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#333333] m-0">Marks View</h3>
          </div>

          {/* Box Body */}
          <div className="p-4">
            <form
              role="form"
              id="studentMarkView"
              name="studentMarkView"
              className="mb-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="hidden"
                name="authorizedID"
                id="authorizedID"
                value="25MIM10100"
              />

              {/* Centered Semester Dropdown */}
              <div className="max-w-xl mx-auto my-4">
                <div className="flex flex-wrap items-center">
                  <label
                    htmlFor="semesterSubId"
                    className="w-full sm:w-1/3 font-bold text-[#333333] text-sm pr-4 mb-1 sm:mb-0 sm:text-right"
                  >
                    Select Semester
                  </label>
                  <div className="w-full sm:w-2/3">
                    <select
                      id="semesterSubId"
                      name="semesterSubId"
                      value={selectedSemester}
                      onChange={(e) => setSelectedSemester(e.target.value)}
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
                </div>
              </div>

              {/* Main Marks Table */}
              <div
                id="fixedTableContainer"
                className="overflow-x-auto border border-[#ddd] mt-6"
              >
                <table
                  className="w-full border-collapse text-xs border border-[#ddd]"
                  style={{ fontSize: "12px" }}
                >
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#3c8dbc",
                        borderColor: "#fff",
                        color: "#fff",
                      }}
                      className="font-bold text-white text-center"
                    >
                      <th className="p-2 border border-[#ddd] text-center w-[4%] font-bold">
                        Sl.No.
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%] font-bold">
                        ClassNbr
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[9%] font-bold">
                        Course Code
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[20%] font-bold">
                        Course Title
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[18%] font-bold">
                        Course Type
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[7%] font-bold">
                        Course System
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[14%] font-bold">
                        Faculty
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[9%] font-bold">
                        Slot
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[7%] font-bold">
                        Course Mode
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockMarksData.map((course) => {
                      const isExpanded = !!expandedRows[course.slNo];
                      return (
                        <React.Fragment key={course.slNo}>
                          {/* Course Main Row */}
                          <tr
                            onClick={() => toggleRow(course.slNo)}
                            className="border-b border-[#ddd] bg-white hover:bg-[#f5f5f5] cursor-pointer transition-colors"
                          >
                            <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                              <div className="flex items-center justify-center gap-1">
                                {isExpanded ? (
                                  <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                ) : (
                                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                                )}
                                <span>{course.slNo}</span>
                              </div>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-mono text-xs">
                              {course.classNbr}
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-bold text-[#337ab7]">
                              {course.courseCode}
                            </td>
                            <td className="p-2 border border-[#ddd] text-left align-middle text-[#333]">
                              {course.courseTitle}
                            </td>
                            <td className="p-2 border border-[#ddd] text-left align-middle text-gray-700">
                              {course.courseType}
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              {course.courseSystem}
                            </td>
                            <td className="p-2 border border-[#ddd] text-left align-middle">
                              {course.faculty}
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                              {course.slot}
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              {course.courseMode}
                            </td>
                          </tr>

                          {/* Nested Subtable Row (CAT / Internal Assessment Marks) */}
                          {isExpanded && (
                            <tr className="bg-[#fafafa] border-b border-[#ddd]">
                              <td colSpan={9} className="p-3 text-center">
                                <div className="w-[85%] mx-auto overflow-x-auto border border-[#ddd] shadow-xs">
                                  <table className="w-full border-collapse text-xs">
                                    <thead>
                                      <tr
                                        style={{
                                          backgroundColor: "#3c8dbc",
                                          color: "#fff",
                                        }}
                                        className="font-bold text-white text-center"
                                      >
                                        <th className="p-1.5 border border-[#ddd] text-center w-[5%] font-bold">
                                          Sl.No.
                                        </th>
                                        <th className="p-1.5 border border-[#ddd] text-center w-[25%] font-bold">
                                          Mark Title
                                        </th>
                                        <th className="p-1.5 border border-[#ddd] text-center w-[12%] font-bold">
                                          Max. Mark
                                        </th>
                                        <th className="p-1.5 border border-[#ddd] text-center w-[12%] font-bold">
                                          Weightage %
                                        </th>
                                        <th className="p-1.5 border border-[#ddd] text-center w-[12%] font-bold">
                                          Status
                                        </th>
                                        <th className="p-1.5 border border-[#ddd] text-center w-[14%] font-bold">
                                          Scored Mark
                                        </th>
                                        <th className="p-1.5 border border-[#ddd] text-center w-[14%] font-bold">
                                          Weightage Mark
                                        </th>
                                        <th className="p-1.5 border border-[#ddd] text-center w-[6%] font-bold">
                                          Remark
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {course.assessments.map((item) => (
                                        <tr
                                          key={item.slNo}
                                          className="bg-white border-b border-[#ddd] hover:bg-[#fdfdfd]"
                                        >
                                          <td className="p-2 border border-[#ddd] text-center">
                                            {item.slNo}
                                          </td>
                                          <td className="p-2 border border-[#ddd] text-left font-medium text-[#333]">
                                            {item.markTitle}
                                          </td>
                                          <td className="p-2 border border-[#ddd] text-center">
                                            {item.maxMark}
                                          </td>
                                          <td className="p-2 border border-[#ddd] text-center">
                                            {item.weightagePercent}
                                          </td>
                                          <td className="p-2 border border-[#ddd] text-center text-green-700 font-semibold">
                                            {item.status}
                                          </td>
                                          <td className="p-2 border border-[#ddd] text-center font-bold text-blue-900">
                                            {typeof item.scoredMark === "number"
                                              ? item.scoredMark.toFixed(1)
                                              : item.scoredMark}
                                          </td>
                                          <td className="p-2 border border-[#ddd] text-center font-bold text-emerald-800">
                                            {item.weightageMark}
                                          </td>
                                          <td className="p-2 border border-[#ddd] text-center">
                                            {item.remark || "-"}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
