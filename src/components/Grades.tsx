"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export interface MarkComponent {
  title: string;
  maxMarks: number;
  weightagePercent: number;
  status: string;
  scoredMarks: number;
  weightageMarks: number;
}

export interface GradeCourseRecord {
  slNo: number;
  courseCode: string;
  courseTitle: string;
  courseType: string;
  credits: {
    l: number;
    p: number;
    j: number;
    c: number;
  };
  gradingType: string;
  grandTotal: number;
  grade: string;
  courseId: string;
  isExcludedFromGPA: boolean;
  markBreakdown?: MarkComponent[];
}

// Structured mock JSON array extracted directly from legacy VTOP payload
export const gradeHistory: GradeCourseRecord[] = [
  {
    slNo: 1,
    courseCode: "CHY1005",
    courseTitle: "Introduction to Computational chemistry",
    courseType: "Lecture and Tutorial ,practical hours only",
    credits: { l: 3, p: 1, j: 0, c: 4 },
    gradingType: "RG",
    grandTotal: 85,
    grade: "B",
    courseId: "BP_CHY1005_00100",
    isExcludedFromGPA: false,
    markBreakdown: [
      {
        title: "Continuous Assessment Test - I",
        maxMarks: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMarks: 40.0,
        weightageMarks: 12.0,
      },
      {
        title: "Continuous Assessment Test - II",
        maxMarks: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMarks: 43.0,
        weightageMarks: 12.9,
      },
      {
        title: "Digital Assignment / Quiz",
        maxMarks: 100,
        weightagePercent: 10,
        status: "Present",
        scoredMarks: 90.0,
        weightageMarks: 9.0,
      },
      {
        title: "Lab Assessment / Practical",
        maxMarks: 50,
        weightagePercent: 20,
        status: "Present",
        scoredMarks: 44.0,
        weightageMarks: 17.6,
      },
      {
        title: "Final Assessment Test (FAT)",
        maxMarks: 100,
        weightagePercent: 40,
        status: "Present",
        scoredMarks: 84.0,
        weightageMarks: 33.6,
      },
    ],
  },
  {
    slNo: 2,
    courseCode: "CSE0001",
    courseTitle: "Digital Literacy",
    courseType: "Lecture and Tutorial  Hours Only",
    credits: { l: 1, p: 0, j: 0, c: 1 },
    gradingType: "AG",
    grandTotal: 96,
    grade: "P",
    courseId: "BP_CSE0001_00110",
    isExcludedFromGPA: true,
    markBreakdown: [
      {
        title: "Continuous Assessment Test - I",
        maxMarks: 50,
        weightagePercent: 30,
        status: "Present",
        scoredMarks: 48.0,
        weightageMarks: 28.8,
      },
      {
        title: "Continuous Assessment Test - II",
        maxMarks: 50,
        weightagePercent: 30,
        status: "Present",
        scoredMarks: 48.0,
        weightageMarks: 28.8,
      },
      {
        title: "Final Assessment Test (FAT)",
        maxMarks: 100,
        weightagePercent: 40,
        status: "Present",
        scoredMarks: 96.0,
        weightageMarks: 38.4,
      },
    ],
  },
  {
    slNo: 3,
    courseCode: "CSE2001",
    courseTitle: "Object Oriented Programming with C++",
    courseType: "Lecture and Tutorial ,practical hours only",
    credits: { l: 3, p: 1, j: 0, c: 4 },
    gradingType: "RG",
    grandTotal: 93,
    grade: "A",
    courseId: "BP_CSE2001_00110",
    isExcludedFromGPA: false,
    markBreakdown: [
      {
        title: "Continuous Assessment Test - I",
        maxMarks: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMarks: 47.0,
        weightageMarks: 14.1,
      },
      {
        title: "Continuous Assessment Test - II",
        maxMarks: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMarks: 46.0,
        weightageMarks: 13.8,
      },
      {
        title: "Digital Assignment / Project",
        maxMarks: 100,
        weightagePercent: 10,
        status: "Present",
        scoredMarks: 95.0,
        weightageMarks: 9.5,
      },
      {
        title: "Lab Assessment / Practical",
        maxMarks: 50,
        weightagePercent: 20,
        status: "Present",
        scoredMarks: 48.0,
        weightageMarks: 19.2,
      },
      {
        title: "Final Assessment Test (FAT)",
        maxMarks: 100,
        weightagePercent: 40,
        status: "Present",
        scoredMarks: 91.0,
        weightageMarks: 36.4,
      },
    ],
  },
  {
    slNo: 4,
    courseCode: "EEE1001",
    courseTitle: "Electric Circuits and Systems",
    courseType: "Lecture and Tutorial ,practical hours only",
    credits: { l: 3, p: 1, j: 0, c: 4 },
    gradingType: "RG",
    grandTotal: 67,
    grade: "A",
    courseId: "BP_EEE1001_00130",
    isExcludedFromGPA: false,
    markBreakdown: [
      {
        title: "Continuous Assessment Test - I",
        maxMarks: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMarks: 35.0,
        weightageMarks: 10.5,
      },
      {
        title: "Continuous Assessment Test - II",
        maxMarks: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMarks: 32.0,
        weightageMarks: 9.6,
      },
      {
        title: "Digital Assignment",
        maxMarks: 100,
        weightagePercent: 10,
        status: "Present",
        scoredMarks: 70.0,
        weightageMarks: 7.0,
      },
      {
        title: "Lab Assessment / Practical",
        maxMarks: 50,
        weightagePercent: 20,
        status: "Present",
        scoredMarks: 38.0,
        weightageMarks: 15.2,
      },
      {
        title: "Final Assessment Test (FAT)",
        maxMarks: 100,
        weightagePercent: 40,
        status: "Present",
        scoredMarks: 62.0,
        weightageMarks: 24.8,
      },
    ],
  },
  {
    slNo: 5,
    courseCode: "MAT2003",
    courseTitle: "Applied Numerical Method",
    courseType: "Lecture and Tutorial  Hours Only",
    credits: { l: 3, p: 0, j: 0, c: 3 },
    gradingType: "RG",
    grandTotal: 72,
    grade: "A",
    courseId: "BP_MAT2003_00110",
    isExcludedFromGPA: false,
    markBreakdown: [
      {
        title: "Continuous Assessment Test - I",
        maxMarks: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMarks: 38.0,
        weightageMarks: 11.4,
      },
      {
        title: "Continuous Assessment Test - II",
        maxMarks: 50,
        weightagePercent: 15,
        status: "Present",
        scoredMarks: 37.0,
        weightageMarks: 11.1,
      },
      {
        title: "Digital Assignment",
        maxMarks: 100,
        weightagePercent: 10,
        status: "Present",
        scoredMarks: 80.0,
        weightageMarks: 8.0,
      },
      {
        title: "Final Assessment Test (FAT)",
        maxMarks: 100,
        weightagePercent: 60,
        status: "Present",
        scoredMarks: 70.0,
        weightageMarks: 42.0,
      },
    ],
  },
  {
    slNo: 6,
    courseCode: "UHV0002",
    courseTitle: "Universal Human Values - II",
    courseType: "Lecture and Tutorial  Hours Only",
    credits: { l: 3, p: 0, j: 0, c: 3 },
    gradingType: "AG",
    grandTotal: 93,
    grade: "P",
    courseId: "BP_UHV0002_00100",
    isExcludedFromGPA: true,
    markBreakdown: [
      {
        title: "Continuous Assessment Test - I",
        maxMarks: 50,
        weightagePercent: 30,
        status: "Present",
        scoredMarks: 46.0,
        weightageMarks: 27.6,
      },
      {
        title: "Continuous Assessment Test - II",
        maxMarks: 50,
        weightagePercent: 30,
        status: "Present",
        scoredMarks: 47.0,
        weightageMarks: 28.2,
      },
      {
        title: "Final Assessment Test (FAT)",
        maxMarks: 100,
        weightagePercent: 40,
        status: "Present",
        scoredMarks: 93.0,
        weightageMarks: 37.2,
      },
    ],
  },
];

