import { FormEvent, useRef, useState } from "react"
import { Send, Bot, User, Sparkles, AlertCircle } from "lucide-react"
import { api, getApiError } from "../lib/api"
import { PageHeader } from "../components/ui/PageHeader"

type AiResponse = {
  provider: string
  model: string
  userMessage: string
  answer: string
  tips: string[]
}

type Message =
  | { role: "user"; text: string }
  | { role: "assistant"; answer: string; tips: string[] }

export function TrainerChatHub() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  async function handleSend(e: FormEvent) {
    e.preventDefault()
    const text = input.trim()
    if (!text || isLoading) return

    setInput("")
    setError(null)
    setMessages((prev) => [...prev, { role: "user", text }])
    setIsLoading(true)

    try {
      const { data } = await api.post<AiResponse>("/client/ai-chat", { message: text })
      setMessages((prev) => [
        ...prev,
        { role: "assistant", answer: data.answer, tips: data.tips ?? [] },
      ])
    } catch (err) {
      setError(getApiError(err))
    } finally {
      setIsLoading(false)
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100)
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        description="Ask our AI nutrition assistant about calories, macros, meal timing, and more."
        eyebrow="Athlete hub"
        title="AI Nutrition Chat"
      />

      <div className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm" style={{ minHeight: "60vh" }}>
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100">
            <Bot className="h-5 w-5 text-violet-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">AI Nutrition Assistant</p>
            <p className="text-xs text-slate-400">Powered by GPT-4</p>
          </div>
          <Sparkles className="ml-auto h-4 w-4 text-violet-400" />
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bot className="mb-3 h-12 w-12 text-slate-200" />
              <p className="text-sm font-medium text-slate-400">
                Ask me anything about nutrition
              </p>
              <p className="mt-1 text-xs text-slate-300">
                e.g. "How many calories in a green apple?"
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100">
                  <Bot className="h-4 w-4 text-violet-600" />
                </div>
              )}

              <div className={`max-w-lg space-y-2 ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                <div
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    msg.role === "user"
                      ? "rounded-br-sm bg-slate-900 text-white"
                      : "rounded-bl-sm bg-slate-100 text-slate-800"
                  }`}
                >
                  {msg.role === "user" ? msg.text : msg.answer}
                </div>

                {msg.role === "assistant" && msg.tips.length > 0 && (
                  <div className="rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-xs text-violet-700">
                    <p className="mb-1.5 font-semibold">💡 Tips</p>
                    <ul className="space-y-1">
                      {msg.tips.map((tip, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="mt-0.5 text-violet-400">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {msg.role === "user" && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100">
                <Bot className="h-4 w-4 text-violet-600" />
              </div>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-300"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-3 rounded-xl bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-slate-200 p-4">
          <form onSubmit={handleSend} className="flex items-end gap-3">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSend(e as unknown as FormEvent)
                }
              }}
              placeholder="Ask about nutrition, calories, macros…"
              className="flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white transition hover:bg-slate-700 disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-2 text-center text-xs text-slate-400">
            AI responses are for guidance only — always consult a qualified dietitian.
          </p>
        </div>
      </div>
    </div>
  )
}
