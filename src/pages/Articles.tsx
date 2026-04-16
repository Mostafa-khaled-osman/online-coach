import React from 'react';

export function Articles() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f4]/80 dark:bg-[#30332e]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-['Noto_Serif'] tracking-tight text-[#30332e] dark:text-[#faf9f4]">
            Symmetry Athletic
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Programs</a>
            <a className="text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] pb-1 font-semibold hover:text-[#44674d] transition-colors duration-300" href="#">Articles</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Retreats</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Journal</a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</button>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium scale-102 transition-transform duration-200 hover:bg-primary-dim">
              Sign In
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-8 flex-grow">
        <header className="mb-20 max-w-2xl">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Knowledge Base</span>
          <h1 className="font-['Noto_Serif'] text-5xl md:text-6xl text-on-surface leading-tight mb-6">Informed Balance</h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Explore our curated collection of insights on holistic movement, mental resilience, and the science of athletic longevity.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          <article className="group cursor-pointer">
            <div className="aspect-[4/5] mb-8 overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 group-hover:scale-[1.01]">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8iQ3WpNfwHUqy2whhh5oymm-t6DUPNOj7C8rxaR4PwE00Vkr7k2HuUMafKfLlb6ZQTrb796f8kM0mRCyPiOrHU0lSrC6gMItZQM_Hd2GWL0S0Qv-eZpQNeo6JY30eyHT5l6JkG614sYTVVbuGEmFaODFHR2-pkT46iYpZv71fanxulpmNYvwN1t9pES75EUIZa3eoIhdQZDexdhFFugoP6M7Amojq3wrSYCKcjXNngA3tYWzpV3i1tMjT7UcvBTxPhVVUZ_tTc_4" alt="" />
            </div>
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-xs tracking-widest uppercase">Movement Science</span>
              <h2 className="font-['Noto_Serif'] text-2xl text-on-surface leading-snug group-hover:text-primary transition-colors duration-300">The Geometry of Functional Grace</h2>
              <p className="text-on-surface-variant font-body leading-relaxed line-clamp-3">
                How structural alignment in daily movement dictates long-term joint health and athletic explosive power.
              </p>
              <a className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all duration-300" href="#">
                Read More 
                <span className="material-symbols-outlined ml-1 text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </a>
            </div>
          </article>
          <article className="group cursor-pointer lg:mt-12">
            <div className="aspect-[4/5] mb-8 overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 group-hover:scale-[1.01]">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWVYER2rqYGWQAeahC2dQZ0fjP6kYNUH_V_U1nic0NwEmd5vU9MNbhCV2wXl6m1E9nVPlEu55kRevtoecVUac_ljiF_Zi0l9GXN1KUInvKeMHUYgSRfkT2pvf6d1K0IlsXv4nKok6hkW-lcYcM8ZAw-PQ5QNm5_P7dwk4Y0L8jtzg5pklsC0mHfmbVJbaPExMb80z16_jwA6c43K6aGZE4d6s0O0kn4nUnLLurZTUNO6w5YZyA-3d3giIiPbpr5Ngt2pFr-oQcmA4" alt="" />
            </div>
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-xs tracking-widest uppercase">Recovery</span>
              <h2 className="font-['Noto_Serif'] text-2xl text-on-surface leading-snug group-hover:text-primary transition-colors duration-300">Breath as a Regulatory Tool</h2>
              <p className="text-on-surface-variant font-body leading-relaxed line-clamp-3">
                Mastering the parasympathetic nervous system through intentional respiratory pacing for rapid post-training recovery.
              </p>
              <a className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all duration-300" href="#">
                Read More 
                <span className="material-symbols-outlined ml-1 text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </a>
            </div>
          </article>
          <article className="group cursor-pointer">
            <div className="aspect-[4/5] mb-8 overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 group-hover:scale-[1.01]">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb4CQ6anbrYF9hStlwOKbPr9BOAg-d1BcapMDG4LO7dq8eAQ5e9Sw50QJptH-z-hktG_vQEbewFYPLnqk7NJeUo8-eDl3_1nTutELNm7o6gJMSSj0lho3ZSHGKGS721yNuDS0oOgSOXYVBL7rBds95N2omUfeUOryyw8ogB8w1yaAqelBzgnV6hg4rT_qAa0Q7I8wdu8MZd5bUM8-RNaE042lpF1qBW3ro_JVKLxKpBbpSpfMsMgwvOGCXB9mvsXVVF_l30DeGPaA" alt="" />
            </div>
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-xs tracking-widest uppercase">Nutrition</span>
              <h2 className="font-['Noto_Serif'] text-2xl text-on-surface leading-snug group-hover:text-primary transition-colors duration-300">The Micronutrient Symphony</h2>
              <p className="text-on-surface-variant font-body leading-relaxed line-clamp-3">
                Beyond macros: why trace minerals are the true conductors of metabolic efficiency and cognitive clarity.
              </p>
              <a className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all duration-300" href="#">
                Read More 
                <span className="material-symbols-outlined ml-1 text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </a>
            </div>
          </article>
          <article className="group cursor-pointer">
            <div className="aspect-[4/5] mb-8 overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 group-hover:scale-[1.01]">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWklhsMd_nHk-7Y7hRcpbdSGQjjyl1l5ZHnpAd4f3-M3IxA9mlSViedi-4yOIjQAvYFUoGfCrDD0UW-fy1Z4ZrrA0NHXfN7ZQIi3SWc_pYPltkB7NAK_KhdxYjmzOV7A8crJ3nLSDHxaxzQBvLihVuzxQMAQ8j0gOGMSKAC57Zqf47fTOMXudvvYonkMrG-sDouc6OHqjIcCXTqOLdkIkBz88RLL1dM-m4Kj5be2Wftxj53HuYSoUK5Qwjr7KR9xwvRR539l02AWs" alt="" />
            </div>
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-xs tracking-widest uppercase">Psychology</span>
              <h2 className="font-['Noto_Serif'] text-2xl text-on-surface leading-snug group-hover:text-primary transition-colors duration-300">The Stoic Athlete</h2>
              <p className="text-on-surface-variant font-body leading-relaxed line-clamp-3">
                Applying ancient philosophy to modern competition to maintain composure under high-stakes performance pressure.
              </p>
              <a className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all duration-300" href="#">
                Read More 
                <span className="material-symbols-outlined ml-1 text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </a>
            </div>
          </article>
          <article className="group cursor-pointer lg:mt-12">
            <div className="aspect-[4/5] mb-8 overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 group-hover:scale-[1.01]">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_v067oiTu5lMyMxNKGAsnr-F3c4GDcOYnjNGmM-5ERVUYZQLH6agYVwsBVi8tY_8sQuvAiJtQt9l0SNXt6Zf88zJlhEONjp5nGiyqwNNnk4xh_CYEL8m-YR-AbWEWOHbBKE6l-glpI2EH8NPqiAe06_UBpmMgi48lMhkx9vZEQpsoVDiaeNwS-KSTuhWx16Otczo8go4OjUvhs3sFXb9g3QOtxairH2iJkDRc2j2rvD2kEv17cToYw63-C58TUKiYzb6RSE4jWZs" alt="" />
            </div>
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-xs tracking-widest uppercase">Technique</span>
              <h2 className="font-['Noto_Serif'] text-2xl text-on-surface leading-snug group-hover:text-primary transition-colors duration-300">Data vs. Intuition</h2>
              <p className="text-on-surface-variant font-body leading-relaxed line-clamp-3">
                Finding the equilibrium between wearable tech metrics and your body's intrinsic biofeedback systems.
              </p>
              <a className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all duration-300" href="#">
                Read More 
                <span className="material-symbols-outlined ml-1 text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </a>
            </div>
          </article>
          <article className="group cursor-pointer">
            <div className="aspect-[4/5] mb-8 overflow-hidden rounded-xl bg-surface-container-high transition-transform duration-500 group-hover:scale-[1.01]">
              <img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_ncymDY1L-xeP2fsXVlT2Isnkx62mveHePHRu1ixxMUt2fONxXx3JmaOzHnVA0YpUWCuf7kkuhLCHtxQiwh1v6k2kKJww3iZfP7ssi-YJABJ9ExT_HFIIg1LK2hI25F_eMW4Fb491b22AGGw2OIkfofdBzhzfrbBXNBy15lwolAva6_lTDtw1XU4Z1ujnkU3u4idmx-9lKh8E_k4ib53aVy7cpqhbK2TROs2gsE3a4UO_0QTO8jc_ajil3sWz_w24B97NaOzM_7c" alt="" />
            </div>
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-xs tracking-widest uppercase">Longevity</span>
              <h2 className="font-['Noto_Serif'] text-2xl text-on-surface leading-snug group-hover:text-primary transition-colors duration-300">The Decades-Long Game</h2>
              <p className="text-on-surface-variant font-body leading-relaxed line-clamp-3">
                Shift your perspective from quarterly fitness goals to a lifelong pursuit of athletic vitality and sovereign movement.
              </p>
              <a className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all duration-300" href="#">
                Read More 
                <span className="material-symbols-outlined ml-1 text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </a>
            </div>
          </article>
        </div>
        <div className="mt-24 flex justify-center">
          <button className="group flex flex-col items-center gap-3">
            <span className="text-on-surface-variant font-medium tracking-widest text-xs uppercase">Load More Insights</span>
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>expand_more</span>
            </div>
          </button>
        </div>
      </main>
      <footer className="w-full mt-20 bg-[#eeeee8] dark:bg-[#1a1c1a]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="font-['Noto_Serif'] text-lg text-[#30332e] dark:text-[#faf9f4] mb-4">Symmetry Athletic</div>
            <p className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60">© 2024 Symmetry Athletic. The Mindful Curator.</p>
          </div>
          <div className="flex space-x-8">
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-opacity underline-offset-4 hover:underline" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-opacity underline-offset-4 hover:underline" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-opacity underline-offset-4 hover:underline" href="#">Contact</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-opacity underline-offset-4 hover:underline" href="#">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
