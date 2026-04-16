/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { DashboardLayout } from "./components/layout/DashboardLayout"
import { Dashboard } from "./pages/Dashboard"
import { About } from "./pages/About"
import { AccountSettings } from "./pages/AccountSettings"
import { SignIn } from "./pages/SignIn"
import { Articles } from "./pages/Articles"
import { CheckInReviewer } from "./pages/CheckInReviewer"
import { Checkout } from "./pages/Checkout"
import { ClientsCRM } from "./pages/ClientsCRM"
import { ExerciseLibrary } from "./pages/ExerciseLibrary"
import { ExerciseManager } from "./pages/ExerciseManager"
import { MealPlanner } from "./pages/MealPlanner"
import { NutritionTracker } from "./pages/NutritionTracker"
import { AthleteManagement } from "./pages/AthleteManagement"
import { NutritionArchitect } from "./pages/NutritionArchitect"
import { SymmetryAthletic } from "./pages/SymmetryAthletic"
import { PricingPlans } from "./pages/PricingPlans"
import { ProgressTracking } from "./pages/ProgressTracking"
import { AetherWellness } from "./pages/AetherWellness"
import { RevenueAnalytics } from "./pages/RevenueAnalytics"
import { SupplementGuide } from "./pages/SupplementGuide"
import { SuccessStories } from "./pages/SuccessStories"
import { TrainerChatHub } from "./pages/TrainerChatHub"
import { SanctuaryDashboard } from "./pages/SanctuaryDashboard"
import { MindfulCuratorDashboard } from "./pages/MindfulCuratorDashboard"
import { WeeklyCheckin } from "./pages/WeeklyCheckin"
import { WorkoutLog } from "./pages/WorkoutLog"
import { ProgramBuilder } from "./pages/ProgramBuilder"
import { Schedule } from "./pages/Schedule"
import { Messages } from "./pages/Messages"
import { DevNav } from "./components/DevNav"

export default function App() {
  return (
    <Router>
      <DevNav />
      <Routes>
        {/* Public / Marketing Routes */}
        <Route path="/" element={<SymmetryAthletic />} />
        <Route path="/aether-wellness" element={<AetherWellness />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/articles" element={<Articles />} />

        {/* Auth & Onboarding */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Coach / Admin Dashboard (Using DashboardLayout) */}
        <Route path="/dashboard/*" element={
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/clients" element={<ClientsCRM />} />
              <Route path="/checkin-reviewer" element={<CheckInReviewer />} />
              <Route path="/library" element={<ExerciseLibrary />} />
              <Route path="/revenue" element={<RevenueAnalytics />} />
              <Route path="/exercise-manager" element={<ExerciseManager />} />
              <Route path="/athlete-management" element={<AthleteManagement />} />
              <Route path="/nutrition-architect" element={<NutritionArchitect />} />
              <Route path="/program-builder" element={<ProgramBuilder />} />
              <Route path="/overview" element={<MindfulCuratorDashboard />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </DashboardLayout>
        } />

        {/* Athlete / Client Views */}
        <Route path="/athlete/dashboard" element={<SanctuaryDashboard />} />
        <Route path="/athlete/workout-log" element={<WorkoutLog />} />
        <Route path="/athlete/meal-planner" element={<MealPlanner />} />
        <Route path="/athlete/nutrition-tracker" element={<NutritionTracker />} />
        <Route path="/athlete/progress" element={<ProgressTracking />} />
        <Route path="/athlete/supplement-guide" element={<SupplementGuide />} />
        <Route path="/athlete/checkin" element={<WeeklyCheckin />} />
        <Route path="/athlete/chat" element={<TrainerChatHub />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
