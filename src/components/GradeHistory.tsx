"use client";

import React, { useState } from "react";
import {
  Download,
  ChevronDown,
  ChevronUp,
  FileText,
  Award,
  BookOpen,
  Info,
  Layers,
  X,
} from "lucide-react";

export interface StudentHeaderInfo {
  regNo: string;
  name: string;
  programmeAndBranch: string;
  programmeMode: string;
  studySystem: string;
  gender: string;
  yearJoined: string;
  eduStatus: string;
  school: string;
  campus: string;
}

export interface EffectiveGradeItem {
  slNo: number;
  courseCode: string;
  courseTitle: string;
  courseType: string;
  credits: number;
  grade: string;
  examMonth: string;
  resultDeclared: string;
  courseDistribution: string;
  semester: string;
}

export interface CurriculumDistributionItem {
  distributionType: string;
  creditsRequired: number;
  creditsEarned: number;
}

export interface CgpaSummary {
  creditsRegistered: number;
  creditsEarned: number;
  cgpa: number;
  sGrades: number;
  aGrades: number;
  bGrades: number;
  cGrades: number;
  dGrades: number;
  eGrades: number;
  fGrades: number;
  nGrades: number;
}

// Extracted Student Header Info
export const studentInfo: StudentHeaderInfo = {
  regNo: "25MIM10100",
  name: "KUMAR HARSHVARDHAN",
  programmeAndBranch: "Integrated M.Tech. - Artificial Intelligence",
  programmeMode: "Regular",
  studySystem: "CAL",
  gender: "MALE",
  yearJoined: "2025",
  eduStatus: "Admitted",
  school: "SCAI",
  campus: "BPL",
};

// Extracted Mock Data Keyed by Semester & Combined
export const gradeHistoryData: Record<string, EffectiveGradeItem[]> = {
  "Fall Semester 2025-26": [
    {
      slNo: 1,
      courseCode: "CHY1006",
      courseTitle: "Environmental Sustainability",
      courseType: "LT",
      credits: 2.0,
      grade: "B",
      examMonth: "Jan-2026",
      resultDeclared: "02-Apr-2026",
      courseDistribution: "UCHSSMC",
      semester: "Fall Semester 2025-26",
    },
    {
      slNo: 2,
      courseCode: "CSE1021",
      courseTitle: "Introduction to Problem Solving and Programming",
      courseType: "LTP",
      credits: 4.0,
      grade: "B",
      examMonth: "Jan-2026",
      resultDeclared: "02-Apr-2026",
      courseDistribution: "PC",
      semester: "Fall Semester 2025-26",
    },
    {
      slNo: 3,
      courseCode: "ENG1004",
      courseTitle: "EFFECTIVE TECHNICAL COMMUNICATION",
      courseType: "LT",
      credits: 2.0,
      grade: "A",
      examMonth: "Jan-2026",
      resultDeclared: "02-Apr-2026",
      courseDistribution: "UCHSSMC",
      semester: "Fall Semester 2025-26",
    },
    {
      slNo: 4,
      courseCode: "HUM1002",
      courseTitle: "Emotional Intelligence",
      courseType: "LT",
      credits: 3.0,
      grade: "B",
      examMonth: "Jan-2026",
      resultDeclared: "02-Apr-2026",
      courseDistribution: "UEHSSME",
      semester: "Fall Semester 2025-26",
    },
    {
      slNo: 5,
      courseCode: "MAT1003",
      courseTitle: "Calculus",
      courseType: "LT",
      credits: 4.0,
      grade: "B",
      examMonth: "Jan-2026",
      resultDeclared: "02-Apr-2026",
      courseDistribution: "UCNSC",
      semester: "Fall Semester 2025-26",
    },
    {
      slNo: 6,
      courseCode: "PHY1003",
      courseTitle: "Introduction to Computational Physics",
      courseType: "LTP",
      credits: 4.0,
      grade: "B",
      examMonth: "Jan-2026",
      resultDeclared: "02-Apr-2026",
      courseDistribution: "UCNSC",
      semester: "Fall Semester 2025-26",
    },
    {
      slNo: 7,
      courseCode: "UHV0001",
      courseTitle: "Universal Human Values - I",
      courseType: "LT",
      credits: 0.0,
      grade: "P",
      examMonth: "Jan-2026",
      resultDeclared: "02-Apr-2026",
      courseDistribution: "NMC",
      semester: "Fall Semester 2025-26",
    },
  ],
  "Winter Semester 2025-26": [
    {
      slNo: 8,
      courseCode: "CHY1005",
      courseTitle: "Introduction to Computational chemistry",
      courseType: "LTP",
      credits: 4.0,
      grade: "B",
      examMonth: "Apr-2026",
      resultDeclared: "08-Aug-2026",
      courseDistribution: "UCNSC",
      semester: "Winter Semester 2025-26",
    },
    {
      slNo: 9,
      courseCode: "CSE0001",
      courseTitle: "Digital Literacy",
      courseType: "LT",
      credits: 1.0,
      grade: "P",
      examMonth: "Apr-2026",
      resultDeclared: "08-Aug-2026",
      courseDistribution: "NMC",
      semester: "Winter Semester 2025-26",
    },
    {
      slNo: 10,
      courseCode: "CSE2001",
      courseTitle: "Object Oriented Programming with C++",
      courseType: "LTP",
      credits: 4.0,
      grade: "A",
      examMonth: "Apr-2026",
      resultDeclared: "08-Aug-2026",
      courseDistribution: "PC",
      semester: "Winter Semester 2025-26",
    },
    {
      slNo: 11,
      courseCode: "EEE1001",
      courseTitle: "Electric Circuits and Systems",
      courseType: "LTP",
      credits: 4.0,
      grade: "A",
      examMonth: "Apr-2026",
      resultDeclared: "08-Aug-2026",
      courseDistribution: "PC",
      semester: "Winter Semester 2025-26",
    },
    {
      slNo: 12,
      courseCode: "MAT2003",
      courseTitle: "Applied Numerical Method",
      courseType: "LT",
      credits: 3.0,
      grade: "A",
      examMonth: "Apr-2026",
      resultDeclared: "08-Aug-2026",
      courseDistribution: "UENSE",
      semester: "Winter Semester 2025-26",
    },
    {
      slNo: 13,
      courseCode: "UHV0002",
      courseTitle: "Universal Human Values - II",
      courseType: "LT",
      credits: 3.0,
      grade: "P",
      examMonth: "Apr-2026",
      resultDeclared: "08-Aug-2026",
      courseDistribution: "NMC",
      semester: "Winter Semester 2025-26",
    },
  ],
};

