import {
  INITIAL_STUDENTS,
  FACULTIES,
  StudentProfile,
  Course,
  TimetableEntry,
  FacultyMember,
} from "./assistantData";
import { calculateAttendanceMargin } from "./calculator";
import { AttendanceSummary } from "./types";

export interface StudentLeaveRecord {
  id: string;
  appNo: string;
  applyDate: string;
  leaveCode: string;
  leaveTypeName: string;
  visitingPlace: string;
  fromDateTime: string;
  toDateTime: string;
  duration: string;
  reason: string;
  status: "Approved" | "Rejected" | "Pending" | "Availed" | "Cancelled";
  approverName: string;
  remarks: string;
}

export const INITIAL_LEAVES: StudentLeaveRecord[] = [
  {
    id: "LR-2026-003",
    appNo: "LR2026021004",
    applyDate: "10-Feb-2026",
    leaveCode: "OG1",
    leaveTypeName: "DAY OUTING",
    visitingPlace: "Bhopal City (DB Mall)",
    fromDateTime: "15-Feb-2026 09:00",
    toDateTime: "15-Feb-2026 18:30",
    duration: "9 Hours 30 Mins",
    reason: "Project work discussion and book procurement at Central Library.",
    status: "Approved",
    approverName: "Dr. S. POORNIMA (100700)",
    remarks: "Approved by Proctor. Return before 19:00 strictly.",
  },
  {
    id: "LR-2026-002",
    appNo: "LR2026011892",
    applyDate: "18-Jan-2026",
    leaveCode: "HT1",
    leaveTypeName: "HOME TOWN",
    visitingPlace: "Indore, Madhya Pradesh",
    fromDateTime: "23-Jan-2026 06:00",
    toDateTime: "26-Jan-2026 21:00",
    duration: "3 Days 15 Hours",
    reason: "Family function and Republic day weekend festival at hometown.",
    status: "Approved",
    approverName: "Dr. S. POORNIMA (100700)",
    remarks: "Approved by Proctor & Chief Warden.",
  },
  {
    id: "LR-2026-001",
    appNo: "LR2026010512",
    applyDate: "05-Jan-2026",
    leaveCode: "SO",
    leaveTypeName: "SPECIAL OUTING",
    visitingPlace: "Kolar Road, Bhopal",
    fromDateTime: "08-Jan-2026 14:00",
    toDateTime: "08-Jan-2026 22:00",
    duration: "8 Hours",
    reason: "Personal outing with friends for dinner.",
    status: "Rejected",
    approverName: "Dr. S. POORNIMA (100700)",
    remarks: "Night outing beyond 20:00 not permitted on weekdays.",
  },
];

class StudentStore {
  private students: Map<string, StudentProfile> = new Map();
  private activeId: string = "25MIM10100"; // Kumar Harshvardhan default
  private faculties: FacultyMember[] = [...FACULTIES];
  private leaveRequests: Map<string, StudentLeaveRecord[]> = new Map();

  constructor() {
    // Clone initial students into map
    for (const student of INITIAL_STUDENTS) {
      this.students.set(student.id, JSON.parse(JSON.stringify(student)));
    }
    // Ensure 25MIM10100 exists
    if (!this.students.has(this.activeId) && this.students.size > 0) {
      this.activeId = Array.from(this.students.keys())[0];
    }
    // Set initial leaves for 25MIM10100
    this.leaveRequests.set("25MIM10100", [...INITIAL_LEAVES]);
  }

  public getAllStudents(): StudentProfile[] {
    return Array.from(this.students.values());
  }

  public getActiveStudent(): StudentProfile {
    const student = this.students.get(this.activeId);
    if (student) return student;
    return Array.from(this.students.values())[0];
  }

  public getStudentById(idOrRegNo: string): StudentProfile | undefined {
    const key = idOrRegNo.toUpperCase().trim();
    if (this.students.has(key)) return this.students.get(key);
    for (const s of this.students.values()) {
      if (s.reg_no.toUpperCase() === key || s.id.toUpperCase() === key) {
        return s;
      }
    }
    return undefined;
  }

