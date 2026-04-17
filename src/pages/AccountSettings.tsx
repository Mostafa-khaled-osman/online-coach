import { Bell, Shield, UserRound } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { PageHeader } from "../components/ui/PageHeader"

export function AccountSettings() {
  return (
    <div className="space-y-8">
      <PageHeader
        actions={<Button>Save changes</Button>}
        description="Core account settings now live inside the coach layout instead of a separate standalone mockup."
        eyebrow="Coach workspace"
        title="Settings"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
              <UserRound className="h-5 w-5" />
            </div>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Basic profile details for the current pass.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="block space-y-2 text-sm">
              <span className="font-medium text-slate-700">Full name</span>
              <input
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                defaultValue="Coach Elena Thorne"
              />
            </label>
            <label className="block space-y-2 text-sm">
              <span className="font-medium text-slate-700">Email</span>
              <input
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                defaultValue="coach@onlinecoach.app"
              />
            </label>
            <label className="block space-y-2 text-sm">
              <span className="font-medium text-slate-700">Bio</span>
              <textarea
                className="min-h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                defaultValue="Strength, nutrition, and habit coaching with a cleaner product workflow."
              />
            </label>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <Bell className="h-5 w-5" />
              </div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose which coach updates should stay loud and which can stay quiet.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "New message alerts",
                "Client check-in reminders",
                "Schedule changes",
              ].map((item, index) => (
                <label key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="text-slate-700">{item}</span>
                  <input defaultChecked={index !== 2} type="checkbox" />
                </label>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Shield className="h-5 w-5" />
              </div>
              <CardTitle>Security</CardTitle>
              <CardDescription>Frontend-only for now, but the screen is now in the correct route tree.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">Password reset and role management will be wired later.</div>
              <Button variant="outline">Request password reset</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
