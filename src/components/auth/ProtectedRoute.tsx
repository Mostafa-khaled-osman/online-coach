import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth, type Role } from "../../context/AuthContext"

type Props = {
  /** Required role to access this route. If omitted, any authenticated user passes. */
  role?: Role
}

/**
 * Wraps a set of routes with authentication + role checks.
 *
 * Usage in App.tsx:
 *   <Route element={<ProtectedRoute role="ROLE_COACH" />}>
 *     <Route path="/dashboard" ... />
 *   </Route>
 */
export function ProtectedRoute({ role }: Props) {
  const { user, isAuthenticated } = useAuth()
  const location = useLocation()

  // 1. Not logged in → go to sign-in, remembering the intended path
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  // 2. Wrong role → redirect to their correct portal
  if (role && user?.role !== role) {
    const redirectMap: Record<Role, string> = {
      ROLE_COACH: "/dashboard",
      ROLE_USER: "/athlete/dashboard",
      ROLE_ADMIN: "/admin",
    }
    const home = user ? redirectMap[user.role] : "/signin"
    return <Navigate to={home} replace />
  }

  // 3. All good — render the nested routes
  return <Outlet />
}
