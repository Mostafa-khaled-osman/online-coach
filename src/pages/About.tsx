import React from 'react';

export function About() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#faf9f4] dark:bg-stone-950">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <div className="font-['Noto_Serif'] text-2xl font-bold text-[#44674d] dark:text-emerald-400">
            Symmetry Athletic
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-[#30332e]/70 dark:text-stone-400 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Home</a>
            <a className="text-[#30332e]/70 dark:text-stone-400 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Wellness</a>
            <a className="text-[#44674d] dark:text-emerald-400 border-b-2 border-[#44674d] pb-1 font-medium transition-colors duration-300" href="#">About</a>
            <a className="text-[#30332e]/70 dark:text-stone-400 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Journal</a>
            <a className="text-[#30332e]/70 dark:text-stone-400 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#44674d] dark:text-emerald-400 cursor-pointer" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>account_circle</span>
          </div>
        </div>
        <div className="bg-[#eeeee8] dark:bg-stone-900 h-[1px] w-full"></div>
      </nav>
      <main className="max-w-7xl mx-auto px-8 flex-grow">
        <section className="py-24 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8 order-2 md:order-1">
            <h1 className="font-['Noto_Serif'] text-5xl md:text-6xl text-on-surface leading-tight">
              Cultivating balance <br /><span className="italic text-primary">through intentionality.</span>
            </h1>
            <div className="space-y-6 max-w-xl">
              <p className="text-lg leading-relaxed opacity-90">
                Founded on the principles of symmetry and mindful performance, Symmetry Athletic represents a departure from the noise of the modern fitness industry. We believe that true athletic excellence is not born from exertion alone, but from the harmonious integration of movement, recovery, and mental clarity.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Our approach is curated for the discerning individual who seeks more than a routine—they seek a lifestyle sanctuary. We provide the tools and environment necessary to refine your physical potential while maintaining a grounded, restorative presence.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary/30"></div>
                <span className="font-['Noto_Serif'] italic text-xl">Julian Vance, Founder</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] relative">
              <img alt="Julian Vance Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuMfvSj1L33Q74SO1VWL_xMQjiat8vKllGlz4KyeE16HyP-e7i8l3CL7W-SZw7SOaVZ8FBBgTIv9aNSXH2W1xX-Y1-4EljdSEkAxLtrzukOM7ZT1xa4aWwolDxEn8MUwkyhC33lhy90enPi8V3F5ymbGANCWzM2kqDC3X9wd6C93d0SEJL5HZnCs2QmMDkA8_6NMCcsgAQGtPsDSy_JEcTAlJJMhSO1fq68-DG7vbmMBeOe_6Bs-yLP-xmOF7BNL2CVsyrV5xTMjo" />
            </div>
          </div>
        </section>
        <section className="py-24 border-t border-surface-container/50">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="font-['Noto_Serif'] text-4xl text-on-surface">Let’s Begin Your Journey</h2>
              <p className="text-on-surface-variant text-lg">
                Whether you are interested in private athletic curation, wellness consulting, or simply want to learn more about our philosophy, we welcome the connection.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-['Manrope'] uppercase tracking-widest text-on-surface-variant">Inquiries</p>
                    <p className="text-lg font-medium">hello@symmetryathletic.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>location_on</span>
                  </div>
                  <div>
                    <p className="text-sm font-['Manrope'] uppercase tracking-widest text-on-surface-variant">Studio</p>
                    <p className="text-lg font-medium">1240 Serenity Blvd, Suite 400</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
              <form action="#" className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-['Manrope'] text-on-surface-variant ml-4">Full Name</label>
                  <input className="w-full px-6 py-4 rounded-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 placeholder:text-outline/50" placeholder="Your name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-['Manrope'] text-on-surface-variant ml-4">Email Address</label>
                  <input className="w-full px-6 py-4 rounded-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 placeholder:text-outline/50" placeholder="example@domain.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-['Manrope'] text-on-surface-variant ml-4">Message</label>
                  <textarea className="w-full px-6 py-4 rounded-[1.5rem] bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 placeholder:text-outline/50 resize-none" placeholder="How can we assist you?" rows={4}></textarea>
                </div>
                <button className="w-full py-5 bg-primary text-on-primary rounded-full font-semibold text-lg hover:bg-primary-dim hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-primary/10" type="button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <a className="fixed bottom-10 right-10 z-50 group" href="#">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-300"></div>
        <div className="relative bg-primary text-on-primary p-5 rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(48,51,46,0.06)] group-hover:scale-105 transition-transform duration-300">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>chat</span>
          <span className="font-medium pr-1">Connect on WhatsApp</span>
        </div>
      </a>
      <footer className="bg-[#faf9f4] dark:bg-stone-950 w-full border-t border-[#eeeee8] dark:border-stone-800 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 w-full max-w-7xl mx-auto">
          <div className="font-['Noto_Serif'] font-semibold text-[#44674d]">
            Symmetry Athletic
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-['Manrope'] text-sm tracking-wide text-[#30332e] dark:text-stone-400">
            <a className="text-[#30332e]/60 hover:text-[#44674d] transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
            <a className="text-[#30332e]/60 hover:text-[#44674d] transition-opacity opacity-80 hover:opacity-100" href="#">Terms of Service</a>
            <a className="text-[#30332e]/60 hover:text-[#44674d] transition-opacity opacity-80 hover:opacity-100" href="#">FAQ</a>
          </div>
          <div className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-stone-400">
            © 2024 Symmetry Athletic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
