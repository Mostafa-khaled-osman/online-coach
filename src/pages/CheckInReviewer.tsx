import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api, getApiError } from "../lib/api"
import { PageHeader } from "../components/ui/PageHeader"
import { Card, CardContent } from "../components/ui/Card"
import { AlertCircle, CheckCircle, XCircle, Clock, Eye, Image as ImageIcon } from "lucide-react"

type Client = {
  id: string
  name: string
  email: string
  planStatus?: "PENDING" | "ACTIVE" | "EXPIRED" | null
  planTitle?: string
}

type PagedResponse = {
  content: Client[]
  totalPages: number
  number: number
  totalElements: number
}

type Payment = {
  id: string
  planTitle: string
  status: "PENDING" | "APPROVED" | "REJECTED"
  createdAt: string
  screenshotUrl?: string
}

export function CheckInReviewer() {
  const [clients, setClients] = useState<Client[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Track the payments being viewed/loaded for each client
  const [payments, setPayments] = useState<Record<string, Payment[]>>({})
  const [loadingPayments, setLoadingPayments] = useState<Record<string, boolean>>({})

  // Track action states
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [viewingProof, setViewingProof] = useState<string | null>(null)

  useEffect(() => {
    fetchClients()
  }, [])

  async function fetchClients() {
    setIsLoading(true)
    try {
      // Fetch up to 100 clients to find pending ones (simplification for this step)
      const { data } = await api.get<PagedResponse>(`/coach/clients?page=0&size=100`)
      const pendingClients = data.content.filter((c) => c.planStatus === "PENDING")
      setClients(pendingClients)

      // Fetch payments for each pending client
      pendingClients.forEach((client) => {
        fetchPaymentsForClient(client.id)
      })
    } catch (err) {
      setError(getApiError(err))
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchPaymentsForClient(clientId: string) {
    setLoadingPayments((prev) => ({ ...prev, [clientId]: true }))
    try {
      const { data } = await api.get<Payment[]>(`/coach/clients/${clientId}/payments`)
      setPayments((prev) => ({ ...prev, [clientId]: data.filter(p => p.status === "PENDING") }))
    } catch (err) {
      console.error("Failed to fetch payments for client", clientId, err)
    } finally {
      setLoadingPayments((prev) => ({ ...prev, [clientId]: false }))
    }
  }

  async function handleApprove(paymentId: string, clientId: string) {
    setActionLoading(paymentId)
    try {
      await api.put(`/coach/payments/${paymentId}/approve`)
      // Remove this payment from the list
      setPayments((prev) => ({
        ...prev,
        [clientId]: prev[clientId].filter(p => p.id !== paymentId)
      }))
      // Check if client has no more pending payments
      setClients((prev) => {
        const remainingPayments = payments[clientId]?.filter(p => p.id !== paymentId) || []
        if (remainingPayments.length === 0) {
          return prev.filter(c => c.id !== clientId)
        }
        return prev
      })
    } catch (err) {
      alert(getApiError(err))
    } finally {
      setActionLoading(null)
    }
  }

  async function handleReject(paymentId: string, clientId: string) {
    const reason = prompt("Enter rejection reason:")
    if (!reason) return
    setActionLoading(paymentId)
    try {
      await api.put(`/coach/payments/${paymentId}/reject`, { reason })
      setPayments((prev) => ({
        ...prev,
        [clientId]: prev[clientId].filter(p => p.id !== paymentId)
      }))
      setClients((prev) => {
        const remainingPayments = payments[clientId]?.filter(p => p.id !== paymentId) || []
        if (remainingPayments.length === 0) {
          return prev.filter(c => c.id !== clientId)
        }
        return prev
      })
    } catch (err) {
      alert(getApiError(err))
    } finally {
      setActionLoading(null)
    }
  }

  async function handleViewProof(paymentId: string) {
    setActionLoading(paymentId)
    try {
      const { data } = await api.post<{ url: string }>(`/coach/payments/${paymentId}/screenshot`)
      if (data.url) {
        setViewingProof(data.url)
      } else {
        alert("No proof image URL returned.")
      }
    } catch (err) {
      alert(getApiError(err))
    } finally {
      setActionLoading(null)
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader
        description="Review pending client payments and approve them to activate their plans."
        eyebrow="Coach workspace"
        title="Payment Review"
      />

      {isLoading && (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading pending payments...
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {!isLoading && !error && clients.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-emerald-500" />
          <h3 className="text-lg font-medium text-slate-950">All caught up!</h3>
          <p className="mt-2 text-sm text-slate-500">There are no pending payments to review right now.</p>
        </div>
      )}

      {!isLoading && !error && clients.map((client) => {
        const clientPayments = payments[client.id] || []
        const isClientLoading = loadingPayments[client.id]

        if (!isClientLoading && clientPayments.length === 0) {
          return null; // Skip if loaded but no pending payments
        }

        return (
          <Card key={client.id} className="overflow-hidden">
            <div className="border-b border-slate-100 bg-slate-50 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-slate-950">{client.name}</h3>
                <p className="text-sm text-slate-500">{client.email}</p>
              </div>
              <Link
                to={`/dashboard/clients/${client.id}`}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
              >
                <Eye className="h-3.5 w-3.5" />
                View Client
              </Link>
            </div>
            <CardContent className="p-0">
              {isClientLoading ? (
                <div className="p-6 text-sm text-slate-500 flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
                  Loading payment details...
                </div>
              ) : (
                <div className="divide-y divide-slate-100">
                  {clientPayments.map((payment) => (
                    <div key={payment.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-500" />
                          <p className="font-medium text-slate-950">{payment.planTitle}</p>
                        </div>
                        <p className="mt-1 text-xs text-slate-500">
                          Submitted on {new Date(payment.createdAt).toLocaleDateString()} at {new Date(payment.createdAt).toLocaleTimeString()}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          disabled={actionLoading === payment.id}
                          onClick={() => handleViewProof(payment.id)}
                          className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                        >
                          <ImageIcon className="h-4 w-4 text-slate-400" />
                          View Proof
                        </button>
                        <button
                          disabled={actionLoading === payment.id}
                          onClick={() => handleApprove(payment.id, client.id)}
                          className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:opacity-50"
                        >
                          <CheckCircle className="h-4 w-4" />
                          Approve
                        </button>
                        <button
                          disabled={actionLoading === payment.id}
                          onClick={() => handleReject(payment.id, client.id)}
                          className="flex items-center gap-1.5 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
                        >
                          <XCircle className="h-4 w-4" />
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}

      {/* Proof Viewer Modal */}
      {viewingProof && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" onClick={() => setViewingProof(null)}>
          <div className="relative max-h-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h3 className="font-semibold text-slate-950">Payment Proof</h3>
              <button
                onClick={() => setViewingProof(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-auto p-4 flex justify-center bg-slate-50" style={{ maxHeight: '80vh' }}>
              <img src={viewingProof} alt="Payment Proof" className="max-w-full h-auto object-contain rounded-lg shadow-sm" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
