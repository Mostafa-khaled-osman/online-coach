import { FormEvent, useState } from "react"
import { useSearchParams, useNavigate, Link } from "react-router-dom"
import { CreditCard, UploadCloud, ShieldCheck, AlertCircle } from "lucide-react"
import { api, getApiError } from "../lib/api"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

export function Checkout() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const planId = searchParams.get("planId") || ""
  
  const [formPlanId, setFormPlanId] = useState(planId)
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!formPlanId) {
      setError("Please provide a valid Plan ID.")
      return
    }
    if (!file) {
      setError("Please upload a payment screenshot.")
      return
    }

    setIsLoading(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append("planId", formPlanId)
      formData.append("screenshotFile", file)

      await api.post("/client/payments/upload-proof", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      
      // Navigate to dashboard where they'll see the PENDING status
      navigate("/athlete/dashboard")
    } catch (err) {
      setError(getApiError(err))
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader
        description="Upload your payment proof to activate your subscription."
        eyebrow="Athlete hub"
        title="Upload Payment"
      />

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
            <CardDescription>How to pay and activate your plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-sm text-slate-600">
              <p>1. Transfer the plan amount to your coach's designated bank account or payment link.</p>
              <p>2. Take a clear screenshot of the successful transaction.</p>
              <p>3. Enter the Plan ID you wish to purchase.</p>
              <p>4. Upload the screenshot here.</p>
              <p>5. Your coach will review the payment and activate your plan shortly.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <div className="flex items-center gap-2 font-medium text-slate-950">
                <ShieldCheck className="h-4 w-4 text-secondary-600" />
                Secure verification
              </div>
              <p className="mt-2">Your payment proof is encrypted and only visible to your assigned coach.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Submit Payment Proof</CardTitle>
            <CardDescription>Select your plan and upload the receipt.</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block space-y-2 text-sm">
                <span className="font-medium text-slate-700">Plan ID</span>
                <input
                  required
                  value={formPlanId}
                  onChange={(e) => setFormPlanId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  placeholder="e.g. 123e4567-e89b-12d3-a456-426614174000"
                />
              </label>

              <label className="block space-y-2 text-sm">
                <span className="font-medium text-slate-700">Payment Screenshot</span>
                <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 transition hover:border-primary-400 hover:bg-slate-100">
                  <UploadCloud className="mb-3 h-8 w-8 text-slate-400" />
                  <p className="text-center text-sm font-medium text-slate-700">
                    {file ? file.name : "Click to browse or drag image here"}
                  </p>
                  <p className="mt-1 text-center text-xs text-slate-500">
                    Supports JPG, PNG (Max 5MB)
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                    className="absolute inset-0 cursor-pointer opacity-0"
                  />
                </div>
              </label>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-50"
                >
                  <CreditCard className="h-4 w-4" />
                  {isLoading ? "Submitting..." : "Submit for Approval"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
