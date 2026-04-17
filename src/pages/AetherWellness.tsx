import { Globe2, HeartPulse, Languages, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"

const pillars = [
  {
    title: "Recovery-first coaching",
    description: "A softer alternate landing page for the same connected product foundation.",
    icon: HeartPulse,
  },
  {
    title: "Bilingual-ready messaging",
    description: "The navigation and layouts are being simplified so multilingual content has room to grow.",
    icon: Languages,
  },
  {
    title: "Global access",
    description: "The same shared shell can support coach and athlete journeys across different markets.",
    icon: Globe2,
  },
]

export function AetherWellness() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Aether Wellness</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            An alternate landing page built on the same shared components.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            This route stays useful as a second public entry point, but now it lives inside the same navigation and
            footer system as the rest of the site.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/pricing">Compare plans</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/athlete/dashboard">Open athlete hub</Link>
            </Button>
          </div>
        </div>

        <Card className="border-primary-100 bg-primary-50/50">
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <CardTitle>Why keep this route</CardTitle>
            <CardDescription>
              It gives the project a second brand voice without duplicating the entire app shell again.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <p>Use it for wellness-focused positioning, multilingual campaigns, or alternate acquisition flows.</p>
            <p>Under the hood it still points into the same pricing, sign-in, and athlete pages as the main site.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = pillar.icon

          return (
            <Card key={pillar.title}>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </section>
    </div>
  )
}
