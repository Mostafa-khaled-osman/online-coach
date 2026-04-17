import { ArrowRight, BarChart3, CalendarDays, MessageSquare, ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"

const highlights = [
  {
    title: "Coach dashboard",
    description: "Track clients, schedule sessions, and stay on top of messages from one place.",
    icon: BarChart3,
    to: "/dashboard",
  },
  {
    title: "Athlete hub",
    description: "Give athletes one clean place for workouts, nutrition, progress, and check-ins.",
    icon: ShieldCheck,
    to: "/athlete/dashboard",
  },
  {
    title: "Weekly routine",
    description: "Link sessions, workouts, and check-ins so the full week feels connected.",
    icon: CalendarDays,
    to: "/athlete/checkin",
  },
]

const quickLinks = [
  { label: "Read the approach", to: "/about" },
  { label: "See the plans", to: "/pricing" },
  { label: "Explore articles", to: "/articles" },
  { label: "Open stories", to: "/success-stories" },
]

export function SymmetryAthletic() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Online Coach</p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              One navigation system for coaches, athletes, and the pages between them.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              This first pass turns the project into a connected frontend instead of a stack of separate mockups.
              Start with the main flows now, then expand the rest safely.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/pricing">
                Start with pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/signin">Open sign in</Link>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <Card className="bg-slate-950 text-white">
          <CardHeader>
            <CardTitle className="text-white">Core flows now connected</CardTitle>
            <CardDescription className="text-slate-300">
              The shared shell gives the project a stable base before we refine the remaining feature screens.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Main public pages</p>
                <p className="mt-2 text-2xl font-semibold">6</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Athlete routes</p>
                <p className="mt-2 text-2xl font-semibold">8</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Coach core routes</p>
                <p className="mt-2 text-2xl font-semibold">5</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Floating dev menu</p>
                <p className="mt-2 text-2xl font-semibold">Removed</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Next focus</p>
              <p className="mt-2 text-base text-white">
                Move the remaining legacy dashboard mockups onto the same shared components and data patterns.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon

          return (
            <Card key={item.title}>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline">
                  <Link to={item.to}>Open page</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Messaging and follow-up</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Ready to explore the connected workspace?
            </h2>
            <p className="max-w-2xl text-slate-600">
              Jump into the coach inbox or the athlete portal and move through the app with the real shared links.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/dashboard/messages">
                Coach messages
                <MessageSquare className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/athlete/dashboard">Athlete dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
