import { useEffect, useState, useRef } from "react"
import { Bell, CheckCircle2, Circle } from "lucide-react"
import { api } from "../../lib/api"
import { cn } from "../../lib/utils"

type Notification = {
  id: string
  message: string
  isRead: boolean
  createdAt: string
}

type PagedNotifications = {
  content: Notification[]
  totalElements: number
}

export function NotificationsPopover() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<PagedNotifications | null>(null)
  const [unreadCount, setUnreadCount] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchNotifications()
    const interval = setInterval(fetchNotifications, 60000) // Poll every minute
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  async function fetchNotifications() {
    try {
      const { data } = await api.get<PagedNotifications>("/notifications?page=0&size=10")
      setData(data)
      setUnreadCount(data.content.filter((n) => !n.isRead).length)
    } catch (err) {
      console.error("Failed to fetch notifications", err)
    }
  }

  async function markAsRead(id: string) {
    try {
      await api.put(`/notifications/${id}/read`)
      setData((prev) => {
        if (!prev) return prev
        return {
          ...prev,
          content: prev.content.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
        }
      })
      setUnreadCount((c) => Math.max(0, c - 1))
    } catch (err) {
      console.error("Failed to mark as read", err)
    }
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:w-96">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
            <h3 className="font-semibold text-slate-950">Notifications</h3>
            {unreadCount > 0 && (
              <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700">
                {unreadCount} new
              </span>
            )}
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {!data || data.content.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-slate-500">
                You have no notifications.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {data.content.map((n) => (
                  <div
                    key={n.id}
                    className={cn(
                      "flex cursor-pointer gap-3 px-4 py-3 transition hover:bg-slate-50",
                      n.isRead ? "opacity-60" : "bg-primary-50/30"
                    )}
                    onClick={() => !n.isRead && markAsRead(n.id)}
                  >
                    <div className="mt-0.5 shrink-0">
                      {n.isRead ? (
                        <CheckCircle2 className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Circle className="h-4 w-4 fill-primary-600 text-primary-600" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className={cn("text-sm", n.isRead ? "text-slate-600" : "font-medium text-slate-950")}>
                        {n.message}
                      </p>
                      <p className="text-xs text-slate-400">
                        {new Date(n.createdAt).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
