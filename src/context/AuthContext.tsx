import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { api, getApiError } from "../lib/api"

// ─── Types ─────────────────────────────────────────────────────────────────────

export type Role = "ROLE_ADMIN" | "ROLE_COACH" | "ROLE_USER"

export type AuthUser = {
  role: Role
  name: string
}

type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (emailOrPhone: string, password: string) => Promise<void>
  logout: () => Promise<void>
  /** Manually set user (e.g. after registration redirect) */
  setUser: (user: AuthUser | null) => void
}

// ─── Context ───────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null)

// ─── Provider ──────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    // Restore from sessionStorage so refresh keeps you logged in
    try {
      const stored = sessionStorage.getItem("gymeni_user")
      return stored ? (JSON.parse(stored) as AuthUser) : null
    } catch {
      return null
    }
  })
  const [isLoading, setIsLoading] = useState(false)

  // Persist user to sessionStorage whenever it changes
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("gymeni_user", JSON.stringify(user))
    } else {
      sessionStorage.removeItem("gymeni_user")
    }
  }, [user])

  const login = useCallback(async (emailOrPhone: string, password: string) => {
    setIsLoading(true)
    try {
      const { data } = await api.post<AuthUser>("/auth/login", {
        emailOrPhone,
        password,
      })
      setUser(data)
    } catch (error) {
      throw new Error(getApiError(error))
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setIsLoading(true)
    try {
      await api.post("/auth/logout")
    } catch {
      // Even if the server call fails, clear local state
    } finally {
      setUser(null)
      setIsLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        isLoading,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// ─── Hook ──────────────────────────────────────────────────────────────────────

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>")
  }
  return ctx
}
