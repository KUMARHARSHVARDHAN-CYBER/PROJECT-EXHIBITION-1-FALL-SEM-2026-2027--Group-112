"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, UserCheck, Phone, Mail, Building } from "lucide-react";
import ProctorScheduler from "@/components/ProctorScheduler";

// Mock JSON dataset for Proctor Details extracted from legacy VTOP payload
export interface ProctorInfo {
  facultyId: string;
  facultyName: string;
  designation: string;
  school: string;
  cabin: string;
  department: string;
  email: string;
  mobile: string;
  photoBase64?: string;
}

export const mockProctorDetails: ProctorInfo = {
  facultyId: "100700",
  facultyName: "Dr. S. POORNIMA",
  designation: "ASSOCIATE PROFESSOR GRADE 2",
  school: "School of Computer Science and Engineering",
  cabin: "AB-308A,Academic Block-1",
  department: "Department of Computational Intelligence",
  email: "poornima.s@vitbhopal.ac.in",
  mobile: "9884488339",
};

export default function ProctorDetails() {
  const [activeTab, setActiveTab] = useState<"DETAILS" | "SCHEDULER">("DETAILS");

  const detailsList = [
    { label: "Faculty ID", value: mockProctorDetails.facultyId },
    { label: "Faculty Name", value: mockProctorDetails.facultyName },
    { label: "Designation", value: mockProctorDetails.designation },
    { label: "School / Centre", value: mockProctorDetails.school },
    { label: "Cabin", value: mockProctorDetails.cabin },
    { label: "Department", value: mockProctorDetails.department },
    { label: "Email", value: mockProctorDetails.email },
    { label: "Mobile Number", value: mockProctorDetails.mobile },
  ];

  // Dynamic professional avatar URL based on faculty name
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    mockProctorDetails.facultyName
  )}&background=0f172a&color=ffffff&size=256`;

  return (
    <div className="bootstrap3-iso w-full" id="page-wrapper">
      <div id="main-section" className="w-full">
        <div className="container-fluid max-w-7xl mx-auto px-2 sm:px-4 py-3">
          {/* Main Proctor Section Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <button
              type="button"
              onClick={() => setActiveTab("DETAILS")}
              className={`text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "DETAILS"
                  ? "bg-[#31b0d5] text-white border-[#269abc] shadow-inner font-bold"
                  : "bg-[#5bc0de] hover:bg-[#31b0d5] text-white border-[#46b8da]"
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Proctor Information
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("SCHEDULER")}
              className={`text-xs sm:text-sm font-semibold py-1.5 px-3 rounded-none border transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === "SCHEDULER"
                  ? "bg-[#31b0d5] text-white border-[#269abc] shadow-inner font-bold"
                  : "bg-[#5bc0de] hover:bg-[#31b0d5] text-white border-[#46b8da]"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Schedule Proctor Meeting
            </button>
          </div>

          {/* Conditional View: Details or Scheduler */}
          {activeTab === "SCHEDULER" ? (
            <ProctorScheduler />
          ) : (
            <section className="content">
              <div className="col-sm-12">
                <div className="bg-white border border-[#d2d6de] shadow-sm rounded-none mb-6">
                  {/* Box Header */}
                  <div className="box-header with-border text-center py-2.5 px-4 border-b border-[#f4f4f4] bg-white flex items-center justify-between">
                    <h3 className="box-title text-lg font-bold text-[#333333] m-0">
                      View proctor details
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveTab("SCHEDULER")}
                      className="bg-[#337ab7] hover:bg-[#286090] text-white text-xs font-bold py-1.5 px-3 rounded-none border border-[#2e6da4] inline-flex items-center gap-1.5 cursor-pointer shadow-none"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Schedule Meeting
                    </button>
                  </div>

                  {/* Form placeholder */}
                  <form
                    className="form-horizontal"
                    method="post"
                    action="addStudents"
                    id="employeeForm"
                    autoComplete="off"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="box-body">
                      <div className="form-group text-center my-1">
                        <h4 className="text-green-700 font-bold m-0 text-sm"></h4>
                      </div>
                    </div>
                  </form>

                  {/* Details Card Layout with Professional Profile Image */}
                  <div id="showDetails" className="m-3 sm:m-5">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 sm:p-6 bg-slate-50 border border-[#d2d6de]">
                      {/* Avatar Image Card */}
                      <div className="flex flex-col items-center shrink-0">
                        <img
                          src={avatarUrl}
                          alt={mockProctorDetails.facultyName}
                          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover"
                        />
                        <span className="mt-2.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Proctor Photo
                        </span>
                      </div>

                      {/* Proctor Text Details Table */}
                      <div className="w-full flex-1 overflow-x-auto">
                        <table className="table w-full border-collapse text-xs sm:text-sm border border-[#d2d6de]">
                          <tbody>
                            {detailsList.map((item) => (
                              <tr
                                key={item.label}
                                className="border-b border-[#d2d6de] hover:opacity-95"
                              >
                                <td
                                  style={{ backgroundColor: "#aba6bf" }}
                                  className="font-bold text-[#222222] px-3.5 py-2.5 border-r border-[#d2d6de] whitespace-nowrap w-1/3 sm:w-1/4 align-middle"
                                >
                                  {item.label}
                                </td>
                                <td
                                  style={{ backgroundColor: "#f2dede" }}
                                  className="text-[#333333] px-3.5 py-2.5 font-medium align-middle"
                                >
                                  {item.label === "Email" ? (
                                    <a
                                      href={`mailto:${item.value}`}
                                      className="text-blue-700 hover:underline hover:text-blue-900 font-semibold"
                                    >
                                      {item.value}
                                    </a>
                                  ) : (
                                    item.value
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
