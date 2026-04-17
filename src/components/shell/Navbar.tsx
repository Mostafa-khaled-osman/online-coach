import type { ReactNode } from "react"
import { Link, NavLink } from "react-router-dom"
import type { NavItem } from "../../config/navigation"
import { cn } from "../../lib/utils"
import { Button, type ButtonProps } from "../ui/Button"

type NavbarAction = {
  label: string
  to: string
  variant?: ButtonProps["variant"]
}

type NavbarProps = {
  items: NavItem[]
  cta?: NavbarAction
  secondaryAction?: NavbarAction
  title?: string
  subtitle?: string
  trailing?: ReactNode
}

export function Navbar({
  items,
  cta,
  secondaryAction,
  title = "Online Coach",
  subtitle = "A cleaner app shell for coaches and athletes.",
  trailing,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link className="min-w-0" to="/">
          <span className="block text-lg font-semibold tracking-tight text-slate-950">{title}</span>
          <span className="block text-xs text-slate-500">{subtitle}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                )
              }
              end={item.end}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {trailing}
          {secondaryAction ? (
            <Button asChild variant={secondaryAction.variant ?? "outline"}>
              <Link to={secondaryAction.to}>{secondaryAction.label}</Link>
            </Button>
          ) : null}
          {cta ? (
            <Button asChild variant={cta.variant ?? "default"}>
              <Link to={cta.to}>{cta.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="border-t border-slate-200 md:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {items.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                cn(
                  "whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                )
              }
              end={item.end}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
