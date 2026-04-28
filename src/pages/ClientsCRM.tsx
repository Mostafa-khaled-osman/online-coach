import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Search, Users, AlertCircle, ChevronLeft, ChevronRight, Trash2, Eye } from "lucide-react"
import { api, getApiError } from "../lib/api"
import { PageHeader } from "../components/ui/PageHeader"

type Client = {
  id: string
  name: string
  email: string
  phone?: string
  planStatus?: "PENDING" | "ACTIVE" | "EXPIRED" | null
  planTitle?: string
}

type PagedResponse = {
  content: Client[]
  totalPages: number
  number: number
  totalElements: number
}

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: "bg-emerald-100 text-emerald-700",
  PENDING: "bg-amber-100 text-amber-700",
  EXPIRED: "bg-slate-100 text-slate-600",
}

export function ClientsCRM() {
  const [data, setData] = useState<PagedResponse | null>(null)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    api
      .get<PagedResponse>(`/coach/clients?page=${page}&size=10`)
      .then(({ data }) => setData(data))
      .catch((err) => setError(getApiError(err)))
      .finally(() => setIsLoading(false))
  }, [page])

  async function handleDelete(clientId: string, clientName: string) {
    if (!confirm(`Delete ${clientName}? This action cannot be undone.`)) return
    setDeletingId(clientId)
    try {
      await api.delete(`/coach/clients/${clientId}`)
      setData((prev) =>
        prev
          ? {
              ...prev,
              content: prev.content.filter((c) => c.id !== clientId),
              totalElements: prev.totalElements - 1,
            }
          : prev
      )
    } catch (err) {
      alert(getApiError(err))
    } finally {
      setDeletingId(null)
    }
  }

  // Client-side filter by name/email
  const filtered =
    data?.content.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    ) ?? []

  return (
    <div className="space-y-8">
      <PageHeader
        description="All clients registered under your coaching profile."
        eyebrow="Coach workspace"
        title="Clients"
      />

      {/* Search */}
      <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          className="w-full bg-transparent text-sm text-slate-950 outline-none"
          placeholder="Search by name or email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading && (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading clients…
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
          {/* Summary */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
            <Users className="h-5 w-5 text-slate-500" />
            <span className="text-sm text-slate-600">
              <strong className="text-slate-950">{data.totalElements}</strong> total clients
            </span>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Client</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700 hidden sm:table-cell">Email</th>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Plan Status</th>
                  <th className="px-6 py-4 text-right font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-slate-400">
                      No clients found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((client) => (
                    <tr key={client.id} className="transition hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-slate-950">{client.name}</p>
                        {client.planTitle && (
                          <p className="text-xs text-slate-400">{client.planTitle}</p>
                        )}
                      </td>
                      <td className="px-6 py-4 text-slate-600 hidden sm:table-cell">{client.email}</td>
                      <td className="px-6 py-4">
                        {client.planStatus ? (
                          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_COLORS[client.planStatus] ?? "bg-slate-100 text-slate-600"}`}>
                            {client.planStatus}
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400">No plan</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/dashboard/clients/${client.id}`}
                            className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
                          >
                            <Eye className="h-3.5 w-3.5" />
                            View
                          </Link>
                          <button
                            disabled={deletingId === client.id}
                            onClick={() => handleDelete(client.id, client.name)}
                            className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            {deletingId === client.id ? "…" : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
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
                  <ChevronLeft className="h-4 w-4" /> Previous
                </button>
                <button
                  disabled={page >= data.totalPages - 1}
                  onClick={() => setPage((p) => p + 1)}
                  className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-40"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
