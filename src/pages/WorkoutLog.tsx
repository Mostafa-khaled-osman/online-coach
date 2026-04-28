import { useEffect, useState } from "react"
import { Dumbbell, AlertCircle, FileText, Download } from "lucide-react"
import { api, getApiError } from "../lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

type DailyWorkout = {
  dayNumber: number
  exercisesText: string
}

type WorkoutPlan = {
  generalNotes: string
  dailyWorkouts: DailyWorkout[]
  workoutFileUrl?: string
}

export function WorkoutLog() {
  const [workout, setWorkout] = useState<WorkoutPlan | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api
      .get<WorkoutPlan>("/client/my-workout")
      .then(({ data }) => setWorkout(data))
      .catch((err) => {
        if (err?.response?.status === 404) {
          // No workout assigned yet, not a critical error
        } else {
          setError(getApiError(err))
        }
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="space-y-8">
      <PageHeader
        description="Your training protocol, complete with exercises, sets, and coach notes."
        eyebrow="Athlete hub"
        title="Workout Plan"
      />

      {isLoading ? (
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
          Loading your workout plan…
        </div>
      ) : error ? (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      ) : !workout ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <Dumbbell className="mx-auto mb-4 h-8 w-8 text-slate-300" />
          <h3 className="text-lg font-medium text-slate-950">No workout plan assigned</h3>
          <p className="mt-2 text-sm text-slate-500">
            Your coach hasn't assigned a workout plan yet. Check back later.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>Daily Training Split</CardTitle>
                    <CardDescription>Your prescribed exercises for the week.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {workout.dailyWorkouts.length === 0 ? (
                  <p className="text-sm text-slate-500">No daily workouts defined.</p>
                ) : (
                  workout.dailyWorkouts
                    .sort((a, b) => a.dayNumber - b.dayNumber)
                    .map((day) => (
                      <div key={day.dayNumber} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Day {day.dayNumber}
                        </p>
                        <div className="whitespace-pre-wrap text-sm text-slate-950">
                          {day.exercisesText}
                        </div>
                      </div>
                    ))
                )}
              </CardContent>
            </Card>
          </div>

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
                <div className="whitespace-pre-wrap text-sm text-slate-600">
                  {workout.generalNotes || "No general notes provided."}
                </div>
              </CardContent>
            </Card>

            {workout.workoutFileUrl && (
              <Card>
                <CardHeader>
                  <CardTitle>Workout Attachments</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={workout.workoutFileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <Download className="h-4 w-4" />
                    Download Plan PDF / Image
                  </a>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
