import React from 'react';

export function TrainerChatHub() {
  return (
    <div className="text-on-surface selection:bg-primary-fixed selection:text-on-primary-container font-body bg-background">
      <aside className="h-screen w-72 flex flex-col fixed left-0 top-0 bg-[#f5f4ed] dark:bg-stone-900 py-12 px-6 z-50">
        <div className="mb-12 px-6">
          <h1 className="text-2xl font-bold tracking-tight text-[#536443] dark:text-emerald-500 font-['Plus_Jakarta_Sans']">Aether Wellness</h1>
          <p className="text-xs font-medium tracking-widest uppercase opacity-50 mt-1">Elite Recovery</p>
        </div>
        <nav className="flex flex-col gap-2 flex-grow">
          <a className="flex items-center gap-4 text-[#31332e] dark:text-stone-300 px-6 py-3 opacity-70 hover:bg-[#e3e3db] dark:hover:bg-stone-800 hover:opacity-100 transition-all duration-300 rounded-full" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>dashboard</span>
            <span className="font-medium">Dashboard</span>
          </a>
          <a className="flex items-center gap-4 text-[#31332e] dark:text-stone-300 px-6 py-3 opacity-70 hover:bg-[#e3e3db] dark:hover:bg-stone-800 hover:opacity-100 transition-all duration-300 rounded-full" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>fitness_center</span>
            <span className="font-medium">Workouts</span>
          </a>
          <a className="flex items-center gap-4 text-[#31332e] dark:text-stone-300 px-6 py-3 opacity-70 hover:bg-[#e3e3db] dark:hover:bg-stone-800 hover:opacity-100 transition-all duration-300 rounded-full" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>restaurant</span>
            <span className="font-medium">Nutrition</span>
          </a>
          <a className="flex items-center gap-4 text-[#31332e] dark:text-stone-300 px-6 py-3 opacity-70 hover:bg-[#e3e3db] dark:hover:bg-stone-800 hover:opacity-100 transition-all duration-300 rounded-full" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>analytics</span>
            <span className="font-medium">Progress</span>
          </a>
          <a className="flex items-center gap-4 bg-[#536443] text-white rounded-full px-6 py-3 transition-all duration-300" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>chat_bubble</span>
            <span className="font-medium">Messages</span>
          </a>
        </nav>
        <div className="mt-auto px-6 flex items-center gap-4 pt-8">
          <img alt="Athlete Profile Avatar" className="w-10 h-10 rounded-full bg-surface-container shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTiUJ5YmINPlxdV6V8rdtzY1gwE3FQjdq1ob_VUfao4aU5LatcFWhGStAxIgcBf7UDFnraGgPuiryawMKE94HfmsBL8xBhzAcw5DHvbyVgpNOeQQ4-gvKWRI89oFiKtnWtXrbynuqYpvXnl8ZvTbmK0XQNg8B_nRmGLzrnsD434BD52gAe_7wy4_elETIeyevrLFSoWmRvhjip7lMTcrlqC-nvDfVhD9MBfbs0k4Kgctg4lG5_fQ4nu_IS15DJKntFq7uTYsBmnJ0" />
          <div className="flex flex-col">
            <span className="text-sm font-bold">Alex Thorne</span>
            <span className="text-xs opacity-60">Elite Member</span>
          </div>
        </div>
      </aside>
      <main className="ml-72 min-h-screen flex flex-col relative bg-background overflow-hidden">
        <header className="docked full-width top-0 sticky z-40 flex justify-between items-center w-full pl-8 pr-12 py-6 bg-[#fbf9f4]/60 backdrop-blur-md">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</span>
              <input className="w-full bg-surface-container-low border-none rounded-full py-2.5 pl-12 pr-6 focus:ring-2 focus:ring-primary/20 text-sm" placeholder="Search conversations..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:scale-105 transition-transform duration-200">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-primary hover:scale-105 transition-transform duration-200">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant/30"></div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#536443]">Athlete Hub</span>
              <img alt="Athlete Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIiim1tfoAThANHDznbeydlLR217s5mUoLDVN0gWG8KOLk1_SaPmD5iCSNf3oeI83PG9T514iR74mo6_eEWD303Nb9iwnsOWuOSOoa7_OYH-XGoDeSVikLfEkbgeg3gF6V81HTwG_gGy4w7_Osk9qbv-06Iw8SNm9EkYoz-2nfH7RNgMITJgZvMxwfSDbD446l6_sqO_EDLXmh-WTcGCHzUw1EzD5_Vfl1eKlrmEXMH2_jdsMYN5oaiWHuWImgJcY3GeZ6YzsEL-U" />
            </div>
          </div>
        </header>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <img alt="Gym Background" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsWOayNCDronzp3rWooDynPtaRj6Ce4gLk0oqAi7fV8yJFpEJu-qH-C2LUBxVTFSzJklogKgRLz0YjUgXUB03J91532sdqRtEywjmsRcE3JCWaVWSiDeeBj4yLNEV2PCA9lovdhIdDJ7GkkbzG_8cldX0GO4DHPoLNnup9bDPLIPpzcp6fldHsYWlozKJDtG5Pv3gCVCJtwSy73yku9_NvxjW-UxAwqHRjDyAdSkejFhklo9SFwstXaYUsZMEs_XxCWOBzOyXSYJ8" />
        </div>
        <div className="relative z-10 flex flex-col flex-grow max-w-5xl mx-auto w-full px-8 pb-8">
          <div className="py-8 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight text-on-surface">Trainer Chat Hub</h2>
              <p className="text-secondary font-medium mt-1">Consulting with Coach Julian • Online</p>
            </div>
            <div className="flex -space-x-3">
              <img alt="Trainer" className="w-12 h-12 rounded-full border-4 border-background object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT4SHegYn22C5hu_0FRjPJzKN9Y43blKrwZViTPWXkO3Kjru0Z5hKHjqtxZ9nb9XZnNZf1Jimm0-s9SBKiMQbGdH0YHOVJ1WcoNZYzs0Dq0UIDIDPcyB-bBA-2C1L3DTIpydU-c76i8ScDqtM0-J6vD52UTG7M4z37YkTUDxbUJOEv6HLY6zrXT0c46vOH-eH0iPqjZMUPeGOsscKsAwgAMeQkKgp42m2gBYSOQPsIdRZGKGfPR5Sx0YwQ-hf3JGsyuU134tvRGZ8" />
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center border-4 border-background text-on-primary-container text-xs font-bold">+2</div>
            </div>
          </div>
          <div className="flex-grow bg-surface-container-low/40 rounded-xl overflow-hidden flex flex-col shadow-sm">
            <div className="flex-grow p-8 overflow-y-auto space-y-8" style={{ maskImage: 'linear-gradient(to top, black 95%, transparent 100%)' }}>
              <div className="flex justify-center">
                <span className="px-4 py-1 rounded-full bg-surface-container text-[10px] uppercase tracking-widest font-bold text-outline">Today, October 24</span>
              </div>
              <div className="flex gap-4 max-w-[80%]">
                <img alt="Julian" className="w-10 h-10 rounded-full self-end shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFvp7WP42l7t6Tib7pRuJg-KkNriJU5pnXpB6TXYFuxzw5AiL5dgm5radeeFx9FP0DlqkXxlSLeVOo9Nl3aXd693jC6_XvWQ6u1X4KL7UnxJdBYQ66Nl-aLHdMdfm-T1nT3jb_mC6-f5h2Bxnfkflna-Wc_1TlHHqbI5oLV7nmKh5lIURgQhuDHLlcUPD3mJCzD9FFZ4qyOjhW_N6w8hIH6XNrf1VPrVJvxJ-mGF8KjWWh4Kz0czqFOg1BctNF9gN4x221J1LT5jM" />
                <div className="space-y-1">
                  <div className="bg-surface-container-lowest p-5 rounded-lg rounded-bl-none shadow-sm">
                    <p className="text-on-surface leading-relaxed font-body">Good morning Alex! I reviewed your recovery metrics from last night. Your HRV is trending upwards—that's excellent progress. How are your legs feeling after the interval session?</p>
                  </div>
                  <span className="text-[10px] text-outline ml-1">09:12 AM</span>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-4 max-w-[80%] ml-auto">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center self-end shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>person</span>
                </div>
                <div className="space-y-1 text-right">
                  <div className="bg-secondary text-on-secondary p-5 rounded-lg rounded-br-none shadow-sm">
                    <p className="leading-relaxed font-body">Feeling surprisingly fresh! The extra mobility work we added on Tuesday definitely made a difference. Ready for today's session.</p>
                  </div>
                  <span className="text-[10px] text-outline mr-1">09:15 AM</span>
                </div>
              </div>
              <div className="flex gap-4 max-w-[80%]">
                <img alt="Julian" className="w-10 h-10 rounded-full self-end shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC65nBm6qyfo21I0I-YcPjFb5-xuoC1Qsjqvz9Kukk_FPLAa8UuzhClf-cH0_dzsAEakh_Hpy2UCns_iigCiQFnmSb7nArHwKGF3yKNNtpLFa3isJ1pGHvXChldBcw6LuZ7Hkm-Z2Co96bPRz1n1D9r8_07FTeJKfoWQQTc6KLGNUYD6JyWMhVCJByjW5S1gXgooMLyLeDAAeMa2bN-RVpaxHDlT-Kjo2iE5Rn6hcoRt4c1vcn2OrHoq6yCan5iEsiR3Tw5nGzaDr8" />
                <div className="space-y-1">
                  <div className="bg-[#d5e9bf] text-[#465736] p-5 rounded-lg rounded-bl-none shadow-sm">
                    <p className="leading-relaxed font-body">That's exactly what I wanted to hear. Let's focus on maintaining that fluidity today. I've uploaded the refined sequence to your dashboard. High focus on eccentric control.</p>
                  </div>
                  <span className="text-[10px] text-outline ml-1">09:18 AM</span>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-4 max-w-[80%] ml-auto">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center self-end shadow-sm">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>person</span>
                </div>
                <div className="space-y-1 text-right">
                  <div className="bg-secondary-container text-on-secondary-container p-5 rounded-lg rounded-br-none shadow-sm">
                    <p className="leading-relaxed font-body">Perfect, will check it now. Should I record the final set for form review?</p>
                  </div>
                  <span className="text-[10px] text-outline mr-1">09:20 AM</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-surface-container-lowest/80 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center gap-3 bg-surface-container-low p-1 rounded-full shadow-inner">
                  <button className="px-4 py-1.5 rounded-full text-xs font-bold transition-all bg-white shadow-sm text-primary">English</button>
                  <button className="px-4 py-1.5 rounded-full text-xs font-medium transition-all text-outline hover:text-on-surface">العربية</button>
                </div>
              </div>
              <div className="flex items-end gap-4 max-w-4xl mx-auto">
                <div className="flex gap-2 pb-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-outline hover:text-primary hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>attach_file</span>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-outline hover:text-primary hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add_reaction</span>
                  </button>
                </div>
                <div className="flex-grow relative">
                  <textarea className="w-full bg-surface-container-low border-none rounded-xl py-3.5 px-6 focus:ring-2 focus:ring-primary/20 resize-none font-body text-on-surface min-h-[52px]" placeholder="Type your message..." rows={1}></textarea>
                </div>
                <button className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-lg hover:scale-105 transition-transform duration-200">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>send</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            <button className="whitespace-nowrap px-6 py-2 rounded-full border border-outline-variant/30 text-xs font-bold text-outline hover:border-primary/40 hover:text-primary transition-all">Schedule Call</button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full border border-outline-variant/30 text-xs font-bold text-outline hover:border-primary/40 hover:text-primary transition-all">Request Video Review</button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full border border-outline-variant/30 text-xs font-bold text-outline hover:border-primary/40 hover:text-primary transition-all">Log Recovery Stats</button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full border border-outline-variant/30 text-xs font-bold text-outline hover:border-primary/40 hover:text-primary transition-all">Share Nutrition Log</button>
          </div>
        </div>
      </main>
    </div>
  );
}
