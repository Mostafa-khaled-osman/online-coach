import React from 'react';

export function WorkoutLog() {
  return (
    <div className="bg-background text-on-surface flex min-h-screen font-body">
      <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-[#eeeee8] dark:bg-[#30332e] py-8 px-4 z-50">
        <div className="mb-12 px-4">
          <h1 className="font-['Noto_Serif'] text-2xl text-[#30332e] dark:text-[#faf9f4]">Symmetry</h1>
          <p className="font-['Manrope'] text-sm font-medium text-[#30332e]/50 dark:text-[#faf9f4]/50">The Mindful Curator</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-[#30332e]/50 dark:text-[#faf9f4]/50 hover:bg-[#faf9f4]/50 dark:hover:bg-[#eeeee8]/10 rounded-xl group" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>dashboard</span>
            <span className="font-['Manrope'] text-sm font-medium">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-[#44674d] dark:text-[#84A98C] font-bold border-r-4 border-[#44674d] bg-[#faf9f4]/50 rounded-l-xl" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>edit_note</span>
            <span className="font-['Manrope'] text-sm font-medium">Workout Log</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-[#30332e]/50 dark:text-[#faf9f4]/50 hover:bg-[#faf9f4]/50 dark:hover:bg-[#eeeee8]/10 rounded-xl group" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>self_improvement</span>
            <span className="font-['Manrope'] text-sm font-medium">Recovery</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-[#30332e]/50 dark:text-[#faf9f4]/50 hover:bg-[#faf9f4]/50 dark:hover:bg-[#eeeee8]/10 rounded-xl group" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>nutrition</span>
            <span className="font-['Manrope'] text-sm font-medium">Nutrition</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 transition-colors duration-200 text-[#30332e]/50 dark:text-[#faf9f4]/50 hover:bg-[#faf9f4]/50 dark:hover:bg-[#eeeee8]/10 rounded-xl group" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>group</span>
            <span className="font-['Manrope'] text-sm font-medium">Community</span>
          </a>
        </nav>
        <div className="mt-auto space-y-2 border-t border-outline-variant/10 pt-6 px-4">
          <a className="flex items-center gap-3 py-2 text-[#30332e]/50 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>help_outline</span>
            <span className="font-['Manrope'] text-sm font-medium">Support</span>
          </a>
          <a className="flex items-center gap-3 py-2 text-[#30332e]/50 hover:text-error transition-colors" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>logout</span>
            <span className="font-['Manrope'] text-sm font-medium">Logout</span>
          </a>
        </div>
      </aside>
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen relative">
        <header className="sticky top-0 z-40 bg-[#faf9f4]/80 dark:bg-[#30332e]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)] flex justify-between items-center w-full px-8 py-4">
          <div className="flex items-center gap-4">
            <h2 className="font-['Noto_Serif'] text-xl tracking-tight text-[#30332e] dark:text-[#faf9f4]">Symmetry Athletic</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <span className="text-[#44674d] dark:text-[#84A98C] font-semibold font-['Noto_Serif'] text-lg">Active Session</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-all p-2 rounded-full hover:bg-surface-container-high" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</button>
              <button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-all p-2 rounded-full hover:bg-surface-container-high" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</button>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
                <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnCkV1SFzbY_SZn7hur4TgOvd-EhsRRrfjM_-Zf_nyq2PiA-JRHxfJPthUrh-H2DJ61_CM4FSPtAYPCvCyqHRUX-9QBTXF_gI675SxJ9zjw6o4R3b95hfoQJzdJ2BUit_yAH8g2GgSK6zzq2JYu79wlfsal0y72k-Hyzw8UUwi3cZkmy_thJKC4QNgv--1z1Pdg-XhDUBZsZSS20es6IYj0TYnx07Px5alVhF-RUxEJyGuIA8IRb6SaiM_jGoyHs2egZ3C5b9F6po" />
              </div>
            </div>
          </div>
        </header>
        <section className="flex-1 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-10">
            <img alt="Gym Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTfaEpmzPKfnpWuxxCJAyQ4_Z5HWo4DzlU9_Yz81ZH745uZCX_kOXliN4IP5I99fVmYSyUSd34fp03K8xqIQ6FYkmlKNd4naPrzXBy8iXBY3xpv0lD5ozZjXluNxVrFmmmarMFCOYCfgeh0W2KDcO2c97bThSrP5N988z9dtv9E2ai18G53bJk0vDVImjZt1WQFnkouPxlg5OubhiVVEuaQSk-Xer-Xra1XwO3rZlnEvt1m_Ejf8Sk4gPYNhjfs_hwS3q5tyK7nQI" />
          </div>
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-secondary font-medium tracking-widest uppercase text-xs">Morning Performance</span>
                <h1 className="font-['Noto_Serif'] text-4xl md:text-5xl text-on-surface font-bold">Workout Log: Upper Body Strength</h1>
                <p className="text-on-surface-variant max-w-lg">Focus on controlled eccentric movements and rhythmic breathing for today's primary compound lifts.</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold hover:scale-102 transition-transform duration-300 shadow-lg">Complete Workout</button>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_40px_rgba(48,51,46,0.06)] border border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-4">
                  <thead>
                    <tr className="text-left text-on-surface-variant">
                      <th className="pb-4 font-['Manrope'] text-sm font-semibold px-4">Exercise</th>
                      <th className="pb-4 font-['Manrope'] text-sm font-semibold px-4 text-center">Sets</th>
                      <th className="pb-4 font-['Manrope'] text-sm font-semibold px-4">Weight (kg)</th>
                      <th className="pb-4 font-['Manrope'] text-sm font-semibold px-4">Reps</th>
                      <th className="pb-4 font-['Manrope'] text-sm font-semibold px-4">Progress</th>
                      <th className="pb-4 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-4">
                    <tr className="bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-colors rounded-2xl group">
                      <td className="py-6 px-4 rounded-l-2xl">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
                          </div>
                          <div>
                            <p className="font-['Noto_Serif'] text-lg font-semibold text-on-surface">Bench Press</p>
                            <p className="text-xs text-on-surface-variant">Primary Compound / Chest</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <span className="font-body font-bold text-secondary text-xl">3 / 4</span>
                      </td>
                      <td className="py-6 px-4">
                        <input className="w-24 bg-surface-container-high border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-primary/20 text-center font-bold text-on-surface transition-all" type="number" defaultValue="85" />
                      </td>
                      <td className="py-6 px-4">
                        <input className="w-20 bg-surface-container-high border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-primary/20 text-center font-bold text-on-surface transition-all" type="number" defaultValue="8" />
                      </td>
                      <td className="py-6 px-4">
                        <span className="inline-flex items-center gap-1 bg-primary-container px-3 py-1 rounded-full text-xs font-bold text-on-primary-container">
                          <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>trending_up</span>
                          +2.5kg
                        </span>
                      </td>
                      <td className="py-6 px-4 text-right rounded-r-2xl">
                        <button className="bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">Finish Set</button>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-colors rounded-2xl group">
                      <td className="py-6 px-4 rounded-l-2xl">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>vertical_align_top</span>
                          </div>
                          <div>
                            <p className="font-['Noto_Serif'] text-lg font-semibold text-on-surface">Overhead Press</p>
                            <p className="text-xs text-on-surface-variant">Vertical Push / Shoulders</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <span className="font-body font-bold text-secondary text-xl">1 / 3</span>
                      </td>
                      <td className="py-6 px-4">
                        <input className="w-24 bg-surface-container-high border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-primary/20 text-center font-bold text-on-surface transition-all" type="number" defaultValue="50" />
                      </td>
                      <td className="py-6 px-4">
                        <input className="w-20 bg-surface-container-high border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-primary/20 text-center font-bold text-on-surface transition-all" type="number" defaultValue="10" />
                      </td>
                      <td className="py-6 px-4">
                        <span className="inline-flex items-center gap-1 bg-surface-container-highest px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant">
                          Same
                        </span>
                      </td>
                      <td className="py-6 px-4 text-right rounded-r-2xl">
                        <button className="bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">Finish Set</button>
                      </td>
                    </tr>
                    <tr className="bg-surface-container-lowest/60 hover:bg-surface-container-lowest transition-colors rounded-2xl group">
                      <td className="py-6 px-4 rounded-l-2xl">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-tertiary">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>reorder</span>
                          </div>
                          <div>
                            <p className="font-['Noto_Serif'] text-lg font-semibold text-on-surface">Bent Over Rows</p>
                            <p className="text-xs text-on-surface-variant">Horizontal Pull / Back</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-4 text-center">
                        <span className="font-body font-bold text-secondary text-xl">0 / 4</span>
                      </td>
                      <td className="py-6 px-4">
                        <input className="w-24 bg-surface-container-high border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-primary/20 text-center font-bold text-on-surface transition-all" placeholder="--" type="number" />
                      </td>
                      <td className="py-6 px-4">
                        <input className="w-20 bg-surface-container-high border-none rounded-full px-4 py-2 focus:ring-2 focus:ring-primary/20 text-center font-bold text-on-surface transition-all" placeholder="--" type="number" />
                      </td>
                      <td className="py-6 px-4">
                        <span className="inline-flex items-center gap-1 bg-primary-container px-3 py-1 rounded-full text-xs font-bold text-on-primary-container">
                          <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px', fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>trending_up</span>
                          +5.0kg
                        </span>
                      </td>
                      <td className="py-6 px-4 text-right rounded-r-2xl">
                        <button className="bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">Start Exercise</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container p-8 rounded-3xl flex flex-col justify-between h-48">
                <span className="text-on-surface-variant font-['Manrope'] text-sm uppercase tracking-widest">Time Elapsed</span>
                <div className="flex items-baseline gap-2">
                  <h3 className="font-['Noto_Serif'] text-4xl font-bold">42:15</h3>
                  <span className="text-primary text-sm font-bold">Active</span>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-3xl flex flex-col justify-between h-48">
                <span className="text-on-surface-variant font-['Manrope'] text-sm uppercase tracking-widest">Intensity Score</span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-['Noto_Serif'] text-4xl font-bold">84%</h3>
                  <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[84%] rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group h-48">
                <img alt="Barbell" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf050HLDwZPV-RtQOoIOIpA21dP86sj99hY0kABPoyGQYGwrqDxAfdeAB41fQCqGmISN41joSmUtdbv_FoPUQPHGeu5I3_mN_c7B-jsfTgEl49nC74wXiY5q3-q_RSpH6om-gVdKCOLaaN-vPhNUZrfODnSPiMGca5cYLeJ0Zsen70zdNEQzHqzbx4t84lcpbv1CLIyQChDNSZJx4-LHswqgSaJnECMX9499ds1Qvo6TSVXJ0g_ud273ptZAiYOiNC31zWGQTLYkY" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent flex items-end p-6">
                  <p className="text-white font-['Noto_Serif'] text-lg leading-tight">Focus on the breath between sets.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#faf9f4]/90 backdrop-blur-xl flex justify-around items-center py-4 px-2 z-50">
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>dashboard</span>
          <span className="text-[10px] font-medium">Dashboard</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>edit_note</span>
          <span className="text-[10px] font-bold">Log</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>self_improvement</span>
          <span className="text-[10px] font-medium">Recovery</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>group</span>
          <span className="text-[10px] font-medium">Connect</span>
        </button>
      </nav>
    </div>
  );
}
