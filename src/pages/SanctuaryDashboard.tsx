import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Dumbbell, MessageSquare, Utensils, AlertCircle, CreditCard } from "lucide-react"
import { api, getApiError } from "../lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"
import { Button } from "../components/ui/Button"

type MyPlan = {
  planTitle: string
  status: "PENDING" | "ACTIVE" | "EXPIRED"
  expiresAt?: string
  durationDays?: number
}

const STATUS_STYLES: Record<string, string> = {
  ACTIVE: "bg-emerald-100 text-emerald-700",
  PENDING: "bg-amber-100 text-amber-700",
  EXPIRED: "bg-slate-100 text-slate-600",
}

const quickActions = [
  { title: "Workout Plan", to: "/athlete/workout-log", icon: Dumbbell, description: "View your assigned workout routine." },
  { title: "Meal Plan", to: "/athlete/meal-planner", icon: Utensils, description: "See your personalised diet plan." },
  { title: "AI Nutrition Chat", to: "/athlete/chat", icon: MessageSquare, description: "Ask the AI nutrition assistant anything." },
]

export function SanctuaryDashboard() {
  const [plan, setPlan] = useState<MyPlan | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api
      .get<MyPlan>("/client/my-plan")
      .then(({ data }) => setPlan(data))
      .catch((err) => {
        // 404 = no plan yet — not an error to show prominently
        if (err?.response?.status !== 404) {
          setError(getApiError(err))
        }
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/athlete/progress">My progress</Link>
            </Button>
            <Button asChild>
              <Link to="/athlete/workout-log">View workout</Link>
            </Button>
          </>
        }
        description="Your personal training hub — plan status, diet, workouts, and AI nutrition chat."
        eyebrow="Athlete hub"
        title="Dashboard"
      />

      {/* Plan Status Card */}
      {isLoading ? (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading your plan…
        </div>
      ) : error ? (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      ) : plan ? (
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardDescription>Current Subscription</CardDescription>
                <CardTitle className="mt-1 text-2xl">{plan.planTitle}</CardTitle>
              </div>
              <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${STATUS_STYLES[plan.status]}`}>
                {plan.status}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            {plan.status === "PENDING" && (
              <p className="mb-3 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-700">
                ⏳ Your payment is under review. Your coach will activate your plan shortly.
              </p>
            )}
            {plan.status === "EXPIRED" && (
              <p className="mb-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                Your plan has expired. Upload a new payment to continue.
              </p>
            )}
            {plan.expiresAt && (
              <p className="text-sm text-slate-500">
                Expires: <strong className="text-slate-950">{new Date(plan.expiresAt).toLocaleDateString()}</strong>
              </p>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No active plan</CardTitle>
            <CardDescription>
              You don't have a subscription yet. Upload your payment proof to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/athlete/payment">
                <CreditCard className="h-4 w-4" />
                Upload payment proof
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        {quickActions.map(({ title, to, icon: Icon, description }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-950">{title}</p>
              <p className="mt-0.5 text-sm text-slate-500">{description}</p>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-400" />
          </Link>
        ))}
      </div>
    </div>
  )
}
