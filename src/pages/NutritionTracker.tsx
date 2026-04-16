import React from 'react';

export function NutritionTracker() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container flex min-h-screen">
      <aside className="h-screen w-64 rounded-r-[2rem] sticky left-0 top-0 bg-[#fbf9f4] dark:bg-stone-950 flex flex-col py-12 justify-between shadow-[40px_0_60px_-15px_rgba(49,51,46,0.06)] z-50">
        <div className="px-8">
          <div className="mb-12">
            <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#31332e] dark:text-stone-200">Sanctuary</h1>
            <p className="font-['Manrope'] text-sm tracking-wide text-on-surface-variant opacity-70">Holistic Growth</p>
          </div>
          <nav className="space-y-2">
            <a className="flex items-center gap-4 text-[#31332e] dark:text-stone-400 px-6 py-3 my-1 hover:bg-[#e3e3db] dark:hover:bg-stone-800 transition-all duration-300 group" href="#">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>dashboard</span>
              <span className="font-medium">Dashboard</span>
            </a>
            <a className="flex items-center gap-4 text-[#31332e] dark:text-stone-400 px-6 py-3 my-1 hover:bg-[#e3e3db] dark:hover:bg-stone-800 transition-all duration-300 group" href="#">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
              <span className="font-medium">Workouts</span>
            </a>
            <a className="flex items-center gap-4 bg-[#536443] text-white rounded-full px-6 py-3 my-1 scale-95 active:scale-90 transition-transform" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>nutrition</span>
              <span className="font-medium">Nutrition</span>
            </a>
            <a className="flex items-center gap-4 text-[#31332e] dark:text-stone-400 px-6 py-3 my-1 hover:bg-[#e3e3db] dark:hover:bg-stone-800 transition-all duration-300 group" href="#">
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>trending_up</span>
              <span className="font-medium">Progress</span>
            </a>
          </nav>
        </div>
        <div className="px-8">
          <div className="flex items-center gap-4 text-[#31332e] dark:text-stone-400 px-6 py-3 my-1 hover:bg-[#e3e3db] dark:hover:bg-stone-800 transition-all duration-300 cursor-pointer rounded-full">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>language</span>
            <span className="text-sm">Language: EN/AR</span>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
              <img alt="Athlete Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtPGkrfiONz80uzsBMmrcVvm6wSp2CdJMZ5Kjg0L1NaAGSU9vXxHjuR9R-fejLRFGySKaoMldQf23F9JfnKHF16CQ1ne2CaLze9DjAja4fuyq7niHhqBhL_AbrjRqwms51sbT4QdNbRvG2jfES1u6ENekiAWlxeNvKHg0XsLU6TjJAguNvWpGUCnZhY5zGI1gP2gwqzbW--voE4S70bKWKxffFxntq4v5opThWBxjSPRZ0boL1TnI0YNTcchO1Vad5YPhtjOwnnd4" />
            </div>
            <div>
              <p className="text-sm font-bold">Alex Thorne</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50">Pro Athlete</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 min-h-screen relative overflow-hidden">
        <header className="w-full h-20 sticky top-0 z-40 bg-[#fbf9f4]/60 backdrop-blur-xl flex justify-end items-center px-12 gap-6">
          <div className="flex items-center gap-6">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[#31332e]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[#31332e]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</span>
            </button>
          </div>
        </header>
        <div className="px-12 py-8 max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-['Plus_Jakarta_Sans'] text-5xl font-extrabold text-on-surface leading-tight tracking-tight mb-4">Mindful Nutrition Tracker</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-80">Fuel your performance with intention. Every meal is a step toward your next peak. Monitoring your macro-balance for optimal recovery.</p>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-full px-6 py-3">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>calendar_today</span>
              <span className="font-semibold text-sm">October 24, 2023</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(49,51,46,0.06)] flex flex-col items-center group transition-all duration-500 hover:-translate-y-1">
              <div className="relative w-40 h-40 mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                  <circle className="text-primary stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-on-surface">75%</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">Goal</span>
                </div>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-primary mb-1">Protein</h3>
              <p className="text-sm text-on-surface-variant">142g / 190g</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] py-1 px-3 rounded-full">
                High Bioavailability
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(49,51,46,0.06)] flex flex-col items-center group transition-all duration-500 hover:-translate-y-1">
              <div className="relative w-40 h-40 mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                  <circle className="text-secondary stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeDasharray="251.2" strokeDashoffset="100.5" strokeLinecap="round" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-on-surface">60%</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">Goal</span>
                </div>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-secondary mb-1">Carbs</h3>
              <p className="text-sm text-on-surface-variant">180g / 300g</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-white text-[10px] py-1 px-3 rounded-full">
                Complex Sources
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(49,51,46,0.06)] flex flex-col items-center group transition-all duration-500 hover:-translate-y-1">
              <div className="relative w-40 h-40 mb-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                  <circle className="text-error-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeDasharray="251.2" strokeDashoffset="188.4" strokeLinecap="round" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-on-surface">25%</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">Goal</span>
                </div>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-error-container mb-1">Fats</h3>
              <p className="text-sm text-on-surface-variant">18g / 70g</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity bg-error-container text-white text-[10px] py-1 px-3 rounded-full">
                Healthy Lipids
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold">Daily Log</h3>
            <button className="text-primary font-bold flex items-center gap-2 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add_circle</span>
              <span>Add Meal</span>
            </button>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container-low p-6 rounded-lg flex items-center justify-between group transition-all hover:bg-surface-container-high">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img alt="Healthy Breakfast Bowl" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0fkA-nVnq9S7NiBGPyBXIQrO_bY2CMlWX_nYqpbjbgMlbhBaZjtP506yA8P70znpwZNap3jZRKkTj1p5bgF3-0JXii8UAxmCW0kn7BULD3J_qWYnJV9JjMZD-bDiyXNYl-0z0JRy0MU183F_3hiulwhwPhIvoCixxLTNKrSlUNqfRBROj7exSGHb1j-86adc3511RfTMqwrrNoy0LbBMP7_oQogE2LlfLV_-M5zrfNKDexAvQ9qVAsZ5acYHb_AOwcFpAfA8xnPc" />
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-1">Breakfast</h4>
                  <div className="flex items-center gap-4 text-xs text-on-surface-variant font-medium uppercase tracking-widest opacity-70">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>schedule</span> 08:30 AM</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>restaurant</span> Quinoa Berry Bowl</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-12 text-right">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-on-surface">420</span>
                  <span className="text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Cals</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">28g</span>
                  <span className="text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Protein</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-secondary">54g</span>
                  <span className="text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Carbs</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg flex items-center justify-between group transition-all hover:bg-surface-container-high">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img alt="Grilled Salmon Salad" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQzfz1AH1orTTvew85aygNH1OPRf8Vf4WUrxgSot__hc9K4dJjCD1SOte1_pfusNR5MO0PW5IAi3DGFGRc9vbVrXqe4TDwonCxbETNYupGipANGj84H9J-Z-UC6lqKTqGgdRJIT3M_ZaiOLmY1iCKnZ4TpyhWlCssn8jhNKFV84Or1or0N0o_ujrGPYpTiGndBWOvTOz3eb2xcJ5I6mESmmLCqc2IM449M68rdAsevUs5VZz5LC-A_hksrI_tF3qgJ8Tze1UzCQTc" />
                </div>
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-1">Lunch</h4>
                  <div className="flex items-center gap-4 text-xs text-on-surface-variant font-medium uppercase tracking-widest opacity-70">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>schedule</span> 01:15 PM</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>restaurant</span> Citrus Salmon Salad</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-12 text-right">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-on-surface">580</span>
                  <span className="text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Cals</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">45g</span>
                  <span className="text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Protein</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-secondary">32g</span>
                  <span className="text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Carbs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 p-12 bg-primary/5 rounded-xl border border-primary/10 flex items-center gap-8 relative overflow-hidden group">
            <div className="relative z-10">
              <h5 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-primary mb-2">Did you know?</h5>
              <p className="text-on-surface-variant max-w-lg">Consistency in protein intake within 2 hours of post-training windows can significantly improve muscle synthesis and overall recovery time.</p>
            </div>
            <span className="material-symbols-outlined text-8xl text-primary/10 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-700" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>tips_and_updates</span>
          </div>
        </div>
      </main>
    </div>
  );
}
