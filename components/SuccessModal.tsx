'use client'

import { useEffect, useState } from 'react'

// Allow CSS custom properties in inline styles
type CSSWithVars = React.CSSProperties & Record<`--${string}`, string | number>

const anim = (
  name: string,
  duration: string,
  delay: string,
  easing: string,
  fill = 'forwards',
  extra = '',
): CSSWithVars => ({
  animation: `${name} ${duration} ${delay} ${easing} ${fill}${extra ? ', ' + extra : ''}`,
})

export default function SuccessModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const [alreadyRegistered, setAlreadyRegistered] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ alreadyRegistered?: boolean }>).detail
      setAlreadyRegistered(detail?.alreadyRegistered ?? false)
      setAnimKey((k) => k + 1)
      setIsOpen(true)
    }
    window.addEventListener('prologue:waitlist-success', handler)
    return () => window.removeEventListener('prologue:waitlist-success', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <div
      aria-hidden={!isOpen}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(28,24,21,0.42)',
        backdropFilter: 'blur(10px) saturate(140%)',
        WebkitBackdropFilter: 'blur(10px) saturate(140%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 0.45s ease',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{
          position: 'relative',
          background: '#F5F1E6',
          borderRadius: '28px',
          width: '100%',
          maxWidth: '1120px',
          maxHeight: '92vh',
          overflow: 'hidden',
          boxShadow:
            '0 60px 120px -30px rgba(28,24,21,0.45), 0 12px 24px -8px rgba(28,24,21,0.15), inset 0 0 0 1px rgba(255,255,255,0.6)',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(24px)',
          transition: isOpen
            ? 'opacity 0.55s ease, transform 0.7s cubic-bezier(.2,.8,.25,1)'
            : 'opacity 0.35s ease, transform 0.35s ease',
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-[18px] right-[18px] z-20 w-[38px] h-[38px] rounded-full border-0 bg-[rgba(28,24,21,0.06)] text-ink-soft grid place-items-center cursor-pointer transition-[background,transform,color] duration-200 hover:bg-ink hover:text-[#F3EBDA] hover:rotate-90 hover:scale-105"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>

        {/* Keyed inner content — remounts on each open to restart all animations */}
        <ModalInner key={animKey} alreadyRegistered={alreadyRegistered} />
      </div>
    </div>
  )
}

function ModalInner({ alreadyRegistered }: { alreadyRegistered: boolean }) {
  return (
    <>
      {/* Scrollable body */}
      <div
        className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] items-center gap-2 md:gap-0 p-8 md:p-14 overflow-y-auto"
        style={{ maxHeight: 'calc(92vh - 57px)' }}
      >
        <LeftColumn alreadyRegistered={alreadyRegistered} />
        <RightColumn />
      </div>

    </>
  )
}

