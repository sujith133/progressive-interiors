import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

/**
 * CustomCursor — premium gold dot that follows the cursor.
 * Scales up on hover over interactive elements.
 * Hidden on touch devices.
 */
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const handleHoverEnter = () => {
      gsap.to(cursor, { scale: 2.5, opacity: 0.6, duration: 0.3 })
      gsap.to(follower, { scale: 1.8, opacity: 0.15, duration: 0.3 })
    }

    const handleHoverLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 })
      gsap.to(follower, { scale: 1, opacity: 0.3, duration: 0.3 })
    }

    document.addEventListener('mousemove', moveCursor)

    // Observe DOM for interactive elements
    const addListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .cursor-hover'
      )
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverEnter)
        el.addEventListener('mouseleave', handleHoverLeave)
      })
      return interactives
    }

    const interactives = addListeners()

    // Re-scan after route changes
    const observer = new MutationObserver(() => {
      addListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })
      observer.disconnect()
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: -5,
          left: -5,
          width: 10,
          height: 10,
          background: '#F8D984',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        className="custom-cursor-follower"
        style={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          border: '1px solid #F8D984',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.3,
          willChange: 'transform',
        }}
      />
    </>
  )
}

export default CustomCursor
