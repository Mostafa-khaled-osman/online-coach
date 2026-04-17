import { Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"

const plans = [
  {
    name: "Starter",
    price: "$79",
    cadence: "per month",
    description: "A clean starting point for solo coaches building their client flow.",
    features: ["Shared dashboard", "Client list", "Message center"],
  },
  {
    name: "Growth",
    price: "$149",
    cadence: "per month",
    description: "The best fit when you need schedules, athlete tracking, and a connected app shell.",
    features: ["Everything in Starter", "Athlete portal", "Weekly check-ins"],
  },
  {
    name: "Studio",
    price: "$249",
    cadence: "per month",
    description: "For teams that want role-based navigation and room to expand into the rest of the product.",
    features: ["Everything in Growth", "Team workflows", "Priority setup"],
  },
]

export function PricingPlans() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Pricing</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Pick the right place to start the product cleanup
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          The pricing page now leads into a real checkout route instead of acting like a dead-end marketing mockup.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={plan.name} className={index === 1 ? "border-primary-200 shadow-md" : undefined}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-4xl font-semibold tracking-tight text-slate-950">{plan.price}</p>
                <p className="text-sm text-slate-500">{plan.cadence}</p>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 text-secondary-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/checkout">Continue to checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}
