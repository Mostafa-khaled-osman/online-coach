import React from 'react';

export function SanctuaryDashboard() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf9f4] text-[#31332e] font-body">
      <aside className="fixed left-0 top-0 h-screen flex flex-col p-8 w-72 bg-[#fbf9f4] rounded-r-[2rem] z-50">
        <div className="mb-12">
          <span className="text-2xl font-bold tracking-tight text-[#536443] font-['Plus_Jakarta_Sans']">Ethereal</span>
        </div>
        <nav className="flex-1 flex flex-col">
          <div className="flex items-center gap-4 bg-[#536443] text-white rounded-full px-6 py-3 my-1 transition-all duration-300">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>spa</span>
            <span className="font-medium">Sanctuary</span>
          </div>
          <div className="flex items-center gap-4 text-[#31332e] px-6 py-3 my-1 transition-all duration-300 hover:bg-[#e3e3db]/60 backdrop-blur-md rounded-full group cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
            <span className="font-medium">Vitality</span>
          </div>
          <div className="flex items-center gap-4 text-[#31332e] px-6 py-3 my-1 transition-all duration-300 hover:bg-[#e3e3db]/60 backdrop-blur-md rounded-full group cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>self_improvement</span>
            <span className="font-medium">Recovery</span>
          </div>
          <div className="flex items-center gap-4 text-[#31332e] px-6 py-3 my-1 transition-all duration-300 hover:bg-[#e3e3db]/60 backdrop-blur-md rounded-full group cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>psychology</span>
            <span className="font-medium">Mindfulness</span>
          </div>
          <div className="flex items-center gap-4 text-[#31332e] px-6 py-3 my-1 transition-all duration-300 hover:bg-[#e3e3db]/60 backdrop-blur-md rounded-full group cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>energy_savings_leaf</span>
            <span className="font-medium">Growth</span>
          </div>
          <div className="mt-auto pt-8 border-t border-transparent">
            <div className="flex items-center gap-4 px-6 py-3 mb-6 bg-surface-container-low rounded-lg">
              <img alt="Athlete Profile Avatar" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeeAszNm0MJvoeYd8P7B5yFJX7lij9LrBv7Y6QawghAWJMcZXbhRMdXFfvZ_aFmEELYCsc9TEk6hJkCTv-IQFCoHbwcuVKjjtyZYkvIG7tVPqdJ8W61Dd3nFg_-Z8Z5aFr4eKbX_uTQrv97USaoHo7u3_Te_XZZz9RNjbydFCVFQ7OKOm5MwxNdMPFQ6Sq0zYTrDrknd4b2FB4VAGnCLdGKY6ntOjWvCV8Hk5Hgnm3sJTijREyy6m8CRZzbOpqhSbl5OqBbkBoIUc" />
              <div className="overflow-hidden">
                <p className="font-bold text-sm truncate">Aria Thorne</p>
                <p className="text-xs text-on-surface-variant">Elite Recovery Tier</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#31332e] px-6 py-2 hover:opacity-80 cursor-pointer">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>language</span>
              <span className="text-sm">Language (EN/AR)</span>
            </div>
            <div className="flex items-center gap-4 text-[#31332e] px-6 py-2 hover:opacity-80 cursor-pointer">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</span>
              <span className="text-sm">Settings</span>
            </div>
          </div>
        </nav>
      </aside>
      <main className="pl-80 pr-12 pt-8 min-h-screen">
        <header className="flex justify-between items-center w-full py-8 bg-[#fbf9f4]/60 backdrop-blur-xl sticky top-0 z-40">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#536443] font-['Plus_Jakarta_Sans']">Good morning, Aria</h1>
            <p className="text-on-surface-variant font-body mt-2">Your sanctuary is ready for today's intentions.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-surface-container px-6 py-3 rounded-full flex items-center gap-3">
              <span className="material-symbols-outlined text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</span>
              <input className="bg-transparent border-none focus:ring-0 p-0 text-sm w-48 placeholder:text-outline" placeholder="Search insights..." type="text" />
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>translate</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high hover:opacity-80 transition-opacity relative">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications_none</span>
                <span className="absolute top-3 right-3 w-2 h-2 bg-secondary rounded-full"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="mt-12 grid grid-cols-12 gap-8 pb-12">
          <section className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-12 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
            <div className="flex flex-col md:flex-row items-center gap-16 z-10">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-highest" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="12"></circle>
                  <circle className="text-primary" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="690" strokeDashoffset="172" strokeWidth="12"></circle>
                </svg>
                <svg className="absolute w-44 h-44 transform -rotate-90">
                  <circle className="text-surface-container-highest" cx="88" cy="88" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
                  <circle className="text-secondary" cx="88" cy="88" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="88" strokeWidth="12"></circle>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-4xl font-extrabold text-primary font-['Plus_Jakarta_Sans']">82%</span>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-60">Total Vigor</span>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Wellness Progress Hub</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <div>
                        <p className="font-bold text-sm">Muscle Gain</p>
                        <p className="text-xs text-on-surface-variant">75% of weekly target reached</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-secondary"></div>
                      <div>
                        <p className="font-bold text-sm">Hydration Level</p>
                        <p className="text-xs text-on-surface-variant">2.4L / 3.0L consumed</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-primary text-on-primary rounded-full px-8 py-4 self-start font-bold flex items-center gap-2 scale-100 hover:scale-105 active:scale-95 transition-transform">
                  Log Daily Intent
                </button>
              </div>
            </div>
          </section>
          <section className="col-span-12 lg:col-span-4 bg-secondary-container rounded-xl p-8 flex flex-col justify-between text-on-secondary-container relative overflow-hidden">
            <div className="z-10">
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Focus of the week</span>
              <h3 className="text-3xl font-bold mt-4 leading-tight font-['Plus_Jakarta_Sans']">Harmonizing Breath &amp; Body</h3>
            </div>
            <div className="mt-12 z-10">
              <p className="text-lg opacity-80">"Growth occurs in the pauses between the efforts."</p>
              <div className="mt-6 flex gap-2">
                <span className="bg-on-secondary-container/10 px-4 py-2 rounded-full text-xs font-bold">Respiration</span>
                <span className="bg-on-secondary-container/10 px-4 py-2 rounded-full text-xs font-bold">Mental Clarity</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none bg-gradient-to-br from-white/10 to-transparent"></div>
          </section>
          <section className="col-span-12">
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>play_arrow</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Active Task</span>
                  <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans']">Today's Workout: Upper Body A</h3>
                  <p className="text-on-surface-variant mt-1">45 minutes • High Intensity • Hypertrophy Focus</p>
                </div>
              </div>
              <div className="flex items-center gap-12 pr-4">
                <div className="text-center">
                  <p className="text-xs font-bold text-outline uppercase">Sets</p>
                  <p className="text-xl font-bold">12</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-outline uppercase">Est. Cal</p>
                  <p className="text-xl font-bold">380</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-outline uppercase">Intensity</p>
                  <p className="text-xl font-bold">High</p>
                </div>
                <span className="material-symbols-outlined text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>chevron_right</span>
              </div>
            </div>
          </section>
          <section className="col-span-12 lg:col-span-5 grid gap-8">
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between h-64">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>bedtime</span>
                <span className="text-secondary font-bold">+12%</span>
              </div>
              <div>
                <h4 className="font-bold text-lg font-['Plus_Jakarta_Sans']">Sleep Efficiency</h4>
                <p className="text-sm text-on-surface-variant">Deep sleep cycle improved by 45m</p>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-between h-64">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>bolt</span>
                <span className="text-primary font-bold">Optimal</span>
              </div>
              <div>
                <h4 className="font-bold text-lg font-['Plus_Jakarta_Sans']">Metabolic Rate</h4>
                <p className="text-sm text-on-surface-variant">Body temp: 36.8°C | HRV: 72ms</p>
              </div>
            </div>
          </section>
          <section className="col-span-12 lg:col-span-7 h-full">
            <div className="relative w-full h-[544px] rounded-xl overflow-hidden group">
              <img alt="Yoga sanctuary" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJSfUR1Zim1QaKf737Dv7vUV10MWWT0MqyS8i-spHMSZfWBBGnbecXUZqlqaN1P56C1F6v9dU_0F8-IBn8zmw3pX7dA4ueF15KNp2gMInokPaUwMkS-GJpw0i5MMsPhWwkx5F0m5rZJVgwmkdPtrmisA3aYnjuTuHjv-OuDH7Sar-_BJlW4k4swFGvMQkSaqDuuxFEskB_V7OMgJgeQs3JUoerYY9aciOK8ucHSBYCKTz_OhR8wgzCSmuTh9auG-gepgVTp-9zz2Y" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold font-['Plus_Jakarta_Sans']">Recovery Sanctuary</h3>
                <p className="opacity-80 mt-2">Explore guided decompression rituals for tonight.</p>
                <button className="mt-6 flex items-center gap-2 group/btn">
                  <span className="font-bold border-b-2 border-white pb-1">Begin session</span>
                  <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="fixed bottom-12 right-12 flex flex-col gap-4 z-50">
        <button className="w-16 h-16 rounded-full bg-primary text-on-primary shadow-xl flex items-center justify-center hover:rotate-90 transition-transform duration-500 group">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add</span>
          <span className="absolute right-20 bg-surface-container-lowest text-on-surface text-xs font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">Quick Log</span>
        </button>
      </div>
    </div>
  );
}
