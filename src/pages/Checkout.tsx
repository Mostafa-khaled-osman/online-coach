import { CreditCard, ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"

const lineItems = [
  { label: "Growth plan", value: "$149.00" },
  { label: "Setup support", value: "$0.00" },
  { label: "Tax", value: "$0.00" },
]

export function Checkout() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Order summary</CardTitle>
            <CardDescription>Checkout now leads somewhere real, even before payments are wired up.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {lineItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{item.label}</span>
                <span className="font-medium text-slate-950">{item.value}</span>
              </div>
            ))}

            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="font-semibold text-slate-950">Total today</span>
              <span className="text-lg font-semibold text-slate-950">$149.00</span>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Includes the rebuilt public shell, shared dashboard navigation, and the connected athlete flow.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing details</CardTitle>
            <CardDescription>Static form for now, but the navigation and CTA flow are now correct.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-medium text-slate-700">First name</span>
                <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-medium text-slate-700">Last name</span>
                <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
              </label>
            </div>

            <label className="block space-y-2 text-sm">
              <span className="font-medium text-slate-700">Email</span>
              <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
            </label>

            <label className="block space-y-2 text-sm">
              <span className="font-medium text-slate-700">Card</span>
              <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3">
                <CreditCard className="h-4 w-4 text-slate-400" />
                <input className="w-full bg-transparent text-slate-950 outline-none" placeholder="4242 4242 4242 4242" />
              </div>
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-medium text-slate-700">Expiry</span>
                <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100" placeholder="MM / YY" />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-medium text-slate-700">CVC</span>
                <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100" placeholder="123" />
              </label>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <div className="flex items-center gap-2 font-medium text-slate-950">
                <ShieldCheck className="h-4 w-4 text-secondary-600" />
                Secure checkout placeholder
              </div>
              <p className="mt-2">Payments are not wired up in this pass, so the CTA now routes into sign-in instead of failing silently.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/signin">Continue to sign in</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/pricing">Back to pricing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
