import { useEffect, useState } from "react"
import { Utensils, AlertCircle, FileText } from "lucide-react"
import { api, getApiError } from "../lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

type MealItem = {
  mealOrder: number
  content: string
}

type DietPlan = {
  title: string
  mealItems: MealItem[]
}

export function MealPlanner() {
  const [diet, setDiet] = useState<DietPlan | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api
      .get<DietPlan>("/client/my-diet")
      .then(({ data }) => setDiet(data))
      .catch((err) => {
        if (err?.response?.status === 404) {
          // No diet assigned yet, not a critical error
        } else {
          setError(getApiError(err))
        }
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="space-y-8">
      <PageHeader
        description="Your personalized nutrition protocol, assigned by your coach."
        eyebrow="Athlete hub"
        title="Meal Plan"
      />

      {isLoading ? (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading your diet plan…
        </div>
      ) : error ? (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      ) : !diet ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <Utensils className="mx-auto mb-4 h-8 w-8 text-slate-300" />
          <h3 className="text-lg font-medium text-slate-950">No diet plan assigned</h3>
          <p className="mt-2 text-sm text-slate-500">
            Your coach hasn't assigned a diet plan yet. Check back later or send them a message.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Utensils className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>{diet.title}</CardTitle>
                  <CardDescription>Daily meals for this cycle.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {diet.mealItems.length === 0 ? (
                <p className="text-sm text-slate-500">No meals found in this plan.</p>
              ) : (
                diet.mealItems
                  .sort((a, b) => a.mealOrder - b.mealOrder)
                  .map((meal) => (
                    <div key={meal.mealOrder} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Meal {meal.mealOrder}
                      </p>
                      <div className="whitespace-pre-wrap text-sm text-slate-950">
                        {meal.content}
                      </div>
                    </div>
                  ))
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <CardTitle>Coach Notes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Stick to the prescribed meals as closely as possible. 
                  Remember to hydrate well throughout the day and log your weight every morning to track progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
