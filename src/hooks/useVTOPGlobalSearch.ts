// src/hooks/useVTOPGlobalSearch.ts
'use client';

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import {
  DEFAULT_FILTER_STATE,
  SearchCategory,
  SearchFacetCount,
  SearchFacets,
  SearchFilterState,
  SearchResponse,
  SearchResultItem,
  SearchResultType,
  SortOption,
} from '@/types/search';

// ---------------------------------------------------------------------------
// Mock dataset - Comprehensive VTOP portal routes & semester data
// ---------------------------------------------------------------------------
export const MOCK_SEARCH_DATA: SearchResultItem[] = [
  // ================= 1. ACADEMIC SERVICES =================
  {
    id: 'academics-timetable',
    title: 'Class Timetable & Schedule',
    description: 'Weekly course schedule, venue room allocations, slot timings, and theory/lab distribution for current semester.',
    category: 'academic_services',
    type: 'schedule',
    url: '/dashboard/timetable',
    tags: ['timetable', 'schedule', 'slots', 'classes', 'venue', 'routine', 'routine table'],
    updatedAt: '2026-09-08T08:30:00Z',
    metadata: { semester: 'Fall Semester 2026-27' },
  },
  {
    id: 'my-curriculum',
    title: 'My Curriculum & Degree Audit',
    description: 'Programme structure, basket-wise credit requirements (PC, PE, UC, UE), and graduation audit checklist.',
    category: 'academic_services',
    type: 'page',
    url: '/dashboard/curriculum',
    tags: ['curriculum', 'programme', 'credits', 'baskets', 'electives', 'core courses', 'degree'],
    updatedAt: '2026-08-15T10:00:00Z',
    metadata: { courseCode: 'B.Tech CSE' },
  },
  {
    id: 'academic-calendar',
    title: 'Academic Calendar 2026-27',
    description: 'Official university calendar marking instructional days, CAT windows, holidays, and FAT exams.',
    category: 'academic_services',
    type: 'page',
    url: '/dashboard/calendar',
    tags: ['calendar', 'academic calendar', 'holidays', 'instructional days', 'working days', 'semester schedule'],
    updatedAt: '2026-08-01T09:00:00Z',
  },
  {
    id: 'academic-calendar-pdf',
    title: 'Academic Calendar 2026-27 (Official PDF)',
    description: 'Downloadable PDF copy of the approved university schedule, working days, and declared holidays.',
    category: 'academic_services',
    type: 'pdf',
    url: '/dashboard/academic-calendar',
    downloadUrl: '#',
    tags: ['pdf', 'calendar', 'holidays', 'download', 'schedule'],
    updatedAt: '2026-08-01T09:00:00Z',
    metadata: { fileSize: '1.2 MB' },
  },
  {
    id: 'digital-assignment-upload',
    title: 'Digital Assignment (DA) Upload Portal',
    description: 'Submit course digital assignments, lab records, and view evaluation feedback and deadlines.',
    category: 'academic_services',
    type: 'page',
    url: '/dashboard/curriculum',
    tags: ['da', 'assignment', 'upload', 'submission', 'deadlines', 'homework'],
    updatedAt: '2026-09-09T14:30:00Z',
  },
  {
    id: 'course-registration-crs',
    title: 'Course Registration (FFCS / CRS)',
    description: 'Register for core courses, university electives, and lab slots during the open registration window.',
    category: 'academic_services',
    type: 'page',
    url: '/dashboard/curriculum',
    tags: ['registration', 'ffcs', 'crs', 'electives', 'slots', 'course add drop'],
    updatedAt: '2026-09-02T09:00:00Z',
  },
  {
    id: 'btech-cse-syllabus-pdf',
    title: 'B.Tech CSE Complete Syllabus Handbook',
    description: 'Official curriculum syllabus containing course outcomes, unit-wise syllabus, and reference textbooks.',
    category: 'academic_services',
    type: 'pdf',
    url: '/dashboard/curriculum',
    downloadUrl: '#',
    tags: ['syllabus', 'handbook', 'pdf', 'outcomes', 'curriculum', 'cse'],
    updatedAt: '2026-07-15T10:00:00Z',
    metadata: { fileSize: '3.8 MB', courseCode: 'CSE-2026' },
  },

  // ================= 2. EXAM & MARKS =================
  {
    id: 'exam-schedule',
    title: 'Exam Schedule (CAT 1, CAT 2 & FAT)',
    description: 'Continuous Assessment Tests and Final Assessment Test dates, reporting times, and exam hall allocations.',
    category: 'exam_and_marks',
    type: 'schedule',
    url: '/dashboard/exam-schedule',
    tags: ['exam', 'cat', 'fat', 'schedule', 'seating', 'hall ticket', 'midterm', 'finals'],
    updatedAt: '2026-09-05T09:00:00Z',
    metadata: { semester: 'Fall Semester 2026-27' },
  },
  {
    id: 'marks-continuous-assessment',
    title: 'Marks & Assessment Breakdown',
    description: 'Check quiz, assignment (DA), CAT 1, CAT 2, and lab internal marks evaluation.',
    category: 'exam_and_marks',
    type: 'page',
    url: '/dashboard/marks',
    tags: ['marks', 'quiz', 'da', 'assignment', 'internals', 'scores', 'cat marks'],
    updatedAt: '2026-09-09T16:45:00Z',
  },
  {
    id: 'grades-current-semester',
    title: 'Grades & Semester Results',
    description: 'Published letter grades (S, A, B, C, D, E, F) and grade points for completed semester courses.',
    category: 'exam_and_marks',
    type: 'page',
    url: '/dashboard/grades',
    tags: ['grades', 'gpa', 'result', 'grade card', 'published', 'credits'],
    updatedAt: '2026-07-20T11:00:00Z',
  },
  {
    id: 'grade-history-cgpa',
    title: 'Grade History & CGPA Calculator',
    description: 'Comprehensive academic transcript archive across all semesters with CGPA projection simulation.',
    category: 'exam_and_marks',
    type: 'page',
    url: '/dashboard/grade-history',
    tags: ['cgpa', 'transcript', 'grade history', 'calculator', 'history', 'credits earned'],
    updatedAt: '2026-07-22T12:00:00Z',
  },
  {
    id: 'fat-hall-ticket-download',
    title: 'FAT Exam Hall Ticket & Seating Slip',
    description: 'Download printable hall ticket with verified barcode, assigned exam block, and invigilator guidelines.',
    category: 'exam_and_marks',
    type: 'pdf',
    url: '/dashboard/exam-schedule',
    downloadUrl: '#',
    tags: ['hall ticket', 'admit card', 'fat', 'seating', 'pdf', 'barcode'],
    updatedAt: '2026-09-01T08:00:00Z',
    metadata: { fileSize: '240 KB', semester: 'Fall Semester 2026-27' },
  },
  {
    id: 'previous-year-question-papers',
    title: 'CAT / FAT Previous Year Question Papers Archive',
    description: 'Access past 3 years examination question papers categorized by course code for exam preparation.',
    category: 'exam_and_marks',
    type: 'page',
    url: '/dashboard/marks',
    tags: ['pyq', 'question papers', 'exam prep', 'past papers', 'cat', 'fat'],
    updatedAt: '2026-08-18T10:00:00Z',
  },
  {
    id: 'revaluation-paper-seeing',
    title: 'Paper Seeing & Grade Revaluation Request',
    description: 'Apply for answer script review, retotalling, or grade revaluation following FAT results announcement.',
    category: 'exam_and_marks',
    type: 'page',
    url: '/dashboard/grades',
    tags: ['revaluation', 'paper seeing', 'review', 'retotalling', 'grade review'],
    updatedAt: '2026-07-25T14:00:00Z',
  },

  // ================= 3. ATTENDANCE =================
  {
    id: 'attendance-details',
    title: 'Class Attendance & Shortage Alert',
    description: 'Subject-wise attendance percentage, attended vs total classes, and 75% threshold status.',
    category: 'attendance',
    type: 'page',
    url: '/dashboard/attendance',
    tags: ['attendance', 'percentage', 'shortage', 'classes', 'debarred', '75%'],
    updatedAt: '2026-09-09T10:15:00Z',
  },
  {
    id: 'attendance-condonation-form',
    title: 'Attendance Shortage Condonation Form',
    description: 'Official medical & emergency condonation application form when attendance drops below the 75% threshold.',
    category: 'attendance',
    type: 'pdf',
    url: '/dashboard/attendance',
    downloadUrl: '#',
    tags: ['condonation', 'medical leave', 'shortage', 'form', 'pdf', 'doctor certificate'],
    updatedAt: '2026-08-20T11:00:00Z',
    metadata: { fileSize: '184 KB' },
  },
  {
    id: 'on-duty-leave-application',
    title: 'On-Duty (OD) Leave Application',
    description: 'Apply for OD attendance exemption for participating in hackathons, sports fests, and technical symposiums.',
    category: 'attendance',
    type: 'page',
    url: '/dashboard/attendance',
    tags: ['od', 'on duty', 'exemption', 'hackathon', 'sports', 'symposium'],
    updatedAt: '2026-09-04T12:00:00Z',
  },
  {
    id: 'biometric-attendance-log',
    title: 'Biometric Attendance & Punch Records',
    description: 'View daily hostel night in-out punch logs and biometric gate checkpoint verification times.',
    category: 'attendance',
    type: 'page',
    url: '/dashboard/attendance',
    tags: ['biometric', 'punch log', 'hostel punch', 'gate timing', 'in out'],
    updatedAt: '2026-09-10T07:00:00Z',
  },
  {
    id: 'attendance-shortage-calculator',
    title: 'Attendance Threshold & Bunk Calculator',
    description: 'Calculate how many upcoming classes you can miss or must attend to safely maintain 75% / 80% criteria.',
    category: 'attendance',
    type: 'page',
    url: '/dashboard/attendance',
    tags: ['calculator', 'predictor', 'threshold', 'bunk', 'shortage', '75 percent'],
    updatedAt: '2026-09-08T15:00:00Z',
  },

  // ================= 4. COURSE MATERIALS =================
  {
    id: 'cse3005-software-engg-slides',
    title: 'CSE3005 - Software Engineering Module Slides',
    description: 'Complete slide decks covering Agile, Design Patterns, CI/CD pipelines, and UML diagrams.',
    category: 'course_materials',
    type: 'pdf',
    url: '/dashboard/curriculum',
    downloadUrl: '#',
    tags: ['notes', 'slides', 'software engineering', 'agile', 'uml', 'cse3005'],
    updatedAt: '2026-09-03T09:00:00Z',
    metadata: { fileSize: '4.6 MB', courseCode: 'CSE3005' },
  },
  {
    id: 'mat2001-calculus-notes',
    title: 'MAT2001 - Calculus & Linear Algebra Lecture Notes',
    description: 'Professors handwritten lecture notes, formula sheets, eigenvalues practice problems, and solutions.',
    category: 'course_materials',
    type: 'pdf',
    url: '/dashboard/curriculum',
    downloadUrl: '#',
    tags: ['maths', 'calculus', 'linear algebra', 'notes', 'formula sheet', 'mat2001'],
    updatedAt: '2026-08-28T11:00:00Z',
    metadata: { fileSize: '2.9 MB', courseCode: 'MAT2001' },
  },
  {
    id: 'dsa-code-repository',
    title: 'DSA Lab Code Repository & Practice Solutions',
    description: 'Interactive code examples for trees, graphs, dynamic programming, and sorting algorithms in C++ & Java.',
    category: 'course_materials',
    type: 'external_link',
    url: 'https://github.com',
    tags: ['dsa', 'github', 'algorithms', 'code', 'data structures', 'lab'],
    updatedAt: '2026-09-07T10:00:00Z',
    metadata: { courseCode: 'CSE2001' },
  },
  {
    id: 'central-library-ebooks-portal',
    title: 'Central Library E-Books & IEEE Xplore Portal',
    description: 'Prescribed university textbooks, Springer engineering handbooks, and IEEE research papers catalogue.',
    category: 'course_materials',
    type: 'external_link',
    url: '/dashboard',
    tags: ['library', 'ebooks', 'ieee', 'springer', 'research papers', 'textbooks'],
    updatedAt: '2026-08-10T14:00:00Z',
    metadata: { fileSize: 'Online Access' },
  },
  {
    id: 'phy1001-physics-lab-manual',
    title: 'PHY1001 - Engineering Physics Lab Manual',
    description: 'Step-by-step experiment procedures, circuit diagrams, error calculations, and viva questions.',
    category: 'course_materials',
    type: 'pdf',
    url: '/dashboard/curriculum',
    downloadUrl: '#',
    tags: ['physics', 'lab manual', 'experiments', 'viva', 'phy1001'],
    updatedAt: '2026-08-22T09:30:00Z',
    metadata: { fileSize: '5.2 MB', courseCode: 'PHY1001' },
  },

  // ================= 5. FACULTY & PROCTORS =================
  {
    id: 'proctor-details',
    title: 'Proctor Details & Faculty Advisor',
    description: 'Assigned proctor details, cabin location, office hours, email contact, and phone extension.',
    category: 'faculty_and_proctors',
    type: 'page',
    url: '/dashboard/proctor-details',
    tags: ['proctor', 'mentor', 'advisor', 'cabin', 'office hours', 'faculty contact'],
    updatedAt: '2026-06-30T12:00:00Z',
    metadata: { department: 'School of Computer Science & Engineering' },
  },
  {
    id: 'proctor-meeting-scheduler',
    title: 'Proctor Meeting Scheduler',
    description: 'Book one-on-one advising sessions with your proctor for academic counselling and leave approvals.',
    category: 'faculty_and_proctors',
    type: 'page',
    url: '/dashboard/proctor-scheduler',
    tags: ['proctor', 'meeting', 'appointment', 'scheduler', 'advising', 'booking'],
    updatedAt: '2026-08-25T14:00:00Z',
  },
  {
    id: 'scse-faculty-directory',
    title: 'SCSE Faculty Directory & Cabin Locations',
    description: 'Alphabetical list of professors, associate deans, department chairs, and cabin office numbers.',
    category: 'faculty_and_proctors',
    type: 'page',
    url: '/dashboard/contact',
    tags: ['faculty', 'directory', 'professors', 'cabin', 'staff', 'teachers'],
    updatedAt: '2026-08-15T11:00:00Z',
    metadata: { department: 'SCSE / SITE / SMEC' },
  },
  {
    id: 'dean-academics-office',
    title: 'Dean of Academics Office Desk',
    description: 'Academic grievance redressal, credit transfer approvals, and official Dean office hours.',
    category: 'faculty_and_proctors',
    type: 'page',
    url: '/dashboard/contact',
    tags: ['dean', 'academics', 'grievance', 'office hours', 'credit transfer'],
    updatedAt: '2026-08-01T10:00:00Z',
  },
  {
    id: 'dsw-student-welfare-office',
    title: 'Directorate of Student Welfare (DSW)',
    description: 'Student counselling cell, mental health support desk, student clubs oversight, and welfare contacts.',
    category: 'faculty_and_proctors',
    type: 'page',
    url: '/dashboard/contact',
    tags: ['dsw', 'welfare', 'counselling', 'student affairs', 'helpline'],
    updatedAt: '2026-07-20T09:00:00Z',
  },

  // ================= 6. FACILITIES & HOSTEL =================
  {
    id: 'hostel-leave-request',
    title: 'Hostel Leave Request & Outpass',
    description: 'Apply for weekend, emergency, or vacation outpass with warden verification and approval tracking.',
    category: 'facilities_and_hostel',
    type: 'page',
    url: '/dashboard/leave-request',
    tags: ['leave', 'outpass', 'hostel', 'warden', 'home visit', 'vacation', 'gate pass'],
    updatedAt: '2026-09-07T14:20:00Z',
  },
  {
    id: 'hostel-room-allotment',
    title: 'Hostel Room Allotment Status',
    description: 'View allotted block, room number, bed type, mess type (Special/North/South), and roommates.',
    category: 'facilities_and_hostel',
    type: 'page',
    url: '/dashboard/room-allotment',
    tags: ['hostel', 'room', 'block', 'bed', 'mess', 'allotment', 'residence'],
    updatedAt: '2026-07-28T09:00:00Z',
  },
  {
    id: 'water-facility-complaint',
    title: 'Water Facility & Maintenance Request',
    description: 'Lodge maintenance tickets for water purifiers, water coolers, plumbing, or block supply issues.',
    category: 'facilities_and_hostel',
    type: 'page',
    url: '/dashboard/water-facility',
    tags: ['water', 'facility', 'complaint', 'maintenance', 'filter', 'dispenser', 'plumbing'],
    updatedAt: '2026-09-02T11:30:00Z',
  },
  {
    id: 'transport-facility-bus',
    title: 'Transport Facility & Bus Routes',
    description: 'Campus shuttle schedules, day scholar bus routes, pickup points, timings, and driver contacts.',
    category: 'facilities_and_hostel',
    type: 'schedule',
    url: '/dashboard/transport-facility',
    tags: ['transport', 'bus', 'shuttle', 'routes', 'timing', 'pickup', 'commute'],
    updatedAt: '2026-08-10T10:00:00Z',
  },
  {
    id: 'hostel-mess-menu-feedback',
    title: 'Weekly Hostel Mess Menu & Meal Rating',
    description: 'Weekly meal rotation menu for North/South/Special catering and meal quality feedback submission.',
    category: 'facilities_and_hostel',
    type: 'page',
    url: '/dashboard/leave-request',
    tags: ['mess', 'food', 'menu', 'breakfast', 'lunch', 'dinner', 'catering'],
    updatedAt: '2026-09-05T08:00:00Z',
  },
  {
    id: 'sports-complex-booking',
    title: 'Sports Complex & Gymnasium Slot Booking',
    description: 'Reserve badminton courts, basketball arena, table tennis tables, and gym fitness slots.',
    category: 'facilities_and_hostel',
    type: 'page',
    url: '/dashboard/general',
    tags: ['sports', 'gym', 'badminton', 'fitness', 'court booking', 'recreation'],
    updatedAt: '2026-08-30T16:00:00Z',
  },

  // ================= 7. ADMINISTRATIVE =================
  {
    id: 'online-payments-receipts',
    title: 'Online Payments & Receipts',
    description: 'Pay academic fees, hostel fees, mess arrears, and download official payment receipts.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/payments',
    tags: ['payments', 'fees', 'receipt', 'tuition', 'mess fee', 'transaction', 'challan'],
    updatedAt: '2026-09-01T15:00:00Z',
  },
  {
    id: 'fees-intimation',
    title: 'Fees Intimation & Due Breakdown',
    description: 'Itemized breakdown of semester tuition, hostel charges, caution deposit, and due deadlines.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/fees-intimation',
    tags: ['fees', 'intimation', 'dues', 'breakdown', 'deadlines', 'accounts'],
    updatedAt: '2026-08-18T13:00:00Z',
  },
  {
    id: 'apply-bonafide-certificate',
    title: 'Bonafide Certificate Request',
    description: 'Apply for official Bonafide certificates for education loans, visa applications, passport, or internships.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/bonafide',
    tags: ['bonafide', 'certificate', 'loan', 'passport', 'visa', 'internship', 'letter'],
    updatedAt: '2026-08-12T10:30:00Z',
  },
  {
    id: 'eca-club-registration',
    title: 'ECA Club & Chapter Registration',
    description: 'Browse student technical clubs, arts societies, chapters, and enroll in extracurricular activities.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/club-registration',
    tags: ['club', 'chapter', 'eca', 'societies', 'enrollment', 'cultural', 'technical'],
    updatedAt: '2026-08-20T16:00:00Z',
  },
  {
    id: 'student-profile',
    title: 'Student Profile & Bio-Data',
    description: 'Personal info, registration number (25MIM10100), programme, branch, blood group, and addresses.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/profile',
    tags: ['profile', 'student profile', 'personal details', 'reg no', 'branch', 'address'],
    updatedAt: '2026-09-01T08:00:00Z',
  },
  {
    id: 'student-credentials',
    title: 'Credentials & Wi-Fi Password',
    description: 'Manage institutional email account, campus Wi-Fi credentials, and portal authentication keys.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/credentials',
    tags: ['credentials', 'wifi', 'password', 'email', 'wifi login', 'internet'],
    updatedAt: '2026-08-05T11:00:00Z',
  },
  {
    id: 'student-bank-info',
    title: 'Student Bank Account Information',
    description: 'Add or update verified bank account number and IFSC code for scholarship and security refunds.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/bank-info',
    tags: ['bank', 'bank info', 'ifsc', 'account number', 'refund', 'scholarship'],
    updatedAt: '2026-07-10T14:00:00Z',
  },
  {
    id: 'apaar-id-upload',
    title: 'APAAR / ABC ID Upload',
    description: 'Link your Automated Permanent Academic Account Registry (APAAR / ABC ID) with university records.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/apaar-id',
    tags: ['apaar', 'abc id', 'academic bank of credits', 'digilocker', 'national id'],
    updatedAt: '2026-08-30T10:00:00Z',
  },
  {
    id: 'student-acknowledgement',
    title: 'Student Acknowledgement View',
    description: 'Review signed undertaking forms, code of conduct affirmations, and anti-ragging submissions.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/acknowledgement',
    tags: ['acknowledgement', 'undertaking', 'anti-ragging', 'terms', 'code of conduct'],
    updatedAt: '2026-07-01T09:00:00Z',
  },
  {
    id: 'info-corner-faq',
    title: 'Frequently Asked Questions (FAQ)',
    description: 'Answers regarding grade improvements, attendance rules, re-registration, hostel norms, and exams.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/faq',
    tags: ['faq', 'help', 'questions', 'support', 'guidelines', 'queries'],
    updatedAt: '2026-08-14T12:00:00Z',
  },
  {
    id: 'info-corner-spotlight',
    title: 'Spotlight & Campus News',
    description: 'Latest institutional announcements, guest lectures, placement drives, and hackathon notices.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/spotlight',
    tags: ['spotlight', 'news', 'events', 'hackathon', 'placements', 'announcements'],
    updatedAt: '2026-09-09T18:00:00Z',
  },
  {
    id: 'info-corner-general',
    title: 'General Circulars & Circular Board',
    description: 'Official registrar circulars, academic notifications, and university statutory guidelines.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/general',
    tags: ['general', 'circulars', 'notices', 'bulletin', 'office orders'],
    updatedAt: '2026-09-04T09:30:00Z',
  },
  {
    id: 'contact-details-directory',
    title: 'University Contact Directory',
    description: 'Important university office contacts: Proctor office, Examination cell, Hostel warden desk, and Health centre.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/contact',
    tags: ['contact', 'phone', 'emergency', 'warden phone', 'helpline', 'medical centre'],
    updatedAt: '2026-07-15T11:00:00Z',
  },
  {
    id: 'security-change-password',
    title: 'Change VTOP Password',
    description: 'Update your student portal login password and configure 2FA security preferences.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/change-password',
    tags: ['password', 'change password', 'security', 'reset password', 'account'],
    updatedAt: '2026-08-10T10:00:00Z',
  },
  {
    id: 'security-backup-codes',
    title: 'Two-Factor Backup Codes',
    description: 'Generate and store emergency recovery codes for multi-factor authentication.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/backup-codes',
    tags: ['backup codes', '2fa', 'security', 'recovery', 'mfa', 'auth'],
    updatedAt: '2026-08-10T10:05:00Z',
  },
  {
    id: 'security-login-history',
    title: 'Login Session History & Audit',
    description: 'View recent sign-in timestamps, device IP addresses, browser types, and active sessions.',
    category: 'administrative',
    type: 'page',
    url: '/dashboard/login-history',
    tags: ['login history', 'sessions', 'ip address', 'audit', 'security log', 'devices'],
    updatedAt: '2026-09-10T12:00:00Z',
  },
];

