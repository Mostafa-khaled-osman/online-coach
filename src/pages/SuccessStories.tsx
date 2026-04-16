import React from 'react';

export function SuccessStories() {
  return (
    <div className="bg-background text-on-background">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f4]/70 dark:bg-[#30332e]/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <div className="flex justify-between items-center px-8 h-20 w-full max-w-screen-2xl mx-auto">
          <div className="font-['Noto_Serif'] font-bold text-2xl tracking-tight text-[#30332e] dark:text-[#faf9f4]">
            Symmetry Athletic
          </div>
          <div className="hidden md:flex gap-8 items-center font-['Noto_Serif'] font-medium text-lg">
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-300" href="#">Programs</a>
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-300" href="#">Nutrition</a>
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] transition-colors duration-300" href="#">Community</a>
            <a className="text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] pb-1" href="#">Success Stories</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-[#44674d] dark:text-[#84A98C] scale-105 transition-transform ease-out">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
            </button>
            <button className="text-[#44674d] dark:text-[#84A98C] scale-105 transition-transform ease-out">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>person</span>
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-32 pb-20 px-6 max-w-screen-2xl mx-auto">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <h1 className="font-['Noto_Serif'] text-5xl md:text-6xl font-bold text-on-background mb-6 leading-tight">
            Real Transformations, <br />Mindful Growth
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant/80 font-light leading-relaxed">
            Celebrating the journey of our community members who found their balance. No shortcuts, just consistent dedication to holistic well-being.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          <article className="flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden group">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r border-white/20 z-10 relative">
                  <img alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQuNOsNrRIr9dl4n0AR3skKYW3z82Y5fubQqEV1ND9oTFoqdmaRa5EcB5wF2a_g-KrRmfCDpjs4G7zP1xPfhsJ28yXi9WSZXfGcZHb9zL8lExHot7d8NGs0_0xp5JAROKG8ESHMi6WKn07uyclei4C3Le1tnv25YNcc2oqxnSQbv7Mh-BC7SPDxkNl1qHdVzNN1Fagl-k4lRpg5a1vf5pudD56ESJp_d38IagwgCjiDt1ncM5Kv3edVhfOollWc25dLVMNxB1yJAQ" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold text-white uppercase tracking-widest bg-on-background/40 px-2 py-1 rounded backdrop-blur">Before</span>
                </div>
                <div className="w-1/2 h-full relative">
                  <img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLN_a6BHwydt-aSvXb6C_TwDa1VtJXgpOteh7Qac_7qoZnfaHm2WK3jsU0jxFRytIp9G9HFxnZw5xiyDD9r29CHsWg9nLPIgIG07Jq69hJdNnX3LdAky_02HHF8B6lKtSZdIyzO1ef7ehrtAVlIaabKrmfOVteIVAShJp5LMNzcGNmqOCW4mxJ4_2SnxVf8ZIKTQXVS62V-vuGSk3e-kLUUorvVJi4XhsWka2TW_acH9nwNuElE8A8M5EZbz5TuhOQuWMx6Xp75pg" />
                  <span className="absolute bottom-4 right-4 text-xs font-bold text-white uppercase tracking-widest bg-primary/60 px-2 py-1 rounded backdrop-blur">After</span>
                </div>
              </div>
              <div className="absolute inset-y-0 left-1/2 -ml-[1px] w-[2px] bg-white/80 z-20 shadow-xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-surface-container">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>unfold_more</span>
                </div>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="font-['Noto_Serif'] text-2xl font-bold mb-4">Julian's 12-Week Reset</h3>
              <blockquote className="text-on-surface-variant leading-relaxed italic mb-8 font-['Noto_Serif']">
                "I used to prioritize intensity over everything. Symmetry taught me that recovery and mindfulness are where the actual strength is built."
              </blockquote>
              <div className="mt-auto">
                <a className="inline-flex items-center text-primary font-semibold hover:opacity-80 transition-all gap-2 group" href="#">
                  Read Full Story
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r border-white/20 z-10 relative">
                  <img alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmeyr9PwnMIrsfCnBIQtdCUUJQ-x1eYCgK1LRRW_jsVur9G0p3quAIdIf92bixmlva49IZ0JhS1S3nMucLdXT0fGhdoDxLF8D9eqaGc0-pVfLmLZHeb5eGJLHzARVxqYPmBLpFIrWCLPsivY5SAE3oXCSp6JR4Cq0ryWGvHCHYsPWOMPocWAz7ybnRUJyYm3QPGmcZRiRnGy1DYhA4_VEn8ICkGmzl0HEenTySu3CrXX_A4eWOrBByEkDqVhQYqoNQeH39kJhLcQY" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold text-white uppercase tracking-widest bg-on-background/40 px-2 py-1 rounded backdrop-blur">Before</span>
                </div>
                <div className="w-1/2 h-full relative">
                  <img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT1HhlbOaI85g-3P951zJhjmUmOg0FEzsOWDgJ-icSLELS8MRd83W5VSbRc-aZSPdJ_gyfDBTbvnh6iYeqPRft2sDyDL_rU7reSTN6R5BauAeDkqgt7XGjEu0b-mtkYLuz7X7pKe6hbevtMQoZvyo93po_ua3F-ajY_JadKpMSy4Y21Vn9yDUPHRxJHzO-3pFhPpoYcxs6zlWA1tgdA-yj28yLmaHMxAEyb2lLO3Qylwpbwxk_l7naGvND70HFx-FeF_z7M5MCxd8" />
                  <span className="absolute bottom-4 right-4 text-xs font-bold text-white uppercase tracking-widest bg-primary/60 px-2 py-1 rounded backdrop-blur">After</span>
                </div>
              </div>
              <div className="absolute inset-y-0 left-1/2 -ml-[1px] w-[2px] bg-white/80 z-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-surface-container">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>unfold_more</span>
                </div>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="font-['Noto_Serif'] text-2xl font-bold mb-4">Maya's Mindful Path</h3>
              <blockquote className="text-on-surface-variant leading-relaxed italic mb-8 font-['Noto_Serif']">
                "The symmetry between physical training and nutritional therapy completely changed my relationship with my body and food."
              </blockquote>
              <div className="mt-auto">
                <a className="inline-flex items-center text-primary font-semibold hover:opacity-80 transition-all gap-2 group" href="#">
                  Read Full Story
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.06)] transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r border-white/20 z-10 relative">
                  <img alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMlYoS75IZElDqrQUuuMuh_DKqXmTAIwGy_oWB9eu6oakMcFWFg4N4RKw2kxkt9rBHyaJFJYQKM-22awcgrkpZ06loLKKs7EIGwFpgn0fE7-xV6hq-ef1NQ5r9QKjj2RE7BpX2Ur2dlEmSZ0E2nkkrHL7n2DtoQgdcabNxfyz6JGE48366zbGtKABffvEWrSO58FOCWyi6bO7bsVM-GhtjC3yYTvz5fmBQVJWA9vk02VGpuA_pc7r2UfIHSBomsEG46Em-NFsdFRM" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold text-white uppercase tracking-widest bg-on-background/40 px-2 py-1 rounded backdrop-blur">Before</span>
                </div>
                <div className="w-1/2 h-full relative">
                  <img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3zCdltBYJy0I2jCZYl0QWt5i0ZPbah08Q8mGnT36F3269g-jm2k_mX3ZoNabUvQW4xC0B_NTCJ0JxdFRqq5aR4VrwnhNes8BgXkJwX5lWySKb1tjMGMi6eMYug_49G2nPRRRZ3N8fnwsZSsJYZf6drGzMMS25RDLZL2U3isSKnFpEfAmQsNFDuL67ToxAy5lcXgH_GUhbsq0n3Gpl9FNZt9oVf8gLInjQBE4SdXTISLW18-eulKerTEA23w77Zo7_OfXhG_u4B1s" />
                  <span className="absolute bottom-4 right-4 text-xs font-bold text-white uppercase tracking-widest bg-primary/60 px-2 py-1 rounded backdrop-blur">After</span>
                </div>
              </div>
              <div className="absolute inset-y-0 left-1/2 -ml-[1px] w-[2px] bg-white/80 z-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-surface-container">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>unfold_more</span>
                </div>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="font-['Noto_Serif'] text-2xl font-bold mb-4">David's Peak Performance</h3>
              <blockquote className="text-on-surface-variant leading-relaxed italic mb-8 font-['Noto_Serif']">
                "I never thought I could feel this energetic at 45. Symmetry gave me the blueprint for longevity that I've been searching for."
              </blockquote>
              <div className="mt-auto">
                <a className="inline-flex items-center text-primary font-semibold hover:opacity-80 transition-all gap-2 group" href="#">
                  Read Full Story
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </div>
        <div className="mt-32 p-16 bg-primary/5 rounded-[3rem] text-center border border-primary/10">
          <span className="material-symbols-outlined text-primary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>format_quote</span>
          <h2 className="font-['Noto_Serif'] text-3xl font-medium text-primary-dim max-w-4xl mx-auto leading-relaxed">
            "Growth is not just about the size of your muscles or the number on a scale. It's about the symmetry of mind, body, and spirit."
          </h2>
          <div className="mt-8 font-['Manrope'] text-sm tracking-widest uppercase text-on-surface-variant">The Symmetry Philosophy</div>
        </div>
      </main>
      <footer className="w-full rounded-t-[2rem] mt-20 bg-[#eeeee8] dark:bg-[#1a1c1a]">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 px-12 w-full gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-['Noto_Serif'] font-semibold text-lg text-[#30332e] dark:text-[#faf9f4]">
              Symmetry Athletic
            </div>
            <div className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/70 dark:text-[#faf9f4]/70">
              © 2024 Symmetry Athletic. The Mindful Curator.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-['Manrope'] text-sm tracking-wide">
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:underline decoration-[#44674d] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:underline decoration-[#44674d] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:underline decoration-[#44674d] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Contact Us</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:underline decoration-[#44674d] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="#">Wellness Retreats</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
