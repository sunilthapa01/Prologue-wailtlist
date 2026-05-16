// Server component

export default function Gallery() {
  return (
    <section className="py-24" id="examples">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="font-code text-xs tracking-[1.6px] text-brand mb-[14px]">
          № 03 — A few examples
        </div>
        <h2 className="font-display font-normal text-[clamp(38px,5.4vw,64px)] leading-none tracking-[-1px] mb-[18px] [text-wrap:balance]">
          Anything is <em className="italic text-brand">touchable.</em>
        </h2>
        <p className="font-display text-[clamp(18px,2vw,22px)] leading-[1.45] text-ink-soft max-w-[560px] mb-14">
          A handful of concepts students have already brought us. Each one becomes a tiny working world.
        </p>

        <div className="grid grid-cols-2 gap-4 max-[720px]:grid-cols-1">

          {/* ── Card 1: Derivative ────────────────────────────── */}
          <div className="bg-white border border-rule rounded-[18px] p-[22px] flex flex-col gap-[14px] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(28,24,21,0.25)] transition-all duration-200">
            <div className="font-code text-[10px] tracking-[1.4px] uppercase text-muted">
              Calculus · Grade 11
            </div>
            <div className="font-display italic text-[22px] leading-[1.2] text-ink tracking-[-0.2px]">
              &ldquo;What does a derivative actually mean?&rdquo;
            </div>
            <div className="aspect-[16/10] rounded-[10px] bg-parchment-soft overflow-hidden relative">
              <svg viewBox="0 0 320 200" className="block w-full h-full">
                <rect width="320" height="200" fill="#EAE3D1" />
                <line x1="20" y1="170" x2="300" y2="170" stroke="#B6AC9A" />
                <line x1="20" y1="170" x2="20" y2="20" stroke="#B6AC9A" />
                <path d="M 30 170 Q 90 150, 140 110 T 290 30" fill="none" stroke="#1B1714" strokeWidth="2" />
                <line x1="90" y1="140" x2="200" y2="65" stroke="#C13F25" strokeWidth="2" />
                <circle cx="145" cy="103" r="6" fill="#C13F25" stroke="#fff" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex justify-between items-center font-body text-[13px]">
              <span className="text-muted">Drag the point · live tangent</span>
              <span className="text-brand font-medium inline-flex items-center gap-1.5">Try it →</span>
            </div>
          </div>

          {/* ── Card 2: Pendulum ──────────────────────────────── */}
          <div className="bg-white border border-rule rounded-[18px] p-[22px] flex flex-col gap-[14px] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(28,24,21,0.25)] transition-all duration-200">
            <div className="font-code text-[10px] tracking-[1.4px] uppercase text-muted">
              Physics · Grade 9
            </div>
            <div className="font-display italic text-[22px] leading-[1.2] text-ink tracking-[-0.2px]">
              &ldquo;Why does a pendulum slow down?&rdquo;
            </div>
            <div className="aspect-[16/10] rounded-[10px] bg-parchment-soft overflow-hidden relative">
              <svg viewBox="0 0 320 200" className="block w-full h-full">
                <rect width="320" height="200" fill="#EAE3D1" />
                <line x1="160" y1="20" x2="160" y2="40" stroke="#1B1714" strokeWidth="2" />
                <circle cx="160" cy="20" r="3" fill="#1B1714" />
                <line x1="160" y1="20" x2="100" y2="130" stroke="#1B1714" strokeWidth="1.5" opacity="0.25" />
                <line x1="160" y1="20" x2="220" y2="130" stroke="#1B1714" strokeWidth="1.5" opacity="0.25" />
                <line x1="160" y1="20" x2="140" y2="170" stroke="#1B1714" strokeWidth="2" />
                <circle cx="140" cy="170" r="14" fill="#C13F25" stroke="#1B1714" strokeWidth="2" />
                <path d="M 100 130 Q 160 180, 220 130" fill="none" stroke="#C13F25" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.5" />
              </svg>
            </div>
            <div className="flex justify-between items-center font-body text-[13px]">
              <span className="text-muted">Swing it, watch energy drain</span>
              <span className="text-brand font-medium inline-flex items-center gap-1.5">Try it →</span>
            </div>
          </div>

          {/* ── Card 3: Cell Division ─────────────────────────── */}
          <div className="bg-white border border-rule rounded-[18px] p-[22px] flex flex-col gap-[14px] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(28,24,21,0.25)] transition-all duration-200">
            <div className="font-code text-[10px] tracking-[1.4px] uppercase text-muted">
              Biology · Grade 10
            </div>
            <div className="font-display italic text-[22px] leading-[1.2] text-ink tracking-[-0.2px]">
              &ldquo;How does a cell divide?&rdquo;
            </div>
            <div className="aspect-[16/10] rounded-[10px] bg-parchment-soft overflow-hidden relative">
              <svg viewBox="0 0 320 200" className="block w-full h-full">
                <rect width="320" height="200" fill="#EAE3D1" />
                <circle cx="100" cy="100" r="44" fill="none" stroke="#1B1714" strokeWidth="2" />
                <circle cx="100" cy="100" r="20" fill="#C13F25" opacity="0.85" />
                <path d="M 175 100 L 215 100 M 205 92 L 215 100 L 205 108" fill="none" stroke="#7B7264" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="252" cy="78" r="28" fill="none" stroke="#1B1714" strokeWidth="2" />
                <circle cx="252" cy="78" r="12" fill="#C13F25" opacity="0.85" />
                <circle cx="280" cy="135" r="22" fill="none" stroke="#1B1714" strokeWidth="2" />
                <circle cx="280" cy="135" r="10" fill="#C13F25" opacity="0.85" />
              </svg>
            </div>
            <div className="flex justify-between items-center font-body text-[13px]">
              <span className="text-muted">Scrub the timeline</span>
              <span className="text-brand font-medium inline-flex items-center gap-1.5">Try it →</span>
            </div>
          </div>

          {/* ── Card 4: Supply & Demand ───────────────────────── */}
          <div className="bg-white border border-rule rounded-[18px] p-[22px] flex flex-col gap-[14px] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_rgba(28,24,21,0.25)] transition-all duration-200">
            <div className="font-code text-[10px] tracking-[1.4px] uppercase text-muted">
              Economics · Grade 12
            </div>
            <div className="font-display italic text-[22px] leading-[1.2] text-ink tracking-[-0.2px]">
              &ldquo;What is supply and demand?&rdquo;
            </div>
            <div className="aspect-[16/10] rounded-[10px] bg-parchment-soft overflow-hidden relative">
              <svg viewBox="0 0 320 200" className="block w-full h-full">
                <rect width="320" height="200" fill="#EAE3D1" />
                <line x1="30" y1="170" x2="300" y2="170" stroke="#B6AC9A" />
                <line x1="30" y1="170" x2="30" y2="20" stroke="#B6AC9A" />
                <line x1="40" y1="40" x2="290" y2="160" stroke="#1B1714" strokeWidth="2" />
                <line x1="40" y1="160" x2="290" y2="40" stroke="#C13F25" strokeWidth="2" />
                <circle cx="165" cy="100" r="7" fill="#1B1714" stroke="#fff" strokeWidth="2" />
                <text x="280" y="35" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="14" fill="#C13F25">D</text>
                <text x="280" y="160" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="14" fill="#1B1714">S</text>
              </svg>
            </div>
            <div className="flex justify-between items-center font-body text-[13px]">
              <span className="text-muted">Shift the curves · find the new price</span>
              <span className="text-brand font-medium inline-flex items-center gap-1.5">Try it →</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
