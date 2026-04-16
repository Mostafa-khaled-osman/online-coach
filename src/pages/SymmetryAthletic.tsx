import React from 'react';
import { Link } from 'react-router-dom';

export function SymmetryAthletic() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f4]/80 dark:bg-[#30332e]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <div className="font-['Noto_Serif'] italic text-2xl tracking-tight text-[#30332e] dark:text-[#faf9f4]">
            Symmetry Athletic
          </div>
          <div className="hidden md:flex gap-10 font-['Noto_Serif'] text-lg font-medium">
            <Link className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-colors" to="/dashboard">Coaching</Link>
            <Link className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-colors" to="/articles">Methods</Link>
            <Link className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-colors" to="/success-stories">Retreats</Link>
            <Link className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] transition-colors" to="/articles">Journal</Link>
          </div>
          <Link to="/signin" className="bg-primary text-on-primary px-8 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300 scale-98 transition-all duration-200 ease-in-out inline-block">
            Begin Journey
          </Link>
        </div>
      </nav>
      <main>
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Symmetry Athletic Sanctuary" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6SKkz63PLfls7dM8wGpGzx8XwcGTA8Gj8l1UbI6uqwk7waTpd-aDOLKRhxUD4M6iaVdiAsHfc3L1W5yK8Qa7Y4ZUOrqkz5zBysmmwpi3n0CBdN9WNvmG8ghz0im_b6S_C5fxo1PW3lAhifUtU09vzdiarn9i3iP5h0mgn6rui4bxXFAWH5xOtfnpnTfowR2Qn5hFEuqBltcHoPocSL89iegVg2qMYPWr0YhF64S84Zhdbr2N4K1Uri9AmIn7RNKYU52sQmS-WyfI" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#30332e]/40 to-[#30332e]/20"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <h1 className="font-['Noto_Serif'] text-5xl md:text-7xl mb-6 tracking-tight leading-tight">
              Your Journey to <br /><span className="italic">Holistic Symmetry</span>
            </h1>
            <p className="font-['Manrope'] text-xl md:text-2xl mb-12 text-white/90 font-light max-w-2xl mx-auto">
              Personalized elite coaching for the mindful athlete.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/pricing" className="bg-[#84A98C] text-on-surface px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-xl inline-block">
                Start Your Journey
              </Link>
            </div>
          </div>
          <div className="absolute bottom-20 left-0 w-full z-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 backdrop-blur-md bg-white/10 rounded-[2rem] p-8 md:p-12 border border-white/10">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
                </div>
                <span className="text-white font-medium text-sm md:text-base tracking-wide">Personalized Training</span>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>nutrition</span>
                </div>
                <span className="text-white font-medium text-sm md:text-base tracking-wide">Mindful Nutrition</span>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>self_improvement</span>
                </div>
                <span className="text-white font-medium text-sm md:text-base tracking-wide">Recovery Protocols</span>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>public</span>
                </div>
                <span className="text-white font-medium text-sm md:text-base tracking-wide">Global Support</span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="font-['Noto_Serif'] text-4xl md:text-5xl text-on-surface mb-8 leading-snug">The Balance of Performance and Peace</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  At Symmetry Athletic, we believe that true athletic excellence stems from a harmonious relationship between the physical body and the disciplined mind. Our approach is curated for those who seek not just results, but a sustainable lifestyle of mindful vigor.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                    <div>
                      <h4 className="font-semibold text-on-surface">Bespoke Programming</h4>
                      <p className="text-on-surface-variant text-sm">Every plan is handcrafted to align with your unique physiological markers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                    <div>
                      <h4 className="font-semibold text-on-surface">Data-Driven Mindfulness</h4>
                      <p className="text-on-surface-variant text-sm">We combine state-of-the-art biometrics with centuries-old focus techniques.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img alt="The Symmetry Athlete" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa_KI4lU1cYWNUTYfK1qYTaqxxg-J5-k7rhudEx975agq2LI4_czXppPu-3EmRNHlR6bYwO7Xu7WIGkjpcK8chWkw9BE9Ul9NC21WVzHLvflyL00Pn_C8FZGgrnWf2NktF4_8o0HAoRzV8FOgPTpx8u3ocxeOlni0A74OVdzBGQDVLDGfpuMR_dNPt1T1auVjKpTNTx0bHNIJfRtSL05iAUJBmjZ9aP76btXRwMIkr73hGbedFQWjztcIGuICDPvck68V41UI5E_Q" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-[2rem] shadow-xl max-w-xs">
                  <p className="italic font-['Noto_Serif'] text-primary-dim text-lg mb-2">"Symmetry changed my perspective on what it means to be strong."</p>
                  <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">Marcus Thorne, Elite Rower</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full rounded-t-[2rem] mt-20 bg-[#eeeee8] dark:bg-[#252823]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-7xl mx-auto gap-12 md:gap-0">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-['Noto_Serif'] text-xl text-[#30332e] dark:text-[#faf9f4]">
              Symmetry Athletic
            </div>
            <p className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 max-w-xs text-center md:text-left">
              © 2024 Symmetry Athletic. Designed for Mindful Performance.
            </p>
          </div>
          <div className="flex gap-10 font-['Manrope'] text-sm tracking-wide">
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-200" href="#">Privacy</a>
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-200" href="#">Terms</a>
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-200" href="#">Contact</a>
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-200" href="#">Instagram</a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>share</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>mail</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
