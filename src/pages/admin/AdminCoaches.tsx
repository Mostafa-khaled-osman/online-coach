import { useEffect, useState } from "react"
import { api, getApiError } from "../../lib/api"
import { User, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react"

type Coach = {
  id: string
  name: string
  email: string
  specialization?: string
  totalClients?: number
}

type PagedResponse = {
  content: Coach[]
  totalPages: number
  number: number
  totalElements: number
}

export function AdminCoaches() {
  const [data, setData] = useState<PagedResponse | null>(null)
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    api
      .get<PagedResponse>(`/admin/coaches?page=${page}&size=10`)
      .then(({ data }) => setData(data))
      .catch((err) => setError(getApiError(err)))
      .finally(() => setIsLoading(false))
  }, [page])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-950">All Coaches</h2>
        <p className="mt-1 text-sm text-slate-500">
          {data ? `${data.totalElements} coaches registered on the platform.` : "Loading…"}
        </p>
      </div>

      {isLoading && (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading coaches…
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {data && (
        <>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Coach</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Email</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Specialization</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Clients</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.content.map((coach) => (
                  <tr key={coach.id} className="transition hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
                          <User className="h-4 w-4 text-slate-500" />
                        </div>
                        <span className="font-medium text-slate-950">{coach.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{coach.email}</td>
                    <td className="px-6 py-4 text-slate-600">
                      {coach.specialization ?? "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {coach.totalClients ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {data.totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Page {data.number + 1} of {data.totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  disabled={page === 0}
                  onClick={() => setPage((p) => p - 1)}
                  className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <button
                  disabled={page >= data.totalPages - 1}
                  onClick={() => setPage((p) => p + 1)}
                  className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
