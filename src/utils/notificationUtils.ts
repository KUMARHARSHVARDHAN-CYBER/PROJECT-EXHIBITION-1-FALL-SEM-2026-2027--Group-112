import React from "react";
import { NotificationType } from "@/types/notification";

export function formatRelativeTime(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffSec < 60) return "Just now";
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHour < 24) return `${diffHour}h ago`;
    if (diffDay === 1) return "Yesterday";
    if (diffDay < 7) return `${diffDay}d ago`;

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
  } catch {
    return "Recent";
  }
}

export interface TypeMeta {
  label: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  dotColor: string;
}

export const NOTIFICATION_TYPE_CONFIG: Record<NotificationType, TypeMeta> = {
  exam: {
    label: "EXAMINATION",
    badgeBg: "bg-red-50",
    badgeText: "text-red-700",
    badgeBorder: "border-red-200",
    dotColor: "bg-red-500",
  },
  assignment: {
    label: "ASSIGNMENT",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700",
    badgeBorder: "border-purple-200",
    dotColor: "bg-purple-500",
  },
  fee: {
    label: "FINANCE & FEE",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
    dotColor: "bg-emerald-500",
  },
  attendance: {
    label: "ATTENDANCE",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-200",
    dotColor: "bg-amber-500",
  },
  timetable: {
    label: "ACADEMICS",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    badgeBorder: "border-blue-200",
    dotColor: "bg-blue-500",
  },
  announcement: {
    label: "SPOTLIGHT",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200",
    dotColor: "bg-indigo-500",
  },
  general: {
    label: "GENERAL",
    badgeBg: "bg-gray-100",
    badgeText: "text-gray-700",
    badgeBorder: "border-gray-300",
    dotColor: "bg-gray-500",
  },
};
