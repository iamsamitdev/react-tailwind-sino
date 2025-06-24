// rfce
import { NavLink } from "react-router"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 px-4 py-12 lg:py-16 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🥗</span>
              </div>
              <span className="text-2xl font-bold text-white">SinoFood</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              อาหารสุขภาพคุณภาพสูง ส่งตรงถึงบ้านคุณ เพื่อชีวิตที่ดีกว่าและสุขภาพที่แข็งแรง
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <span className="sr-only">Line</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.282 5.035a9.715 9.715 0 0 0-4.71-3.142 9.94 9.94 0 0 0-9.284.116A10.08 10.08 0 0 0 2.1 7.15a9.89 9.89 0 0 0 .117 9.385 9.735 9.735 0 0 0 3.142 4.71 9.94 9.94 0 0 0 9.284-.116A10.08 10.08 0 0 0 22.09 16.98a9.89 9.89 0 0 0-.117-9.385zM9.03 14.895a.684.684 0 0 1-1.018-.553v-4.66a.683.683 0 0 1 1.018-.553l4.09 2.33a.683.683 0 0 1 0 1.106l-4.09 2.33zm6.655.452h-1.57a.56.56 0 0 1-.56-.56v-4.99a.56.56 0 0 1 .56-.56h1.57a.56.56 0 0 1 .56.56v4.99a.56.56 0 0 1-.56.56z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              เมนูหลัก
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <NavLink to="/" className="hover:text-green-400 transition-colors duration-200">
                  หน้าแรก
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-green-400 transition-colors duration-200">
                  เกี่ยวกับเรา
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="hover:text-green-400 transition-colors duration-200">
                  เมนูอาหาร
                </NavLink>
              </li>
              <li>
                <NavLink to="/nutrition" className="hover:text-green-400 transition-colors duration-200">
                  โภชนาการ
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-green-400 transition-colors duration-200">
                  ติดต่อเรา
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              บริการ
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-200">
                  สั่งอาหารออนไลน์
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-200">
                  จัดส่งถึงบ้าน
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-200">
                  ปรึกษาโภชนาการ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-200">
                  แพ็คเกจสุขภาพ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-200">
                  สมาชิก VIP
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              ติดต่อเรา
            </h3>
            <div className="text-gray-300 space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">📍</span>
                <div>
                  <p>123 ถนนสุขภาพดี</p>
                  <p>เขตบางรัก กรุงเทพฯ 10500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">📞</span>
                <p>02-123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✉️</span>
                <p>info@sinofood.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">🕒</span>
                <div>
                  <p>จันทร์-อาทิตย์</p>
                  <p>08:00 - 22:00 น.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Bottom Footer */}
        <div className="px-4 py-6 bg-gray-800 border-t border-gray-700">
          <div className="max-w-screen-xl md:flex md:items-center md:justify-between mx-auto">
            <div className="text-sm text-gray-400 sm:text-center">
              © 2024 <span className="font-semibold text-green-400">SinoFood</span>. สงวนลิขสิทธิ์ทุกการใช้งาน
            </div>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">นโยบายความเป็นส่วนตัว</span>
                <span className="text-sm">นโยบายความเป็นส่วนตัว</span>
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">เงื่อนไขการใช้งาน</span>
                <span className="text-sm">เงื่อนไขการใช้งาน</span>
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">คุกกี้</span>
                <span className="text-sm">คุกกี้</span>
              </a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer