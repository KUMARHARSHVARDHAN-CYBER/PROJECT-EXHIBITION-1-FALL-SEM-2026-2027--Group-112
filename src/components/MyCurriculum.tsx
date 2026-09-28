"use client";

import React, { useState, useMemo } from "react";
import { Download, Search, FileText, CheckCircle2 } from "lucide-react";

export interface Course {
  slNo: number;
  code: string;
  title: string;
  type: string;
  version: string;
  l: number;
  t: number;
  p: number;
  j: number;
  credits: string;
  isCompleted?: boolean;
}

export interface CurriculumCategory {
  id: string;
  name: string;
  code: string;
  requiredCredits: number;
  courses: Course[];
}

export const mockCurriculumData: {
  authorizedID: string;
  studentName: string;
  degree: string;
  branch: string;
  totalCredits: number;
  categories: CurriculumCategory[];
} = {
  authorizedID: "25MIM10100",
  studentName: "KUMAR HARSHVARDHAN",
  degree: "Integrated M.Tech",
  branch: "Computer Science & Engineering (Specialization in AI & ML)",
  totalCredits: 229,
  categories: [
    {
      id: "custom-tabs-one-profile_0",
      name: "Programme Core",
      code: "PC",
      requiredCredits: 87,
      courses: [
        { slNo: 1, code: "CSA2001", title: "Fundamentals in AI and ML", type: "Lecture and Tutorial ,practical hours only", version: "1.1", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 2, code: "CSA2002", title: "INTRODUCTION TO DRONES", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 1, t: 1, p: 0, j: 0, credits: "2.0" },
        { slNo: 3, code: "CSA3003", title: "Reinforcement Learning", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 1, t: 1, p: 0, j: 0, credits: "2.0" },
        { slNo: 4, code: "CSA3007", title: "DEEP LEARNING", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 5, code: "CSA3008", title: "AI Clinic", type: "Practical Hours Only", version: "1.0", l: 0, t: 0, p: 2, j: 0, credits: "2.0" },
        { slNo: 6, code: "CSA4001", title: "Algorithm for Intelligent Systems", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
        { slNo: 7, code: "CSA4002", title: "Artificial Neural Networks", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 8, code: "CSA4008", title: "APPLIED MACHINE LEARNING", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 9, code: "CSA4016", title: "HARDWARE ARCHITECTURE FOR MACHINE LEARNING", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 10, code: "CSA4017", title: "OPTIMIZATION METHODS IN MACHINE LEARNING", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 11, code: "CSA4028", title: "NATURAL LANGUAGE PROCESSING", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 12, code: "CSE1021", title: "Introduction to Problem Solving and Programming", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0", isCompleted: true },
        { slNo: 13, code: "CSE2001", title: "Object Oriented Programming with C++", type: "Lecture and Tutorial ,practical hours only", version: "1.1", l: 2, t: 1, p: 1, j: 0, credits: "4.0", isCompleted: true },
        { slNo: 14, code: "CSE2002", title: "Data Structures and Algorithms", type: "Lecture and Tutorial ,practical hours only", version: "2.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 15, code: "CSE2003", title: "Computer Architecture and Organization", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 3, t: 1, p: 0, j: 0, credits: "4.0" },
        { slNo: 16, code: "CSE2004", title: "Theory Of Computation And Compiler Design", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 3, t: 1, p: 0, j: 0, credits: "4.0" },
        { slNo: 17, code: "CSE2006", title: "Programming in Java", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
        { slNo: 18, code: "CSE3001", title: "Database Management Systems", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 19, code: "CSE3003", title: "Operating System", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 20, code: "CSE3004", title: "Design and Analysis of Algorithms", type: "Lecture and Tutorial Hours Only", version: "2.0", l: 3, t: 1, p: 0, j: 0, credits: "4.0" },
        { slNo: 21, code: "CSE3006", title: "Computer Networks", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 22, code: "DSN2096", title: "Engineering Design", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 1, t: 1, p: 0, j: 0, credits: "2.0" },
        { slNo: 23, code: "ECE2002", title: "Digital Logic Design", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 24, code: "EEE1001", title: "Electric Circuits and Systems", type: "Lecture and Tutorial ,practical hours only", version: "1.3", l: 2, t: 1, p: 1, j: 0, credits: "4.0", isCompleted: true },
        { slNo: 25, code: "ONS3005", title: "Cloud Computing", type: "Online Course", version: "1.0", l: 0, t: 0, p: 0, j: 0, credits: "3.0" },
      ],
    },
    {
      id: "custom-tabs-one-profile_1",
      name: "Programme Elective",
      code: "PE",
      requiredCredits: 24,
      courses: [
        { slNo: 1, code: "CEC3017", title: "Blockchain Technology", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 2, code: "CSA3001", title: "Agent Based Intelligent Systems", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 3, code: "CSA3002", title: "Convex Optimization", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 1, t: 1, p: 0, j: 0, credits: "2.0" },
        { slNo: 4, code: "CSA3004", title: "Data Visualization", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 5, code: "CSA3015", title: "R Programming", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
        { slNo: 6, code: "CSA3020", title: "Generative AI", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 7, code: "CSA4003", title: "Data Mining And Data Warehousing", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 8, code: "CSA4005", title: "Expert Systems and Fuzzy Logic", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 9, code: "CSA4007", title: "COGNITIVE ANALYTICS", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 10, code: "CSA4009", title: "Open Source Operating System", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 11, code: "CSA4010", title: "Data Analytics Using Scala Programming", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 12, code: "CSA4011", title: "Information Retrieval and Web Search", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 13, code: "CSA4012", title: "Introduction to Brain and Neuro Science", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 14, code: "CSA4013", title: "Open Source Frameworks in Machine Learning", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 15, code: "CSA4014", title: "Applications of AI in Healthcare", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 16, code: "CSA4015", title: "COMPUTATIONAL INTELLIGENCE", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 17, code: "CSA4018", title: "RANDOMIZED ALGORITHMS", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 18, code: "CSA4019", title: "Machine Learning with Big Data", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
        { slNo: 19, code: "CSA4031", title: "Time Series Analysis and Its Applications", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 20, code: "CSD3007", title: "Block Chains And Crypto Currencies", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 21, code: "CSE3008", title: "Soft Computing", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 22, code: "CSE3010", title: "Computer Vision", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
        { slNo: 23, code: "CSE3011", title: "Python Programming", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
        { slNo: 24, code: "CSE3015", title: "AWS Cloud Practitioner", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 25, code: "CSE3016", title: "AWS Solution Architect", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 26, code: "CSE3017", title: "Salesforce", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0" },
        { slNo: 27, code: "CSG2003", title: "Human Computer Interaction", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 28, code: "ECE6012", title: "PATTERN RECOGNITION AND IMAGE ANALYSIS", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
        { slNo: 29, code: "MAS5008", title: "AI for Internet of Things", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 30, code: "MAS5009", title: "Application development using MLOps", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
      ],
    },
    {
      id: "custom-tabs-one-profile_2",
      name: "University Core - Natural Science Core",
      code: "UCNSC",
      requiredCredits: 26,
      courses: [
        { slNo: 1, code: "CHY1005", title: "Introduction to Computational chemistry", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0", isCompleted: true },
        { slNo: 2, code: "MAT1003", title: "Calculus", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 3, t: 1, p: 0, j: 0, credits: "4.0", isCompleted: true },
        { slNo: 3, code: "MAT2002", title: "Discrete Mathematics and Graph Theory", type: "Lecture and Tutorial Hours Only", version: "1.1", l: 3, t: 1, p: 0, j: 0, credits: "4.0" },
        { slNo: 4, code: "MAT3002", title: "Applied Linear Algebra", type: "Lecture and Tutorial Hours Only", version: "1.1", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 5, code: "MAT3003", title: "Probability, Statistics and Reliability", type: "Lecture and Tutorial Hours Only", version: "1.1", l: 3, t: 1, p: 0, j: 0, credits: "4.0" },
        { slNo: 6, code: "MAT3016", title: "Stochastic Process", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 7, code: "PHY1003", title: "Introduction to Computational Physics", type: "Lecture and Tutorial ,practical hours only", version: "1.0", l: 2, t: 1, p: 1, j: 0, credits: "4.0", isCompleted: true },
      ],
    },
    {
      id: "custom-tabs-one-profile_3",
      name: "University Core - Skill Development Courses",
      code: "UCSDC",
      requiredCredits: 7,
      courses: [
        { slNo: 1, code: "PLA1004", title: "Competitive Coding Practices", type: "Lecture and Practical Hours Only", version: "1.0", l: 2, t: 0, p: 1, j: 0, credits: "3.0" },
        { slNo: 2, code: "PLA1006", title: "Lateral Thinking", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 1, t: 1, p: 0, j: 0, credits: "2.0" },
        { slNo: 3, code: "SST1003", title: "Professional Communication Skills for Engineers", type: "Practical Hours Only", version: "1.0", l: 0, t: 0, p: 1, j: 0, credits: "1.0" },
        { slNo: 4, code: "SST2003", title: "Dynamics of workplace communication Skills", type: "Practical Hours Only", version: "1.0", l: 0, t: 0, p: 1, j: 0, credits: "1.0" },
      ],
    },
    {
      id: "custom-tabs-one-profile_4",
      name: "University Core - Humanities Social Science and Management Core",
      code: "UCHSSMC",
      requiredCredits: 6,
      courses: [
        { slNo: 1, code: "CHY1006", title: "Environmental Sustainability", type: "Lecture and Tutorial Hours Only", version: "1.1", l: 1, t: 1, p: 0, j: 0, credits: "2.0", isCompleted: true },
        { slNo: 2, code: "ENG1004", title: "EFFECTIVE TECHNICAL COMMUNICATION", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 1, t: 1, p: 0, j: 0, credits: "2.0", isCompleted: true },
        { slNo: 3, code: "ENG2005", title: "Advanced Technical Communication", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 1, t: 1, p: 0, j: 0, credits: "2.0" },
      ],
    },
    {
      id: "custom-tabs-one-profile_5",
      name: "University Core - Project and Internships",
      code: "UCPI",
      requiredCredits: 46,
      courses: [
        { slNo: 1, code: "DSN2097", title: "Internship", type: "Project Only", version: "1.0", l: 0, t: 0, p: 0, j: 2, credits: "2.0" },
        { slNo: 2, code: "DSN2098", title: "Project Exhibition - I", type: "Project Only", version: "1.0", l: 0, t: 0, p: 0, j: 1, credits: "1.0" },
        { slNo: 3, code: "DSN2099", title: "Project Exhibition - II", type: "Project Only", version: "1.0", l: 0, t: 0, p: 0, j: 1, credits: "1.0" },
        { slNo: 4, code: "DSN3099", title: "Engineering Project in Community Service", type: "Project Only", version: "1.0", l: 0, t: 0, p: 0, j: 2, credits: "2.0" },
        { slNo: 5, code: "DSN5098", title: "MASTER THESIS (Phase I & Phase 2)", type: "Project Only", version: "1.0", l: 0, t: 0, p: 0, j: 40, credits: "40.0" },
      ],
    },
    {
      id: "custom-tabs-one-profile_6",
      name: "University Elective - Natural Science Electives",
      code: "UENSE",
      requiredCredits: 6,
      courses: [
        { slNo: 1, code: "MAT2003", title: "Applied Numerical Method", type: "Lecture and Tutorial Hours Only", version: "1.1", l: 2, t: 1, p: 0, j: 0, credits: "3.0", isCompleted: true },
        { slNo: 2, code: "MAT2004", title: "Operations Research", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 3, code: "MAT3004", title: "Random Process", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 4, code: "MAT3017", title: "Statistical Inferences and Series of Function", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 5, code: "PHY2003", title: "Computational Physics", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
      ],
    },
    {
      id: "custom-tabs-one-profile_7",
      name: "University Elective - Humanities, Social Sciences and Management Electives",
      code: "UEHSSME",
      requiredCredits: 9,
      courses: [
        { slNo: 1, code: "HUM1002", title: "Emotional Intelligence", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0", isCompleted: true },
        { slNo: 2, code: "HUM1004", title: "Information Technology & Society", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0", isCompleted: true },
        { slNo: 3, code: "HUM1012", title: "Logic And Language Structure", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0", isCompleted: true },
        { slNo: 4, code: "HUM2001", title: "Behavioural Science", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0", isCompleted: true },
        { slNo: 5, code: "MGT1002", title: "PRINCIPLES OF MANAGEMENT AND ORGANIZATIONAL BEHAVIOUR", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0", isCompleted: true },
        { slNo: 6, code: "MGT1022", title: "Engineering Economics", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0", isCompleted: true },
      ],
    },
    {
      id: "custom-tabs-one-profile_8",
      name: "University Elective - Open Electives",
      code: "UEOE",
      requiredCredits: 9,
      courses: [
        { slNo: 1, code: "ECE1001", title: "Fundamentals of Electrical & Electronics", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
        { slNo: 2, code: "MEA1001", title: "Engineering Graphics & Design", type: "Lecture and Practical Hours Only", version: "1.0", l: 1, t: 0, p: 2, j: 0, credits: "3.0" },
        { slNo: 3, code: "CHE1001", title: "Energy and Environmental Engineering", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 1, p: 0, j: 0, credits: "3.0" },
      ],
    },
    {
      id: "custom-tabs-one-profile_9",
      name: "Non - Graded Mandatory Courses",
      code: "NMC",
      requiredCredits: 9,
      courses: [
        { slNo: 1, code: "EXC1001", title: "Co-Curricular Activities", type: "Practical Hours Only", version: "1.0", l: 0, t: 0, p: 0, j: 0, credits: "1.0" },
        { slNo: 2, code: "EXC1002", title: "Extra-Curricular Activities", type: "Practical Hours Only", version: "1.0", l: 0, t: 0, p: 0, j: 0, credits: "1.0" },
        { slNo: 3, code: "CHY1007", title: "Environmental Studies (Audit)", type: "Lecture and Tutorial Hours Only", version: "1.0", l: 2, t: 0, p: 0, j: 0, credits: "0.0" },
        { slNo: 4, code: "SWC1001", title: "Indian Constitution & Ethics", type: "Lecture Hours Only", version: "1.0", l: 2, t: 0, p: 0, j: 0, credits: "0.0" },
      ],
    },
  ],
};

export default function MyCurriculum() {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pageSize, setPageSize] = useState<number>(30);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const activeCategory = mockCurriculumData.categories[activeTabIdx] || mockCurriculumData.categories[0];

  // Filter courses based on search query
  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeCategory.courses;
    }
    const q = searchQuery.toLowerCase().trim();
    return activeCategory.courses.filter(
      (c) =>
        c.code.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.type.toLowerCase().includes(q)
    );
  }, [activeCategory, searchQuery]);

  const displayedCourses = useMemo(() => {
    if (pageSize === -1) return filteredCourses;
    return filteredCourses.slice(0, pageSize);
  }, [filteredCourses, pageSize]);

  const handleDownloadPDF = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="bootstrap3-iso w-full" id="page-wrapper">
      <div id="main-section" className="w-full">
        <section className="content">
          <div className="col-sm-12 max-w-7xl mx-auto px-1 sm:px-3 py-2">
            <div className="box box-info bg-white border border-[#d2d6de] border-t-[3px] border-t-[#3c8dbc] shadow-sm mb-6 rounded-none">
              
              {/* Box Header */}
              <div className="box-header with-border px-4 py-3 border-b border-[#f4f4f4] flex flex-wrap items-center justify-between">
                <h3 className="box-title text-base sm:text-lg font-bold text-[#333333] m-0">
                  My Curriculum
                </h3>
                <span className="text-xs text-gray-500 font-medium">
                  {mockCurriculumData.degree} - {mockCurriculumData.branch}
                </span>
              </div>

              <div className="box-body p-2 sm:p-4">
                {/* Status alerts */}
                {downloadSuccess && (
                  <div className="form-group text-center my-2 p-2 bg-green-50 border border-green-300 text-green-800 text-xs font-semibold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Curriculum PDF generation initiated successfully for Registration No: {mockCurriculumData.authorizedID}.</span>
                  </div>
                )}

                <div className="table-responsive px-0 sm:px-4">
                  <div id="exTab2" className="w-full">
                    
                    {/* Credit Info Summary Table */}
                    <div className="w-full max-w-2xl mx-auto mb-6">
                      <table
                        className="table table-bordered w-full border-collapse text-xs border border-[#3c8dbc]"
                        style={{ margin: "0 0 20px 0" }}
                      >
                        <tbody>
                          <tr
                            style={{
                              backgroundColor: "#23527c",
                              color: "#ffffff",
                              textAlign: "center",
                            }}
                            className="font-bold border border-[#3c8dbc]"
                          >
                            <td
                              style={{ border: "1px solid #3c8dbc" }}
                              colSpan={3}
                              className="py-1.5 uppercase tracking-wide text-xs sm:text-sm"
                            >
                              CREDIT INFO
                            </td>
                          </tr>
                          <tr
                            style={{
                              backgroundColor: "#23527c",
                              color: "#ffffff",
                            }}
                            className="font-bold text-center border-b border-[#3c8dbc]"
                          >
                            <td
                              style={{ border: "1px solid #3c8dbc", width: "10%" }}
                              className="p-1.5 text-center text-white"
                            >
                              Sl.No.
                            </td>
                            <td
                              style={{ border: "1px solid #3c8dbc", width: "70%" }}
                              className="p-1.5 text-center text-white"
                            >
                              Category
                            </td>
                            <td
                              style={{ border: "1px solid #3c8dbc", width: "20%" }}
                              className="p-1.5 text-center text-white"
                            >
                              Credits
                            </td>
                          </tr>

                          {mockCurriculumData.categories.map((cat, index) => (
                            <tr
                              key={cat.code}
                              className="border-b border-[#3c8dbc] hover:bg-slate-50 transition-colors"
                            >
                              <td
                                style={{ border: "1px solid #3c8dbc" }}
                                className="p-1.5 text-center text-black font-normal"
                              >
                                {index + 1}
                              </td>
                              <td
                                style={{ border: "1px solid #3c8dbc" }}
                                className="p-1.5 text-left text-black font-bold whitespace-nowrap sm:whitespace-normal"
                              >
                                <input
                                  type="hidden"
                                  name="courseCategory"
                                  id={`courseCategory_${index}`}
                                  value={cat.code}
                                />
                                {cat.name}
                              </td>
                              <td
                                style={{ border: "1px solid #3c8dbc" }}
                                className="p-1.5 text-center text-black font-bold"
                              >
                                {cat.requiredCredits}
                              </td>
                            </tr>
                          ))}

                          {/* Total Credits Row */}
                          <tr
                            style={{
                              color: "#ffffff",
                              textAlign: "center",
                            }}
                            className="font-bold border-t-2 border-[#3c8dbc]"
                          >
                            <td
                              colSpan={2}
                              style={{
                                backgroundColor: "#23527c",
                                border: "1px solid #3c8dbc",
                                color: "#ffffff",
                              }}
                              className="p-1.5 text-center uppercase tracking-wider text-xs"
                            >
                              Total Credits
                            </td>
                            <td
                              style={{
                                border: "1px solid #3c8dbc",
                                color: "#000000",
                                backgroundColor: "#f8fafc",
                              }}
                              className="p-1.5 text-center font-bold text-xs"
                            >
                              {mockCurriculumData.totalCredits}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Download Curriculum Button */}
                    <div className="row mb-4">
                      <div className="col-md-4">
                        <button
                          type="button"
                          id="curriculumDownload"
                          onClick={handleDownloadPDF}
                          className="btn btn-md bg-[#28a745] hover:bg-[#218838] text-white px-4 py-2 font-bold text-xs sm:text-sm flex items-center gap-2 rounded shadow-sm transition-all"
                        >
                          <span>Download Curriculum as PDF</span>
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Hidden Form Representation for Legacy Compatibility */}
                    <form
                      id="curriculumDownloadForm"
                      method="post"
                      action="academics/curriculDown"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        type="hidden"
                        name="_csrf"
                        value="9fa5d4d9-ad11-4101-83dc-8edc46a166d4"
                      />
                      <input
                        type="hidden"
                        name="authorizedID"
                        id="authorizedID"
                        value={mockCurriculumData.authorizedID}
                      />
                      <input
                        type="hidden"
                        name="regNo"
                        id="regNo"
                        value="NONE"
                      />
                    </form>

                    {/* Tabs Navigation */}
                    <div className="card card-primary card-tabs border-0">
                      <div className="card-header p-0 pt-1 border-b-[4px] border-[#23527c] overflow-x-auto">
                        <ul
                          className="nav nav-tabs flex flex-nowrap min-w-max border-0 p-0 m-0 list-none gap-0.5"
                          id="custom-tabs-one-tab"
                          role="tablist"
                        >
                          {mockCurriculumData.categories.map((cat, idx) => {
                            const isActive = activeTabIdx === idx;
                            return (
                              <li
                                key={cat.code}
                                className={`inline-block ${
                                  isActive ? "active" : ""
                                }`}
                              >
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveTabIdx(idx);
                                    setSearchQuery("");
                                  }}
                                  style={{
                                    backgroundColor: isActive
                                      ? "#23527c"
                                      : "transparent",
                                    color: isActive ? "#ffffff" : "#23527c",
                                    borderBottom: isActive
                                      ? "inherit"
                                      : "none",
                                  }}
                                  className={`nav-link px-3 py-2 text-xs font-bold whitespace-nowrap rounded-t cursor-pointer border-t border-l border-r ${
                                    isActive
                                      ? "border-[#23527c] shadow-sm"
                                      : "border-transparent hover:bg-slate-100 hover:text-blue-900"
                                  }`}
                                  role="tab"
                                  aria-selected={isActive}
                                >
                                  <span>{cat.name}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Tab Content & Data Table */}
                      <div className="card-body p-0 pt-4">
                        <div className="tab-content" id="custom-tabs-one-tabContent">
                          <div
                            id={activeCategory.id}
                            role="tabpanel"
                            className="tab-pane active"
                          >
                            <div
                              id={`example_${activeTabIdx}_wrapper`}
                              className="dataTables_wrapper no-footer"
                            >
                              {/* Controls Bar: Show entries & Search */}
                              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3 text-xs text-gray-700">
                                <div
                                  className="dataTables_length flex items-center gap-1.5"
                                  id={`example_${activeTabIdx}_length`}
                                >
                                  <label className="flex items-center gap-1.5 font-normal">
                                    Show
                                    <select
                                      name={`example_${activeTabIdx}_length`}
                                      aria-controls={`example_${activeTabIdx}`}
                                      value={pageSize}
                                      onChange={(e) =>
                                        setPageSize(Number(e.target.value))
                                      }
                                      className="border border-gray-300 rounded px-2 py-1 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    >
                                      <option value={30}>30</option>
                                      <option value={60}>60</option>
                                      <option value={90}>90</option>
                                      <option value={-1}>All</option>
                                    </select>
                                    entries
                                  </label>
                                </div>

                                <div
                                  id={`example_${activeTabIdx}_filter`}
                                  className="dataTables_filter flex items-center gap-1.5"
                                >
                                  <label className="flex items-center gap-1.5 font-normal">
                                    Search:
                                    <div className="relative">
                                      <input
                                        type="search"
                                        value={searchQuery}
                                        onChange={(e) =>
                                          setSearchQuery(e.target.value)
                                        }
                                        placeholder="Course code, title..."
                                        aria-controls={`example_${activeTabIdx}`}
                                        className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 w-44 sm:w-60"
                                      />
                                    </div>
                                  </label>
                                </div>
                              </div>

                              {/* Course Table */}
                              <div className="overflow-x-auto border border-[#d2d6de]">
                                <table
                                  id={`example_${activeTabIdx}`}
                                  className="table table-striped table-bordered dt-responsive nowrap dataTable w-full border-collapse text-xs"
                                >
                                  <thead style={{ backgroundColor: "#23527c" }}>
                                    <tr role="row" style={{ color: "#ffffff" }}>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-center font-bold"
                                        style={{ width: "4%" }}
                                      >
                                        Sl.No.
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-left font-bold"
                                        style={{ width: "12%" }}
                                      >
                                        Course Code
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-left font-bold"
                                        style={{ width: "35%" }}
                                      >
                                        Course Title
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-left font-bold"
                                        style={{ width: "25%" }}
                                      >
                                        Course Type
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-center font-bold"
                                        style={{ width: "6%" }}
                                      >
                                        Version
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-center font-bold"
                                        style={{ width: "3%" }}
                                      >
                                        L
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-center font-bold"
                                        style={{ width: "3%" }}
                                      >
                                        T
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-center font-bold"
                                        style={{ width: "3%" }}
                                      >
                                        P
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-center font-bold"
                                        style={{ width: "3%" }}
                                      >
                                        J
                                      </th>
                                      <th
                                        className="p-1.5 border border-[#3c8dbc] text-center font-bold"
                                        style={{ width: "6%" }}
                                      >
                                        Credits
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {displayedCourses.length > 0 ? (
                                      displayedCourses.map((course, idx) => {
                                        // Legacy VTOP uses bg-success for completed/registered courses
                                        const isEven = idx % 2 === 1;
                                        const rowBgClass = course.isCompleted
                                          ? "bg-[#dff0d8] text-[#3c763d] font-medium"
                                          : isEven
                                          ? "bg-[#f9f9f9] text-gray-900"
                                          : "bg-white text-gray-900";

                                        return (
                                          <tr
                                            key={course.code}
                                            role="row"
                                            className={`border-b border-[#d2d6de] hover:opacity-90 transition-opacity ${rowBgClass}`}
                                          >
                                            <td className="px-2.5 py-1 text-center border-r border-[#d2d6de]">
                                              {course.slNo}
                                            </td>
                                            <td className="px-2.5 py-1 text-left font-bold border-r border-[#d2d6de] whitespace-nowrap">
                                              <span>{course.code}</span>
                                              <a
                                                href={`#download-${course.code}`}
                                                title="Download Syllabus"
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  alert(
                                                    `Downloading syllabus for ${course.code} - ${course.title}`
                                                  );
                                                }}
                                                className="inline-block ml-2 text-blue-600 hover:text-blue-800"
                                              >
                                                <Download className="w-3.5 h-3.5 inline align-middle" />
                                              </a>
                                            </td>
                                            <td className="px-2.5 py-1 text-left border-r border-[#d2d6de]">
                                              {course.title}
                                            </td>
                                            <td className="px-2.5 py-1 text-left border-r border-[#d2d6de]">
                                              {course.type}
                                            </td>
                                            <td className="px-2.5 py-1 text-center border-r border-[#d2d6de]">
                                              {course.version}
                                            </td>
                                            <td className="px-2.5 py-1 text-center border-r border-[#d2d6de]">
                                              {course.l}
                                            </td>
                                            <td className="px-2.5 py-1 text-center border-r border-[#d2d6de]">
                                              {course.t}
                                            </td>
                                            <td className="px-2.5 py-1 text-center border-r border-[#d2d6de]">
                                              {course.p}
                                            </td>
                                            <td className="px-2.5 py-1 text-center border-r border-[#d2d6de]">
                                              {course.j}
                                            </td>
                                            <td className="px-2.5 py-1 text-center font-bold">
                                              {course.credits}
                                            </td>
                                          </tr>
                                        );
                                      })
                                    ) : (
                                      <tr>
                                        <td
                                          colSpan={10}
                                          className="text-center py-6 text-gray-500 font-medium bg-gray-50"
                                        >
                                          No matching courses found for &quot;{searchQuery}&quot;
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </table>
                              </div>

                              {/* Footer: Showing entries info & Pagination */}
                              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-3 text-xs text-gray-600">
                                <div
                                  className="dataTables_info"
                                  id={`example_${activeTabIdx}_info`}
                                  role="status"
                                  aria-live="polite"
                                >
                                  Showing 1 to {displayedCourses.length} of{" "}
                                  {filteredCourses.length} entries
                                  {searchQuery && ` (filtered from ${activeCategory.courses.length} total entries)`}
                                </div>

                                <div
                                  className="dataTables_paginate paging_simple_numbers flex items-center gap-1"
                                  id={`example_${activeTabIdx}_paginate`}
                                >
                                  <button
                                    type="button"
                                    disabled
                                    className="paginate_button previous disabled px-2.5 py-1 border border-gray-300 rounded text-gray-400 bg-gray-100 cursor-not-allowed"
                                  >
                                    Previous
                                  </button>
                                  <span className="paginate_button current px-2.5 py-1 border border-[#337ab7] bg-[#337ab7] text-white rounded font-bold">
                                    1
                                  </span>
                                  <button
                                    type="button"
                                    disabled
                                    className="paginate_button next disabled px-2.5 py-1 border border-gray-300 rounded text-gray-400 bg-gray-100 cursor-not-allowed"
                                  >
                                    Next
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
