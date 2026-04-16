import React from 'react';
import { ChevronLeft, ChevronRight, Clock, Video, User, Plus } from 'lucide-react';

const SESSIONS = [
  { id: 1, client: 'Sarah Jenkins', type: 'Initial Consultation', time: '09:00 AM - 10:00 AM', date: 'Today', platform: 'Zoom' },
  { id: 2, client: 'Michael Chen', type: 'Form Review', time: '11:30 AM - 12:00 PM', date: 'Today', platform: 'Google Meet' },
  { id: 3, client: 'Emma Davis', type: 'Nutrition Check-in', time: '02:00 PM - 02:30 PM', date: 'Today', platform: 'Zoom' },
  { id: 4, client: 'James Wilson', type: 'Monthly Assessment', time: '04:00 PM - 05:00 PM', date: 'Tomorrow', platform: 'In-person' },
];

export function Schedule() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Schedule</h1>
          <p className="text-sm text-slate-500">Manage your upcoming client sessions and events.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#44674d] text-white rounded-lg hover:bg-[#385b42] transition-colors text-sm font-semibold shadow-sm">
          <Plus className="w-4 h-4" />
          New Session
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900">April 2026</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
          
          {/* Simple Calendar Grid Placeholder */}
          <div className="grid grid-cols-7 gap-px bg-slate-200 rounded-lg overflow-hidden">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="bg-slate-50 py-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="bg-white min-h-[100px] p-2 hover:bg-slate-50 transition-colors cursor-pointer">
                <span className={`text-sm ${i === 14 ? 'bg-[#44674d] text-white w-6 h-6 rounded-full flex items-center justify-center' : 'text-slate-700'}`}>
                  {(i % 30) + 1}
                </span>
                {i === 14 && (
                  <div className="mt-1 px-2 py-1 bg-[#44674d]/10 text-[#44674d] text-xs rounded truncate">
                    3 Sessions
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              {SESSIONS.map(session => (
                <div key={session.id} className="p-4 rounded-lg border border-slate-100 bg-slate-50 hover:border-[#44674d]/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-slate-900">{session.type}</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-white rounded-full border border-slate-200 text-slate-600">
                      {session.date}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span>{session.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-slate-400" />
                      <span>{session.platform}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm font-semibold text-[#44674d] hover:bg-[#44674d]/5 rounded-lg transition-colors">
              View All Sessions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
