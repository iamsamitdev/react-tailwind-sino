import type { ReactNode } from 'react'
import { Navigate } from 'react-router'

type ProtectedRouteProps = {
  children: ReactNode
  redirectPath?: string
}

const ProtectedRoute = ({ children, redirectPath }: ProtectedRouteProps) => {
  const isAuthenticated = !!localStorage.getItem('token')

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <Navigate to={redirectPath || '/auth/login'} replace />
  )
}

export default ProtectedRoute