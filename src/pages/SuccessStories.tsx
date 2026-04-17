import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"

const stories = [
  {
    name: "Julian",
    outcome: "Finally moved from scattered notes to a repeatable coaching workflow.",
  },
  {
    name: "Maya",
    outcome: "Could move between workout, nutrition, and check-in pages without getting lost.",
  },
  {
    name: "David",
    outcome: "Used the athlete hub as a single home base instead of juggling unrelated pages.",
  },
]

export function SuccessStories() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Success stories</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          What a connected frontend feels like for real users
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          These stories are still demo content, but the routes and calls to action now lead into working page-to-page
          flows across the app.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {stories.map((story) => (
          <Card key={story.name}>
            <CardHeader>
              <CardTitle>{story.name}</CardTitle>
              <CardDescription>Early product walkthrough</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">{story.outcome}</p>
              <Button asChild variant="outline">
                <Link to="/pricing">See the plan behind it</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
