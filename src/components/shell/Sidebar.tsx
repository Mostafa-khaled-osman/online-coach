import type { ReactNode } from "react"
import { Link, NavLink } from "react-router-dom"
import type { NavItem } from "../../config/navigation"
import { cn } from "../../lib/utils"

type SidebarProps = {
  title: string
  subtitle: string
  items: NavItem[]
  footer?: ReactNode
}

export function Sidebar({ title, subtitle, items, footer }: SidebarProps) {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <Link to="/" className="min-w-0">
          <span className="block text-lg font-semibold tracking-tight text-slate-950">{title}</span>
          <span className="block text-xs text-slate-500">{subtitle}</span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-y-auto p-4">
        <nav className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  )
                }
                end={item.end}
                to={item.to}
              >
                {Icon ? <Icon className="h-4 w-4" /> : null}
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        {footer ? <div className="mt-6 border-t border-slate-200 pt-6">{footer}</div> : null}
      </div>
    </aside>
  )
}