  public setActiveStudent(idOrRegNo: string): boolean {
    const student = this.getStudentById(idOrRegNo);
    if (student) {
      this.activeId = student.id;
      return true;
    }
    return false;
  }

  public updateProfile(studentId: string, updates: { cgpa?: number; name?: string }): boolean {
    const student = this.getStudentById(studentId);
    if (!student) return false;

    if (updates.cgpa !== undefined) {
      student.cgpa = Number(updates.cgpa);
      student.is_nine_pointer = student.cgpa >= 9.0;
    }
    if (updates.name !== undefined && updates.name.trim()) {
      student.name = updates.name.trim();
    }
    this.students.set(student.id, student);
    return true;
  }

  public updateAttendance(studentId: string, courseCode: string, attended: number, total: number): boolean {
    const student = this.getStudentById(studentId);
    if (!student) return false;

    const course = student.courses.find((c) => c.code.toLowerCase() === courseCode.toLowerCase());
    if (!course) return false;

    course.attended = Math.max(0, attended);
    course.total = Math.max(course.attended, total);
    this.students.set(student.id, student);
    return true;
  }

  public getLeaveRequests(studentId?: string): StudentLeaveRecord[] {
    const sId = studentId || this.activeId;
    return this.leaveRequests.get(sId) || this.leaveRequests.get("25MIM10100") || [];
  }

  public findCourseByNameOrCode(query: string, studentId?: string): Course | undefined {
    const student = studentId ? this.getStudentById(studentId) : this.getActiveStudent();
    if (!student || !student.courses) return undefined;

    const qLower = query.toLowerCase();

    // 1. Exact course code match
    for (const c of student.courses) {
      if (qLower.includes(c.code.toLowerCase())) {
        return c;
      }
    }

    // 2. Title keyword matches
    const keywordsMap: Record<string, string[]> = {
      "ai": ["artificial", "intelligence", "aiml", "ai/ml", "machine learning", "fundamentals in ai"],
      "ml": ["machine learning", "aiml", "ai/ml"],
      "data structures": ["dsa", "data structure", "ds", "structures"],
      "discrete": ["math", "mathematics", "discrete math", "mat2002"],
      "software": ["swe", "software engineering"],
      "operating": ["os", "operating system"],
      "computer networks": ["cn", "networks", "networking"],
      "database": ["dbms", "database"],
      "java": ["java", "programming in java", "oop"],
      "python": ["python", "problem solving"],
      "english": ["technical english", "communication", "sst1003"],
      "cloud": ["cloud computing", "aws"],
      "cyber": ["cyber security", "security"],
      "iot": ["internet of things", "iot"],
    };

    for (const c of student.courses) {
      const titleLower = c.title.toLowerCase();
      if (qLower.includes(titleLower)) return c;

      for (const [key, synonyms] of Object.entries(keywordsMap)) {
        if (titleLower.includes(key) || synonyms.some((s) => titleLower.includes(s))) {
          if (qLower.includes(key) || synonyms.some((s) => qLower.includes(s))) {
            return c;
          }
        }
      }
    }

    // 3. Fallback: partial match on words
    const queryWords = qLower.split(/\s+/).filter((w) => w.length > 3 && !["attendance", "leave", "bunk", "class", "classes", "tomorrow", "today", "yesterday"].includes(w));
    for (const c of student.courses) {
      for (const word of queryWords) {
        if (c.title.toLowerCase().includes(word)) {
          return c;
        }
      }
    }

    return student.courses[0];
  }

