import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const steps = [
  {
    title: "Physical progress",
    description: "Note visual changes, soreness, and how the training week felt overall.",
    fields: ["Front view photo", "Side view photo", "General notes"],
  },
  {
    title: "Subjective markers",
    description: "Capture sleep, fatigue, stress, and confidence in the current training block.",
    fields: ["Sleep quality", "Fatigue", "Stress level"],
  },
  {
    title: "Current metrics",
    description: "Anchor the check-in with simple measurable data before the next week starts.",
    fields: ["Bodyweight", "Steps", "Recovery score"],
  },
]

export function WeeklyCheckin() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="space-y-8">
        <PageHeader
          description="The check-in route now completes inside the same athlete flow."
          eyebrow="Athlete hub"
          title="Weekly Check-In"
        />

        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <CardTitle>Check-in submitted</CardTitle>
            <CardDescription>You can now move directly back into your dashboard or progress view.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/athlete/dashboard">Back to dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/athlete/progress">Open progress</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentStep = steps[step]

  return (
    <div className="space-y-8">
      <PageHeader
        description="A lighter multi-step flow that keeps the athlete inside the shared route structure."
        eyebrow="Athlete hub"
        title="Weekly Check-In"
      />

      <Card>
        <CardHeader>
          <CardTitle>{currentStep.title}</CardTitle>
          <CardDescription>{currentStep.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3 md:grid-cols-3">
            {steps.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border px-4 py-3 text-sm ${index === step ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-600"}`}
              >
                Step {index + 1}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {currentStep.fields.map((field) => (
              <label key={field} className="block space-y-2 text-sm">
                <span className="font-medium text-slate-700">{field}</span>
                <input className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100" />
              </label>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setStep((value) => Math.max(0, value - 1))}
              type="button"
              variant="outline"
            >
              Back
            </Button>
            {step < steps.length - 1 ? (
              <Button onClick={() => setStep((value) => value + 1)} type="button">
                Next step
              </Button>
            ) : (
              <Button onClick={() => setSubmitted(true)} type="button">
                Submit check-in
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
