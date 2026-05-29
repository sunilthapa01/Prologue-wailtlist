import Link from 'next/link'
import Logo from '@/components/Logo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PrologLearn — Coming Soon',
  description:
    'An interactive visual learning platform launching soon. Join the waitlist to get early access.',
}

const features = [
  {
    number: '01',
    title: 'Interactive Learning',
    desc: 'Touch and manipulate ideas directly — no passive reading, no memorisation without understanding.',
  },
  {
    number: '02',
    title: 'Practical Projects',
    desc: 'Apply knowledge through hands-on exploration that mirrors real-world challenges.',
  },
  {
    number: '03',
    title: 'Career Growth',
    desc: 'Build skills that translate directly into opportunities in any field you choose.',
  },
  {
    number: '04',
    title: 'Modern Tech Skills',
    desc: 'Stay ahead with curated, up-to-date skills shaped for a fast-changing world.',
  },
]

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-parchment flex flex-col overflow-hidden relative">
      {/* Ambient gradient orbs */}
      <div className="cs-orb cs-orb-1" aria-hidden="true" />
      <div className="cs-orb cs-orb-2" aria-hidden="true" />

      {/* Header */}
      <header className="relative z-10 px-6 sm:px-10 py-5 flex justify-center border-b border-rule/40">
        <Logo size={26} />
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 text-center relative z-10 py-12 sm:py-16">

        {/* Eyebrow */}
        <div className="cs-fade inline-flex items-center gap-[10px] font-body text-[11px] font-medium tracking-[1.8px] uppercase text-muted mb-7">
          <span className="w-[7px] h-[7px] rounded-full bg-brand animate-pulse-ring flex-shrink-0" />
          Launching Soon
        </div>

        {/* Headline */}
        <h1 className="cs-fade cs-fade-d1 font-display text-[clamp(38px,8.5vw,84px)] leading-[0.96] tracking-[-1.5px] sm:tracking-[-2px] text-ink [text-wrap:balance] max-w-[820px] mb-6 sm:mb-8">
          The Future of Learning
          <br />
          is <em className="italic text-brand">Coming Soon</em>
        </h1>

        {/* Description */}
        <p className="cs-fade cs-fade-d2 font-body text-[clamp(16px,2vw,20px)] leading-relaxed text-ink-soft max-w-[540px] mb-10 [text-wrap:pretty]">
          PrologLearn is building an interactive, visual learning platform — where
          you can touch, drag, and explore ideas until the moment they truly click.
          Early access spots are limited.
        </p>

        {/* CTA */}
        <div className="cs-fade cs-fade-d3 flex flex-col sm:flex-row items-center gap-4 mb-7">
          <Link href="/waitlistpage" className="cs-btn">
            Join the Waitlist
          </Link>
        </div>

        {/* URL reference */}
        <p className="cs-fade cs-fade-d4 font-body text-[13px] text-muted">
          or visit&nbsp;
          <a
            href="https://www.prologlearn.com/waitlistpage"
            className="text-brand underline underline-offset-2 hover:text-[#A8351F] transition-colors"
          >
            www.prologlearn.com/waitlistpage
          </a>
        </p>

        {/* Feature grid */}
        <div className="cs-fade cs-fade-d5 w-full max-w-[940px] mt-16 sm:mt-20">
          <div className="h-px bg-rule mb-12 sm:mb-14" />
          <p className="font-body text-[11px] font-medium tracking-[1.8px] uppercase text-muted mb-8">
            What to Expect
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
            {features.map((f) => (
              <div key={f.number} className="cs-card">
                <span className="font-body font-semibold text-[11px] tracking-[1.4px] uppercase text-brand mb-3 block">
                  {f.number}
                </span>
                <h3 className="font-body font-semibold text-ink text-[15px] mb-2 leading-snug">
                  {f.title}
                </h3>
                <p className="font-body text-muted text-[13px] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 font-body text-muted text-sm border-t border-rule/40">
        PrologLearn &copy; 2026. Launching Soon.
      </footer>
    </div>
  )
}
