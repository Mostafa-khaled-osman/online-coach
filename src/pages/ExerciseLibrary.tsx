import React from 'react';

export function ExerciseLibrary() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#faf9f4] dark:bg-[#1a1c18] border-b border-transparent">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-['Noto_Serif'] italic text-[#44674d] dark:text-[#84a98c]">Symmetry Athletic</span>
            <div className="hidden md:flex gap-8 items-center">
              <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 font-medium hover:text-[#44674d] dark:hover:text-[#84a98c] transition-colors duration-300" href="#">Programs</a>
              <a className="text-[#44674d] dark:text-[#84a98c] border-b-2 border-[#44674d] dark:border-[#84a98c] pb-1 font-medium hover:text-[#44674d] dark:hover:text-[#84a98c] transition-colors duration-300" href="#">Library</a>
              <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 font-medium hover:text-[#44674d] dark:hover:text-[#84a98c] transition-colors duration-300" href="#">Community</a>
              <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 font-medium hover:text-[#44674d] dark:hover:text-[#84a98c] transition-colors duration-300" href="#">Wellness</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-full w-64 group focus-within:bg-surface-container-lowest transition-all border border-transparent focus-within:border-primary/20">
              <span className="material-symbols-outlined text-on-surface-variant mr-2" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full" placeholder="Search exercises..." type="text" />
            </div>
            <div className="flex items-center gap-4">
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</button>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</button>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-highest">
                <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDiwdUIFJaO8tToPAjkTsa7ibFhWsM8C-j9dLw8BMXGrrwcZUpt4y7jLBMACKZW0blU1jJQrefHQiO-uuVElITw_HrlXmcGeWwX0Clt18DJwAZ5Yn30Pg-WSVKCVGuOTxsBP02ABKRtGgMAqj_TnhBPcrlEG0vQwQ9nr1A6JoJ8XqLzM-_Zu0LwpFCqEpnl2-kCSZVnlWXHTFBJPDPwd5h6Mzq_XEihM7mjQwBrAnRsWd_tU2mWDm81c8xsa6fO2OcqPHqrewBkxU" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#eeeee8] dark:bg-[#30332e] h-[1px] w-full"></div>
      </nav>
      <aside className="fixed left-0 top-0 h-full flex flex-col py-8 z-40 bg-[#faf9f4] dark:bg-[#1a1c18] border-r border-[#eeeee8] dark:border-[#30332e] w-64 hidden md:flex mt-[73px]">
        <div className="px-6 mb-10">
          <h3 className="font-['Noto_Serif'] text-lg text-[#30332e]">The Curator</h3>
          <p className="font-sans uppercase tracking-widest text-[11px] text-on-surface-variant">Elite Wellness</p>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          <a className="flex items-center gap-4 text-[#30332e]/70 dark:text-[#faf9f4]/70 py-3 px-6 hover:bg-[#eeeee8]/50 dark:hover:bg-[#30332e]/50 transition-all" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>dashboard</span>
            <span className="font-sans uppercase tracking-widest text-[11px]">Dashboard</span>
          </a>
          <a className="flex items-center gap-4 bg-[#eeeee8] dark:bg-[#30332e] text-[#44674d] dark:text-[#84a98c] rounded-r-full py-3 px-6 mr-4 translate-x-1 transition-transform" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
            <span className="font-sans uppercase tracking-widest text-[11px]">Exercises</span>
          </a>
          <a className="flex items-center gap-4 text-[#30332e]/70 dark:text-[#faf9f4]/70 py-3 px-6 hover:bg-[#eeeee8]/50 dark:hover:bg-[#30332e]/50 transition-all" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>restaurant_menu</span>
            <span className="font-sans uppercase tracking-widest text-[11px]">Nutrition</span>
          </a>
          <a className="flex items-center gap-4 text-[#30332e]/70 dark:text-[#faf9f4]/70 py-3 px-6 hover:bg-[#eeeee8]/50 dark:hover:bg-[#30332e]/50 transition-all" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>self_improvement</span>
            <span className="font-sans uppercase tracking-widest text-[11px]">Mindfulness</span>
          </a>
          <a className="flex items-center gap-4 text-[#30332e]/70 dark:text-[#faf9f4]/70 py-3 px-6 hover:bg-[#eeeee8]/50 dark:hover:bg-[#30332e]/50 transition-all" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>insights</span>
            <span className="font-sans uppercase tracking-widest text-[11px]">Progress</span>
          </a>
        </nav>
        <div className="mt-auto px-6 pt-4 flex flex-col gap-4">
          <button className="w-full bg-primary text-on-primary py-3 px-6 rounded-xl font-medium shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all">
            Start Workout
          </button>
          <a className="flex items-center gap-4 text-[#30332e]/70 dark:text-[#faf9f4]/70 py-3 transition-all hover:text-primary" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>help_outline</span>
            <span className="font-sans uppercase tracking-widest text-[11px]">Support</span>
          </a>
        </div>
      </aside>
      <main className="md:ml-64 pt-24 pb-12 px-4 md:px-10 max-w-7xl">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-['Noto_Serif'] text-4xl text-on-surface mb-2">Exercise Library</h1>
              <p className="text-on-surface-variant max-w-lg">Master your form with our curated collection of elite athletic movements, designed for precision and performance.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-surface-container-low text-on-surface py-2.5 px-6 rounded-full font-medium flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>filter_list</span>
                All Levels
              </button>
              <button className="bg-primary text-on-primary py-2.5 px-6 rounded-full font-medium flex items-center gap-2 hover:bg-primary-dim transition-colors">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>grid_view</span>
                Collection
              </button>
            </div>
          </div>
        </header>
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6">Muscle Groups</h4>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center justify-between group cursor-pointer py-2">
                    <span className="text-primary font-semibold">All Exercises</span>
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </label>
                  <label className="flex items-center justify-between group cursor-pointer py-2 text-on-surface-variant hover:text-on-surface transition-colors">
                    <span>Chest</span>
                    <span className="text-xs opacity-40">12</span>
                  </label>
                  <label className="flex items-center justify-between group cursor-pointer py-2 text-on-surface-variant hover:text-on-surface transition-colors">
                    <span>Back</span>
                    <span className="text-xs opacity-40">18</span>
                  </label>
                  <label className="flex items-center justify-between group cursor-pointer py-2 text-on-surface-variant hover:text-on-surface transition-colors">
                    <span>Legs</span>
                    <span className="text-xs opacity-40">24</span>
                  </label>
                  <label className="flex items-center justify-between group cursor-pointer py-2 text-on-surface-variant hover:text-on-surface transition-colors">
                    <span>Core</span>
                    <span className="text-xs opacity-40">15</span>
                  </label>
                  <label className="flex items-center justify-between group cursor-pointer py-2 text-on-surface-variant hover:text-on-surface transition-colors">
                    <span>Shoulders</span>
                    <span className="text-xs opacity-40">10</span>
                  </label>
                </div>
              </div>
              <div className="bg-secondary-container/30 p-6 rounded-3xl border border-secondary-container/50">
                <h4 className="font-['Noto_Serif'] text-lg text-on-secondary-container mb-2">Weekly Goal</h4>
                <p className="text-sm text-on-secondary-container/70 mb-4">You've mastered 4 new movements this week.</p>
                <div className="relative w-20 h-20 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path className="text-secondary-container/40 stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                    <path className="text-secondary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-on-secondary-container">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="mb-8 relative group">
              <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-50 group-focus-within:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</span>
              <input className="w-full bg-surface-container-low border-none rounded-2xl py-5 pl-16 pr-6 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest shadow-sm transition-all text-on-surface placeholder:text-on-surface-variant/40" placeholder="Find by name, equipment or goal..." type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] hover:scale-[1.01] transition-transform duration-300">
                <div className="relative aspect-[4/3] group cursor-pointer overflow-hidden">
                  <img alt="Squat exercise" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcDjCFaEWIudP9RZYK7Xe7VuX7JbEpAsYx4_C6I4Tfa3LJdLo6aBMA80Zk4dK6ao5AA2D9oz59K8dsXMr9kAcj6mRwtvso1T1WDfuAYJP4S_y9wsJF2n-tAQA-fYP08iD70B5CpEPLLNdUm2uki0SG-XNE49zKs8OIhySQe0Mi8xsBqWuhbk2PxfUE3p2BawCV8rK-JSiaMryhIFnkbxVHa0ntXkpQ_04OdXVtT2aYn9jgbncwmsv8fGADc9KNAL9Cfxt2Rw0Au5A" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg transition-all group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-['Noto_Serif'] text-xl text-on-surface mb-3">Barbell Squats</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Legs</span>
                    <span className="bg-secondary-container/30 text-secondary text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>timer</span>
                      <span className="text-xs font-medium text-on-surface-variant">3-5 mins</span>
                    </div>
                    <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Guide</button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] hover:scale-[1.01] transition-transform duration-300">
                <div className="relative aspect-[4/3] group cursor-pointer overflow-hidden">
                  <img alt="Deadlift exercise" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA6HeW3p89f8InLyKJIwOGgyb1xujH79GeIHtW44UHx4cLG8GEEHUOPirO5OM6Mn9JU7Ft9_ASFBdTcRixRyB7XZX6PDFNb2pWBBM7sci9OKOfKdxhdo5W3yydvn3c20wT3QdYkMF-MYSO_yEETqDFbOT9mPlwraygzBdMTreLbHDuiLW0lYPFwS-6O0xwiCQ3F4aq85YlnTdEsHPjTFObTzjpyXUy4XKUWws4Dc9yCiVOpUO7XwqMqJ7VmRPDl_JuGEC_P1HKf8o" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg transition-all group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-['Noto_Serif'] text-xl text-on-surface mb-3">Deadlifts</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Back / Legs</span>
                    <span className="bg-secondary-container/30 text-secondary text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Pro</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>timer</span>
                      <span className="text-xs font-medium text-on-surface-variant">5-8 mins</span>
                    </div>
                    <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Guide</button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] hover:scale-[1.01] transition-transform duration-300">
                <div className="relative aspect-[4/3] group cursor-pointer overflow-hidden">
                  <img alt="Overhead Press exercise" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpKvYofWinotgXTqzFEXyCj9T68_dj7ya7A7asC9VjqkcaqFx9-eNFimjqhCBy8msHdenuJniXxBkRIb_z_ulE3aqFJOjBUV_7y8oprM1bNMX2-O_hPwHcY40hkiEeD7-FUW-qh6du8vm9PUpdZEJ-qPBwZ-0PVM2rd8gphpXrRbJdKXY35dYUV30D9xLICiIH1MrXRGambWNttL5J4uPFS5hoMpgR4OY3ZWcBIY3Pt_VoKgu7CCjJ22gBtVpA_1jc9f8JwIz_oPs" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg transition-all group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-['Noto_Serif'] text-xl text-on-surface mb-3">Overhead Press</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Shoulders</span>
                    <span className="bg-secondary-container/30 text-secondary text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>timer</span>
                      <span className="text-xs font-medium text-on-surface-variant">4 mins</span>
                    </div>
                    <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Guide</button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] hover:scale-[1.01] transition-transform duration-300">
                <div className="relative aspect-[4/3] group cursor-pointer overflow-hidden">
                  <img alt="Lunge exercise" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmdK9FNsfo0_dZGhvvsRVC5Ef8gD8N-S5iio67zul8ZPWPs9-i8P8JAJIZ2swgWsQ-p7oI5UtjjQDXNrqe4pFjK4T6k4wz2LbqQ7WNNI_ChX1pU-SUMSBec03Nv4araBa8BcOGltWzV2YDyAzkbJcbQCSn48cUpHnmtSIofRd2ECCxyi9n6rhd_2bZYeZ8gdvpH-dAXaJP-IChzib_fAflbtkEy_3irxe3nD-lIJbjUf--vZw8pPka5gV3v8d26FdsZ-QdA6lG2J4" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg transition-all group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-['Noto_Serif'] text-xl text-on-surface mb-3">Walking Lunges</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Legs</span>
                    <span className="bg-secondary-container/30 text-secondary text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Beginner</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>timer</span>
                      <span className="text-xs font-medium text-on-surface-variant">6 mins</span>
                    </div>
                    <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Guide</button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] hover:scale-[1.01] transition-transform duration-300">
                <div className="relative aspect-[4/3] group cursor-pointer overflow-hidden">
                  <img alt="Pull-up exercise" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGaFNOasYC6LeaSrm3LSOPEc-rtcuzPc0ybIEj1-DqfB1WpTDIdmhvp3-McEJEV_yl1rfRHweTIwHx4tmA1VNx1GVfklxNQrCScXW7JGGysbD5couN5r7oBeLdAXWi8WnZIOwyoI7hl-rxdskYAr8HgYFyZSNdzYZNjB7Jacn_f2AZeUx91EvaFVCmNdSCGP_RZeSe439QpuYFuG-Fh70QmUvttx9NkTu3czaynqK7sFOQqZW50X1LrL7rOPVHFvjmgxMEb261tKs" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-lg transition-all group-hover:scale-110">
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-['Noto_Serif'] text-xl text-on-surface mb-3">Strict Pull-ups</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Back</span>
                    <span className="bg-secondary-container/30 text-secondary text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">Advanced</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>timer</span>
                      <span className="text-xs font-medium text-on-surface-variant">3 mins</span>
                    </div>
                    <button className="text-primary hover:underline font-bold text-xs uppercase tracking-widest">Guide</button>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 rounded-[2rem] overflow-hidden border border-primary/10 flex flex-col justify-between group hover:bg-primary/10 transition-all">
                <div className="p-8">
                  <div className="bg-primary text-on-primary text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full w-max mb-6">New Movement</div>
                  <h3 className="font-['Noto_Serif'] text-2xl text-on-surface mb-4">Turkish Get-Up</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">A total-body mobility and stability masterpiece. Refine your proprioception with this holistic movement.</p>
                </div>
                <div className="p-8 pt-0">
                  <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 group-hover:bg-primary-container/80 transition-colors">
                    Master Movement
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>north_east</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <button className="bg-surface-container-high text-on-surface py-4 px-12 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-surface-container-highest transition-all flex items-center gap-3">
                Discover More
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>expand_more</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-12 bg-surface-container-low py-12 px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-['Noto_Serif'] italic text-xl text-primary">Symmetry Athletic</span>
            <p className="text-sm text-on-surface-variant">Curated Wellness for the Modern Athlete.</p>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Community Standards</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
