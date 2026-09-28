"use client";

import React, { useState } from "react";

export interface CalendarDayEvent {
  dayNumber: number | null;
  status?: string;
  description?: string;
  statusColor?: string;
  descColor?: string;
}

export interface MonthCalendarData {
  monthName: string;
  monthYear: string;
  buttonLabel: string;
  totalDays: number;
  days: CalendarDayEvent[];
}

// Grouped mock calendar data for the 5-month Fall Semester 2026-27
export const calendarData: Record<string, MonthCalendarData> = {
  July: {
    monthName: "JULY",
    monthYear: "JULY 2026",
    buttonLabel: "JUL-2026",
    totalDays: 31,
    days: [
      // Week 1 (Starts Wednesday, 3 empty cells)
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      {
        dayNumber: 1,
        status: "Instructional Day",
        description: "(Semester Commences & Classes Begin)",
      },
      { dayNumber: 2, status: "Instructional Day", description: "" },
      { dayNumber: 3, status: "Instructional Day", description: "" },
      {
        dayNumber: 4,
        status: "Instructional Day",
        description: "(Remote Learning - Class/CAM Activities)",
      },
      // Week 2
      { dayNumber: 5, status: "No Instructional Day", description: "" },
      { dayNumber: 6, status: "Instructional Day", description: "" },
      { dayNumber: 7, status: "Instructional Day", description: "" },
      { dayNumber: 8, status: "Instructional Day", description: "" },
      { dayNumber: 9, status: "Instructional Day", description: "" },
      { dayNumber: 10, status: "Instructional Day", description: "" },
      {
        dayNumber: 11,
        status: "Instructional Day",
        description: "(Remote Learning - Class/CAM Activities)",
      },
      // Week 3
      { dayNumber: 12, status: "No Instructional Day", description: "" },
      { dayNumber: 13, status: "Instructional Day", description: "" },
      { dayNumber: 14, status: "Instructional Day", description: "" },
      { dayNumber: 15, status: "Instructional Day", description: "" },
      { dayNumber: 16, status: "Holiday", description: "(Muharram - Holiday)" },
      { dayNumber: 17, status: "Instructional Day", description: "" },
      {
        dayNumber: 18,
        status: "Instructional Day",
        description: "(Remote Learning - Class/CAM Activities)",
      },
      // Week 4
      { dayNumber: 19, status: "No Instructional Day", description: "" },
      { dayNumber: 20, status: "Instructional Day", description: "" },
      { dayNumber: 21, status: "Instructional Day", description: "" },
      { dayNumber: 22, status: "Instructional Day", description: "" },
      { dayNumber: 23, status: "Instructional Day", description: "" },
      { dayNumber: 24, status: "Instructional Day", description: "" },
      {
        dayNumber: 25,
        status: "Instructional Day",
        description: "(Remote Learning - Class/CAM Activities)",
      },
      // Week 5
      { dayNumber: 26, status: "No Instructional Day", description: "" },
      { dayNumber: 27, status: "Instructional Day", description: "" },
      { dayNumber: 28, status: "Instructional Day", description: "" },
      { dayNumber: 29, status: "Instructional Day", description: "" },
      { dayNumber: 30, status: "Instructional Day", description: "" },
      { dayNumber: 31, status: "Instructional Day", description: "" },
      { dayNumber: null },
    ],
  },
  August: {
    monthName: "AUGUST",
    monthYear: "AUGUST 2026",
    buttonLabel: "AUG-2026",
    totalDays: 31,
    days: [
      // Week 1 (Starts Saturday, 6 empty cells)
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      {
        dayNumber: 1,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 2
      { dayNumber: 2, status: "No Instructional Day", description: "" },
      { dayNumber: 3, status: "Instructional Day", description: "" },
      { dayNumber: 4, status: "Instructional Day", description: "" },
      { dayNumber: 5, status: "Instructional Day", description: "" },
      { dayNumber: 6, status: "Instructional Day", description: "" },
      { dayNumber: 7, status: "Instructional Day", description: "" },
      {
        dayNumber: 8,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 3 (CAT-I Week)
      { dayNumber: 9, status: "No Instructional Day", description: "" },
      {
        dayNumber: 10,
        status: "CAT - I",
        description: "(Continuous Assessment Test-1 (CAT-1))",
      },
      {
        dayNumber: 11,
        status: "CAT - I",
        description: "(Continuous Assessment Test-1 (CAT-1))",
      },
      {
        dayNumber: 12,
        status: "CAT - I",
        description: "(Continuous Assessment Test-1 (CAT-1))",
      },
      {
        dayNumber: 13,
        status: "CAT - I",
        description: "(Continuous Assessment Test-1 (CAT-1))",
      },
      {
        dayNumber: 14,
        status: "CAT - I",
        description: "(Continuous Assessment Test-1 (CAT-1))",
      },
      {
        dayNumber: 15,
        status: "Holiday",
        description: "(Independence Day - Holiday)",
      },
      // Week 4
      { dayNumber: 16, status: "No Instructional Day", description: "" },
      {
        dayNumber: 17,
        status: "CAT - I",
        description: "(Continuous Assessment Test-1 (CAT-1))",
      },
      { dayNumber: 18, status: "Instructional Day", description: "" },
      { dayNumber: 19, status: "Instructional Day", description: "" },
      { dayNumber: 20, status: "Instructional Day", description: "" },
      { dayNumber: 21, status: "Instructional Day", description: "" },
      {
        dayNumber: 22,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 5
      { dayNumber: 23, status: "No Instructional Day", description: "" },
      { dayNumber: 24, status: "Instructional Day", description: "" },
      { dayNumber: 25, status: "Instructional Day", description: "" },
      { dayNumber: 26, status: "Instructional Day", description: "" },
      { dayNumber: 27, status: "Instructional Day", description: "" },
      {
        dayNumber: 28,
        status: "Holiday",
        description: "(Raksha Bandhan - Holiday)",
      },
      {
        dayNumber: 29,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 6
      { dayNumber: 30, status: "No Instructional Day", description: "" },
      { dayNumber: 31, status: "Instructional Day", description: "" },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
    ],
  },
  September: {
    monthName: "SEPTEMBER",
    monthYear: "SEPTEMBER 2026",
    buttonLabel: "SEP-2026",
    totalDays: 30,
    days: [
      // Week 1 (Starts Tuesday, 2 empty cells)
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: 1, status: "Instructional Day", description: "" },
      { dayNumber: 2, status: "Instructional Day", description: "" },
      { dayNumber: 3, status: "Instructional Day", description: "" },
      {
        dayNumber: 4,
        status: "Holiday",
        description: "(Janmashtami - Holiday)",
      },
      {
        dayNumber: 5,
        status: "Instructional Day",
        description: "(Remote Learning - Class/CAM Activities Monday)",
      },
      // Week 2
      { dayNumber: 6, status: "No Instructional Day", description: "" },
      { dayNumber: 7, status: "Instructional Day", description: "" },
      { dayNumber: 8, status: "Instructional Day", description: "" },
      { dayNumber: 9, status: "Instructional Day", description: "" },
      { dayNumber: 10, status: "Instructional Day", description: "" },
      { dayNumber: 11, status: "Instructional Day", description: "" },
      {
        dayNumber: 12,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 3
      { dayNumber: 13, status: "No Instructional Day", description: "" },
      {
        dayNumber: 14,
        status: "Holiday",
        description: "(Ganesh / Vinayakar Chaturthi - Holiday)",
      },
      { dayNumber: 15, status: "Instructional Day", description: "" },
      { dayNumber: 16, status: "Instructional Day", description: "" },
      { dayNumber: 17, status: "Instructional Day", description: "" },
      { dayNumber: 18, status: "Instructional Day", description: "" },
      {
        dayNumber: 19,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 4 (CAT-II Week)
      { dayNumber: 20, status: "No Instructional Day", description: "" },
      {
        dayNumber: 21,
        status: "CAT - II",
        description: "(Continuous Assessment Test-2 (CAT-2))",
      },
      {
        dayNumber: 22,
        status: "CAT - II",
        description: "(Continuous Assessment Test-2 (CAT-2))",
      },
      {
        dayNumber: 23,
        status: "CAT - II",
        description: "(Continuous Assessment Test-2 (CAT-2))",
      },
      {
        dayNumber: 24,
        status: "CAT - II",
        description: "(Continuous Assessment Test-2 (CAT-2))",
      },
      {
        dayNumber: 25,
        status: "CAT - II",
        description: "(Continuous Assessment Test-2 (CAT-2))",
      },
      {
        dayNumber: 26,
        status: "CAT - II",
        description: "(Continuous Assessment Test-2 (CAT-2))",
      },
      // Week 5
      { dayNumber: 27, status: "No Instructional Day", description: "" },
      {
        dayNumber: 28,
        status: "CAT - II",
        description: "(Continuous Assessment Test-2 (CAT-2))",
      },
      { dayNumber: 29, status: "Instructional Day", description: "" },
      { dayNumber: 30, status: "Instructional Day", description: "" },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
    ],
  },
  October: {
    monthName: "OCTOBER",
    monthYear: "OCTOBER 2026",
    buttonLabel: "OCT-2026",
    totalDays: 31,
    days: [
      // Week 1 (Starts Thursday, 4 empty cells)
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: 1, status: "Instructional Day", description: "" },
      {
        dayNumber: 2,
        status: "Holiday",
        description: "(Mahatma Gandhi Jayanti - Holiday)",
      },
      {
        dayNumber: 3,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 2
      { dayNumber: 4, status: "No Instructional Day", description: "" },
      { dayNumber: 5, status: "Instructional Day", description: "" },
      { dayNumber: 6, status: "Instructional Day", description: "" },
      { dayNumber: 7, status: "Instructional Day", description: "" },
      { dayNumber: 8, status: "Instructional Day", description: "" },
      { dayNumber: 9, status: "Instructional Day", description: "" },
      {
        dayNumber: 10,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 3
      { dayNumber: 11, status: "No Instructional Day", description: "" },
      { dayNumber: 12, status: "Instructional Day", description: "" },
      { dayNumber: 13, status: "Instructional Day", description: "" },
      { dayNumber: 14, status: "Instructional Day", description: "" },
      { dayNumber: 15, status: "Instructional Day", description: "" },
      { dayNumber: 16, status: "Instructional Day", description: "" },
      {
        dayNumber: 17,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 4 (Dussehra Week)
      { dayNumber: 18, status: "No Instructional Day", description: "" },
      {
        dayNumber: 19,
        status: "Holiday",
        description: "(Maha Navami - Holiday)",
      },
      {
        dayNumber: 20,
        status: "Holiday",
        description: "(Vijaya Dashami / Dussehra - Holiday)",
      },
      { dayNumber: 21, status: "Instructional Day", description: "" },
      { dayNumber: 22, status: "Instructional Day", description: "" },
      { dayNumber: 23, status: "Instructional Day", description: "" },
      {
        dayNumber: 24,
        status: "Instructional Day",
        description: "(Remote Learning - Class or CAM Activities)",
      },
      // Week 5 (Diwali Week)
      { dayNumber: 25, status: "No Instructional Day", description: "" },
      { dayNumber: 26, status: "Instructional Day", description: "" },
      { dayNumber: 27, status: "Instructional Day", description: "" },
      { dayNumber: 28, status: "Instructional Day", description: "" },
      {
        dayNumber: 29,
        status: "Holiday",
        description: "(Deepavali Eve - Holiday)",
      },
      {
        dayNumber: 30,
        status: "Holiday",
        description: "(Deepavali - Holiday)",
      },
      {
        dayNumber: 31,
        status: "Holiday",
        description: "(Deepavali Festival Holiday)",
      },
    ],
  },
  November: {
    monthName: "NOVEMBER",
    monthYear: "NOVEMBER 2026",
    buttonLabel: "NOV-2026",
    totalDays: 30,
    days: [
      // Week 1 (Starts Sunday, 0 empty cells)
      { dayNumber: 1, status: "No Instructional Day", description: "" },
      {
        dayNumber: 2,
        status: "Instructional Day",
        description: "(Last Instructional Day for Lab Courses)",
      },
      {
        dayNumber: 3,
        status: "Instructional Day",
        description: "(Last Instructional Day for Theory Courses)",
      },
      {
        dayNumber: 4,
        status: "Exam Preparation",
        description: "(Study Leave / Model Practical Examination)",
      },
      {
        dayNumber: 5,
        status: "Exam Preparation",
        description: "(Study Leave)",
      },
      {
        dayNumber: 6,
        status: "Exam Preparation",
        description: "(Study Leave)",
      },
      {
        dayNumber: 7,
        status: "Exam Preparation",
        description: "(Study Leave)",
      },
      // Week 2 (FAT Exams)
      { dayNumber: 8, status: "No Instructional Day", description: "" },
      {
        dayNumber: 9,
        status: "FAT",
        description: "(Final Assessment Test (FAT) Commences)",
      },
      {
        dayNumber: 10,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 11,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 12,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 13,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 14,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      // Week 3
      { dayNumber: 15, status: "No Instructional Day", description: "" },
      {
        dayNumber: 16,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 17,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 18,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 19,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 20,
        status: "FAT",
        description: "(Final Assessment Test (FAT))",
      },
      {
        dayNumber: 21,
        status: "FAT",
        description: "(Final Assessment Test (FAT) Concludes)",
      },
      // Week 4
      { dayNumber: 22, status: "No Instructional Day", description: "" },
      {
        dayNumber: 23,
        status: "Holiday",
        description: "(Guru Nanak Jayanti - Holiday)",
      },
      {
        dayNumber: 24,
        status: "Vacation",
        description: "(Winter Vacation Commences)",
      },
      { dayNumber: 25, status: "Vacation", description: "(Winter Vacation)" },
      { dayNumber: 26, status: "Vacation", description: "(Winter Vacation)" },
      { dayNumber: 27, status: "Vacation", description: "(Winter Vacation)" },
      { dayNumber: 28, status: "Vacation", description: "(Winter Vacation)" },
      // Week 5
      { dayNumber: 29, status: "No Instructional Day", description: "" },
      { dayNumber: 30, status: "Vacation", description: "(Winter Vacation)" },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
      { dayNumber: null },
    ],
  },
};

export const monthsList = [
  "July",
  "August",
  "September",
  "October",
  "November",
] as const;

export type MonthKey = (typeof monthsList)[number];

export default function AcademicCalendar() {
  const [activeMonth, setActiveMonth] = useState<MonthKey>("September");
  const [selectedSemester, setSelectedSemester] =
    useState<string>("BL20262701");
  const [selectedClassGroup, setSelectedClassGroup] =
    useState<string>("COMB");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const currentMonthData = calendarData[activeMonth];

  const handleMonthChange = (month: MonthKey) => {
    setIsTransitioning(true);
    setActiveMonth(month);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 150);
  };

  // Group the days array into 7-day chunks (weeks) for table row generation
  const weeks: CalendarDayEvent[][] = [];
  const daysCopy = [...currentMonthData.days];
  while (daysCopy.length > 0) {
    weeks.push(daysCopy.splice(0, 7));
  }

  return (
    <div className="w-full bg-[#f4f6f9] min-h-screen p-3 text-[#333333] font-sans text-xs">
      <div className="max-w-[1400px] mx-auto">
        {/* Legacy AdminLTE Box Container */}
        <div className="bg-white border border-[#d2d6de] border-t-4 border-t-[#00c0ef] shadow-sm mb-6 rounded-none">
          {/* Box Header */}
          <div className="px-4 py-3 border-b border-[#f4f4f4] flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#333333] m-0 capitalize">
              Calendar
            </h3>
          </div>

          {/* Box Body */}
          <div className="p-4">
            <form role="form" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Semester Select Row */}
              <div className="flex flex-wrap items-center">
                <label
                  htmlFor="semesterSubId"
                  className="w-full sm:w-1/4 font-bold text-[#333333] text-sm pr-4 mb-1 sm:mb-0"
                >
                  Semester
                </label>
                <div className="w-full sm:w-3/4">
                  <select
                    id="semesterSubId"
                    name="semesterSubId"
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="w-full border border-[#d2d6de] bg-white px-3 py-1.5 text-xs text-[#555] rounded-none focus:outline-none focus:border-[#3c8dbc] shadow-inner"
                  >
                    <option value="">--Choose Semester--</option>
                    <option value="BL20262701">Fall Semester 2026-27 - BPL</option>
                  </select>
                </div>
              </div>

              {/* Class Group Select Row */}
              <div className="flex flex-wrap items-center">
                <label
                  htmlFor="classGroupId"
                  className="w-full sm:w-1/4 font-bold text-[#333333] text-sm pr-4 mb-1 sm:mb-0"
                >
                  Class Group
                </label>
                <div className="w-full sm:w-3/4">
                  <select
                    id="classGroupId"
                    name="classGroupId"
                    value={selectedClassGroup}
                    onChange={(e) => setSelectedClassGroup(e.target.value)}
                    className="w-full border border-[#d2d6de] bg-white px-3 py-1.5 text-xs text-[#555] rounded-none focus:outline-none focus:border-[#3c8dbc] shadow-inner"
                  >
                    <option value="COMB">All Class Group (Combined)</option>
                    <option value="ALL">General</option>
                  </select>
                </div>
              </div>
            </form>

            {/* Month Selection Buttons */}
            <div className="mt-6 mb-4 text-center">
              <div className="inline-flex flex-wrap justify-center gap-2">
                {monthsList.map((month) => {
                  const mData = calendarData[month];
                  const isActive = activeMonth === month;
                  return (
                    <button
                      key={month}
                      type="button"
                      onClick={() => handleMonthChange(month)}
                      className={`py-1.5 px-4 text-sm font-medium rounded-none border transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#204d74] text-white border-[#122b40] shadow-inner font-bold"
                          : "bg-[#337ab7] hover:bg-[#286090] text-white border-[#2e6da4]"
                      }`}
                    >
                      {mData.buttonLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calendar Table Container */}
            <div
              id="list-wrapper"
              className="mt-4 border border-[#ddd] border-b-2 bg-white"
            >
              {/* Purple Month Header Banner */}
              <h4
                style={{ backgroundColor: "#9675ce" }}
                className="text-center m-0 text-white font-bold text-base py-2.5 tracking-wide"
              >
                {currentMonthData.monthYear}
              </h4>

              {/* Responsive Calendar Grid */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-[#ddd] min-w-[800px]">
                  <thead>
                    <tr
                      style={{ backgroundColor: "#9675ce" }}
                      className="text-white text-center font-bold"
                    >
                      <th className="p-2 border border-[#ddd] text-center w-[14.28%]">
                        Sunday
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[14.28%]">
                        Monday
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[14.28%]">
                        Tuesday
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[14.28%]">
                        Wednesday
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[14.28%]">
                        Thursday
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[14.28%]">
                        Friday
                      </th>
                      <th className="p-2 border border-[#ddd] text-center w-[14.28%]">
                        Saturday
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeks.map((week, wIdx) => (
                      <tr key={wIdx}>
                        {week.map((day, dIdx) => {
                          if (day.dayNumber === null) {
                            return (
                              <td
                                key={dIdx}
                                className="p-2.5 align-top border border-[#ddd] bg-white h-[100px] w-[14.28%]"
                              >
                                <span className="block font-bold text-black text-left"></span>
                              </td>
                            );
                          }

                          return (
                            <td
                              key={dIdx}
                              className="p-2.5 align-top border border-[#ddd] bg-white h-[100px] w-[14.28%] transition-colors hover:bg-slate-50"
                            >
                              <span className="block font-bold text-black text-left text-xs mb-1">
                                {day.dayNumber}
                              </span>
                              {day.status && (
                                <span
                                  className={`block text-xs font-semibold leading-tight ${
                                    day.status === "Holiday"
                                      ? "text-green-700"
                                      : day.status.startsWith("CAT") || day.status.startsWith("FAT")
                                      ? "text-emerald-700 font-bold"
                                      : day.status === "No Instructional Day"
                                      ? "text-green-700"
                                      : "text-green-700"
                                  }`}
                                  style={{ color: "green" }}
                                >
                                  {day.status}
                                </span>
                              )}
                              {day.description && (
                                <span
                                  className="block text-[11px] leading-tight mt-0.5"
                                  style={{ color: "#eb556e" }}
                                >
                                  {day.description}
                                </span>
                              )}
                            </td>
                          );
                        })}
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
