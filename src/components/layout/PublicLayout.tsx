import { Outlet } from "react-router-dom"
import { publicNavItems } from "../../config/navigation"
import { Footer } from "../shell/Footer"
import { Navbar } from "../shell/Navbar"

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar
        cta={{ label: "Sign In", to: "/signin" }}
        items={publicNavItems}
        secondaryAction={{ label: "Checkout", to: "/checkout", variant: "outline" }}
      />
      <main>
        <Outlet />
      </main>
      <Footer items={publicNavItems} />
    </div>
  )
}
