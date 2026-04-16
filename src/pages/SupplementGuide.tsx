import React from 'react';

export function SupplementGuide() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
      <header className="bg-[#faf9f4]/80 dark:bg-stone-950/80 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <nav className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-['Noto_Serif'] font-bold tracking-tight text-stone-800 dark:text-stone-50">Symmetry Athletic</div>
          <div className="hidden md:flex items-center gap-8">
            <a className="font-['Noto_Serif'] font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#">Training</a>
            <a className="font-['Noto_Serif'] font-medium text-emerald-800 dark:text-emerald-400 border-b-2 border-emerald-800 dark:border-emerald-400 pb-1" href="#">Nutrition</a>
            <a className="font-['Noto_Serif'] font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#">Recovery</a>
            <a className="font-['Noto_Serif'] font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors" href="#">Journal</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-stone-800 dark:text-stone-200 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 p-2 rounded-full transition-all duration-300" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>shopping_bag</button>
            <button className="material-symbols-outlined text-stone-800 dark:text-stone-200 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 p-2 rounded-full transition-all duration-300" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>account_circle</button>
          </div>
        </nav>
        <div className="bg-[#eeeee8] dark:bg-stone-900 h-[1px]"></div>
      </header>
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <section className="mb-16 text-center">
          <h1 className="font-['Noto_Serif'] text-5xl md:text-6xl text-on-background mb-4 font-bold tracking-tight">Supplement Guide</h1>
          <p className="font-['Manrope'] text-secondary text-lg max-w-2xl mx-auto">A curated daily protocol for optimal performance and metabolic health. Mindful integration for the high-performance athlete.</p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-['Noto_Serif'] text-2xl font-semibold">Daily Protocol</h2>
              <span className="text-sm font-medium px-4 py-1.5 bg-surface-container rounded-full text-secondary">Today: March 14, 2024</span>
            </div>
            <div className="p-8 rounded-[2rem] bg-primary-container/30 border border-white/20 bg-white/70 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>light_mode</span>
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-primary-fixed">Morning Ritual</h3>
              </div>
              <div className="space-y-4">
                <div className="group flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                  <div className="flex items-center gap-5">
                    <button className="w-7 h-7 rounded-lg border-2 border-primary-dim flex items-center justify-center group-hover:bg-primary-container/50 transition-colors">
                      <span className="material-symbols-outlined text-sm text-primary-dim opacity-0 group-hover:opacity-100" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check</span>
                    </button>
                    <div>
                      <h4 className="font-['Noto_Serif'] font-bold text-lg">Creatine Monohydrate</h4>
                      <p className="text-sm text-outline">5g • Post-breakfast with water</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold uppercase tracking-widest text-outline mb-1">Time</span>
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>wb_sunny</span>
                  </div>
                </div>
                <div className="group flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                  <div className="flex items-center gap-5">
                    <button className="w-7 h-7 rounded-lg border-2 border-primary-dim flex items-center justify-center group-hover:bg-primary-container/50 transition-colors">
                      <span className="material-symbols-outlined text-sm text-primary-dim opacity-0 group-hover:opacity-100" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check</span>
                    </button>
                    <div>
                      <h4 className="font-['Noto_Serif'] font-bold text-lg">Vitamin D3 + K2</h4>
                      <p className="text-sm text-outline">5000 IU • Take with dietary fat</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold uppercase tracking-widest text-outline mb-1">Time</span>
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>wb_sunny</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-[2rem] bg-secondary-container/30 border border-white/20 bg-white/70 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>sunny</span>
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-secondary-fixed">Mid-Day Focus</h3>
              </div>
              <div className="space-y-4">
                <div className="group flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                  <div className="flex items-center gap-5">
                    <button className="w-7 h-7 rounded-lg border-2 border-secondary-dim flex items-center justify-center group-hover:bg-secondary-container/50 transition-colors">
                      <span className="material-symbols-outlined text-sm text-secondary-dim opacity-0 group-hover:opacity-100" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check</span>
                    </button>
                    <div>
                      <h4 className="font-['Noto_Serif'] font-bold text-lg">Omega-3 Fish Oil</h4>
                      <p className="text-sm text-outline">2000mg EPA/DHA • With Lunch</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold uppercase tracking-widest text-outline mb-1">Time</span>
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>sunny</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-[2rem] bg-[#f2f0f7] dark:bg-stone-800/30 border border-white/20 bg-white/70 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-stone-500 text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>dark_mode</span>
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-stone-800">Evening Recovery</h3>
              </div>
              <div className="space-y-4">
                <div className="group flex items-center justify-between p-5 bg-surface-container-lowest rounded-2xl hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                  <div className="flex items-center gap-5">
                    <button className="w-7 h-7 rounded-lg border-2 border-stone-400 flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                      <span className="material-symbols-outlined text-sm text-stone-400 opacity-0 group-hover:opacity-100" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check</span>
                    </button>
                    <div>
                      <h4 className="font-['Noto_Serif'] font-bold text-lg">Magnesium Bisglycinate</h4>
                      <p className="text-sm text-outline">400mg • 60 mins before sleep</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold uppercase tracking-widest text-outline mb-1">Time</span>
                    <span className="material-symbols-outlined text-stone-500" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>bedtime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 space-y-8">
            <div className="p-8 rounded-[2rem] bg-surface-container-lowest shadow-[0_10px_40px_rgba(48,51,46,0.06)] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-['Noto_Serif'] text-xl font-bold mb-6">Daily Adherence</h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle className="text-surface-container" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
                      <circle className="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="110" strokeWidth="8"></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-3xl font-bold">75%</span>
                      <span className="text-xs text-outline font-bold uppercase tracking-widest">Complete</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-center text-outline">You're 1 supplement away from your daily goal.</p>
              </div>
            </div>
            <div className="p-8 rounded-[2rem] bg-primary text-on-primary">
              <span className="material-symbols-outlined mb-4 text-4xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>lightbulb</span>
              <h3 className="font-['Noto_Serif'] text-xl font-bold mb-3">Clinician's Note</h3>
              <p className="font-['Manrope'] text-on-primary/80 leading-relaxed">Ensure Vitamin D is taken with your largest meal of the day to maximize absorption efficiency by up to 50%.</p>
            </div>
            <div className="group relative rounded-[2rem] aspect-[4/5] overflow-hidden">
              <img alt="Supplements" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrnOTvP_JUG0IST3iYfQM-CQ0k4fa9R4mePWWiU8FE3qwsTdh_Z5izyUWiHjo6qm1GEP3PV5Vy_IbDI45L-xGz4K9lf2hGwhQZA16KZi7nX-HWTtJVv-ohdXPSql3dU-KJHwBpsq6ODoxkdwMR68YxwBjnRW8dX-2tI0NzXqY5CmaMmWWvKmeriZs1R7YNFBZ4HwTvc_CfLcSu5mcldp78U8xaGvsBP_7IfwjX0pq07Fn4ZVUTkAAT376nKtsF8Co_vsgqbTyuiIE" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex flex-col justify-end p-8">
                <p className="text-white font-['Noto_Serif'] text-lg italic">"Consistency is the bedrock of metabolic optimization."</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full rounded-t-[2rem] mt-auto bg-[#eeeee8] dark:bg-stone-900">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-screen-2xl mx-auto">
          <div className="font-['Noto_Serif'] italic text-stone-800 dark:text-stone-200 text-xl mb-6 md:mb-0">Symmetry Athletic</div>
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Consultation</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" href="#">Sustainability</a>
          </div>
          <div className="font-['Manrope'] text-sm tracking-wide text-stone-600 dark:text-stone-400">
            © 2024 Symmetry Athletic. The Mindful Curator.
          </div>
        </div>
      </footer>
    </div>
  );
}
