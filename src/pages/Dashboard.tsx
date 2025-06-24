import { useApiData } from '../services/apiReport'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer } from 'recharts'
import { useReactTable, getCoreRowModel, flexRender, type ColumnDef } from '@tanstack/react-table'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
import { unparse } from 'papaparse'

const Dashboard = () => {
  const stats = [
    {
      name: 'ยอดขายวันนี้',
      value: '฿45,231',
      change: '+12%',
      changeType: 'increase',
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      name: 'คำสั่งซื้อใหม่',
      value: '23',
      change: '+8%',
      changeType: 'increase',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      name: 'ลูกค้าใหม่',
      value: '12',
      change: '+15%',
      changeType: 'increase',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      name: 'สินค้าใกล้หมด',
      value: '3',
      change: '-2',
      changeType: 'decrease',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ]

  const recentOrders = [
    { id: '#12345', customer: 'สมชาย ใจดี', items: 'สลัดผักรวม, น้ำผลไม้', amount: '฿450', status: 'กำลังเตรียม', time: '10:30' },
    { id: '#12346', customer: 'สุดา สวยงาม', items: 'โบว์ลควินัว, สมูทตี้', amount: '฿380', status: 'ส่งแล้ว', time: '10:15' },
    { id: '#12347', customer: 'วิทย์ ฉลาด', items: 'ซุปผัก, ข้าวกล้อง', amount: '฿320', status: 'เสร็จสิ้น', time: '09:45' },
    { id: '#12348', customer: 'มาลี หอม', items: 'สลัดไก่ย่าง', amount: '฿280', status: 'รอชำระ', time: '09:30' }
  ]

  const topProducts = [
    { name: 'สลัดผักรวมออร์แกนิก', sold: 45, revenue: '฿6,750', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop' },
    { name: 'โบว์ลควินัวโปรตีนสูง', sold: 32, revenue: '฿4,800', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop' },
    { name: 'สมูทตี้ผลไม้รวม', sold: 28, revenue: '฿3,360', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=100&h=100&fit=crop' },
    { name: 'ซุปผักโบราณ', sold: 24, revenue: '฿2,880', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=100&h=100&fit=crop' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'กำลังเตรียม':
        return 'bg-yellow-100 text-yellow-800'
      case 'ส่งแล้ว':
        return 'bg-blue-100 text-blue-800'
      case 'เสร็จสิ้น':
        return 'bg-green-100 text-green-800'
      case 'รอชำระ':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // TanStack Table setup
  const table = useReactTable({
    data: useApiData({ 
      timeRange: '6months', 
      category: 'all', 
      month: '' }).categories || [],
    columns: [
      {
        header: 'หมวดหมู่',
        accessorKey: 'name',
        cell: info => info.getValue()
      },
      {
        header: 'จำนวนสินค้า',
        accessorKey: 'productCount',
        cell: info => info.getValue()
      },
      {
        header: 'ยอดขายรวม',
        accessorKey: 'totalSales',
        cell: info => `฿${info.getValue()?.toLocaleString()}`,
      }
    ] as ColumnDef<any>[],
    getCoreRowModel: getCoreRowModel()
  })

  // Export to Excel function
  const exportToExcel = () => {
    const exportData = table.getRowModel().rows.map(row => row.original)
    const worksheet = XLSX.utils.json_to_sheet(exportData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' })
    saveAs(file, 'table-data.xlsx')
  }

  const exportToCSV = () => {
    const exportData = table.getRowModel().rows.map(row => row.original)
    const csv = unparse(exportData)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    saveAs(blob, 'table-data.csv')
  }

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">แดชบอร์ด</h1>
          <p className="text-gray-600 mt-1">ภาพรวมธุรกิจของคุณวันนี้</p>
        </div>
          <div className="flex items-center space-x-3">
           <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-900 w-40">
             <option value="today">วันนี้</option>
             <option value="7days">7 วันที่แล้ว</option>
             <option value="30days">30 วันที่แล้ว</option>
             <option value="3months">3 เดือนที่แล้ว</option>
           </select>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
            ส่งออกรายงาน
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">แนวโน้มยอดขาย</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={useApiData({ 
                  timeRange: '6months', 
                  category: 'all', 
                  month: '' }).data?.salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                  <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">อุปกรณ์ที่ใช้เข้าถึง</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={useApiData({ 
                    timeRange: '6months',
                    category: 'all',
                    month: '' }).data?.userStats}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
          </div>
        </div>
      </div>

      {/* Read Category to table */}
      <div className="mt-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 className='text-black text-xl'>หมวดหมู่สินค้า</h1>
            <table className="table-auto w-full border">
        <thead className="bg-gray-200">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-2 py-2 border text-black font-semibold">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-2 py-2 border text-gray-700">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    stat.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {stat.changeType === 'increase' ? '↗' : '↘'} {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">จากเมื่อวาน</span>
                </div>
              </div>
              <div className="ml-4">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">คำสั่งซื้อล่าสุด</h3>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                ดูทั้งหมด
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <div key={order.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">{order.id}</p>
                      <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{order.customer}</p>
                    <p className="text-xs text-gray-500 mt-1">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                    <p className="text-xs text-gray-500">{order.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">สินค้าขายดี</h3>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                ดูทั้งหมด
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {topProducts.map((product, index) => (
              <div key={index} className="px-6 py-4">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">ขายได้ {product.sold} ชิ้น</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{product.revenue}</p>
                    <p className="text-xs text-gray-500">รายได้</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">การดำเนินการด่วน</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-8 h-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm font-medium text-gray-900">เพิ่มเมนูใหม่</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-sm font-medium text-gray-900">จัดการคำสั่งซื้อ</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">สร้างโปรโมชั่น</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-8 h-8 text-red-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">ดูรายงาน</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard