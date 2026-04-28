import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CalendarDays, DollarSign, Users, AlertCircle, Clock } from "lucide-react"
import { api, getApiError } from "../lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"
import { Button } from "../components/ui/Button"

type DashboardStats = {
  activeClients: number
  pendingPayments: number
  totalRevenue: number
}

export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api
      .get<DashboardStats>("/coach/dashboard-stats")
      .then(({ data }) => setStats(data))
      .catch((err) => setError(getApiError(err)))
      .finally(() => setIsLoading(false))
  }, [])

  const statCards = stats
    ? [
        { label: "Active Clients", value: stats.activeClients, note: "Currently enrolled", icon: Users },
        { label: "Pending Payments", value: stats.pendingPayments, note: "Awaiting your review", icon: Clock },
        { label: "Total Revenue", value: `$${stats.totalRevenue.toLocaleString()}`, note: "All time earnings", icon: DollarSign },
      ]
    : []

  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/dashboard/schedule">View schedule</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard/clients">Open clients</Link>
            </Button>
          </>
        }
        description="Your real-time coaching overview — clients, payments, and revenue at a glance."
        eyebrow="Coach workspace"
        title="Dashboard"
      />

      {isLoading && (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading stats…
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {stats && (
        <div className="grid gap-6 md:grid-cols-3">
          {statCards.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <CardDescription>{stat.label}</CardDescription>
                      <CardTitle className="mt-2 text-3xl">{stat.value}</CardTitle>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">{stat.note}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {stats && stats.pendingPayments > 0 && (
        <div className="flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-amber-600" />
            <div>
              <p className="text-sm font-semibold text-amber-900">
                {stats.pendingPayments} payment{stats.pendingPayments > 1 ? "s" : ""} waiting for approval
              </p>
              <p className="text-xs text-amber-700">Review and approve to activate client plans.</p>
            </div>
          </div>
          <Link
            to="/dashboard/clients"
            className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-amber-700"
          >
            Review now
          </Link>
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
            <CardDescription>Jump to the most common coaching tasks.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: "Review pending payments", to: "/dashboard/clients" },
              { title: "View client list", to: "/dashboard/clients" },
              { title: "Check your schedule", to: "/dashboard/schedule" },
              { title: "Open messages", to: "/dashboard/messages" },
            ].map((item) => (
              <Link
                key={item.title}
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
                to={item.to}
              >
                {item.title}
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile settings</CardTitle>
            <CardDescription>Keep your bio and specialization up to date.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-600">
              Update your profile image, bio, and specialization so clients can find and trust you.
            </p>
            <Button asChild className="w-full">
              <Link to="/dashboard/settings">Edit profile</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