function LeftColumn({ alreadyRegistered }: { alreadyRegistered: boolean }) {
  return (
    <div className="md:pr-9 order-2 md:order-1">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-[10px] font-body text-[15px] font-medium mb-6"
        style={{
          color: '#3D5A33',
          opacity: 0, transform: 'translateY(8px)',
          ...anim('fadeUp', '0.55s', '0.35s', 'cubic-bezier(.2,.8,.3,1)'),
        }}
      >
        <span
          className="w-6 h-6 rounded-full grid place-items-center"
          style={{
            background: '#E5EDD8', color: '#3D5A33',
            ...anim('checkPulse', '2.6s', '1.4s', 'ease-out', 'infinite'),
          }}
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7l3 3 5-6" />
          </svg>
        </span>
        {alreadyRegistered ? 'Already in!' : "You're in!"}
      </div>

      {/* Headline */}
      <h1
        id="modal-title"
        className="font-display font-normal leading-[1.02] tracking-[-1.2px] mb-7 text-ink [text-wrap:balance]"
        style={{
          fontSize: 'clamp(36px,4.4vw,64px)',
          opacity: 0, transform: 'translateY(14px)',
          ...anim('fadeUp', '0.65s', '0.45s', 'cubic-bezier(.2,.8,.3,1)'),
        }}
      >
        {alreadyRegistered ? (
          <>You&apos;re already on the <em className="italic text-brand">waitlist!</em></>
        ) : (
          <>Thanks for joining the <em className="italic text-brand">waitlist!</em></>
        )}
      </h1>

      {/* Body copy */}
      <p
        className="font-body text-[16px] leading-[1.55] text-ink-soft mb-[14px] max-w-[460px]"
        style={{
          opacity: 0, transform: 'translateY(10px)',
          ...anim('fadeUp', '0.6s', '0.55s', 'ease-out'),
        }}
      >
        {alreadyRegistered ? (
          <>We&apos;ve already got your email. You&apos;re secured in line for <strong className="font-semibold text-ink">Prologue</strong>.</>
        ) : (
          <>You&apos;ve taken the first step toward learning smarter with <strong className="font-semibold text-ink">Prologue</strong>.</>
        )}
      </p>
      <p
        className="font-body text-[16px] leading-[1.55] text-ink-soft mb-8 max-w-[460px]"
        style={{
          opacity: 0, transform: 'translateY(10px)',
          ...anim('fadeUp', '0.6s', '0.65s', 'ease-out'),
        }}
      >
        {alreadyRegistered
          ? "We'll be in touch the moment early access opens up. No spam, ever."
          : "We'll notify you as soon as early access opens up. Get ready to turn any concept into clarity."}
      </p>

      {/* "What happens next?" card */}
      <div
        className="rounded-[18px] max-w-[560px]"
        style={{
          background: '#E5EDD8',
          padding: '24px 28px 22px',
          boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
          opacity: 0, transform: 'translateY(14px)',
          ...anim('fadeUp', '0.65s', '0.8s', 'cubic-bezier(.2,.8,.3,1)'),
        }}
      >
        <div
          className="inline-flex items-center gap-2 font-body text-[15px] font-semibold mb-5"
          style={{ color: '#3D5A33', letterSpacing: '-0.1px' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
          </svg>
          What happens next?
        </div>
        <div className="grid grid-cols-3 gap-[14px]">
          <NextStep
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            }
            label="We'll email you when early access is live."
          />
          <NextStep
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 19c0-3 2-5 5-5l5-5a4 4 0 0 1 4 4l-5 5c0 3-2 5-5 5" />
                <path d="M14 6l4 4M7 17l-2 2M9 19l-2 2" />
              </svg>
            }
            label="Be among the first to explore Prologue."
          />
          <NextStep
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-5 9 5-9 5-9-5z" />
                <path d="M7 11v4a5 5 0 0 0 10 0v-4M21 9v5" />
              </svg>
            }
            label="Learn anything by touching it. Literally."
          />
        </div>
      </div>
    </div>
  )
}

