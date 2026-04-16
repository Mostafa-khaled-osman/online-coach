import React, { useState } from 'react';

export function WeeklyCheckin() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body">
      <header className="fixed top-0 w-full z-50 bg-[#faf9f4]/80 dark:bg-[#30332e]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <nav className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
          <div className="font-['Noto_Serif'] text-2xl font-bold italic text-[#44674d] dark:text-[#84A98C]">
            Symmetry Athletic
          </div>
          <div className="hidden md:flex items-center space-x-8 font-['Noto_Serif'] text-lg font-semibold">
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-300" href="#">Dashboard</a>
            <a className="text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] pb-1" href="#">Check-in</a>
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-300" href="#">Performance</a>
          </div>
          <div className="flex items-center space-x-4 text-[#44674d] dark:text-[#84A98C]">
            <span className="material-symbols-outlined cursor-pointer scale-102 transition-transform duration-200" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
            <span className="material-symbols-outlined cursor-pointer scale-102 transition-transform duration-200" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>account_circle</span>
          </div>
        </nav>
      </header>
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-4 font-['Noto_Serif']">Weekly Intentions</h1>
            <p className="text-on-surface-variant font-['Manrope'] text-lg">Step into your weekly sanctuary. Let's curate your progress together.</p>
          </div>
          <div className="flex justify-between items-center mb-16 px-4">
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>1</div>
              <span className={`text-xs font-semibold uppercase tracking-widest ${step >= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>Physical</span>
            </div>
            <div className={`flex-grow h-[2px] mx-4 self-center mb-6 ${step >= 2 ? 'bg-primary' : 'bg-surface-container-highest'}`}></div>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>2</div>
              <span className={`text-xs font-semibold uppercase tracking-widest ${step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>Markers</span>
            </div>
            <div className={`flex-grow h-[2px] mx-4 self-center mb-6 ${step >= 3 ? 'bg-primary' : 'bg-surface-container-highest'}`}></div>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>3</div>
              <span className={`text-xs font-semibold uppercase tracking-widest ${step >= 3 ? 'text-primary' : 'text-on-surface-variant'}`}>Metrics</span>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_rgba(48,51,46,0.06)] border border-white/20">
            {step === 1 && (
              <section className="space-y-10">
                <div className="border-b border-surface-variant pb-6">
                  <h2 className="text-2xl font-bold text-on-background font-['Noto_Serif']">Step 1: Physical Progress</h2>
                  <p className="text-on-surface-variant mt-1">Upload your weekly silhouette to track subtle physiological shifts.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group cursor-pointer">
                    <label className="block text-sm font-semibold mb-3 tracking-wide text-on-surface">Front View</label>
                    <div className="relative h-64 rounded-[1.5rem] bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-on-surface-variant hover:border-primary/50 transition-colors duration-300 overflow-hidden">
                      <img alt="Front View Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJoJxWHLcMD_m0I0Njy035YmdMssOn3i6AghmRilxhOOA7Z5MrdfEyr066iXhjqSka8L65JWR9NL20pO1wput9ekK23viI7Qi4iyLowd7W2iKFhv3bbJtCyCQ0wDniE6VKgZXK_G1-ihGDwBCsF7NgdQ9FWlC47oN_YZXnI5PZY6P-ekMtAQW2CPznM1Ikx_Sh0EmN5yQccxuCb7HUetykxkkDdPkTk-_fwYdM9yPHGsipRXJJBdq_Fb1wM-xzKoiR184olyeoP7o" />
                      <div className="relative z-10 flex flex-col items-center">
                        <span className="material-symbols-outlined text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add_a_photo</span>
                        <span className="text-sm font-medium">Drop image or click</span>
                      </div>
                    </div>
                  </div>
                  <div className="group cursor-pointer">
                    <label className="block text-sm font-semibold mb-3 tracking-wide text-on-surface">Side View</label>
                    <div className="relative h-64 rounded-[1.5rem] bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-on-surface-variant hover:border-primary/50 transition-colors duration-300 overflow-hidden">
                      <img alt="Side View Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGu0Ck51wxKXUecmw6hMUWXzM69raiMa56CEXYte71lkG8WHMqfrryDQ8BIgWkXOMGM85Js9OME4EBICttsj_3mlDpD-6XDA2TSvrU925EXfc2XRBU3kAy6axzcdZKuEdvabuFRvHgs3MVXSoRYXeB2OpmIv-LMUzLv-_SnSsP19Lk0GBfwkx042k9hjsc3qbRRC0wOO5VVwjVGavZ2jkYK_RuOpajgixDdVj-1kGyHEn83ooYuU7w5yDwrlfaoY7KdUDfSaYp5pk" />
                      <div className="relative z-10 flex flex-col items-center">
                        <span className="material-symbols-outlined text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add_a_photo</span>
                        <span className="text-sm font-medium">Drop image or click</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {step === 2 && (
              <section className="space-y-12">
                <div className="border-b border-surface-variant pb-6">
                  <h2 className="text-2xl font-bold text-on-background font-['Noto_Serif']">Step 2: Subjective Markers</h2>
                  <p className="text-on-surface-variant mt-1">Honest assessment of your inner state allows for training precision.</p>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold uppercase tracking-widest text-on-surface">Sleep Quality</label>
                    <span className="text-xs text-primary font-bold">Optimal Recovery</span>
                  </div>
                  <div className="relative h-12 flex items-center">
                    <div className="absolute w-full h-2 bg-surface-container-highest rounded-full"></div>
                    <div className="absolute w-1/2 h-2 bg-secondary rounded-full"></div>
                    <div className="absolute left-1/2 -ml-3 w-6 h-6 bg-white border-4 border-secondary rounded-full shadow-md cursor-pointer"></div>
                  </div>
                  <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                    <span>Restless</span>
                    <span>Neutral</span>
                    <span>Restful</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-bold uppercase tracking-widest text-on-surface">Fatigue Levels</label>
                    <span className="text-xs text-primary font-bold">Stable Energy</span>
                  </div>
                  <div className="relative h-12 flex items-center">
                    <div className="absolute w-full h-2 bg-surface-container-highest rounded-full"></div>
                    <div className="absolute w-3/4 h-2 bg-primary rounded-full"></div>
                    <div className="absolute left-3/4 -ml-3 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-md cursor-pointer"></div>
                  </div>
                  <div className="flex justify-between text-xs font-medium text-on-surface-variant">
                    <span>Exhausted</span>
                    <span>Manageable</span>
                    <span>Energized</span>
                  </div>
                </div>
              </section>
            )}
            {step === 3 && (
              <section className="space-y-12">
                <div className="border-b border-surface-variant pb-6">
                  <h2 className="text-2xl font-bold text-on-background font-['Noto_Serif']">Step 3: Current Metrics</h2>
                  <p className="text-on-surface-variant mt-1">Objective data points to anchor your curated plan.</p>
                </div>
                <div className="max-w-sm mx-auto">
                  <label className="block text-sm font-bold uppercase tracking-widest text-on-surface mb-4" htmlFor="weight">Current Weight (KG)</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-high border-none rounded-full py-6 px-10 text-3xl font-['Noto_Serif'] text-center text-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" id="weight" placeholder="00.0" type="number" />
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">KG</div>
                  </div>
                  <p className="text-center mt-6 text-sm text-on-surface-variant italic">Weight is a variable, not a definition of worth.</p>
                </div>
              </section>
            )}
            <div className="mt-16 flex justify-between items-center">
              <button 
                className="px-8 py-3 rounded-full font-semibold text-on-surface-variant hover:text-on-background transition-colors duration-200"
                onClick={() => setStep(Math.max(1, step - 1))}
              >
                {step === 1 ? 'Cancel' : 'Back'}
              </button>
              <button 
                className="px-10 py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
                onClick={() => setStep(Math.min(3, step + 1))}
              >
                {step === 1 ? 'Next: Subjective Markers' : step === 2 ? 'Next: Current Metrics' : 'Submit Check-in'}
                {step < 3 && <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>}
              </button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container p-6 rounded-3xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>lightbulb</span>
              <h3 className="font-bold text-lg leading-tight font-['Noto_Serif']">Consistent Lighting</h3>
              <p className="text-sm text-on-surface-variant">Try to use the same spot and time of day for your progress photos.</p>
            </div>
            <div className="bg-secondary-container/30 p-6 rounded-3xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>cloud</span>
              <h3 className="font-bold text-lg leading-tight font-['Noto_Serif']">Auto-Sync</h3>
              <p className="text-sm text-on-surface-variant">Your metrics will automatically update your coach's dashboard.</p>
            </div>
            <div className="bg-surface-container p-6 rounded-3xl flex flex-col gap-4">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>verified_user</span>
              <h3 className="font-bold text-lg leading-tight font-['Noto_Serif']">Privacy First</h3>
              <p className="text-sm text-on-surface-variant">Your images are encrypted and only accessible by your coaching team.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#eeeee8] dark:bg-[#1a1c1a] relative z-10 w-full py-12 px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 w-full">
          <div className="font-['Noto_Serif'] text-xl font-bold text-[#44674d] dark:text-[#84A98C]">
            Symmetry Athletic
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-['Manrope'] text-sm tracking-wide text-[#30332e] dark:text-[#faf9f4]">
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] underline decoration-2 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] underline decoration-2 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Terms</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] underline decoration-2 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Support</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] underline decoration-2 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Contact</a>
          </div>
          <div className="text-[#30332e]/70 dark:text-[#faf9f4]/70 text-xs italic">
            © 2024 Symmetry Athletic. The Mindful Curator.
          </div>
        </div>
      </footer>
    </div>
  );
}
