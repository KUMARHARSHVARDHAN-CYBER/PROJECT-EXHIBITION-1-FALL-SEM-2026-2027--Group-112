"use client";

import React, { useState } from "react";

// ==========================================
// 1. DATA CONTRACTS & STRUCTURED MOCK DATA
// ==========================================

export interface AnnouncementItem {
  id: string;
  refNo: string;
  date: string;
  category: "Academics" | "Examination" | "Placement & Training" | "Hostels" | "Events & Workshops" | "Administration";
  title: string;
  details: string;
  isNew: boolean;
  postedBy: string;
}

export const initialAnnouncements: AnnouncementItem[] = [
  {
    id: "ann-1",
    refNo: "COE/NOT/2026/089",
    date: "06-Sep-2026",
    category: "Examination",
    title: "Schedule and Guidelines for Winter Semester 2025-26 Continuous Assessment Test (CAT-II)",
    details:
      "All students are hereby notified that CAT-II exams will commence from 22nd September 2026. Hall tickets will be downloadable from the VTOP Exam Schedule page from 18th September. Students with attendance below 75% will not be permitted to take the examinations without proctor condonation.",
    isNew: true,
    postedBy: "Office of the Controller of Examinations (COE)",
  },
  {
    id: "ann-2",
    refNo: "PAT/CIR/2026/142",
    date: "05-Sep-2026",
    category: "Placement & Training",
    title: "Super Dream Campus Recruitment Drive - Microsoft India (Software Engineering & AI Labs)",
    details:
      "Microsoft India will conduct on-campus hiring for B.Tech & Integrated M.Tech (AI / CSE) graduating batches with CTC exceeding 44 LPA. Eligible students with CGPA >= 8.5 and zero standing arrears must complete mandatory registration on the PAT portal before 10th September 23:59 hrs.",
    isNew: true,
    postedBy: "Placement & Career Development Cell (PAT)",
  },
  {
    id: "ann-3",
    refNo: "ACAD/CIR/2026/201",
    date: "03-Sep-2026",
    category: "Academics",
    title: "Course Add / Drop and Slot Modification Window for Higher Semester Students",
    details:
      "The academic portal will open for slot change, audit course selection, and course drop from 12th September 10:00 AM to 14th September 05:00 PM. Changes once finalized and approved by your faculty proctor cannot be altered subsequently.",
    isNew: true,
    postedBy: "Academic Staff College & Student Affairs",
  },
  {
    id: "ann-4",
    refNo: "HOST/NOT/2026/054",
    date: "28-Aug-2026",
    category: "Hostels",
    title: "Hostel Mess Catering Committee Review and Special Festive Menu for Ganesh Chaturthi",
    details:
      "Based on student feedback from Mayuri and CRCL mess facilities, revisions to evening snacks and breakfast items have been approved by the Chief Warden. Special feast will be served on 7th September in all dining halls.",
    isNew: false,
    postedBy: "Office of the Chief Warden (Hostel Estates)",
  },
  {
    id: "ann-5",
    refNo: "SW/EVE/2026/077",
    date: "20-Aug-2026",
    category: "Events & Workshops",
    title: "ADVITIYA 2026 - Annual National Level Tech & Cultural Festival Launch & Club Registrations",
    details:
      "Registrations for core committee leads, event managers, and club organizers for the upcoming ADVITIYA 2026 festival are now officially open. Submit your proposals through your respective club faculty coordinators by 15th September.",
    isNew: false,
    postedBy: "Directorate of Student Welfare (DSW)",
  },
  {
    id: "ann-6",
    refNo: "ADM/NOT/2026/019",
    date: "15-Aug-2026",
    category: "Administration",
    title: "Mandatory Submission of Automated Permanent Academic Account Registry (APAAR ID) and ABC ID",
    details:
      "As per Ministry of Education (MoE) directives, all enrolled undergraduate and postgraduate scholars must link their 12-digit APAAR/ABC ID on the VTOP My Info module to ensure seamless credit transfer and degree certificate issuance.",
    isNew: false,
    postedBy: "University Registrar & Administration",
  },
];

// ==========================================
// 2. MAIN COMPONENT: Spotlight
// ==========================================

