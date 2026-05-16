'use client'

import { useEffect, useRef } from 'react'

const ORIGIN_X = 100
const ORIGIN_Y = 350
const UX = 100  // pixels per math unit x
const UY = 60   // pixels per math unit y
const X_MIN = 0
const X_MAX = 6

const f = (x: number) => 0.25 * (x - 3) * (x - 3) + 1
const df = (x: number) => 0.5 * (x - 3)

const cx = (x: number) => ORIGIN_X + x * UX
const cy = (y: number) => ORIGIN_Y - y * UY

function buildCurvePath(): string {
  const pts: string[] = []
  for (let i = 0; i <= 120; i++) {
    const x = X_MIN + (X_MAX - X_MIN) * (i / 120)
    pts.push(`${cx(x).toFixed(1)},${cy(f(x)).toFixed(1)}`)
  }
  return 'M ' + pts.join(' L ')
}

function buildGridHtml(): string {
  let s = ''
  for (let x = 1; x <= X_MAX; x++) {
    s += `<line x1="${cx(x)}" y1="0" x2="${cx(x)}" y2="450" stroke="rgba(239,231,214,0.06)" stroke-width="1"/>`
  }
  for (let y = 1; y <= 5; y++) {
    s += `<line x1="0" y1="${cy(y)}" x2="800" y2="${cy(y)}" stroke="rgba(239,231,214,0.06)" stroke-width="1"/>`
  }
  return s
}

