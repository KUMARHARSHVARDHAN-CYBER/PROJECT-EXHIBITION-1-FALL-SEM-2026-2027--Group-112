"use client";

import React, { useState } from "react";

// Structured interfaces
export interface CourseRegistration {
  slNo: number;
  classGroup: string;
  courseCode: string;
  courseTitle: string;
  courseType: string;
  ltpjc: string;
  category: string;
  courseOption: string;
  classId: string;
  slot: string;
  venue: string;
  facultyName: string;
  school: string;
  registeredDate: string;
  attendanceDate: string;
  attendanceType: string;
  status: string;
}

export interface TimetableSlot {
  slotName: string;
  courseCode?: string;
  type?: string;
  venue?: string;
  batch?: string;
  isBooked?: boolean;
}

export interface DaySchedule {
  day: string;
  theoryType: string;
  slots: {
    slot1: TimetableSlot; // 08:30 - 10:00
    slot2: TimetableSlot; // 10:05 - 11:35
    slot3: TimetableSlot; // 11:40 - 13:10
    lunch: string;        // Lunch
    slot4: TimetableSlot; // 13:15 - 14:45
    slot5: TimetableSlot; // 14:50 - 16:20
    slot6: TimetableSlot; // 16:25 - 17:55
    slot7: TimetableSlot; // 18:00 - 19:30
  };
}

