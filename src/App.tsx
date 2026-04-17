/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { PublicLayout } from "./components/layout/PublicLayout"
import { CoachLayout } from "./components/layout/CoachLayout"
import { AthleteLayout } from "./components/layout/AthleteLayout"
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<SymmetryAthletic />} />
          <Route path="/aether-wellness" element={<AetherWellness />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        <Route path="/dashboard" element={<CoachLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<ClientsCRM />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>

        <Route path="/dashboard/checkin-reviewer" element={<CheckInReviewer />} />
        <Route path="/dashboard/library" element={<ExerciseLibrary />} />
        <Route path="/dashboard/revenue" element={<RevenueAnalytics />} />
        <Route path="/dashboard/exercise-manager" element={<ExerciseManager />} />
        <Route path="/dashboard/athlete-management" element={<AthleteManagement />} />
        <Route path="/dashboard/nutrition-architect" element={<NutritionArchitect />} />
        <Route path="/dashboard/program-builder" element={<ProgramBuilder />} />
        <Route path="/dashboard/overview" element={<MindfulCuratorDashboard />} />

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
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
