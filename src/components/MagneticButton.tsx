import { useRef, useCallback, useEffect, type ReactNode } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  as?: 'button' | 'a' | 'div'
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

/**
 * MagneticButton — element that pulls toward the cursor on hover.
 * Uses GSAP for buttery-smooth motion with elastic snap-back.
 */
const MagneticButton = ({
  children,
  className = '',
  strength = 0.35,
  as: Component = 'button',
  ...props
}: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current
      const inner = innerRef.current
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

      if (inner) {
        gsap.to(inner, {
          x: x * strength * 0.5,
          y: y * strength * 0.5,
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    const inner = innerRef.current
    if (!el) return

    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1.1, 0.4)' })
    if (inner) {
      gsap.to(inner, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1.1, 0.4)' })
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only on non-touch
    if (!window.matchMedia('(hover: hover)').matches) return

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <Component
      ref={ref as never}
      className={`inline-block will-change-transform ${className}`}
      {...props}
    >
      <span ref={innerRef} className="inline-block will-change-transform">
        {children}
      </span>
    </Component>
  )
}

export default MagneticButton
