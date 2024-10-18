"use client"
import { Bell, Check, Search, Star, User } from "lucide-react"
import { useState } from "react"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("Unread")

  const notifications = [
    {
      id: 1,
      user: "David Beckham",
      action: "sent you an update.txt file",
      time: "Just now",
      icon: "apple",
      hasAction: true,
      actionText: "Open File",
    },
    {
      id: 2,
      user: "Julia Sehgal",
      action: "assigned a new task navbar upgrade",
      time: "32 min ago",
      icon: "google",
    },
    {
      id: 3,
      user: "Arjun Kumar",
      action: "raised a request in payments",
      time: "1 day ago",
      icon: "apple",
    },
  ]

  return (
    <div className="p-6 flex flex-col rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold flex items-center">
          <Bell className="mr-2" /> Notifications
        </h1>
        <button className="text-blue-600 hover:text-blue-800 flex items-center">
          Mark all as read <Check className="ml-1" />
        </button>
      </div>
      <div className="rounded-lg shadow">
        <div className="flex border-b">
          {["Unread", "Read", "Archived"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <li key={notification.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {notification.icon === "apple" ? (
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🍎</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-xl">G</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-300">
                    {notification.user}
                  </p>
                  <p className="text-sm text-gray-500">{notification.action}</p>
                </div>
                <div className="flex-shrink-0 flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {notification.time}
                  </span>
                  {notification.hasAction && (
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300">
                      {notification.actionText}
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}