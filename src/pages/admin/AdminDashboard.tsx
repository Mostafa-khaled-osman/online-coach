import { useEffect, useState } from "react"
import { api, getApiError } from "../../lib/api"
import { Users, TrendingUp, DollarSign, AlertCircle } from "lucide-react"

type SystemStats = {
  totalCoaches: number
  totalClients: number
  totalRevenue: number
}

export function AdminDashboard() {
  const [stats, setStats] = useState<SystemStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api
      .get<SystemStats>("/admin/system-stats")
      .then(({ data }) => setStats(data))
      .catch((err) => setError(getApiError(err)))
      .finally(() => setIsLoading(false))
  }, [])

  const cards = stats
    ? [
        {
          label: "Total Coaches",
          value: stats.totalCoaches,
          icon: Users,
          color: "bg-blue-50 text-blue-600",
        },
        {
          label: "Total Clients",
          value: stats.totalClients,
          icon: TrendingUp,
          color: "bg-emerald-50 text-emerald-600",
        },
        {
          label: "Total Revenue",
          value: `$${stats.totalRevenue.toLocaleString()}`,
          icon: DollarSign,
          color: "bg-violet-50 text-violet-600",
        },
      ]
    : []

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-950">System Overview</h2>
        <p className="mt-1 text-sm text-slate-500">
          Platform-wide metrics for all coaches and clients.
        </p>
      </div>

      {isLoading && (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading stats…
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {stats && (
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-1 text-3xl font-bold text-slate-950">{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