function NextStep({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-1 rounded-xl transition-transform duration-[250ms] hover:-translate-y-[3px] group">
      <div
        className="w-12 h-12 rounded-full grid place-items-center transition-[background,transform] duration-200 group-hover:scale-[1.08]"
        style={{ background: '#D5DEC0', color: '#3D5A33' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#C9D6B5' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#D5DEC0' }}
      >
        {icon}
      </div>
      <div className="font-body text-[13px] leading-[1.42] text-ink-soft max-w-[130px]">{label}</div>
    </div>
  )
}

function RightColumn() {
  return (
    <div className="flex flex-col items-center justify-center relative order-1 md:order-2">
      {/* Envelope illustration */}
      <div
        className="w-full max-w-[480px]"
        style={{
          aspectRatio: '1 / 0.94',
          position: 'relative',
          opacity: 0, transform: 'translateY(20px)',
          ...anim('stageRise', '0.8s', '0.25s', 'cubic-bezier(.2,.8,.3,1)'),
        }}
      >
        <EnvelopeSVG />
      </div>

      {/* Closing script text */}
      <div
        className="mt-[22px] text-center"
        style={{
          opacity: 0, transform: 'translateY(10px)',
          ...anim('fadeUp', '0.7s', '2.4s', 'ease-out'),
        }}
      >
        <div
          className="text-[26px] text-ink-soft leading-[1.2]"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          Until then, keep being curious.
        </div>
        <div
          className="relative text-[30px] text-brand leading-[1.2] inline-block mt-[2px]"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          The best ideas are just a touch away.
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '6%', right: '6%', bottom: '4px', height: '6px',
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 8' preserveAspectRatio='none'><path d='M2 5 Q 50 1, 100 4 T 198 3' stroke='%23C13F25' stroke-width='2' fill='none' stroke-linecap='round'/></svg>")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '100% 100%',
              transform: 'scaleX(0)',
              transformOrigin: 'left center',
              ...anim('underlineDraw', '0.7s', '2.9s', 'cubic-bezier(.4,0,.2,1)'),
            }}
          />
        </div>
      </div>
    </div>
  )
}