// All Effective Grades in a unified flat array
export const allEffectiveGrades: EffectiveGradeItem[] = [
  ...gradeHistoryData["Fall Semester 2025-26"],
  ...gradeHistoryData["Winter Semester 2025-26"],
];

// Extracted Curriculum Credit Details
export const curriculumDetailsData: CurriculumDistributionItem[] = [
  {
    distributionType: "Programme Core",
    creditsRequired: 87.0,
    creditsEarned: 12.0,
  },
  {
    distributionType: "Programme Elective",
    creditsRequired: 24.0,
    creditsEarned: 0.0,
  },
  {
    distributionType: "University Core - Natural Science Core",
    creditsRequired: 26.0,
    creditsEarned: 12.0,
  },
  {
    distributionType: "University Core - Skill Development Courses",
    creditsRequired: 7.0,
    creditsEarned: 0.0,
  },
  {
    distributionType:
      "University Core - Humanities Social Science and Management Core",
    creditsRequired: 6.0,
    creditsEarned: 4.0,
  },
  {
    distributionType: "University Core - Project and Internships",
    creditsRequired: 46.0,
    creditsEarned: 0.0,
  },
  {
    distributionType: "University Elective - Natural Science Electives",
    creditsRequired: 6.0,
    creditsEarned: 3.0,
  },
  {
    distributionType:
      "University Elective - Humanities, Social Sciences and Management Electives",
    creditsRequired: 9.0,
    creditsEarned: 3.0,
  },
  {
    distributionType: "University Elective - Open Electives",
    creditsRequired: 9.0,
    creditsEarned: 0.0,
  },
  {
    distributionType: "Non - Graded Mandatory Courses",
    creditsRequired: 9.0,
    creditsEarned: 4.0,
  },
];

// Extracted CGPA Details Summary
export const cgpaSummary: CgpaSummary = {
  creditsRegistered: 38.0,
  creditsEarned: 38.0,
  cgpa: 8.52,
  sGrades: 0,
  aGrades: 4,
  bGrades: 5,
  cGrades: 1,
  dGrades: 0,
  eGrades: 0,
  fGrades: 0,
  nGrades: 0,
};

