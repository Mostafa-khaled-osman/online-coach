import { Link, Outlet, useLocation } from "react-router-dom"
import { LayoutDashboard, Users, LogOut } from "lucide-react"
import { cn } from "../../lib/utils"
import { useAuth } from "../../context/AuthContext"

const adminNav = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard, end: true },
  { label: "Coaches", to: "/admin/coaches", icon: Users },
]

export function AdminLayout() {
  const location = useLocation()
  const { logout, user } = useAuth()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-200 bg-white">
        <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-6">
          <span className="text-lg font-bold tracking-tight text-slate-950">Gymeni</span>
          <span className="rounded-md bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white">
            Admin
          </span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {adminNav.map(({ label, to, icon: Icon, end }) => {
            const active = end
              ? location.pathname === to
              : location.pathname.startsWith(to)
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-slate-200 p-4">
          <div className="mb-3 rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-semibold text-slate-950">{user?.name}</p>
            <p className="text-xs text-slate-500">System Administrator</p>
          </div>
          <button
            onClick={logout}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
          <div className="flex h-16 items-center px-8">
            <h1 className="text-xl font-semibold text-slate-950">
              {adminNav.find(
                (n) => n.end
                  ? location.pathname === n.to
                  : location.pathname.startsWith(n.to)
              )?.label ?? "Admin"}
            </h1>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
