import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"

const principles = [
  {
    title: "Shared structure first",
    description: "Navigation, layouts, and reusable pieces now come before page-specific styling.",
  },
  {
    title: "Coach and athlete clarity",
    description: "Each role gets the right set of links instead of one giant developer-only menu.",
  },
  {
    title: "Frontend without fake backend work",
    description: "This pass focuses on page flow and UI composition without introducing API work.",
  },
]

export function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">About the rebuild</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Turning isolated mockups into one usable app shell.
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            The original pages had strong visual ideas, but most of them were self-contained screens with placeholder
            links. This pass starts fixing the foundations so people can actually move through the app.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/pricing">See the product plans</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/articles">Read product notes</Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What changed first</CardTitle>
            <CardDescription>The safest order is structure, navigation, and then page-by-page cleanup.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Routing</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">Nested layouts now drive the main flows.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Navigation</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                Public, coach, and athlete routes each get their own focused links.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Components</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                Shared navbar, footer, sidebar, card, and button components now exist.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {principles.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  )
}
