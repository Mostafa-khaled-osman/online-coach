import React from 'react';

export function ProgramBuilder() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-[#faf9f4]/70 dark:bg-[#30332e]/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <div className="flex items-center gap-12">
          <h1 className="font-['Noto_Serif'] italic text-2xl text-[#30332e] dark:text-[#faf9f4] font-extrabold tracking-tight">Symmetry Athletic</h1>
          <nav className="hidden md:flex gap-8 items-center">
            <a className="font-['Noto_Serif'] font-medium tracking-tight text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] pb-1 hover:text-[#44674d] transition-colors" href="#">Programs</a>
            <a className="font-['Noto_Serif'] font-medium tracking-tight text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors" href="#">Clients</a>
            <a className="font-['Noto_Serif'] font-medium tracking-tight text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors" href="#">Library</a>
            <a className="font-['Noto_Serif'] font-medium tracking-tight text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors" href="#">Analytics</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-['Manrope'] font-semibold text-sm hover:scale-102 transition-all duration-200 shadow-[0_4px_14px_rgba(68,103,77,0.2)]">
            Send to Client
          </button>
          <img alt="Coach Profile" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA44CL5pVpYO4Qeg7PNfqQAtmI3qDpoefGrH_DkyHUINzTe6EvhBbzteXF5NyMzbQc5N_6LzNTobBF17Q4GVvPZcsikMSNmjj0giVwFfXyrzH-L0MsTY1qe4iwq567-nI8VnTd6wmeRhPVEmfZeA-AJqXFYdcBg74ddmX1Bu7TwmR-QtSAcH91KcJP9jbVsFPHPtCAvbNYmEQEA6I4HOpxxqxxU0nI4q9ACgbAf6dVSEJZiWhO0oYyy1JjqKAyAzek-UmaoDTYjd_k" />
        </div>
      </header>
      <div className="flex flex-1 pt-20">
        <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] flex flex-col p-6 bg-[#eeeee8] dark:bg-[#30332e] w-80 border-r-0 z-40 overflow-y-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
              </div>
              <div>
                <h2 className="text-[#30332e] dark:text-[#faf9f4] font-['Noto_Serif'] text-lg font-bold">Exercise Library</h2>
                <p className="text-xs text-[#30332e]/60 dark:text-[#faf9f4]/60 font-['Manrope'] tracking-wide uppercase">Curated Movements</p>
              </div>
            </div>
            <div className="relative mt-4">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</span>
              <input className="w-full bg-surface-container-high border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary" placeholder="Search exercises..." type="text" />
            </div>
          </div>
          <nav className="flex flex-col gap-1 mb-8">
            <div className="bg-[#ffffff] dark:bg-[#3d413b] text-[#44674d] rounded-xl shadow-sm px-4 py-3 flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
              <span className="font-['Manrope'] font-semibold text-sm uppercase tracking-wider">Strength</span>
            </div>
            <div className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:bg-[#ffffff]/50 dark:hover:bg-[#ffffff]/10 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>self_improvement</span>
              <span className="font-['Manrope'] font-semibold text-sm uppercase tracking-wider">Mobility</span>
            </div>
            <div className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:bg-[#ffffff]/50 dark:hover:bg-[#ffffff]/10 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>speed</span>
              <span className="font-['Manrope'] font-semibold text-sm uppercase tracking-wider">Cardio</span>
            </div>
            <div className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:bg-[#ffffff]/50 dark:hover:bg-[#ffffff]/10 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>spa</span>
              <span className="font-['Manrope'] font-semibold text-sm uppercase tracking-wider">Recovery</span>
            </div>
            <div className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:bg-[#ffffff]/50 dark:hover:bg-[#ffffff]/10 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>bookmark</span>
              <span className="font-['Manrope'] font-semibold text-sm uppercase tracking-wider">Saved</span>
            </div>
          </nav>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white/70 backdrop-blur-xl p-3 rounded-xl cursor-grab active:cursor-grabbing hover:scale-[1.02] transition-transform duration-200 group border border-white/30">
              <div className="aspect-video rounded-lg overflow-hidden mb-2 bg-surface-container-high">
                <img alt="Goblet Squat" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ0pY_hQg2ArvfwBc_MA8unmvY7-AH6fmSooH9UNcBokTTaRsDHeN-uKnTG9h3wYjVfuSzBDnRuIn1mtCQYhuGO81cIidxfz8DZFyet7yaZmKbOeAEbXk9IvNRYwstFx-UKc0Xt6DZVdljqQyk47TkkdTm7zZ8JW9zHbucQO9rvXdW0003tqiM6LoSL-E33CZ9vwjBmORt1t_OJLSb2TDabgqiy0eriQVqk8_e8h3ML0OzFGjJ7XeFhcWeepp64MB3E9jSpyDup_4" />
              </div>
              <p className="text-sm font-semibold text-on-surface">Goblet Squat</p>
              <p className="text-[10px] text-secondary font-medium tracking-tight">Quads &amp; Core</p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl p-3 rounded-xl cursor-grab active:cursor-grabbing hover:scale-[1.02] transition-transform duration-200 group border border-white/30">
              <div className="aspect-video rounded-lg overflow-hidden mb-2 bg-surface-container-high">
                <img alt="Push Up" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqHP2VvEv1XPCiMpQ6DhIsOuFHIljv2DQO6iKYogRMQQDVSUqyNjA5ufVcO9B01ODKldhcbivJ5L_WJwOqH01sjo9_VwdNZzr7Gg-lkmmLUFJnpFHqV_fAyxAWd-Kz4rjlj0onujEiKve8iNP7D4EvZCKTp_pU8MFD6HKiu53TwQG8wF3ckCPB_Le0p08VJLjTKOztagLxm_pu4ujPxwW_dUyEXgLdwvYHVH6HgN-kt1w7Y67XD0BqGsdT6MkRoC6ZhDml4gSJCC4" />
              </div>
              <p className="text-sm font-semibold text-on-surface">Push Up</p>
              <p className="text-[10px] text-secondary font-medium tracking-tight">Chest &amp; Triceps</p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl p-3 rounded-xl cursor-grab active:cursor-grabbing hover:scale-[1.02] transition-transform duration-200 group border border-white/30">
              <div className="aspect-video rounded-lg overflow-hidden mb-2 bg-surface-container-high">
                <img alt="Deadlift" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZki4-L_yB05CLVE8_hpfA5R6KxmHvPB0o8jGgQ7-UnmzI1ISbI0_W_uOmzAQpvznggnMKOaAfPZjtsy_K6C7ny1ukrExb81JHVdmyg5HhbdekPnxmFuX6eyhmNzmjtob0FNR0A45JCOhdgWnRgFIqI4uokc_RVy868sTpSmyptojkiKFwCl7umXkdQnMZdvt0oridW8ayBKX5gEicdB7Ua_CvTQIEsggclei2dZgLUdiYKcOmi0mh6djSLDqUY9MONJoYp9p6hxY" />
              </div>
              <p className="text-sm font-semibold text-on-surface">Deadlift</p>
              <p className="text-[10px] text-secondary font-medium tracking-tight">Posterior Chain</p>
            </div>
          </div>
          <button className="mt-8 w-full border-2 border-dashed border-outline-variant text-outline hover:border-primary hover:text-primary transition-colors py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add_circle</span>
            Add Custom Exercise
          </button>
        </aside>
        <main className="flex-1 ml-80 p-8 overflow-x-auto">
          <header className="mb-10 flex justify-between items-end">
            <div>
              <h2 className="font-['Noto_Serif'] text-3xl font-bold tracking-tight text-on-surface mb-2">Summer Vitality 2024</h2>
              <p className="text-secondary font-['Manrope'] font-medium">8-Week Hybrid Hypertrophy &amp; Flow Program</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-3">
                <img alt="Client" className="w-8 h-8 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUih9ca3QquJWNn3S_z5zKpsS2xULCoyx4HQo5h_py9HMJiVT-kM0LfqVdED7kbyJhMM_31dimw1ijVBLSSEA9yZbo6CsOOzluBDmy1YWBMuYCaSZhTdTIBjhwrzVt3sq1XnS6CvXWc0bwa09FCUw97ME71idpzkixEdi8jkm2VrHa-79_BXYWnFxR9AMPM2OWqbLUVA7PBBTmvkyXAbqpjsW-zb7HW0CbNCGcHDE5vGviCoCfy-DA4I1ub3xUwalUaIipNBWlYLU" />
                <div className="w-8 h-8 rounded-full bg-primary-container border-2 border-surface flex items-center justify-center text-[10px] font-bold text-primary">+12</div>
              </div>
              <div className="h-8 w-[1px] bg-outline-variant/30"></div>
              <button className="text-secondary hover:text-primary-dim transition-colors flex items-center gap-2 text-sm font-semibold">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</span>
                Settings
              </button>
            </div>
          </header>
          <div className="grid grid-cols-7 gap-6 min-w-[1200px]">
            <div className="flex flex-col gap-4">
              <div className="text-center pb-4">
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">Monday</h3>
                <p className="text-[10px] font-bold text-primary tracking-widest uppercase mt-1">Lower Focus</p>
              </div>
              <div className="bg-surface-container-low min-h-[600px] rounded-3xl p-4 flex flex-col gap-4 border border-transparent hover:border-primary-container/50 transition-colors">
                <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-white/30">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-primary-container text-primary rounded-full uppercase">Main</span>
                    <button className="material-symbols-outlined text-outline hover:text-error text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>more_vert</button>
                  </div>
                  <h4 className="font-bold text-sm text-on-surface mb-1">Back Squat</h4>
                  <p className="text-xs text-secondary mb-3">4 Sets × 8 Reps</p>
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary w-2/3 h-full"></div>
                  </div>
                </div>
                <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-white/30">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-secondary-container text-secondary rounded-full uppercase">Accessory</span>
                  </div>
                  <h4 className="font-bold text-sm text-on-surface mb-1">Bulgarian Split Squat</h4>
                  <p className="text-xs text-secondary">3 Sets × 12 Reps</p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-2xl p-6 group cursor-pointer hover:bg-surface-container-high/50 transition-colors">
                  <span className="material-symbols-outlined text-outline/40 group-hover:text-primary/60 text-3xl mb-2" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add_circle</span>
                  <p className="text-[10px] text-outline/60 font-bold uppercase tracking-tighter">Drop Exercise</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center pb-4">
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">Tuesday</h3>
                <p className="text-[10px] font-bold text-secondary tracking-widest uppercase mt-1">Upper Focus</p>
              </div>
              <div className="bg-surface-container-low min-h-[600px] rounded-3xl p-4 flex flex-col gap-4">
                <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm border border-white/30">
                  <h4 className="font-bold text-sm text-on-surface mb-1">Overhead Press</h4>
                  <p className="text-xs text-secondary">5 Sets × 5 Reps</p>
                </div>
                <div className="flex-1 border-2 border-dashed border-outline-variant/30 rounded-2xl"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center pb-4">
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">Wednesday</h3>
                <p className="text-[10px] font-bold text-tertiary tracking-widest uppercase mt-1">Rest &amp; Flow</p>
              </div>
              <div className="bg-surface-container-high/50 min-h-[600px] rounded-3xl p-4 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-outline text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>spa</span>
                </div>
                <p className="text-sm font-['Noto_Serif'] italic text-on-surface-variant">Active Recovery Day</p>
                <p className="text-[10px] text-outline-variant mt-2 px-4 italic leading-relaxed">Focus on mobility and light tissue work</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center pb-4">
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">Thursday</h3>
                <p className="text-[10px] font-bold text-primary tracking-widest uppercase mt-1">Pull Priority</p>
              </div>
              <div className="bg-surface-container-low min-h-[600px] rounded-3xl p-4 flex flex-col gap-4">
                <div className="bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-sm border-l-4 border-primary border-y border-r border-white/30">
                  <h4 className="font-bold text-sm text-on-surface mb-1">Deadlift</h4>
                  <p className="text-xs text-secondary">3 Sets × 3 Reps</p>
                </div>
                <div className="flex-1 border-2 border-dashed border-outline-variant/30 rounded-2xl"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center pb-4">
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">Friday</h3>
                <p className="text-[10px] font-bold text-secondary tracking-widest uppercase mt-1">Full Body</p>
              </div>
              <div className="bg-surface-container-low min-h-[600px] rounded-3xl p-4 flex flex-col gap-4">
                <div className="flex-1 border-2 border-dashed border-outline-variant/30 rounded-2xl"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center pb-4">
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">Saturday</h3>
                <p className="text-[10px] font-bold text-error-dim/60 tracking-widest uppercase mt-1">Wildcard</p>
              </div>
              <div className="bg-surface-container-low min-h-[600px] rounded-3xl p-4 flex flex-col gap-4">
                <div className="flex-1 border-2 border-dashed border-outline-variant/30 rounded-2xl"></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center pb-4">
                <h3 className="font-['Noto_Serif'] text-xl font-bold text-on-surface">Sunday</h3>
                <p className="text-[10px] font-bold text-tertiary tracking-widest uppercase mt-1">Reflection</p>
              </div>
              <div className="bg-surface-container-high/50 min-h-[600px] rounded-3xl p-4 flex flex-col items-center justify-center text-center opacity-60">
                <span className="material-symbols-outlined text-outline mb-2" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>hotel</span>
                <p className="text-[10px] font-bold uppercase tracking-wider">Rest</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
