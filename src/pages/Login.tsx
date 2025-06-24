import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import { authLogin, type LoginData } from '../services/apiAuth'
import Swal from 'sweetalert2'

const Login = () => {
  
  // การใช้ useForm hook จาก react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>()

  // ฟังก์ชันสำหรับการส่งข้อมูลเข้าสู่ระบบ
  const onSubmit = async (data: LoginData) => {
    console.log("Login data submitted:", data)
    // ส่งไปยัง API สำหรับการเข้าสู่ระบบ
    authLogin(data).then(response => {
      console.log("Login successful:", response.data)
      Swal.fire({
        title: 'Login Successful',
        text: 'Welcome back!',
        icon: 'success', // success, warning, error, info
        confirmButtonText: 'OK'
      }).then(() => {
        // บันทึกข้อมูลผู้ใช้ใน localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user))
        // บันทึก token ใน localStorage
        localStorage.setItem('token', response.data.token)
        // พาไปยังหน้า admin/dashboard
        window.location.href = '/admin/dashboard'
      })
    }).catch(error => {
      console.error("Login failed:", error)
      Swal.fire({
        title: 'Login Failed',
        text: 'An error occurred during login',
        icon: 'error', // success, warning, error, info
        confirmButtonText: 'Try Again'
      })
    })
  }

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
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="อาหารสุขภาพ"
                className="w-64 h-64 object-cover rounded-3xl shadow-2xl mx-auto"
              />
            </div>
            
            <h1 className="text-4xl font-bold mb-6">
              ยินดีต้อนรับกลับ!
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              เข้าสู่ระบบเพื่อเริ่มต้นการเดินทางสู่สุขภาพที่ดีกับอาหารคุณภาพสูงของเรา
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">🥗</div>
                <div className="text-sm">อาหารสุขภาพ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">🚚</div>
                <div className="text-sm">จัดส่งฟรี</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl mb-2">💪</div>
                <div className="text-sm">สุขภาพดี</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">เข้าสู่ระบบ</h1>
            <p className="text-gray-600">ยินดีต้อนรับกลับ!</p>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">เข้าสู่ระบบ</h1>
            <p className="text-gray-600">กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                อีเมล
              </label>
              <div className="relative">
                <input
                  {...register("email", { 
                    required: "กรุณากรอกอีเมล",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'รูปแบบอีเมลไม่ถูกต้อง'
                    },
                   })}
                  type="text"
                  name="email"
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white"
                  placeholder="กรอกอีเมลของคุณ"
                />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 pl-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                รหัสผ่าน
              </label>
              <div className="relative">
                <input
                  {...register("password", { 
                    required: "กรุณากรอกรหัสผ่าน",
                    minLength: {
                      value: 6,
                      message: 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'
                    }
                  })}
                  type='password'
                  name="password"
                  className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white"
                  placeholder="กรอกรหัสผ่านของคุณ"
                />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 pl-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                <span className="ml-2 text-sm text-gray-600">จดจำฉันไว้</span>
              </label>
              <Link to="/auth/forgot-password" className="text-sm text-green-600 hover:text-green-700 font-medium">
                ลืมรหัสผ่าน?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">หรือเข้าสู่ระบบด้วย</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="ml-2">Facebook</span>
              </button>

              <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2">Google</span>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ยังไม่มีบัญชี?{' '}
              <Link to="/auth/register" className="font-medium text-green-600 hover:text-green-700">
                สมัครสมาชิก
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login