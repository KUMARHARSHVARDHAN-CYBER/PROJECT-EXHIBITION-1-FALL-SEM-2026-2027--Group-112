"use client";

import React from "react";

// ==========================================
// 1. DATA CONTRACTS & MOCK DATASET
// ==========================================

export interface RoommateInfo {
  sNo: number;
  regNo: string;
  name: string;
  bedNo: string;
  foodPreference: string;
  caterName: string;
  isSelf?: boolean;
}

export interface RoomAllotmentDetails {
  allotmentYear: string;
  regNo: string;
  studentName: string;
  allotmentId: string;
  hostelBlock: string;
  roomNo: string;
  beds: number;
  acType: string;
  bedType: string;
  categoryType: string;
  foodPreference: string;
  caterName: string;
  roommates: RoommateInfo[];
}

export const allotmentDetails: RoomAllotmentDetails = {
  allotmentYear: "2026",
  regNo: "25MIM10100",
  studentName: "KUMAR HARSHVARDHAN",
  allotmentId: "BPL2025000992",
  hostelBlock: "Boys Hostel Block 4",
  roomNo: "BH4-306",
  beds: 2,
  acType: "AC",
  bedType: "Flat Bed",
  categoryType: "Premium",
  foodPreference: "Veg",
  caterName: "Mayuri",
  roommates: [
    {
      sNo: 1,
      regNo: "25MIM10100",
      name: "KUMAR HARSHVARDHAN",
      bedNo: "Bed 1",
      foodPreference: "Veg",
      caterName: "Mayuri",
      isSelf: true,
    },
    {
      sNo: 2,
      regNo: "25BCE10245",
      name: "Jayesh Mathur",
      bedNo: "Bed 2",
      foodPreference: "Non-Veg",
      caterName: "Mayuri",
      isSelf: false,
    }
  ],
};

// ==========================================
// 2. MAIN COMPONENT: HostelRoomAllotment
// ==========================================

