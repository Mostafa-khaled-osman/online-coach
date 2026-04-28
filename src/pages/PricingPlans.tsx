import { useEffect, useState, type FormEvent } from "react"
import { api, getApiError } from "../lib/api"
import { PageHeader } from "../components/ui/PageHeader"
import { Button } from "../components/ui/Button"
import { AlertCircle, Clock, Plus, Trash2, Edit2, X } from "lucide-react"

type Plan = {
  id: string
  title: string
  description: string
  price: number
  durationDays: number
}

export function PricingPlans() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({ title: "", description: "", price: "", durationDays: "" })
  const [formLoading, setFormLoading] = useState(false)

  useEffect(() => {
    fetchPlans()
  }, [])

  async function fetchPlans() {
    setIsLoading(true)
    try {
      const { data } = await api.get<Plan[]>("/coach/plans")
      setPlans(data)
    } catch (err) {
      setError(getApiError(err))
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpenNew() {
    setEditingId(null)
    setForm({ title: "", description: "", price: "", durationDays: "30" })
    setIsModalOpen(true)
  }

  function handleOpenEdit(plan: Plan) {
    setEditingId(plan.id)
    setForm({
      title: plan.title,
      description: plan.description,
      price: plan.price.toString(),
      durationDays: plan.durationDays.toString(),
    })
    setIsModalOpen(true)
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this plan? Active clients won't be affected, but no new clients can buy it.")) return
    try {
      await api.delete(`/coach/plans/${id}`)
      setPlans((prev) => prev.filter((p) => p.id !== id))
    } catch (err) {
      alert(getApiError(err))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setFormLoading(true)
    try {
      const payload = {
        title: form.title,
        description: form.description,
        price: Number(form.price),
        durationDays: Number(form.durationDays),
      }

      if (editingId) {
        const { data } = await api.put<Plan>(`/coach/plans/${editingId}`, payload)
        setPlans((prev) => prev.map((p) => (p.id === editingId ? data : p)))
      } else {
        const { data } = await api.post<Plan>("/coach/plans", payload)
        setPlans((prev) => [...prev, data])
      }
      setIsModalOpen(false)
    } catch (err) {
      alert(getApiError(err))
    } finally {
      setFormLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <Button onClick={handleOpenNew}>
            <Plus className="h-4 w-4" />
            Create plan
          </Button>
        }
        description="Manage the subscription plans you offer to new clients."
        eyebrow="Coach workspace"
        title="Pricing Plans"
      />

      {isLoading && (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading plans…
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {!isLoading && !error && plans.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <h3 className="text-lg font-medium text-slate-950">No plans created yet</h3>
          <p className="mt-2 text-sm text-slate-500">Create your first subscription plan to start accepting clients.</p>
          <Button onClick={handleOpenNew} className="mt-6">
            <Plus className="h-4 w-4" />
            Create your first plan
          </Button>
        </div>
      )}

      {!isLoading && !error && plans.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-950">{plan.title}</h3>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(plan)}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {plan.description && (
                <p className="mb-4 flex-1 text-sm text-slate-600">{plan.description}</p>
              )}

              <div className="mt-auto space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />
                  <span>{plan.durationDays} days</span>
                </div>
                <div className="text-3xl font-bold text-slate-950">
                  ${plan.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/20 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h3 className="text-lg font-semibold text-slate-950">
                {editingId ? "Edit Plan" : "New Plan"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <label className="block space-y-1.5 text-sm">
                  <span className="font-medium text-slate-700">Plan Title</span>
                  <input
                    required
                    value={form.title}
                    onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2 text-slate-950 outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  />
                </label>
                <label className="block space-y-1.5 text-sm">
                  <span className="font-medium text-slate-700">Description</span>
                  <textarea
                    rows={3}
                    value={form.description}
                    onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                    className="w-full resize-none rounded-xl border border-slate-300 px-4 py-2 text-slate-950 outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1.5 text-sm">
                    <span className="font-medium text-slate-700">Price ($)</span>
                    <input
                      required
                      type="number"
                      step="0.01"
                      min="0"
                      value={form.price}
                      onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
                      className="w-full rounded-xl border border-slate-300 px-4 py-2 text-slate-950 outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                  </label>
                  <label className="block space-y-1.5 text-sm">
                    <span className="font-medium text-slate-700">Duration (Days)</span>
                    <input
                      required
                      type="number"
                      min="1"
                      value={form.durationDays}
                      onChange={(e) => setForm((prev) => ({ ...prev, durationDays: e.target.value }))}
                      className="w-full rounded-xl border border-slate-300 px-4 py-2 text-slate-950 outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
                >
                  {formLoading ? "Saving..." : "Save Plan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
