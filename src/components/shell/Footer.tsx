import { Link } from "react-router-dom"
import type { NavItem } from "../../config/navigation"

type FooterProps = {
  items: NavItem[]
}

export function Footer({ items }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-slate-950">Online Coach</p>
          <p>Shared navigation, cleaner layouts, and connected core flows.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {items.map((item) => (
            <Link
              key={item.to}
              className="transition-colors hover:text-slate-950"
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