export const mockTimetableData: {
  authorizedID: string;
  currentSemester: string;
  semesters: { id: string; name: string }[];
  totalCredits: string;
  registeredCourses: CourseRegistration[];
  weeklySchedule: DaySchedule[];
} = {
  authorizedID: "25MIM10100",
  currentSemester: "BL20262701",
  semesters: [
    { id: "BL20262701", name: "Fall Semester 2026-27" },
  ],
  totalCredits: "24.0",
  registeredCourses: [
    {
      slNo: 1,
      classGroup: "General",
      courseCode: "CSA2001",
      courseTitle: "Fundamentals in AI and ML",
      courseType: "Lecture and Tutorial ,practical hours only",
      ltpjc: "2 1 1 0 4.0",
      category: "Programme Core",
      courseOption: "Regular",
      classId: "BL2026270100659",
      slot: "B14+B23+D21",
      venue: "AB02-103",
      facultyName: "RUDRA KALYAN NAYAK",
      school: "SCAI",
      registeredDate: "05-Jul-2026 13:02",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 2,
      classGroup: "General",
      courseCode: "CSE2002",
      courseTitle: "Data Structures and Algorithms",
      courseType: "Lecture and Tutorial ,practical hours only",
      ltpjc: "2 1 1 0 4.0",
      category: "Programme Core",
      courseOption: "Regular",
      classId: "BL2026270100272",
      slot: "C21+F11+F12",
      venue: "AB02-404",
      facultyName: "VIPIN JAIN",
      school: "SCOPE",
      registeredDate: "05-Jul-2026 13:40",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 3,
      classGroup: "General",
      courseCode: "DSN2098",
      courseTitle: "Project Exhibition - I",
      courseType: "Project Only",
      ltpjc: "0 0 0 1 1.0",
      category: "University Core - Project and Internships",
      courseOption: "Regular",
      classId: "BL2026270100871",
      slot: "NIL",
      venue: "NIL",
      facultyName: "S. PERIYANAYAGI",
      school: "SCAI",
      registeredDate: "05-Jul-2026 13:05",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 4,
      classGroup: "General",
      courseCode: "ECE2002",
      courseTitle: "Digital Logic Design",
      courseType: "Lecture and Tutorial ,practical hours only",
      ltpjc: "2 1 1 0 4.0",
      category: "Programme Core",
      courseOption: "Regular",
      classId: "BL2026270100888",
      slot: "C11+C12+C13",
      venue: "AB-331",
      facultyName: "ARJUN LAL KUMAWAT",
      school: "SEEE",
      registeredDate: "05-Jul-2026 13:47",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 5,
      classGroup: "General",
      courseCode: "EXC0001",
      courseTitle: "EXTRA CURRICULAR ACTIVITIES",
      courseType: "Project Only",
      ltpjc: "0 0 0 0 0.0",
      category: "Non - Graded Mandatory Courses",
      courseOption: "Regular",
      classId: "BL2026270101068",
      slot: "NIL",
      venue: "NIL",
      facultyName: "CHANDAN KUMAR BEHERA",
      school: "SCOPE",
      registeredDate: "05-Jul-2026 13:05",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 6,
      classGroup: "General",
      courseCode: "HUM0002",
      courseTitle: "Swachh Bharat",
      courseType: "Project Only",
      ltpjc: "0 0 0 1 1.0",
      category: "Non - Graded Mandatory Courses",
      courseOption: "Regular",
      classId: "BL2026270101186",
      slot: "NIL",
      venue: "NIL",
      facultyName: "DIPANKAR SUTRADHAR",
      school: "SASL",
      registeredDate: "05-Jul-2026 13:24",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 7,
      classGroup: "General",
      courseCode: "HUM0003",
      courseTitle: "INDIAN CONSTITUTION",
      courseType: "Lecture and Tutorial  Hours Only",
      ltpjc: "1 1 0 0 2.0",
      category: "Non - Graded Mandatory Courses",
      courseOption: "Regular",
      classId: "BL2026270101203",
      slot: "A11",
      venue: "CR-001",
      facultyName: "JAGRITI GUPTA",
      school: "SASL",
      registeredDate: "05-Jul-2026 13:03",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 8,
      classGroup: "General",
      courseCode: "HUM1012",
      courseTitle: "Logic And Language Structure",
      courseType: "Lecture and Tutorial  Hours Only",
      ltpjc: "2 1 0 0 3.0",
      category: "University Elective - Humanities, Social Sciences and Management Electives",
      courseOption: "Regular",
      classId: "BL2026270100259",
      slot: "B21+E14",
      venue: "AB02-301",
      facultyName: "VELMANI R",
      school: "SCAI",
      registeredDate: "05-Jul-2026 13:02",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 9,
      classGroup: "General",
      courseCode: "MAT2002",
      courseTitle: "Discrete Mathematics and Graph Theory",
      courseType: "Lecture and Tutorial  Hours Only",
      ltpjc: "3 1 0 0 4.0",
      category: "University Core - Natural Science Core",
      courseOption: "Regular",
      classId: "BL2026270100033",
      slot: "A14+D11+D12",
      venue: "AB-230",
      facultyName: "GIRIJA P",
      school: "SASL",
      registeredDate: "05-Jul-2026 13:01",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
    {
      slNo: 10,
      classGroup: "General",
      courseCode: "SST1003",
      courseTitle: "Professional Communication Skills for Engineers",
      courseType: "Practical Hours Only",
      ltpjc: "0 0 1 0 1.0",
      category: "University Core - Skill Development Courses",
      courseOption: "Regular",
      classId: "BL2026270100618",
      slot: "A13",
      venue: "AB-102",
      facultyName: "DEV BRAT GUPTA",
      school: "SASL",
      registeredDate: "05-Jul-2026 13:06",
      attendanceDate: "06-Jul-2026",
      attendanceType: "Manual",
      status: "Registered and Approved",
    },
  ],
  weeklySchedule: [
    {
      day: "MON",
      theoryType: "THEORY",
      slots: {
        slot1: { slotName: "A11", courseCode: "HUM0003", type: "LT", venue: "CR-001", batch: "ALL", isBooked: true },
        slot2: { slotName: "B11", isBooked: false },
        slot3: { slotName: "C11", courseCode: "ECE2002", type: "LTP", venue: "AB-331", batch: "ALL", isBooked: true },
        lunch: "Lunch",
        slot4: { slotName: "A21", isBooked: false },
        slot5: { slotName: "A14", courseCode: "MAT2002", type: "LT", venue: "AB-230", batch: "ALL", isBooked: true },
        slot6: { slotName: "B21", courseCode: "HUM1012", type: "LT", venue: "AB02-301", batch: "ALL", isBooked: true },
        slot7: { slotName: "C21", courseCode: "CSE2002", type: "LTP", venue: "AB02-404", batch: "ALL", isBooked: true },
      },
    },
    {
      day: "TUE",
      theoryType: "THEORY",
      slots: {
        slot1: { slotName: "D11", courseCode: "MAT2002", type: "LT", venue: "AB-230", batch: "ALL", isBooked: true },
        slot2: { slotName: "E11", isBooked: false },
        slot3: { slotName: "F11", courseCode: "CSE2002", type: "LTP", venue: "AB02-404", batch: "ALL", isBooked: true },
        lunch: "Lunch",
        slot4: { slotName: "D21", courseCode: "CSA2001", type: "LTP", venue: "AB02-103", batch: "ALL", isBooked: true },
        slot5: { slotName: "E14", courseCode: "HUM1012", type: "LT", venue: "AB02-301", batch: "ALL", isBooked: true },
        slot6: { slotName: "E21", isBooked: false },
        slot7: { slotName: "F21", isBooked: false },
      },
    },
    {
      day: "WED",
      theoryType: "THEORY",
      slots: {
        slot1: { slotName: "A12", isBooked: false },
        slot2: { slotName: "B12", isBooked: false },
        slot3: { slotName: "C12", courseCode: "ECE2002", type: "LTP", venue: "AB-331", batch: "ALL", isBooked: true },
        lunch: "Lunch",
        slot4: { slotName: "A22", isBooked: false },
        slot5: { slotName: "B14", courseCode: "CSA2001", type: "LTP", venue: "AB02-103", batch: "ALL", isBooked: true },
        slot6: { slotName: "B22", isBooked: false },
        slot7: { slotName: "A24", isBooked: false },
      },
    },
    {
      day: "THU",
      theoryType: "THEORY",
      slots: {
        slot1: { slotName: "D12", courseCode: "MAT2002", type: "LT", venue: "AB-230", batch: "ALL", isBooked: true },
        slot2: { slotName: "E12", isBooked: false },
        slot3: { slotName: "F12", courseCode: "CSE2002", type: "LTP", venue: "AB02-404", batch: "ALL", isBooked: true },
        lunch: "Lunch",
        slot4: { slotName: "D22", isBooked: false },
        slot5: { slotName: "F14", isBooked: false },
        slot6: { slotName: "E22", isBooked: false },
        slot7: { slotName: "F22", isBooked: false },
      },
    },
    {
      day: "FRI",
      theoryType: "THEORY",
      slots: {
        slot1: { slotName: "A13", courseCode: "SST1003", type: "P", venue: "AB-102", batch: "ALL", isBooked: true },
        slot2: { slotName: "B13", isBooked: false },
        slot3: { slotName: "C13", courseCode: "ECE2002", type: "LTP", venue: "AB-331", batch: "ALL", isBooked: true },
        lunch: "Lunch",
        slot4: { slotName: "A23", isBooked: false },
        slot5: { slotName: "C14", isBooked: false },
        slot6: { slotName: "B23", courseCode: "CSA2001", type: "LTP", venue: "AB02-103", batch: "ALL", isBooked: true },
        slot7: { slotName: "B24", isBooked: false },
      },
    },
    {
      day: "SAT",
      theoryType: "THEORY",
      slots: {
        slot1: { slotName: "D13", isBooked: false },
        slot2: { slotName: "E13", isBooked: false },
        slot3: { slotName: "F13", isBooked: false },
        lunch: "Lunch",
        slot4: { slotName: "D23", isBooked: false },
        slot5: { slotName: "D14", isBooked: false },
        slot6: { slotName: "D24", isBooked: false },
        slot7: { slotName: "E23", isBooked: false },
      },
    },
  ],
};

export default function Timetable() {
  const [selectedSemester, setSelectedSemester] = useState<string>(
    mockTimetableData.currentSemester
  );

  return (
    <div className="bootstrap3-iso w-full" id="page-wrapper">
      <div id="main-section" className="w-full">
        <div className="container-fluid max-w-7xl mx-auto px-1 sm:px-3 py-2">
          <div className="card bg-white border border-[#d2d6de] border-t-[3px] border-t-[#3c8dbc] shadow-sm mb-6 rounded-none">
            
            {/* Card Header */}
            <div className="card-header primaryBorderTop px-4 py-3 border-b border-[#f4f4f4]">
              <strong className="fw-bold text-lg sm:text-xl text-[#333333]">
                Time Table
              </strong>
            </div>

            <div className="card-body p-3 sm:p-5">
              {/* Semester Selector Form */}
              <form
                className="row col-12 mx-auto mb-4"
                id="studentTimeTable"
                name="studentTimeTable"
                method="post"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="w-28 sm:text-right font-bold text-gray-700">
                    <label className="form-label">Semester</label>
                  </div>
                  <div className="w-full sm:w-80">
                    <select
                      className="form-select w-full border border-gray-300 rounded px-3 py-1.5 bg-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="semesterSubId"
                      id="semesterSubId"
                      value={selectedSemester}
                      onChange={(e) => setSelectedSemester(e.target.value)}
                    >
                      <option value="">--Choose Semester--</option>
                      {mockTimetableData.semesters.map((sem) => (
                        <option key={sem.id} value={sem.id}>
                          {sem.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-red-600 text-xs font-semibold">
                    * Only Registered Semester
                  </div>
                </div>
              </form>

              {/* Registration Notes */}
              <div className="mb-4 text-xs text-gray-700 bg-amber-50/50 p-2.5 border-l-2 border-amber-500">
                <span className="font-bold text-red-600 block mb-1">Note:</span>
                <ul className="list-disc list-inside space-y-1 text-justify">
                  <li>
                    Students are required to generate the invoice and then
                    proceed to pay the required course fee. Registration is
                    confirmed only if status of the course is{" "}
                    <strong className="text-green-700 font-bold">
                      &apos;Registered and Approved&apos;
                    </strong>{" "}
                    (in regular cases) or{" "}
                    <strong className="text-green-700 font-bold">
                      &apos;Registered, Invoice Generated, Fees Paid and
                      Approved&apos;
                    </strong>{" "}
                    (when there is a requirement for course fee payment).
                  </li>
                </ul>
              </div>

              {/* Table 1: Registered Courses Summary */}
              <div className="overflow-x-auto mb-6">
                <table
                  className="table w-full border-collapse text-xs border border-[#ddd] text-center"
                  style={{ backgroundColor: "#fff", fontSize: "12px" }}
                >
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#3c8dbc",
                        color: "#ffffff",
                        border: "1px solid #b2b2b2",
                      }}
                      className="font-bold text-white text-center"
                    >
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[3%]">
                        Sl.No
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[6%]">
                        Class Group
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[22%]">
                        Course
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[7%]">
                        L T P J C
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[12%]">
                        Category
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[7%]">
                        Course Option
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[10%]">
                        Class Id
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[10%]">
                        Slot/ Venue
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[12%]">
                        Faculty Details
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[10%]">
                        Registered / Updated Date &amp; Time
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[8%]">
                        Attendance Date/ Type
                      </th>
                      <th className="p-1.5 border-r border-[#b2b2b2] text-center w-[10%]">
                        Status &amp; Ref. No.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTimetableData.registeredCourses.map((c) => (
                      <tr
                        key={c.courseCode}
                        className="border-b border-[#b2b2b2] hover:bg-slate-50 transition-colors"
                      >
                        <td className="p-1.5 border-r border-[#b2b2b2] text-center align-middle">
                          {c.slNo}
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-left align-middle">
                          {c.classGroup}
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-left align-middle">
                          <p className="m-0 font-medium">
                            {c.courseCode} - {c.courseTitle}
                          </p>
                          <p className="m-0 font-bold text-gray-700 text-[11px]">
                            ( {c.courseType} )
                          </p>
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-center align-middle whitespace-nowrap">
                          {c.ltpjc}
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-center align-middle">
                          {c.category}
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-center align-middle">
                          {c.courseOption}
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-center align-middle font-mono">
                          {c.classId}
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-center align-middle">
                          <p className="m-0">{c.slot} - </p>
                          <p className="m-0 font-bold">{c.venue}</p>
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-left align-middle">
                          <p className="m-0">{c.facultyName} - </p>
                          <p className="m-0 font-bold">{c.school}</p>
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-center align-middle whitespace-nowrap">
                          {c.registeredDate}
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-center align-middle whitespace-nowrap">
                          <p className="m-0">
                            <span>{c.attendanceDate}</span>
                            <br />
                            <strong> - {c.attendanceType}</strong>
                          </p>
                        </td>
                        <td className="p-1.5 border-r border-[#b2b2b2] text-left align-middle">
                          <p className="m-0 text-green-700 font-bold">
                            {c.status}
                          </p>
                        </td>
                      </tr>
                    ))}

                    {/* Total Credits Footer Row */}
                    <tr
                      style={{
                        backgroundColor: "#3c8dbc",
                        color: "#ffffff",
                      }}
                      className="font-bold border-t-2 border-[#b2b2b2]"
                    >
                      <td
                        colSpan={12}
                        className="p-2 text-center text-sm tracking-wide"
                      >
                        <span>Total Number Of Credits:</span>{" "}
                        <span className="font-extrabold text-base ml-1">
                          {mockTimetableData.totalCredits}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2: Weekly Schedule Grid (Time Table) */}
              <div
                className="table-responsive mt-6 overflow-x-auto"
                id="ttview"
              >
                <div className="mb-2 font-bold text-sm text-[#333333]">
                  Class Timetable Schedule
                </div>
                <table
                  id="timeTableStyle"
                  className="w-full border-2 border-[#3c8dbc] text-center text-xs border-collapse"
                  style={{ border: "2px solid #3c8dbc", fontSize: "12px" }}
                >
                  <tbody>
                    {/* Header Row 1: Start Times */}
                    <tr className="border-b border-[#3c8dbc]">
                      <td
                        rowSpan={2}
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                          width: "60px",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        THEORY
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                          width: "55px",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        Start
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        08:30
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        10:05
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        11:40
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                          width: "65px",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        Lunch
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        13:15
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        14:50
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        16:25
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        18:00
                      </td>
                    </tr>

                    {/* Header Row 2: End Times */}
                    <tr className="border-b-2 border-[#3c8dbc]">
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        End
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        10:00
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        11:35
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        13:10
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        Lunch
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        14:45
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        16:20
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        17:55
                      </td>
                      <td
                        style={{
                          backgroundColor: "#e2e2e2",
                          border: "1px solid #3c8dbc",
                        }}
                        className="p-1.5 font-bold text-center align-middle text-gray-800"
                      >
                        19:30
                      </td>
                    </tr>

                    {/* Day Rows */}
                    {mockTimetableData.weeklySchedule.map((dayItem) => (
                      <tr
                        key={dayItem.day}
                        style={{ backgroundColor: "#FFFFFF" }}
                        className="border-b border-[#3c8dbc]"
                      >
                        {/* Day Column */}
                        <td
                          style={{
                            backgroundColor: "#e2e2e2",
                            border: "1px solid #3c8dbc",
                          }}
                          className="p-1.5 font-bold text-center align-middle text-gray-800"
                        >
                          {dayItem.day}
                        </td>

                        {/* Theory / Lab column */}
                        <td
                          style={{
                            backgroundColor: "#e2e2e2",
                            border: "1px solid #3c8dbc",
                          }}
                          className="p-1.5 font-bold text-center align-middle text-gray-800"
                        >
                          {dayItem.theoryType}
                        </td>

                        {/* Slot 1 */}
                        {renderSlotCell(dayItem.slots.slot1)}

                        {/* Slot 2 */}
                        {renderSlotCell(dayItem.slots.slot2)}

                        {/* Slot 3 */}
                        {renderSlotCell(dayItem.slots.slot3)}

                        {/* Lunch */}
                        <td
                          style={{
                            backgroundColor: "#e2e2e2",
                            border: "1px solid #3c8dbc",
                          }}
                          className="p-1.5 font-bold text-center align-middle text-gray-800"
                        >
                          {dayItem.slots.lunch}
                        </td>

                        {/* Slot 4 */}
                        {renderSlotCell(dayItem.slots.slot4)}

                        {/* Slot 5 */}
                        {renderSlotCell(dayItem.slots.slot5)}

                        {/* Slot 6 */}
                        {renderSlotCell(dayItem.slots.slot6)}

                        {/* Slot 7 */}
                        {renderSlotCell(dayItem.slots.slot7)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper to render individual slot cells matching legacy VTOP style
function renderSlotCell(slot: TimetableSlot) {
  if (slot.isBooked) {
    const formattedText = `${slot.slotName}-${slot.courseCode}-${slot.type}-${slot.venue}-${slot.batch}`;
    return (
      <td
        style={{
          backgroundColor: "#FC6C85",
          border: "1px solid #3c8dbc",
          color: "#000000",
        }}
        className="p-1.5 text-center align-middle font-bold text-[11px] leading-tight cursor-default shadow-inner"
        title={formattedText}
      >
        {formattedText}
      </td>
    );
  }

  // Unbooked / blank slot cell
  return (
    <td
      style={{
        border: "1px solid #3c8dbc",
        backgroundColor: "#ffffff",
        color: "#555555",
      }}
      className="p-1.5 text-center align-middle text-xs"
    >
      {slot.slotName}
    </td>
  );
}
