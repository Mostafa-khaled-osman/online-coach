import React from 'react';

export function CheckInReviewer() {
  return (
    <div className="bg-background text-on-surface flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-[#faf9f4]/80 dark:bg-[#30332e]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="font-['Noto_Serif'] text-2xl font-bold tracking-tight text-[#30332e] dark:text-[#faf9f4]">
            Symmetry Athletic
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="font-['Noto_Serif'] font-medium text-lg text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-all duration-300" href="#">Dashboard</a>
            <a className="font-['Noto_Serif'] font-medium text-lg text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] pb-1 transition-all duration-300" href="#">Check-ins</a>
            <a className="font-['Noto_Serif'] font-medium text-lg text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-all duration-300" href="#">Athletes</a>
            <a className="font-['Noto_Serif'] font-medium text-lg text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-all duration-300" href="#">Resources</a>
          </nav>
          <div className="flex items-center gap-5">
            <button className="material-symbols-outlined text-[#44674d] hover:opacity-80 transition-all" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>notifications</button>
            <button className="material-symbols-outlined text-[#44674d] hover:opacity-80 transition-all" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>settings</button>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-primary/20">
              <img alt="Coach profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3VuhJrDRpPfqOvx8H1Ivf3SQ6bGEQ2rsDujrgqDVAl8X3qSPIdQw4VqYlzFka7yxtRJco8waxO0nx0QkxkwXcaZswdOssshSxAPE_VRx7m_I_Qv7Owyxu0ve_WUxjimaCowI-5V7feCkm7pGYZib31s6ixsjYc9Kpv-TSQ4H-l1VQH5NIf9YxTVzdxCjIEr4b5KorPzxiWdZ4a1RCTdlH2vBKzfSBdfQl4Eiw7yc2iGcgJDfxBMUbnsjsAkKS_iw8NvwGXi0KcNk" />
            </div>
          </div>
        </div>
        <div className="bg-[#eeeee8] dark:bg-[#30332e] h-px w-full"></div>
      </header>
      <main className="flex-grow pt-32 pb-24 px-8 max-w-screen-2xl mx-auto w-full">
        <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>arrow_back</span>
              <span className="font-['Manrope'] text-sm tracking-widest uppercase">Weekly Assessment</span>
            </div>
            <h1 className="text-5xl font-['Noto_Serif'] font-bold text-on-surface">Marcus Thorne</h1>
            <div className="flex gap-4 items-center">
              <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-sm font-medium">Muscle Hypertrophy</span>
              <span className="text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>calendar_today</span>
                June 12, 2024
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-surface-container-high text-on-surface font-semibold transition-all hover:scale-[1.02]">Archive Progress</button>
            <button className="px-6 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">Schedule Sync</button>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-surface-container-low rounded-[2rem] p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-['Noto_Serif'] font-bold">Visual Progress</h2>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-surface-container-highest material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>zoom_in</button>
                  <button className="p-2 rounded-full bg-surface-container-highest material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>compare</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group overflow-hidden rounded-2xl bg-surface-container-highest aspect-[3/4]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9MkjkUwT4BCh3w4zeVQagj1uQr2hcJCCrEDW9MYyMmFAnp4ossBDDWg761_3Z000GIE8nvwBh6kduRguzBa-VpUqBy9Jj4JEVCLt2pnwgWu_PHPBW2ccxNHs4aAadV3PUJrb4DNf-TF546kwZCxYsaCqSNM2qx9cb9RQkH9f1S39a6LHBUdBsVSZ2GD-5Y9vL4lBhYXrXQcin5pPHAU3EfBIMWUL-EyPJtO43M6uj2nPLw5bNPxYiLKNPKm8NluUyKUmugmPKmY4" alt="Baseline" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-['Manrope'] opacity-80">BASELINE</p>
                    <p className="text-lg font-bold">Week 1</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl bg-surface-container-highest aspect-[3/4]">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMOIYYVQ1lnJz5LWh2BIVgMve6f1IC73TggcaDkANqdEVCZSTQ8D-ftvzv3UoBGU43TqxMk2yIoSMelcaK4Gojg0uif7A2ejMAAyXw6sBrFKQUN12sXbIls3iAXLDVLp2-z4BEQC6nexXb_LDUUzP9cifDVjsHJFtpUGjS-VgoM-9Mocw9yk7MPbtgAUriPf16bq3UHWeI4j0tCM9Hoq37Kdb38LMZAAiudICKhgggHnqlvf_wwxHF8pG0i0VDX_KUtypjWsu89e4" alt="Current" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-['Manrope'] opacity-80">CURRENT</p>
                    <p className="text-lg font-bold">Week 8</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold">+2.4kg Lean Mass</div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(48,51,46,0.04)]">
              <h2 className="text-2xl font-['Noto_Serif'] font-bold mb-6">Subjective Well-being</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-3" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>bedtime</span>
                  <h3 className="font-bold text-lg">Sleep</h3>
                  <p className="text-sm text-on-surface-variant mt-2">"Quality is high, but getting only 6.5 hours on average."</p>
                  <div className="mt-4 w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-secondary h-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-primary text-4xl mb-3" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>bolt</span>
                  <h3 className="font-bold text-lg">Fatigue</h3>
                  <p className="text-sm text-on-surface-variant mt-2">"Moderate. Recovery from leg day taking longer than usual."</p>
                  <div className="mt-4 w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-on-primary-container text-4xl mb-3" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>psychology</span>
                  <h3 className="font-bold text-lg">Motivation</h3>
                  <p className="text-sm text-on-surface-variant mt-2">"Highest it's been all year. Seeing the visual changes helps."</p>
                  <div className="mt-4 w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="bg-primary-dim h-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(48,51,46,0.06)] relative overflow-hidden">
              <h2 className="text-xl font-['Noto_Serif'] font-bold mb-2">Metrics Trend</h2>
              <p className="text-xs text-on-surface-variant font-['Manrope'] tracking-wide mb-6">LAST 8 WEEKS</p>
              <div className="relative h-48 w-full mt-4 flex items-end justify-between gap-1">
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  <path d="M 0 100 Q 50 80 100 90 T 200 60 T 300 40 T 400 30" fill="none" stroke="#44674d" strokeLinecap="round" strokeWidth="3"></path>
                  <path d="M 0 40 Q 50 45 100 42 T 200 48 T 300 55 T 400 60" fill="none" stroke="#44646e" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
                <div className="w-px h-full bg-surface-container-high absolute left-0 bottom-0"></div>
                <div className="w-full h-px bg-surface-container-high absolute left-0 bottom-0"></div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <div>
                    <p className="text-[10px] font-['Manrope'] text-on-surface-variant">WEIGHT</p>
                    <p className="text-lg font-bold">88.4 kg</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <div>
                    <p className="text-[10px] font-['Manrope'] text-on-surface-variant">BODY FAT</p>
                    <p className="text-lg font-bold">12.2 %</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high rounded-[2rem] p-8 flex flex-col">
              <h2 className="text-xl font-['Noto_Serif'] font-bold mb-6">Coach's Feedback</h2>
              <div className="space-y-4 flex-grow">
                <label className="block text-xs font-['Manrope'] text-on-surface-variant uppercase tracking-widest px-2">Voice of the Curator</label>
                <textarea className="w-full h-64 bg-surface-container-lowest border-none rounded-2xl p-6 text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/40 resize-none font-['Manrope'] leading-relaxed" placeholder="Draft your analysis and adjustments for Marcus here..."></textarea>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 px-2 text-sm text-on-surface-variant">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                  <span>Email a copy to athlete</span>
                </div>
                <button className="w-full py-4 rounded-full bg-primary text-on-primary font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                  <span>Submit Review</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-12 px-8 mt-auto bg-[#eeeee8] dark:bg-[#30332e]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-screen-2xl mx-auto">
          <div className="font-['Manrope'] text-sm tracking-wide text-[#30332e] dark:text-[#faf9f4]">
            © 2024 Symmetry Athletic. The Mindful Curator.
          </div>
          <div className="flex gap-8">
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors" href="#">Support</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
