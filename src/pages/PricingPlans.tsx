import React from 'react';

export function PricingPlans() {
  return (
    <div className="bg-background font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f4]/80 dark:bg-[#30332e]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="font-['Noto_Serif'] italic font-semibold text-[#44674d] dark:text-[#84A98C] text-2xl">Aura Fitness</div>
          <div className="hidden md:flex items-center space-x-10 font-['Noto_Serif'] text-lg tracking-tight">
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] hover:opacity-80 transition-all duration-300" href="#">Practice</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] hover:opacity-80 transition-all duration-300" href="#">Journal</a>
            <a className="text-[#30332e]/70 dark:text-[#faf9f4]/70 hover:text-[#44674d] hover:opacity-80 transition-all duration-300" href="#">Community</a>
            <a className="text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] pb-1 hover:opacity-80 transition-all duration-300" href="#">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#44674d] text-[#e8ffea] px-6 py-2.5 rounded-xl font-medium scale-102 transition-transform duration-200 hover:opacity-80">Start Trial</button>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high">
              <img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChJfmUkG4PpKT-Vy4jL3aOijw8Js5EARGFcj2XPZ-kspXHCP1g8pCriTMpnPzV4Azin-L6aX4_7fwN4HAdiE3JdXH2TLXIZyBYJWEBqeFl1ONmdD22aDKlqpbJ1vXNHB1YEfB91WzYa4zGGbh3PKMnSYppzuL1-wO856ywypMZNeeJN2Y0stas8PFM2Dmu8pvJqZ3bf7Tl4ReLU3yoTLcjWd1PatJTYG-VnE1p009E2BFpIxczWnfPOsaN9n-HWgtPL-ZuYVleR0w" />
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="font-['Noto_Serif'] text-5xl md:text-6xl text-on-surface mb-6 tracking-tight font-bold">Invest in your <span className="italic text-primary font-semibold">Symmetry</span></h1>
          <p className="font-['Manrope'] text-lg text-on-surface-variant leading-relaxed">
            Choose a path that aligns with your life. Our memberships are designed to provide the space, guidance, and community you need for holistic growth.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] flex flex-col justify-between border border-white/20 hover:scale-[1.02] transition-all duration-500 shadow-[0_10px_40px_rgba(48,51,46,0.03)]">
            <div>
              <span className="font-['Manrope'] text-xs uppercase tracking-widest text-primary font-bold mb-4 block">Foundations</span>
              <h3 className="font-['Noto_Serif'] text-3xl font-bold text-on-surface mb-2">Monthly</h3>
              <div className="flex items-baseline mb-8">
                <span className="font-['Noto_Serif'] text-4xl font-bold">$129</span>
                <span className="text-on-surface-variant ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">Access to all studio classes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">Holistic health consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">Unlimited towel service</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-4 rounded-xl border border-primary text-primary font-semibold hover:bg-primary-container transition-colors duration-300">Choose Monthly</button>
          </div>
          <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] flex flex-col justify-between border border-primary/20 hover:scale-[1.05] transition-all duration-500 shadow-[0_20px_60px_rgba(68,103,77,0.15)] ring-1 ring-primary/30">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-1.5 rounded-full text-sm font-semibold tracking-wide">Most Rewarding</div>
            <div>
              <span className="font-['Manrope'] text-xs uppercase tracking-widest text-primary font-bold mb-4 block">Ultimate Care</span>
              <h3 className="font-['Noto_Serif'] text-3xl font-bold text-on-surface mb-2">VIP</h3>
              <div className="flex items-baseline mb-8">
                <span className="font-['Noto_Serif'] text-5xl font-bold">$299</span>
                <span className="text-on-surface-variant ml-2">/ month</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>stars</span>
                  <span className="font-semibold">Priority class booking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">4 Monthly personal sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">Customized nutrition plan</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">Exclusive spa &amp; sauna access</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">Guest passes (2 per month)</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-4 rounded-xl bg-primary text-on-primary font-semibold hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300">Start VIP Journey</button>
          </div>
          <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] flex flex-col justify-between border border-white/20 hover:scale-[1.02] transition-all duration-500 shadow-[0_10px_40px_rgba(48,51,46,0.03)]">
            <div>
              <span className="font-['Manrope'] text-xs uppercase tracking-widest text-primary font-bold mb-4 block">Commitment</span>
              <h3 className="font-['Noto_Serif'] text-3xl font-bold text-on-surface mb-2">3-Month</h3>
              <div className="flex items-baseline mb-8">
                <span className="font-['Noto_Serif'] text-4xl font-bold">$99</span>
                <span className="text-on-surface-variant ml-2">/ month</span>
              </div>
              <p className="text-sm text-primary font-medium mb-6">Billed as $297 quarterly</p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">All Monthly plan features</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">Advanced biometrics tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>check</span>
                  <span className="text-on-surface-variant">Workshops &amp; masterclasses</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-4 rounded-xl border border-primary text-primary font-semibold hover:bg-primary-container transition-colors duration-300">Choose 3-Month</button>
          </div>
        </div>
        <section className="mt-32 text-center">
          <h2 className="font-['Noto_Serif'] text-2xl text-on-surface mb-12">Experience the Aura atmosphere</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCF2wfjk_wHG_XEfKeyCWfpCYpEqXFZ9LCDMc7k0J6aRtrueuymBcNYKP_5ZPc1gl2N_j3RyeUHlTq9C28difSCqlOHxMKrMY9PXrINh6olWyeZ8fgdT3TQUOTGyrk4owE_6nKhNhR8lIj_lvBLNg875SBo01PMIPwONnDWYsY_sdSqf5xHl9xQcNxdXNWnfKiG7JurL_gxRqqv_fdNx0VQak2oG9seiCzXc4SAYpUACAMaiZFCJKdGRj2HyVv8G7c_WkYVacBIR8" alt="Studio" />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-surface-container mt-8">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe0Kc13IbEDCKnXFbwg0El2oRuLVi6jyr4A9vGB9v4HXCI_j0HycXcggxCFqKXC8aOLBqtKauU2t0oNXtbXOx7u-8ukw-W6t54-ODxbCoSaMdkMN-Dkzh9lF8QVxC9ywm5Rt_qt6qtVXq1XmOiEBAc0HesHbjZMPMVqyx6POwN7a5R5oeoJ93i0v2WqewVAtDGHK8TU8JBPYBWD4Q5_64s-gaTnmfhSvzMWYz6lXufFxUz3EfDxhL3TpmBYHwb9oFZTtGrv5nWZq8" alt="Yoga" />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMh7BnalH1ek0W2DQlN30xDYN8weDwXXFOpsl9CP54PH9aZakwXhcv3_Ba6jIxSsW2dUxvV2B3T5eaZ2sqW44jp-JBp71Q4xrf2rtvQ_qCk6O02PQpKc3YVux5gilgLMP-0Tp3tHWXUL68mlQNvsA9IPQSVt4bzfhfgbAvZ8GzDSSEAhTWSa8-ZI6yggwtVtc9g6wkxBy0SHcNwo7rb40ZXf6C24aRnbIR-8eOYW_-c__TGQE6dGvv3dGeFwzEzzII7LTUniF0Qh4" alt="Spa" />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden bg-surface-container mt-8">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2m3uH93qebsn062EqooIUjaPeATwsKoKFU11FjXZsjKdnYhqGvg0DAddVvIILSCR3hhuiIksiZHipfcR0BiEgVa9NTgscbpoysdKyVPgSuxRHVBmu1auY-IemffN9gdHi_L2leCAC_Qw4HOduNTc1cVkCU1OzVBWFgWiaE7gphaXmz29vUg7zWOjv0s6vaW_QLkZVSxLabtQfnYVwNh4WWQfN_0BhvNvlJsWGgI5Vd4JVFt0MSvYngnqhAgA7x3ToEijVadu2EkA" alt="Fitness Area" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#eeeee8] dark:bg-[#252824] w-full py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="font-['Noto_Serif'] text-[#30332e] dark:text-[#faf9f4] text-xl">Aura Holistic</div>
            <p className="font-['Manrope'] text-sm uppercase tracking-widest text-[#30332e]/60 dark:text-[#faf9f4]/60">© 2024 Aura Holistic. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center">
            <a className="font-['Manrope'] text-sm uppercase tracking-widest text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors opacity-100 hover:opacity-80" href="#">Privacy</a>
            <a className="font-['Manrope'] text-sm uppercase tracking-widest text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors opacity-100 hover:opacity-80" href="#">Terms</a>
            <a className="font-['Manrope'] text-sm uppercase tracking-widest text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors opacity-100 hover:opacity-80" href="#">Philosophy</a>
            <a className="font-['Manrope'] text-sm uppercase tracking-widest text-[#30332e]/60 dark:text-[#faf9f4]/60 hover:text-[#44674d] dark:hover:text-[#84A98C] transition-colors opacity-100 hover:opacity-80" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
