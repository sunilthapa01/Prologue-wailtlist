'use client'
import { useEffect, useRef } from 'react'

const PX = 160, PY = 22, ROD = 148

export default function PendulumCard() {
  const svgRef    = useRef<SVGSVGElement>(null)
  const rodRef    = useRef<SVGLineElement>(null)
  const bobRef    = useRef<SVGCircleElement>(null)
  const fillRef   = useRef<SVGRectElement>(null)
  const trailRef  = useRef<SVGPathElement>(null)
  const dragging  = useRef(false)
  const theta     = useRef(Math.PI / 3.5)
  const omega     = useRef(0)
  const maxE      = useRef(Math.abs(Math.PI / 3.5))
  const trail     = useRef<[number, number][]>([])

  function bobPos(angle: number) {
    return { x: PX + ROD * Math.sin(angle), y: PY + ROD * Math.cos(angle) }
  }

  function render() {
    const { x, y } = bobPos(theta.current)
    rodRef.current?.setAttribute('x2', String(x))
    rodRef.current?.setAttribute('y2', String(y))
    bobRef.current?.setAttribute('cx', String(x))
    bobRef.current?.setAttribute('cy', String(y))

    trail.current.push([x, y])
    if (trail.current.length > 40) trail.current.shift()
    if (trailRef.current && trail.current.length > 1) {
      const d = trail.current.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')
      trailRef.current.setAttribute('d', d)
    }

    const energy = Math.min(1, (Math.abs(theta.current) + Math.abs(omega.current) * 0.18) / maxE.current)
    if (fillRef.current) fillRef.current.setAttribute('width', String(Math.max(0, energy * 64)))
  }

  useEffect(() => {
    const svg = svgRef.current!
    let running = true
    let last = performance.now()
    const G = 3.2, DAMP = 0.018

    function loop(t: number) {
      if (!running) return
      if (!dragging.current) {
        const dt = Math.min((t - last) / 1000, 0.05)
        omega.current += (-G * Math.sin(theta.current) - 2 * DAMP * omega.current) * dt
        theta.current += omega.current * dt
      }
      last = t
      render()
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)

    function getAngle(e: PointerEvent) {
      const r = svg.getBoundingClientRect()
      const dx = ((e.clientX - r.left) / r.width) * 320 - PX
      const dy = ((e.clientY - r.top) / r.height) * 200 - PY
      return Math.atan2(dx, dy)
    }

    svg.addEventListener('pointerdown', e => {
      dragging.current = true
      omega.current = 0
      trail.current = []
      svg.setPointerCapture(e.pointerId)
      theta.current = getAngle(e)
      maxE.current = Math.max(Math.abs(theta.current), 0.3)
    })
    svg.addEventListener('pointermove', e => {
      if (!dragging.current) return
      theta.current = getAngle(e)
      maxE.current = Math.max(Math.abs(theta.current), maxE.current, 0.3)
    })
    const end = () => { dragging.current = false }
    svg.addEventListener('pointerup', end)
    svg.addEventListener('pointercancel', end)

    return () => { running = false }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 200"
      className="block w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
      style={{ touchAction: 'none' }}
    >
      <rect width="320" height="200" fill="#EAE3D1" />
      <line x1={PX - 70} y1={PY + 145} x2={PX + 70} y2={PY + 145} stroke="#B6AC9A" strokeWidth="1" strokeDasharray="3 4" />
      <path ref={trailRef} fill="none" stroke="#C13F25" strokeWidth="1.2" strokeOpacity="0.35" strokeLinecap="round" />
      <line ref={rodRef} x1={PX} y1={PY} x2={PX} y2={PY + ROD} stroke="#1B1714" strokeWidth="2" />
      <circle cx={PX} cy={PY} r="3" fill="#1B1714" />
      <circle ref={bobRef} cx={PX} cy={PY + ROD} r="14" fill="#C13F25" stroke="#1B1714" strokeWidth="2" />
      {/* energy bar */}
      <text x="12" y="193" fontFamily="monospace" fontSize="7.5" fill="#7B7264" letterSpacing="1">ENERGY</text>
      <rect x="56" y="185" width="64" height="6" rx="3" fill="#D4CCBA" />
      <rect ref={fillRef} x="56" y="185" width="40" height="6" rx="3" fill="#C13F25" />
    </svg>
  )
}
