import React from 'react';

export function ProgressTracking() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <nav className="bg-[#faf9f4] dark:bg-[#1a1c19] backdrop-blur-xl bg-opacity-70 dark:bg-opacity-70 docked full-width top-0 sticky z-50 transition-transform duration-200 ease-out">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-['Noto_Serif'] italic text-[#44674d] dark:text-[#84A98C] tracking-tight">Symmetry Athletic</span>
            <div className="hidden md:flex gap-6">
              <a className="text-[#30332e]/60 dark:text-[#eeeee8]/60 font-medium hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors duration-300" href="#">Dashboard</a>
              <a className="text-[#30332e]/60 dark:text-[#eeeee8]/60 font-medium hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors duration-300" href="#">Workouts</a>
              <a className="text-[#30332e]/60 dark:text-[#eeeee8]/60 font-medium hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors duration-300" href="#">Nutrition</a>
              <a className="text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] dark:border-[#84A98C] pb-1 font-bold" href="#">Progress</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container-high rounded-full px-4 py-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-32 md:w-48 placeholder:text-on-surface-variant/50" placeholder="Search data..." type="text" />
            </div>
            <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>notifications</button>
            <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>settings</button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
              <img alt="Athlete Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr_aA0tNraXJzuSBp-MorTe5dkVHK3LQ1Z8VOcEAZfgKiLxWhU7ZBVXmhr6buWsmBdFsSRtbRUoB2TkEL3kXL06Gf2W2yALzLUinTMyNEbm-SKtyN81BM0LTLlSkLdpiSUGIWZbh32AGTr0aK9pZ_d33Zda6dkFXhxviT8QEMBdAr2alZIy_H9bEOqibsxba2UHJlikJAhC8leatMVzDkYp0Erx2A55O3fq68DIlRtqNwexazP1P_heG9caJA86wwYZ02l-6VZiT4" />
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow max-w-screen-2xl mx-auto w-full px-8 py-12">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-['Noto_Serif'] text-on-surface mb-4 leading-tight">Your Journey in <span className="italic text-primary">Symmetry</span></h1>
            <p className="text-lg font-['Manrope'] text-on-surface-variant max-w-lg">Observe the subtle shifts in your physiology. Progress is not just a destination, but a rhythmic dance of consistency and care.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-102 transition-transform duration-200 shadow-sm">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>add_chart</span>
              Log Entry
            </button>
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-surface-container-lowest rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div>
                <h3 className="text-2xl font-['Noto_Serif'] text-on-surface">Physique Dynamics</h3>
                <p className="text-sm font-['Manrope'] text-on-surface-variant uppercase tracking-widest mt-1">Weight vs Muscle Mass Trend</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-xs font-bold text-on-surface-variant">Weight Loss</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="text-xs font-bold text-on-surface-variant">Muscle Gain</span>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-full relative">
              <svg className="w-full h-full" viewBox="0 0 800 300">
                <path className="opacity-80 drop-shadow-[0_0_8px_rgba(68,103,77,0.3)]" d="M0,220 C100,210 200,240 300,180 C400,120 500,150 600,110 C700,70 800,80 800,80" fill="none" stroke="#44674d" strokeLinecap="round" strokeWidth="4"></path>
                <path className="opacity-80 drop-shadow-[0_0_8px_rgba(68,100,110,0.3)]" d="M0,280 C100,275 200,260 300,250 C400,230 500,210 600,195 C700,185 800,170 800,170" fill="none" stroke="#44646e" strokeLinecap="round" strokeWidth="4"></path>
                <circle className="cursor-pointer" cx="500" cy="150" fill="#44674d" r="6"></circle>
                <line opacity="0.1" stroke="#30332e" strokeDasharray="4" strokeWidth="1" x1="500" x2="500" y1="0" y2="300"></line>
              </svg>
              <div className="absolute left-[510px] top-[110px] bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Nov 12, 2024</p>
                <p className="text-sm font-bold text-primary">Weight: 172.4 lbs</p>
                <p className="text-xs text-on-surface-variant">-1.2 lbs from last week</p>
              </div>
            </div>
            <div className="mt-8 flex justify-between border-t border-surface-container pt-6">
              <span className="text-xs font-['Manrope'] text-on-surface-variant">JUL</span>
              <span className="text-xs font-['Manrope'] text-on-surface-variant">AUG</span>
              <span className="text-xs font-['Manrope'] text-on-surface-variant">SEP</span>
              <span className="text-xs font-['Manrope'] text-on-surface-variant">OCT</span>
              <span className="text-xs font-['Manrope'] text-on-surface-variant font-bold text-on-surface">NOV</span>
              <span className="text-xs font-['Manrope'] text-on-surface-variant">DEC</span>
            </div>
          </div>
          <div className="bg-primary text-on-primary rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div>
              <span className="material-symbols-outlined text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>psychology</span>
              <h3 className="text-2xl font-['Noto_Serif'] mb-4 italic">The Curated Insight</h3>
              <p className="text-on-primary/80 leading-relaxed">Your consistency in "Workouts" has triggered a metabolic shift. We've observed a 4.2% increase in muscle density over the last 90 days. Keep the rhythm.</p>
            </div>
            <div className="mt-8">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold">+4.2%</span>
                <span className="text-sm mb-1 opacity-70">Density Score</span>
              </div>
              <div className="w-full bg-white/20 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-white h-full w-[65%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-['Noto_Serif'] text-on-surface italic">Measurements</h2>
            <button className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
              View Full History
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="bg-surface-container-low rounded-3xl p-6 hover:bg-surface-container-lowest transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>straighten</span>
              </div>
              <p className="text-xs font-['Manrope'] text-on-surface-variant uppercase tracking-wider mb-1">Waist</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl font-bold text-on-surface tracking-tight">31.5</span>
                <span className="text-xs text-on-surface-variant mb-1">in</span>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>trending_down</span>
                <span className="text-[10px] font-bold">-0.5 this month</span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-6 hover:bg-surface-container-lowest transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>accessibility_new</span>
              </div>
              <p className="text-xs font-['Manrope'] text-on-surface-variant uppercase tracking-wider mb-1">Chest</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl font-bold text-on-surface tracking-tight">42.8</span>
                <span className="text-xs text-on-surface-variant mb-1">in</span>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>trending_up</span>
                <span className="text-[10px] font-bold">+1.2 this year</span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-6 hover:bg-surface-container-lowest transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
              </div>
              <p className="text-xs font-['Manrope'] text-on-surface-variant uppercase tracking-wider mb-1">Biceps</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl font-bold text-on-surface tracking-tight">15.2</span>
                <span className="text-xs text-on-surface-variant mb-1">in</span>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>trending_flat</span>
                <span className="text-[10px] font-bold">Stable</span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-6 hover:bg-surface-container-lowest transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>monitor_weight</span>
              </div>
              <p className="text-xs font-['Manrope'] text-on-surface-variant uppercase tracking-wider mb-1">Body Fat</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl font-bold text-on-surface tracking-tight">14.2</span>
                <span className="text-xs text-on-surface-variant mb-1">%</span>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>trending_down</span>
                <span className="text-[10px] font-bold">-2.1% overall</span>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-6 hover:bg-surface-container-lowest transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>layers</span>
              </div>
              <p className="text-xs font-['Manrope'] text-on-surface-variant uppercase tracking-wider mb-1">Hips</p>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl font-bold text-on-surface tracking-tight">38.4</span>
                <span className="text-xs text-on-surface-variant mb-1">in</span>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>trending_down</span>
                <span className="text-[10px] font-bold">-0.2 this month</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-xl">
              <img alt="Visual Progress Reflection" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMCmlTpyt-gLJbO7PML6Ct9wTbpWCB-OGvxCh6Wg61cjpbk36l_ZmXRDysqYtgIClIFGuzeLw7fFt3EnE9oKBv5K-9ZR1WJq6NlHsPFWI1mP3VrpMoaoshSebHLgoVUaVGrZdBI-XHCrBmCxCRBur7ZG6CdjNwz34XqEe9Ue4pH_Bcb5AQmr1w4s-wxKG9P_KXwD82LyDjHhwEeofxpYYA8hS98VYY1_fTjeWMSVmYxnOYnxTklmbu_ON_Qh9eheupCRCUk4xRuqE" />
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Current Form Reflection</p>
                <h4 className="text-2xl font-['Noto_Serif'] text-white">"Form follows intention. Every repetition is a meditation."</h4>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-['Noto_Serif'] text-on-surface mb-6">Holistic Milestones</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>star</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-on-surface">50th Training Session</h4>
                      <p className="text-on-surface-variant">Completed on October 24. Your endurance has increased by 15% since session 1.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-container rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>eco</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-on-surface">Optimal Resting HR</h4>
                      <p className="text-on-surface-variant">Recorded 52bpm today. This is within the top 5% of your age demographic.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 opacity-40">
                    <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>lock</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-on-surface">Next Milestone: Symmetry Peak</h4>
                      <p className="text-on-surface-variant">8 more sessions to unlock advanced biomechanic insights.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full py-5 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">
                Export Performance Report (PDF)
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#eeeee8] dark:bg-[#121411] w-full mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-8 border-t border-[#30332e]/5 dark:border-[#eeeee8]/5">
          <p className="font-sans text-xs tracking-wider uppercase text-[#30332e]/50 dark:text-[#eeeee8]/50">© 2024 Symmetry Athletic. The Mindful Curator.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a className="font-sans text-xs tracking-wider uppercase text-[#30332e]/50 hover:text-[#44674d] transition-colors" href="#">Privacy Policy</a>
            <a className="font-sans text-xs tracking-wider uppercase text-[#30332e]/50 hover:text-[#44674d] transition-colors" href="#">Terms of Service</a>
            <a className="font-sans text-xs tracking-wider uppercase text-[#30332e]/50 hover:text-[#44674d] transition-colors" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
