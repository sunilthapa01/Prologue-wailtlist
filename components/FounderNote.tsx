'use client'

import Logo from './Logo'

export default function FounderNote() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-7">
        <div className="grid grid-cols-[140px_1fr] gap-12 items-start p-14 bg-parchment-soft border border-rule rounded-3xl max-[768px]:grid-cols-1 max-[768px]:gap-6 max-[768px]:p-6 max-[768px]:rounded-2xl">

          {/* Brand Logo Avatar */}
          <div
            className="w-[96px] h-[96px] sm:w-[120px] sm:h-[120px] rounded-[26px] sm:rounded-[32px] grid place-items-center justify-self-center"
            style={{
              background: '#1C1917',
              boxShadow: '0 24px 48px -16px rgba(28, 25, 23, 0.45)',
            }}
          >
            <Logo
              iconOnly
              size={56}
              brandColor="text-brand"
              inkColor="text-[#FAF6F0]"
            />
          </div>

          <div>
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEBE4] text-[#7A746E] text-sm font-medium mb-6 border border-[#E5E0D8]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                <path d="M20 3v4"/>
                <path d="M22 5h-4"/>
                <path d="M4 17v2"/>
                <path d="M5 18H3"/>
              </svg>
              We&rsquo;re crafting something meaningful
            </div>

            {/* Main Text */}
            <h2 className="font-display text-[clamp(32px,4.5vw,46px)] leading-[1.1] text-ink mb-5 tracking-[-0.5px] [text-wrap:balance]">
              Ideas were never meant to stay <em className="italic text-brand pr-1">static</em>.
            </h2>
            
            <p className="font-display text-[clamp(18px,2.2vw,22px)] text-ink-soft leading-[1.5] mb-8 max-w-[680px] [text-wrap:pretty]">
              Prologue is an interactive learning experience designed to help you explore,
              move, and truly understand complex concepts.
            </p>

            <hr className="border-t border-rule mb-8 w-full max-w-[680px]" />

            {/* Launch CTA */}
            <div className="flex items-center gap-3 sm:gap-[18px] bg-white/40 p-2 pr-5 sm:pr-8 rounded-[26px] sm:rounded-full border border-white/50 w-full sm:w-auto">
              <div className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] rounded-full bg-white grid place-items-center shadow-sm border border-[#E5E0D8] flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                  <path d="m9 16 2 2 4-4"/>
                </svg>
              </div>
              <p className="font-display text-[15px] sm:text-[19px] leading-[1.4] text-ink-soft tracking-[-0.2px] m-0">
                We&rsquo;re launching soon &mdash;{' '}
                <a 
                  href="#hero-email" 
                  className="text-brand hover:opacity-80 transition-opacity cursor-pointer underline decoration-brand/30 underline-offset-4"
                  onClick={(e) => {
                    const el = document.getElementById('hero-email');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      el.focus({ preventScroll: true });
                    }
                  }}
                >
                  join the waitlist
                </a>
                {' '}for early access.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
