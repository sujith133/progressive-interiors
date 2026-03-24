import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <motion.header
      className="sticky top-0 z-50 bg-warm-cream/90 backdrop-blur-md border-b border-forest-green/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/">
            <img src="/logo.png" alt="Progressive Interiors" className="h-12 lg:h-14 w-auto" />
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center space-x-10 text-sm tracking-wide font-medium uppercase">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <Link
                className={`nav-link transition-all ${
                  isActive(link.to)
                    ? 'opacity-100 border-b-2 border-forest-green pb-0.5'
                    : 'opacity-70 hover:opacity-100'
                }`}
                to={link.to}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center space-x-4 lg:space-x-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              className="bg-forest-green text-warm-cream px-6 py-2.5 lg:px-8 lg:py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              to="/contact"
            >
              Book Consultation
            </Link>
          </motion.div>
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-forest-green text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-warm-cream border-t border-forest-green/5 px-6 py-6 space-y-4 text-sm tracking-wide font-medium uppercase"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
            >
              <Link
                className={`block py-2 nav-link transition-all ${
                  isActive(link.to)
                    ? 'opacity-100 pl-2 border-l-2 border-forest-green'
                    : 'opacity-70'
                }`}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