export default function HostelRoomAllotment() {
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
                  Room Allotment Details
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 sm:p-6">
                <div className="container mx-auto">
                  <div className="w-full lg:w-[70%]">
                    {/* Primary Room Allotment Specifications Table */}
                    <table className="table w-full border-collapse border border-[#d2d6de] text-xs sm:text-sm mb-4">
                      <tbody>
                        <tr className="border-b border-[#d2d6de] bg-[#f9f9f9]">
                          <th className="w-1/4 px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Allotment Year
                          </th>
                          <td className="w-3/4 px-3 py-2 text-[#333333] align-middle">
                            {allotmentDetails.allotmentYear}
                          </td>
                        </tr>
                        <tr className="border-b border-[#d2d6de] bg-white">
                          <th className="px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Reg. No
                          </th>
                          <td className="px-3 py-2 text-[#333333] font-semibold text-[#295b86] align-middle">
                            {allotmentDetails.regNo}
                          </td>
                        </tr>
                        <tr className="border-b border-[#d2d6de] bg-[#f9f9f9]">
                          <th className="px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Allotment ID
                          </th>
                          <td className="px-3 py-2 text-[#333333] font-mono font-medium align-middle">
                            {allotmentDetails.allotmentId}
                          </td>
                        </tr>
                        <tr className="border-b border-[#d2d6de] bg-white">
                          <th className="px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Hostel Block
                          </th>
                          <td className="px-3 py-2 text-[#333333] font-medium align-middle">
                            {allotmentDetails.hostelBlock}
                          </td>
                        </tr>
                        <tr className="border-b border-[#d2d6de] bg-[#f9f9f9]">
                          <th className="px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Beds
                          </th>
                          <td className="px-3 py-2 text-[#333333] align-middle">
                            {allotmentDetails.beds}
                          </td>
                        </tr>
                        <tr className="border-b border-[#d2d6de] bg-white">
                          <th className="px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            AC Type
                          </th>
                          <td className="px-3 py-2 text-[#333333] align-middle">
                            {allotmentDetails.acType}
                          </td>
                        </tr>
                        <tr className="border-b border-[#d2d6de] bg-[#f9f9f9]">
                          <th className="px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Bed Type
                          </th>
                          <td className="px-3 py-2 text-[#333333] align-middle">
                            {allotmentDetails.bedType}
                          </td>
                        </tr>
                        <tr className="border-b border-[#d2d6de] bg-white">
                          <th className="px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Category Type
                          </th>
                          <td className="px-3 py-2 text-[#333333] align-middle">
                            {allotmentDetails.categoryType}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Food & Catering Preference Table */}
                    <table className="table w-full border-collapse border border-[#d2d6de] text-xs sm:text-sm mb-6">
                      <tbody>
                        <tr className="border-b border-[#d2d6de] bg-[#f9f9f9]">
                          <th className="w-1/4 px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Food Preference
                          </th>
                          <td className="w-3/4 px-3 py-2 text-[#333333] align-middle">
                            {allotmentDetails.foodPreference}
                          </td>
                        </tr>
                        <tr className="border-b border-[#d2d6de] bg-white">
                          <th className="w-1/4 px-3 py-2 text-left font-bold text-[#333333] border-r border-[#d2d6de] align-middle">
                            Cater Name
                          </th>
                          <td className="w-3/4 px-3 py-2 text-[#333333] font-medium align-middle">
                            {allotmentDetails.caterName}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Roommates Allotted Table */}
                    {allotmentDetails.roommates && allotmentDetails.roommates.length > 0 && (
                      <div className="mt-6">
                        <div className="pb-2 mb-2 border-b border-[#d2d6de]">
                          <h4 className="font-bold text-sm sm:text-base text-[#333333] m-0">
                            Allotted Roommates Details
                          </h4>
                        </div>
                        <div className="overflow-x-auto border border-[#d2d6de]">
                          <table className="table w-full text-xs sm:text-sm border-collapse bg-white">
                            <thead>
                              <tr className="bg-[#f5f5f5] text-[#333333] border-b border-[#d2d6de] text-left">
                                <th className="px-3 py-2 border-r border-[#d2d6de] font-bold text-center w-12">
                                  S.No
                                </th>
                                <th className="px-3 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap">
                                  Reg. No
                                </th>
                                <th className="px-3 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap">
                                  Student Name
                                </th>
                                <th className="px-3 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                                  Bed Allotted
                                </th>
                                <th className="px-3 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap">
                                  Mess Preference
                                </th>
                                <th className="px-3 py-2 font-bold whitespace-nowrap">
                                  Caterer
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {allotmentDetails.roommates.map((mate, idx) => (
                                <tr
                                  key={mate.regNo}
                                  className={`border-b border-[#d2d6de] hover:bg-[#f5f5f5] text-[#333333] ${
                                    mate.isSelf ? "bg-[#eaf2f8]" : idx % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"
                                  }`}
                                >
                                  <td className="px-3 py-2 border-r border-[#d2d6de] text-center font-medium">
                                    {mate.sNo}
                                  </td>
                                  <td className="px-3 py-2 border-r border-[#d2d6de] font-bold text-[#295b86] whitespace-nowrap">
                                    {mate.regNo}
                                    {mate.isSelf && (
                                      <span className="ml-1 text-[10px] text-green-700 font-bold bg-green-100 px-1 py-0.5 rounded-none">
                                        (YOU)
                                      </span>
                                    )}
                                  </td>
                                  <td className="px-3 py-2 border-r border-[#d2d6de] font-medium whitespace-nowrap">
                                    {mate.name}
                                  </td>
                                  <td className="px-3 py-2 border-r border-[#d2d6de] text-center font-semibold whitespace-nowrap">
                                    {mate.bedNo}
                                  </td>
                                  <td className="px-3 py-2 border-r border-[#d2d6de] text-center whitespace-nowrap">
                                    <span
                                      className={`font-semibold ${
                                        mate.foodPreference === "Veg"
                                          ? "text-green-700"
                                          : mate.foodPreference === "Non-Veg"
                                          ? "text-red-700"
                                          : "text-blue-700"
                                      }`}
                                    >
                                      {mate.foodPreference}
                                    </span>
                                  </td>
                                  <td className="px-3 py-2 font-medium whitespace-nowrap">
                                    {mate.caterName}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Legacy box-footer */}
                <div className="box-footer mt-8 pt-3 border-t border-[#eeeeee]">
                  <div className="text-center font-bold text-xs text-[#777777]">
                    VIT Bhopal University - Hostel Room Allotment System
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
