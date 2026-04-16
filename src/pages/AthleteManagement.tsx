import React from 'react';

export function AthleteManagement() {
  return (
    <div className="text-on-surface selection:bg-primary/20 bg-[#fbf9f4] min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-[#fbf9f4]/60 dark:bg-stone-900/60 backdrop-blur-xl flex justify-between items-center px-6 py-4 shadow-[0_40px_40px_-15px_rgba(49,51,46,0.06)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shadow-sm border border-white/50">
            <img alt="User profile photo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_88PBDz2JLKHCmkaI4sLIEOvXTt3DM_aj6kIC21XeNkZrepRvDSz6DAL37iy6cD5HqU9_F66KPWoovMepRFULq-8YBILpTBj7b8LhqsbW9O-GeZDeEXrVMGwa8wTV3JAmCdXOOI0pkhoeMiCqUGt7MkhNQvT_-G8eo9DhmjbmYDQDWP4FS9cxf0coxca40_7egIopHdefEWmuzByAMnb7ZHGNvhyBy6J_uJOBK7xPS_xlUtHunhUvcaPw4Jx0pqT5x_QEuMbeyJI" />
          </div>
          <span className="text-2xl font-bold text-[#31332e] dark:text-[#fbf9f4] tracking-tight font-['Plus_Jakarta_Sans']">Sanctuary</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#31332e]/60 dark:text-[#fbf9f4]/60 hover:opacity-80 transition-opacity p-2 rounded-full active:scale-95 duration-200" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>notifications</button>
        </div>
      </header>
      <main className="pt-24 pb-32 px-6 max-w-md mx-auto space-y-12 min-h-screen">
        <section className="flex justify-center w-full">
          <div className="bg-surface-container-low p-1.5 rounded-full flex items-center w-full max-w-[280px] shadow-sm">
            <button className="flex-1 text-center py-2 px-4 rounded-full font-['Plus_Jakarta_Sans'] font-medium text-sm transition-all duration-300 text-[#31332e] opacity-70 hover:pl-2">
              English
            </button>
            <button className="flex-1 text-center py-2 px-4 rounded-full font-['Plus_Jakarta_Sans'] font-medium text-sm transition-all duration-300 bg-[#536443] text-[#fbf9f4] shadow-md flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>translate</span>
              العربية
            </button>
          </div>
        </section>
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold tracking-tight text-on-surface">Wellness Progress Hub</h1>
            <p className="text-on-surface-variant/60 text-sm font-medium tracking-wide">Tending to your growth</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square w-full max-w-[280px] mx-auto bg-surface-container-lowest rounded-xl p-8 flex items-center justify-center shadow-[0_40px_40px_-15px_rgba(49,51,46,0.04)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle className="text-surface-container-high" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="6"></circle>
                <circle className="text-primary" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeDasharray="283" strokeDashoffset="80" strokeLinecap="round" strokeWidth="6"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>fitness_center</span>
                <div className="font-['Plus_Jakarta_Sans'] text-4xl font-extrabold text-on-surface">72%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/60">Muscle Gain</div>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-[280px] mx-auto bg-surface-container-lowest rounded-xl p-8 flex items-center justify-center shadow-[0_40px_40px_-15px_rgba(49,51,46,0.04)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle className="text-surface-container-high" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="6"></circle>
                <circle className="text-secondary" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeDasharray="283" strokeDashoffset="140" strokeLinecap="round" strokeWidth="6"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-1">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>water_drop</span>
                <div className="font-['Plus_Jakarta_Sans'] text-4xl font-extrabold text-on-surface">1.8L</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/60">Hydration</div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold px-2">Focus Session</h2>
          <div className="bg-surface-container-low rounded-lg p-6 shadow-sm border border-white/40 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-on-surface">Barbell Squat</h3>
                <p className="text-sm text-on-surface-variant/70">Main compound movement</p>
              </div>
              <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container shadow-sm">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>exercise</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-full py-4 px-6 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary/70">Sets</span>
                <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-primary">4</span>
              </div>
              <div className="bg-primary/10 rounded-full py-4 px-6 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary/70">Reps</span>
                <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-primary">8-12</span>
              </div>
            </div>
            <div className="relative h-48 w-full rounded-xl overflow-hidden mt-2">
              <img alt="Barbell Squat exercise visual" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeum7U81d1-iM7Vv4wsMTz-al72Y3FpHl0yokXRaVL2mwmbX3HIlhTO1ToI3nOLKnSmSUkf3Qfur2PcjAUfQmF9TfqOUV9gqAeby7Z5qT8LOYID5jRIKZKNL7YbcqkaXsbD43qymNKFD4Rvzzs55cMpO7IJsYcTkxe-XNee7QjEFTNlia1KQAvHcPXNc57mZ-sLdKnMHaTLobKYEJbMuikAR0Prdy1nmKgpY6UEWceLhFiBE7qktSJKrJfuLuk2BOM_SWQglyS4B8" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <button className="w-full bg-primary text-on-primary py-4 rounded-full font-['Plus_Jakarta_Sans'] font-bold tracking-wide shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
              Start Exercise
            </button>
          </div>
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-[#fbf9f4]/60 dark:bg-stone-900/60 backdrop-blur-xl rounded-t-[2rem] z-50 shadow-[0_-20px_40px_-15px_rgba(49,51,46,0.04)]">
        <div className="flex flex-col items-center justify-center bg-[#536443]/10 dark:bg-[#9CAF88]/20 text-[#536443] dark:text-[#9CAF88] rounded-full px-6 py-2 transform translate-y-[-2px] duration-300">
          <span className="material-symbols-outlined" data-weight="fill" style={{ fontVariationSettings: "'wght' 200, 'FILL' 1" }}>dashboard</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest font-semibold mt-1">Dashboard</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#31332e]/50 dark:text-[#fbf9f4]/50 px-6 py-2 hover:bg-[#536443]/5 transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>fitness_center</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest font-semibold mt-1">Workouts</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#31332e]/50 dark:text-[#fbf9f4]/50 px-6 py-2 hover:bg-[#536443]/5 transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>restaurant</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest font-semibold mt-1">Nutrition</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#31332e]/50 dark:text-[#fbf9f4]/50 px-6 py-2 hover:bg-[#536443]/5 transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}>insights</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest font-semibold mt-1">Progress</span>
        </div>
      </nav>
      <div className="fixed inset-0 pointer-events-none opacity-20 z-[-1]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #536443 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    </div>
  );
}
