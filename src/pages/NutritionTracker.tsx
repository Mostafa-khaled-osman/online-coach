import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const macros = [
  { label: "Protein", value: "142g / 160g", progress: "89%" },
  { label: "Carbs", value: "210g / 250g", progress: "84%" },
  { label: "Fats", value: "58g / 75g", progress: "77%" },
]

export function NutritionTracker() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/athlete/meal-planner">Back to meals</Link>
            </Button>
            <Button>Log meal</Button>
          </>
        }
        description="Macros, habits, and food logging are now connected to the same athlete shell."
        eyebrow="Athlete hub"
        title="Nutrition Tracker"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {macros.map((macro) => (
          <Card key={macro.label}>
            <CardHeader>
              <CardDescription>{macro.label}</CardDescription>
              <CardTitle>{macro.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-2 rounded-full bg-primary-600" style={{ width: macro.progress }} />
              </div>
              <p className="mt-2 text-sm text-slate-500">{macro.progress} of target</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Habit notes</CardTitle>
          <CardDescription>Keep the daily rhythm simple and visible.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {[
            "Hydration on track",
            "Protein timing consistent",
            "Late-night snacking reduced",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
