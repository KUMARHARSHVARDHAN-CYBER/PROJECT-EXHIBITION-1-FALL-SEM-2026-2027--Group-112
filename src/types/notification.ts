export type NotificationType =
  | "exam"
  | "assignment"
  | "fee"
  | "attendance"
  | "timetable"
  | "announcement"
  | "general";

export interface NotificationItem {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  createdAt: string;
  link?: string;
  priority?: "low" | "medium" | "high" | "urgent";
}

export interface CreateNotificationPayload {
  userId: string;
  title: string;
  message: string;
  type?: NotificationType;
  link?: string;
  priority?: "low" | "medium" | "high" | "urgent";
}

export interface ToastItem extends NotificationItem {
  toastId: string;
}
