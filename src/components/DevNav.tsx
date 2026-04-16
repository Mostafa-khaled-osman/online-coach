import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const ROUTES = {
  "Public / Marketing": [
    { path: "/", name: "Main Landing (Symmetry)" },
    { path: "/aether-wellness", name: "Alt Landing (Aether)" },
    { path: "/about", name: "About" },
    { path: "/pricing", name: "Pricing" },
    { path: "/success-stories", name: "Success Stories" },
    { path: "/articles", name: "Articles" },
  ],
  "Auth & Onboarding": [
    { path: "/signin", name: "Sign In" },
    { path: "/checkout", name: "Checkout" },
  ],
  "Coach Dashboard": [
    { path: "/dashboard", name: "Main Dashboard" },
    { path: "/dashboard/overview", name: "Mindful Curator" },
    { path: "/dashboard/clients", name: "Clients CRM" },
    { path: "/dashboard/program-builder", name: "Program Builder" },
    { path: "/dashboard/exercise-manager", name: "Exercise Manager" },
    { path: "/dashboard/library", name: "Exercise Library" },
    { path: "/dashboard/nutrition-architect", name: "Nutrition Architect" },
    { path: "/dashboard/athlete-management", name: "Athlete Management" },
    { path: "/dashboard/revenue", name: "Revenue Analytics" },
    { path: "/dashboard/checkin-reviewer", name: "Check-in Reviewer" },
    { path: "/dashboard/schedule", name: "Schedule" },
    { path: "/dashboard/messages", name: "Messages" },
    { path: "/dashboard/settings", name: "Settings" },
  ],
  "Athlete Views": [
    { path: "/athlete/dashboard", name: "Sanctuary Dashboard" },
    { path: "/athlete/workout-log", name: "Workout Log" },
    { path: "/athlete/meal-planner", name: "Meal Planner" },
    { path: "/athlete/nutrition-tracker", name: "Nutrition Tracker" },
    { path: "/athlete/progress", name: "Progress Tracking" },
    { path: "/athlete/supplement-guide", name: "Supplement Guide" },
    { path: "/athlete/checkin", name: "Weekly Check-in" },
    { path: "/athlete/chat", name: "Trainer Chat" },
  ]
};

export function DevNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-slate-900 text-white p-3 rounded-full shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center"
        title="Developer Navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-900 text-white flex justify-between items-center shrink-0">
            <h3 className="font-bold text-sm">App Directory</h3>
            <span className="text-xs bg-slate-800 px-2 py-1 rounded">Dev Mode</span>
          </div>
          
          <div className="overflow-y-auto p-4 space-y-6 flex-1">
            {Object.entries(ROUTES).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{category}</h4>
                <div className="space-y-1">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg text-sm text-slate-700 hover:text-slate-900 transition-colors group"
                    >
                      <span className="truncate pr-4">{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
