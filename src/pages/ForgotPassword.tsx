import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { Mail, AlertCircle, CheckCircle } from "lucide-react"
import { api, getApiError } from "../lib/api"

export function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      await api.post("/auth/forgot-password", { email })
      setSent(true)
    } catch (err) {
      setError(getApiError(err))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-24 sm:px-6">
      {sent ? (
        <div className="text-center">
          <CheckCircle className="mx-auto mb-4 h-14 w-14 text-emerald-500" />
          <h1 className="text-2xl font-semibold text-slate-950">Check your email</h1>
          <p className="mt-2 text-slate-600">
            We sent a password reset link to <strong>{email}</strong>.
          </p>
          <Link to="/signin" className="mt-6 inline-block text-sm font-medium text-slate-900 underline">
            Back to sign in
          </Link>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
            <Mail className="h-6 w-6 text-slate-700" />
          </div>
          <h1 className="mb-1 text-xl font-semibold text-slate-950">Forgot your password?</h1>
          <p className="mb-6 text-sm text-slate-500">
            Enter your email address and we'll send you a reset link.
          </p>

          {error && (
            <div className="mb-5 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block space-y-1.5 text-sm">
              <span className="font-medium text-slate-700">Email address</span>
              <input
                required type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </label>

            <button
              type="submit" disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-50"
            >
              {isLoading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              )}
              {isLoading ? "Sending…" : "Send reset link"}
            </button>

            <p className="text-center text-sm text-slate-500">
              Remember your password?{" "}
              <Link to="/signin" className="font-medium text-slate-900 underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      )}
    </div>
  )
}
