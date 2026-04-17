import { FormEvent } from "react"
import { LogIn, UserRound } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"

export function SignIn() {
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Sign in</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Use the real routes while auth is still frontend-only.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            This page now sends the main sign-in action into the coach dashboard and offers a direct athlete path
            alongside it, so the app keeps moving even before backend auth exists.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/athlete/dashboard">Go to athlete hub</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/pricing">See plans first</Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Coach access</CardTitle>
            <CardDescription>Temporary frontend-only sign-in for the rebuilt navigation flow.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="block space-y-2 text-sm">
                <span className="font-medium text-slate-700">Email</span>
                <input
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  defaultValue="coach@example.com"
                  type="email"
                />
              </label>

              <label className="block space-y-2 text-sm">
                <span className="font-medium text-slate-700">Password</span>
                <input
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  defaultValue="password"
                  type="password"
                />
              </label>

              <div className="flex flex-wrap gap-3">
                <Button type="submit">
                  <LogIn className="h-4 w-4" />
                  Enter coach dashboard
                </Button>
                <Button asChild type="button" variant="outline">
                  <Link to="/athlete/dashboard">
                    <UserRound className="h-4 w-4" />
                    Athlete shortcut
                  </Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
