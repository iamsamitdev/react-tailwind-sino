import { useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout