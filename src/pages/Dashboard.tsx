import React from "react"
import { Typography } from "../components/ui/Typography"
import { DataCard, DataCardHeader, DataCardTitle, DataCardContent } from "../components/ui/DataCard"
import { Button } from "../components/ui/Button"
import { Users, TrendingUp, Calendar as CalendarIcon, Clock } from "lucide-react"

const stats = [
  { name: "Total Clients", value: "24", icon: Users, change: "+2 this month", changeType: "positive" },
  { name: "Active Sessions", value: "12", icon: CalendarIcon, change: "Next in 2h", changeType: "neutral" },
  { name: "Hours Coached", value: "148", icon: Clock, change: "+12 this week", changeType: "positive" },
  { name: "Revenue", value: "$4,200", icon: TrendingUp, change: "+8% this month", changeType: "positive" },
]

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Typography variant="h2">Welcome back, Tom</Typography>
          <Typography variant="muted" className="mt-1">Here's what's happening with your coaching business today.</Typography>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">View Schedule</Button>
          <Button>New Client</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <DataCard key={stat.name}>
            <DataCardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <DataCardTitle className="text-sm font-medium text-slate-600">
                {stat.name}
              </DataCardTitle>
              <stat.icon className="h-4 w-4 text-slate-400" />
            </DataCardHeader>
            <DataCardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className={`text-xs mt-1 ${stat.changeType === 'positive' ? 'text-emerald-600' : 'text-slate-500'}`}>
                {stat.change}
              </p>
            </DataCardContent>
          </DataCard>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DataCard>
          <DataCardHeader>
            <DataCardTitle>Upcoming Sessions</DataCardTitle>
          </DataCardHeader>
          <DataCardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">Client Name {i}</p>
                    <p className="text-xs text-slate-500">Today, {10 + i}:00 AM - {11 + i}:00 AM</p>
                  </div>
                  <Button variant="ghost" size="sm">Join</Button>
                </div>
              ))}
            </div>
          </DataCardContent>
        </DataCard>

        <DataCard>
          <DataCardHeader>
            <DataCardTitle>Recent Activity</DataCardTitle>
          </DataCardHeader>
          <DataCardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <div>
                    <p className="text-sm text-slate-900">New message from Client {i}</p>
                    <p className="text-xs text-slate-500">{i} hour{i > 1 ? 's' : ''} ago</p>
                  </div>
                </div>
              ))}
            </div>
          </DataCardContent>
        </DataCard>
      </div>
    </div>
  )
}
