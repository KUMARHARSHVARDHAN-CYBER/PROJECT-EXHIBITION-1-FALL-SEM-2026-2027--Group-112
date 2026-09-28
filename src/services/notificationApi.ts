import { NotificationItem, CreateNotificationPayload } from "@/types/notification";
import {
  getNotificationsForUser,
  addNotification,
  markAsRead,
  markAllAsReadForUser,
  deleteNotificationById,
} from "@/lib/notificationsStore";

// Helper to simulate realistic async latency in pure frontend mode
const delay = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchNotifications(userId: string): Promise<NotificationItem[]> {
  await delay(80);
  return getNotificationsForUser(userId);
}

export async function createNotification(payload: CreateNotificationPayload): Promise<NotificationItem> {
  await delay(120);
  return addNotification(payload);
}

export async function markNotificationRead(id: string): Promise<{ success: boolean; notification: NotificationItem | null }> {
  await delay(80);
  const updated = markAsRead(id);
  return { success: !!updated, notification: updated };
}

export async function markAllNotificationsRead(userId: string): Promise<{ success: boolean; count: number }> {
  await delay(100);
  const count = markAllAsReadForUser(userId);
  return { success: true, count };
}

export async function deleteNotification(id: string): Promise<{ success: boolean }> {
  await delay(80);
  const deleted = deleteNotificationById(id);
  return { success: deleted };
}
