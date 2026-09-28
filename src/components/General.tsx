"use client";

import React, { useState } from "react";

// ==========================================
// 1. DATA CONTRACTS & STRUCTURED MOCK DATA
// ==========================================

export interface UniversityDocument {
  id: string;
  docCode: string;
  docName: string;
  category: "Academic Regulations" | "Hostel Guidelines" | "Discipline & Policies" | "Examinations" | "Finance & Scholarships" | "Library & IT";
  uploadDate: string;
  fileSize: string;
  version: string;
  issuedBy: string;
  fileFormat: string;
}

export const documentRepository: UniversityDocument[] = [
  {
    id: "doc-1",
    docCode: "DOC/ACAD/2025/01",
    docName: "B.Tech & Integrated M.Tech Academic Regulations & Curriculum Handbook (CAL System)",
    category: "Academic Regulations",
    uploadDate: "10-Jul-2025",
    fileSize: "2.4 MB",
    version: "v4.2",
    issuedBy: "Office of Academic Affairs",
    fileFormat: "PDF",
  },
  {
    id: "doc-2",
    docCode: "DOC/HOST/2025/02",
    docName: "Hostel Resident Rulebook, Code of Conduct & Biometric Outing Protocols",
    category: "Hostel Guidelines",
    uploadDate: "15-Jul-2025",
    fileSize: "1.2 MB",
    version: "v3.1",
    issuedBy: "Office of the Chief Warden",
    fileFormat: "PDF",
  },
  {
    id: "doc-3",
    docCode: "DOC/DISC/2025/03",
    docName: "Anti-Ragging Directives, UGC Statutory Compliance & Emergency Helpline Guide",
    category: "Discipline & Policies",
    uploadDate: "01-Aug-2025",
    fileSize: "780 KB",
    version: "v2.0",
    issuedBy: "Proctorial Board & Anti-Ragging Committee",
    fileFormat: "PDF",
  },
  {
    id: "doc-4",
    docCode: "DOC/EXAM/2025/04",
    docName: "Examination Guidelines for Continuous Assessment (CAT) & Final Assessment Tests (FAT)",
    category: "Examinations",
    uploadDate: "20-Aug-2025",
    fileSize: "1.5 MB",
    version: "v2.8",
    issuedBy: "Controller of Examinations (COE)",
    fileFormat: "PDF",
  },
  {
    id: "doc-5",
    docCode: "DOC/DISC/2025/05",
    docName: "Student Code of Conduct, Ethics, Lab Safety and IT Network Fair Usage Policy",
    category: "Discipline & Policies",
    uploadDate: "12-Jul-2025",
    fileSize: "920 KB",
    version: "v1.9",
    issuedBy: "Directorate of Student Welfare",
    fileFormat: "PDF",
  },
  {
    id: "doc-6",
    docCode: "DOC/FIN/2025/06",
    docName: "Merit Scholarship & Financial Fee Assistance Scheme Guidelines (2025-26)",
    category: "Finance & Scholarships",
    uploadDate: "05-Aug-2025",
    fileSize: "640 KB",
    version: "v1.4",
    issuedBy: "Finance & Accounts Office",
    fileFormat: "PDF",
  },
  {
    id: "doc-7",
    docCode: "DOC/LIB/2025/07",
    docName: "Central Library Rules, Digital Repository (IEEE/ACM/Springer) Remote Access Manual",
    category: "Library & IT",
    uploadDate: "18-Jul-2025",
    fileSize: "1.1 MB",
    version: "v3.0",
    issuedBy: "University Central Library",
    fileFormat: "PDF",
  },
  {
    id: "doc-8",
    docCode: "DOC/SW/2025/08",
    docName: "Extra-Curricular Activities (ECA), Sports Complex & Gymnasium Operational Protocols",
    category: "Discipline & Policies",
    uploadDate: "25-Jul-2025",
    fileSize: "890 KB",
    version: "v2.1",
    issuedBy: "Department of Physical Education",
    fileFormat: "PDF",
  },
];

// ==========================================
// 2. MAIN COMPONENT: General
// ==========================================

