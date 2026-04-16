import React from 'react';

export function ClientsCRM() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary/20 min-h-screen">
      <nav className="bg-[#faf9f4]/80 dark:bg-[#30332e]/80 backdrop-blur-xl top-0 sticky z-50 shadow-[0_10px_40px_rgba(48,51,46,0.06)] flex justify-between items-center w-full px-8 py-4 max-w-full">
        <div className="flex items-center gap-12">
          <span className="font-['Noto_Serif'] text-xl font-bold text-[#44674d] dark:text-[#84A98C]">Symmetry Athletic</span>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Dashboard</a>
            <a className="text-[#44674d] dark:text-[#84A98C] border-b-2 border-[#44674d] dark:border-[#84A98C] pb-1 font-semibold hover:text-[#44674d] transition-colors duration-300" href="#">Clients</a>
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Analytics</a>
            <a className="text-[#30332e]/60 dark:text-[#faf9f4]/60 font-medium hover:text-[#44674d] transition-colors duration-300" href="#">Settings</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>search</span>
            <input className="pl-10 pr-4 py-2 bg-surface-container-high border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 w-64 transition-all" placeholder="Quick search..." type="text" />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>settings</span>
            </button>
            <img alt="User profile photo" className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-highest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd_8OWXCEBSQgkQPrFTSIFE-MHtGDX7uk6NpXuuMb9mYIk37mOTQd5RSuoxhmLi9LEafwozkoxapS5Pw9E2jKEnf1bbtwwCqpuoDLp9Nfv2fYC_REaxb2d6gU-UWXuRzPh6Zwy4jje-Jkv10fW0jibBsLC6nKvbm10fdfOVZbdwi7G1AJrxp_cc_9HwI_ycMwzTKW4-YXKeMQOUs3V0owQ6doN-NO-0DknUQYm4IqYVvd81wSRf6b9OAT92QNQRP6LG154jKQ0HuE" />
          </div>
        </div>
      </nav>
      <main className="min-h-screen max-w-7xl mx-auto px-8 py-12">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-['Noto_Serif'] text-[1.75rem] leading-[1.2] text-[#30332e] mb-2">Clients CRM</h1>
            <p className="text-on-surface-variant font-medium">Manage and monitor athlete progress and subscription status.</p>
          </div>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-102 transition-transform duration-200 shadow-sm">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>add</span>
            Add New Client
          </button>
        </header>
        <div className="mb-8 flex flex-col md:flex-row items-center gap-4 bg-surface-container-low p-4 rounded-2xl">
          <div className="relative flex-grow w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>search</span>
            <input className="w-full pl-12 pr-6 py-3 bg-surface-container-lowest border-none rounded-xl text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/10 transition-all shadow-sm" placeholder="Search clients by name, email or ID..." type="text" />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-56">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>filter_list</span>
              <select className="w-full pl-10 pr-10 py-3 bg-surface-container-lowest border-none rounded-xl text-on-surface focus:ring-2 focus:ring-primary/10 appearance-none shadow-sm cursor-pointer">
                <option value="">Filter by Goal</option>
                <option value="muscle">Muscle Gain</option>
                <option value="weight">Weight Loss</option>
                <option value="endurance">Endurance</option>
                <option value="recovery">Recovery</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>expand_more</span>
            </div>
            <button className="p-3 bg-surface-container-lowest text-on-surface rounded-xl hover:bg-surface-container-high transition-colors shadow-sm">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>tune</span>
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(48,51,46,0.04)] border border-outline-variant/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50">
                  <th className="px-8 py-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Client</th>
                  <th className="px-8 py-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Email</th>
                  <th className="px-8 py-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Goal</th>
                  <th className="px-8 py-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Subscription</th>
                  <th className="px-8 py-5 text-sm font-semibold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                <tr className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img alt="Client avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVAaByfyUWtfG94G5gw4YUzzUe-geDACPGB04v0AmXHOIzXUmjFlZRSr7tsWu4NVYvU677Tvbp-W9AApsqBMcb7E9kajrDmS0Jv0Hgt5jWOQiaWquioKcdJmQ-MSIMJekPSzSmaUj7b6LOHhqC7nPFON_dtXYcCc1C6P9FM0TNNpV8fyuTY6-mvNffRHx1H0iem-Q96duj_nLF-yaj3it7M275DTd_DBH5n13ZdceHGNrXQBuUL-GrRn6hMkewfuzh8-cF1Ki_uMs" />
                      <div>
                        <div className="font-bold text-on-surface">Marcus Thorne</div>
                        <div className="text-xs text-on-surface-variant font-medium">Joined Oct 2023</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant font-medium">m.thorne@email.com</td>
                  <td className="px-8 py-6">
                    <span className="px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold border border-secondary-container/20">
                      Muscle Gain
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-primary-container/30 text-on-primary-container text-xs font-bold border border-primary-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img alt="Client avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6arFZyjVJvKf-qTHKGkvd_UrHma5s-umyV-qyWFKtDw7HRNkIArJsVSz7fM6zpQukcqWvnD8b-ZhzFro_E36R716joyi3fL8aOlsBfifWlxY9-85zhTuHuvfJ0n5CSHB6p4qPd2ymXGNSYSS9XATdSfcB7NR_Pc0mVWWxrD8aJ1sN5YbD-WjOEuF1R2WW30bGhMUmids9EXUabqBor-QPdEr3Kj-46inD81qGLYpka35Q5fJjRxhA0Avp9dyt5MKuRmoXzaFAlVA" />
                      <div>
                        <div className="font-bold text-on-surface">Elena Rodriguez</div>
                        <div className="text-xs text-on-surface-variant font-medium">Joined Jan 2024</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant font-medium">elena.rod@fitness.com</td>
                  <td className="px-8 py-6">
                    <span className="px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold border border-secondary-container/20">
                      Weight Loss
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-primary-container/30 text-on-primary-container text-xs font-bold border border-primary-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img alt="Client avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiLI-xXU3wXUBaKGuAFcU5gpgVlM8kXyKYVAN1hDOF71sQv14UWTJAqWCrWfqS2JtnmSIvyyhLKj3o7AOcXb8di6z3SUpHQUg6rfzJwi2T4LpyVWr5ZAhn_kvM6g47qH_2r5pjJoKxNNEOEaZ3XV5gWomEQwo2ANmnCDEwYQMf6s3CQxXWeSwQLJOZULeY4Nb1j5uxy_FNI2juZaJSjwCNwIYYwQiVhttfsz5-0S77yl9UyLTqqLgfzTTJwqIoib6QN-018mkriVQ" />
                      <div>
                        <div className="font-bold text-on-surface">Julian Vance</div>
                        <div className="text-xs text-on-surface-variant font-medium">Joined Aug 2023</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant font-medium">jvance@provider.net</td>
                  <td className="px-8 py-6">
                    <span className="px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold border border-secondary-container/20">
                      Endurance
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-error-container/30 text-on-error-container text-xs font-bold border border-error-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                      Expired
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img alt="Client avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqMcEBOn4SjtykegWS969TJbTBW0MTt6v3LJfRAyxsM7TF9H6h9QPV7YMgGOHfj60FJgzmUqIyGRACtq4Pa-TE5EnQWMiPQ0G8ZQvzgpoH_3fjBY0tLIo1eqDU2pznUg1sCMAQrO1FE-QZIa88lcK78Zkg5dF8QghMPCx3ZJXWy4colSo-qpMJpxTRsLyG5yh7Hk6GkOxerBX26mJ71RG8RCmP_ntRi8qFvEZEEQ1k5aVjfyM8qPaERVL6tLhk2fPcdJB-PUuWYxI" />
                      <div>
                        <div className="font-bold text-on-surface">Sarah Jenkins</div>
                        <div className="text-xs text-on-surface-variant font-medium">Joined Nov 2023</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-on-surface-variant font-medium">sarah.j@lifestyle.org</td>
                  <td className="px-8 py-6">
                    <span className="px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold border border-secondary-container/20">
                      Recovery
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-primary-container/30 text-on-primary-container text-xs font-bold border border-primary-container/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      Active
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-8 py-6 bg-surface-container-low/30 flex items-center justify-between border-t border-surface-container">
            <span className="text-sm text-on-surface-variant font-medium">Showing 4 of 124 clients</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-outline-variant/30 text-outline hover:bg-surface-container hover:text-primary transition-all disabled:opacity-30" disabled>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-bold shadow-sm">1</button>
              <button className="w-10 h-10 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-all">2</button>
              <button className="w-10 h-10 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-all">3</button>
              <button className="p-2 rounded-lg border border-outline-variant/30 text-outline hover:bg-surface-container hover:text-primary transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
