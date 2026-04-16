import React from 'react';

export function NutritionArchitect() {
  return (
    <div className="bg-surface text-on-background font-body min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      <header className="w-full top-0 sticky z-50 bg-[#faf9f4] dark:bg-[#1a1c18]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-['Noto_Serif'] font-bold text-[#44674d] dark:text-[#84A98C]">Nutrition Architect</div>
          <nav className="hidden md:flex gap-8 items-center">
            <a className="font-['Noto_Serif'] font-medium tracking-tight text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-colors duration-300" href="#">Dashboard</a>
            <a className="font-['Noto_Serif'] font-medium tracking-tight text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-colors duration-300" href="#">Workouts</a>
            <a className="font-['Noto_Serif'] font-medium tracking-tight text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] pb-1" href="#">Nutrition</a>
            <a className="font-['Noto_Serif'] font-medium tracking-tight text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-colors duration-300" href="#">Progress</a>
          </nav>
          <div className="flex gap-4 items-center">
            <button className="p-2 rounded-full hover:bg-[#eeeee8]/50 transition-colors duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
            </button>
            <button className="p-2 rounded-full hover:bg-[#eeeee8]/50 transition-colors duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>account_circle</span>
            </button>
          </div>
        </div>
        <div className="bg-[#eeeee8] dark:bg-[#30332e] h-[1px] w-full"></div>
      </header>
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-16">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-['Noto_Serif'] font-bold text-on-background mb-4 tracking-tight leading-tight">Craft Your Vitality.</h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-light">Architect a balanced foundation for your performance. Precision-engineered nutrition for the mindful athlete.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <section className="lg:col-span-7 space-y-8">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-outline-variant/10">
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h2 className="text-2xl font-['Noto_Serif'] font-semibold mb-1">Macro Allocation</h2>
                  <p className="text-on-surface-variant text-sm">Define your fuel distribution</p>
                </div>
                <span className="text-primary font-['Noto_Serif'] font-bold text-3xl tracking-tighter">100%</span>
              </div>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="relative w-56 h-56 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container" cx="112" cy="112" fill="transparent" r="90" stroke="currentColor" strokeWidth="14"></circle>
                    <circle className="text-primary transition-all duration-500" cx="112" cy="112" fill="transparent" r="90" stroke="currentColor" strokeDasharray="565.48" strokeDashoffset="339.29" strokeWidth="14"></circle>
                    <circle className="text-secondary rotate-[144deg] transition-all duration-500 origin-center" cx="112" cy="112" fill="transparent" r="90" stroke="currentColor" strokeDasharray="565.48" strokeDashoffset="452.38" strokeWidth="14"></circle>
                    <circle className="text-error rotate-[252deg] transition-all duration-500 origin-center" cx="112" cy="112" fill="transparent" r="90" stroke="currentColor" strokeDasharray="565.48" strokeDashoffset="508.93" strokeWidth="14"></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-sm font-['Manrope'] text-on-surface-variant uppercase tracking-widest">Total</span>
                    <span className="text-3xl font-['Noto_Serif'] font-bold text-on-background">2,450</span>
                    <span className="text-xs font-['Manrope'] text-on-surface-variant">kcal</span>
                  </div>
                </div>
                <div className="flex-grow w-full space-y-8">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-primary">Protein</span>
                      <span className="font-bold">40% <span className="font-normal text-on-surface-variant ml-2">(245g)</span></span>
                    </div>
                    <input className="w-full text-primary h-1.5 bg-surface-container rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-current [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm" type="range" defaultValue="40" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-secondary">Carbs</span>
                      <span className="font-bold">40% <span className="font-normal text-on-surface-variant ml-2">(245g)</span></span>
                    </div>
                    <input className="w-full text-secondary h-1.5 bg-surface-container rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-current [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm" type="range" defaultValue="40" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-error">Fats</span>
                      <span className="font-bold">20% <span className="font-normal text-on-surface-variant ml-2">(54g)</span></span>
                    </div>
                    <input className="w-full text-error h-1.5 bg-surface-container rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-current [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm" type="range" defaultValue="20" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-outline-variant/10">
              <h2 className="text-2xl font-['Noto_Serif'] font-semibold mb-6">Meal Template Builder</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-['Manrope'] text-on-surface-variant ml-2">Template Name</label>
                  <input className="w-full bg-surface-container-high border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50" placeholder="e.g. Hypertrophy Base" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-['Manrope'] text-on-surface-variant ml-2">Target Calories</label>
                  <input className="w-full bg-surface-container-high border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50" placeholder="2450" type="number" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-['Manrope'] text-on-surface-variant ml-2">Meal Frequency</label>
                  <select className="w-full bg-surface-container-high border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                    <option>3 Meals Per Day</option>
                    <option defaultValue="4 Meals Per Day">4 Meals Per Day</option>
                    <option>5 Meals Per Day</option>
                    <option>Intermittent Fasting (2 Meals)</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-primary text-white font-semibold py-3 px-8 rounded-full hover:scale-102 transition-transform duration-200 shadow-sm shadow-primary/20">
                    Apply Template
                  </button>
                </div>
              </div>
            </div>
          </section>
          <aside className="lg:col-span-5">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-outline-variant/10 sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-['Noto_Serif'] font-semibold">Daily Schedule</h2>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>calendar_today</span>
              </div>
              <div className="relative pl-8 border-l-2 border-surface-container space-y-10">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
                  <div className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-['Noto_Serif'] font-bold text-lg">Breakfast</h3>
                        <p className="text-sm text-on-surface-variant">07:30 AM • Metabolism Ignite</p>
                      </div>
                      <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-['Manrope']">612 kcal</span>
                    </div>
                    <div className="flex gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-xs font-medium">60g P</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-xs font-medium">60g C</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-error"></div>
                        <span className="text-xs font-medium">13g F</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-surface-container ring-4 ring-white group-hover:bg-primary transition-colors"></div>
                  <div className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-['Noto_Serif'] font-bold text-lg">Lunch</h3>
                        <p className="text-sm text-on-surface-variant">01:00 PM • Sustained Energy</p>
                      </div>
                      <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-['Manrope']">816 kcal</span>
                    </div>
                    <div className="flex gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-xs font-medium">82g P</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-xs font-medium">82g C</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-error"></div>
                        <span className="text-xs font-medium">18g F</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-surface-container ring-4 ring-white"></div>
                  <div className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-['Noto_Serif'] font-bold text-lg">Dinner</h3>
                        <p className="text-sm text-on-surface-variant">07:30 PM • Recovery Focus</p>
                      </div>
                      <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-['Manrope']">1,022 kcal</span>
                    </div>
                    <div className="flex gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-xs font-medium">103g P</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-xs font-medium">103g C</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-error"></div>
                        <span className="text-xs font-medium">23g F</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-surface-container">
                <div className="bg-primary-container/30 rounded-2xl p-4 flex gap-4 items-center">
                  <div className="bg-white p-2 rounded-xl shadow-sm">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>lightbulb</span>
                  </div>
                  <p className="text-xs text-on-primary-container leading-relaxed">
                    <strong className="block">Architect's Tip:</strong>
                    Increasing protein by 5% tonight may improve next-day muscle glycogen recovery based on your morning intensity.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <footer className="w-full mt-auto py-12 bg-[#eeeee8] dark:bg-[#1a1c18]">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
          <div className="font-['Noto_Serif'] text-lg text-[#30332e] dark:text-[#faf9f4]">Nutrition Architect</div>
          <div className="flex gap-6">
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Support</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Contact</a>
          </div>
          <div className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60">© 2024 Nutrition Architect. Holistic Wellness Systems.</div>
        </div>
      </footer>
    </div>
  );
}
