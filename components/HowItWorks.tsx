// Server component — SMIL animations in SVG are fine here

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24" id="how">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-7">
        <div className="font-code text-xs tracking-[1.6px] text-brand mb-[14px]">
          № 02 — How it works
        </div>
        <h2 className="font-display font-normal text-[clamp(32px,8vw,64px)] leading-[1.02] tracking-[-1px] mb-4 sm:mb-[18px] [text-wrap:balance]">
          Type a concept.
          <br />
          Touch the answer.
        </h2>
        <p className="font-display text-[clamp(16px,2vw,22px)] leading-[1.45] text-ink-soft max-w-[560px] mb-10 sm:mb-14">
          Three steps, every time. Any subject, any grade level.
        </p>

        <div className="grid grid-cols-3 gap-5 sm:gap-7 max-[760px]:grid-cols-1 max-[760px]:gap-4">

          {/* ── Pillar 1: Ask ──────────────────────────────────── */}
          <div className="bg-parchment-soft border border-rule rounded-[20px] p-7 pb-[26px] flex flex-col gap-4 min-h-[280px] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(28,24,21,0.3)] transition-all duration-200">
            <div className="flex-1 min-h-[120px] rounded-xl bg-white border border-rule grid place-items-center overflow-hidden relative">
              <svg viewBox="0 0 240 130" width="100%" height="100%">
                <rect x="14" y="40" width="212" height="50" rx="12" fill="#F2EDE1" stroke="#D9D2BF" />
                <text x="28" y="71" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="18" fill="#1B1714">
                  How do tides work?
                </text>
                <rect x="190" y="48" width="2" height="34" fill="#C13F25">
                  <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
                </rect>
              </svg>
            </div>
            <h3 className="font-display font-normal text-[24px] tracking-[-0.3px] leading-[1.15]">
              <em className="italic text-brand">01.</em> Ask
            </h3>
            <p className="font-body text-[14px] leading-[1.5] text-muted">
              In plain English, type what&apos;s confusing you. No taxonomy, no level
              select. Just the question in your own words.
            </p>
          </div>

          {/* ── Pillar 2: Generate ─────────────────────────────── */}
          <div className="bg-parchment-soft border border-rule rounded-[20px] p-7 pb-[26px] flex flex-col gap-4 min-h-[280px] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(28,24,21,0.3)] transition-all duration-200">
            <div className="flex-1 min-h-[120px] rounded-xl bg-white border border-rule grid place-items-center overflow-hidden relative">
              <svg viewBox="0 0 240 130" className="w-full h-full">
                <line x1="20" y1="105" x2="220" y2="105" stroke="#D9D2BF" />
                <line x1="20" y1="105" x2="20" y2="20" stroke="#D9D2BF" />
                <path
                  d="M 20 100 Q 60 80, 100 60 T 220 30"
                  fill="none"
                  stroke="#C13F25"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="280"
                  strokeDashoffset="280"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="280;0;0;280"
                    keyTimes="0;0.5;0.9;1"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle cx="100" cy="60" r="5" fill="#C13F25" stroke="#fff" strokeWidth="1.5">
                  <animate
                    attributeName="opacity"
                    values="0;0;1;1;0"
                    keyTimes="0;0.5;0.55;0.9;1"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
            <h3 className="font-display font-normal text-[24px] tracking-[-0.3px] leading-[1.15]">
              <em className="italic text-brand">02.</em> Generate
            </h3>
            <p className="font-body text-[14px] leading-[1.5] text-muted">
              An interactive visual builds itself in real time — coordinate planes,
              simulations, diagrams, whatever the concept calls for.
            </p>
          </div>

          {/* ── Pillar 3: Touch ────────────────────────────────── */}
          <div className="bg-parchment-soft border border-rule rounded-[20px] p-7 pb-[26px] flex flex-col gap-4 min-h-[280px] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(28,24,21,0.3)] transition-all duration-200">
            <div className="flex-1 min-h-[120px] rounded-xl bg-white border border-rule grid place-items-center overflow-hidden relative">
              <svg viewBox="0 0 240 130" className="w-full h-full">
                <line x1="40" y1="65" x2="200" y2="65" stroke="#D9D2BF" strokeWidth="3" strokeLinecap="round" />
                <line x1="40" y1="65" x2="140" y2="65" stroke="#C13F25" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="x2" values="80;180;80" dur="2.8s" repeatCount="indefinite" />
                </line>
                <circle cx="140" cy="65" r="11" fill="#1B1714" stroke="#fff" strokeWidth="2">
                  <animate attributeName="cx" values="80;180;80" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <text x="40" y="100" fontFamily="Geist Mono, monospace" fontSize="11" fill="#7B7264" letterSpacing="1">
                  0
                </text>
                <text x="195" y="100" fontFamily="Geist Mono, monospace" fontSize="11" fill="#7B7264" letterSpacing="1">
                  1
                </text>
              </svg>
            </div>
            <h3 className="font-display font-normal text-[24px] tracking-[-0.3px] leading-[1.15]">
              <em className="italic text-brand">03.</em> Touch
            </h3>
            <p className="font-body text-[14px] leading-[1.5] text-muted">
              Drag, pull, scrub, rotate. The visual responds. You don&apos;t just see how
              it works — you feel it behave under your hand.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