  public getAttendanceSummary(studentId?: string): AttendanceSummary {
    const student = studentId ? this.getStudentById(studentId) : this.getActiveStudent();
    if (!student) {
      return {
        student_name: "Unknown",
        reg_no: "N/A",
        overall_attendance_pct: 0,
        overall_attended: 0,
        overall_total: 0,
        is_nine_pointer: false,
        courses: [],
      };
    }

    let totAtt = 0;
    let totCls = 0;

    const coursesData = student.courses.map((c) => {
      totAtt += c.attended || 0;
      totCls += c.total || 0;
      const calc = calculateAttendanceMargin(c.attended || 0, c.total || 0, 75.0);
      return {
        ...c,
        attendance_pct: calc.current_percentage,
        status: calc.status,
        safe_bunks: calc.safe_bunks,
        classes_needed: calc.classes_needed_to_recover,
      };
    });

    const overallPct = totCls > 0 ? Number(((totAtt / totCls) * 100).toFixed(1)) : 100.0;

    return {
      student_name: student.name,
      reg_no: student.reg_no,
      overall_attendance_pct: overallPct,
      overall_attended: totAtt,
      overall_total: totCls,
      is_nine_pointer: student.is_nine_pointer,
      courses: coursesData,
    };
  }

  public getTimetableForDay(dayInput?: string | null, studentId?: string): TimetableEntry[] {
    const student = studentId ? this.getStudentById(studentId) : this.getActiveStudent();
    if (!student || !student.timetables) return [];

    let targetDay = dayInput ? dayInput.toLowerCase().trim() : "";
    if (!targetDay || targetDay === "today") {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayIdx = new Date().getDay();
      targetDay = (days[dayIdx] || "Monday").toLowerCase();
      if (targetDay === "sunday" || targetDay === "saturday") {
        targetDay = "monday"; // Default to weekday
      }
    }

    const filtered = student.timetables.filter((t) => t.day.toLowerCase() === targetDay);
    if (filtered.length > 0) return filtered;

    // Default to Monday or first available day
    const mondaySlots = student.timetables.filter((t) => t.day.toLowerCase() === "monday");
    return mondaySlots.length > 0 ? mondaySlots : student.timetables.slice(0, 5);
  }

  public searchFaculties(query: string): FacultyMember[] {
    const qLower = query.toLowerCase().trim();
    if (!qLower) return this.faculties.slice(0, 1);

    // Strip common conversational keywords and prefixes to isolate search terms
    const cleanQuery = qLower
      .replace(/\b(dr|prof|professor|faculty|teacher|proctor|advisor|where is|where's|find|locate|cabin of|cabin|office of|office)\b/gi, " ")
      .replace(/['’]/g, "")
      .replace(/[^\w\s]/g, " ")
      .trim();

    // Convert search query to lowercase and split into array of individual search terms
    const rawSearchTerms = (cleanQuery || qLower).toLowerCase().split(" ").filter(Boolean);
    const searchTerms = rawSearchTerms.length > 0 ? rawSearchTerms : qLower.split(" ").filter(Boolean);

    if (searchTerms.length === 0) {
      return this.faculties.slice(0, 1);
    }

    // Strict Matching: Ensure ALL words in searchTerms exist in the faculty member's name
    const exactMatches = this.faculties.filter((faculty) => {
      const facultyNameLower = faculty.name.toLowerCase();
      return searchTerms.every((term) => facultyNameLower.includes(term));
    });

    // Limit output to the single most accurate match
    if (exactMatches.length > 0) {
      return exactMatches.slice(0, 1);
    }

    // Secondary strict match on cabin identifier (e.g. "AB-308A")
    const cabinMatches = this.faculties.filter((faculty) => {
      const cabinLower = faculty.cabin.toLowerCase();
      return searchTerms.every((term) => cabinLower.includes(term));
    });

    if (cabinMatches.length > 0) {
      return cabinMatches.slice(0, 1);
    }

    return [];
  }
}

// Global Singleton for in-memory persistence across client-side React renders
const globalForStudentStore = globalThis as unknown as {
  vtopStudentStore: StudentStore | undefined;
};

export const studentStore = globalForStudentStore.vtopStudentStore ?? new StudentStore();

if (process.env.NODE_ENV !== "production") {
  globalForStudentStore.vtopStudentStore = studentStore;
}
