import { Mail, Plus, Search, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const clients = [
  { name: "Sarah Jenkins", goal: "Strength block", status: "On track", nextStep: "Reply in messages" },
  { name: "Michael Chen", goal: "Return from injury", status: "Needs review", nextStep: "Check schedule" },
  { name: "Emma Davis", goal: "Nutrition reset", status: "Waiting on check-in", nextStep: "Follow up" },
  { name: "James Wilson", goal: "Hypertrophy phase", status: "Ready for plan update", nextStep: "Open dashboard" },
]

export function ClientsCRM() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/dashboard/messages">
                <Mail className="h-4 w-4" />
                Message clients
              </Link>
            </Button>
            <Button>
              <Plus className="h-4 w-4" />
              Add client
            </Button>
          </>
        }
        description="A cleaner client list that links into the rebuilt schedule and messages flows."
        eyebrow="Coach workspace"
        title="Clients"
      />

      <Card>
        <CardHeader>
          <CardTitle>Search and filter</CardTitle>
          <CardDescription>Static for now, but the page no longer lives as an isolated full-screen mockup.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input className="w-full bg-transparent text-sm text-slate-950 outline-none" placeholder="Search by name or goal" />
          </div>
          <select className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none">
            <option>All goals</option>
            <option>Strength</option>
            <option>Recovery</option>
            <option>Nutrition</option>
          </select>
          <select className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 outline-none">
            <option>All statuses</option>
            <option>On track</option>
            <option>Needs review</option>
          </select>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <CardHeader>
            <CardTitle>Active clients</CardTitle>
            <CardDescription>Main list for the current pass.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-slate-300"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-950">{client.name}</p>
                    <p className="text-sm text-slate-500">{client.goal}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
                      {client.status}
                    </span>
                    <Button asChild size="sm" variant="outline">
                      <Link to="/dashboard/messages">Open messages</Link>
                    </Button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{client.nextStep}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
              <Users className="h-5 w-5" />
            </div>
            <CardTitle>Client snapshot</CardTitle>
            <CardDescription>Quick context for the coach sidebar flow.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-slate-500">Active clients</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">24</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-slate-500">Need reply today</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">6</p>
            </div>
            <Button asChild className="w-full">
              <Link to="/dashboard/schedule">Go to schedule</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
