import React, { useState } from 'react'
import { Link } from 'react-router'

interface HeaderProps {
  onToggleSidebar: () => void
  isSidebarOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)

  const notifications = [
    { id: 1, title: 'คำสั่งซื้อใหม่', message: 'มีคำสั่งซื้อใหม่ #12345', time: '5 นาที', unread: true },
    { id: 2, title: 'สินค้าใกล้หมด', message: 'สลัดผักรวมเหลือ 5 ชิ้น', time: '15 นาที', unread: true },
    { id: 3, title: 'รีวิวใหม่', message: 'ลูกค้าให้รีวิว 5 ดาว', time: '1 ชั่วโมง', unread: false },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Menu Toggle */}
          <div className="flex items-center">
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden"
            >
              <span className="sr-only">เปิดเมนู</span>
              {isSidebarOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop Menu Toggle */}
            <button
              onClick={onToggleSidebar}
              className="hidden lg:block p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 ml-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center ml-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🥗</span>
              </div>
              <span className="ml-2 text-xl font-bold text-green-700">SinoFood Admin</span>
            </Link>
          </div>

          {/* Right side - Search, Notifications, Profile */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="ค้นหา..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 relative"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-3.5-3.5a8.38 8.38 0 01-1.5-5V6a6 6 0 10-12 0v2.5c0 1.81-.56 3.58-1.5 5L5 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {/* Notification Badge */}
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {notifications.filter(n => n.unread).length}
                </span>
              </button>

              {/* Notifications Dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-200">
                      การแจ้งเตือน
                    </div>
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 hover:bg-gray-50 ${notification.unread ? 'bg-blue-50' : ''}`}
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}ที่แล้ว</p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="px-4 py-2 border-t border-gray-200">
                      <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                        ดูทั้งหมด
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">A</span>
                </div>
                <span className="hidden md:block ml-2 text-gray-700 font-medium">Admin</span>
                <svg className="hidden md:block ml-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                      <div className="font-medium">Admin User</div>
                      <div className="text-xs text-gray-500">admin@sinofood.com</div>
                    </div>
                    <Link
                      to="/admin/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      โปรไฟล์
                    </Link>
                    <Link
                      to="/admin/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      ตั้งค่า
                    </Link>
                    <div className="border-t border-gray-200"></div>
                    <button
                      onClick={() => {
                        setIsProfileOpen(false)
                        // Handle logout
                        window.location.href = '/auth/login'
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    >
                      ออกจากระบบ
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {(isProfileOpen || isNotificationOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsProfileOpen(false)
            setIsNotificationOpen(false)
          }}
        ></div>
      )}
    </header>
  )
}

export default Header