// ---------------------------------------------------------------------------
// Match highlighter helper
// ---------------------------------------------------------------------------
export interface HighlightSegment {
  text: string;
  isMatch: boolean;
}

export function highlightMatches(text: string, query: string): HighlightSegment[] {
  if (!query || !query.trim()) {
    return [{ text, isMatch: false }];
  }

  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (terms.length === 0) {
    return [{ text, isMatch: false }];
  }

  const regex = new RegExp(`(${terms.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts
    .filter((part) => part.length > 0)
    .map((part) => ({
      text: part,
      isMatch: regex.test(part),
    }));
}

// ---------------------------------------------------------------------------
// Client-side Scoring Algorithm (.filter() + keyword weighting)
// ---------------------------------------------------------------------------
function scoreItem(item: SearchResultItem, query: string): number {
  if (!query) return 1;

  const q = query.trim().toLowerCase();
  const tokens = q.split(/\s+/).filter(Boolean);

  let score = 0;
  const titleLower = item.title.toLowerCase();
  const descLower = item.description.toLowerCase();
  const tagsLower = item.tags.map((t) => t.toLowerCase());
  const urlLower = item.url.toLowerCase();
  const courseCodeLower = item.metadata?.courseCode?.toLowerCase() || '';

  // Exact phrase matches
  if (titleLower === q) score += 120;
  else if (titleLower.startsWith(q)) score += 80;
  else if (titleLower.includes(q)) score += 50;

  if (tagsLower.includes(q)) score += 60;
  if (courseCodeLower && courseCodeLower.includes(q)) score += 70;
  if (urlLower.includes(q)) score += 30;
  if (descLower.includes(q)) score += 20;

  // Token-level matching
  let matchedAllTokens = true;
  for (const token of tokens) {
    let tokenMatched = false;

    if (titleLower.includes(token)) {
      score += 25;
      tokenMatched = true;
    }
    if (tagsLower.some((t) => t.includes(token))) {
      score += 20;
      tokenMatched = true;
    }
    if (courseCodeLower.includes(token)) {
      score += 20;
      tokenMatched = true;
    }
    if (descLower.includes(token)) {
      score += 10;
      tokenMatched = true;
    }
    if (urlLower.includes(token)) {
      score += 10;
      tokenMatched = true;
    }

    if (!tokenMatched) {
      matchedAllTokens = false;
    }
  }

  // If multi-word query, boost results that match every word
  if (tokens.length > 1 && matchedAllTokens) {
    score += 40;
  }

  return score;
}

// ---------------------------------------------------------------------------
// LocalStorage Recent Searches
// ---------------------------------------------------------------------------
const RECENT_SEARCHES_KEY = 'vtop_global_recent_searches';
const MAX_RECENT_SEARCHES = 5;

function readRecentSearches(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(RECENT_SEARCHES_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeRecentSearches(searches: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(searches));
  } catch {
    // Silently ignore storage quota or private mode issues
  }
}

// ---------------------------------------------------------------------------
// Filter Reducer
// ---------------------------------------------------------------------------
type FilterAction =
  | { type: 'SET_QUERY'; query: string }
  | { type: 'SET_CATEGORY'; category: SearchCategory | 'all' }
  | { type: 'TOGGLE_TAG'; tag: string }
  | { type: 'TOGGLE_TYPE'; resultType: SearchResultType }
  | { type: 'SET_PAGE'; page: number }
  | { type: 'SET_PAGE_SIZE'; pageSize: number }
  | { type: 'SET_SORT'; sortBy: SortOption }
  | { type: 'CLEAR_ALL' };

function filterReducer(state: SearchFilterState, action: FilterAction): SearchFilterState {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.query, page: 1 };
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.category, page: 1 };
    case 'TOGGLE_TAG': {
      const exists = state.selectedTags.includes(action.tag);
      const nextTags = exists
        ? state.selectedTags.filter((t) => t !== action.tag)
        : [...state.selectedTags, action.tag];
      return { ...state, selectedTags: nextTags, page: 1 };
    }
    case 'TOGGLE_TYPE': {
      const exists = state.selectedTypes.includes(action.resultType);
      const nextTypes = exists
        ? state.selectedTypes.filter((t) => t !== action.resultType)
        : [...state.selectedTypes, action.resultType];
      return { ...state, selectedTypes: nextTypes, page: 1 };
    }
    case 'SET_PAGE':
      return { ...state, page: action.page };
    case 'SET_PAGE_SIZE':
      return { ...state, pageSize: action.pageSize, page: 1 };
    case 'SET_SORT':
      return { ...state, sortBy: action.sortBy, page: 1 };
    case 'CLEAR_ALL':
      return { ...DEFAULT_FILTER_STATE, pageSize: state.pageSize };
    default:
      return state;
  }
}

// ---------------------------------------------------------------------------
// Debounce Helper
// ---------------------------------------------------------------------------
function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(handle);
  }, [value, delayMs]);

  return debounced;
}

// ---------------------------------------------------------------------------
// Public Hook Definition
// ---------------------------------------------------------------------------
export interface UseVTOPGlobalSearchOptions {
  debounceMs?: number;
  dataset?: SearchResultItem[];
  initialQuery?: string;
  initialCategory?: SearchCategory | 'all';
}

export interface UseVTOPGlobalSearchResult {
  filters: SearchFilterState;
  inputValue: string;
  setQuery: (query: string) => void;
  setCategory: (category: SearchCategory | 'all') => void;
  toggleTag: (tag: string) => void;
  toggleType: (resultType: SearchResultType) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setSortBy: (sortBy: SortOption) => void;
  clearAllFilters: () => void;
  isSearching: boolean;
  response: SearchResponse;
  allFilteredResults: SearchResultItem[];
  recentSearches: string[];
  addRecentSearch: (query: string) => void;
  removeRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
}

export function useVTOPGlobalSearch(
  options: UseVTOPGlobalSearchOptions = {}
): UseVTOPGlobalSearchResult {
  const {
    debounceMs = 150,
    dataset = MOCK_SEARCH_DATA,
    initialQuery = '',
    initialCategory = 'all',
  } = options;

  const [filters, dispatch] = useReducer(filterReducer, {
    ...DEFAULT_FILTER_STATE,
    query: initialQuery,
    selectedCategory: initialCategory,
  });

  const [inputValue, setInputValue] = useState(initialQuery);
  const debouncedQuery = useDebouncedValue(inputValue, debounceMs);
  const [isSearching, setIsSearching] = useState(false);
  const searchingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  useEffect(() => {
    setRecentSearches(readRecentSearches());
  }, []);

  // Update query on debounced value change
  useEffect(() => {
    dispatch({ type: 'SET_QUERY', query: debouncedQuery });
  }, [debouncedQuery]);

  // Brief searching state for indicator
  useEffect(() => {
    setIsSearching(true);
    if (searchingTimeoutRef.current) clearTimeout(searchingTimeoutRef.current);
    searchingTimeoutRef.current = setTimeout(() => setIsSearching(false), debounceMs + 80);
    return () => {
      if (searchingTimeoutRef.current) clearTimeout(searchingTimeoutRef.current);
    };
  }, [inputValue, debounceMs]);

  const setQuery = useCallback((query: string) => setInputValue(query), []);
  const setCategory = useCallback(
    (category: SearchCategory | 'all') => dispatch({ type: 'SET_CATEGORY', category }),
    []
  );
  const toggleTag = useCallback((tag: string) => dispatch({ type: 'TOGGLE_TAG', tag }), []);
  const toggleType = useCallback(
    (resultType: SearchResultType) => dispatch({ type: 'TOGGLE_TYPE', resultType }),
    []
  );
  const setPage = useCallback((page: number) => dispatch({ type: 'SET_PAGE', page }), []);
  const setPageSize = useCallback(
    (pageSize: number) => dispatch({ type: 'SET_PAGE_SIZE', pageSize }),
    []
  );
  const setSortBy = useCallback((sortBy: SortOption) => dispatch({ type: 'SET_SORT', sortBy }), []);
  const clearAllFilters = useCallback(() => {
    setInputValue('');
    dispatch({ type: 'CLEAR_ALL' });
  }, []);

  const addRecentSearch = useCallback((query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    setRecentSearches((prev) => {
      const next = [trimmed, ...prev.filter((q) => q.toLowerCase() !== trimmed.toLowerCase())].slice(
        0,
        MAX_RECENT_SEARCHES
      );
      writeRecentSearches(next);
      return next;
    });
  }, []);

  const removeRecentSearch = useCallback((query: string) => {
    setRecentSearches((prev) => {
      const next = prev.filter((q) => q !== query);
      writeRecentSearches(next);
      return next;
    });
  }, []);

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    writeRecentSearches([]);
  }, []);

  // Core filtering pipeline (Client-side React filter)
  const allFilteredResults = useMemo(() => {
    let candidates = dataset;

    // Filter by Category
    if (filters.selectedCategory !== 'all') {
      candidates = candidates.filter((item) => item.category === filters.selectedCategory);
    }

    // Filter by Resource Type
    if (filters.selectedTypes.length > 0) {
      candidates = candidates.filter((item) => filters.selectedTypes.includes(item.type));
    }

    // Filter by Tags
    if (filters.selectedTags.length > 0) {
      candidates = candidates.filter((item) =>
        filters.selectedTags.every((tag) => item.tags.includes(tag))
      );
    }

    const query = filters.query.trim();
    let scored = candidates.map((item) => ({ item, score: scoreItem(item, query) }));

    if (query) {
      scored = scored.filter((entry) => entry.score > 0);
    }

    switch (filters.sortBy) {
      case 'date':
        scored.sort((a, b) => new Date(b.item.updatedAt).getTime() - new Date(a.item.updatedAt).getTime());
        break;
      case 'title':
        scored.sort((a, b) => a.item.title.localeCompare(b.item.title));
        break;
      case 'relevance':
      default:
        scored.sort((a, b) => b.score - a.score);
        break;
    }

    return scored.map((entry) => entry.item);
  }, [dataset, filters.selectedCategory, filters.selectedTypes, filters.selectedTags, filters.query, filters.sortBy]);

  // Facet counts
  const facets: SearchFacets = useMemo(() => {
    const tally = (values: string[]): SearchFacetCount[] => {
      const counts = new Map<string, number>();
      values.forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));
      return Array.from(counts.entries())
        .map(([value, count]) => ({ value, count }))
        .sort((a, b) => b.count - a.count);
    };

    return {
      categories: tally(allFilteredResults.map((item) => item.category)),
      types: tally(allFilteredResults.map((item) => item.type)),
      tags: tally(allFilteredResults.flatMap((item) => item.tags)),
    };
  }, [allFilteredResults]);

  // Paginated response
  const response: SearchResponse = useMemo(() => {
    const totalResults = allFilteredResults.length;
    const totalPages = Math.max(1, Math.ceil(totalResults / filters.pageSize));
    const safePage = Math.min(filters.page, totalPages);
    const start = (safePage - 1) * filters.pageSize;
    const items = allFilteredResults.slice(start, start + filters.pageSize);

    return { items, totalResults, page: safePage, totalPages, facets };
  }, [allFilteredResults, filters.page, filters.pageSize, facets]);

  return {
    filters,
    inputValue,
    setQuery,
    setCategory,
    toggleTag,
    toggleType,
    setPage,
    setPageSize,
    setSortBy,
    clearAllFilters,
    isSearching,
    response,
    allFilteredResults,
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    clearRecentSearches,
  };
}
