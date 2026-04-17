import { Paperclip, Phone, Send, Video } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const contacts = [
  { name: "Sarah Jenkins", lastMessage: "Thanks for the updated meal plan.", active: true },
  { name: "Michael Chen", lastMessage: "Can we reschedule tomorrow?", active: false },
  { name: "Emma Davis", lastMessage: "Hit a new PR on squats today.", active: false },
]

export function Messages() {
  return (
    <div className="space-y-8">
      <PageHeader
        description="Coach messaging now lives in the same dashboard shell as clients, schedule, and settings."
        eyebrow="Coach workspace"
        title="Messages"
      />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <CardDescription>Primary inbox for the current pass.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {contacts.map((contact) => (
              <div
                key={contact.name}
                className={`rounded-2xl border p-4 ${contact.active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-700"}`}
              >
                <p className="font-semibold">{contact.name}</p>
                <p className={`mt-1 text-sm ${contact.active ? "text-slate-200" : "text-slate-500"}`}>{contact.lastMessage}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Sarah Jenkins</CardTitle>
                <CardDescription>Active conversation</CardDescription>
              </div>
              <div className="flex gap-2">
                <button className="rounded-xl border border-slate-200 bg-white p-3 text-slate-500 transition-colors hover:text-slate-950">
                  <Phone className="h-4 w-4" />
                </button>
                <button className="rounded-xl border border-slate-200 bg-white p-3 text-slate-500 transition-colors hover:text-slate-950">
                  <Video className="h-4 w-4" />
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-start">
              <div className="max-w-xl rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Hi coach, I finished the lower body workout and the split squats felt strong.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-xl rounded-2xl rounded-br-sm bg-primary-600 px-4 py-3 text-sm text-white">
                Great work. Keep the same tempo next session and log the recovery notes tonight.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-xl rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Will do. I also updated my meal plan and check-in.
              </div>
            </div>

            <div className="flex items-end gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <button className="rounded-xl bg-white p-3 text-slate-500 shadow-sm transition-colors hover:text-slate-950">
                <Paperclip className="h-4 w-4" />
              </button>
              <textarea
                className="min-h-12 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-950 outline-none"
                placeholder="Type your reply..."
              />
              <button className="rounded-xl bg-slate-900 p-3 text-white transition-colors hover:bg-slate-800">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
