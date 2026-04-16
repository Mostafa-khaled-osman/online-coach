import React from 'react';

export function Checkout() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f4] dark:bg-stone-900 border-b border-[#30332e]/5">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <span className="font-['Noto_Serif'] text-2xl font-bold tracking-tight text-[#30332e] dark:text-stone-100">Symmetry Athletic</span>
          <div className="hidden md:flex gap-8 items-center">
            <a className="font-['Noto_Serif'] font-medium text-[#30332e]/70 dark:text-stone-400 hover:text-[#44674d] transition-all duration-300 hover:opacity-80" href="#">Programs</a>
            <a className="font-['Noto_Serif'] font-medium text-[#30332e]/70 dark:text-stone-400 hover:text-[#44674d] transition-all duration-300 hover:opacity-80" href="#">Wellness</a>
            <a className="font-['Noto_Serif'] font-medium text-[#30332e]/70 dark:text-stone-400 hover:text-[#44674d] transition-all duration-300 hover:opacity-80" href="#">Community</a>
            <a className="font-['Noto_Serif'] font-medium text-[#30332e]/70 dark:text-stone-400 hover:text-[#44674d] transition-all duration-300 hover:opacity-80" href="#">About</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-[#30332e] dark:text-stone-200 transition-all duration-300 hover:opacity-80 active:scale-95">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>shopping_bag</span>
            </button>
            <button className="text-[#30332e] dark:text-stone-200 transition-all duration-300 hover:opacity-80 active:scale-95">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>account_circle</span>
            </button>
          </div>
        </div>
      </nav>
      <main className="pt-32 pb-24 min-h-screen max-w-7xl mx-auto px-8">
        <header className="mb-12">
          <h1 className="font-['Noto_Serif'] text-4xl text-on-surface tracking-tight mb-2">Complete Your Journey</h1>
          <p className="text-on-surface-variant max-w-md">Review your selection and finalize your enrollment in the curated Symmetry community.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="bg-white/70 backdrop-blur-xl rounded-xl p-10 shadow-[0_10px_40px_rgba(48,51,46,0.06)] border border-outline-variant/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="font-['Noto_Serif'] text-2xl text-on-surface mb-1">VIP Holistic Plan</h2>
                    <span className="text-primary font-semibold tracking-wider text-xs uppercase">Annual Membership</span>
                  </div>
                  <div className="text-right">
                    <span className="font-['Noto_Serif'] text-3xl text-on-surface">$1,499</span>
                    <p className="text-on-surface-variant text-xs">per year</p>
                  </div>
                </div>
                <div className="space-y-6 mb-10">
                  <h3 className="font-semibold text-sm text-on-surface border-b border-outline-variant/15 pb-2">Included Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                      <span className="text-on-surface-variant text-sm">Personalized Nutrition &amp; Recovery Coaching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                      <span className="text-on-surface-variant text-sm">Unlimited Access to All Retreat Centers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                      <span className="text-on-surface-variant text-sm">Priority Booking for Masterclass Series</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>check_circle</span>
                      <span className="text-on-surface-variant text-sm">Quarterly Wellness Diagnostic Panels</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-surface-container/50 rounded-lg p-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="text-on-surface">$1,499.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Tax</span>
                    <span className="text-on-surface">$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t border-outline-variant/15">
                    <span className="text-on-surface">Total Due Today</span>
                    <span className="text-on-surface">$1,499.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 grayscale opacity-40">
              <div className="flex items-center gap-1 text-xs">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>lock</span>
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>verified_user</span>
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>google_guarantee</span>
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-10 shadow-[0_10px_40px_rgba(48,51,46,0.06)]">
            <div className="mb-10">
              <h2 className="font-['Noto_Serif'] text-2xl text-on-surface mb-6">Payment Method</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-outline-variant/30 rounded-full bg-surface hover:bg-surface-container-low transition-colors duration-200">
                  <span className="material-symbols-outlined text-on-surface" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>payments</span>
                  <span className="text-sm font-medium">Apple Pay</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-outline-variant/30 rounded-full bg-surface hover:bg-surface-container-low transition-colors duration-200">
                  <span className="material-symbols-outlined text-on-surface" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>google_plus_reshare</span>
                  <span className="text-sm font-medium">Google Pay</span>
                </button>
              </div>
              <div className="relative flex items-center mb-8">
                <div className="flex-grow border-t border-outline-variant/20"></div>
                <span className="flex-shrink mx-4 text-xs font-medium text-on-surface-variant uppercase tracking-widest">Or pay with card</span>
                <div className="flex-grow border-t border-outline-variant/20"></div>
              </div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide px-4">Cardholder Name</label>
                  <input className="w-full bg-surface-container-high border-0 focus:ring-1 focus:ring-primary rounded-full px-6 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all" placeholder="Johnathan Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide px-4">Credit Card Number</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-high border-0 focus:ring-1 focus:ring-primary rounded-full px-6 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all" placeholder="0000 0000 0000 0000" type="text" />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-2">
                      <span className="material-symbols-outlined text-on-surface-variant/40" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>credit_card</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide px-4">Expiry Date</label>
                    <input className="w-full bg-surface-container-high border-0 focus:ring-1 focus:ring-primary rounded-full px-6 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all" placeholder="MM / YY" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wide px-4">CVV</label>
                    <input className="w-full bg-surface-container-high border-0 focus:ring-1 focus:ring-primary rounded-full px-6 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-all" placeholder="123" type="text" />
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-primary hover:bg-primary-dim text-on-primary font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] shadow-[0_10px_40px_rgba(48,51,46,0.06)]" type="button">
                    Confirm Payment — $1,499.00
                  </button>
                </div>
                <p className="text-center text-xs text-on-surface-variant leading-relaxed px-8">
                  By clicking "Confirm Payment", you agree to our Terms of Service and acknowledge that your subscription will renew automatically at the end of each billing cycle.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#eeeee8] dark:bg-stone-950 border-t border-[#30332e]/5 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="font-['Noto_Serif'] text-lg font-semibold text-[#30332e]">Symmetry Athletic</span>
            <p className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60">© 2024 Symmetry Athletic. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 hover:text-[#44674d] transition-colors duration-200" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 hover:text-[#44674d] transition-colors duration-200" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-sm tracking-wide text-[#30332e]/60 hover:text-[#44674d] transition-colors duration-200" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
