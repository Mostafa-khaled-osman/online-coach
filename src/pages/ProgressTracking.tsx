import { useEffect, useState, FormEvent } from "react"
import { TrendingUp, Plus, Scale, AlertCircle } from "lucide-react"
import { api, getApiError } from "../lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

type WeightLog = {
  id: string
  weightKg: number
  createdAt: string
}

export function ProgressTracking() {
  const [logs, setLogs] = useState<WeightLog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [weightInput, setWeightInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchLogs()
  }, [])

  async function fetchLogs() {
    setIsLoading(true)
    try {
      const { data } = await api.get<WeightLog[]>("/client/weight-logs")
      setLogs(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
    } catch (err) {
      setError(getApiError(err))
    } finally {
      setIsLoading(false)
    }
  }

  async function handleLogWeight(e: FormEvent) {
    e.preventDefault()
    if (!weightInput) return

    setIsSubmitting(true)
    setError(null)
    try {
      const { data } = await api.post<WeightLog>("/client/weight-logs", {
        weightKg: Number(weightInput),
      })
      // Add the new log to the top of the list
      setLogs((prev) => [data, ...prev])
      setWeightInput("")
    } catch (err) {
      setError(getApiError(err))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate quick metrics
  const currentWeight = logs.length > 0 ? logs[0].weightKg : null
  const startingWeight = logs.length > 0 ? logs[logs.length - 1].weightKg : null
  const totalChange = currentWeight && startingWeight ? (currentWeight - startingWeight).toFixed(1) : null

  return (
    <div className="space-y-8">
      <PageHeader
        description="Track your bodyweight changes over time to ensure you are moving towards your goal."
        eyebrow="Athlete hub"
        title="Progress & Weight"
      />

      {error && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Log New Weight Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Plus className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Log Today's Weight</CardTitle>
                <CardDescription>Enter your morning weight.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogWeight} className="flex items-end gap-3">
              <label className="block flex-1 space-y-2 text-sm">
                <span className="font-medium text-slate-700">Weight (kg)</span>
                <input
                  required
                  type="number"
                  step="0.1"
                  min="30"
                  max="300"
                  value={weightInput}
                  onChange={(e) => setWeightInput(e.target.value)}
                  placeholder="e.g. 82.5"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-[46px] items-center justify-center rounded-xl bg-slate-900 px-5 font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Save Log"}
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Quick Stats Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Overview</CardTitle>
                <CardDescription>Your weight journey at a glance.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Current Weight</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  {currentWeight ? `${currentWeight} kg` : "--"}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Total Change</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">
                  {totalChange ? `${Number(totalChange) > 0 ? "+" : ""}${totalChange} kg` : "--"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>History</CardTitle>
              <CardDescription>Your past weight entries.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
            </div>
          ) : logs.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-500">
              You haven't logged any weight entries yet. Your history will appear here.
            </p>
          ) : (
            <div className="space-y-3">
              {logs.map((log, index) => {
                const date = new Date(log.createdAt).toLocaleDateString(undefined, {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
                
                // Calculate diff from previous log if it exists (previous chronological log is index + 1)
                const prevLog = logs[index + 1]
                const diff = prevLog ? (log.weightKg - prevLog.weightKg).toFixed(1) : null
                const isGain = diff ? Number(diff) > 0 : false

                return (
                  <div key={log.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
                    <div>
                      <p className="font-semibold text-slate-950">{log.weightKg} kg</p>
                      <p className="text-xs text-slate-500">{date}</p>
                    </div>
                    {diff && (
                      <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        isGain ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"
                      }`}>
                        {isGain ? "+" : ""}{diff} kg
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
