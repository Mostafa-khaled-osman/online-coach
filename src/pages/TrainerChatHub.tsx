import { Paperclip, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

const contacts = [
  { name: "Coach Elena", summary: "Asked about today's workout notes", active: true },
  { name: "Support", summary: "Shared a reminder about weekly check-ins", active: false },
  { name: "Nutrition team", summary: "Suggested a meal swap for training days", active: false },
]

export function TrainerChatHub() {
  return (
    <div className="space-y-8">
      <PageHeader
        description="Messaging now belongs to the same athlete route group as workouts, meals, and progress."
        eyebrow="Athlete hub"
        title="Chat"
      />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
            <CardDescription>Choose a thread without leaving the shared shell.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {contacts.map((contact) => (
              <div
                key={contact.name}
                className={`rounded-2xl border p-4 ${contact.active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-700"}`}
              >
                <p className="font-semibold">{contact.name}</p>
                <p className={`mt-1 text-sm ${contact.active ? "text-slate-200" : "text-slate-500"}`}>{contact.summary}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coach Elena</CardTitle>
            <CardDescription>Current thread</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-start">
              <div className="max-w-xl rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Nice work on the upper body session. How did the last pressing set feel?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-xl rounded-2xl rounded-br-sm bg-primary-600 px-4 py-3 text-sm text-white">
                Strong overall. The final rep slowed down, but form stayed clean.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-xl rounded-2xl rounded-bl-sm bg-slate-100 px-4 py-3 text-sm text-slate-700">
                Perfect. Log it in the workout page and keep protein high tonight.
              </div>
            </div>

            <div className="flex items-end gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <button className="rounded-xl bg-white p-3 text-slate-500 shadow-sm transition-colors hover:text-slate-950">
                <Paperclip className="h-4 w-4" />
              </button>
              <textarea
                className="min-h-12 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-950 outline-none"
                placeholder="Type your message..."
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
