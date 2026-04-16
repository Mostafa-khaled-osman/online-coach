import React from 'react';
import { Link } from 'react-router-dom';

export function AetherWellness() {
  return (
    <div className="bg-background selection:bg-primary-container selection:text-on-primary-container min-h-screen font-body text-[#31332e]">
      <nav className="fixed top-0 w-full z-50 bg-stone-50/60 dark:bg-stone-900/60 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold text-stone-800 dark:text-stone-100 tracking-tighter font-['Plus_Jakarta_Sans']">
            Aether Wellness
          </div>
          <div className="hidden md:flex items-center gap-10">
            <Link className="font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-emerald-800 dark:text-emerald-400 font-semibold hover:text-emerald-700 transition-colors" to="/dashboard">Platform</Link>
            <Link className="font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" to="/about">Features</Link>
            <Link className="font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors" to="/about">Global Support</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/signin" className="font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-stone-600 dark:text-stone-400 hover:text-emerald-700 transition-colors">Sign In</Link>
            <Link to="/pricing" className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold hover:opacity-80 transition-all shadow-[0_0_40px_rgba(83,100,67,0.15)] inline-block">Join Sanctuary</Link>
          </div>
        </div>
      </nav>
      <main className="pt-24 overflow-x-hidden">
        <section className="relative min-h-[921px] flex items-center px-8 max-w-screen-2xl mx-auto overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <img alt="Background" className="w-full h-full object-cover grayscale brightness-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFz_01Gtxhp-qS_xhe1_FRLMZN4JLOKpAd52p2pngKYpvHKpVY6LHASJnJEZd3x-vGbQ92whnNGHK5y2ZFYgcvn9GsO2SgGFcZa6-2TQ7D1M-9uBsIloANY1xOI1Crxub4dBv6HTU7-1QukaVZ5B5gGssYCW2A_TJ67YkaaJjAyv3zHuTk7xZH5YbKfFZI5a5QjzBst0ny1D_zyywx_ldui_sxSL4BlQtBfrHDVEACrr5f_DfAbpbzyROB9xF0ftrARZSX25eoOPg" />
          </div>
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container-low rounded-full">
                <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>colors_spark</span>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-['Manrope']">2024 Collection</span>
              </div>
              <h1 className="text-7xl lg:text-[5.5rem] font-extrabold font-['Plus_Jakarta_Sans'] leading-[1.05] tracking-tight text-on-surface">
                Cultivate Your <br />
                <span className="text-primary italic font-medium">Peak Potential</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-['Manrope']">
                Holistic athlete management for mindful performance and recovery. Experience an ethereal environment designed for intentional growth.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <Link to="/pricing" className="bg-primary text-on-primary px-10 py-5 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-lg hover:opacity-90 transition-all shadow-[0_0_40px_rgba(83,100,67,0.15)] group relative overflow-hidden inline-block">
                  Join the Sanctuary
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container overflow-hidden">
                    <img alt="Athlete 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2U2qlrXwRYItTAeWGjEDw_mHByM5oof27sx2Zf5KPdKGlBqufVck9UAdBr7LyEZMgvArvofNGrM1uVAqfudQhrKHhlz_Y4q8MJqYaaWXgYXpULNRLhPqxRtgOX67OMmcqupmzzDASNDDsiwuOkCvUG7lNHs2a2lHB0wnUqk2rxQ0kpX7hrGVU3ka7LLF6N9MVwrkm7Xo2VRz4DRi2zARAubU7PYQZHVT5g2sN6OFxiEwW-MzfCltSmrNiszJ-so66hzG5ZWaEEQI" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container overflow-hidden">
                    <img alt="Athlete 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO3lhjEKpG6Dh7s_08tmgK3v_zSkOTa3r8mU5i_YefOSM_FFr06dz3KPf6mq88d-IY5OK_j7JylV1cgusGWkZqXxtwlgj1vL9rkrA7UDEP-cHX53cOt9s2XkMhzaPgjRW7X_Av3QUAFz7B7fIL4vlWEZ0Of4aUsm92qXFm1jxfWiqzNo9mf5Xn2gb--DQllkyGMpMTcz04GKod_GeTmfRpBk990ZHIms5p07ALCeTHGm9PRNny0Z0NeUj5uPKnKMbyDyEq6GiPYNk" />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-primary-container text-[10px] font-bold text-on-primary-container">
                    +2k
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square bg-surface-container-lowest/40 backdrop-blur-md rounded-xl p-8 shadow-[0_0_40px_rgba(83,100,67,0.15)]">
                <div className="absolute -top-12 -left-12 p-6 bg-surface-container-lowest rounded-lg shadow-[0_0_40px_rgba(83,100,67,0.15)]">
                  <span className="text-sm font-bold text-on-surface font-['Plus_Jakarta_Sans']">Status: Optimal</span>
                  <div className="flex gap-1 mt-2">
                    <div className="h-1 w-8 bg-primary rounded-full"></div>
                    <div className="h-1 w-4 bg-primary/20 rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface">Wellness Hub</h3>
                    <p className="text-sm text-on-surface-variant">Real-time recovery metrics</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 py-8">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle className="text-surface-container" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                          <circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364" strokeDashoffset="72.8" strokeWidth="8"></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-2xl font-extrabold font-['Plus_Jakarta_Sans'] text-on-surface">82%</span>
                          <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Vitality</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle className="text-surface-container" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                          <circle className="text-secondary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364" strokeDashoffset="36.4" strokeWidth="8"></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-2xl font-extrabold font-['Plus_Jakarta_Sans'] text-on-surface">90%</span>
                          <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Hydration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>monitor_heart</span>
                      </div>
                      <span className="text-xs font-bold text-on-surface-variant font-['Manrope']">Resting Heart Rate</span>
                    </div>
                    <span className="text-sm font-bold text-on-surface">54 BPM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 px-8 max-w-screen-2xl mx-auto">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface tracking-tight">Precision Recovery Ecosystem</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Where advanced data meets organic mindfulness. Designed for those who demand more from their bodies and peace for their minds.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-low rounded-lg p-12 flex flex-col md:flex-row gap-12 items-center">
              <div className="space-y-6 flex-1">
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>eco</span>
                </div>
                <h3 className="text-3xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface">Holistic Athlete Management</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">Our unified dashboard synchronizes biometric data, mental health markers, and nutritional flows to provide a single, calm source of truth for your performance.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-semibold text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                    Biometric Synchronization
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                    Cognitive Fatigue Tracking
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full h-80 bg-surface-container rounded-lg overflow-hidden shadow-[0_0_40px_rgba(83,100,67,0.15)]">
                <img alt="Gym" className="w-full h-full object-cover grayscale brightness-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2rPlL0xyHdPoroDkdWsj3d-Bvk87mLisVwipA19dNZowT-znWWWWpZkv-6pBze4jTkfvkrlvzTSlsTGSD7nHTphkMcZ-J1t3gkb2PF128sLTsrLSJeq5Rl6pfp7ZLNgdrctha22PRGqyfEmiOPpUNUqqw1jTyFPLC30UMkyfzIBO5u7hA56GaJ6bMPB0LWkgfDrVrch2H2YRB9gkeWOaQIwHmJhvr1kqtxr_EgfgQL-7OTg8DOaeaR9Ykjr0vvfApqjlJ_KI1tmk" />
              </div>
            </div>
            <div className="bg-secondary/5 rounded-lg p-10 border border-outline-variant/10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>language</span>
                </div>
                <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface">Bilingual Support</h3>
                <p className="text-on-surface-variant leading-relaxed">Localized experiences in both Arabic &amp; English, ensuring precision of intent and ease of use for our global community.</p>
              </div>
              <div className="mt-12 flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/10">
                <div className="text-center flex-1">
                  <span className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">AR</span>
                  <span className="font-['Plus_Jakarta_Sans'] font-semibold">مرحبا</span>
                </div>
                <div className="w-[1px] h-8 bg-outline-variant/20"></div>
                <div className="text-center flex-1">
                  <span className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">EN</span>
                  <span className="font-['Plus_Jakarta_Sans'] font-semibold">Welcome</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-lg p-10 shadow-[0_0_40px_rgba(83,100,67,0.15)] flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-stone-500" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>self_improvement</span>
              </div>
              <h4 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface">Mindful Intervals</h4>
              <p className="text-sm text-on-surface-variant">Structured recovery blocks built into your daily training schedule.</p>
            </div>
            <div className="md:col-span-2 rounded-lg overflow-hidden relative group">
              <img alt="Meditation" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABZ_CuKbOS31uDSQSshuf428pwJynR4m16f7eLehBDE2scMUrFGEyfRCsNLjGfktA9q7q64gPS9USeZKOxDdlevnBTtAqxs6KfT45Fn-MTv66_B0_c4Ae8wgG6KQIsLVoPzI0zV2s11PqSAERv99sP6Z8Aa_r2MogUetSF9UgD36Q4JoaibRmi2KB79YLSY5-B9CdEQ1IfpZbPiiIxDpmgpknofa0Gbn4L36QciYDxq5MU1eeT5s4B09c2zwplGonX4a4B_NFsDqg" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex flex-col justify-end p-10">
                <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-2 font-['Manrope']">The Philosophy</span>
                <h4 className="text-white text-3xl font-bold font-['Plus_Jakarta_Sans']">Recovery as an Art Form</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 px-8 mb-32">
          <div className="max-w-4xl mx-auto bg-primary rounded-xl p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-['Plus_Jakarta_Sans'] text-on-primary">Ready to enter the sanctuary?</h2>
              <p className="text-primary-container text-lg max-w-xl mx-auto opacity-80 leading-relaxed">Join a elite community of athletes who prioritize recovery as much as their output. Your journey to intentional growth begins here.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/pricing" className="bg-on-primary text-primary px-10 py-4 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-white transition-all inline-block">Start Your Free Trial</Link>
                <Link to="/athlete/dashboard" className="border border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-lg hover:bg-white/10 transition-all inline-block">View Athlete Portal</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-stone-100 dark:bg-stone-950 w-full border-t border-stone-200/20">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-lg font-bold text-stone-800 dark:text-stone-100 font-['Plus_Jakarta_Sans']">Aether Wellness</div>
            <p className="font-['Manrope'] text-xs uppercase tracking-widest text-stone-500 dark:text-stone-500">© 2024 Aether Sanctuary. Cultivating growth through intentional recovery.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-['Manrope'] text-xs uppercase tracking-widest text-emerald-900 dark:text-emerald-200 hover:text-emerald-600 transition-all" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-xs uppercase tracking-widest text-emerald-900 dark:text-emerald-200 hover:text-emerald-600 transition-all" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-xs uppercase tracking-widest text-emerald-900 dark:text-emerald-200 hover:text-emerald-600 transition-all" href="#">Athlete Portal</a>
            <a className="font-['Manrope'] text-xs uppercase tracking-widest text-emerald-900 dark:text-emerald-200 hover:text-emerald-600 transition-all" href="#">Bilingual Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