function EnvelopeSVG() {
  return (
    <svg
      viewBox="0 0 540 500"
      aria-hidden="true"
      style={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="m-splash" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%"   stopColor="#F5C9B8" stopOpacity="0.7" />
          <stop offset="55%"  stopColor="#F5C9B8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F5C9B8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="m-env-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E8D7B5" />
          <stop offset="100%" stopColor="#D4BE96" />
        </linearGradient>
        <linearGradient id="m-env-inside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#9C8259" />
          <stop offset="100%" stopColor="#B19668" />
        </linearGradient>
        <linearGradient id="m-env-flap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E0CCA4" />
          <stop offset="100%" stopColor="#C7AE82" />
        </linearGradient>
        <radialGradient id="m-seal-grad" cx="0.3" cy="0.3" r="0.85">
          <stop offset="0%"   stopColor="#D14628" />
          <stop offset="60%"  stopColor="#A8321B" />
          <stop offset="100%" stopColor="#7A2210" />
        </radialGradient>
        <linearGradient id="m-paper-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFFBF1" />
          <stop offset="100%" stopColor="#F4ECD5" />
        </linearGradient>
      </defs>

      {/* Watercolor splash */}
      <ellipse cx="270" cy="270" rx="240" ry="180" fill="url(#m-splash)" />

      {/* Floating sparkles */}
      <g opacity="0.7" fill="#9B8E72">
        {([
          { d: 'M70 360 l1.4 -3 l3 -1.4 l-3 -1.4 l-1.4 -3 l-1.4 3 l-3 1.4 l3 1.4 z', fx: '-4px', fy: '-8px', delay: '0s' },
          { d: 'M480 380 l1.4 -3 l3 -1.4 l-3 -1.4 l-1.4 -3 l-1.4 3 l-3 1.4 l3 1.4 z', fx: '6px', fy: '-6px', delay: '3.6s' },
          { d: 'M150 30 l1 -2.2 l2.2 -1 l-2.2 -1 l-1 -2.2 l-1 2.2 l-2.2 1 l2.2 1 z', fx: '-5px', fy: '-10px', delay: '3.2s' },
          { d: 'M410 30 l1 -2.2 l2.2 -1 l-2.2 -1 l-1 -2.2 l-1 2.2 l-2.2 1 l2.2 1 z', fx: '4px', fy: '-12px', delay: '4.1s' },
        ] as const).map(({ d, fx, fy, delay }, i) => (
          <path
            key={i}
            d={d}
            style={{ '--fx': fx, '--fy': fy, animation: `pFloat 5s ${delay} ease-in-out infinite` } as CSSWithVars}
          />
        ))}
      </g>

      {/* Confetti burst */}
      <g transform="translate(270, 290)">
        {([
          { r: 3,   fill: '#C13F25', end: 'translate(-190px,-130px)', delay: '1.9s' },
          { r: 2.5, fill: '#E88566', end: 'translate(-160px,-190px)', delay: '2.0s' },
          { r: 2.4, fill: '#C13F25', end: 'translate(-220px,-50px)',  delay: '2.05s' },
          { r: 3,   fill: '#E88566', end: 'translate(180px,-180px)',  delay: '2.0s' },
          { r: 2.5, fill: '#C13F25', end: 'translate(210px,-110px)',  delay: '2.1s' },
          { r: 2,   fill: '#4A6B3E', end: 'translate(230px,-10px)',   delay: '2.15s' },
          { r: 2,   fill: '#E88566', end: 'translate(-180px,30px)',   delay: '2.25s' },
          { r: 2.4, fill: '#C13F25', end: 'translate(195px,60px)',    delay: '2.3s' },
        ] as const).map(({ r, fill, end, delay }, i) => (
          <circle key={i} cx="0" cy="0" r={r} fill={fill}
            style={{ opacity: 0, '--end': end, animation: `pBurst 1.4s ${delay} cubic-bezier(.2,.8,.3,1) forwards` } as CSSWithVars}
          />
        ))}
        {([
          { x2: 8,  y2: -2, stroke: '#C13F25', sw: 2,   end: 'translate(-200px,-70px)',  delay: '1.95s' },
          { x2: 8,  y2: -2, stroke: '#4A6B3E', sw: 2,   end: 'translate(200px,-50px)',   delay: '2.0s' },
          { x2: -6, y2: 3,  stroke: '#E88566', sw: 1.8, end: 'translate(-110px,-220px)', delay: '2.1s' },
          { x2: 6,  y2: 3,  stroke: '#4A6B3E', sw: 1.8, end: 'translate(130px,-220px)',  delay: '2.15s' },
        ] as const).map(({ x2, y2, stroke, sw, end, delay }, i) => (
          <line key={i} x1="0" y1="0" x2={x2} y2={y2} stroke={stroke} strokeWidth={sw} strokeLinecap="round"
            style={{ opacity: 0, '--end': end, animation: `pBurst 1.4s ${delay} cubic-bezier(.2,.8,.3,1) forwards` } as CSSWithVars}
          />
        ))}
        {([
          { fill: '#4A6B3E', end: 'translate(-240px,-10px)',  delay: '2.2s' },
          { fill: '#C13F25', end: 'translate(220px,-180px)',  delay: '2.05s' },
        ] as const).map(({ fill, end, delay }, i) => (
          <path key={i} d="M0 0 l3 -3 l3 3 l-3 3 z" fill={fill}
            style={{ opacity: 0, '--end': end, animation: `pBurst 1.4s ${delay} cubic-bezier(.2,.8,.3,1) forwards` } as CSSWithVars}
          />
        ))}
      </g>

      {/* Paper airplane */}
      <g transform="translate(440, 70)">
        <g style={{ opacity: 0, ...anim('planeFly', '4s', '2.4s', 'ease-out', 'infinite') }}>
          <path d="M 0 0 L 38 -8 L 22 8 L 14 4 Z" fill="#FFFBF1" stroke="#1B1714" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M 14 4 L 22 8 L 18 16 Z" fill="#E5D8B7" stroke="#1B1714" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M 22 8 L 38 -8" stroke="#1B1714" strokeWidth="1.1" fill="none" />
          <path d="M -4 2 Q -18 -4 -28 4 Q -36 12 -50 4" fill="none" stroke="#9B8E72" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 4" />
        </g>
      </g>

      {/* Leaf sprig — LEFT */}
      <g transform="translate(85, 290)">
        <g style={{ opacity: 0, transformOrigin: 'bottom center', animation: 'leafIn 0.8s 1.4s cubic-bezier(.2,.8,.3,1) forwards, leafSway 6s 2.2s ease-in-out infinite' }}>
          <path d="M 0 100 Q -10 60 -20 20 Q -25 0 -30 -20" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
          <g fill="#7BA563" stroke="#5A7A4A" strokeWidth="1">
            <ellipse cx="-8" cy="80" rx="10" ry="5" transform="rotate(-30 -8 80)" />
            <ellipse cx="-22" cy="60" rx="11" ry="5" transform="rotate(40 -22 60)" />
            <ellipse cx="-18" cy="38" rx="10" ry="4.5" transform="rotate(-30 -18 38)" />
            <ellipse cx="-30" cy="18" rx="11" ry="5" transform="rotate(45 -30 18)" />
            <ellipse cx="-32" cy="-6" rx="9" ry="4" transform="rotate(-25 -32 -6)" />
            <ellipse cx="-40" cy="-20" rx="8" ry="4" transform="rotate(35 -40 -20)" />
          </g>
          <path d="M 10 100 Q 20 70 35 50 Q 50 30 60 10" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
          <g fill="#8FB572" stroke="#5A7A4A" strokeWidth="1">
            <ellipse cx="22" cy="78" rx="9" ry="4" transform="rotate(40 22 78)" />
            <ellipse cx="38" cy="58" rx="10" ry="4.5" transform="rotate(-35 38 58)" />
            <ellipse cx="52" cy="36" rx="9" ry="4" transform="rotate(45 52 36)" />
            <ellipse cx="64" cy="14" rx="8" ry="3.5" transform="rotate(-30 64 14)" />
          </g>
        </g>
      </g>

      {/* Leaf sprig — RIGHT */}
      <g transform="translate(455, 290)">
        <g style={{ opacity: 0, transformOrigin: 'bottom center', animation: 'leafIn 0.8s 1.4s cubic-bezier(.2,.8,.3,1) forwards, leafSwayR 6s 2.2s ease-in-out infinite' }}>
          <path d="M 0 100 Q 10 60 20 20 Q 25 0 30 -20" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
          <g fill="#7BA563" stroke="#5A7A4A" strokeWidth="1">
            <ellipse cx="8" cy="80" rx="10" ry="5" transform="rotate(30 8 80)" />
            <ellipse cx="22" cy="60" rx="11" ry="5" transform="rotate(-40 22 60)" />
            <ellipse cx="18" cy="38" rx="10" ry="4.5" transform="rotate(30 18 38)" />
            <ellipse cx="30" cy="18" rx="11" ry="5" transform="rotate(-45 30 18)" />
            <ellipse cx="32" cy="-6" rx="9" ry="4" transform="rotate(25 32 -6)" />
            <ellipse cx="40" cy="-20" rx="8" ry="4" transform="rotate(-35 40 -20)" />
          </g>
          <path d="M -10 100 Q -20 70 -35 50 Q -50 30 -60 10" fill="none" stroke="#5A7A4A" strokeWidth="2" strokeLinecap="round" />
          <g fill="#8FB572" stroke="#5A7A4A" strokeWidth="1">
            <ellipse cx="-22" cy="78" rx="9" ry="4" transform="rotate(-40 -22 78)" />
            <ellipse cx="-38" cy="58" rx="10" ry="4.5" transform="rotate(35 -38 58)" />
            <ellipse cx="-52" cy="36" rx="9" ry="4" transform="rotate(-45 -52 36)" />
            <ellipse cx="-64" cy="14" rx="8" ry="3.5" transform="rotate(30 -64 14)" />
          </g>
        </g>
      </g>

      {/* Envelope back panel */}
      <g style={{ transformOrigin: '270px 420px', ...anim('envelopeRise', '0.6s', '0.35s', 'cubic-bezier(.2,.8,.3,1)') }}>
        <path d="M 140 250 L 400 250 L 400 420 L 140 420 Z" fill="url(#m-env-inside)" stroke="#7A6549" strokeWidth="2" strokeLinejoin="round" />
      </g>

      {/* Envelope flap — folds open */}
      <g style={{ transformOrigin: '270px 250px', ...anim('flapOpen', '0.85s', '0.85s', 'cubic-bezier(.55,0,.2,1)') }}>
        <path d="M 140 250 L 400 250 L 270 350 Z" fill="url(#m-env-flap)" stroke="#9B8055" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 140 250 L 270 350 L 400 250" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      </g>

      {/* Letter — rises out of envelope */}
      <g style={{ ...anim('letterRise', '1.2s', '1.4s', 'cubic-bezier(.22,.88,.28,1)') }}>
        <path d="M 168 140 L 372 140 L 372 410 L 168 410 Z" fill="rgba(28,24,21,0.12)" transform="translate(2, 4)" />
        <path d="M 168 140 L 372 140 L 372 410 L 168 410 Z" fill="url(#m-paper-grad)" stroke="#C7B58A" strokeWidth="1.5" strokeLinejoin="round" />
        <text x="270" y="195" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="26" fill="#1B1714" letterSpacing="-0.3">
          You&apos;re on the list!
        </text>
        <text textAnchor="middle" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="20" fill="#C13F25">
          <tspan x="270" y="240">Big things are coming</tspan>
          <tspan x="270" dy="26">your way.</tspan>
        </text>
        {/* Heart */}
        <g transform="translate(259, 285)">
          <g style={{ opacity: 0, transformOrigin: '270px 295px', animation: 'heartIn 0.5s 2.2s cubic-bezier(.34,1.56,.64,1) forwards, heartBeat 2.4s 2.9s ease-in-out infinite' }}>
            <path d="M 11 18 C 11 18 0 11 0 5 C 0 2 2 0 5 0 C 8 0 11 3 11 3 C 11 3 14 0 17 0 C 20 0 22 2 22 5 C 22 11 11 18 11 18 Z"
              fill="#C13F25" stroke="#7A2210" strokeWidth="1.2" strokeLinejoin="round" />
          </g>
        </g>
      </g>

      {/* Envelope front pocket */}
      <g style={{ transformOrigin: '270px 420px', ...anim('envelopeRise', '0.6s', '0.35s', 'cubic-bezier(.2,.8,.3,1)') }}>
        <path d="M 140 420 L 140 250 L 270 350 L 400 250 L 400 420 Z" fill="url(#m-env-front)" stroke="#9B8055" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 140 250 L 270 350 L 400 250" fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="1.4" />
      </g>

      {/* Wax seal impact ring */}
      <circle cx="270" cy="350" r="30" fill="none" stroke="#C13F25" strokeWidth="2"
        style={{ opacity: 0, transformOrigin: '270px 350px', ...anim('sealImpact', '0.9s', '2.6s', 'ease-out') }}
      />

      {/* Wax seal */}
      <g transform="translate(270, 350)">
        <g style={{ opacity: 0, transformOrigin: '270px 350px', ...anim('sealStamp', '0.5s', '2.55s', 'cubic-bezier(.34,1.56,.64,1)') }}>
          <path d="M 0 -28 C 16 -28, 30 -16, 30 0 C 30 16, 18 28, 2 28 C -16 30, -30 16, -30 0 C -30 -16, -16 -30, 0 -28 Z"
            fill="url(#m-seal-grad)" stroke="#5A1808" strokeWidth="1.5" />
          <circle r="22" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <text y="8" textAnchor="middle" fontFamily="Instrument Serif, serif" fontSize="26" fontStyle="italic" fill="#F5E5C8" fontWeight="400">P</text>
          <ellipse cx="-9" cy="-12" rx="6" ry="4" fill="rgba(255,255,255,0.20)" />
        </g>
      </g>
    </svg>
  )
}
