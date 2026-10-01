import React from "react";
import { Zap } from "lucide-react";

interface Course {
  id: number;
  code: string;
  name: string;
  type: string;
  attendance: number;
  remarks: string;
  status: "excellent" | "critical";
}

const courses: Course[] = [
  {
    id: 1,
    code: "CSA2001",
    name: "Fundamentals in AI and ML",
    type: "LTP",
    attendance: 100.0,
    remarks: "Excellent - Keep going",
    status: "excellent",
  },
  {
    id: 2,
    code: "CSE2002",
    name: "Data Structures and Algorithms",
    type: "LTP",
    attendance: 100.0,
    remarks: "Excellent - Keep going",
    status: "excellent",
  },
  {
    id: 3,
    code: "DSN2098",
    name: "Project Exhibition - I",
    type: "PJ",
    attendance: 0.0,
    remarks: "Critical - must improve",
    status: "critical",
  },
  {
    id: 4,
    code: "ECE2002",
    name: "Digital Logic Design",
    type: "LTP",
    attendance: 100.0,
    remarks: "Excellent - Keep going",
    status: "excellent",
  },
  {
    id: 5,
    code: "EXC0001",
    name: "EXTRA CURRICULAR ACTIVITIES",
    type: "PJ",
    attendance: 0.0,
    remarks: "Critical - must improve",
    status: "critical",
  },
  {
    id: 6,
    code: "HUM0002",
    name: "Swachh Bharat",
    type: "PJ",
    attendance: 0.0,
    remarks: "Critical - must improve",
    status: "critical",
  },
  {
    id: 7,
    code: "HUM0003",
    name: "INDIAN CONSTITUTION",
    type: "LT",
    attendance: 100.0,
    remarks: "Excellent - Keep going",
    status: "excellent",
  },
  {
    id: 8,
    code: "HUM1012",
    name: "Logic And Language Structure",
    type: "LT",
    attendance: 100.0,
    remarks: "Excellent - Keep going",
    status: "excellent",
  },
  {
    id: 9,
    code: "MAT2002",
    name: "Discrete Mathematics and Graph Theory",
    type: "LT",
    attendance: 100.0,
    remarks: "Excellent - Keep going",
    status: "excellent",
  },
  {
    id: 10,
    code: "SST1003",
    name: "Professional Communication Skills for Engineers",
    type: "P",
    attendance: 100.0,
    remarks: "Excellent - Keep going",
    status: "excellent",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left 8 Cols: Course Details Table & Spotlight */}
        <div className="lg:col-span-8 space-y-4">
          {/* Current Semester Card */}
          <div className="bg-white rounded border border-gray-300 shadow-xs overflow-hidden">
            <div className="border-t-4 border-t-[#1B365D] bg-gray-50 px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200">
              <span className="text-xs sm:text-sm font-bold text-[#1B365D] uppercase tracking-wide">
                CURRENT SEMESTER COURSE REGISTRATION DETAILS
              </span>
              <span className="bg-amber-100 text-red-700 font-bold text-xs px-2.5 py-0.5 rounded text-center border border-amber-300/50">
                FALLSEM2026-27
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase font-semibold border-b border-gray-200">
                  <tr className="text-center">
                    <th className="py-2 px-3 w-10">#</th>
                    <th className="py-2 px-3 text-left">Code - Course Name</th>
                    <th className="py-2 px-3">Type</th>
                    <th className="py-2 px-3">Attendance</th>
                    <th className="py-2 px-3 text-left">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-2 px-3 text-center font-bold text-gray-600">
                        {course.id}
                      </td>
                      <td className="py-2 px-3 text-nowrap">
                        <span className="font-bold text-gray-900 mr-1.5">
                          {course.code}
                        </span>
                        -
                        <span className="ml-1.5 text-gray-700">
                          {course.name}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-center italic font-bold text-blue-700">
                        {course.type}
                      </td>
                      <td className="py-2 px-3 text-center font-bold">
                        <span
                          className={
                            course.status === "excellent"
                              ? "text-emerald-600 font-bold"
                              : "text-red-600 font-bold"
                          }
                        >
                          {course.attendance.toFixed(1)}
                        </span>
                      </td>
                      <td className="py-2 px-3 text-nowrap">
                        <span
                          className={
                            course.status === "excellent"
                              ? "text-emerald-600 font-bold"
                              : "text-red-600 font-bold"
                          }
                        >
                          {course.remarks}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Spotlight Section */}
          <div className="bg-white rounded border border-gray-300 shadow-xs p-4">
            <div className="border-t-2 border-t-[#1B365D] pt-2 mb-3">
              <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wide">
                SPOT-LIGHT
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                  Academics
                </span>
                <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  1
                </span>
              </div>
              <ul className="text-xs divide-y divide-gray-100">
                <li className="py-2 flex items-start space-x-2">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <a
                    href="https://dev.vitbhopal.ac.in/Fall%20Semester%202026-27_FT_TEE_endfeedback/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:underline font-medium"
                  >
                    Fall Semester TEE Feedback Link (FT)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right 4 Cols: Student Profile Summary, Proctor Message & CGPA / Credits */}
        <div className="lg:col-span-4 space-y-4">
          {/* Student Profile Quick Summary Card */}
          <div className="bg-white rounded border border-gray-300 shadow-xs overflow-hidden">
            <div className="border-t-4 border-t-[#1B365D] bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wide">
                Student Profile
              </span>
              <a
                href="/dashboard/profile"
                className="text-[11px] text-blue-700 font-bold hover:underline"
              >
                View Full &rarr;
              </a>
            </div>
            <div className="p-3 text-xs space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-14 rounded border border-blue-300 overflow-hidden shrink-0 bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/student-avatar.jpg"
                    alt="Kumar Harshvardhan"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    KUMAR HARSHVARDHAN
                  </div>
                  <div className="font-mono text-blue-700 font-bold">
                    25MIM10100
                  </div>
                  <div className="text-[11px] text-gray-500">
                    MTECH5 - AI (SCAI)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proctor Message Card */}
          <div className="bg-white rounded border border-gray-300 shadow-xs">
            <div className="border-t-4 border-t-[#1B365D] bg-gray-50 px-4 py-2 border-b border-gray-200">
              <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wide">
                PROCTOR Message
              </span>
            </div>
            <div className="p-4 text-xs text-gray-600 italic">
              No new broadcast messages from proctor.
            </div>
          </div>

          {/* CGPA and Credit Status Card */}
          <div className="bg-white rounded border border-gray-300 shadow-xs">
            <div className="border-t-4 border-t-[#1B365D] bg-gray-50 px-4 py-2 border-b border-gray-200">
              <span className="text-xs font-bold text-[#1B365D] uppercase tracking-wide">
                CGPA and CREDIT Status
              </span>
            </div>
            <div className="p-3 text-xs font-bold divide-y divide-gray-100">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Total Credits Required :</span>
                <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded text-center min-w-[70px]">
                  229
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Earned Credits :</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded text-center min-w-[70px]">
                  20.0
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Current CGPA :</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-center min-w-[70px]">
                  8.3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
