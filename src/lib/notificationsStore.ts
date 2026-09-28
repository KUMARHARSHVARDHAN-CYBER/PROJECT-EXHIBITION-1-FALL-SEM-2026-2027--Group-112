import { NotificationItem, CreateNotificationPayload } from "@/types/notification";
import { initialMockNotifications } from "./mockNotifications";

// In-memory store for development/presentation mode
// Persists in Node.js server lifecycle
declare global {
  // eslint-disable-next-line no-var
  var __vtop_notifications__: NotificationItem[] | undefined;
}

if (!global.__vtop_notifications__) {
  global.__vtop_notifications__ = [...initialMockNotifications];
}

export const getNotificationsForUser = (userId?: string): NotificationItem[] => {
  const all = global.__vtop_notifications__ || [];
  if (!userId) return all;
  return all
    .filter((n) => n.userId.toLowerCase() === userId.toLowerCase())
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const addNotification = (payload: CreateNotificationPayload): NotificationItem => {
  const newNotif: NotificationItem = {
    _id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    userId: payload.userId,
    title: payload.title,
    message: payload.message,
    type: payload.type || "general",
    link: payload.link || "/dashboard",
    priority: payload.priority || "medium",
    read: false,
    createdAt: new Date().toISOString(),
  };

  if (!global.__vtop_notifications__) {
    global.__vtop_notifications__ = [];
  }
  global.__vtop_notifications__.unshift(newNotif);
  return newNotif;
};

export const markAsRead = (id: string): NotificationItem | null => {
  if (!global.__vtop_notifications__) return null;
  const notif = global.__vtop_notifications__.find((n) => n._id === id);
  if (notif) {
    notif.read = true;
    return notif;
  }
  return null;
};

export const markAllAsReadForUser = (userId: string): number => {
  if (!global.__vtop_notifications__) return 0;
  let count = 0;
  global.__vtop_notifications__.forEach((n) => {
    if (n.userId.toLowerCase() === userId.toLowerCase() && !n.read) {
      n.read = true;
      count++;
    }
  });
  return count;
};

export const deleteNotificationById = (id: string): boolean => {
  if (!global.__vtop_notifications__) return false;
  const index = global.__vtop_notifications__.findIndex((n) => n._id === id);
  if (index !== -1) {
    global.__vtop_notifications__.splice(index, 1);
    return true;
  }
  return false;
};
