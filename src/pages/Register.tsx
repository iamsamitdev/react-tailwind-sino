import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    tel: '',
    role: 'customer'
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'กรุณากรอกชื่อ-นามสกุล'
    }

    if (!formData.username.trim()) {
      newErrors.username = 'กรุณากรอกชื่อผู้ใช้'
    } else if (formData.username.length < 3) {
      newErrors.username = 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'กรุณากรอกอีเมล'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง'
    }

    if (!formData.password) {
      newErrors.password = 'กรุณากรอกรหัสผ่าน'
    } else if (formData.password.length < 6) {
      newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'
    }

    if (!formData.password_confirmation) {
      newErrors.password_confirmation = 'กรุณายืนยันรหัสผ่าน'
    } else if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = 'รหัสผ่านไม่ตรงกัน'
    }

    if (!formData.tel.trim()) {
      newErrors.tel = 'กรุณากรอกเบอร์โทรศัพท์'
    } else if (!/^[0-9]{10}$/.test(formData.tel.replace(/-/g, ''))) {
      newErrors.tel = 'เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    
    // Simulate registration process
    setTimeout(() => {
      alert('สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ')
      setIsLoading(false)
      // Redirect to login page
      window.location.href = '/auth/login'
    }, 2000)
  }

  const roles = [
    { value: 'customer', label: 'ลูกค้าทั่วไป' },
    { value: 'nutritionist', label: 'นักโภชนาการ' },
    { value: 'chef', label: 'เชฟ' }
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 z-10 flex items-center space-x-2 text-white hover:text-green-200 transition-colors"
        >
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-lg">🥗</span>
          </div>
          <span className="font-bold text-xl">SinoFood</span>
        </Link>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center text-center text-white p-12 relative z-10">
          <div className="max-w-md">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="เข้าร่วมกับเรา"
                className="w-64 h-64 object-cover rounded-3xl shadow-2xl mx-auto"
              />
            </div>
            
            <h1 className="text-4xl font-bold mb-6">
              เข้าร่วมกับเรา!
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              สมัครสมาชิกเพื่อเริ่มต้นการเดินทางสู่สุขภาพที่ดีและรับสิทธิพิเศษมากมาย
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">🎁</div>
                <div className="text-sm">ส่วนลดพิเศษ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">👨‍⚕️</div>
                <div className="text-sm">ปรึกษาฟรี</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">⭐</div>
                <div className="text-sm">สมาชิก VIP</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-green-600 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🥗</span>
              </div>
              <span className="font-bold text-2xl">SinoFood</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">สมัครสมาชิก</h1>
            <p className="text-gray-600">เข้าร่วมกับเราวันนี้!</p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">สมัครสมาชิก</h1>
            <p className="text-gray-600">กรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ชื่อ-นามสกุล *
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white ${
                    errors.fullname ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="กรอกชื่อ-นามสกุลของคุณ"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              {errors.fullname && <p className="mt-1 text-sm text-red-600">{errors.fullname}</p>}
            </div>

            {/* Username & Email Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ชื่อผู้ใช้ *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white ${
                      errors.username ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="ชื่อผู้ใช้"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>
                {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  อีเมล *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="อีเมลของคุณ"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  รหัสผ่าน *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 pl-12 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="รหัสผ่าน"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ยืนยันรหัสผ่าน *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="password_confirmation"
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 pl-12 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white ${
                      errors.password_confirmation ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="ยืนยันรหัสผ่าน"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password_confirmation && <p className="mt-1 text-sm text-red-600">{errors.password_confirmation}</p>}
              </div>
            </div>

            {/* Phone & Role Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  เบอร์โทรศัพท์ *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white ${
                      errors.tel ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="089-123-4567"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                {errors.tel && <p className="mt-1 text-sm text-red-600">{errors.tel}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ประเภทผู้ใช้ *
                </label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    {roles.map((role) => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start">
              <input 
                type="checkbox" 
                required
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1" 
              />
              <span className="ml-2 text-sm text-gray-600">
                ฉันยอมรับ{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  ข้อกำหนดและเงื่อนไข
                </a>
                {' '}และ{' '}
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  นโยบายความเป็นส่วนตัว
                </a>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  กำลังสมัครสมาชิก...
                </div>
              ) : (
                'สมัครสมาชิก'
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              มีบัญชีอยู่แล้ว?{' '}
              <Link to="/auth/login" className="font-medium text-green-600 hover:text-green-700">
                เข้าสู่ระบบ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register