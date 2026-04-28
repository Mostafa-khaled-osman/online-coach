import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import { useParams, Link } from "react-router-dom"
import { api, getApiError } from "../lib/api"
import {
  ArrowLeft, User, Dumbbell, Utensils, CreditCard,
  CheckCircle, XCircle, AlertCircle, Plus, Trash2, Upload
} from "lucide-react"

// ─── Types ─────────────────────────────────────────────────────────────────────

type ClientProfile = {
  id: string
  name: string
  email: string
  phone: string
  age: number
  gender: string
  planStatus?: "PENDING" | "ACTIVE" | "EXPIRED" | null
  planTitle?: string
  planExpiresAt?: string
}

type MealItem = { mealOrder: number; content: string }

type DietPlan = {
  id?: string
  title: string
  mealItems: MealItem[]
}

type Payment = {
  id: string
  planTitle: string
  status: "PENDING" | "APPROVED" | "REJECTED"
  createdAt: string
  screenshotUrl?: string
}

type Tab = "profile" | "diet" | "workout" | "payments"

// ─── Helpers ───────────────────────────────────────────────────────────────────

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: "bg-emerald-100 text-emerald-700",
  PENDING: "bg-amber-100 text-amber-700",
  EXPIRED: "bg-slate-100 text-slate-600",
  APPROVED: "bg-emerald-100 text-emerald-700",
  REJECTED: "bg-red-100 text-red-600",
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function ClientDetail() {
  const { id } = useParams<{ id: string }>()
  const [client, setClient] = useState<ClientProfile | null>(null)
  const [tab, setTab] = useState<Tab>("profile")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    api
      .get<ClientProfile>(`/coach/clients/${id}`)
      .then(({ data }) => setClient(data))
      .catch((err) => setError(getApiError(err)))
      .finally(() => setIsLoading(false))
  }, [id])

  if (isLoading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
      </div>
    )
  }

  if (error || !client) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
        <AlertCircle className="mx-auto mb-3 h-8 w-8" />
        {error ?? "Client not found."}
      </div>
    )
  }

  const tabs: { id: Tab; label: string; icon: ReactNode }[] = [
    { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    { id: "diet", label: "Diet Plan", icon: <Utensils className="h-4 w-4" /> },
    { id: "workout", label: "Workout Plan", icon: <Dumbbell className="h-4 w-4" /> },
    { id: "payments", label: "Payments", icon: <CreditCard className="h-4 w-4" /> },
  ]

  return (
    <div className="space-y-6">
      {/* Back + Title */}
      <div className="flex items-center gap-4">
        <Link
          to="/dashboard/clients"
          className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">{client.name}</h2>
          <p className="text-sm text-slate-500">{client.email}</p>
        </div>
        {client.planStatus && (
          <span className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold ${STATUS_COLORS[client.planStatus] ?? ""}`}>
            {client.planStatus}
          </span>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-slate-200">
        {tabs.map(({ id: tabId, label, icon }) => (
          <button
            key={tabId}
            onClick={() => setTab(tabId)}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition ${
              tab === tabId
                ? "border-slate-900 text-slate-950"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {tab === "profile" && <ProfileTab client={client} />}
        {tab === "diet" && <DietTab clientId={id!} />}
        {tab === "workout" && <WorkoutTab clientId={id!} />}
        {tab === "payments" && <PaymentsTab clientId={id!} />}
      </div>
    </div>
  )
}

// ─── Profile Tab ───────────────────────────────────────────────────────────────

function ProfileTab({ client }: { client: ClientProfile }) {
  const fields = [
    { label: "Email", value: client.email },
    { label: "Phone", value: client.phone },
    { label: "Age", value: client.age },
    { label: "Gender", value: client.gender },
    { label: "Current Plan", value: client.planTitle ?? "None" },
    { label: "Plan Expiry", value: client.planExpiresAt ? new Date(client.planExpiresAt).toLocaleDateString() : "—" },
  ]

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold text-slate-950">Client Information</h3>
      <dl className="grid gap-4 sm:grid-cols-2">
        {fields.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</dt>
            <dd className="mt-1 text-sm font-medium text-slate-950">{String(value)}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// ─── Diet Tab ──────────────────────────────────────────────────────────────────

function DietTab({ clientId }: { clientId: string }) {
  const [diet, setDiet] = useState<DietPlan>({ title: "", mealItems: [{ mealOrder: 1, content: "" }] })
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  function addMeal() {
    setDiet((d) => ({
      ...d,
      mealItems: [...d.mealItems, { mealOrder: d.mealItems.length + 1, content: "" }],
    }))
  }

  function removeMeal(index: number) {
    setDiet((d) => ({
      ...d,
      mealItems: d.mealItems
        .filter((_, i) => i !== index)
        .map((m, i) => ({ ...m, mealOrder: i + 1 })),
    }))
  }

  function updateMeal(index: number, value: string) {
    setDiet((d) => ({
      ...d,
      mealItems: d.mealItems.map((m, i) => (i === index ? { ...m, content: value } : m)),
    }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSaving(true)
    setMessage(null)
    try {
      await api.post(`/coach/clients/${clientId}/diet-plans`, diet)
      setMessage({ type: "success", text: "Diet plan saved successfully!" })
    } catch (err) {
      setMessage({ type: "error", text: getApiError(err) })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold text-slate-950">Assign Diet Plan</h3>

      {message && (
        <div className={`mb-4 flex items-center gap-3 rounded-xl p-4 text-sm ${
          message.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
        }`}>
          {message.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          {message.text}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block space-y-1.5 text-sm">
          <span className="font-medium text-slate-700">Plan Title</span>
          <input
            required value={diet.title}
            onChange={(e) => setDiet((d) => ({ ...d, title: e.target.value }))}
            placeholder="e.g. Fat Loss Diet"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </label>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700">Meals</span>
            <button type="button" onClick={addMeal}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100">
              <Plus className="h-3 w-3" /> Add meal
            </button>
          </div>

          {diet.mealItems.map((meal, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                {meal.mealOrder}
              </span>
              <input
                required value={meal.content}
                onChange={(e) => updateMeal(i, e.target.value)}
                placeholder={`Meal ${meal.mealOrder} — e.g. 3 Eggs + 100g Oats`}
                className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
              {diet.mealItems.length > 1 && (
                <button type="button" onClick={() => removeMeal(i)}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500">
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        <button type="submit" disabled={isSaving}
          className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-50">
          {isSaving && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />}
          {isSaving ? "Saving…" : "Save Diet Plan"}
        </button>
      </form>
    </div>
  )
}

// ─── Workout Tab ───────────────────────────────────────────────────────────────

function WorkoutTab({ clientId }: { clientId: string }) {
  const [generalNotes, setGeneralNotes] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSaving(true)
    setMessage(null)
    try {
      const formData = new FormData()
      formData.append("generalNotes", generalNotes)
      if (file) formData.append("file", file)

      await api.post(`/coach/clients/${clientId}/workout-plans`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setMessage({ type: "success", text: "Workout plan uploaded successfully!" })
    } catch (err) {
      setMessage({ type: "error", text: getApiError(err) })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-5 text-lg font-semibold text-slate-950">Assign Workout Plan</h3>

      {message && (
        <div className={`mb-4 flex items-center gap-3 rounded-xl p-4 text-sm ${
          message.type === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
        }`}>
          {message.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          {message.text}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block space-y-1.5 text-sm">
          <span className="font-medium text-slate-700">General Notes</span>
          <textarea
            value={generalNotes}
            onChange={(e) => setGeneralNotes(e.target.value)}
            placeholder="Rest between sets, focus points, hydration tips…"
            rows={4}
            className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </label>

        <label className="block space-y-1.5 text-sm">
          <span className="font-medium text-slate-700">Workout PDF / Image</span>
          <div className="flex items-center gap-4 rounded-xl border border-dashed border-slate-300 p-4">
            <Upload className="h-6 w-6 text-slate-400" />
            <div className="flex-1">
              <p className="text-sm text-slate-600">
                {file ? file.name : "Click to upload PDF or image"}
              </p>
              <p className="text-xs text-slate-400">PDF, JPG, PNG supported</p>
            </div>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
        </label>

        <button type="submit" disabled={isSaving}
          className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-50">
          {isSaving && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />}
          {isSaving ? "Uploading…" : "Upload Workout Plan"}
        </button>
      </form>
    </div>
  )
}

// ─── Payments Tab ──────────────────────────────────────────────────────────────

function PaymentsTab({ clientId }: { clientId: string }) {
  const [payments, setPayments] = useState<Payment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  useEffect(() => {
    api
      .get<Payment[]>(`/coach/clients/${clientId}/payments`)
      .then(({ data }) => setPayments(data))
      .catch((err) => setError(getApiError(err)))
      .finally(() => setIsLoading(false))
  }, [clientId])

  async function handleApprove(paymentId: string) {
    setActionLoading(paymentId)
    try {
      await api.put(`/coach/payments/${paymentId}/approve`)
      setPayments((prev) =>
        prev.map((p) => (p.id === paymentId ? { ...p, status: "APPROVED" } : p))
      )
    } catch (err) {
      alert(getApiError(err))
    } finally {
      setActionLoading(null)
    }
  }

  async function handleReject(paymentId: string) {
    const reason = prompt("Enter rejection reason:")
    if (!reason) return
    setActionLoading(paymentId)
    try {
      await api.put(`/coach/payments/${paymentId}/reject`, { reason })
      setPayments((prev) =>
        prev.map((p) => (p.id === paymentId ? { ...p, status: "REJECTED" } : p))
      )
    } catch (err) {
      alert(getApiError(err))
    } finally {
      setActionLoading(null)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
        Loading payments…
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-4">
        <h3 className="text-lg font-semibold text-slate-950">Payment History</h3>
      </div>

      {error && (
        <div className="m-4 flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      {payments.length === 0 ? (
        <p className="px-6 py-8 text-center text-sm text-slate-500">No payments found.</p>
      ) : (
        <div className="divide-y divide-slate-100">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center gap-4 px-6 py-4">
              <div className="flex-1">
                <p className="font-medium text-slate-950">{payment.planTitle}</p>
                <p className="text-xs text-slate-400">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </p>
              </div>

              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_COLORS[payment.status] ?? ""}`}>
                {payment.status}
              </span>

              {payment.status === "PENDING" && (
                <div className="flex gap-2">
                  <button
                    disabled={actionLoading === payment.id}
                    onClick={() => handleApprove(payment.id)}
                    className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-emerald-700 disabled:opacity-50"
                  >
                    <CheckCircle className="h-3.5 w-3.5" />
                    Approve
                  </button>
                  <button
                    disabled={actionLoading === payment.id}
                    onClick={() => handleReject(payment.id)}
                    className="flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
                  >
                    <XCircle className="h-3.5 w-3.5" />
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
