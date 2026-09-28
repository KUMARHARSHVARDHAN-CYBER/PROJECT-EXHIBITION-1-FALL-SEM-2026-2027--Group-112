"use client";

import React, { useState } from "react";
import { Eye, X } from "lucide-react";

export interface AttendanceRecord {
  slNo: number;
  classGroup: string;
  courseCode: string;
  courseTitle: string;
  courseType: string;
  courseDetail: string;
  classDetail: string;
  classId: string;
  slot: string;
  venue: string;
  facultyDetail: string;
  facultyName: string;
  school: string;
  attendedClasses: number;
  totalClasses: number;
  attendancePercentage: number;
  debarStatus: string;
  courseId: string;
  slotType: string;
  registeredDateTime?: string;
  attendanceDateType?: string;
  dayWiseDetails?: {
    classGroup: string;
    courseDetail: string;
    classDetail: string;
    facultyDetail: string;
    registeredDateTime: string;
    attendanceDateType: string;
    attendanceStatus: string;
    debarStatus: string;
  }[];
}

// Mock JSON dataset extracted directly from legacy VTOP payload
export const mockAttendanceData: AttendanceRecord[] = [
  {
    slNo: 1,
    classGroup: "General",
    courseCode: "CSA2001",
    courseTitle: "Fundamentals in AI and ML",
    courseType: "Lecture and Tutorial ,practical hours only",
    courseDetail: "CSA2001 - Fundamentals in AI and ML - Lecture and Tutorial ,practical hours only",
    classDetail: "BL2026270100659 - B14+B23+D21 - AB02-103",
    classId: "BL2026270100659",
    slot: "B14+B23+D21",
    venue: "AB02-103",
    facultyDetail: "RUDRA KALYAN NAYAK - SCAI",
    facultyName: "RUDRA KALYAN NAYAK",
    school: "SCAI",
    attendedClasses: 22,
    totalClasses: 22,
    attendancePercentage: 100,
    debarStatus: "-",
    courseId: "BP_CSA2001_00110",
    slotType: "LTP",
    registeredDateTime: "05-Jul-2026 13:02",
    attendanceDateType: "06-Jul-2026 / Manual",
    dayWiseDetails: [],
  },
  {
    slNo: 2,
    classGroup: "General",
    courseCode: "CSE2002",
    courseTitle: "Data Structures and Algorithms",
    courseType: "Lecture and Tutorial ,practical hours only",
    courseDetail: "CSE2002 - Data Structures and Algorithms - Lecture and Tutorial ,practical hours only",
    classDetail: "BL2026270100272 - C21+F11+F12 - AB02-404",
    classId: "BL2026270100272",
    slot: "C21+F11+F12",
    venue: "AB02-404",
    facultyDetail: "VIPIN JAIN - SCOPE",
    facultyName: "VIPIN JAIN",
    school: "SCOPE",
    attendedClasses: 22,
    totalClasses: 22,
    attendancePercentage: 100,
    debarStatus: "-",
    courseId: "BP_CSE2002_00200",
    slotType: "LTP",
    registeredDateTime: "05-Jul-2026 13:40",
    attendanceDateType: "06-Jul-2026 / Manual",
    dayWiseDetails: [],
  },
  {
    slNo: 3,
    classGroup: "General",
    courseCode: "ECE2002",
    courseTitle: "Digital Logic Design",
    courseType: "Lecture and Tutorial ,practical hours only",
    courseDetail: "ECE2002 - Digital Logic Design - Lecture and Tutorial ,practical hours only",
    classDetail: "BL2026270100888 - C11+C12+C13 - AB-331",
    classId: "BL2026270100888",
    slot: "C11+C12+C13",
    venue: "AB-331",
    facultyDetail: "ARJUN LAL KUMAWAT - SEEE",
    facultyName: "ARJUN LAL KUMAWAT",
    school: "SEEE",
    attendedClasses: 25,
    totalClasses: 25,
    attendancePercentage: 100,
    debarStatus: "-",
    courseId: "BP_ECE2002_00100",
    slotType: "LTP",
    registeredDateTime: "05-Jul-2026 13:02",
    attendanceDateType: "06-Jul-2026 / Manual",
    dayWiseDetails: [],
  },
  {
    slNo: 4,
    classGroup: "General",
    courseCode: "HUM0003",
    courseTitle: "INDIAN CONSTITUTION",
    courseType: "Lecture and Tutorial  Hours Only",
    courseDetail: "HUM0003 - INDIAN CONSTITUTION - Lecture and Tutorial  Hours Only",
    classDetail: "BL2026270101203 - A11 - CR-001",
    classId: "BL2026270101203",
    slot: "A11",
    venue: "CR-001",
    facultyDetail: "JAGRITI GUPTA - SASL",
    facultyName: "JAGRITI GUPTA",
    school: "SASL",
    attendedClasses: 9,
    totalClasses: 9,
    attendancePercentage: 100,
    debarStatus: "-",
    courseId: "BP_HUM0003_00100",
    slotType: "LT",
    registeredDateTime: "05-Jul-2026 13:03",
    attendanceDateType: "06-Jul-2026 / Manual",
    dayWiseDetails: [],
  },
  {
    slNo: 5,
    classGroup: "General",
    courseCode: "HUM1012",
    courseTitle: "Logic And Language Structure",
    courseType: "Lecture and Tutorial  Hours Only",
    courseDetail: "HUM1012 - Logic And Language Structure - Lecture and Tutorial  Hours Only",
    classDetail: "BL2026270100259 - B21+E14 - AB02-301",
    classId: "BL2026270100259",
    slot: "B21+E14",
    venue: "AB02-301",
    facultyDetail: "VELMANI R - SCAI",
    facultyName: "VELMANI R",
    school: "SCAI",
    attendedClasses: 15,
    totalClasses: 15,
    attendancePercentage: 100,
    debarStatus: "-",
    courseId: "BP_HUM1012_00100",
    slotType: "LT",
    registeredDateTime: "05-Jul-2026 13:02",
    attendanceDateType: "06-Jul-2026 / Manual",
    dayWiseDetails: [],
  },
  {
    slNo: 6,
    classGroup: "General",
    courseCode: "MAT2002",
    courseTitle: "Discrete Mathematics and Graph Theory",
    courseType: "Lecture and Tutorial  Hours Only",
    courseDetail: "MAT2002 - Discrete Mathematics and Graph Theory - Lecture and Tutorial  Hours Only",
    classDetail: "BL2026270100033 - A14+D11+D12 - AB-230",
    classId: "BL2026270100033",
    slot: "A14+D11+D12",
    venue: "AB-230",
    facultyDetail: "GIRIJA P - SASL",
    facultyName: "GIRIJA P",
    school: "SASL",
    attendedClasses: 22,
    totalClasses: 22,
    attendancePercentage: 100,
    debarStatus: "-",
    courseId: "BP_MAT2002_00110",
    slotType: "LT",
    registeredDateTime: "05-Jul-2026 13:01",
    attendanceDateType: "06-Jul-2026 / Manual",
    dayWiseDetails: [],
  },
  {
    slNo: 7,
    classGroup: "General",
    courseCode: "SST1003",
    courseTitle: "Professional Communication Skills for Engineers",
    courseType: "Practical Hours Only",
    courseDetail: "SST1003 - Professional Communication Skills for Engineers - Practical Hours Only",
    classDetail: "BL2026270100618 - A13 - AB-102",
    classId: "BL2026270100618",
    slot: "A13",
    venue: "AB-102",
    facultyDetail: "DEV BRAT GUPTA - SASL",
    facultyName: "DEV BRAT GUPTA",
    school: "SASL",
    attendedClasses: 8,
    totalClasses: 8,
    attendancePercentage: 100,
    debarStatus: "-",
    courseId: "BP_SST1003_00100",
    slotType: "P",
    registeredDateTime: "05-Jul-2026 13:06",
    attendanceDateType: "06-Jul-2026 / Manual",
    dayWiseDetails: [],
  },
];

