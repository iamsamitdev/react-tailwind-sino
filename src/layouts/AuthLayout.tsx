import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <Outlet />
    </div>
  )
}

export default AuthLayout