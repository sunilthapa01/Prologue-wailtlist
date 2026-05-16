'use client'
import { useEffect, useRef } from 'react'

// SVG: 320×200, axes at x=30 (left), y=170 (bottom)
// Quantity: x axis [30, 300], Price: y axis [10, 170]
// Supply (S): low-left to high-right  → fixed
// Demand (D): high-left to low-right → draggable vertically

const AX = 30, AY = 170   // axis origin (bottom-left)
const QW = 270, PH = 160  // axis extents

// S line endpoints (fixed)
const S1 = { x: AX + 20,  y: AY - 20  }
const S2 = { x: AX + QW - 20, y: AY - PH + 20 }

// D line base endpoints (offset = 0)
const D1_BASE = { x: AX + 20,  y: AY - PH + 20 }
const D2_BASE = { x: AX + QW - 20, y: AY - 20  }

function intersect(offset: number) {
  // S: y = S1.y + (S2.y - S1.y) * t, x = S1.x + (S2.x - S1.x) * t
  // D: y = (D1.y + offset) + (D2.y - D1.y) * t
  // same t (both parameterized 0→1 over same x range)
  const sy1 = S1.y, sd = S2.y - S1.y
  const dy1 = D1_BASE.y + offset, dd = D2_BASE.y - D1_BASE.y
  // sy1 + sd*t = dy1 + dd*t  →  t = (dy1 - sy1) / (sd - dd)
  const t = (dy1 - sy1) / (sd - dd)
  const x = S1.x + (S2.x - S1.x) * t
  const y = S1.y + sd * t
  return { x, y, t }
}

export default function SupplyDemandCard() {
  const svgRef    = useRef<SVGSVGElement>(null)
  const dLineRef  = useRef<SVGLineElement>(null)
  const eqRef     = useRef<SVGCircleElement>(null)
  const eqLineXRef = useRef<SVGLineElement>(null)
  const eqLineYRef = useRef<SVGLineElement>(null)
  const dLabelRef = useRef<SVGTextElement>(null)
  const priceRef  = useRef<SVGTextElement>(null)
  const offsetRef = useRef(0)
  const dragging  = useRef(false)
  const dragStartY = useRef(0)
  const dragStartOff = useRef(0)
  const lastAct   = useRef(0)
  const t0        = useRef(0)

  function render(off: number) {
    const clamp = Math.max(-50, Math.min(50, off))
    offsetRef.current = clamp

    const d1y = D1_BASE.y + clamp, d2y = D2_BASE.y + clamp
    dLineRef.current?.setAttribute('y1', String(d1y))
    dLineRef.current?.setAttribute('y2', String(d2y))

    const { x, y } = intersect(clamp)
    eqRef.current?.setAttribute('cx', String(x))
    eqRef.current?.setAttribute('cy', String(y))

    eqLineXRef.current?.setAttribute('x1', String(x))
    eqLineXRef.current?.setAttribute('x2', String(x))
    eqLineXRef.current?.setAttribute('y1', String(y))
    eqLineXRef.current?.setAttribute('y2', String(AY))

    eqLineYRef.current?.setAttribute('x1', String(AX))
    eqLineYRef.current?.setAttribute('x2', String(x))
    eqLineYRef.current?.setAttribute('y1', String(y))
    eqLineYRef.current?.setAttribute('y2', String(y))

    dLabelRef.current?.setAttribute('y', String(d1y + 4))

    // price readout: map y SVG to price 0–100
    const price = Math.round(((AY - y) / PH) * 100)
    if (priceRef.current) priceRef.current.textContent = `P* = ${price}`
  }

  useEffect(() => {
    render(0)
    const svg = svgRef.current!
    t0.current = performance.now()

    svg.addEventListener('pointerdown', e => {
      dragging.current = true
      lastAct.current = Date.now()
      dragStartY.current = e.clientY
      dragStartOff.current = offsetRef.current
      svg.setPointerCapture(e.pointerId)
    })
    svg.addEventListener('pointermove', e => {
      if (!dragging.current) return
      lastAct.current = Date.now()
      const r = svg.getBoundingClientRect()
      const dy = ((e.clientY - dragStartY.current) / r.height) * 200
      render(dragStartOff.current + dy)
    })
    const end = () => { dragging.current = false }
    svg.addEventListener('pointerup', end)
    svg.addEventListener('pointercancel', end)

    function loop(t: number) {
      if (Date.now() - lastAct.current > 1500) {
        const dt = (t - t0.current) / 1000
        render(40 * Math.sin(dt * 0.45))
      }
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 200"
      className="block w-full h-full cursor-ns-resize touch-none select-none"
      style={{ touchAction: 'none' }}
    >
      <rect width="320" height="200" fill="#EAE3D1" />
      {/* axes */}
      <line x1={AX} y1={AY} x2={AX + QW} y2={AY} stroke="#B6AC9A" strokeWidth="1" />
      <line x1={AX} y1={AY} x2={AX} y2={AY - PH} stroke="#B6AC9A" strokeWidth="1" />
      <text x="302" y={AY + 4} fontFamily="monospace" fontSize="9" fill="#B6AC9A">Q</text>
      <text x={AX - 4} y={AY - PH - 4} fontFamily="monospace" fontSize="9" fill="#B6AC9A">P</text>

      {/* equilibrium drop lines */}
      <line ref={eqLineXRef} x1="0" y1="0" x2="0" y2="0" stroke="#1B1714" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <line ref={eqLineYRef} x1="0" y1="0" x2="0" y2="0" stroke="#1B1714" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

      {/* Supply (fixed) */}
      <line x1={S1.x} y1={S1.y} x2={S2.x} y2={S2.y} stroke="#1B1714" strokeWidth="2" />
      <text x={S2.x - 2} y={S2.y - 6} fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="14" fill="#1B1714">S</text>

      {/* Demand (draggable) */}
      <line
        ref={dLineRef}
        x1={D1_BASE.x} y1={D1_BASE.y}
        x2={D2_BASE.x} y2={D2_BASE.y}
        stroke="#C13F25" strokeWidth="2"
      />
      <text
        ref={dLabelRef}
        x={D2_BASE.x - 2}
        y={D2_BASE.y + 4}
        fontFamily="Instrument Serif, serif"
        fontStyle="italic"
        fontSize="14"
        fill="#C13F25"
      >D</text>

      {/* equilibrium point */}
      <circle ref={eqRef} r="7" fill="#1B1714" stroke="#fff" strokeWidth="2" />

      {/* price label */}
      <text ref={priceRef} x="210" y="22" fontFamily="monospace" fontSize="11" fill="#1B1714" fontWeight="600">P* = 50</text>
      <text x="155" y="190" fontFamily="monospace" fontSize="8" fill="#7B7264" letterSpacing="0.5">drag to shift demand ↕</text>
    </svg>
  )
}
