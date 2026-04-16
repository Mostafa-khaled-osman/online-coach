import React from 'react';

export function MealPlanner() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 h-20 bg-[#faf9f4]/70 backdrop-blur-xl z-50 shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-['Noto_Serif'] italic text-primary">Holistic Fitness</span>
          <div className="hidden md:flex gap-8">
            <a className="text-on-background/60 hover:text-primary transition-colors font-medium" href="#">Dashboard</a>
            <a className="text-primary border-b-2 border-primary pb-1 font-medium" href="#">Meal Planner</a>
            <a className="text-on-background/60 hover:text-primary transition-colors font-medium" href="#">Workouts</a>
            <a className="text-on-background/60 hover:text-primary transition-colors font-medium" href="#">Wellness</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-on-background/70 cursor-pointer hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
          <span className="material-symbols-outlined text-on-background/70 cursor-pointer hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>settings</span>
          <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
            <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8L-7DUWUpxh73S-YdBuFGAysdLQYfYyBT-YWHy1KZAhuKapqQsguOPK5zJAJnG6H-5E9shCKCyL4epTMFkzqXiJgwKTJ0K-u8_MxxtuCfLsO-QVPJ4smfrIWl8wVTXw6-maKu62NCNAYjDPFVbWTXXVYG1YOHbejjHg3O959PYm2VbJiBaLN_VmSybY75qDqZYlbtO7MCtoyNX_hhxUkuk7bMBgwa_NP3CoL-guoyYe5kEk4WDBAckKo5e66o3ECLmvcWkPQm9CA" />
          </div>
        </div>
      </nav>
      <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-surface-container flex flex-col py-6 border-r border-on-background/10 z-40 hidden lg:flex">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>restaurant_menu</span>
          </div>
          <div>
            <p className="text-on-background font-['Noto_Serif'] text-lg leading-tight">Your Curator</p>
            <p className="text-on-background/70 text-xs font-medium">Elite Wellness Plan</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1 pr-4">
          <a className="flex items-center gap-3 px-6 py-3 text-on-background/70 hover:bg-surface-container-low transition-all duration-200 group" href="#">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>calendar_month</span>
            <span className="text-sm font-medium">Weekly Overview</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 bg-surface-container-lowest text-primary rounded-r-full shadow-sm transition-all duration-200" href="#">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>analytics</span>
            <span className="text-sm font-semibold">Macro Tracker</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-background/70 hover:bg-surface-container-low transition-all duration-200" href="#">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>shopping_basket</span>
            <span className="text-sm font-medium">Grocery List</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-background/70 hover:bg-surface-container-low transition-all duration-200" href="#">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>restaurant_menu</span>
            <span className="text-sm font-medium">Recipes</span>
          </a>
          <a className="flex items-center gap-3 px-6 py-3 text-on-background/70 hover:bg-surface-container-low transition-all duration-200" href="#">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>favorite</span>
            <span className="text-sm font-medium">Favorites</span>
          </a>
        </nav>
        <div className="mt-auto px-6">
          <div className="bg-primary text-on-primary p-6 rounded-2xl shadow-xl">
            <p className="text-xs font-bold tracking-widest uppercase mb-2">Pro Feature</p>
            <p className="text-sm mb-4 leading-relaxed">Unlock custom AI meal tailoring.</p>
            <button className="w-full py-2 bg-on-primary text-primary text-xs font-bold rounded-full hover:scale-105 transition-transform">Upgrade to Premium</button>
          </div>
        </div>
      </aside>
      <main className="lg:ml-64 pt-28 pb-12 px-8 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12">
          <section className="flex-1">
            <div className="mb-10">
              <h1 className="text-4xl font-['Noto_Serif'] font-bold text-on-background mb-2">Daily Nourishment</h1>
              <p className="text-on-background/60 font-medium">Tuesday, May 14th — Intentional eating for peak performance.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10 hover:scale-[1.01] transition-transform duration-300 shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMaDenZc3bWh1zTPg1jzoTgS6aVfOQzFr3kS68N3Ow7oE2O89OMavMxqV728wUcISdt4_QSsRPValfEz_ejVHdm9-ve3k1XtmE9zkAPhnYYUeo3D1Cd83EhgmixP1ZmxJDNg1PObUK4jb73o8nDd98G8vMFwB9dNlnWvGSzyO2qYRWWQPQzAaXWeiwTtNbQEgLfJc8N7RDcl3B2MI2sWz0HewzG0Yfj7q6auTHcnWmeWm3a0AqoHi12rSgmRYmoXuiqz0ONumQT9g" alt="Breakfast" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 md:mb-0">Breakfast</span>
                    <span className="text-xs text-on-background/40">07:30 AM</span>
                  </div>
                  <h3 className="text-2xl font-['Noto_Serif'] font-bold mb-2">Poached Eggs with Avocado</h3>
                  <p className="text-on-background/70 mb-6 leading-relaxed">Organic sourdough topped with smashed Hass avocado, perfectly poached eggs, and a pinch of Aleppo pepper.</p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold hover:bg-secondary hover:text-on-secondary transition-all">Swap Meal</button>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline transition-all">
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>list</span> View Recipe
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10 hover:scale-[1.01] transition-transform duration-300 shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYXo7JtYw_1tvRnOjRcdLEjrNmKjs0rj2fBmQVExNf6xLHAqS9KhHd6zrg1UvFwt7P_GnSBDPfweFAVIm0oaAmS_ztrFDc4xbEOqN0a6OxuLBnsZQ7xAep82xZJSFzoevCmuxV9U5W2vHsVoM0SIe_-zmaRHPc4F30s1kr_e2PlyvoWp2UCW0_MRdQOH-KaauNF0kJzNsihfrueRe-f1cxIRamdoco_rhOTeGg3uAQ9O6J_IWb6nBBBdtb_wnETmx1dKRM1bJWbzY" alt="Lunch" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 md:mb-0">Lunch</span>
                    <span className="text-xs text-on-background/40">12:30 PM</span>
                  </div>
                  <h3 className="text-2xl font-['Noto_Serif'] font-bold mb-2">Grilled Salmon with Quinoa</h3>
                  <p className="text-on-background/70 mb-6 leading-relaxed">Sustainable wild-caught salmon served alongside herb-infused quinoa and flash-roasted seasonal greens.</p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold hover:bg-secondary hover:text-on-secondary transition-all">Swap Meal</button>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline transition-all">
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>list</span> View Recipe
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10 hover:scale-[1.01] transition-transform duration-300 shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTFO89SEwP09B2tWCZ-Kwb9PgHv74hSF4laakd-2az-LYBXVy3PQyc_glx0afON5N43XjOjCLDEFXpRFbkeJAE3b4qVsiKIk7A3XvRe_gP1VaUPw5Wb2RoS0tAZ11Z1yPcQJYHvdcx-qDyoi5FJJ61CrFub5rDnOHgO3u9OKD6vDDd2aYIqGxniuMp_zfnvN8hp9zbKxMpOq-m7114bhCtdnEOs3Ty9tEmFbEyKT0RAguhMN0_wm1qb-TH1omzZyoC29wBpT7MqEg" alt="Dinner" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 md:mb-0">Dinner</span>
                    <span className="text-xs text-on-background/40">07:00 PM</span>
                  </div>
                  <h3 className="text-2xl font-['Noto_Serif'] font-bold mb-2">Mediterranean Soul Bowl</h3>
                  <p className="text-on-background/70 mb-6 leading-relaxed">A nutrient-dense blend of house-made hummus, crispy chickpeas, pickled cabbage, and roasted root vegetables.</p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold hover:bg-secondary hover:text-on-secondary transition-all">Swap Meal</button>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline transition-all">
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>list</span> View Recipe
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10 hover:scale-[1.01] transition-transform duration-300 shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
                <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9Fs_1WLyWiqsO31jh069Ig3pKEiRckckMiklYV0b15Sh6CCy7eU-yxYNQawfpVzpz7xkzuqkIso--k0EKmvHsFa9ImOyBiTJ8a6THahNUfwZ10Emk2-KVA0POQU0-sMSBCp9uNCSKMdz8lT9ygTodOEVl_cO-0P2ut2J2VIHdI36NFBcKnF521KB_WMC8bXG8F3iWxLFGM4CLW-eqx91m-08fGbZyLq1DJRDGEdfcJPrW4NZeFgzNSLyMg3L0oYuzsloPgLBpIU" alt="Snack" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-2 md:mb-0">Snack</span>
                    <span className="text-xs text-on-background/40">04:00 PM</span>
                  </div>
                  <h3 className="text-2xl font-['Noto_Serif'] font-bold mb-2">Power Nut Blend</h3>
                  <p className="text-on-background/70 mb-6 leading-relaxed">Walnuts, almonds, and 85% dark chocolate shards for a brain-boosting mid-afternoon reset.</p>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold hover:bg-secondary hover:text-on-secondary transition-all">Swap Meal</button>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:underline transition-all">
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>list</span> View Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <aside className="xl:w-96">
            <div className="sticky top-28 space-y-8">
              <div className="bg-surface-container rounded-[2.5rem] p-10 shadow-sm border border-outline-variant/10">
                <h2 className="text-xl font-['Noto_Serif'] font-bold mb-8">Daily Macros</h2>
                <div className="space-y-10">
                  <div className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Protein</p>
                        <p className="text-2xl font-bold font-['Noto_Serif']">142g <span className="text-sm font-normal text-on-background/40">/ 160g</span></p>
                      </div>
                      <p className="text-sm font-bold text-primary">88%</p>
                    </div>
                    <div className="w-full h-3 bg-primary-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(68,103,77,0.3)]" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-1">Carbohydrates</p>
                        <p className="text-2xl font-bold font-['Noto_Serif']">210g <span className="text-sm font-normal text-on-background/40">/ 250g</span></p>
                      </div>
                      <p className="text-sm font-bold text-secondary">84%</p>
                    </div>
                    <div className="w-full h-3 bg-secondary-container rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full shadow-[0_0_15px_rgba(68,100,110,0.3)]" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-tertiary mb-1">Healthy Fats</p>
                        <p className="text-2xl font-bold font-['Noto_Serif']">58g <span className="text-sm font-normal text-on-background/40">/ 75g</span></p>
                      </div>
                      <p className="text-sm font-bold text-tertiary">77%</p>
                    </div>
                    <div className="w-full h-3 bg-tertiary-fixed-dim rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary-dim rounded-full" style={{ width: '77%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-10 border-t border-on-background/5">
                  <p className="text-xs font-bold tracking-widest uppercase text-on-background/40 mb-2">Total Hydration</p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-1">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>water_drop</span>
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>water_drop</span>
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>water_drop</span>
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>water_drop</span>
                      <span className="material-symbols-outlined text-secondary/30" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>water_drop</span>
                    </div>
                    <p className="text-sm font-bold">2.2L / 3.0L</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-container/30 rounded-[2.5rem] p-8 border border-primary/10">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>lightbulb</span>
                  <div>
                    <p className="text-sm font-bold text-on-primary-container mb-1">Curator's Tip</p>
                    <p className="text-xs leading-relaxed text-on-primary-container/80 italic">"Adding a pinch of pink Himalayan salt to your morning water improves intracellular hydration by over 15%."</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <footer className="w-full bg-[#faf9f4] dark:bg-[#30332e] py-12 border-t border-[#30332e]/5 flex flex-col items-center justify-center space-y-4">
        <span className="text-xl font-['Noto_Serif'] italic text-primary">The Mindful Curator</span>
        <div className="flex gap-8">
          <a className="text-xs font-['Manrope'] uppercase tracking-widest text-on-background/40 hover:text-on-background transition-opacity" href="#">Privacy Policy</a>
          <a className="text-xs font-['Manrope'] uppercase tracking-widest text-on-background/40 hover:text-on-background transition-opacity" href="#">Terms of Service</a>
          <a className="text-xs font-['Manrope'] uppercase tracking-widest text-on-background/40 hover:text-on-background transition-opacity" href="#">Contact Support</a>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-on-background/40">© 2024 The Mindful Curator. All rights reserved.</p>
      </footer>
    </div>
  );
}
