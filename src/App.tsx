/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ProtectedRoute } from "./components/auth/ProtectedRoute"
import { PublicLayout } from "./components/layout/PublicLayout"
import { CoachLayout } from "./components/layout/CoachLayout"
import { AthleteLayout } from "./components/layout/AthleteLayout"

// Public pages
import { SymmetryAthletic } from "./pages/SymmetryAthletic"
import { AetherWellness } from "./pages/AetherWellness"
import { About } from "./pages/About"
import { PricingPlans } from "./pages/PricingPlans"
import { SuccessStories } from "./pages/SuccessStories"
import { Articles } from "./pages/Articles"
import { SignIn } from "./pages/SignIn"
import { Checkout } from "./pages/Checkout"

// Auth pages
import { Register } from "./pages/Register"
import { ForgotPassword } from "./pages/ForgotPassword"
import { ResetPassword } from "./pages/ResetPassword"

// Coach pages
import { Dashboard } from "./pages/Dashboard"
import { ClientsCRM } from "./pages/ClientsCRM"
import { ClientDetail } from "./pages/ClientDetail"
import { Schedule } from "./pages/Schedule"
import { Messages } from "./pages/Messages"
import { AccountSettings } from "./pages/AccountSettings"
import { CheckInReviewer } from "./pages/CheckInReviewer"
import { ExerciseLibrary } from "./pages/ExerciseLibrary"
import { RevenueAnalytics } from "./pages/RevenueAnalytics"
import { ExerciseManager } from "./pages/ExerciseManager"
import { AthleteManagement } from "./pages/AthleteManagement"
import { NutritionArchitect } from "./pages/NutritionArchitect"
import { ProgramBuilder } from "./pages/ProgramBuilder"
import { MindfulCuratorDashboard } from "./pages/MindfulCuratorDashboard"

// Athlete (client) pages
import { SanctuaryDashboard } from "./pages/SanctuaryDashboard"
import { WorkoutLog } from "./pages/WorkoutLog"
import { MealPlanner } from "./pages/MealPlanner"
import { NutritionTracker } from "./pages/NutritionTracker"
import { ProgressTracking } from "./pages/ProgressTracking"
import { SupplementGuide } from "./pages/SupplementGuide"
import { WeeklyCheckin } from "./pages/WeeklyCheckin"
import { TrainerChatHub } from "./pages/TrainerChatHub"

// Admin pages
import { AdminLayout } from "./components/layout/AdminLayout"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { AdminCoaches } from "./pages/admin/AdminCoaches"

// Coach landing (public, slug-based)
import { CoachLanding } from "./pages/CoachLanding"

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ── Public ─────────────────────────────────────────────────────── */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<SymmetryAthletic />} />
          <Route path="/aether-wellness" element={<AetherWellness />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* Dynamic coach landing page: /:slug */}
          <Route path="/coach/:slug" element={<CoachLanding />} />
        </Route>

        {/* ── Coach Dashboard (ROLE_COACH required) ──────────────────────── */}
        <Route element={<ProtectedRoute role="ROLE_COACH" />}>
          <Route path="/dashboard" element={<CoachLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="clients" element={<ClientsCRM />} />
            <Route path="clients/:id" element={<ClientDetail />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<AccountSettings />} />
          </Route>

          {/* Coach sub-pages outside the sidebar layout */}
          <Route path="/dashboard/checkin-reviewer" element={<CheckInReviewer />} />
          <Route path="/dashboard/library" element={<ExerciseLibrary />} />
          <Route path="/dashboard/revenue" element={<RevenueAnalytics />} />
          <Route path="/dashboard/exercise-manager" element={<ExerciseManager />} />
          <Route path="/dashboard/athlete-management" element={<AthleteManagement />} />
          <Route path="/dashboard/nutrition-architect" element={<NutritionArchitect />} />
          <Route path="/dashboard/program-builder" element={<ProgramBuilder />} />
          <Route path="/dashboard/overview" element={<MindfulCuratorDashboard />} />
        </Route>

        {/* ── Athlete Portal (ROLE_USER required) ────────────────────────── */}
        <Route element={<ProtectedRoute role="ROLE_USER" />}>
          <Route path="/athlete" element={<AthleteLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<SanctuaryDashboard />} />
            <Route path="workout-log" element={<WorkoutLog />} />
            <Route path="meal-planner" element={<MealPlanner />} />
            <Route path="nutrition-tracker" element={<NutritionTracker />} />
            <Route path="progress" element={<ProgressTracking />} />
            <Route path="supplement-guide" element={<SupplementGuide />} />
            <Route path="checkin" element={<WeeklyCheckin />} />
            <Route path="chat" element={<TrainerChatHub />} />
            <Route path="payment" element={<Checkout />} />
            <Route path="settings" element={<AccountSettings />} />
          </Route>
        </Route>

        {/* ── Admin Portal (ROLE_ADMIN required) ─────────────────────────── */}
        <Route element={<ProtectedRoute role="ROLE_ADMIN" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="coaches" element={<AdminCoaches />} />
          </Route>
        </Route>

        {/* ── Fallback ────────────────────────────────────────────────────── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
