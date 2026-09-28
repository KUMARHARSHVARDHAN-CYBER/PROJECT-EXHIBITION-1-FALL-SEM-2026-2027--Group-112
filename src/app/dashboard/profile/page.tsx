import React from "react";
import StudentProfile from "@/components/StudentProfile";

export const metadata = {
  title: "Student Profile | Enhanced VTOP",
  description: "Comprehensive student profile view with personal, educational, family, and proctor information.",
};

export default function ProfilePage() {
  return <StudentProfile />;
}
