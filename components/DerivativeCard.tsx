'use client'
import { useEffect, useRef } from 'react'

const W = 320, H = 200
const OX = 30, OY = 178
const UX = 44, UY = 32
const XMIN = 0, XMAX = 6

const f  = (x: number) => 0.25 * (x - 3) ** 2 + 1
const df = (x: number) => 0.5  * (x - 3)
const sx = (x: number) => OX + x * UX
const sy = (y: number) => OY - y * UY

function curvePath() {
  const pts: string[] = []
  for (let i = 0; i <= 80; i++) {
    const x = XMIN + (XMAX - XMIN) * i / 80
    pts.push(`${sx(x).toFixed(1)},${sy(f(x)).toFixed(1)}`)
  }
  return 'M ' + pts.join(' L ')
}

export default function DerivativeCard() {
  const svgRef     = useRef<SVGSVGElement>(null)
  const pointRef   = useRef<SVGCircleElement>(null)
  const haloRef    = useRef<SVGCircleElement>(null)
  const tangentRef = useRef<SVGLineElement>(null)
  const xRef       = useRef(1.5)
  const dragging   = useRef(false)
  const lastAct    = useRef(0)
  const t0         = useRef(0)

  function render() {
    const x = xRef.current
    const y = f(x), m = df(x)
    const px = sx(x), py = sy(y)
    pointRef.current?.setAttribute('cx', String(px))
    pointRef.current?.setAttribute('cy', String(py))
    haloRef.current?.setAttribute('cx', String(px))
    haloRef.current?.setAttribute('cy', String(py))
    const L = 1.3
    tangentRef.current?.setAttribute('x1', String(sx(x - L)))
    tangentRef.current?.setAttribute('y1', String(sy(y - m * L)))
    tangentRef.current?.setAttribute('x2', String(sx(x + L)))
    tangentRef.current?.setAttribute('y2', String(sy(y + m * L)))
  }

  useEffect(() => {
    render()
    const svg = svgRef.current!
    t0.current = performance.now()

    function getX(e: PointerEvent) {
      const r = svg.getBoundingClientRect()
      const px = ((e.clientX - r.left) / r.width) * W
      return Math.max(XMIN + 0.1, Math.min(XMAX - 0.1, (px - OX) / UX))
    }

    svg.addEventListener('pointerdown', e => {
      dragging.current = true; lastAct.current = Date.now()
      svg.setPointerCapture(e.pointerId)
      xRef.current = getX(e); render()
    })
    svg.addEventListener('pointermove', e => {
      if (!dragging.current) return
      lastAct.current = Date.now(); xRef.current = getX(e); render()
    })
    const end = () => { dragging.current = false }
    svg.addEventListener('pointerup', end)
    svg.addEventListener('pointercancel', end)

    function loop(t: number) {
      if (Date.now() - lastAct.current > 1500) {
        const dt = (t - t0.current) / 1000
        xRef.current = 3 + 2.2 * Math.sin(dt * 0.55)
        render()
      }
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      className="block w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
      style={{ touchAction: 'none' }}
    >
      <rect width={W} height={H} fill="#EAE3D1" />
      <line x1={OX} y1={H - 8} x2={OX} y2={8} stroke="#B6AC9A" strokeWidth="1" />
      <line x1={8} y1={OY} x2={W - 8} y2={OY} stroke="#B6AC9A" strokeWidth="1" />
      <path d={curvePath()} fill="none" stroke="#1B1714" strokeWidth="2" />
      <line ref={tangentRef} stroke="#C13F25" strokeWidth="2" strokeLinecap="round" />
      <circle ref={haloRef} r="14" fill="rgba(193,63,37,0.15)" />
      <circle ref={pointRef} r="6" fill="#C13F25" stroke="#fff" strokeWidth="1.5" />
    </svg>
  )
}