export default function Spotlight() {
  const [announcements] = useState<AnnouncementItem[]>(initialAnnouncements);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");

  // Filtered announcements based on search query & category
  const filteredAnnouncements = announcements.filter((item) => {
    const matchesCategory = categoryFilter === "ALL" || item.category === categoryFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.refNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.postedBy.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Action: Alert with announcement details
  const handleTitleClick = (e: React.MouseEvent, item: AnnouncementItem) => {
    e.preventDefault();
    alert(
      `--------------------------------------------------\n` +
      `VTOP SPOTLIGHT CIRCULAR DETAILS\n` +
      `--------------------------------------------------\n\n` +
      `Reference No : ${item.refNo}\n` +
      `Date         : ${item.date}\n` +
      `Category     : ${item.category}\n` +
      `Issued By    : ${item.postedBy}\n\n` +
      `TITLE:\n${item.title}\n\n` +
      `CIRCULAR TEXT:\n${item.details}\n\n` +
      `--------------------------------------------------\n` +
      `VIT Bhopal University Official Notice Board`
    );
  };

  return (
    <div
      className="bootstrap3-iso w-full bg-[#f4f6f9] text-[#333333] font-sans antialiased"
      id="page-wrapper"
    >
      <div className="container-fluid max-w-7xl mx-auto px-2 sm:px-4 py-3" id="main-section">
        <div className="row">
          <div className="col-12 bg-white">
            {/* VTOP Card Frame */}
            <div className="card mt-2 mb-5 border border-[#d2d6de] shadow-none rounded-none bg-white">
              {/* Card Header with legacy primaryBorderTop border */}
              <div className="card-header border-b border-[#e5e5e5] border-t-4 border-t-[#295b86] bg-[#f9fafb] px-4 py-3">
                <strong className="text-xl sm:text-2xl font-bold text-[#333333] block">
                  Spotlight - University Circulars & Notice Board
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 sm:p-6">
                {/* Search & Filter Toolbar */}
                <div className="bg-[#f5f5f5] border border-[#d2d6de] p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                    {/* Search Input */}
                    <div className="md:col-span-8 flex items-center gap-2">
                      <label
                        htmlFor="searchNotices"
                        className="text-xs sm:text-sm font-bold text-[#333333] whitespace-nowrap"
                      >
                        Search Notices:
                      </label>
                      <input
                        type="text"
                        id="searchNotices"
                        name="searchNotices"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Type keywords, reference no, department..."
                        className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                      />
                    </div>

                    {/* Category Filter */}
                    <div className="md:col-span-4 flex items-center gap-2">
                      <label
                        htmlFor="catFilter"
                        className="text-xs sm:text-sm font-bold text-[#333333] whitespace-nowrap"
                      >
                        Category:
                      </label>
                      <select
                        id="catFilter"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                      >
                        <option value="ALL">All Categories</option>
                        <option value="Academics">Academics</option>
                        <option value="Examination">Examination</option>
                        <option value="Placement & Training">Placement & Training</option>
                        <option value="Hostels">Hostels</option>
                        <option value="Events & Workshops">Events & Workshops</option>
                        <option value="Administration">Administration</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Counter & Instruction Line */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#d2d6de]">
                  <span className="text-xs text-[#555555]">
                    Showing <strong>{filteredAnnouncements.length}</strong> of <strong>{announcements.length}</strong> circulars
                  </span>
                  <span className="text-xs text-[#777777] italic">
                    Click on any circular title to view the full circular text.
                  </span>
                </div>

                {/* Utilitarian Announcements Table */}
                <div className="overflow-x-auto border border-[#d2d6de]">
                  <table className="table w-full text-xs sm:text-sm border-collapse bg-white">
                    <thead>
                      <tr className="bg-[#f5f5f5] text-[#333333] border-b border-[#d2d6de] text-left">
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center w-12">
                          S.No
                        </th>
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap w-28">
                          Date
                        </th>
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap w-36 text-center">
                          Category
                        </th>
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold min-w-[280px]">
                          Circular Title / Subject
                        </th>
                        <th className="px-2.5 py-2 font-bold whitespace-nowrap w-48">
                          Issued By / Department
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAnnouncements.length === 0 ? (
                        <tr>
                          <td
                            colSpan={5}
                            className="text-center py-8 text-[#777777] italic font-medium"
                          >
                            No notices found matching your search criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredAnnouncements.map((item, idx) => (
                          <tr
                            key={item.id}
                            className="border-b border-[#d2d6de] even:bg-[#f9f9f9] hover:bg-[#f5f5f5] text-[#333333]"
                          >
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de] text-center font-medium">
                              {idx + 1}
                            </td>
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de] whitespace-nowrap font-mono text-xs">
                              <span className="font-semibold text-[#295b86] block">
                                {item.date}
                              </span>
                              <span className="text-[10px] text-[#777777]">
                                {item.refNo}
                              </span>
                            </td>
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de] text-center whitespace-nowrap">
                              <span
                                className={`inline-block px-2 py-0.5 text-[11px] font-bold border ${
                                  item.category === "Examination"
                                    ? "bg-[#fbe9e7] text-[#d84315] border-[#ffccbc]"
                                    : item.category === "Placement & Training"
                                    ? "bg-[#e8f5e9] text-[#2e7d32] border-[#c8e6c9]"
                                    : item.category === "Academics"
                                    ? "bg-[#e3f2fd] text-[#1565c0] border-[#bbdefb]"
                                    : item.category === "Hostels"
                                    ? "bg-[#fff3e0] text-[#e65100] border-[#ffe0b2]"
                                    : "bg-[#f3e5f5] text-[#6a1b9a] border-[#e1bee7]"
                                }`}
                              >
                                {item.category}
                              </span>
                            </td>
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de]">
                              <div className="flex items-center flex-wrap gap-1">
                                <a
                                  href="#"
                                  onClick={(e) => handleTitleClick(e, item)}
                                  className="text-[#337ab7] hover:text-[#23527c] hover:underline font-semibold"
                                  title="Click to view full circular"
                                >
                                  {item.title}
                                </a>
                                {item.isNew && (
                                  <span className="inline-block animate-pulse bg-[#d9534f] text-white text-[10px] font-black px-1.5 py-0.5 rounded-none uppercase tracking-wider border border-[#d43f3a]">
                                    NEW
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-2.5 py-2.5 text-xs text-[#555555] font-medium">
                              {item.postedBy}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Legacy box-footer */}
                <div className="box-footer mt-8 pt-3 border-t border-[#eeeeee]">
                  <div className="text-center font-bold text-xs text-[#777777]">
                    VIT Bhopal University - Central Notice Board & Communications Desk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
