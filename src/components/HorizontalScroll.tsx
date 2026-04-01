import { useRef, useEffect, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HorizontalScrollProps {
  children: ReactNode
  className?: string
}

/**
 * HorizontalScroll — pins its container and converts vertical scroll to horizontal.
 * Wrap portfolio cards or gallery items inside.
 */
const HorizontalScroll = ({ children, className = '' }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    // Small delay so children render and have dimensions
    const timer = setTimeout(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth

      if (scrollWidth <= 0) return

      const tl = gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
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
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex items-stretch will-change-transform h-screen">
        {children}
      </div>
    </div>
  )
}

export default HorizontalScroll
