"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  Bell,
  CheckCheck,
  Trash2,
  X,
  ExternalLink,
  BookOpen,
  Calendar,
  CreditCard,
  AlertTriangle,
  FileText,
  Megaphone,
  Info,
  ChevronDown,
  Volume2,
  VolumeX,
  PlusCircle,
  RefreshCw,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { NotificationItem, NotificationType, ToastItem, CreateNotificationPayload } from "@/types/notification";
import {
  fetchNotifications,
  createNotification,
  markNotificationRead,
  markAllNotificationsRead,
  deleteNotification,
} from "@/services/notificationApi";
import { formatRelativeTime, NOTIFICATION_TYPE_CONFIG } from "@/utils/notificationUtils";

interface NotificationSystemProps {
  userId?: string;
  className?: string;
}

// Helper to synthesize an institutional chime using Web Audio API
function playInstitutionalChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(440, now);
    osc2.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5

    gainNode.gain.setValueAtTime(0.18, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.35);
    osc2.stop(now + 0.35);
  } catch {
    // Audio synthesis fails silently if blocked by autoplay policy
  }
}

export default function NotificationSystem({
  userId = "25MIM10100",
  className = "",
}: NotificationSystemProps) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "unread" | NotificationType>("all");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showDevPanel, setShowDevPanel] = useState(false);

  // Dev form state
  const [devForm, setDevForm] = useState<CreateNotificationPayload>({
    userId: userId,
    title: "",
    message: "",
    type: "exam",
    priority: "high",
    link: "/dashboard/exam-schedule",
  });
  const [isSendingDev, setIsSendingDev] = useState(false);
  const [devStatus, setDevStatus] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);

  // Unread badge counter
  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  // Filtered notifications
  const filteredNotifications = useMemo(() => {
    if (activeTab === "all") return notifications;
    if (activeTab === "unread") return notifications.filter((n) => !n.read);
    return notifications.filter((n) => n.type === activeTab);
  }, [notifications, activeTab]);

  // Load initial notifications
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNotifications(userId);
      setNotifications(data);
    } catch (err: any) {
      setError("Failed to load notifications. Click refresh to retry.");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Try optional real-time socket connection if configured
  useEffect(() => {
    if (!userId || typeof window === "undefined") return;

    let socketInstance: any = null;
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;

    // Optional dynamic socket.io-client integration if installed & configured
    if (socketUrl) {
      import("socket.io-client")
        .then(({ io }) => {
          socketInstance = io(socketUrl, {
            reconnectionAttempts: 3,
            timeout: 5000,
          });

          socketInstance.on("connect", () => {
            socketInstance.emit("join", userId);
          });

          socketInstance.on("newNotification", (incoming: NotificationItem) => {
            // Trigger sound
            if (soundEnabled) playInstitutionalChime();

            // Append to notifications state
            setNotifications((prev) => {
              if (prev.some((n) => n._id === incoming._id)) return prev;
              return [incoming, ...prev];
            });

            // Display floating Toast alert
            const toastId = `toast-${Date.now()}-${Math.random()}`;
            setToasts((prev) => [{ ...incoming, toastId }, ...prev]);
          });
        })
        .catch(() => {
          // socket.io-client not installed or socket server not running; runs smoothly in local/REST mode
        });
    }

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, [userId, soundEnabled]);

  // Outside click listener for closing the dropdown panel
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Action: Mark single notification as read
  const handleMarkRead = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setNotifications((prev) =>
      prev.map((n) => (n._id === id ? { ...n, read: true } : n))
    );
    try {
      await markNotificationRead(id);
    } catch (err) {
      console.error(err);
    }
  };

  // Action: Mark all notifications as read
  const handleMarkAllRead = async () => {
    const previous = notifications;
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    try {
      await markAllNotificationsRead(userId);
    } catch (err) {
      console.error(err);
      setNotifications(previous);
    }
  };

  // Action: Delete/Dismiss notification
  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const previous = notifications;
    setNotifications((prev) => prev.filter((n) => n._id !== id));
    try {
      await deleteNotification(id);
    } catch (err) {
      console.error(err);
      setNotifications(previous);
    }
  };

  // Action: Dismiss Toast
  const dismissToast = (toastId: string) => {
    setToasts((prev) => prev.filter((t) => t.toastId !== toastId));
  };

  // Action: Push a test notification (via dev panel or testing button)
  const handleSendTestNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!devForm.title.trim() || !devForm.message.trim()) {
      setDevStatus("Please enter both title and message.");
      return;
    }

    setIsSendingDev(true);
    setDevStatus(null);
    try {
      const created = await createNotification(devForm);

      // Play alert chime
      if (soundEnabled) playInstitutionalChime();

      // Update state
      setNotifications((prev) => [created, ...prev]);

      // Pop Toast
      const toastId = `toast-${Date.now()}`;
      setToasts((prev) => [{ ...created, toastId }, ...prev]);

      setDevStatus("Alert pushed successfully!");
      setDevForm((prev) => ({
        ...prev,
        title: "",
        message: "",
      }));
    } catch (err: any) {
      setDevStatus(`Failed to send: ${err.message}`);
    } finally {
      setIsSendingDev(false);
    }
  };

  // Helper icon selector based on notification category
  const getCategoryIcon = (type: NotificationType) => {
    switch (type) {
      case "exam":
        return <BookOpen className="w-3.5 h-3.5 text-red-600" />;
      case "attendance":
        return <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />;
      case "fee":
        return <CreditCard className="w-3.5 h-3.5 text-emerald-600" />;
      case "assignment":
        return <FileText className="w-3.5 h-3.5 text-purple-600" />;
      case "timetable":
        return <Calendar className="w-3.5 h-3.5 text-blue-600" />;
      case "announcement":
        return <Megaphone className="w-3.5 h-3.5 text-indigo-600" />;
      default:
        return <Info className="w-3.5 h-3.5 text-gray-600" />;
    }
  };

  return (
    <div className={`relative inline-block select-none ${className}`} ref={panelRef}>
      {/* ================= BELL BUTTON ================= */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Notifications"
        aria-expanded={isOpen}
        title="VTOP Alerts & Notifications"
        className={`relative p-1.5 rounded transition-all duration-150 flex items-center justify-center ${
          isOpen
            ? "bg-blue-800 text-white ring-1 ring-white/40"
            : "text-gray-200 hover:text-white hover:bg-blue-800/60"
        }`}
      >
        <Bell className="w-4 h-4" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 bg-red-600 border border-white text-white font-mono font-bold text-[10px] rounded-full flex items-center justify-center shadow-xs animate-pulse">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {/* ================= NOTIFICATION DROPDOWN PANEL ================= */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 max-w-[calc(100vw-1rem)] bg-white text-[#212529] border border-[#d2d6de] shadow-2xl rounded-none z-50 animate-in fade-in duration-100 flex flex-col max-h-[85vh] text-xs">
          {/* Header Bar */}
          <div className="bg-[#1B365D] text-white px-3 py-2.5 flex items-center justify-between border-b border-blue-900 shrink-0">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-200" />
              <div>
                <span className="font-bold text-xs uppercase tracking-wider block">
                  VTOP Push Alerts
                </span>
                <span className="text-[10px] text-blue-200">
                  {unreadCount} unread notification{unreadCount === 1 ? "" : "s"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Sound Toggle */}
              <button
                type="button"
                onClick={() => setSoundEnabled((prev) => !prev)}
                title={soundEnabled ? "Mute Alert Chimes" : "Unmute Alert Chimes"}
                className={`p-1 rounded transition-colors ${
                  soundEnabled
                    ? "text-blue-200 hover:text-white hover:bg-blue-800"
                    : "text-red-300 hover:bg-blue-800"
                }`}
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              {/* Reload / Refresh */}
              <button
                type="button"
                onClick={loadData}
                title="Refresh Notifications"
                className="p-1 text-blue-200 hover:text-white hover:bg-blue-800 rounded transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close"
                className="p-1 text-blue-200 hover:text-white hover:bg-blue-800 rounded transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sub-header Controls & Category Filter Bar */}
          <div className="bg-[#f5f5f5] border-b border-[#d2d6de] p-2 space-y-1.5 shrink-0">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-gray-700">Filter By Category:</span>
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={handleMarkAllRead}
                  className="flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold hover:underline"
                >
                  <CheckCheck className="w-3 h-3" />
                  <span>Mark all read</span>
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-thin">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-2 py-0.5 rounded-none font-bold text-[10px] whitespace-nowrap border transition-colors ${
                  activeTab === "all"
                    ? "bg-[#1B365D] text-white border-[#1B365D]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                All ({notifications.length})
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("unread")}
                className={`px-2 py-0.5 rounded-none font-bold text-[10px] whitespace-nowrap border transition-colors ${
                  activeTab === "unread"
                    ? "bg-red-700 text-white border-red-700"
                    : "bg-white text-red-700 border-gray-300 hover:bg-red-50"
                }`}
              >
                Unread ({unreadCount})
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("exam")}
                className={`px-2 py-0.5 rounded-none font-bold text-[10px] whitespace-nowrap border transition-colors ${
                  activeTab === "exam"
                    ? "bg-[#295b86] text-white border-[#295b86]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                Exams
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("attendance")}
                className={`px-2 py-0.5 rounded-none font-bold text-[10px] whitespace-nowrap border transition-colors ${
                  activeTab === "attendance"
                    ? "bg-[#295b86] text-white border-[#295b86]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                Attendance
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("fee")}
                className={`px-2 py-0.5 rounded-none font-bold text-[10px] whitespace-nowrap border transition-colors ${
                  activeTab === "fee"
                    ? "bg-[#295b86] text-white border-[#295b86]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                Finance
              </button>
            </div>
          </div>

          {/* ================= NOTIFICATION LIST ================= */}
          <div className="flex-1 overflow-y-auto divide-y divide-[#e5e5e5] max-h-[340px] bg-white">
            {loading && notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500 font-medium">
                <RefreshCw className="w-5 h-5 mx-auto mb-2 animate-spin text-blue-800" />
                <span>Loading university circulars...</span>
              </div>
            ) : error ? (
              <div className="p-6 text-center text-red-600">
                <p className="font-semibold">{error}</p>
                <button
                  type="button"
                  onClick={loadData}
                  className="mt-2 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded font-bold text-xs"
                >
                  Retry
                </button>
              </div>
            ) : filteredNotifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="font-bold text-gray-700">No Notifications</p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  You are completely caught up in this category.
                </p>
              </div>
            ) : (
              filteredNotifications.map((item) => {
                const typeConfig = NOTIFICATION_TYPE_CONFIG[item.type] || NOTIFICATION_TYPE_CONFIG.general;
                return (
                  <div
                    key={item._id}
                    onClick={() => handleMarkRead(item._id)}
                    className={`p-3 transition-colors cursor-pointer relative group ${
                      !item.read
                        ? "bg-[#edf4fc]/80 hover:bg-[#e2edf9]"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      {/* Category Icon Badge */}
                      <div className="mt-0.5 p-1.5 rounded-none bg-white border border-[#d2d6de] shadow-2xs shrink-0 flex items-center justify-center">
                        {getCategoryIcon(item.type)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Top Meta: Category + Priority + Unread Dot */}
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span
                              className={`text-[9px] font-black uppercase px-1.5 py-0.2 border ${typeConfig.badgeBg} ${typeConfig.badgeText} ${typeConfig.badgeBorder}`}
                            >
                              {typeConfig.label}
                            </span>
                            {item.priority === "urgent" && (
                              <span className="text-[9px] font-black uppercase px-1 py-0.2 bg-red-600 text-white animate-pulse">
                                URGENT
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            <span className="text-[10px] text-gray-500 font-mono">
                              {formatRelativeTime(item.createdAt)}
                            </span>
                            {!item.read && (
                              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" title="Unread" />
                            )}
                          </div>
                        </div>

                        {/* Title */}
                        <h4
                          className={`text-xs font-bold leading-snug mb-1 ${
                            !item.read ? "text-[#1B365D]" : "text-gray-800"
                          }`}
                        >
                          {item.title}
                        </h4>

                        {/* Message Description */}
                        <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-2">
                          {item.message}
                        </p>

                        {/* Bottom Actions Bar */}
                        <div className="mt-2 pt-1.5 border-t border-gray-200/60 flex items-center justify-between text-[11px]">
                          {item.link ? (
                            <Link
                              href={item.link}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMarkRead(item._id);
                                setIsOpen(false);
                              }}
                              className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-bold hover:underline"
                            >
                              <span>View Module</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </Link>
                          ) : (
                            <span className="text-[10px] text-gray-400">VIT University Desk</span>
                          )}

                          <div className="flex items-center gap-2">
                            {!item.read && (
                              <button
                                type="button"
                                onClick={(e) => handleMarkRead(item._id, e)}
                                title="Mark as read"
                                className="text-gray-400 hover:text-blue-700 p-0.5"
                              >
                                <CheckCheck className="w-3.5 h-3.5" />
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={(e) => handleDelete(item._id, e)}
                              title="Dismiss notification"
                              className="text-gray-400 hover:text-red-600 p-0.5"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* ================= TEST / DEV NOTIFICATION SENDER ================= */}
          <div className="bg-[#f9fafb] border-t border-[#d2d6de] p-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setShowDevPanel((prev) => !prev)}
              className="w-full flex items-center justify-between py-1 px-2 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                <span>Simulate Push Alert (Dev Panel)</span>
              </div>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${showDevPanel ? "rotate-180" : ""}`}
              />
            </button>

            {showDevPanel && (
              <form onSubmit={handleSendTestNotification} className="mt-2 space-y-2 pt-2 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 mb-0.5">Category:</label>
                    <select
                      value={devForm.type}
                      onChange={(e) =>
                        setDevForm((prev) => ({ ...prev, type: e.target.value as NotificationType }))
                      }
                      className="w-full h-7 px-1.5 text-[11px] bg-white border border-[#ccc] text-gray-800 focus:border-[#66afe9] focus:outline-none"
                    >
                      <option value="exam">Exam Schedule</option>
                      <option value="attendance">Attendance</option>
                      <option value="fee">Finance / Fee</option>
                      <option value="assignment">Assignment</option>
                      <option value="timetable">Academics</option>
                      <option value="announcement">Spotlight Circular</option>
                      <option value="general">General</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 mb-0.5">Priority:</label>
                    <select
                      value={devForm.priority}
                      onChange={(e) =>
                        setDevForm((prev) => ({
                          ...prev,
                          priority: e.target.value as "low" | "medium" | "high" | "urgent",
                        }))
                      }
                      className="w-full h-7 px-1.5 text-[11px] bg-white border border-[#ccc] text-gray-800 focus:border-[#66afe9] focus:outline-none"
                    >
                      <option value="urgent">Urgent</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-600 mb-0.5">Title:</label>
                  <input
                    type="text"
                    value={devForm.title}
                    onChange={(e) => setDevForm((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., CAT-II Hall Ticket Available"
                    className="w-full h-7 px-2 text-[11px] bg-white border border-[#ccc] text-gray-800 focus:border-[#66afe9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-600 mb-0.5">Message:</label>
                  <textarea
                    value={devForm.message}
                    onChange={(e) => setDevForm((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Enter alert message details..."
                    rows={2}
                    className="w-full p-1.5 text-[11px] bg-white border border-[#ccc] text-gray-800 focus:border-[#66afe9] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSendingDev}
                  className="w-full py-1 px-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>{isSendingDev ? "Broadcasting Alert..." : "Trigger Real-Time Push"}</span>
                </button>

                {devStatus && (
                  <p
                    className={`text-[10px] font-semibold text-center mt-1 ${
                      devStatus.includes("success") ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {devStatus}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}

      {/* ================= FLOATING TOAST STACK ================= */}
      <div className="fixed top-14 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => {
          const typeConfig = NOTIFICATION_TYPE_CONFIG[toast.type] || NOTIFICATION_TYPE_CONFIG.general;
          return (
            <div
              key={toast.toastId}
              role="alert"
              className="pointer-events-auto bg-white border-l-4 border-l-blue-800 border border-[#d2d6de] shadow-2xl p-3 animate-in slide-in-from-right duration-200 flex items-start gap-3 rounded-none"
            >
              <div className="mt-0.5 p-1 bg-blue-50 border border-blue-200 shrink-0">
                {getCategoryIcon(toast.type)}
              </div>

              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span
                    className={`text-[9px] font-bold uppercase px-1 border ${typeConfig.badgeBg} ${typeConfig.badgeText} ${typeConfig.badgeBorder}`}
                  >
                    NEW {typeConfig.label}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">Just now</span>
                </div>
                <h5 className="font-bold text-xs text-[#1B365D] line-clamp-1">{toast.title}</h5>
                <p className="text-[11px] text-gray-600 line-clamp-2 mt-0.5">{toast.message}</p>
              </div>

              <button
                type="button"
                onClick={() => dismissToast(toast.toastId)}
                className="text-gray-400 hover:text-gray-700 p-0.5 shrink-0"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