export default function DerivativeDemo() {
  const stageRef = useRef<HTMLDivElement>(null)
  const tangentRef = useRef<SVGLineElement>(null)
  const dropRef = useRef<SVGLineElement>(null)
  const pointGroupRef = useRef<SVGGElement>(null)
  const haloRef = useRef<SVGCircleElement>(null)
  const gridRef = useRef<SVGGElement>(null)
  const curveRef = useRef<SVGPathElement>(null)
  const rXRef = useRef<HTMLDivElement>(null)
  const rSlopeRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)

  // Mutable state kept in refs (no re-renders)
  const pointXRef = useRef(1.4)
  const draggingRef = useRef(false)
  const lastInteractRef = useRef(Date.now())
  const t0Ref = useRef(0)

  function render() {
    const x = pointXRef.current
    const y = f(x)
    const m = df(x)
    const px = cx(x)
    const py = cy(y)

    if (pointGroupRef.current) {
      pointGroupRef.current.setAttribute('transform', `translate(${px}, ${py})`)
    }

    // tangent line extending L math-units in each direction
    const L = 1.6
    const x1 = x - L, y1 = y - m * L
    const x2 = x + L, y2 = y + m * L
    if (tangentRef.current) {
      tangentRef.current.setAttribute('x1', String(cx(x1)))
      tangentRef.current.setAttribute('y1', String(cy(y1)))
      tangentRef.current.setAttribute('x2', String(cx(x2)))
      tangentRef.current.setAttribute('y2', String(cy(y2)))
    }

    // vertical drop
    if (dropRef.current) {
      dropRef.current.setAttribute('x1', String(px))
      dropRef.current.setAttribute('y1', String(py))
      dropRef.current.setAttribute('x2', String(px))
      dropRef.current.setAttribute('y2', String(ORIGIN_Y))
    }

    if (rXRef.current) {
      rXRef.current.textContent = x.toFixed(2)
    }
    if (rSlopeRef.current) {
      rSlopeRef.current.textContent = (m >= 0 ? '+' : '') + m.toFixed(2)
      rSlopeRef.current.style.color = m < 0 ? '#E88566' : '#C13F25'
    }
  }

  function pointerToMathX(ev: PointerEvent): number {
    const stage = stageRef.current
    if (!stage) return pointXRef.current
    const rect = stage.getBoundingClientRect()
    const px = ((ev.clientX - rect.left) / rect.width) * 800
    let mx = (px - ORIGIN_X) / UX
    mx = Math.max(X_MIN + 0.05, Math.min(X_MAX - 0.05, mx))
    return mx
  }

  useEffect(() => {
    // Build curve and grid
    if (curveRef.current) {
      curveRef.current.setAttribute('d', buildCurvePath())
    }
    if (gridRef.current) {
      gridRef.current.innerHTML = buildGridHtml()
    }

    render()

    const stage = stageRef.current
    if (!stage) return

    function startDrag(ev: PointerEvent) {
      draggingRef.current = true
      stage!.setPointerCapture(ev.pointerId)
      if (haloRef.current) haloRef.current.setAttribute('r', '28')
      if (hintRef.current) hintRef.current.classList.add('opacity-0')
      lastInteractRef.current = Date.now()
      pointXRef.current = pointerToMathX(ev)
      render()
    }

    function moveDrag(ev: PointerEvent) {
      if (!draggingRef.current) return
      lastInteractRef.current = Date.now()
      pointXRef.current = pointerToMathX(ev)
      render()
    }

    function endDrag() {
      draggingRef.current = false
      if (haloRef.current) haloRef.current.setAttribute('r', '22')
    }

    stage.addEventListener('pointerdown', startDrag)
    stage.addEventListener('pointermove', moveDrag)
    stage.addEventListener('pointerup', endDrag)
    stage.addEventListener('pointercancel', endDrag)

    // Auto-sweep when idle > 1800ms
    t0Ref.current = performance.now()

    function autoLoop(t: number) {
      if (Date.now() - lastInteractRef.current >= 1800) {
        const dt = (t - t0Ref.current) / 1000
        pointXRef.current = 3 + 2.2 * Math.sin(dt * 0.6)
        render()
      }
      requestAnimationFrame(autoLoop)
    }
    requestAnimationFrame(autoLoop)

    return () => {
      stage.removeEventListener('pointerdown', startDrag)
      stage.removeEventListener('pointermove', moveDrag)
      stage.removeEventListener('pointerup', endDrag)
      stage.removeEventListener('pointercancel', endDrag)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="bg-parchment-card rounded-3xl p-6 lg:p-8 pb-6 lg:pb-7 text-[#EFE7D6] relative overflow-hidden"
      style={{
        boxShadow:
          '0 40px 80px -40px rgba(28,24,21,0.5), 0 2px 0 rgba(255,255,255,0.04) inset',
      }}
      aria-label="Live derivative demo"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(193,63,37,0.18), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04), transparent 50%)',
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-end justify-between gap-5 mb-6 flex-wrap">
        <div
          className="font-display italic text-[clamp(18px,2.4vw,26px)] leading-snug text-[#EFE7D6] max-w-[400px] tracking-[-0.2px]"
        >
          <span className="not-italic font-code text-[12px] tracking-[1.6px] uppercase text-[#8A8071] block mb-[10px]">
            You typed
          </span>
          &ldquo;I don&rsquo;t understand what a derivative{' '}
          <em className="italic text-brand">means</em>.&rdquo;
        </div>

        <div className="flex gap-7 items-end">
          <div className="text-right">
            <div className="font-code text-[10px] tracking-[1.4px] uppercase text-[#7A6F5E] mb-1">
              x
            </div>
            <div
              ref={rXRef}
              className="font-display text-[clamp(26px,3.5vw,36px)] leading-none text-[#EFE7D6] tracking-[-0.5px] tabular-nums"
            >
              0.00
            </div>
          </div>
          <div className="text-right">
            <div className="font-code text-[10px] tracking-[1.4px] uppercase text-[#7A6F5E] mb-1">
              Slope · f&prime;(x)
            </div>
            <div
              ref={rSlopeRef}
              className="font-display text-[clamp(26px,3.5vw,36px)] leading-none text-brand tracking-[-0.5px] tabular-nums"
            >
              0.00
            </div>
          </div>
        </div>
      </div>

      {/* Stage */}
      <div
        ref={stageRef}
        className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden aspect-video touch-none cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'none' }}
      >
        <svg
          viewBox="0 0 800 450"
          preserveAspectRatio="none"
          className="block w-full h-full"
        >
          {/* grid */}
          <g ref={gridRef} />

          {/* axes */}
          <line
            x1="0" y1="350" x2="800" y2="350"
            stroke="rgba(239,231,214,0.25)" strokeWidth="1"
          />
          <line
            x1="100" y1="0" x2="100" y2="450"
            stroke="rgba(239,231,214,0.25)" strokeWidth="1"
          />

          {/* curve */}
          <path
            ref={curveRef}
            d=""
            fill="none"
            stroke="#EFE7D6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />

          {/* tangent */}
          <line
            ref={tangentRef}
            x1="0" y1="0" x2="0" y2="0"
            stroke="#C13F25"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* vertical drop */}
          <line
            ref={dropRef}
            x1="0" y1="0" x2="0" y2="0"
            stroke="rgba(239,231,214,0.3)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />

          {/* draggable point */}
          <g ref={pointGroupRef}>
            <circle ref={haloRef} r="22" fill="rgba(193,63,37,0.18)" />
            <circle r="9" fill="#C13F25" stroke="#F3EBDA" strokeWidth="2.5" />
          </g>

          {/* function label */}
          <text
            x="780"
            y="30"
            textAnchor="end"
            fontFamily="Instrument Serif, serif"
            fontStyle="italic"
            fontSize="22"
            fill="#EFE7D6"
            opacity="0.7"
          >
            f(x) = ¼(x − 3)² + 1
          </text>
        </svg>

        {/* Hint */}
        <div
          ref={hintRef}
          className="absolute left-[18px] bottom-[14px] font-body text-[12px] text-[rgba(239,231,214,0.55)] inline-flex items-center gap-2 pointer-events-none transition-opacity duration-[400ms]"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse-ring" />
          Drag the point along the curve
        </div>
      </div>
    </div>
  )
}
