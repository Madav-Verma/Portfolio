import { useEffect, useRef, useState } from 'react'

/*
 * Complementary custom cursor: a dot + trailing ring with contextual labels.
 * Only renders for fine pointers; disabled under prefers-reduced-motion.
 * Native cursor stays visible — the ring is an accent, not a replacement.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const rafId = useRef(0)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const clearActive = () => {
      if (ringRef.current) ringRef.current.classList.remove('cursor-active')
      if (labelRef.current) {
        labelRef.current.textContent = ''
        labelRef.current.classList.remove('cursor-label-on')
      }
    }

    const onMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]')
      if (!target) return
      const label = target.getAttribute('data-cursor') || ''
      if (ringRef.current) ringRef.current.classList.add('cursor-active')
      if (labelRef.current) {
        labelRef.current.textContent = label
        labelRef.current.classList.toggle('cursor-label-on', !!label)
      }
    }

    /*
     * mouseout fires for EVERY child hop inside an interactive element
     * (e.g. text -> icon inside the same link), which caused the ring to
     * flicker. Only clear when the pointer truly leaves the element —
     * relatedTarget being inside it means we're still hovering it.
     */
    const onOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor]')
      if (!target) return
      // Still inside the same interactive element (child hop) -> keep active
      if (e.relatedTarget && target.contains(e.relatedTarget)) return
      clearActive()
    }

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.16
      ring.current.y += (pos.current.y - ring.current.y) * 0.16
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      rafId.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    // Pointer leaves the viewport or window loses focus -> never leave a stuck ring
    document.documentElement.addEventListener('mouseleave', clearActive)
    window.addEventListener('blur', clearActive)
    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.documentElement.removeEventListener('mouseleave', clearActive)
      window.removeEventListener('blur', clearActive)
      cancelAnimationFrame(rafId.current)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div className="custom-cursor" aria-hidden="true">
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef}>
        <span className="cursor-label" ref={labelRef} />
      </div>
    </div>
  )
}