import { FormEvent, useState, type ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserPlus, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"
import { api, getApiError } from "../lib/api"

type Gender = "MALE" | "FEMALE" | "OTHER"

export function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "MALE" as Gender,
    password: "",
    confirmPassword: "",
    coachSlug: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setIsLoading(true)
    try {
      await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        age: Number(form.age),
        gender: form.gender,
        password: form.password,
        confirmPassword: form.confirmPassword,
        coachSlug: form.coachSlug,
      })
      setSuccess(true)
      setTimeout(() => navigate("/signin"), 2000)
    } catch (err) {
      setError(getApiError(err))
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <CheckCircle className="mx-auto mb-4 h-14 w-14 text-emerald-500" />
        <h1 className="text-2xl font-semibold text-slate-950">Account created!</h1>
        <p className="mt-2 text-slate-600">Redirecting you to sign in…</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        {/* Left */}
        <div className="space-y-6 lg:pt-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            Get started
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Join your coach's platform
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            Register under your coach's program to get access to your
            personalised diet plan, workout routine, and progress tracking.
          </p>
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-slate-900 underline">
              Sign in
            </Link>
          </p>
        </div>

        {/* Right: Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-slate-950">Create account</h2>

          {error && (
            <div className="mb-5 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <label className="block space-y-1.5 text-sm">
              <span className="font-medium text-slate-700">Full Name</span>
              <input
                required name="name" type="text" value={form.name}
                onChange={handleChange} placeholder="Ahmed Hassan"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </label>

            {/* Email + Phone */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium text-slate-700">Email</span>
                <input
                  required name="email" type="email" value={form.email}
                  onChange={handleChange} placeholder="ahmed@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium text-slate-700">Phone</span>
                <input
                  required name="phone" type="tel" value={form.phone}
                  onChange={handleChange} placeholder="+201234567890"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
            </div>

            {/* Age + Gender */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium text-slate-700">Age</span>
                <input
                  required name="age" type="number" min="10" max="100" value={form.age}
                  onChange={handleChange} placeholder="25"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <label className="block space-y-1.5 text-sm">
                <span className="font-medium text-slate-700">Gender</span>
                <select
                  name="gender" value={form.gender} onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </label>
            </div>

            {/* Coach Slug */}
            <label className="block space-y-1.5 text-sm">
              <span className="font-medium text-slate-700">Coach Slug</span>
              <input
                required name="coachSlug" type="text" value={form.coachSlug}
                onChange={handleChange} placeholder="coach-mike"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
              <span className="text-xs text-slate-400">
                Your coach will provide their slug (e.g. coach-mike).
              </span>
            </label>

            {/* Password */}
            <label className="block space-y-1.5 text-sm">
              <span className="font-medium text-slate-700">Password</span>
              <div className="relative">
                <input
                  required name="password" type={showPassword ? "text" : "password"}
                  value={form.password} onChange={handleChange}
                  placeholder="Min 8 characters"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
                <button type="button" onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </label>

            {/* Confirm Password */}
            <label className="block space-y-1.5 text-sm">
              <span className="font-medium text-slate-700">Confirm Password</span>
              <input
                required name="confirmPassword" type="password"
                value={form.confirmPassword} onChange={handleChange}
                placeholder="Repeat your password"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </label>

            <button
              type="submit" disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-50"
            >
              {isLoading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : (
                <UserPlus className="h-4 w-4" />
              )}
              {isLoading ? "Creating account…" : "Create account"}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