export default function General() {
  const [documents] = useState<UniversityDocument[]>(documentRepository);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Filter documents based on search & category
  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory = selectedCategory === "ALL" || doc.category === selectedCategory;
    const matchesSearch =
      doc.docName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.docCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.issuedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Action Simulation: File Download with 1s state transition
  const handleDownload = (e: React.MouseEvent, doc: UniversityDocument) => {
    e.preventDefault();
    setDownloadingId(doc.id);

    setTimeout(() => {
      setDownloadingId(null);
      alert(
        `--------------------------------------------------\n` +
        `VTOP DOCUMENT DOWNLOAD COMPLETED\n` +
        `--------------------------------------------------\n\n` +
        `Document Title : ${doc.docName}\n` +
        `Reference Code : ${doc.docCode}\n` +
        `Category       : ${doc.category}\n` +
        `Version        : ${doc.version}\n` +
        `File Size      : ${doc.fileSize} (${doc.fileFormat})\n` +
        `Issued By      : ${doc.issuedBy}\n\n` +
        `The PDF document has been successfully downloaded.\n` +
        `--------------------------------------------------\n` +
        `VIT Bhopal University Digital Repository`
      );
    }, 1000);
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
                  General Information & University Regulations Repository
                </strong>
              </div>

              {/* Card Body */}
              <div className="card-body p-4 sm:p-6">
                {/* Search & Filter Toolbar */}
                <div className="bg-[#f5f5f5] border border-[#d2d6de] p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                    {/* Search Field */}
                    <div className="md:col-span-8 flex items-center gap-2">
                      <label
                        htmlFor="docSearch"
                        className="text-xs sm:text-sm font-bold text-[#333333] whitespace-nowrap"
                      >
                        Search Documents:
                      </label>
                      <input
                        type="text"
                        id="docSearch"
                        name="docSearch"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by document name, code, department..."
                        className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                      />
                    </div>

                    {/* Category Dropdown */}
                    <div className="md:col-span-4 flex items-center gap-2">
                      <label
                        htmlFor="categorySelect"
                        className="text-xs sm:text-sm font-bold text-[#333333] whitespace-nowrap"
                      >
                        Category:
                      </label>
                      <select
                        id="categorySelect"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full h-8 px-2 text-xs sm:text-sm bg-white border border-[#ccc] rounded-none text-[#333333] focus:border-[#66afe9] focus:outline-none"
                      >
                        <option value="ALL">All Categories</option>
                        <option value="Academic Regulations">Academic Regulations</option>
                        <option value="Hostel Guidelines">Hostel Guidelines</option>
                        <option value="Discipline & Policies">Discipline & Policies</option>
                        <option value="Examinations">Examinations</option>
                        <option value="Finance & Scholarships">Finance & Scholarships</option>
                        <option value="Library & IT">Library & IT</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Counter and Document Notice */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#d2d6de]">
                  <span className="text-xs text-[#555555]">
                    Available Documents: <strong>{filteredDocuments.length}</strong> of <strong>{documents.length}</strong>
                  </span>
                  <span className="text-xs text-[#777777] italic">
                    All circulars and regulatory PDF handbooks are official university publications.
                  </span>
                </div>

                {/* Dense, Utilitarian Document Repository Table */}
                <div className="overflow-x-auto border border-[#d2d6de]">
                  <table className="table w-full text-xs sm:text-sm border-collapse bg-white">
                    <thead>
                      <tr className="bg-[#f5f5f5] text-[#333333] border-b border-[#d2d6de] text-left">
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center w-12">
                          S.No
                        </th>
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap w-32">
                          Doc Code & Date
                        </th>
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold min-w-[260px]">
                          Document Name / Policy Title
                        </th>
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap w-36">
                          Category
                        </th>
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold whitespace-nowrap w-44">
                          Issuing Authority
                        </th>
                        <th className="px-2.5 py-2 border-r border-[#d2d6de] font-bold text-center whitespace-nowrap w-24">
                          File Size
                        </th>
                        <th className="px-2.5 py-2 font-bold text-center whitespace-nowrap w-28">
                          Download Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDocuments.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="text-center py-8 text-[#777777] italic font-medium"
                          >
                            No regulatory documents found matching your search.
                          </td>
                        </tr>
                      ) : (
                        filteredDocuments.map((doc, idx) => (
                          <tr
                            key={doc.id}
                            className="border-b border-[#d2d6de] even:bg-[#f9f9f9] hover:bg-[#f5f5f5] text-[#333333]"
                          >
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de] text-center font-medium">
                              {idx + 1}
                            </td>
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de] whitespace-nowrap">
                              <span className="font-bold text-[#295b86] block text-xs">
                                {doc.docCode}
                              </span>
                              <span className="text-[11px] text-[#777777]">
                                {doc.uploadDate}
                              </span>
                            </td>
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de]">
                              <span className="font-bold text-[#333333] block">
                                {doc.docName}
                              </span>
                              <span className="text-[11px] text-[#666666]">
                                Version: {doc.version} | Format: {doc.fileFormat}
                              </span>
                            </td>
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de] text-center whitespace-nowrap">
                              <span className="inline-block bg-[#eef2f7] text-[#1B365D] text-[11px] font-bold px-2 py-0.5 border border-[#c2d4ea]">
                                {doc.category}
                              </span>
                            </td>
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de] text-xs text-[#555555]">
                              {doc.issuedBy}
                            </td>
                            <td className="px-2.5 py-2.5 border-r border-[#d2d6de] text-center font-mono font-medium text-xs whitespace-nowrap">
                              {doc.fileSize}
                            </td>
                            <td className="px-2.5 py-2.5 text-center whitespace-nowrap">
                              <button
                                type="button"
                                disabled={downloadingId === doc.id}
                                onClick={(e) => handleDownload(e, doc)}
                                className={`text-xs font-semibold py-1 px-3 rounded-none border transition-colors cursor-pointer ${
                                  downloadingId === doc.id
                                    ? "bg-gray-400 text-white border-gray-500 cursor-not-allowed"
                                    : "bg-[#337ab7] hover:bg-[#286090] text-white border-[#2e6da4]"
                                }`}
                              >
                                {downloadingId === doc.id ? "Downloading..." : "Download PDF"}
                              </button>
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
                    VIT Bhopal University - Central Document Repository & Regulatory Archives
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
