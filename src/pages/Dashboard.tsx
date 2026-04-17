import { CalendarDays, DollarSign, MessageSquare, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const stats = [
  { label: "Active clients", value: "24", note: "+2 this month", icon: Users },
  { label: "Sessions today", value: "5", note: "2 still upcoming", icon: CalendarDays },
  { label: "Unread messages", value: "8", note: "6 need a reply", icon: MessageSquare },
  { label: "Revenue", value: "$4,200", note: "+8% this month", icon: DollarSign },
]

export function Dashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={
          <>
            <Button asChild variant="outline">
              <Link to="/dashboard/schedule">View schedule</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard/clients">Open clients</Link>
            </Button>
          </>
        }
        description="The coach dashboard is now part of the rebuilt shared shell and links directly into the core workflows."
        eyebrow="Coach workspace"
        title="Dashboard"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <Card key={stat.label}>
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <CardDescription>{stat.label}</CardDescription>
                    <CardTitle className="mt-2 text-3xl">{stat.value}</CardTitle>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">{stat.note}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardHeader>
            <CardTitle>Priority tasks</CardTitle>
            <CardDescription>Use the rebuilt main routes to move from one coach job to the next.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Reply to client messages", to: "/dashboard/messages" },
              { title: "Review upcoming sessions", to: "/dashboard/schedule" },
              { title: "Update a client note", to: "/dashboard/clients" },
            ].map((item) => (
              <Link
                key={item.to}
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
                to={item.to}
              >
                {item.title}
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Short static feed for the first pass.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Sarah submitted this week's check-in.",
              "Michael asked to move tomorrow's session.",
              "Emma completed the upper-body workout log.",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
