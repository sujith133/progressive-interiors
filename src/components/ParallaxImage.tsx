import { useRef, useEffect, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
  overlay?: ReactNode
  children?: ReactNode
}

/**
 * ParallaxImage — image wrapper with scroll-driven parallax.
 * The image translates Y at a different rate than the container scrolls.
 */
const ParallaxImage = ({
  src,
  alt,
  speed = -0.2,
  className = '',
  overlay,
  children,
}: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image) return

    // Make image larger than container for parallax room
    gsap.set(image, { scale: 1.3 })

    const tl = gsap.to(image, {
      yPercent: speed * 30,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
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

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
      />
      {overlay}
      {children}
    </div>
  )
}

export default ParallaxImage
