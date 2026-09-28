"use client";

import React, { useState } from "react";
import Link from "next/link";

// ==========================================
// 1. DATA CONTRACTS & MOCK FAQ DATASET
// ==========================================

export interface FAQItem {
  id: number;
  category: "Academics" | "Examinations" | "Hostels" | "Account & Security" | "Services & Bonafide";
  question: string;
  answer: string;
  relatedLink?: { label: string; href: string };
}

export const faqList: FAQItem[] = [
  {
    id: 1,
    category: "Academics",
    question: "What is the minimum attendance requirement for appearing in Final Assessment Tests (FAT)?",
    answer:
      "As per university academic regulations, a student must maintain a minimum of 75% attendance in each registered theory and laboratory course. Students having attendance between 65% and 74% due to medical emergencies or official university duties must apply for condonation through their Faculty Proctor with valid documentary proof. Students with less than 65% attendance will be awarded an 'N' (Not Permitted) grade and must re-register for the course in a subsequent semester.",
    relatedLink: { label: "Check Class Attendance", href: "/dashboard/attendance" },
  },
  {
    id: 2,
    category: "Services & Bonafide",
    question: "How do I apply for an official Bonafide Certificate or Fee Structure document?",
    answer:
      "Navigate to Services → Apply Bonafide on the VTOP dashboard. Select the specific certificate purpose (e.g., Bank Loan, Passport/Visa, Internship, Concession) and enter the exact authority name under 'Addressed To'. Standard requests are processed within 2–3 working days by the Academic Office, after which a digitally verifiable certificate will appear in your request history table.",
    relatedLink: { label: "Apply for Bonafide", href: "/dashboard/bonafide" },
  },
  {
    id: 3,
    category: "Examinations",
    question: "What is the 10-point Letter Grading Scale and CGPA calculation formula?",
    answer:
      "Courses are graded on a 10-point scale: S (Outstanding - 10), A (Excellent - 9), B (Very Good - 8), C (Good - 7), D (Average - 6), E (Poor - 5), and F (Fail - 0). Semester Grade Point Average (SGPA) is calculated as Σ(Credits × Grade Points) / Σ(Credits). Cumulative Grade Point Average (CGPA) is computed across all successfully completed registered credits up to the current semester.",
    relatedLink: { label: "View Grade History", href: "/dashboard/grade-history" },
  },
  {
    id: 4,
    category: "Hostels",
    question: "What is the procedure for applying for Hostel Outings, Weekend Leave, or Home Town Leave?",
    answer:
      "Hostel leaves must be applied at least 24 hours prior to departure via Hostels → Leave Request. Select your leave category (Home Town, Day Outing, Local Guardian, or Emergency), enter departure and return date/time, and provide a clear justification. Once submitted, your application is reviewed online by your Faculty Proctor and Chief Warden. You must present your digital leave pass at the hostel biometric turnstile when checking out and in.",
    relatedLink: { label: "Apply Leave Request", href: "/dashboard/leave-request" },
  },
  {
    id: 5,
    category: "Account & Security",
    question: "How do I update my VTOP password or access 2FA Backup Recovery Codes?",
    answer:
      "You can update your portal credentials under My Account → Change Password. Passwords must satisfy complexity requirements (8–20 chars, 1 uppercase, 1 lowercase, 1 number, and 1 special symbol). If you ever misplace your 2FA authentication device, navigate to My Account → Backup Codes to view or generate 10 single-use emergency recovery tokens.",
    relatedLink: { label: "Manage Password & 2FA", href: "/dashboard/change-password" },
  },
  {
    id: 6,
    category: "Academics",
    question: "How does the Course Add/Drop and Course Withdrawal mechanism operate?",
    answer:
      "During the scheduled registration window at the start of each semester, students may add elective slots or drop non-core courses through the Academic Course Registration portal. Course Withdrawal with a 'W' grade on the transcript is permitted up to the 8th week of instructional classes upon formal recommendation of the Head of Department.",
    relatedLink: { label: "View My Curriculum", href: "/dashboard/curriculum" },
  },
  {
    id: 7,
    category: "Services & Bonafide",
    question: "How do I enroll in Extra-Curricular Activities (ECA) and student technical chapters?",
    answer:
      "Students can enroll in up to 4 university-recognized clubs/chapters per academic session via ECA Club Registration. Available clubs are categorized under Technical, Cultural, Literary, and Social Welfare. Registration is on a first-come, first-served basis subject to seat availability.",
    relatedLink: { label: "Browse ECA Clubs", href: "/dashboard/club-registration" },
  },
];

// ==========================================
// 2. MAIN COMPONENT: FAQs
// ==========================================

