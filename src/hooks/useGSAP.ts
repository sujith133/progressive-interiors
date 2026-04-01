import { useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ─────────────────────────────────────────────
   useParallax — move element on scroll
   ───────────────────────────────────────────── */
export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tl = gsap.to(el, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [speed])

  return ref
}

/* ─────────────────────────────────────────────
   useScrollReveal — reveal elements on scroll
   ───────────────────────────────────────────── */
export function useScrollReveal(
  options: {
    y?: number
    x?: number
    scale?: number
    rotation?: number
    duration?: number
    delay?: number
    stagger?: number
    childSelector?: string
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y = 60,
      x = 0,
      scale = 1,
      rotation = 0,
      duration = 1,
      delay = 0,
      stagger = 0.1,
      childSelector,
    } = options

    const targets = childSelector ? el.querySelectorAll(childSelector) : el

    gsap.set(targets, { opacity: 0, y, x, scale, rotation })

    const tl = gsap.to(targets, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return ref
}

/* ─────────────────────────────────────────────
   useSplitTextReveal — animate words on scroll
   ───────────────────────────────────────────── */
export function useSplitTextReveal(options: { delay?: number; stagger?: number } = {}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { delay = 0, stagger = 0.04 } = options
    const text = el.textContent || ''
    const words = text.split(' ')

    // Preserve the gradient-text spans
    el.innerHTML = ''
    el.style.overflow = 'hidden'

    const wrapper = document.createElement('span')
    wrapper.style.display = 'inline'

    words.forEach((word, i) => {
      const wordSpan = document.createElement('span')
      wordSpan.style.display = 'inline-block'
      wordSpan.style.overflow = 'hidden'
      wordSpan.style.verticalAlign = 'top'

      const inner = document.createElement('span')
      inner.textContent = word
      inner.style.display = 'inline-block'
      inner.style.willChange = 'transform'
      inner.className = 'split-word'

      wordSpan.appendChild(inner)
      wrapper.appendChild(wordSpan)

      if (i < words.length - 1) {
        const space = document.createTextNode('\u00A0')
        wrapper.appendChild(space)
      }
    })

    el.appendChild(wrapper)

    const splitWords = el.querySelectorAll('.split-word')

    gsap.set(splitWords, { y: '110%', opacity: 0 })

    const tl = gsap.to(splitWords, {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      stagger,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return ref
}

/* ─────────────────────────────────────────────
   useMagneticHover — cursor-tracking pull effect
   ───────────────────────────────────────────── */
export function useMagneticHover(strength = 0.3) {
  const ref = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
      })
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only enable on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      el.addEventListener('mousemove', handleMouseMove)
      el.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return ref
}

/* ─────────────────────────────────────────────
   useCountUp — animate numbers on scroll
   ───────────────────────────────────────────── */
export function useCountUp(end: number, duration = 2) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { value: 0 }

    const tl = gsap.to(obj, {
      value: end,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        // Handle display format
        const val = Math.round(obj.value)
        el.textContent = val.toString()
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [end, duration])

  return ref
}

/* ─────────────────────────────────────────────
   useHorizontalScroll — pinned horizontal gallery
   ───────────────────────────────────────────── */
export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const getScrollWidth = () => track.scrollWidth - window.innerWidth

    const tl = gsap.to(track, {
      x: () => -getScrollWidth(),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${getScrollWidth()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return { containerRef, trackRef }
}

/* ─────────────────────────────────────────────
   useScrollProgress — track scroll progress of element
   ───────────────────────────────────────────── */
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const progress = progressRef.current
    if (!el || !progress) return

    const tl = gsap.to(progress, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: true,
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return { ref, progressRef }
}

/* ─────────────────────────────────────────────
   refreshScrollTrigger — call after page transitions
   ───────────────────────────────────────────── */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh()
}
