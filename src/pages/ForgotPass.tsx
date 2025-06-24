import React, { useState } from 'react'
import { Link } from 'react-router'

const ForgotPass = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError('กรุณากรอกอีเมล')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('รูปแบบอีเมลไม่ถูกต้อง')
      return
    }

    setIsLoading(true)
    setError('')
    
    // Simulate sending reset email
    setTimeout(() => {
      setIsLoading(false)
      setIsEmailSent(true)
    }, 2000)
  }

  const handleResendEmail = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('ส่งอีเมลรีเซ็ตรหัสผ่านใหม่แล้ว')
    }, 1500)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Column - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 z-10 flex items-center space-x-2 text-white hover:text-blue-200 transition-colors"
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
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-6">
              ลืมรหัสผ่าน?
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              ไม่ต้องกังวล! เราจะส่งลิงก์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณ
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">🔒</div>
                <div className="text-sm">ปลอดภัย</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm">รวดเร็ว</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🥗</span>
              </div>
              <span className="font-bold text-2xl">SinoFood</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">ลืมรหัสผ่าน</h1>
            <p className="text-gray-600">รีเซ็ตรหัสผ่านของคุณ</p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">ลืมรหัสผ่าน</h1>
            <p className="text-gray-600">กรอกอีเมลเพื่อรีเซ็ตรหัสผ่าน</p>
          </div>

          {!isEmailSent ? (
            <>
              {/* Forgot Password Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    อีเมล *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError('')
                      }}
                      required
                      className={`w-full px-4 py-3 pl-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white ${
                        error ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="กรอกอีเมลของคุณ"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                  </div>
                  {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      กำลังส่งอีเมล...
                    </div>
                  ) : (
                    'ส่งลิงก์รีเซ็ตรหัสผ่าน'
                  )}
                </button>
              </form>

              {/* Instructions */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">วิธีการรีเซ็ตรหัสผ่าน</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <ol className="list-decimal list-inside space-y-1">
                        <li>กรอกอีเมลที่ใช้สมัครสมาชิก</li>
                        <li>ตรวจสอบอีเมลและคลิกลิงก์รีเซ็ต</li>
                        <li>ตั้งรหัสผ่านใหม่</li>
                        <li>เข้าสู่ระบบด้วยรหัสผ่านใหม่</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Email Sent Success */
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ส่งอีเมลแล้ว!
              </h2>
              
              <p className="text-gray-600 mb-6">
                เราได้ส่งลิงก์รีเซ็ตรหัสผ่านไปยัง
                <br />
                <span className="font-semibold text-blue-600">{email}</span>
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleResendEmail}
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    isLoading
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      กำลังส่งใหม่...
                    </div>
                  ) : (
                    'ส่งอีเมลใหม่'
                  )}
                </button>

                <button
                  onClick={() => {
                    setIsEmailSent(false)
                    setEmail('')
                    setError('')
                  }}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  ใช้อีเมลอื่น
                </button>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 w-5 h-5 text-yellow-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">ไม่เห็นอีเมล?</h3>
                    <div className="mt-1 text-sm text-yellow-700">
                      ตรวจสอบโฟลเดอร์ Spam หรือ Junk Mail ของคุณ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Back to Login */}
          <div className="mt-8 text-center">
            <Link 
              to="/auth/login" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              กลับไปหน้าเข้าสู่ระบบ
            </Link>
          </div>

          {/* Help Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">ยังมีปัญหา?</p>
            <div className="flex justify-center space-x-4 text-sm">
              <Link to="/contact" className="text-blue-600 hover:text-blue-700">
                ติดต่อเรา
              </Link>
              <span className="text-gray-400">|</span>
              <a href="tel:02-123-4567" className="text-blue-600 hover:text-blue-700">
                โทร 02-123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPass