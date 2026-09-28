"use client";

import React, { useState } from "react";

// ==========================================
// 1. DATA CONTRACTS & STRUCTURED MOCK DATA
// ==========================================

export interface AvailableClub {
  id: string;
  clubCode: string;
  clubName: string;
  category: "Technical" | "Cultural" | "Literary" | "Sports" | "Social Welfare";
  facultyCoordinator: string;
  fee: number;
  availableSeats: number;
  totalSeats: number;
  status: "Open" | "Closing Soon" | "Closed";
  description: string;
}

export interface RegisteredClub {
  enrollmentId: string;
  clubCode: string;
  clubName: string;
  category: string;
  facultyCoordinator: string;
  feePaid: number;
  registrationDate: string;
  status: "Enrolled" | "Approved" | "Pending Approval";
  attendancePoints: number;
}

export const initialRegisteredClubs: RegisteredClub[] = [
  {
    enrollmentId: "ECA202508104",
    clubCode: "ECA-TC-012",
    clubName: "Google Developer Student Clubs (GDSC)",
    category: "Technical",
    facultyCoordinator: "Dr. S. Poornima (100700)",
    feePaid: 0,
    registrationDate: "12-Aug-2025",
    status: "Enrolled",
    attendancePoints: 15,
  },
  {
    enrollmentId: "ECA202508189",
    clubCode: "ECA-TC-004",
    clubName: "AI & Robotics Chapter (AIR)",
    category: "Technical",
    facultyCoordinator: "Dr. Jalaluddin Khan (100700)",
    feePaid: 250,
    registrationDate: "18-Aug-2025",
    status: "Approved",
    attendancePoints: 10,
  },
];

export const initialAvailableClubs: AvailableClub[] = [
  {
    id: "club-1",
    clubCode: "ECA-TC-001",
    clubName: "ACM Student Chapter",
    category: "Technical",
    facultyCoordinator: "Dr. K. Ramesh (100342)",
    fee: 300,
    availableSeats: 18,
    totalSeats: 60,
    status: "Open",
    description: "International computing society organizing coding sprints, hackathons, and research webinars.",
  },
  {
    id: "club-2",
    clubCode: "ECA-LT-002",
    clubName: "Debate & Literary Society (DLS)",
    category: "Literary",
    facultyCoordinator: "Prof. Ananya Sen (100512)",
    fee: 0,
    availableSeats: 12,
    totalSeats: 40,
    status: "Open",
    description: "Parliamentary debate training, Model United Nations (MUN), and creative writing publications.",
  },
  {
    id: "club-3",
    clubCode: "ECA-CU-003",
    clubName: "Music & Performing Arts Club (Octaves)",
    category: "Cultural",
    facultyCoordinator: "Dr. V. Sundaram (100288)",
    fee: 150,
    availableSeats: 5,
    totalSeats: 50,
    status: "Closing Soon",
    description: "Vocal and instrumental training, university orchestra, and live concerts.",
  },
  {
    id: "club-4",
    clubCode: "ECA-CU-004",
    clubName: "Dance & Choreography Club (Rhythm)",
    category: "Cultural",
    facultyCoordinator: "Prof. Meera Nair (100619)",
    fee: 150,
    availableSeats: 14,
    totalSeats: 45,
    status: "Open",
    description: "Classical, folk, hip-hop, and fusion dance choreography for intra/inter-university fests.",
  },
  {
    id: "club-5",
    clubCode: "ECA-CU-005",
    clubName: "Photography & Cinematography Club (Pixels)",
    category: "Cultural",
    facultyCoordinator: "Dr. Rajesh Gupta (100455)",
    fee: 200,
    availableSeats: 8,
    totalSeats: 35,
    status: "Open",
    description: "Visual storytelling, DSLR photography workshops, short film production, and campus event media.",
  },
  {
    id: "club-6",
    clubCode: "ECA-TC-006",
    clubName: "Esports & Game Development (Respawn)",
    category: "Technical",
    facultyCoordinator: "Prof. Amit Sharma (100780)",
    fee: 200,
    availableSeats: 22,
    totalSeats: 50,
    status: "Open",
    description: "Game design using Unity/Unreal Engine, LAN tournaments, and national esports leagues.",
  },
  {
    id: "club-7",
    clubCode: "ECA-SW-007",
    clubName: "Rotaract Club of VIT Bhopal",
    category: "Social Welfare",
    facultyCoordinator: "Dr. Shalini Singh (100190)",
    fee: 0,
    availableSeats: 30,
    totalSeats: 100,
    status: "Open",
    description: "Community service, educational drives, tree plantation, blood donation, and youth leadership.",
  },
];

