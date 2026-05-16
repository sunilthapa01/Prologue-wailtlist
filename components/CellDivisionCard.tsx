'use client'
import { useEffect, useRef } from 'react'

export default function CellDivisionCard() {
  const svgRef    = useRef<SVGSVGElement>(null)
  const cell1Ref  = useRef<SVGEllipseElement>(null)
  const nuc1Ref   = useRef<SVGEllipseElement>(null)
  const cell2Ref  = useRef<SVGEllipseElement>(null)
  const nuc2Ref   = useRef<SVGCircleElement>(null)
  const cell3Ref  = useRef<SVGCircleElement>(null)
  const nuc3Ref   = useRef<SVGCircleElement>(null)
  const pinchRef  = useRef<SVGPathElement>(null)
  const thumbRef  = useRef<SVGCircleElement>(null)
  const scrubRef  = useRef<SVGRectElement>(null)
  const lineRef   = useRef<SVGLineElement>(null)
  const tRef      = useRef(0)
  const dragging  = useRef(false)
  const lastAct   = useRef(0)
  const t0        = useRef(0)

  function render(t: number) {
    // t in [0, 1]: 0=single cell, 0.5=elongating+pinch, 1=two cells
    const ease = (v: number) => v < 0.5 ? 2 * v * v : -1 + (4 - 2 * v) * v

    if (t < 0.5) {
      // Phase 1: cell grows and elongates horizontally
      const p = ease(t * 2)
      const rx = 40 + p * 22   // grows wider
      const ry = 40 - p * 14   // squishes vertically
      cell1Ref.current?.setAttribute('rx', String(rx))
      cell1Ref.current?.setAttribute('ry', String(ry))
      cell1Ref.current?.setAttribute('cx', '160')
      cell1Ref.current?.setAttribute('cy', '95')
      cell1Ref.current?.setAttribute('opacity', '1')

      // nucleus starts splitting
      const nSep = p * 18
      nuc1Ref.current?.setAttribute('cx', String(160 - nSep))
      nuc1Ref.current?.setAttribute('cy', '95')
      nuc1Ref.current?.setAttribute('rx', String(16 + p * 4))
      nuc1Ref.current?.setAttribute('ry', String(16 - p * 4))
      nuc1Ref.current?.setAttribute('opacity', String(1 - p * 0.3))

      // pinch in the middle
      const pinchDepth = p * 18
      const x1 = 160 - rx, x2 = 160 + rx
      const pts = `M${x1},95 Q${160},${95 - pinchDepth} ${x2},95 Q${160},${95 + pinchDepth} ${x1},95 Z`
      if (pinchRef.current) {
        pinchRef.current.setAttribute('d', pts)
        pinchRef.current.setAttribute('opacity', String(p * 0.4))
      }

      // hide two-cell view
      cell2Ref.current?.setAttribute('opacity', '0')
      nuc2Ref.current?.setAttribute('opacity', '0')
      cell3Ref.current?.setAttribute('opacity', '0')
      nuc3Ref.current?.setAttribute('opacity', '0')
      lineRef.current?.setAttribute('opacity', '0')
    } else {
      // Phase 2: two cells separate
      const p = ease((t - 0.5) * 2)
      const sep = p * 52

      cell1Ref.current?.setAttribute('opacity', '0')
      nuc1Ref.current?.setAttribute('opacity', '0')
      pinchRef.current?.setAttribute('opacity', '0')

      cell2Ref.current?.setAttribute('cx', String(160 - sep))
      cell2Ref.current?.setAttribute('cy', '95')
      cell2Ref.current?.setAttribute('rx', String(34 + p * 6))
      cell2Ref.current?.setAttribute('ry', String(34))
      cell2Ref.current?.setAttribute('opacity', '1')

      nuc2Ref.current?.setAttribute('cx', String(160 - sep))
      nuc2Ref.current?.setAttribute('cy', '95')
      nuc2Ref.current?.setAttribute('opacity', '1')

      cell3Ref.current?.setAttribute('cx', String(160 + sep))
      cell3Ref.current?.setAttribute('cy', '95')
      cell3Ref.current?.setAttribute('r', String(34 + p * 6))
      cell3Ref.current?.setAttribute('opacity', '1')

      nuc3Ref.current?.setAttribute('cx', String(160 + sep))
      nuc3Ref.current?.setAttribute('cy', '95')
      nuc3Ref.current?.setAttribute('opacity', '1')

      // dividing line fades
      if (lineRef.current) {
        lineRef.current.setAttribute('x1', String(160))
        lineRef.current.setAttribute('x2', String(160))
        lineRef.current.setAttribute('opacity', String((1 - p) * 0.4))
      }
    }

    // scrubber thumb + fill
    const thumbX = 30 + t * 260
    thumbRef.current?.setAttribute('cx', String(thumbX))
    scrubRef.current?.setAttribute('width', String(Math.max(0, t * 260)))
  }

  useEffect(() => {
    const svg = svgRef.current!
    render(tRef.current)
    t0.current = performance.now()

    function getT(e: PointerEvent) {
      const r = svg.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      return Math.max(0, Math.min(1, (px * 320 - 30) / 260))
    }

    svg.addEventListener('pointerdown', e => {
      dragging.current = true
      lastAct.current = Date.now()
      svg.setPointerCapture(e.pointerId)
      tRef.current = getT(e)
      render(tRef.current)
    })
    svg.addEventListener('pointermove', e => {
      if (!dragging.current) return
      lastAct.current = Date.now()
      tRef.current = getT(e)
      render(tRef.current)
    })
    const end = () => { dragging.current = false }
    svg.addEventListener('pointerup', end)
    svg.addEventListener('pointercancel', end)

    function loop(t: number) {
      if (Date.now() - lastAct.current > 1200) {
        const dt = (t - t0.current) / 1000
        tRef.current = (Math.sin(dt * 0.5) * 0.5 + 0.5)
        render(tRef.current)
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
      className="block w-full h-full cursor-ew-resize touch-none select-none"
      style={{ touchAction: 'none' }}
    >
      <rect width="320" height="200" fill="#EAE3D1" />

      {/* pinch overlay (filled shape at phase boundary) */}
      <path ref={pinchRef} fill="#EAE3D1" opacity="0" />

      {/* phase 1: single elongating cell */}
      <ellipse ref={cell1Ref} rx="40" ry="40" fill="none" stroke="#1B1714" strokeWidth="2" cx="160" cy="95" />
      <ellipse ref={nuc1Ref} rx="16" ry="16" fill="#C13F25" opacity="0.85" cx="160" cy="95" />

      {/* phase 2: two cells */}
      <ellipse ref={cell2Ref} rx="34" ry="34" fill="none" stroke="#1B1714" strokeWidth="2" opacity="0" cx="108" cy="95" />
      <circle ref={nuc2Ref} r="13" fill="#C13F25" opacity="0" cx="108" cy="95" />
      <circle ref={cell3Ref} r="34" fill="none" stroke="#1B1714" strokeWidth="2" opacity="0" cx="212" cy="95" />
      <circle ref={nuc3Ref} r="13" fill="#C13F25" opacity="0" cx="212" cy="95" />
      <line ref={lineRef} x1="160" y1="58" x2="160" y2="132" stroke="#1B1714" strokeWidth="1.5" strokeDasharray="3 3" opacity="0" />

      {/* scrubber track */}
      <rect x="30" y="173" width="260" height="4" rx="2" fill="#C8BEA9" />
      <rect ref={scrubRef} x="30" y="173" width="0" height="4" rx="2" fill="#C13F25" />
      <circle ref={thumbRef} cx="30" cy="175" r="7" fill="#C13F25" stroke="#fff" strokeWidth="2" />
      <text x="30" y="193" fontFamily="monospace" fontSize="7.5" fill="#7B7264" letterSpacing="0.8">START</text>
      <text x="245" y="193" fontFamily="monospace" fontSize="7.5" fill="#7B7264" letterSpacing="0.8">DIVIDED</text>
    </svg>
  )
}
