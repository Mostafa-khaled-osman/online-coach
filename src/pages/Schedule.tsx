import { Clock4, Video } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const sessions = [
  { client: "Sarah Jenkins", type: "Initial consultation", time: "09:00 - 10:00", platform: "Zoom" },
  { client: "Michael Chen", type: "Form review", time: "11:30 - 12:00", platform: "Meet" },
  { client: "Emma Davis", type: "Nutrition check-in", time: "14:00 - 14:30", platform: "Zoom" },
]

export function Schedule() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={<Button>New session</Button>}
        description="Scheduling is now one of the main coach pages in the shared layout."
        eyebrow="Coach workspace"
        title="Schedule"
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Today</CardTitle>
            <CardDescription>Upcoming sessions for the current day.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sessions.map((session) => (
              <div key={session.client} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-950">{session.client}</p>
                    <p className="text-sm text-slate-500">{session.type}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-600">{session.time}</span>
                    <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-600">{session.platform}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Session tools</CardTitle>
            <CardDescription>Quick actions that pair well with the schedule.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <Clock4 className="h-4 w-4 text-primary-600" />
              <span>Set aside 30 minutes for admin follow-up after the last session.</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <Video className="h-4 w-4 text-primary-600" />
              <span>Keep meeting links near the message thread so coaches can switch quickly.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
