// rfce
import { NavLink } from "react-router"
import { useState } from "react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">🥗</span>
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-green-700">
            SinoFood
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex space-x-3">
            <NavLink
              to="/auth/register"
              className="text-green-600 border border-green-600 hover:bg-green-50 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-200"
            >
              สมัครสมาชิก
            </NavLink>
            <NavLink
              to="/auth/login"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-colors duration-200"
            >
              เข้าสู่ระบบ
            </NavLink>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">{isMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}</span>
            {isMenuOpen ? (
              <svg
                className="w-5 h-5 transition-all duration-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 transition-all duration-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          } relative z-50`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white shadow-lg md:shadow-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-green-600 md:bg-transparent md:text-green-600 md:p-0 md:dark:text-green-400'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                หน้าแรก
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-green-600 md:bg-transparent md:text-green-600 md:p-0 md:dark:text-green-400'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                เกี่ยวกับเรา
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-green-600 md:bg-transparent md:text-green-600 md:p-0 md:dark:text-green-400'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                เมนูอาหาร
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nutrition"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-green-600 md:bg-transparent md:text-green-600 md:p-0 md:dark:text-green-400'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                โภชนาการ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-green-600 md:bg-transparent md:text-green-600 md:p-0 md:dark:text-green-400'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-green-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                ติดต่อเรา
              </NavLink>
            </li>
            {/* Mobile Auth Links */}
            <li className="md:hidden border-t border-gray-200 pt-4 mt-4">
              <NavLink
                to="/auth/register"
                className="block py-2 px-3 text-green-600 border border-green-600 rounded-lg text-center hover:bg-green-50 transition-colors duration-200 mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                สมัครสมาชิก
              </NavLink>
            </li>
            <li className="md:hidden">
              <NavLink
                to="/auth/login"
                className="block py-2 px-3 text-white bg-green-600 rounded-lg text-center hover:bg-green-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                เข้าสู่ระบบ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar