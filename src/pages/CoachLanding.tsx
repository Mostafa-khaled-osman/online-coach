import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { api, getApiError } from "../lib/api"
import { Star, Clock, CheckCircle, AlertCircle, User } from "lucide-react"

type Plan = {
  id: string
  title: string
  description: string
  price: number
  durationDays: number
}

type CoachProfile = {
  name: string
  bio: string
  specialization: string
  profileImageUrl?: string
  plans: Plan[]
}

export function CoachLanding() {
  const { slug } = useParams<{ slug: string }>()
  const [coach, setCoach] = useState<CoachProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return
    api
      .get<CoachProfile>(`/public/coach/${slug}`)
      .then(({ data }) => setCoach(data))
      .catch((err) => setError(getApiError(err)))
      .finally(() => setIsLoading(false))
  }, [slug])

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
      </div>
    )
  }

  if (error || !coach) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-400" />
        <h1 className="text-xl font-semibold text-slate-950">Coach not found</h1>
        <p className="mt-2 text-slate-500">{error ?? "This coach profile doesn't exist."}</p>
        <Link to="/" className="mt-6 inline-block text-sm font-medium text-slate-900 underline">
          Go home
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Coach Hero */}
      <div className="mb-16 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full bg-slate-200 ring-4 ring-slate-100">
          {coach.profileImageUrl ? (
            <img src={coach.profileImageUrl} alt={coach.name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <User className="h-12 w-12 text-slate-400" />
            </div>
          )}
        </div>
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            {coach.specialization}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {coach.name}
          </h1>
          {coach.bio && (
            <p className="mt-3 max-w-2xl text-lg text-slate-600">{coach.bio}</p>
          )}
          <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
            <Link
              to={`/register?coachSlug=${slug}`}
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Join this coach
            </Link>
            <Link
              to="/signin"
              className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Already a member? Sign in
            </Link>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <h2 className="mb-8 text-2xl font-semibold text-slate-950">
        Subscription Plans
      </h2>

      {coach.plans.length === 0 ? (
        <p className="text-slate-500">No plans available yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coach.plans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-950">{plan.title}</h3>
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
              </div>

              {plan.description && (
                <p className="mb-4 flex-1 text-sm text-slate-600">{plan.description}</p>
              )}

              <div className="mt-auto space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />
                  <span>{plan.durationDays} days</span>
                </div>

                <div className="text-3xl font-bold text-slate-950">
                  ${plan.price.toFixed(2)}
                </div>

                <Link
                  to={`/register?coachSlug=${slug}&planId=${plan.id}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  <CheckCircle className="h-4 w-4" />
                  Get started
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
