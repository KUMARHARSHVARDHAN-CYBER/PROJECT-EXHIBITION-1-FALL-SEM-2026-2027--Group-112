import { StudentProfile, Course, TimetableEntry, FacultyMember, KnowledgeRule } from "./assistantData";

export interface AttendanceCalculation {
  attended: number;
  total: number;
  current_percentage: number;
  status: "safe" | "warning" | "critical";
  safe_bunks: number;
  classes_needed_to_recover: number;
  target_percentage: number;
  message: string;
}

export interface MarksCalculation {
  target_grade: string;
  internal_marks_scored: number;
  internal_max: number;
  required_fat_weighted_40: number;
  required_fat_raw_100: number;
  minimum_passing_fat_40: number;
  is_achievable: boolean;
  message: string;
}

export type WidgetType =
  | "attendance_card"
  | "attendance_summary"
  | "timetable_card"
  | "marks_card"
  | "faculty_card"
  | "knowledge_card"
  | "profile_card"
  | "info_card"
  | "leave_card"
  | "general_help";

export interface ChatResponse {
  text: string;
  widget_type?: WidgetType;
  widget_data?: any;
  intent: string;
}

export interface AttendanceSummary {
  student_name: string;
  reg_no: string;
  overall_attendance_pct: number;
  overall_attended: number;
  overall_total: number;
  is_nine_pointer: boolean;
  courses: Array<Course & { attendance_pct: number; status: "safe" | "warning" | "critical"; safe_bunks: number; classes_needed: number }>;
}
