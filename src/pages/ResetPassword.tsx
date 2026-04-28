import { FormEvent, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { KeyRound, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"
import { api, getApiError } from "../lib/api"

export function ResetPassword() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token") ?? ""

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }
    setError(null)
    setIsLoading(true)
    try {
      await api.post("/auth/reset-password", { token, newPassword: password })
      setSuccess(true)
      setTimeout(() => navigate("/signin"), 2500)
    } catch (err) {
      setError(getApiError(err))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-24 sm:px-6">
      {success ? (
        <div className="text-center">
          <CheckCircle className="mx-auto mb-4 h-14 w-14 text-emerald-500" />
          <h1 className="text-2xl font-semibold text-slate-950">Password updated!</h1>
          <p className="mt-2 text-slate-600">Redirecting you to sign in…</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <KeyRound className="h-6 w-6 text-slate-700" />
          </div>
          <h1 className="mb-1 text-xl font-semibold text-slate-950">Set new password</h1>
          <p className="mb-6 text-sm text-slate-500">
            Choose a strong password for your account.
          </p>

          {!token && (
            <div className="mb-4 rounded-xl bg-yellow-50 p-4 text-sm text-yellow-700">
              Missing reset token. Please use the link from your email.
            </div>
          )}

          {error && (
            <div className="mb-5 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block space-y-1.5 text-sm">
              <span className="font-medium text-slate-700">New Password</span>
              <div className="relative">
                <input
                  required type={showPassword ? "text" : "password"}
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 8 characters"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
                <button type="button" onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </label>

            <label className="block space-y-1.5 text-sm">
              <span className="font-medium text-slate-700">Confirm Password</span>
              <input
                required type="password"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </label>

            <button
              type="submit" disabled={isLoading || !token}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-50"
            >
              {isLoading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              )}
              {isLoading ? "Updating…" : "Update password"}
            </button>

            <p className="text-center text-sm text-slate-500">
              <Link to="/signin" className="font-medium text-slate-900 underline">
                Back to sign in
              </Link>
            </p>
          </form>
        </div>
      )}
    </div>
  )
}
