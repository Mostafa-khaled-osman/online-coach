import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"

const notes = [
  {
    title: "Why shared layouts come before feature polish",
    description: "A fast overview of why routing, layouts, and reusable sections were the first fixes in this pass.",
    to: "/about",
    tag: "Architecture",
  },
  {
    title: "What makes a coach dashboard usable",
    description: "The first pages to stabilize are clients, messages, schedule, and settings because they anchor the workflow.",
    to: "/dashboard",
    tag: "Coach",
  },
  {
    title: "How athlete pages should connect together",
    description: "Workouts, meals, supplements, progress, and check-ins should feel like one journey instead of separate mockups.",
    to: "/athlete/dashboard",
    tag: "Athlete",
  },
]

export function Articles() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Project notes</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Short reads about the rebuild</h1>
        <p className="max-w-3xl text-lg text-slate-600">
          These article cards now point to real pages in the app so people can move somewhere meaningful instead of
          landing on placeholder anchors.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {notes.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{item.tag}</p>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link to={item.to}>
                  Open page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
