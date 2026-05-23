// Server component — pure static HTML/SVG with SMIL animations

const StatusIcons = () => (
  <svg width="42" height="12" viewBox="0 0 42 12" fill="currentColor">
    <rect x="0" y="6" width="3" height="6" rx="0.6" />
    <rect x="5" y="4" width="3" height="8" rx="0.6" />
    <rect x="10" y="2" width="3" height="10" rx="0.6" />
    <rect x="15" y="0" width="3" height="12" rx="0.6" />
    <rect x="24" y="1" width="15" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <rect x="26" y="3" width="10" height="6" rx="1" />
  </svg>
)

export default function PhoneShowcase() {
  return (
    <section className="pt-10 sm:pt-14 pb-8">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-7 text-center">
        <div className="font-code text-xs tracking-[1.6px] text-brand mb-[14px]">
          № 01 — In your pocket
        </div>
        <h2
          className="font-display font-normal text-[clamp(32px,8vw,64px)] leading-[1.02] tracking-[-1px] mb-4 sm:mb-[18px] [text-wrap:balance] text-center"
        >
          A working <em className="italic text-brand">world</em>,
          <br />
          in every screen.
        </h2>
        <p className="font-display text-[clamp(16px,2vw,22px)] leading-[1.45] text-ink-soft max-w-[560px] mx-auto mb-0">
          Tap, drag, pinch. The same interactive worlds run smoothly on phone,
          tablet and desktop.
        </p>

        {/* Phones stage */}
        <div className="phones-stage relative flex justify-center items-end gap-3 py-12 pb-6 min-h-[540px] max-[900px]:gap-0 max-[900px]:py-8 max-[640px]:min-h-[420px] max-[400px]:min-h-[360px]">

          {/* ── Phone 1 · LEFT — Derivative (dark) ────────────── */}
          <div
            className="phone phone--left relative w-[240px] bg-[#0E0B09] rounded-[42px] p-[7px] flex-shrink-0 transition-transform duration-[350ms] [cubic-bezier(.2,.7,.3,1)] max-[900px]:w-[200px] max-[640px]:w-[160px] max-[400px]:w-[130px]"
            style={{
              aspectRatio: '9 / 19.2',
              boxShadow:
                '0 36px 60px -28px rgba(28,24,21,0.55), 0 12px 24px -8px rgba(28,24,21,0.18), inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 -1px 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Side button hint */}
            <div className="absolute left-[-2px] top-[110px] w-[3px] h-[56px] bg-[#2A2622] rounded-sm" />
            {/* Dynamic island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[78px] h-[22px] bg-black rounded-full z-10" />
            {/* Screen */}
            <div className="w-full h-full rounded-[36px] overflow-hidden relative bg-parchment-card text-[#EFE7D6]">
              {/* Status bar */}
              <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-[26px] font-body text-[12px] font-semibold z-[4] text-[#EFE7D6]">
                <span>9:41</span>
                <StatusIcons />
              </div>
              {/* Content */}
              <div className="absolute inset-0 pt-14 px-[22px] pb-7 flex flex-col">
                <div className="font-code text-[9px] tracking-[1.4px] uppercase text-brand mb-[10px]">
                  Calculus · Grade 11
                </div>
                <h3 className="font-display text-[26px] leading-none tracking-[-0.4px] mb-2 font-normal text-[#EFE7D6]">
                  The <em className="italic text-brand">derivative.</em>
                </h3>
                <p className="font-body text-[11px] leading-[1.4] text-[#8A8071] mb-4">
                  Drag the point. Watch the slope.
                </p>
                <div className="flex-1 rounded-2xl bg-white/[0.04] border border-white/[0.06] relative overflow-hidden grid place-items-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full block">
                    <line x1="20" y1="165" x2="185" y2="165" stroke="rgba(239,231,214,0.2)" />
                    <line x1="20" y1="165" x2="20" y2="25" stroke="rgba(239,231,214,0.2)" />
                    <path d="M 25 160 Q 70 140, 100 90 T 185 25" fill="none" stroke="rgba(239,231,214,0.5)" strokeWidth="2" />
                    <line x1="55" y1="143" x2="145" y2="55" stroke="#C13F25" strokeWidth="2.2" />
                    <circle cx="100" cy="90" r="16" fill="rgba(193,63,37,0.18)" />
                    <circle cx="100" cy="90" r="6" fill="#C13F25" stroke="#F3EBDA" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex justify-between items-center mt-[14px] font-code text-[10px] tracking-[1px] uppercase text-[#8A8071]">
                  <span>Slope</span>
                  <span className="font-display text-[20px] text-brand tracking-[-0.3px]">+1.42</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Phone 2 · CENTER — Pendulum (light) ───────────── */}
          <div
            className="phone phone--center relative w-[240px] bg-[#0E0B09] rounded-[42px] p-[7px] flex-shrink-0 z-[2] transition-transform duration-[350ms] max-[900px]:w-[200px] max-[640px]:w-[160px] max-[400px]:w-[130px]"
            style={{
              aspectRatio: '9 / 19.2',
              boxShadow:
                '0 36px 60px -28px rgba(28,24,21,0.55), 0 12px 24px -8px rgba(28,24,21,0.18), inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 -1px 0 1px rgba(255,255,255,0.04)',
            }}
          >
            <div className="absolute left-[-2px] top-[110px] w-[3px] h-[56px] bg-[#2A2622] rounded-sm" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[78px] h-[22px] bg-black rounded-full z-10" />
            <div className="w-full h-full rounded-[36px] overflow-hidden relative bg-parchment text-ink">
              <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-[26px] font-body text-[12px] font-semibold z-[4] text-ink">
                <span>9:41</span>
                <StatusIcons />
              </div>
              <div className="absolute inset-0 pt-14 px-[22px] pb-7 flex flex-col">
                <div className="font-code text-[9px] tracking-[1.4px] uppercase text-brand mb-[10px]">
                  Physics · Grade 9
                </div>
                <h3 className="font-display text-[26px] leading-none tracking-[-0.4px] mb-2 font-normal text-ink">
                  Why a pendulum <em className="italic text-brand">slows.</em>
                </h3>
                <p className="font-body text-[11px] leading-[1.4] text-muted mb-4">
                  Pull. Release. Watch it lose energy to the air.
                </p>
                <div className="flex-1 rounded-2xl bg-parchment-soft border border-rule relative overflow-hidden grid place-items-center">
                  <svg viewBox="0 0 200 240" className="w-full h-full block">
                    <line x1="40" y1="24" x2="160" y2="24" stroke="#1B1714" strokeWidth="2" />
                    <line x1="100" y1="24" x2="100" y2="30" stroke="#1B1714" strokeWidth="2" />
                    <circle cx="100" cy="24" r="4" fill="#1B1714" />
                    <path d="M 38 150 Q 100 200, 162 150" fill="none" stroke="#C13F25" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.45" />
                    <g>
                      <line x1="100" y1="24" x2="75" y2="175" stroke="#1B1714" strokeWidth="2">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="-22 100 24"
                          to="22 100 24"
                          dur="2.4s"
                          repeatCount="indefinite"
                          values="-22 100 24;22 100 24;-22 100 24"
                          keyTimes="0;0.5;1"
                        />
                      </line>
                      <circle cx="75" cy="175" r="16" fill="#C13F25" stroke="#1B1714" strokeWidth="2">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="-22 100 24"
                          to="22 100 24"
                          dur="2.4s"
                          repeatCount="indefinite"
                          values="-22 100 24;22 100 24;-22 100 24"
                          keyTimes="0;0.5;1"
                        />
                      </circle>
                    </g>
                  </svg>
                </div>
                <div className="flex justify-between items-center mt-[14px] font-code text-[10px] tracking-[1px] uppercase text-muted">
                  <span>Energy</span>
                  <span className="font-display text-[20px] text-brand tracking-[-0.3px]">0.83 J</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Phone 3 · RIGHT — Cells (dark) ────────────────── */}
          <div
            className="phone phone--right relative w-[240px] bg-[#0E0B09] rounded-[42px] p-[7px] flex-shrink-0 transition-transform duration-[350ms] max-[900px]:w-[200px] max-[640px]:w-[160px] max-[400px]:w-[130px]"
            style={{
              aspectRatio: '9 / 19.2',
              boxShadow:
                '0 36px 60px -28px rgba(28,24,21,0.55), 0 12px 24px -8px rgba(28,24,21,0.18), inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 -1px 0 1px rgba(255,255,255,0.04)',
            }}
          >
            <div className="absolute left-[-2px] top-[110px] w-[3px] h-[56px] bg-[#2A2622] rounded-sm" />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[78px] h-[22px] bg-black rounded-full z-10" />
            <div className="w-full h-full rounded-[36px] overflow-hidden relative bg-parchment-card text-[#EFE7D6]">
              <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-[26px] font-body text-[12px] font-semibold z-[4] text-[#EFE7D6]">
                <span>9:41</span>
                <StatusIcons />
              </div>
              <div className="absolute inset-0 pt-14 px-[22px] pb-7 flex flex-col">
                <div className="font-code text-[9px] tracking-[1.4px] uppercase text-brand mb-[10px]">
                  Biology · Grade 10
                </div>
                <h3 className="font-display text-[26px] leading-none tracking-[-0.4px] mb-2 font-normal text-[#EFE7D6]">
                  Cells <em className="italic text-brand">dividing.</em>
                </h3>
                <p className="font-body text-[11px] leading-[1.4] text-[#8A8071] mb-4">
                  Scrub the timeline. Walk through mitosis at your pace.
                </p>
                <div className="flex-1 rounded-2xl bg-white/[0.04] border border-white/[0.06] relative overflow-hidden grid place-items-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full block">
                    <circle cx="50" cy="60" r="28" fill="none" stroke="#EFE7D6" strokeWidth="1.8" />
                    <circle cx="50" cy="60" r="12" fill="#C13F25" opacity="0.85" />
                    <circle cx="140" cy="60" r="20" fill="none" stroke="#EFE7D6" strokeWidth="1.8" />
                    <circle cx="140" cy="60" r="8" fill="#C13F25" opacity="0.85" />
                    <circle cx="180" cy="60" r="14" fill="none" stroke="#EFE7D6" strokeWidth="1.8" />
                    <circle cx="180" cy="60" r="6" fill="#C13F25" opacity="0.85" />
                    <line x1="20" y1="150" x2="180" y2="150" stroke="rgba(239,231,214,0.2)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="20" y1="150" x2="120" y2="150" stroke="#C13F25" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="120" cy="150" r="7" fill="#EFE7D6" stroke="#0E0B09" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex justify-between items-center mt-[14px] font-code text-[10px] tracking-[1px] uppercase text-[#8A8071]">
                  <span>Phase</span>
                  <span className="font-display text-[20px] text-brand tracking-[-0.3px]">Anaphase</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
