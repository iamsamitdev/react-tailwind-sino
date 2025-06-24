import { useState, useEffect, useCallback } from 'react'

const API_BASE_URL = 'http://localhost:3000/api'

interface ApiData {
  salesData: Array<{
    month: string
    sales: number
    profit: number
  }>
  userStats: Array<{
    name: string
    value: number
  }>
  kpiData: {
    totalRevenue: number
    totalUsers: number
    totalOrders: number
    conversionRate: number
  }
}

interface Category {
  id: number
  name: string
}

interface CategoryData {
  category: string
  sales: number
  profit: number
}

interface UseApiDataProps {
  timeRange: string
  category: string
  month: string
}

export const useApiData = ({ timeRange, category, month }: UseApiDataProps) => {
  const [data, setData] = useState<ApiData | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [categoryData, setCategoryData] = useState<CategoryData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        timeRange,
        ...(category !== 'all' && { category }),
        ...(month && { month })
      })

      const endpoints = [
        `${API_BASE_URL}/kpi?${params}`,
        `${API_BASE_URL}/sales?${params}`,
        `${API_BASE_URL}/user-stats?${params}`,
        `${API_BASE_URL}/categories`,
        `${API_BASE_URL}/sales-by-category?${params}`
      ]

      const responses = await Promise.all(
        endpoints.map(url => fetch(url))
      )

      // ตรวจสอบ response status
      responses.forEach((response, index) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data from endpoint ${index + 1}`)
        }
      })

      const [kpiData, salesData, userStatsData, categoriesData, categoryDataResult] = 
        await Promise.all(responses.map(response => response.json()))

      setData({
        kpiData,
        salesData,
        userStats: userStatsData
      })
      setCategories(categoriesData)
      setCategoryData(categoryDataResult)

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      setError('เกิดข้อผิดพลาดในการโหลดข้อมูล: ' + errorMessage)
      console.error('API Error:', err)
    } finally {
      setLoading(false)
    }
  }, [timeRange, category, month])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refreshData = useCallback(() => {
    fetchData()
  }, [fetchData])

  return { 
    data, 
    categories, 
    categoryData, 
    loading, 
    error, 
    refreshData 
  }
}

// Hook สำหรับจัดการ API Health Check
export const useApiHealth = () => {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null)
  const [checking, setChecking] = useState(false)

  const checkHealth = useCallback(async () => {
    try {
      setChecking(true)
      const response = await fetch(`${API_BASE_URL}/health`)
      const data = await response.json()
      setIsHealthy(response.ok && data.status === 'OK')
    } catch (error) {
      setIsHealthy(false)
      console.error('Health check failed:', error)
    } finally {
      setChecking(false)
    }
  }, [])

  useEffect(() => {
    checkHealth()
  }, [checkHealth])

  return { isHealthy, checking, checkHealth }
}

// Hook สำหรับจัดการ Filters
export const useFilters = () => {
  const [timeRange, setTimeRange] = useState('6months')
  const [category, setCategory] = useState('all')
  const [month, setMonth] = useState('')

  const resetFilters = useCallback(() => {
    setTimeRange('6months')
    setCategory('all')
    setMonth('')
  }, [])

  const getFilterSummary = useCallback(() => {
    const timeRangeLabels = {
      '7days': '7 วันที่ผ่านมา',
      '30days': '30 วันที่ผ่านมา',
      '6months': '6 เดือนที่ผ่านมา',
      '1year': '1 ปีที่ผ่านมา'
    } as any

    const monthLabels = {
      '1': 'มกราคม', '2': 'กุมภาพันธ์', '3': 'มีนาคม', '4': 'เมษายน',
      '5': 'พฤษภาคม', '6': 'มิถุนายน', '7': 'กรกฎาคม', '8': 'สิงหาคม',
      '9': 'กันยายน', '10': 'ตุลาคม', '11': 'พฤศจิกายน', '12': 'ธันวาคม'
    } as any

    return {
      timeRange: timeRangeLabels[timeRange] || timeRange,
      category: category === 'all' ? 'ทุกหมวดหมู่' : category,
      month: month ? monthLabels[month] : 'ทุกเดือน'
    }
  }, [timeRange, category, month])

  return {
    timeRange,
    category,
    month,
    setTimeRange,
    setCategory,
    setMonth,
    resetFilters,
    getFilterSummary
  }
}

// Hook สำหรับจัดการ Chart Colors
export const useChartColors = () => {
  const colors = {
    primary: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'],
    gradient: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'],
    business: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd']
  }

  const getColorByIndex = (index: number, theme: 'primary' | 'gradient' | 'business' = 'primary') => {
    return colors[theme][index % colors[theme].length]
  }

  return { colors, getColorByIndex }
}