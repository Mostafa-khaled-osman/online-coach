import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { athleteNavItems, getRouteTitle } from "../../config/navigation"
import { cn } from "../../lib/utils"
import { Sidebar } from "../shell/Sidebar"
import { Button } from "../ui/Button"
import { useAuth } from "../../context/AuthContext"
import { LogOut } from "lucide-react"
import { NotificationsPopover } from "../ui/NotificationsPopover"

export function AthleteLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  async function handleLogout() {
    await logout()
    navigate("/signin", { replace: true })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Sidebar
        footer={
          <div className="space-y-3 rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-slate-950">Athlete hub</p>
            <p className="text-sm text-slate-600">
              Training, nutrition, and weekly check-ins now share one navigation system.
            </p>
          </div>
        }
        items={athleteNavItems}
        subtitle="Athlete hub"
        title="Online Coach"
      />

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Athlete hub</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
                {getRouteTitle(location.pathname)}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {user && (
                <span className="text-sm text-slate-500">
                  {user.name}
                </span>
              )}
              <Button asChild variant="outline">
                <Link to="/athlete/checkin">Weekly Check-In</Link>
              </Button>
              <NotificationsPopover />
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </div>

          <div className="border-t border-slate-200 lg:hidden">
            <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
              {athleteNavItems.map((item) => (
                <Link
                  key={item.to}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                    location.pathname === item.to
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  )}
                  to={item.to}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