export default function FAQs() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Instant toggle logic
  const handleToggle = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = faqList.filter((faq) => {
    const matchesCategory = selectedCategory === "ALL" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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
                  Frequently Asked Questions (FAQ) - Academic & Student Services
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 sm:p-6">
                {/* Search & Category Filter Bar */}
                <div className="bg-[#f5f5f5] border border-[#d2d6de] p-3 mb-5">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                    {/* Search Field */}
                    <div className="md:col-span-8 flex items-center gap-2">
                      <label
                        htmlFor="faqSearch"
                        className="text-xs sm:text-sm font-bold text-[#333333] whitespace-nowrap"
                      >
                        Search FAQ:
                      </label>
                      <input
                        type="text"
                        id="faqSearch"
                        name="faqSearch"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by keyword, regulation, rule..."
                        className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                      />
                    </div>

                    {/* Category Dropdown */}
                    <div className="md:col-span-4 flex items-center gap-2">
                      <label
                        htmlFor="faqCategory"
                        className="text-xs sm:text-sm font-bold text-[#333333] whitespace-nowrap"
                      >
                        Category:
                      </label>
                      <select
                        id="faqCategory"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                      >
                        <option value="ALL">All Categories</option>
                        <option value="Academics">Academics</option>
                        <option value="Examinations">Examinations</option>
                        <option value="Hostels">Hostels</option>
                        <option value="Account & Security">Account & Security</option>
                        <option value="Services & Bonafide">Services & Bonafide</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* FAQ List Container */}
                <div className="space-y-3 mb-6">
                  {filteredFaqs.length === 0 ? (
                    <div className="text-center py-8 text-[#777777] italic font-medium border border-[#d2d6de] bg-[#fcfcfc]">
                      No FAQs found matching your query.
                    </div>
                  ) : (
                    filteredFaqs.map((faq, idx) => {
                      const isOpen = openFaqId === (Number(faq.id));

                      return (
                        <div
                          key={faq.id}
                          className="border border-[#d2d6de] bg-white rounded-none shadow-none"
                        >
                          {/* Question Header (Rigid Clickable Row) */}
                          <div
                            onClick={() => handleToggle(Number(faq.id))}
                            className={`flex items-center justify-between p-3 cursor-pointer select-none transition-none ${
                              isOpen ? "bg-[#e8f0fe] border-b border-[#c5d9f8]" : "bg-[#f9f9f9] hover:bg-[#f1f1f1]"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono text-xs font-bold text-[#295b86] w-6">
                                Q{idx + 1}.
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-[#222222]">
                                {faq.question}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 ml-2">
                              <span className="hidden sm:inline-block text-[11px] font-bold text-[#555555] bg-[#e0e0e0] px-2 py-0.5 border border-[#ccc]">
                                {faq.category}
                              </span>
                              <span className="font-mono font-bold text-sm text-[#295b86] px-1.5 py-0.5 border border-[#bbb] bg-white">
                                {isOpen ? "−" : "+"}
                              </span>
                            </div>
                          </div>

                          {/* Answer Box (Instant Expand without smooth animations) */}
                          {isOpen && (
                            <div className="p-4 bg-white text-xs sm:text-sm text-[#333333] leading-relaxed border-t border-[#e5e5e5]">
                              <p className="mb-3">{faq.answer}</p>

                              {faq.relatedLink && (
                                <div className="pt-2 border-t border-[#f0f0f0] text-xs">
                                  <span className="text-[#666666] mr-1.5 font-medium">
                                    Direct Portal Link:
                                  </span>
                                  <Link
                                    href={faq.relatedLink.href}
                                    className="text-[#337ab7] hover:text-[#23527c] hover:underline font-bold"
                                  >
                                    → {faq.relatedLink.label}
                                  </Link>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Still Have Questions Box */}
                <div className="bg-[#eef2f7] border border-[#c2d4ea] p-4 text-xs text-[#333333]">
                  <strong className="block font-bold text-sm text-[#1B365D] mb-1">
                    Still have questions or need assistance?
                  </strong>
                  <p className="m-0 leading-relaxed text-[#555555]">
                    For individual academic issues, contact your designated Faculty Proctor under the <strong>Proctor Details</strong> tab. For technical or hostel related inquiries, submit a ticket at the Student Development Center (SDC) Helpdesk.
                  </p>
                </div>

                {/* Legacy box-footer */}
                <div className="box-footer mt-8 pt-3 border-t border-[#eeeeee]">
                  <div className="text-center font-bold text-xs text-[#777777]">
                    VIT Bhopal University - Student Knowledge Base & Helpdesk Services
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