export const semesterOptions = [
  { value: "BL20262701", label: "Fall Semester 2026-27 - BPL" },
];

export default function ClassAttendance() {
  const [selectedSemester, setSelectedSemester] = useState<string>("BL20262701");
  const [activeModalCourse, setActiveModalCourse] = useState<AttendanceRecord | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedSemester(val);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  const handleOpenDetailModal = (course: AttendanceRecord) => {
    setActiveModalCourse(course);
  };

  const handleCloseDetailModal = () => {
    setActiveModalCourse(null);
  };

  return (
    <div className="w-full bg-[#f4f6f9] min-h-screen p-3 text-[#333333] font-sans text-xs">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Card Container with legacy AdminLTE styling */}
        <div className="bg-white border border-[#d2d6de] border-t-4 border-t-[#3c8dbc] shadow-sm mb-6 rounded-none">
          {/* Card Header */}
          <div className="px-4 py-3 border-b border-[#f4f4f4] flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#333333] m-0">
              Student Attendance Details
            </h3>
          </div>

          {/* Card Body */}
          <div className="p-4">
            {/* Semester Selection Form */}
            <div className="mb-4">
              <div className="flex flex-wrap items-center gap-3">
                <label
                  htmlFor="semesterSubId"
                  className="font-bold text-[#333333] text-sm min-w-[70px]"
                >
                  Semester
                </label>
                <select
                  id="semesterSubId"
                  name="semesterSubId"
                  value={selectedSemester}
                  onChange={handleSemesterChange}
                  className="border border-[#d2d6de] bg-white px-3 py-1.5 text-xs text-[#555] rounded-none focus:outline-none focus:border-[#3c8dbc] min-w-[280px] shadow-inner"
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

            {/* Attendance Information Section */}
            {isLoading ? (
              <div className="py-12 text-center text-gray-500 font-bold">
                Loading Attendance Details... Please Wait
              </div>
            ) : selectedSemester === "" ? (
              <div className="py-8 text-center text-gray-500 italic">
                Please select a semester to view attendance details.
              </div>
            ) : (
              <div id="loadMyFragment">
                <div className="mb-3">
                  <h4 className="text-sm font-bold underline mb-1 text-[#333333]">
                    Attendance Information:
                  </h4>
                  <h5 className="text-xs text-[#333333] font-normal">
                    <span>
                      <span className="text-red-600 font-bold">* Note:</span>{" "}
                      As per norms, <b>Virtual Slots</b> &amp;{" "}
                      <b>Medical Leave</b> are not included in attendance
                      percentage calculation.
                    </span>
                  </h5>
                </div>

                {/* Attendance Data Table */}
                <div className="overflow-x-auto border border-[#ddd]">
                  <table
                    id="AttendanceDetailDataTable"
                    className="w-full border-collapse text-xs"
                    style={{ fontSize: "12px" }}
                  >
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "#3c8dbc",
                          borderColor: "#fff",
                          color: "#fff",
                        }}
                        className="font-bold text-white text-center border-b border-[#ddd]"
                      >
                        <th className="p-2 border border-[#ddd] text-center w-[3%]">
                          <b>Sl.No.</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[10%]">
                          <b>Class Group</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[18%]">
                          <b>Course Detail</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[15%]">
                          <b>Class Detail</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[15%]">
                          <b>Faculty Detail</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[8%]">
                          <b>Attended Classes/Days</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[8%]">
                          <b>Total Classes</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[8%]">
                          <b>Attendance Percentage</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[10%]">
                          <b>Debar Status</b>
                        </th>
                        <th className="p-2 border border-[#ddd] text-center w-[8%]">
                          <b>Attendance Detail</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockAttendanceData.map((course, index) => {
                        const isEven = index % 2 === 1;
                        return (
                          <tr
                            key={course.slNo}
                            className={`border-b border-[#ddd] hover:bg-[#f5f5f5] transition-colors ${
                              isEven ? "bg-[#f9f9f9]" : "bg-white"
                            }`}
                          >
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{course.slNo}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{course.classGroup}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-left align-middle text-[#333]">
                              <span>{course.courseDetail}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-left align-middle text-[#333]">
                              <span>{course.classDetail}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-left align-middle text-[#333]">
                              <span>{course.facultyDetail}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                              <span>{course.attendedClasses}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle font-medium">
                              <span>{course.totalClasses}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span
                                className={
                                  course.attendancePercentage < 75
                                    ? "text-red-600 font-bold text-[18px]"
                                    : "text-green-600 font-bold text-[18px]"
                                }
                                style={{
                                  color:
                                    course.attendancePercentage < 75
                                      ? "red"
                                      : "green",
                                  fontSize: "20px",
                                }}
                              >
                                {course.attendancePercentage}%
                              </span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <span>{course.debarStatus}</span>
                            </td>
                            <td className="p-2 border border-[#ddd] text-center align-middle">
                              <button
                                type="button"
                                onClick={() => handleOpenDetailModal(course)}
                                className="text-[#337ab7] hover:text-[#23527c] p-1 inline-flex items-center justify-center cursor-pointer transition-colors"
                                title="Show"
                                id={`studentAttendanceDetilShow_${index}`}
                              >
                                <Eye className="w-5 h-5 fill-current" />
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
        </div>
      </div>

      {/* Legacy Modal Component for Attendance Detail */}
      {activeModalCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="StudentAttendanceDetailModalTitle"
        >
          <div className="bg-white rounded-none shadow-2xl w-full max-w-[85%] max-h-[90vh] flex flex-col border border-[#999]">
            {/* Modal Header */}
            <div className="px-4 py-3 border-b border-[#e5e5e5] flex justify-between items-center bg-[#f8f9fa]">
              <h4
                id="StudentAttendanceDetailModalTitle"
                className="text-base font-bold underline text-[#333]"
              >
                Attendance Detail - {activeModalCourse.courseCode} ({activeModalCourse.courseTitle})
              </h4>
              <button
                type="button"
                onClick={handleCloseDetailModal}
                className="text-[#999] hover:text-[#333] text-lg font-bold"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 overflow-y-auto flex-1">
              <div className="overflow-x-auto border border-[#ddd] mb-4">
                <table
                  id="StudentCourseDetailDataTable"
                  className="w-full border-collapse text-xs"
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
                      <th className="p-2 border border-[#ddd] text-center w-[10%]">
                        <b>Class Group</b>
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%]">
                        <b>Course Detail</b>
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%]">
                        <b>Class Detail</b>
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%]">
                        <b>Faculty Detail</b>
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[10%]">
                        <b>Registered Date &amp; Time</b>
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[10%]">
                        <b>Attendance Date / Type</b>
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[13%]">
                        <b>Attendance Status</b>
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[12%]">
                        <b>Debar Status</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeModalCourse.dayWiseDetails &&
                    activeModalCourse.dayWiseDetails.length > 0 ? (
                      activeModalCourse.dayWiseDetails.map((item, idx) => (
                        <tr
                          key={idx}
                          className={
                            idx % 2 === 1 ? "bg-[#f9f9f9]" : "bg-white"
                          }
                        >
                          <td className="p-2 border border-[#ddd] text-center">
                            {item.classGroup}
                          </td>
                          <td className="p-2 border border-[#ddd] text-left">
                            {item.courseDetail}
                          </td>
                          <td className="p-2 border border-[#ddd] text-left">
                            {item.classDetail}
                          </td>
                          <td className="p-2 border border-[#ddd] text-left">
                            {item.facultyDetail}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center">
                            {item.registeredDateTime}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center">
                            {item.attendanceDateType}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center">
                            {item.attendanceStatus}
                          </td>
                          <td className="p-2 border border-[#ddd] text-center">
                            {item.debarStatus}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="odd">
                        <td
                          colSpan={8}
                          className="p-3 text-center text-gray-500 italic bg-white"
                        >
                          No data available in table
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <p className="text-red-600 font-bold text-center my-3 text-sm">
                Yet to post.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-3 border-t border-[#e5e5e5] bg-[#f8f9fa] flex justify-end">
              <button
                type="button"
                onClick={handleCloseDetailModal}
                className="bg-[#337ab7] hover:bg-[#286090] text-white font-medium py-1 px-4 text-xs rounded-none border border-[#2e6da4] transition-colors"
                id="studentAttendanceDetailCloseButton"
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
