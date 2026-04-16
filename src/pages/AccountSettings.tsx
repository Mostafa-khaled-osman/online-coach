import React from 'react';

export function AccountSettings() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <header className="w-full top-0 sticky z-50 bg-[#faf9f4] dark:bg-stone-950">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
          <div className="text-2xl font-['Noto_Serif'] font-bold text-[#30332e] dark:text-stone-50">Symmetry Athletic</div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-[#44674d] dark:text-emerald-400 border-b-2 border-[#44674d] pb-1 font-bold font-['Noto_Serif'] text-lg" href="#">Profile</a>
            <a className="text-[#30332e]/70 dark:text-stone-400 font-normal hover:text-[#44674d] transition-colors font-['Noto_Serif'] text-lg" href="#">Security</a>
            <a className="text-[#30332e]/70 dark:text-stone-400 font-normal hover:text-[#44674d] transition-colors font-['Noto_Serif'] text-lg" href="#">Notifications</a>
          </nav>
          <div className="flex items-center gap-5">
            <button className="hover:opacity-80 transition-all duration-300 text-[#44674d] dark:text-emerald-500">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</span>
            </button>
            <button className="hover:opacity-80 transition-all duration-300 text-[#44674d] dark:text-emerald-500">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>help_outline</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high ring-2 ring-primary/20">
              <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXcOQvagceuXa5abYI04egqvjdjFMhbt8IqaWfjrO_SROS_54HJUuqlbQ1soKTSZqe0Jz6penzyWLeITOtg8l4cReftaAmkKkNEKauYxYsPe3wVA3Q9ducj5SfMsoO3J0GoP_O5kMLmkAoADBEcQsvVop2NDTInJROpf8dfI0lNe2vrVITk4zm3xUNYOfy9jcwtegainMYGd0vCP4HpPrEWhipciuQnqgOTMuD4YWPiqLsDdTz57sH9ph1PJT5Q-weKhqBsGQWafc" />
            </div>
          </div>
        </div>
        <div className="bg-[#eeeee8] dark:bg-stone-900 h-px w-full"></div>
      </header>
      <main className="flex-grow max-w-7xl mx-auto w-full px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <header className="mb-12">
              <h1 className="text-5xl font-['Noto_Serif'] font-bold text-on-surface mb-2 tracking-tight">Account Settings</h1>
              <p className="text-on-surface-variant font-body text-lg">Curate your personal sanctuary and preferences.</p>
            </header>
            <section className="space-y-12">
              <div className="flex items-center gap-8 bg-surface-container-low p-8 rounded-3xl">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] border-4 border-white">
                    <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ZI6tvyTQSy774weJVlxRGRQxUIwUG-E6xdSd42Fjp5Er-4AhqLpNgh3FqMW0e1LskNn9zO2wnbL_YfyMiHjUw6qoGhReb3_dNkveBfHCBp4U1An7x3APsUrzEzMg-zN4D9n9TUYC_HRHeTxsEU060tDiB3JUkKWYMUKQ0dlCtLU21RUdxeZ00egtpVuauIFehZRz9Q48XqRxQNixjIRlNZmO_jmkbh_FPGE-cTNIGXbvOLuEnrEu66ZgRZbbviqiJ5Kwl47lMSU" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg scale-90 hover:scale-100 transition-transform">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>edit</span>
                  </button>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-body">Profile Picture</h3>
                  <p className="text-sm text-on-surface-variant mb-3">Update your photo to personalize your dashboard.</p>
                  <div className="flex gap-4">
                    <button className="text-sm font-semibold text-primary hover:underline">Change Photo</button>
                    <button className="text-sm font-semibold text-error/70 hover:underline">Remove</button>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">Full Name</label>
                  <input className="w-full px-6 py-4 rounded-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface font-medium" type="text" defaultValue="Elena Thorne" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">Email Address</label>
                  <input className="w-full px-6 py-4 rounded-full bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface font-medium" type="email" defaultValue="elena.thorne@mindfulcurator.com" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">Bio</label>
                  <textarea className="w-full px-6 py-4 rounded-[2rem] bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface font-medium resize-none" rows={3} defaultValue="Elite long-distance runner and holistic wellness advocate. Focused on mindful performance and sustainable recovery."></textarea>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-[3rem] shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
                <h2 className="text-2xl font-['Noto_Serif'] font-bold mb-8">Personal Preferences</h2>
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-secondary-container rounded-2xl text-on-secondary-container">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>visibility</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Public Profile</h4>
                        <p className="text-sm text-on-surface-variant max-w-sm">Allow other Symmetry athletes to see your achievements and training streaks.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-14 h-8 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-primary-container rounded-2xl text-on-primary-container">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>auto_awesome</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Smart Suggestions</h4>
                        <p className="text-sm text-on-surface-variant max-w-sm">Personalized workout adjustments based on your sleep and recovery metrics.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-14 h-8 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 pt-6">
                <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform duration-200 shadow-lg shadow-primary/10" type="button">
                  Save Changes
                </button>
                <button className="px-12 py-5 rounded-full font-bold text-lg text-primary border border-outline-variant/30 hover:bg-surface-container-low transition-all" type="button">
                  Discard
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="w-full mt-auto bg-[#eeeee8] dark:bg-stone-900">
        <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <div className="flex flex-col gap-2">
            <div className="font-['Noto_Serif'] italic text-xl text-[#44674d] dark:text-emerald-500">Symmetry Athletic</div>
            <p className="font-['Manrope'] text-sm text-[#30332e]/60 dark:text-stone-500">© 2024 Symmetry Athletic. All rights reserved.</p>
          </div>
          <nav className="flex gap-8">
            <a className="font-['Manrope'] text-sm text-[#30332e] hover:text-[#44674d] transition-colors ease-in-out duration-200" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-sm text-[#30332e] hover:text-[#44674d] transition-colors ease-in-out duration-200" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-sm text-[#30332e] hover:text-[#44674d] transition-colors ease-in-out duration-200" href="#">Support</a>
          </nav>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-[#30332e]/60" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>language</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-[#30332e]/60" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>public</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