// ==========================================
// 2. MAIN COMPONENT: ClubRegistration
// ==========================================

export default function ClubRegistration() {
  const [registeredClubs, setRegisteredClubs] = useState<RegisteredClub[]>(initialRegisteredClubs);
  const [availableClubs, setAvailableClubs] = useState<AvailableClub[]>(initialAvailableClubs);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [registeringClubId, setRegisteringClubId] = useState<string | null>(null);
  const [systemMessage, setSystemMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });

  // Format today date in VTOP format (dd-MMM-yyyy)
  const getTodayFormattedDate = () => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, "0");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Filtered available clubs
  const filteredAvailableClubs = availableClubs.filter((club) => {
    if (selectedCategory === "ALL") return true;
    return club.category === selectedCategory;
  });

  // Action: Register Club
  const handleRegister = (e: React.MouseEvent, club: AvailableClub) => {
    e.preventDefault();

    // Check maximum allowed club enrollments limit
    if (registeredClubs.length >= 4) {
      setSystemMessage({
        text: "Registration Failed: Maximum allowed active club enrollments (4) reached for this academic session.",
        type: "error",
      });
      return;
    }

    setRegisteringClubId(club.id);
    setSystemMessage({ text: "", type: "" });

    // Simulate legacy server transaction
    setTimeout(() => {
      const randomAppId = `ECA20260${Math.floor(1000 + Math.random() * 9000)}`;
      const newRegisteredItem: RegisteredClub = {
        enrollmentId: randomAppId,
        clubCode: club.clubCode,
        clubName: club.clubName,
        category: club.category,
        facultyCoordinator: club.facultyCoordinator,
        feePaid: club.fee,
        registrationDate: getTodayFormattedDate(),
        status: "Enrolled",
        attendancePoints: 0,
      };

      // Move from available to registered
      setRegisteredClubs((prev) => [newRegisteredItem, ...prev]);
      setAvailableClubs((prev) => prev.filter((item) => item.id !== club.id));
      setRegisteringClubId(null);

      // Display Institutional Success Alert
      setSystemMessage({
        text: `Enrollment Successful! You have been registered in "${club.clubName}" (${club.clubCode}). Application ID: ${randomAppId}.`,
        type: "success",
      });
    }, 600);
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
                  Extra-Curricular Activities (ECA) & Club Registration
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4">
                {/* Institutional Student Header Info Bar */}
                <div className="bg-[#eef2f7] border border-[#d2d6de] p-3 mb-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div>
                      <span className="font-bold text-[#295b86]">Reg. No: </span>
                      <span className="font-semibold text-[#333333]">25MIM10100</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Student Name: </span>
                      <span className="font-semibold text-[#333333]">KUMAR HARSHVARDHAN</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#295b86]">Academic Year: </span>
                      <span className="font-semibold text-[#333333]">2025 - 2026 (Winter Sem)</span>
                    </div>
                  </div>
                </div>

                {/* System Message Banner */}
                {systemMessage.text && (
                  <div
                    id="Message"
                    className={`mb-4 p-2.5 text-center text-xs sm:text-sm font-bold border ${
                      systemMessage.type === "error"
                        ? "bg-[#f2dede] border-[#ebccd1] text-[#a94442]"
                        : "bg-[#dff0d8] border-[#d6e9c6] text-[#3c763d]"
                    }`}
                  >
                    <p id="pageMessage" className="m-0">
                      {systemMessage.text}
                    </p>
                  </div>
                )}

                {/* Important Instructions Box */}
                <div className="bg-[#fff9e6] border border-[#ffe082] p-3 mb-5 text-xs text-[#8a6d3b]">
                  <strong className="block font-bold mb-1 text-[#6d4c41]">
                    Important Instructions for Club & Chapter Registration:
                  </strong>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>A student may enroll in up to 4 non-credit clubs/chapters per academic year.</li>
                    <li>ECA activity hours & participation points are factored into the co-curricular activity index.</li>
                    <li>Registration for open clubs is on a first-come, first-served basis subject to seat availability.</li>
                    <li>Club membership cannot be transferred or exchanged after the registration deadline.</li>
                  </ul>
                </div>

                {/* SECTION 1: MY REGISTERED CLUBS */}
                <div className="mb-6">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#d2d6de]">
                    <h4 className="font-bold text-sm sm:text-base text-[#333333] m-0">
                      My Registered Clubs / Chapters
                    </h4>
                    <span className="text-xs text-[#777777] font-medium">
                      Total Registered: {registeredClubs.length}
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-[#d2d6de]">
                    <table className="table w-full text-xs sm:text-sm border-collapse bg-white">
                      <thead>
                        <tr className="bg-[#f5f5f5] text-[#333333] border-b border-[#d2d6de] text-left">
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center w-12">
                            S.No
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap">
                            Enrollment ID & Date
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap">
                            Club Code & Name
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Category
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold">
                            Faculty Coordinator
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Fee Paid
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Activity Points
                          </th>
                          <th className="px-2.5 py-2 font-bold text-center whitespace-nowrap">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {registeredClubs.length === 0 ? (
                          <tr>
                            <td
                              colSpan={8}
                              className="text-center py-6 text-[#777777] italic font-medium"
                            >
                              No club registrations found for this semester.
                            </td>
                          </tr>
                        ) : (
                          registeredClubs.map((club, idx) => (
                            <tr
                              key={club.enrollmentId}
                              className="border-b border-[#d2d6de] even:bg-[#f9f9f9] hover:bg-[#f5f5f5] text-[#333333]"
                            >
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-medium">
                                {idx + 1}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] whitespace-nowrap">
                                <div className="font-bold text-[#295b86]">
                                  {club.enrollmentId}
                                </div>
                                <div className="text-[11px] text-[#777777]">
                                  {club.registrationDate}
                                </div>
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de]">
                                <span className="font-bold text-[#333333] block">
                                  {club.clubName}
                                </span>
                                <span className="text-[11px] text-[#777777]">
                                  ({club.clubCode})
                                </span>
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center whitespace-nowrap">
                                <span className="inline-block bg-[#e8eaf6] text-[#283593] px-2 py-0.5 text-[11px] font-semibold border border-[#c5cae9]">
                                  {club.category}
                                </span>
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-xs">
                                {club.facultyCoordinator}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-medium">
                                {club.feePaid === 0 ? "FREE" : `₹ ${club.feePaid}`}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-bold text-[#295b86]">
                                {club.attendancePoints} pts
                              </td>
                              <td className="px-2.5 py-2 text-center whitespace-nowrap">
                                <span className="font-bold text-xs text-[#3c763d]">
                                  {club.status.toUpperCase()}
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* SECTION 2: AVAILABLE CLUBS FOR REGISTRATION */}
                <div className="mt-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 mb-2 border-b border-[#d2d6de] gap-2">
                    <h4 className="font-bold text-sm sm:text-base text-[#333333] m-0">
                      Available Clubs for Registration
                    </h4>

                    {/* Category Filter Dropdown */}
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="categoryFilter"
                        className="text-xs font-bold text-[#555555] whitespace-nowrap"
                      >
                        Filter by Category:
                      </label>
                      <select
                        id="categoryFilter"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-xs px-2 py-1 bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                      >
                        <option value="ALL">All Categories</option>
                        <option value="Technical">Technical</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Literary">Literary</option>
                        <option value="Social Welfare">Social Welfare</option>
                      </select>
                    </div>
                  </div>

                  <div className="overflow-x-auto border border-[#d2d6de]">
                    <table className="table w-full text-xs sm:text-sm border-collapse bg-white">
                      <thead>
                        <tr className="bg-[#f5f5f5] text-[#333333] border-b border-[#d2d6de] text-left">
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center w-12">
                            S.No
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap">
                            Club Code
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold min-w-[180px]">
                            Club / Chapter Name & Description
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Category
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold min-w-[140px]">
                            Faculty Incharge
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Reg. Fee
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Seats (Left / Total)
                          </th>
                          <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                            Status
                          </th>
                          <th className="px-2.5 py-2 font-bold text-center whitespace-nowrap w-24">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredAvailableClubs.length === 0 ? (
                          <tr>
                            <td
                              colSpan={9}
                              className="text-center py-6 text-[#777777] italic font-medium"
                            >
                              No clubs available in the selected category.
                            </td>
                          </tr>
                        ) : (
                          filteredAvailableClubs.map((club, idx) => (
                            <tr
                              key={club.id}
                              className="border-b border-[#d2d6de] even:bg-[#f9f9f9] hover:bg-[#f5f5f5] text-[#333333]"
                            >
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-medium">
                                {idx + 1}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-[#295b86] whitespace-nowrap">
                                {club.clubCode}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de]">
                                <strong className="font-bold text-[#333333] block">
                                  {club.clubName}
                                </strong>
                                <span className="text-[11px] text-[#666666] leading-tight block mt-0.5">
                                  {club.description}
                                </span>
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center whitespace-nowrap">
                                <span className="inline-block bg-[#e0f2f1] text-[#00695c] px-2 py-0.5 text-[11px] font-semibold border border-[#b2dfdb]">
                                  {club.category}
                                </span>
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-xs">
                                {club.facultyCoordinator}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center font-bold text-[#333333] whitespace-nowrap">
                                {club.fee === 0 ? "FREE" : `₹ ${club.fee}`}
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center whitespace-nowrap font-medium">
                                <span className="text-green-700 font-bold">
                                  {club.availableSeats}
                                </span>
                                <span className="text-gray-500"> / {club.totalSeats}</span>
                              </td>
                              <td className="px-2.5 py-2 border-r border-[#d2d6de] text-center whitespace-nowrap">
                                <span
                                  className={`text-[11px] font-bold px-1.5 py-0.5 border ${
                                    club.status === "Open"
                                      ? "bg-[#e8f5e9] text-[#2e7d32] border-[#c8e6c9]"
                                      : "bg-[#fff3e0] text-[#e65100] border-[#ffe0b2]"
                                  }`}
                                >
                                  {club.status.toUpperCase()}
                                </span>
                              </td>
                              <td className="px-2.5 py-2 text-center whitespace-nowrap">
                                <button
                                  type="button"
                                  disabled={registeringClubId === club.id}
                                  onClick={(e) => handleRegister(e, club)}
                                  className={`text-xs font-semibold py-1 px-2.5 rounded-none border transition-colors cursor-pointer ${
                                    registeringClubId === club.id
                                      ? "bg-gray-400 text-white border-gray-500 cursor-not-allowed"
                                      : "bg-[#337ab7] hover:bg-[#286090] text-white border-[#2e6da4]"
                                  }`}
                                >
                                  {registeringClubId === club.id ? "Registering..." : "Register"}
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Legacy box-footer */}
                <div className="box-footer mt-8 pt-3 border-t border-[#eeeeee]">
                  <div className="text-center font-bold text-xs text-[#777777]">
                    VIT Bhopal University - Student Welfare & Extra-Curricular Activities System
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
