import { NotificationItem } from "@/types/notification";

export const initialMockNotifications: NotificationItem[] = [
  {
    _id: "notif-1",
    userId: "25MIM10100",
    title: "CAT-II Examination Schedule Released",
    message: "Continuous Assessment Test-II timetable for Winter 2025-26 has been published. Hall tickets will be available for download from 18th Sept.",
    type: "exam",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(), // 12 mins ago
    link: "/dashboard/exam-schedule",
    priority: "urgent",
  },
  {
    _id: "notif-2",
    userId: "25MIM10100",
    title: "Attendance Warning: CSE3002 (74.2%)",
    message: "Your attendance in Artificial Intelligence & Machine Learning (CSE3002) is below the mandatory 75% threshold. Consult your proctor immediately.",
    type: "attendance",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    link: "/dashboard/attendance",
    priority: "high",
  },
  {
    _id: "notif-3",
    userId: "25MIM10100",
    title: "Semester Fee Receipt Acknowledged",
    message: "Online fee payment transaction of INR 1,48,500 for Academic Year 2025-26 has been verified by the Finance Office.",
    type: "fee",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
    link: "/dashboard/payments",
    priority: "medium",
  },
  {
    _id: "notif-4",
    userId: "25MIM10100",
    title: "Course Add / Drop Window Closing Soon",
    message: "Slot modification and course drop window will close on 14th September at 05:00 PM. No further adjustments will be permitted.",
    type: "timetable",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(), // 1 day ago
    link: "/dashboard/curriculum",
    priority: "medium",
  },
  {
    _id: "notif-5",
    userId: "25MIM10100",
    title: "Microsoft Super Dream Placement Drive",
    message: "Registration for Microsoft India SDE & AI Core hiring is open on PAT Portal for students with CGPA >= 8.5.",
    type: "announcement",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(), // 2 days ago
    link: "/dashboard/spotlight",
    priority: "high",
  },
  {
    _id: "notif-6",
    userId: "25MIM10100",
    title: "DA-1 Submission Reminder: ECE2004",
    message: "Digital Assignment 1 for Microprocessors & Microcontrollers is due in 48 hours. Submit your reports on the portal.",
    type: "assignment",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 75).toISOString(), // 3 days ago
    link: "/dashboard/marks",
    priority: "low",
  },
];
