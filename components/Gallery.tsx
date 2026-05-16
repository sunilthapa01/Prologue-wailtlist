import DerivativeCard from './DerivativeCard'
import PendulumCard from './PendulumCard'
import CellDivisionCard from './CellDivisionCard'
import SupplyDemandCard from './SupplyDemandCard'

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
              <DerivativeCard />
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
              <PendulumCard />
            </div>
            <div className="flex justify-between items-center font-body text-[13px]">
              <span className="text-muted">Drag the bob · watch energy drain</span>
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
              <CellDivisionCard />
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
              <SupplyDemandCard />
            </div>
            <div className="flex justify-between items-center font-body text-[13px]">
              <span className="text-muted">Shift the demand · find the new price</span>
              <span className="text-brand font-medium inline-flex items-center gap-1.5">Try it →</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
