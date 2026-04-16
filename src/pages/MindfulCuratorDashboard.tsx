import React from 'react';

export function MindfulCuratorDashboard() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f4]/80 dark:bg-[#30332e]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <div className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
          <div className="font-['Noto_Serif'] text-2xl italic tracking-tight text-[#30332e] dark:text-[#faf9f4]">MindfulCurator</div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="font-sans text-sm font-bold text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] pb-1 scale-102" href="#">Dashboard</a>
            <a className="font-sans text-sm font-medium text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors" href="#">Workouts</a>
            <a className="font-sans text-sm font-medium text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors" href="#">Nutrition</a>
            <a className="font-sans text-sm font-medium text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors" href="#">Progress</a>
          </div>
          <div className="flex items-center space-x-6">
            <span className="material-symbols-outlined text-[#44674d] dark:text-[#84A98C] cursor-pointer hover:opacity-80 transition-all" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
            <img alt="Athlete Profile Avatar" className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-high shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCExVmwYjDKjkMcS1yoAkfUR8vtNeTdz8J1jIBx2G8RbeyVkf9sJxuTIhQVvGlrJTsBN2U3yELP5BmrcuQSvbVfSspeWtpZ8fR-AffSZKzzzY303qhw0GDrHKVDCGQY5iklOJCkNiRRsws-XO3XiPmkDFlCg9Y7yc7cvmxlui7CXQgKKmh3FVcZjq0epXXrN140VE3_ZrvPxiwXJiDuUOVQAJkY2yAJ6ppMjhM2mXTXX8WlP8Dvo4DOVZwxOREF94o951OK89hHFWM" />
          </div>
        </div>
      </nav>
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <header className="mb-12">
          <h1 className="font-['Noto_Serif'] text-4xl md:text-5xl text-on-background font-bold tracking-tight mb-2">Welcome back, Sarah.</h1>
          <p className="text-on-surface-variant font-medium italic">Your sanctuary for progress and intentional living.</p>
        </header>
        <section className="mb-16">
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_rgba(48,51,46,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
              <img alt="Decorative soft focus plant" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB241OJJXqlgYAXFDOvTd6AkfEdTfy2ojcrH3PBJcaRJzsPmRfMzQzsxJaQc9yKw5HnkgcYHqwZUwCMPvTriVM9lMkreNm2Jijd0RmRFj6Gl3Ig7lCPIueKqizZJehRSvcshGlUze2jaBNISL8h-jg6imt0-PqyEUBUriCkXlGN0bR3GPR-gd6IAkkxSOYAF14Hb-YG984s0Wlykgymk6D6gqIJ0cYC1P4W3mDPQFmY735Ju7j-YWpD67UCdovB9utpa26b3YZiEf4" />
            </div>
            <div className="relative z-10">
              <h2 className="font-['Noto_Serif'] text-2xl text-on-background mb-10">Daily Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="flex flex-col items-center">
                  <div className="relative inline-flex items-center justify-center w-48 h-48">
                    <svg className="w-full h-full -rotate-90">
                      <circle className="text-primary-container/30" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                      <circle cx="96" cy="96" fill="transparent" r="80" stroke="#44674d" strokeDasharray="502.4" strokeDashoffset="125.6" strokeLinecap="round" strokeWidth="12"></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center bg-white/70 backdrop-blur-xl p-6 rounded-full shadow-inner">
                      <span className="material-symbols-outlined text-primary mb-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
                      <span className="text-2xl font-bold text-on-background">75%</span>
                    </div>
                  </div>
                  <span className="mt-6 font-['Manrope'] uppercase tracking-widest text-xs text-on-surface-variant">Workout Status</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative inline-flex items-center justify-center w-48 h-48">
                    <svg className="w-full h-full -rotate-90">
                      <circle className="text-secondary-container/30" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                      <circle cx="96" cy="96" fill="transparent" r="80" stroke="#44646e" strokeDasharray="502.4" strokeDashoffset="200.9" strokeLinecap="round" strokeWidth="12"></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center bg-white/70 backdrop-blur-xl p-6 rounded-full shadow-inner">
                      <span className="material-symbols-outlined text-secondary mb-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>restaurant</span>
                      <span className="text-2xl font-bold text-on-background">60%</span>
                    </div>
                  </div>
                  <span className="mt-6 font-['Manrope'] uppercase tracking-widest text-xs text-on-surface-variant">Calorie Intake</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative inline-flex items-center justify-center w-48 h-48">
                    <svg className="w-full h-full -rotate-90">
                      <circle className="text-secondary-container/20" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                      <circle cx="96" cy="96" fill="transparent" r="80" stroke="#87C5BC" strokeDasharray="502.4" strokeDashoffset="50.2" strokeLinecap="round" strokeWidth="12"></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center bg-white/70 backdrop-blur-xl p-6 rounded-full shadow-inner">
                      <span className="material-symbols-outlined text-[#87C5BC] mb-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>water_drop</span>
                      <span className="text-2xl font-bold text-on-background">90%</span>
                    </div>
                  </div>
                  <span className="mt-6 font-['Manrope'] uppercase tracking-widest text-xs text-on-surface-variant">Water Hydration</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden bg-surface-container-low rounded-[2rem] p-1 flex items-center transition-all duration-500 hover:scale-[1.01]">
            <div className="w-full bg-surface-container-lowest rounded-[1.9rem] p-8 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm">
                  <img alt="Upper Body Training" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3fEkCGjfHVrCMA1cokIGZDDhLPfOevZzuKd_dr9gzYWGjzClOaaxMOLPP7FFxZCs35GGhZpzxs0sfzHTM6-vr1bGB0r_bvUfbC1FXex6jri12xYmWDaJSk3SXm6N1LEvNGhCzhuL3IL-EEA55pxMsZoQsBURux0_gsLe90c-g10oQtmiEDveNcJIMveeiZH-DsQQuw-w8gt-7Fv3V3iVec3ec4FN1HvnXOLA0UNQHcbaEa1PW0bI9JMQ3fygpNEEdLBRSm8_IWSE" />
                </div>
                <div>
                  <p className="font-['Manrope'] text-xs uppercase tracking-widest text-primary mb-1">Upcoming Activity</p>
                  <h3 className="font-['Noto_Serif'] text-xl text-on-background">Today's Workout: Upper Body A</h3>
                  <p className="text-on-surface-variant text-sm mt-1">45 minutes • High Intensity</p>
                </div>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>play_arrow</span>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden bg-surface-container-low rounded-[2rem] p-1 flex items-center transition-all duration-500 hover:scale-[1.01]">
            <div className="w-full bg-surface-container-lowest rounded-[1.9rem] p-8 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm">
                  <img alt="Nutrition Bowl" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIYT50Km9Zwb_IL8bHzGowl7_MVlp6y65z3jvtHVGY_pmrXniH8LVdB7lJNg4ES5MIKVXb6wwASlyK9HnM-5vg8rB3_prTxsMVq8UpzP-kuuI_YORS1I9uoG_hiTb2xWOYAS6vFstTvuoWPd5x9Bz0K3mfw1vfhnan9oTPsy9hgB4bRtdVrldRDlYiEpDyk6Q_GQtV25gdGei8J5hVcRU8z-E1bN3zwKZEAP2YpISyklyd6mIP1hE8QgM60a8fmQTH6p5k_sBu5-o" />
                </div>
                <div>
                  <p className="font-['Manrope'] text-xs uppercase tracking-widest text-secondary mb-1">Planned Nutrition</p>
                  <h3 className="font-['Noto_Serif'] text-xl text-on-background">Next Meal: Quinoa Berry Bowl</h3>
                  <p className="text-on-surface-variant text-sm mt-1">420 kcal • Rich in Antioxidants</p>
                </div>
              </div>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>nutrition</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 mt-auto bg-[#eeeee8] dark:bg-[#252824]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full border-t border-[#30332e]/5">
          <div className="font-['Noto_Serif'] italic text-lg text-[#30332e] dark:text-[#faf9f4] mb-4 md:mb-0">Mindful Curator</div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a className="font-sans text-xs tracking-wide uppercase text-[#30332e]/50 dark:text-[#faf9f4]/50 hover:text-[#44674d] transition-colors duration-200" href="#">Privacy Policy</a>
            <a className="font-sans text-xs tracking-wide uppercase text-[#30332e]/50 dark:text-[#faf9f4]/50 hover:text-[#44674d] transition-colors duration-200" href="#">Terms of Service</a>
            <a className="font-sans text-xs tracking-wide uppercase text-[#30332e]/50 dark:text-[#faf9f4]/50 hover:text-[#44674d] transition-colors duration-200" href="#">English/Français</a>
          </div>
          <div className="font-sans text-xs tracking-wide uppercase text-[#30332e]/50 dark:text-[#faf9f4]/50">
            © 2024 Mindful Curator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
