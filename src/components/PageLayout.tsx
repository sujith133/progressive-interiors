import { useEffect, type ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { refreshScrollTrigger } from '../hooks/useGSAP'

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  useEffect(() => {
    // Refresh GSAP ScrollTrigger after page content renders
    const timer = setTimeout(() => refreshScrollTrigger(), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageLayout
