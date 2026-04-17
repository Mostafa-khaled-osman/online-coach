import { ArrowRight, CalendarDays, Dumbbell, HeartPulse, MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const stats = [
  { label: "Training streak", value: "6 days" },
  { label: "Meals logged", value: "18 this week" },
  { label: "Check-ins", value: "1 due today" },
]

const quickActions = [
  { title: "Workout log", to: "/athlete/workout-log", icon: Dumbbell, description: "Track today's lifts and notes." },
  { title: "Meal planner", to: "/athlete/meal-planner", icon: HeartPulse, description: "Review meals and daily nutrition." },
  { title: "Chat", to: "/athlete/chat", icon: MessageSquare, description: "Message your coach without leaving the hub." },
]

export function SanctuaryDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/athlete/checkin">Weekly check-in</Link>
            </Button>
            <Button asChild>
              <Link to="/athlete/workout-log">Start workout</Link>
            </Button>
          </>
        }
        description="The athlete home base now links cleanly into workouts, meals, progress, supplements, and check-ins."
        eyebrow="Athlete hub"
        title="Dashboard"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Today's focus</CardTitle>
            <CardDescription>Use the shared routes below to move through your day without dead ends.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Primary session</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">Upper body strength</p>
              <p className="mt-2 text-sm text-slate-600">Log sets, then jump straight into meal planning and recovery notes.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Next milestone</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">Weekly check-in due tonight</p>
              <p className="mt-2 text-sm text-slate-600">Share recovery, bodyweight, and progress notes in one place.</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/athlete/progress">
                Open progress view
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick links</CardTitle>
            <CardDescription>The main athlete routes now belong to one consistent navigation system.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.to}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-slate-300"
                  to={item.to}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </Link>
              )
            })}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Week at a glance</CardTitle>
          <CardDescription>Use schedule, nutrition, and coach chat together instead of as separate mockups.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <CalendarDays className="h-4 w-4" />
              Monday
            </div>
            <p className="mt-2 font-semibold text-slate-950">Workout log + meals</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <CalendarDays className="h-4 w-4" />
              Wednesday
            </div>
            <p className="mt-2 font-semibold text-slate-950">Progress review</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <CalendarDays className="h-4 w-4" />
              Sunday
            </div>
            <p className="mt-2 font-semibold text-slate-950">Weekly check-in</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
