import { CheckCircle2, Timer } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const exercises = [
  { name: "Bench press", sets: "3 / 4", weight: "85 kg", reps: "8", note: "+2.5 kg vs last week" },
  { name: "Overhead press", sets: "1 / 3", weight: "50 kg", reps: "10", note: "Steady" },
  { name: "Bent over row", sets: "0 / 4", weight: "-", reps: "-", note: "Up next" },
]

export function WorkoutLog() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/athlete/meal-planner">Next: meals</Link>
            </Button>
            <Button>Complete workout</Button>
          </>
        }
        description="The workout page now sits inside the shared athlete layout and links directly to the next useful steps."
        eyebrow="Athlete hub"
        title="Workout Log"
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Today's session</CardTitle>
            <CardDescription>Track the current block without leaving the athlete route tree.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {exercises.map((exercise) => (
              <div key={exercise.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-950">{exercise.name}</p>
                    <p className="text-sm text-slate-500">{exercise.note}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm sm:min-w-64">
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-slate-500">Sets</p>
                      <p className="mt-1 font-semibold text-slate-950">{exercise.sets}</p>
                    </div>
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-slate-500">Weight</p>
                      <p className="mt-1 font-semibold text-slate-950">{exercise.weight}</p>
                    </div>
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-slate-500">Reps</p>
                      <p className="mt-1 font-semibold text-slate-950">{exercise.reps}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Session summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <Timer className="h-4 w-4 text-primary-600" />
                <span>42 minutes elapsed</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <CheckCircle2 className="h-4 w-4 text-secondary-600" />
                <span>Intensity feels on track for the current block.</span>
              </div>
              <Button asChild className="w-full">
                <Link to="/athlete/progress">Review progress</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
