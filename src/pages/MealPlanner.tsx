import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const meals = [
  { name: "Breakfast", time: "07:30", summary: "Eggs, avocado, sourdough", protein: "32g" },
  { name: "Lunch", time: "12:30", summary: "Salmon, quinoa, greens", protein: "45g" },
  { name: "Dinner", time: "19:00", summary: "Mediterranean bowl", protein: "36g" },
]

export function MealPlanner() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/athlete/nutrition-tracker">Open nutrition tracker</Link>
            </Button>
            <Button>Save day plan</Button>
          </>
        }
        description="Meals now live inside the same athlete navigation instead of being a standalone side-app."
        eyebrow="Athlete hub"
        title="Meal Planner"
      />

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardHeader>
            <CardTitle>Today's meals</CardTitle>
            <CardDescription>Quick plan for the current training day.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {meals.map((meal) => (
              <div key={meal.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-950">{meal.name}</p>
                    <p className="text-sm text-slate-500">{meal.summary}</p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-600">{meal.time}</span>
                    <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-600">{meal.protein}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Grocery focus</CardTitle>
              <CardDescription>Keep the next shopping pass aligned with the current plan.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              {["Eggs", "Greek yogurt", "Salmon", "Quinoa", "Leafy greens"].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next step</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/athlete/supplement-guide">Review supplements</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
