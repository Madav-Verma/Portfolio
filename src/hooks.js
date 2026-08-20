import { useEffect, useRef, useState } from 'react'

/* Subtle magnetic pull on hover — buttons drift toward the cursor */
export function useMagnetic(strength = 14) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const d = Math.min(1, Math.hypot(dx, dy) / (r.width * 0.6))
      el.style.transform = `translate(${(dx * strength * 0.016 * d).toFixed(1)}px, ${(dy * strength * 0.016 * d).toFixed(1)}px)`
    }
    const leave = () => {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [strength])
  return ref
}

/* Fade/slide content in when it enters the viewport */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            io.unobserve(e.target)
          }
        })
      },
      { threshold }
    )
    el.querySelectorAll('.reveal').forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [threshold])
  return ref
}

/* Typing effect for rotating roles */
export function useTyped(words, { typeMs = 65, deleteMs = 32, holdMs = 1600 } = {}) {
  const [text, setText] = useState('')
  useEffect(() => {
    let word = 0
    let char = 0
    let deleting = false
    let timer
    const tick = () => {
      const current = words[word % words.length]
      if (!deleting) {
        char += 1
        setText(current.slice(0, char))
        if (char === current.length) {
          deleting = true
          timer = setTimeout(tick, holdMs)
          return
        }
        timer = setTimeout(tick, typeMs)
      } else {
        char -= 1
        setText(current.slice(0, char))
        if (char === 0) {
          deleting = false
          word += 1
          timer = setTimeout(tick, 350)
          return
        }
        timer = setTimeout(tick, deleteMs)
      }
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [words, typeMs, deleteMs, holdMs])
  return text
}

/* Animated counter for hero stats */
export function useCounter(target, { decimals = 0, duration = 1400, delay = 0 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        el.classList.add('revealed')
        const start = performance.now()
        const step = (now) => {
          const elapsed = now - start
          if (elapsed < delay) {
            // hold at zero until the stagger delay expires
            requestAnimationFrame(step)
            return
          }
          const p = Math.min((elapsed - delay) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(parseFloat((target * eased).toFixed(decimals)))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, decimals, duration, delay])
  return [ref, value]
}

/* Subtle 3D tilt for cards */
export function useTilt(max = 7) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-4px)`
    }
    const leave = () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)'
    }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [max])
  return ref
}

/* Page scroll progress (0..1) */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? h.scrollTop / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

/* Active section id for scrollspy nav highlighting */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0] ?? '')
  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= probe) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

/* Track whether the page was scrolled past a threshold */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}