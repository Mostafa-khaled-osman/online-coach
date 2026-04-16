import React from 'react';

export function SignIn() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <nav className="w-full top-0 sticky bg-[#faf9f4] dark:bg-stone-950/80 backdrop-blur-xl z-50">
        <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
          <div className="font-['Noto_Serif'] text-2xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-50">
            Mindful Curator
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a className="font-['Noto_Serif'] text-lg font-medium text-stone-600 dark:text-stone-400 hover:text-emerald-800 transition-opacity duration-300 hover:opacity-80" href="#">Platform</a>
            <a className="font-['Noto_Serif'] text-lg font-medium text-stone-600 dark:text-stone-400 hover:text-emerald-800 transition-opacity duration-300 hover:opacity-80" href="#">Wellness</a>
            <a className="font-['Noto_Serif'] text-lg font-medium text-stone-600 dark:text-stone-400 hover:text-emerald-800 transition-opacity duration-300 hover:opacity-80" href="#">Community</a>
          </div>
          <div className="flex items-center">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-medium transition-transform scale-102 active:scale-95 hover:opacity-80">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-grow flex items-center justify-center px-4 py-20 relative">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
        <div className="w-full max-w-[480px] bg-surface-container-lowest shadow-[0_10px_40px_rgba(48,51,46,0.06)] rounded-3xl p-10 md:p-14 border border-outline-variant/10">
          <div className="text-center mb-10">
            <h1 className="font-['Noto_Serif'] text-3xl md:text-4xl font-bold text-on-background tracking-tight mb-3">Welcome Back</h1>
            <p className="text-on-surface-variant font-light tracking-wide">Enter your details to return to your sanctuary.</p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant ml-2 uppercase tracking-widest text-[10px]" htmlFor="email">Email Address</label>
              <div className="relative group">
                <input className="w-full px-6 py-4 rounded-full bg-surface-container-high border-transparent focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all duration-300 outline-none text-on-background placeholder:text-outline" id="email" placeholder="name@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="block text-sm font-semibold text-on-surface-variant uppercase tracking-widest text-[10px]" htmlFor="password">Password</label>
                <a className="text-[11px] font-bold text-secondary uppercase tracking-widest hover:opacity-80 transition-opacity" href="#">Forgot Password?</a>
              </div>
              <div className="relative group">
                <input className="w-full px-6 py-4 rounded-full bg-surface-container-high border-transparent focus:bg-surface-container-lowest focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all duration-300 outline-none text-on-background placeholder:text-outline" id="password" placeholder="••••••••" type="password" />
              </div>
            </div>
            <div className="pt-4">
              <button className="w-full bg-primary py-5 rounded-full text-white font-bold tracking-wide shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300" type="submit">
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-12 text-center">
            <p className="text-on-surface-variant text-sm">
              Don't have an account? 
              <a className="font-bold text-primary ml-1 hover:underline underline-offset-4 transition-all" href="#">Sign Up</a>
            </p>
          </div>
          <div className="mt-10 pt-10 border-t border-surface-container-high flex items-center justify-center space-x-2 text-outline">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>lock</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure Symmetry Access</span>
          </div>
        </div>
      </main>
      <footer className="w-full mt-auto bg-[#faf9f4] dark:bg-stone-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full border-t border-stone-200/20 dark:border-stone-800/20">
          <div className="font-['Noto_Serif'] font-bold text-stone-800 dark:text-stone-100 mb-6 md:mb-0">
            Mindful Curator
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Privacy</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Terms</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 dark:text-stone-400 hover:text-emerald-700 transition-colors" href="#">Support</a>
          </div>
          <div className="font-['Manrope'] text-sm tracking-wide text-stone-500 dark:text-stone-400">
            © 2024 Mindful Curator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
