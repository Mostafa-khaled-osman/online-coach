import React from 'react';

export function ExerciseManager() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <nav className="bg-[#faf9f4] dark:bg-[#1a1c18] flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto top-0 z-50">
        <div className="text-2xl font-['Noto_Serif'] text-[#44674d] dark:text-[#84a98c]">Symmetry Athletic</div>
        <div className="hidden md:flex items-center space-x-8">
          <a className="font-['Noto_Serif'] text-[#30332e] dark:text-[#eeeee8] opacity-70 hover:opacity-100 transition-opacity" href="#">Explore</a>
          <a className="font-['Noto_Serif'] text-[#44674d] dark:text-[#84a98c] border-b-2 border-[#44674d] pb-1 hover:opacity-100 transition-opacity" href="#">Workouts</a>
          <a className="font-['Noto_Serif'] text-[#30332e] dark:text-[#eeeee8] opacity-70 hover:opacity-100 transition-opacity" href="#">Library</a>
          <a className="font-['Noto_Serif'] text-[#30332e] dark:text-[#eeeee8] opacity-70 hover:opacity-100 transition-opacity" href="#">Community</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#44674d] dark:text-[#84a98c] scale-102 transition-transform duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
          </button>
          <button className="text-[#44674d] dark:text-[#84a98c] scale-102 transition-transform duration-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>account_circle</span>
          </button>
        </div>
      </nav>
      <div className="bg-[#eeeee8] dark:bg-[#30332e] h-[1px] w-full"></div>
      <main className="flex-grow flex items-center justify-center relative py-12 px-6">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
          <img className="w-full h-full object-cover grayscale desaturate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKCv-jnk4jV8ilNwl5PoJveLAH9xl-nqaBxOZ5fsA9-7Qc8oDP5CpF4YEj0tjkCXz-LdAipXED06MvztZgGkoODsz8CAljmzXQ-eGkfuYCfjyyX8qahR7CpIEO-biJf19jhfvfk7M-GgzAx6Mse-9-BzW2XwZQB-6X3L6hfddvQY0sUEWwnd7d2hwhnWXmgjcc_DTdnu-zrR0BoI1QTiMzpQswQpDq6r7TJnR8iEmdlXKj0aHVHQvGH20rEnH2Ik1ku8QkDqpGVas" alt="Background" />
        </div>
        <div className="relative z-10 w-full max-w-4xl">
          <header className="mb-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-['Noto_Serif'] text-on-surface font-bold tracking-tight mb-2">Exercise Manager</h1>
            <p className="text-on-surface-variant font-['Manrope'] text-lg">Curate your athletic library with mindful movement.</p>
          </header>
          <div className="bg-white/70 backdrop-blur-xl rounded-xl p-8 md:p-12 shadow-[0_10px_40px_rgba(48,51,46,0.06)] flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-['Noto_Serif'] text-sm uppercase tracking-widest text-on-surface-variant mb-4 block">Video Asset</label>
              <div className="flex-grow group relative border-2 border-dashed border-secondary-fixed bg-secondary-container/10 rounded-xl transition-all hover:bg-secondary-container/20 flex flex-col items-center justify-center p-8 text-center cursor-pointer min-h-[320px]">
                <div className="bg-secondary-container rounded-full p-4 mb-4 text-secondary scale-110">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>cloud_upload</span>
                </div>
                <p className="font-['Manrope'] text-on-surface font-semibold mb-1">Drag &amp; drop your video</p>
                <p className="font-['Manrope'] text-sm text-on-surface-variant">MP4 format recommended (Max 500MB)</p>
                <button className="mt-6 px-6 py-2 rounded-full border border-secondary text-secondary font-['Manrope'] text-sm hover:bg-secondary hover:text-on-secondary transition-all">
                  Browse Files
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <label className="font-['Noto_Serif'] text-sm uppercase tracking-widest text-on-surface-variant mb-3 block" htmlFor="title">Exercise Title</label>
                  <input className="w-full px-6 py-4 rounded-full bg-surface-container-high border-none text-on-surface font-['Manrope'] placeholder:text-outline-variant focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none" id="title" placeholder="e.g., Controlled Mobility Flow" type="text" />
                </div>
                <div>
                  <label className="font-['Noto_Serif'] text-sm uppercase tracking-widest text-on-surface-variant mb-3 block" htmlFor="instructions">Movement Instructions</label>
                  <textarea className="w-full px-6 py-4 rounded-xl bg-surface-container-high border-none text-on-surface font-['Manrope'] placeholder:text-outline-variant focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all outline-none resize-none" id="instructions" placeholder="Describe the focus points, breath patterns, and alignment cues..." rows={6}></textarea>
                </div>
              </div>
              <div className="mt-12 flex flex-col gap-4">
                <button className="w-full py-4 rounded-full bg-primary text-on-primary font-['Manrope'] font-bold text-lg shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all bg-gradient-to-r from-primary to-primary-dim">
                  Save Exercise
                </button>
                <button className="w-full py-2 text-on-surface-variant font-['Manrope'] text-sm hover:text-on-surface transition-colors">
                  Discard Draft
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>lightbulb</span>
              <h4 className="font-['Noto_Serif'] text-sm font-bold mb-1">Curation Tip</h4>
              <p className="text-xs text-on-surface-variant font-['Manrope']">Ensure your lighting is soft and lateral to capture muscle definition without harsh shadows.</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>history</span>
              <h4 className="font-['Noto_Serif'] text-sm font-bold mb-1">Auto-Save</h4>
              <p className="text-xs text-on-surface-variant font-['Manrope']">Drafts are saved every 30 seconds. You can return to your progress at any time.</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-on-surface-variant mb-2" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>visibility</span>
              <h4 className="font-['Noto_Serif'] text-sm font-bold mb-1">Preview</h4>
              <p className="text-xs text-on-surface-variant font-['Manrope']">Once uploaded, you can scrub through the video to set the perfect thumbnail frame.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#eeeee8] dark:bg-[#1a1c18] w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:items-start items-center">
          <span className="font-['Noto_Serif'] italic text-[#44674d] text-lg">Symmetry Athletic</span>
          <p className="font-sans text-sm text-[#30332e] dark:text-[#eeeee8] mt-1">© 2024 Symmetry Athletic. Mindful Movement.</p>
        </div>
        <div className="flex gap-8">
          <a className="font-sans text-sm text-[#30332e] opacity-60 hover:text-[#44646e] transition-colors" href="#">Privacy</a>
          <a className="font-sans text-sm text-[#30332e] opacity-60 hover:text-[#44646e] transition-colors" href="#">Terms</a>
          <a className="font-sans text-sm text-[#30332e] opacity-60 hover:text-[#44646e] transition-colors" href="#">Support</a>
          <a className="font-sans text-sm text-[#30332e] opacity-60 hover:text-[#44646e] transition-colors" href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
