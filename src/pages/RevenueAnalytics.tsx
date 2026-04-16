import React from 'react';

export function RevenueAnalytics() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-container min-h-screen">
      <header className="bg-[#faf9f4] dark:bg-stone-950 sticky top-0 z-50">
        <nav className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-['Noto_Serif'] italic text-[#44674d] dark:text-emerald-400">Symmetry Athletic</span>
            <div className="hidden md:flex gap-8 items-center">
              <a className="text-[#30332e]/60 dark:text-stone-400 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Dashboard</a>
              <a className="text-[#30332e]/60 dark:text-stone-400 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Athletes</a>
              <a className="text-[#30332e]/60 dark:text-stone-400 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Programs</a>
              <a className="text-[#44674d] dark:text-emerald-400 font-bold border-b-2 border-[#44674d] pb-1 hover:text-[#44674d] transition-colors duration-300" href="#">Analytics</a>
              <a className="text-[#30332e]/60 dark:text-stone-400 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Messages</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 mr-2">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer scale-102 active:scale-98 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer scale-102 active:scale-98 transition-transform" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</span>
            </div>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium scale-102 active:scale-98 transition-transform">New Session</button>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-surface-variant">
              <img alt="Coach Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCodRUoN3Kb9KQjJO8ArkSUQALZuu4OUhv_nZbCO7uhXlmszFoDD9fyYXidUcfSOf-t3VHr21oRbtmq-2x5omxJVTcr53YzOsMLnLYCc0SMoIA5CCGUAnP1kDcLj081_pap-6YVrDJArzCYR3O_YW22fjUBQeIcCFR-jlCwDPnlVs8fgwsq35FLOm8jmMx_iYDRJFYyOrdYL3z4ZjvuNmGOvgUv-tC6VIcriJSnQloq9gwDrgyqEcp6mOhH1w8tvVTMKOe1-lfeXw" />
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-screen-2xl mx-auto px-8 py-12 space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-['Noto_Serif'] text-on-surface">Revenue Analytics</h1>
            <p className="text-on-surface-variant font-['Manrope'] max-w-xl">A calm, comprehensive view of your athletic coaching performance and fiscal growth.</p>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low px-6 py-3 rounded-xl">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>calendar_today</span>
            <span className="text-sm font-medium">Last 12 Months: Jan 2023 - Dec 2023</span>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-xl ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-on-surface-variant text-sm font-['Manrope'] uppercase tracking-widest">Total Revenue</span>
              <span className="material-symbols-outlined text-primary-dim" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>payments</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-['Noto_Serif'] text-on-surface">$142,580.00</h3>
              <div className="flex items-center text-primary text-sm gap-1">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>trending_up</span>
                <span>12% vs last year</span>
              </div>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-xl ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-on-surface-variant text-sm font-['Manrope'] uppercase tracking-widest">Active Subscriptions</span>
              <span className="material-symbols-outlined text-primary-dim" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>group</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-['Noto_Serif'] text-on-surface">842</h3>
              <div className="flex items-center text-primary text-sm gap-1">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>trending_up</span>
                <span>48 new this month</span>
              </div>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-xl ring-1 ring-white/20 transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-on-surface-variant text-sm font-['Manrope'] uppercase tracking-widest">ARPU (Monthly)</span>
              <span className="material-symbols-outlined text-primary-dim" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>person_add_alt</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-['Noto_Serif'] text-on-surface">$169.30</h3>
              <div className="flex items-center text-secondary text-sm gap-1">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>horizontal_rule</span>
                <span>Stable growth</span>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white/70 backdrop-blur-xl p-8 rounded-xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-['Noto_Serif']">Monthly Earnings</h2>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 rounded-full text-xs font-['Manrope'] bg-primary-container text-on-primary-container">Monthly</button>
                <button className="px-4 py-1.5 rounded-full text-xs font-['Manrope'] text-on-surface-variant hover:bg-surface-container transition-colors">Quarterly</button>
              </div>
            </div>
            <div className="h-80 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300">
                <defs>
                  <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#44674d" stopOpacity="0.15"></stop>
                    <stop offset="100%" stopColor="#44674d" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <line stroke="#e1e3db" strokeWidth="1" x1="0" x2="800" y1="280" y2="280"></line>
                <line stroke="#e1e3db" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="210" y2="210"></line>
                <line stroke="#e1e3db" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="140" y2="140"></line>
                <line stroke="#e1e3db" strokeDasharray="4" strokeWidth="1" x1="0" x2="800" y1="70" y2="70"></line>
                <path d="M0,240 C100,220 150,260 200,200 C250,140 300,160 400,110 C500,60 600,130 700,90 C750,70 800,40 800,40" fill="none" stroke="#44674d" strokeLinecap="round" strokeWidth="3"></path>
                <path d="M0,240 C100,220 150,260 200,200 C250,140 300,160 400,110 C500,60 600,130 700,90 C750,70 800,40 800,40 L800,280 L0,280 Z" fill="url(#areaGradient)"></path>
                <circle cx="200" cy="200" fill="#44674d" r="4"></circle>
                <circle cx="400" cy="110" fill="#44674d" r="4"></circle>
                <circle cx="800" cy="40" fill="#44674d" r="6"></circle>
              </svg>
              <div className="flex justify-between mt-6 text-[10px] font-['Manrope'] text-on-surface-variant uppercase tracking-tighter">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-xl flex flex-col items-center text-center">
              <h3 className="text-sm font-['Manrope'] uppercase tracking-widest text-on-surface-variant mb-6">Subscription Retention</h3>
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-primary-container" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="10"></circle>
                  <circle className="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="44" strokeWidth="10"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-['Noto_Serif'] text-on-surface">90%</span>
                  <span className="text-[10px] font-['Manrope'] text-primary font-bold">STABLE</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant italic">High consistency in renewing athlete memberships.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-xl flex flex-col items-center text-center">
              <h3 className="text-sm font-['Manrope'] uppercase tracking-widest text-on-surface-variant mb-6">Churn Rate</h3>
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="10"></circle>
                  <circle className="text-error-container" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="418" strokeWidth="10"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-['Noto_Serif'] text-on-surface">5%</span>
                  <span className="text-[10px] font-['Manrope'] text-error font-bold">MINIMAL</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant italic">3% decrease from previous month.</p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-xl space-y-6">
            <h4 className="text-xl font-['Noto_Serif']">Top Performing Program</h4>
            <div className="relative rounded-lg overflow-hidden h-32 group">
              <img alt="Program" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCH-rAlHFLsds9M_J_R9OftHrOhuR2c0OLXygtMjd9x1LvoIMTSRfsWqEwx8IIspZfqE5W166C3auKBdVKBIy9eu18foR-iPd3UWSr_mxVzT3_dO-c_YPtMqh08X6aVkITt_aOo7w-z637LCgj1atl-I4u7l53IWKVbCAHLDmIHForrYch9Io-iyDDEneBq8xr7oukNSn4MiBBX0aGF6eqQObzLdrYW07BqainCkskIBszyZ6xG92rN3xRaEtvYE-gK1xhX6XDzYk" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-4">
                <span className="text-white font-medium">Hybrid Strength Foundation</span>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Contribution</span>
              <span className="font-bold text-primary">34% of Revenue</span>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-xl flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-['Noto_Serif'] mb-4">Subscriber Sentiment</h4>
              <p className="text-sm text-on-surface-variant">Feedback from active members indicates high satisfaction with personalized program updates.</p>
            </div>
            <div className="flex -space-x-2 mt-4">
              <img alt="user" className="w-8 h-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0BbIdGYXcI5EB9_JGLb9xMkt8HXy0AUa2CcXnx5Qr3jRE7mWyCLTK_ID8BsMDq7lIdqyC1IPDGJmztY_h1inAR7hB2rhMIKkUEAdYpdTfs2oPSbnbtLnXxw5nOV0fUz1y8Mq2yYEhTW1OGEhKikQCV5zy3DN2LsW2doxZIiCsJhjnwwj0bUgfPUdz2a-mo_WSFjAhwBA4Gl2QBJ6xJo2BaoTsr2id183fYMWzFGoSMkRCgimmrsnLscb4Ydb6UMzUXnn4i7aRSvc" />
              <img alt="user" className="w-8 h-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBol6hcpCJcUW67nBfj1sUXWg_QLH9TA_01Vgpy5DUOdQKZCC4AgQrdNKvR67MiW_nsY4hT2ClqxKaG56Psur6QtkwPZevd5ulhJh0623W1ZA71fp7uuJ2idtuTLQekX9KSOBZwNokybhX070BAGQgNPlGskA1IRz4Rhd61yGRFiZ8Ln281dQh1UtlBJcK2f4V6gD4s-r4SFjoj7kVajf7ZXTLY_4ydirECyKExf4PoYHarNJzj-NLmDjOn7AJPjWytkXcBUOzVIMY" />
              <img alt="user" className="w-8 h-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSVlE8FYZcQ6zfSIYbXd6UTIIXNeWW6euu2Ce6Nmgpf_WTv6XDFmzKawqYJgez465p5nqwuTxFw5_z_SX54RWXXZlejwxL2Qf5ojFEJm9qKyGDm3QhvKqBzVWJerm18ZtsjLj6A6ej6cYo6OVKkMTpOZ-_FauxayTQm_7EddcC99-dVa2DrMZ6_met8Iejw6nULmDc0sMtHpwFgQjzpqmVE92Z3fBF_sjubj1QhltkuEROaWSorSM4HGWCbJ7V-dmWUMHMMTUN5_0" />
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-[10px] font-bold ring-2 ring-white">+742</div>
            </div>
          </div>
          <div className="bg-primary/5 p-8 rounded-xl flex flex-col justify-center relative overflow-hidden border border-primary/10">
            <div className="relative z-10 space-y-4">
              <h4 className="text-xl font-['Noto_Serif'] text-primary-dim">Strategic Growth Tip</h4>
              <p className="text-sm text-on-surface-variant">Your "Endurance Elite" tier is underpriced compared to market value. Consider a 15% adjustment for new signups.</p>
              <a className="inline-flex items-center text-sm font-bold text-primary hover:underline" href="#">
                Review Pricing Model <span className="material-symbols-outlined ml-1 text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </a>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>
      <footer className="bg-[#eeeee8] dark:bg-stone-900 w-full py-12 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-screen-2xl mx-auto font-sans text-sm tracking-wide">
          <div className="text-[#30332e]/70 mb-4 md:mb-0">
            © 2024 Symmetry Athletic. The Mindful Curator.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-[#30332e]/70 hover:text-[#44674d] transition-colors" href="#">Privacy Policy</a>
            <a className="text-[#30332e]/70 hover:text-[#44674d] transition-colors" href="#">Terms of Service</a>
            <a className="text-[#30332e]/70 hover:text-[#44674d] transition-colors" href="#">Support</a>
            <a className="text-[#30332e]/70 hover:text-[#44674d] transition-colors" href="#">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
