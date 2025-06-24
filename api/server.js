const express = require('express')
const { Pool } = require('pg')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

// Middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')
    res.json({ 
      status: 'Connected', 
      timestamp: result.rows[0].now 
    })
  } catch (err) {
    console.error('Database connection error:', err)
    res.status(500).json({ 
      status: 'Error', 
      message: `Database connection failed: ${err.message}` 
    })
  }
})

// Helper function สำหรับ format วันที่
const formatDateRange = (timeRange) => {
  const today = new Date()
  let startDate = new Date()
  
  switch(timeRange) {
    case '7days':
      startDate.setDate(today.getDate() - 7)
      break
    case '30days':
      startDate.setDate(today.getDate() - 30)
      break
    case '6months':
      startDate.setMonth(today.getMonth() - 6)
      break
    case '1year':
      startDate.setFullYear(today.getFullYear() - 1)
      break
    default:
      startDate.setMonth(today.getMonth() - 6)
  }
  
  return {
    startDate: startDate.toISOString().split('T')[0],
    endDate: today.toISOString().split('T')[0]
  }
}

// API Routes

// 1. ดึงข้อมูล KPI
app.get('/api/kpi', async (req, res) => {
  try {
    const { timeRange = '6months', category } = req.query
    const { startDate, endDate } = formatDateRange(timeRange)
    
    let categoryFilter = ''
    let categoryParams = [startDate, endDate]
    
    if (category && category !== 'all') {
      categoryFilter = 'AND s.category_id = $3'
      categoryParams.push(category)
    }

    // คำนวณรายได้รวม
    const revenueQuery = `
      SELECT COALESCE(SUM(amount), 0) as total_revenue
      FROM sales s
      WHERE s.sale_date BETWEEN $1 AND $2 ${categoryFilter}
    `
    
    // คำนวณจำนวนคำสั่งซื้อ
    const ordersQuery = `
      SELECT COUNT(*) as total_orders
      FROM orders o
      WHERE o.order_date BETWEEN $1 AND $2 ${category && category !== 'all' ? 'AND o.category_id = $3' : ''}
    `
    
    // คำนวณผู้ใช้งาน (รวมจาก sessions ล่าสุด)
    const usersQuery = `
      SELECT COALESCE(SUM(session_count), 0) as total_users
      FROM user_sessions
      WHERE session_date BETWEEN $1 AND $2
    `

    const [revenueResult, ordersResult, usersResult] = await Promise.all([
      pool.query(revenueQuery, categoryParams),
      pool.query(ordersQuery, categoryParams),
      pool.query(usersQuery, [startDate, endDate])
    ])

    // คำนวณอัตราการแปลง (สมมติ)
    const totalOrders = parseInt(ordersResult.rows[0].total_orders)
    const totalUsers = parseInt(usersResult.rows[0].total_users)
    const conversionRate = totalUsers > 0 ? ((totalOrders / totalUsers) * 100).toFixed(2) : 0

    res.json({
      totalRevenue: parseFloat(revenueResult.rows[0].total_revenue),
      totalUsers: totalUsers,
      totalOrders: totalOrders,
      conversionRate: parseFloat(conversionRate)
    })
  } catch (error) {
    console.error('Error fetching KPI data:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// 2. ดึงข้อมูลยอดขายรายเดือน
app.get('/api/sales', async (req, res) => {
  try {
    const { timeRange = '6months', category } = req.query
    const { startDate, endDate } = formatDateRange(timeRange)
    
    let categoryFilter = ''
    let queryParams = [startDate, endDate]
    
    if (category && category !== 'all') {
      categoryFilter = 'AND s.category_id = $3'
      queryParams.push(category)
    }

    const query = `
      SELECT 
        TO_CHAR(s.sale_date, 'Mon YYYY') as month,
        EXTRACT(YEAR FROM s.sale_date) as year,
        EXTRACT(MONTH FROM s.sale_date) as month_num,
        SUM(s.amount) as sales,
        SUM(s.profit) as profit
      FROM sales s
      WHERE s.sale_date BETWEEN $1 AND $2 ${categoryFilter}
      GROUP BY EXTRACT(YEAR FROM s.sale_date), EXTRACT(MONTH FROM s.sale_date), TO_CHAR(s.sale_date, 'Mon YYYY')
      ORDER BY year, month_num
    `

    const result = await pool.query(query, queryParams)
    
    // แปลงชื่อเดือนเป็นภาษาไทย
    const monthNames = {
      'Jan': 'ม.ค.', 'Feb': 'ก.พ.', 'Mar': 'มี.ค.', 'Apr': 'เม.ย.',
      'May': 'พ.ค.', 'Jun': 'มิ.ย.', 'Jul': 'ก.ค.', 'Aug': 'ส.ค.',
      'Sep': 'ก.ย.', 'Oct': 'ต.ค.', 'Nov': 'พ.ย.', 'Dec': 'ธ.ค.'
    }

    const salesData = result.rows.map(row => ({
      month: monthNames[row.month.split(' ')[0]] || row.month,
      sales: parseFloat(row.sales),
      profit: parseFloat(row.profit)
    }))

    res.json(salesData)
  } catch (error) {
    console.error('Error fetching sales data:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// 3. ดึงข้อมูลสถิติอุปกรณ์ผู้ใช้
app.get('/api/user-stats', async (req, res) => {
  try {
    const { timeRange = '6months' } = req.query
    const { startDate, endDate } = formatDateRange(timeRange)

    const query = `
      SELECT 
        device_type,
        SUM(session_count) as total_sessions
      FROM user_sessions
      WHERE session_date BETWEEN $1 AND $2
      GROUP BY device_type
      ORDER BY total_sessions DESC
    `

    const result = await pool.query(query, [startDate, endDate])
    
    // แปลงชื่ออุปกรณ์เป็นภาษาไทย
    const deviceNames = {
      'desktop': 'เดสก์ทอป',
      'mobile': 'มือถือ',
      'tablet': 'แท็บเล็ต'
    }

    const userStats = result.rows.map(row => ({
      name: deviceNames[row.device_type] || row.device_type,
      value: parseInt(row.total_sessions)
    }))

    res.json(userStats)
  } catch (error) {
    console.error('Error fetching user stats:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// 4. ดึงรายชื่อหมวดหมู่
app.get('/api/categories', async (req, res) => {
  try {
    const query = 'SELECT id, name FROM categories ORDER BY name'
    const result = await pool.query(query)
    
    res.json(result.rows)
  } catch (error) {
    console.error('Error fetching categories:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// 5. ดึงข้อมูลยอดขายแยกตามหมวดหมู่
app.get('/api/sales-by-category', async (req, res) => {
  try {
    const { timeRange = '6months', month } = req.query
    const { startDate, endDate } = formatDateRange(timeRange)
    
    let dateFilter = 'WHERE s.sale_date BETWEEN $1 AND $2'
    let queryParams = [startDate, endDate]
    
    if (month) {
      dateFilter += ' AND EXTRACT(MONTH FROM s.sale_date) = $3'
      queryParams.push(month)
    }

    const query = `
      SELECT 
        c.name as category,
        SUM(s.amount) as sales,
        SUM(s.profit) as profit
      FROM sales s
      JOIN categories c ON s.category_id = c.id
      ${dateFilter}
      GROUP BY c.id, c.name
      ORDER BY sales DESC
    `

    const result = await pool.query(query, queryParams)
    
    const categoryData = result.rows.map(row => ({
      category: row.category,
      sales: parseFloat(row.sales),
      profit: parseFloat(row.profit)
    }))

    res.json(categoryData)
  } catch (error) {
    console.error('Error fetching category sales:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
