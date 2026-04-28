import type { LucideIcon } from "lucide-react"
import {
  Activity,
  BookOpen,
  CalendarDays,
  CheckSquare,
  CreditCard,
  Dumbbell,
  Home,
  LayoutDashboard,
  MessageSquare,
  PackageOpen,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react"

export type NavItem = {
  label: string
  to: string
  icon?: LucideIcon
  end?: boolean
}

export const publicNavItems: NavItem[] = [
  { label: "Home", to: "/", icon: Home, end: true },
  { label: "About", to: "/about", icon: Sparkles },
  { label: "Articles", to: "/articles", icon: BookOpen },
  { label: "Pricing", to: "/pricing", icon: CreditCard },
  { label: "Stories", to: "/success-stories", icon: TrendingUp },
  { label: "Wellness", to: "/aether-wellness", icon: Activity },
]

export const coachNavItems: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard, end: true },
  { label: "Clients", to: "/dashboard/clients", icon: Users },
  { label: "Schedule", to: "/dashboard/schedule", icon: CalendarDays },
  { label: "Messages", to: "/dashboard/messages", icon: MessageSquare },
  { label: "Settings", to: "/dashboard/settings", icon: Settings },
]

export const athleteNavItems: NavItem[] = [
  { label: "Dashboard", to: "/athlete/dashboard", icon: LayoutDashboard, end: true },
  { label: "Workout", to: "/athlete/workout-log", icon: Dumbbell },
  { label: "Meal Plan", to: "/athlete/meal-planner", icon: PackageOpen },
  { label: "Nutrition", to: "/athlete/nutrition-tracker", icon: Activity },
  { label: "Progress", to: "/athlete/progress", icon: TrendingUp },
  { label: "Supplements", to: "/athlete/supplement-guide", icon: Sparkles },
  { label: "Check-In", to: "/athlete/checkin", icon: CheckSquare },
  { label: "AI Chat", to: "/athlete/chat", icon: MessageSquare },
  { label: "Payment", to: "/athlete/payment", icon: CreditCard },
  { label: "Settings", to: "/athlete/settings", icon: Settings },
]

const routeEntries: Array<[string, string]> = [
  ...publicNavItems.map((item): [string, string] => [item.to, item.label]),
  ...coachNavItems.map((item): [string, string] => [item.to, item.label]),
  ...athleteNavItems.map((item): [string, string] => [item.to, item.label]),
  ["/checkout", "Checkout"],
  ["/signin", "Sign In"],
  ["/register", "Register"],
  ["/forgot-password", "Forgot Password"],
  ["/reset-password", "Reset Password"],
  ["/athlete/payment", "Upload Payment"],
  ["/athlete/settings", "Settings"],
  ["/dashboard/clients/:id", "Client Detail"],
  ["/dashboard/checkin-reviewer", "Check-In Reviewer"],
  ["/dashboard/library", "Exercise Library"],
  ["/dashboard/revenue", "Revenue Analytics"],
  ["/dashboard/exercise-manager", "Exercise Manager"],
  ["/dashboard/athlete-management", "Athlete Management"],
  ["/dashboard/nutrition-architect", "Nutrition Architect"],
  ["/dashboard/program-builder", "Program Builder"],
  ["/dashboard/overview", "Coach Overview"],
  ["/admin", "Admin Dashboard"],
  ["/admin/coaches", "Coaches"],
]

const routeTitles = new Map<string, string>(routeEntries)

export function getRouteTitle(pathname: string) {
  return routeTitles.get(pathname) ?? "Online Coach"
}
