import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const metrics = [
  { label: "Bodyweight", value: "88.4 kg", change: "-1.2 kg this month" },
  { label: "Strength score", value: "84%", change: "+6% since block start" },
  { label: "Recovery", value: "7.8 / 10", change: "Holding steady" },
]

export function ProgressTracking() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/athlete/checkin">Open weekly check-in</Link>
            </Button>
            <Button asChild>
              <Link to="/athlete/dashboard">Back to dashboard</Link>
            </Button>
          </>
        }
        description="Progress metrics now connect directly to check-ins, workouts, and the athlete dashboard."
        eyebrow="Athlete hub"
        title="Progress"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader>
              <CardDescription>{metric.label}</CardDescription>
              <CardTitle>{metric.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent milestones</CardTitle>
          <CardDescription>Keep the important wins tied to the rest of the athlete flow.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            "New 5-rep bench press personal best",
            "Seven consistent days of meal logging",
            "Recovery score improved after adding weekly check-ins",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