export default function GradeHistory() {
  const [selectedSemesterFilter, setSelectedSemesterFilter] =
    useState<string>("All");
  const [expandedCourse, setExpandedCourse] =
    useState<EffectiveGradeItem | null>(null);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] =
    useState<string | null>(null);

  const displayedGrades =
    selectedSemesterFilter === "All"
      ? allEffectiveGrades
      : gradeHistoryData[selectedSemesterFilter] || [];

  const handleDownloadHistory = () => {
    setIsDownloading(true);
    setDownloadSuccessMessage(null);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccessMessage("Student Grade History PDF generated successfully.");
      setTimeout(() => setDownloadSuccessMessage(null), 4000);
    }, 800);
  };

  const getGradeBadgeClass = (grade: string) => {
    switch (grade) {
      case "S":
        return "text-emerald-700 font-bold";
      case "A":
        return "text-green-700 font-bold";
      case "B":
        return "text-blue-700 font-bold";
      case "C":
        return "text-amber-700 font-bold";
      case "P":
        return "text-slate-800 font-bold";
      case "F":
      case "N1":
      case "N2":
      case "N3":
      case "N4":
        return "text-red-600 font-bold";
      default:
        return "text-gray-800 font-bold";
    }
  };

  return (
    <div className="w-full bg-[#f4f6f9] min-h-screen p-3 text-[#333333] font-sans text-xs">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Card */}
        <div className="bg-white border border-[#d2d6de] border-t-4 border-t-[#3c8dbc] shadow-sm mb-6 rounded-none">
          {/* Card Header */}
          <div className="px-4 py-3 border-b border-[#f4f4f4] flex items-center justify-between">
            <strong className="text-xl font-bold text-[#333333] m-0">
              Student Grade History
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

              {/* 1. Student Info Table */}
              <div className="overflow-x-auto border border-[#ddd] mb-6 shadow-xs">
                <table className="w-full border-collapse text-xs border border-[#ddd]">
                  <thead>
                    <tr
                      style={{ backgroundColor: "#3c8dbc", color: "#fff" }}
                      className="font-bold text-white text-center"
                    >
                      <th className="p-2 border border-[#ddd]">Reg.No.</th>
                      <th className="p-2 border border-[#ddd]">Name</th>
                      <th className="p-2 border border-[#ddd]">Programme and Branch</th>
                      <th className="p-2 border border-[#ddd]">Programme Mode</th>
                      <th className="p-2 border border-[#ddd]">Study System</th>
                      <th className="p-2 border border-[#ddd]">Gender</th>
                      <th className="p-2 border border-[#ddd]">YearJoined</th>
                      <th className="p-2 border border-[#ddd]">Edu Status</th>
                      <th className="p-2 border border-[#ddd]">School</th>
                      <th className="p-2 border border-[#ddd]">Campus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#f9f9f9] text-center">
                      <td className="p-2 border border-[#ddd] font-semibold text-[#337ab7]">
                        {studentInfo.regNo}
                      </td>
                      <td className="p-2 border border-[#ddd] font-bold text-[#333]">
                        {studentInfo.name}
                      </td>
                      <td className="p-2 border border-[#ddd]">
                        {studentInfo.programmeAndBranch}
                      </td>
                      <td className="p-2 border border-[#ddd]">{studentInfo.programmeMode}</td>
                      <td className="p-2 border border-[#ddd]">{studentInfo.studySystem}</td>
                      <td className="p-2 border border-[#ddd]">{studentInfo.gender}</td>
                      <td className="p-2 border border-[#ddd]">{studentInfo.yearJoined}</td>
                      <td className="p-2 border border-[#ddd] text-green-700 font-semibold">
                        {studentInfo.eduStatus}
                      </td>
                      <td className="p-2 border border-[#ddd]">{studentInfo.school}</td>
                      <td className="p-2 border border-[#ddd]">{studentInfo.campus}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Semester Filter Tabs / Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 bg-[#f8f9fa] p-2 border border-[#e5e5e5]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-700 text-xs">Filter Semester:</span>
                  <div className="inline-flex rounded-none shadow-xs">
                    {["All", "Fall Semester 2025-26", "Winter Semester 2025-26"].map(
                      (sem) => (
                        <button
                          key={sem}
                          type="button"
                          onClick={() => setSelectedSemesterFilter(sem)}
                          className={`px-3 py-1 text-xs font-semibold border border-[#337ab7] cursor-pointer transition-colors ${
                            selectedSemesterFilter === sem
                              ? "bg-[#337ab7] text-white"
                              : "bg-white text-[#337ab7] hover:bg-blue-50"
                          }`}
                        >
                          {sem === "All" ? "All Semesters" : sem}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="text-xs text-gray-600 font-medium">
                  Showing <span className="font-bold text-blue-900">{displayedGrades.length}</span> course records
                </div>
              </div>

              {/* Download Success Alert */}
              {downloadSuccessMessage && (
                <div className="mb-3 p-2 bg-green-50 border border-green-300 text-green-800 text-xs flex items-center justify-between">
                  <span>{downloadSuccessMessage}</span>
                  <button
                    type="button"
                    onClick={() => setDownloadSuccessMessage(null)}
                    className="text-green-700 font-bold"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* 2. Effective Grades Table */}
              <div className="overflow-x-auto border border-[#ddd] mb-4 shadow-xs">
                <table className="w-full border-collapse text-xs border border-[#ddd]">
                  <thead>
                    {/* Top Effective Grades Banner with Download Button */}
                    <tr
                      style={{ backgroundColor: "#3c8dbc", color: "#fff" }}
                      className="font-bold text-white"
                    >
                      <th
                        colSpan={10}
                        className="p-2 border border-[#ddd] text-left text-sm font-bold"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white">Effective Grades</span>
                          <button
                            type="button"
                            onClick={handleDownloadHistory}
                            disabled={isDownloading}
                            className="bg-[#5cb85c] hover:bg-[#449d44] text-white font-semibold px-3 py-1 text-xs rounded-none border border-[#4cae4c] flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>
                              {isDownloading ? "Generating PDF..." : "Download History"}
                            </span>
                          </button>
                        </div>
                      </th>
                    </tr>

                    {/* Column Headers */}
                    <tr
                      style={{ backgroundColor: "#3c8dbc", color: "#fff" }}
                      className="font-bold text-white text-center"
                    >
                      <th className="p-2 border border-[#ddd] w-[5%]">Sl.No.</th>
                      <th className="p-2 border border-[#ddd] w-[8%]">Course Code</th>
                      <th className="p-2 border border-[#ddd] text-left w-[34%]">
                        Course Title
                      </th>
                      <th className="p-2 border border-[#ddd] w-[6%]">Course Type</th>
                      <th className="p-2 border border-[#ddd] w-[6%]">Credits</th>
                      <th className="p-2 border border-[#ddd] w-[6%]">Grade</th>
                      <th className="p-2 border border-[#ddd] w-[9%]">Exam Month</th>
                      <th className="p-2 border border-[#ddd] w-[10%]">Result Declared</th>
                      <th className="p-2 border border-[#ddd] w-[11%]">
                        Course Distribution
                      </th>
                      <th className="p-2 border border-[#ddd] w-[5%]">Detail View</th>
                    </tr>
                  </thead>

                  <tbody>
                    {displayedGrades.map((course, idx) => (
                      <tr
                        key={course.courseCode}
                        className={`border-b border-[#ddd] transition-colors ${
                          idx % 2 === 1 ? "bg-[#f9f9f9]" : "bg-white"
                        } hover:bg-[#eef5fa]`}
                      >
                        <td className="p-2 border border-[#ddd] text-center font-medium">
                          {course.slNo}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center font-bold text-[#337ab7]">
                          {course.courseCode}
                        </td>
                        <td className="p-2 border border-[#ddd] text-left font-medium text-[#333]">
                          {course.courseTitle}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center text-gray-700">
                          {course.courseType}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center font-semibold text-blue-950">
                          {course.credits.toFixed(1)}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center text-sm">
                          <span className={getGradeBadgeClass(course.grade)}>
                            {course.grade}
                          </span>
                        </td>
                        <td className="p-2 border border-[#ddd] text-center text-gray-700">
                          {course.examMonth}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center text-gray-700">
                          {course.resultDeclared}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center font-medium text-gray-800">
                          {course.courseDistribution}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center">
                          <button
                            type="button"
                            onClick={() => setExpandedCourse(course)}
                            className="bg-[#337ab7] hover:bg-[#286090] text-white p-1 text-xs rounded-none border border-[#2e6da4] inline-flex items-center justify-center cursor-pointer transition-colors"
                            title="View Details"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 3. Legend Section */}
              <div className="mb-6 p-3 bg-red-50/50 border border-red-200 text-red-600 text-xs">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-bold underline">N1</span>: Student fails to
                    clear one or more components of a course
                  </li>
                  <li>
                    <span className="font-bold underline">N2</span>: Student who has
                    been debarred due to lack of attendance
                  </li>
                  <li>
                    <span className="font-bold underline">N3</span>: Student who has
                    been absent in the Final Assessment Test
                  </li>
                  <li>
                    <span className="font-bold underline">N4</span>: Student debarred in
                    Final Assessment Test due to indiscipline/malpractice
                  </li>
                </ul>
              </div>

              {/* 4. Curriculum Details Table */}
              <div className="overflow-x-auto border border-[#ddd] mb-6 shadow-xs">
                <table className="w-full border-collapse text-xs border border-[#ddd]">
                  <thead>
                    <tr
                      style={{ backgroundColor: "#3c8dbc", color: "#fff" }}
                      className="font-bold text-white text-center"
                    >
                      <th colSpan={3} className="p-2 border border-[#ddd] text-left text-sm">
                        Curriculum Details
                      </th>
                    </tr>
                    <tr
                      style={{ backgroundColor: "#3c8dbc", color: "#fff" }}
                      className="font-bold text-white text-center"
                    >
                      <th className="p-2 border border-[#ddd] text-left w-[60%]">
                        Curriculum Distribution Type
                      </th>
                      <th className="p-2 border border-[#ddd] w-[20%]">Credits Required</th>
                      <th className="p-2 border border-[#ddd] w-[20%]">Credits Earned</th>
                    </tr>
                  </thead>
                  <tbody>
                    {curriculumDetailsData.map((item, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-[#ddd] transition-colors ${
                          idx % 2 === 1 ? "bg-[#f9f9f9]" : "bg-white"
                        } hover:bg-[#f5f5f5]`}
                      >
                        <td className="p-2 border border-[#ddd] text-left font-medium text-[#333]">
                          {item.distributionType}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center font-medium">
                          {item.creditsRequired.toFixed(1)}
                        </td>
                        <td className="p-2 border border-[#ddd] text-center font-bold text-red-600">
                          {item.creditsEarned.toFixed(1)}
                        </td>
                      </tr>
                    ))}
                    {/* Total Credits Row */}
                    <tr className="bg-[#f0f4f8] font-bold border-t-2 border-[#ddd]">
                      <td className="p-2 border border-[#ddd] text-left text-[#333]">
                        Total Credits
                      </td>
                      <td className="p-2 border border-[#ddd] text-center font-bold text-blue-950">
                        229.0
                      </td>
                      <td className="p-2 border border-[#ddd] text-center font-bold text-red-600 text-sm">
                        38.0
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 5. Basket Details Table */}
              <div className="overflow-x-auto border border-[#ddd] mb-6 shadow-xs">
                <table className="w-full border-collapse text-xs border border-[#ddd]">
                  <thead>
                    <tr
                      style={{ backgroundColor: "#3c8dbc", color: "#fff" }}
                      className="font-bold text-white text-center"
                    >
                      <th colSpan={4} className="p-2 border border-[#ddd] text-left text-sm">
                        Basket Details
                      </th>
                    </tr>
                    <tr
                      style={{ backgroundColor: "#3c8dbc", color: "#fff" }}
                      className="font-bold text-white text-center"
                    >
                      <th className="p-2 border border-[#ddd] text-left w-[40%]">
                        Basket Title
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[25%]">
                        Distribution Type
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[17%]">
                        Credits Required
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[18%]">
                        Credits Earned
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td
                        colSpan={4}
                        className="p-4 text-center text-gray-500 italic border border-[#ddd]"
                      >
                        No Basket details found for this student.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 6. CGPA Details Box (AdminLTE Orange Border Card) */}
              <div className="border border-orange-400 border-t-[3px] border-t-orange-500 bg-white p-4 shadow-sm mb-6 rounded-none">
                <div className="border-b border-[#f4f4f4] pb-2 mb-3">
                  <h3 className="text-base font-bold text-[#333] m-0 flex items-center gap-2">
                    <Award className="w-4 h-4 text-orange-500" />
                    CGPA Details
                  </h3>
                </div>

                <div className="overflow-x-auto border border-[#b1dfff]">
                  <table className="w-full border-collapse text-xs border border-[#ddd]">
                    <thead>
                      <tr
                        style={{ backgroundColor: "orange", color: "#fff" }}
                        className="font-bold text-white text-center whitespace-nowrap"
                      >
                        <th className="p-2 border border-[#ddd]">Credits Registered</th>
                        <th className="p-2 border border-[#ddd]">Credits Earned</th>
                        <th className="p-2 border border-[#ddd] bg-amber-600">CGPA</th>
                        <th className="p-2 border border-[#ddd]">S Grades</th>
                        <th className="p-2 border border-[#ddd]">A Grades</th>
                        <th className="p-2 border border-[#ddd]">B Grades</th>
                        <th className="p-2 border border-[#ddd]">C Grades</th>
                        <th className="p-2 border border-[#ddd]">D Grades</th>
                        <th className="p-2 border border-[#ddd]">E Grades</th>
                        <th className="p-2 border border-[#ddd]">F Grades</th>
                        <th className="p-2 border border-[#ddd]">N Grades</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white text-center font-bold text-[#333]">
                        <td className="p-2 border border-[#ddd]">
                          {cgpaSummary.creditsRegistered.toFixed(1)}
                        </td>
                        <td className="p-2 border border-[#ddd]">
                          {cgpaSummary.creditsEarned.toFixed(1)}
                        </td>
                        <td className="p-2 border border-[#ddd] text-base text-blue-900 bg-amber-50">
                          {cgpaSummary.cgpa.toFixed(2)}
                        </td>
                        <td className="p-2 border border-[#ddd] text-emerald-700">
                          {cgpaSummary.sGrades}
                        </td>
                        <td className="p-2 border border-[#ddd] text-green-700">
                          {cgpaSummary.aGrades}
                        </td>
                        <td className="p-2 border border-[#ddd] text-blue-700">
                          {cgpaSummary.bGrades}
                        </td>
                        <td className="p-2 border border-[#ddd] text-amber-700">
                          {cgpaSummary.cGrades}
                        </td>
                        <td className="p-2 border border-[#ddd] text-orange-700">
                          {cgpaSummary.dGrades}
                        </td>
                        <td className="p-2 border border-[#ddd] text-purple-700">
                          {cgpaSummary.eGrades}
                        </td>
                        <td className="p-2 border border-[#ddd] text-red-600">
                          {cgpaSummary.fGrades}
                        </td>
                        <td className="p-2 border border-[#ddd] text-red-600">
                          {cgpaSummary.nGrades}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Course Detail View Modal */}
      {expandedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-none shadow-2xl w-full max-w-lg border border-[#999] flex flex-col">
            <div className="px-4 py-3 border-b border-[#e5e5e5] bg-[#f8f9fa] flex justify-between items-center">
              <h4 className="text-sm font-bold text-[#333] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#337ab7]" />
                Course Detail - {expandedCourse.courseCode}
              </h4>
              <button
                type="button"
                onClick={() => setExpandedCourse(null)}
                className="text-gray-500 hover:text-black font-bold text-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 bg-[#f9f9f9] p-3 border border-[#ddd]">
                <div>
                  <span className="text-gray-500 block">Course Code:</span>
                  <span className="font-bold text-[#337ab7]">
                    {expandedCourse.courseCode}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Semester:</span>
                  <span className="font-semibold">{expandedCourse.semester}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500 block">Course Title:</span>
                  <span className="font-bold text-[#333]">
                    {expandedCourse.courseTitle}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Course Type:</span>
                  <span className="font-semibold">{expandedCourse.courseType}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Credits:</span>
                  <span className="font-bold text-blue-900">
                    {expandedCourse.credits.toFixed(1)}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Grade Awarded:</span>
                  <span className={getGradeBadgeClass(expandedCourse.grade)}>
                    {expandedCourse.grade}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Course Distribution:</span>
                  <span className="font-semibold text-gray-800">
                    {expandedCourse.courseDistribution}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Exam Month:</span>
                  <span className="font-semibold">{expandedCourse.examMonth}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Result Declared Date:</span>
                  <span className="font-semibold">{expandedCourse.resultDeclared}</span>
                </div>
              </div>
            </div>
            <div className="px-4 py-2.5 border-t border-[#e5e5e5] bg-[#f8f9fa] flex justify-end">
              <button
                type="button"
                onClick={() => setExpandedCourse(null)}
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