export const semesterOptions = [
  { value: "BL20252605", label: "Winter Semester 2025-26" },
  { value: "BL20262701", label: "Fall Semester 2026-27" },
];

export default function Grades() {
  const [selectedSemester, setSelectedSemester] =
    useState<string>("BL20252605");
  const [selectedCourseDetail, setSelectedCourseDetail] =
    useState<GradeCourseRecord | null>(null);

  const handleViewMarks = (course: GradeCourseRecord) => {
    setSelectedCourseDetail(course);
  };

  const handleCloseModal = () => {
    setSelectedCourseDetail(null);
  };

  return (
    <div className="w-full bg-[#f4f6f9] min-h-screen p-3 text-[#333333] font-sans text-xs">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Card Container */}
        <div className="bg-white border border-[#d2d6de] border-t-4 border-t-[#3c8dbc] shadow-sm mb-6 rounded-none">
          {/* Card Header */}
          <div className="px-4 py-3 border-b border-[#f4f4f4] flex items-center justify-between">
            <strong className="text-xl font-bold text-[#333333] m-0">
              Result - Grade View
            </strong>
          </div>

          {/* Card Body */}
          <div className="p-4" id="main-section">
            <form
              role="form"
              id="studentGradeView"
              name="studentGradeView"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="hidden"
                name="authorizedID"
                id="authorizedID"
                value="25MIM10100"
              />

              {/* Semester Selection Row */}
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
                      className="w-full sm:w-3/4 border border-[#d2d6de] bg-white px-3 py-1.5 text-xs text-[#555] rounded-none focus:outline-none focus:border-[#3c8dbc] shadow-inner"
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

              {/* Table Container */}
              <div className="overflow-x-auto border border-[#b1dfff] mt-6">
                <table
                  className="w-full border-collapse text-xs border border-[#ddd] table-hover"
                  style={{ fontSize: "12px" }}
                >
                  <thead>
                    {/* Header Row 1 */}
                    <tr
                      style={{
                        backgroundColor: "#3c8dbc",
                        borderColor: "#fff",
                        color: "#fff",
                      }}
                      className="font-bold text-white text-center"
                    >
                      <th
                        rowSpan={2}
                        className="p-2 border border-[#ddd] text-center w-[4%] align-middle font-bold"
                      >
                        Sl.No.
                      </th>
                      <th
                        rowSpan={2}
                        className="p-2 border border-[#ddd] text-center w-[10%] align-middle font-bold"
                      >
                        Course Code
                      </th>
                      <th
                        rowSpan={2}
                        className="p-2 border border-[#ddd] text-center w-[25%] align-middle font-bold"
                      >
                        Course Title
                      </th>
                      <th
                        rowSpan={2}
                        className="p-2 border border-[#ddd] text-center w-[20%] align-middle font-bold"
                      >
                        Course Type
                      </th>
                      <th
                        colSpan={4}
                        className="p-1.5 border border-[#ddd] text-center font-bold"
                      >
                        Credits
                      </th>
                      <th
                        rowSpan={2}
                        className="p-2 border border-[#ddd] text-center w-[8%] align-middle font-bold"
                      >
                        Grading Type
                      </th>
                      <th
                        rowSpan={2}
                        className="p-2 border border-[#ddd] text-center w-[8%] align-middle font-bold"
                      >
                        Grand Total
                      </th>
                      <th
                        rowSpan={2}
                        className="p-2 border border-[#ddd] text-center w-[6%] align-middle font-bold"
                      >
                        Grade
                      </th>
                      <th
                        rowSpan={2}
                        className="p-2 border border-[#ddd] text-center w-[8%] align-middle font-bold"
                      >
                        View Mark
                      </th>
                    </tr>

                    {/* Header Row 2 (L, P, J, C) */}
                    <tr
                      style={{
                        backgroundColor: "#3c8dbc",
                        borderColor: "#fff",
                        color: "#fff",
                      }}
                      className="font-bold text-white text-center"
                    >
                      <th className="p-1 border border-[#ddd] text-center w-[3%] font-bold">
                        L
                      </th>
                      <th className="p-1 border border-[#ddd] text-center w-[3%] font-bold">
                        P
                      </th>
                      <th className="p-1 border border-[#ddd] text-center w-[3%] font-bold">
                        J
                      </th>
                      <th className="p-1 border border-[#ddd] text-center w-[3%] font-bold">
                        C
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {gradeHistory.map((course) => {
                      const isExcluded = course.isExcludedFromGPA;
                      return (
                        <tr
                          key={course.slNo}
                          className={`border-b border-[#ddd] transition-colors ${
                            isExcluded
                              ? "bg-[#c2ffe3] hover:bg-[#b0f5d4]"
                              : "bg-white hover:bg-[#f5f5f5]"
                          }`}
                          style={{
                            backgroundColor: isExcluded ? "#c2ffe3" : undefined,
                          }}
                        >
                          <td className="p-2 border border-[#ddd] text-center align-middle h-[50px] font-medium">
                            {course.slNo}
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
                          <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                            {course.credits.l}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                            {course.credits.p}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                            {course.credits.j}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center align-middle font-bold text-blue-900">
                            {course.credits.c}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                            {course.gradingType}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center align-middle font-bold text-gray-800">
                            {course.grandTotal}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center align-middle">
                            <span
                              className={`font-bold text-base ${
                                course.grade === "S"
                                  ? "text-emerald-700"
                                  : course.grade === "A"
                                  ? "text-green-700"
                                  : course.grade === "B"
                                  ? "text-blue-700"
                                  : course.grade === "P"
                                  ? "text-slate-800"
                                  : "text-red-600"
                              }`}
                            >
                              {course.grade}
                            </span>
                          </td>
                          <td className="p-2 border border-[#ddd] text-center align-middle">
                            <button
                              type="button"
                              onClick={() => handleViewMarks(course)}
                              className="w-full bg-[#337ab7] hover:bg-[#286090] text-white py-1 px-2 text-xs rounded-none border border-[#2e6da4] flex items-center justify-center cursor-pointer transition-colors"
                              title="View Mark Details"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}

                    {/* GPA Summary Footer Row */}
                    <tr className="bg-white border-t-2 border-[#ddd]">
                      <td
                        colSpan={14}
                        className="p-3 text-center align-middle bg-slate-50"
                      >
                        <span
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                          className="text-[#333] font-bold text-lg"
                        >
                          GPA : 8.73
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Legend Box below table */}
              <div className="mt-4 px-2">
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center text-xs text-gray-700">
                    <span
                      className="inline-block h-5 w-10 border border-[#727372] mr-3"
                      style={{ backgroundColor: "#c2ffe3" }}
                    ></span>
                    Course not included in GPA/CGPA
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal / Detailed Mark View Popup */}
      {selectedCourseDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-none shadow-2xl w-full max-w-[80%] max-h-[90vh] flex flex-col border border-[#999]">
            {/* Modal Header */}
            <div className="px-4 py-3 border-b border-[#e5e5e5] flex justify-between items-center bg-[#f8f9fa]">
              <h4 className="text-base font-bold text-[#333]">
                Mark Details - {selectedCourseDetail.courseCode} (
                {selectedCourseDetail.courseTitle})
              </h4>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-[#999] hover:text-[#333] text-lg font-bold"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 overflow-y-auto flex-1">
              <div className="overflow-x-auto border border-[#ddd]">
                <table className="w-full border-collapse text-xs">
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#3c8dbc",
                        color: "#fff",
                      }}
                      className="font-bold text-white text-center"
                    >
                      <th className="p-2 border border-[#ddd] text-center w-[5%] font-bold">
                        Sl.No.
                      </th>
                      <th className="p-2 border border-[#ddd] text-left w-[35%] font-bold">
                        Evaluation Component
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%] font-bold">
                        Max Marks
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%] font-bold">
                        Weightage %
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%] font-bold">
                        Status
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%] font-bold">
                        Scored Marks
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%] font-bold">
                        Weightage Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCourseDetail.markBreakdown?.map((comp, idx) => (
                      <tr
                        key={idx}
                        className={
                          idx % 2 === 1 ? "bg-[#f9f9f9]" : "bg-white"
                        }
                      >
                        <td className="p-2 border border-[#ddd] text-center">
                          {idx + 1}
                        </td>
                        <td className="p-2 border border-[#ddd] text-left font-medium text-[#333]">
                          {comp.title}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center">
                          {comp.maxMarks}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center">
                          {comp.weightagePercent}%
                        </td>
                        <td className="p-2 border border-[#ddd] text-center text-green-700 font-semibold">
                          {comp.status}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center font-bold text-blue-900">
                          {comp.scoredMarks.toFixed(1)}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center font-bold text-emerald-800">
                          {comp.weightageMarks.toFixed(1)}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-[#f0f4f8] font-bold border-t-2 border-[#ddd]">
                      <td
                        colSpan={5}
                        className="p-2 border border-[#ddd] text-right"
                      >
                        Grand Total:
                      </td>
                      <td className="p-2 border border-[#ddd] text-center font-bold text-blue-900 text-sm">
                        {selectedCourseDetail.grandTotal}
                      </td>
                      <td className="p-2 border border-[#ddd] text-center font-bold text-emerald-800 text-sm">
                        Grade: {selectedCourseDetail.grade}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-3 border-t border-[#e5e5e5] bg-[#f8f9fa] flex justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-[#337ab7] hover:bg-[#286090] text-white font-medium py-1 px-4 text-xs rounded-none border border-[#2e6da4] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
