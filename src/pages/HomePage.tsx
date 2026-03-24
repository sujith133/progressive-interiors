import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ────────────────────────────────────────────
   Reusable animation variants
   ──────────────────────────────────────────── */

// Typed cubic-bezier easing to satisfy framer-motion's Easing type
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

// Fade-up pop-out — the primary scroll reveal
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

// Fade from left
const fadeLeftVariant = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

// Fade from right
const fadeRightVariant = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

// Scale pop
const scalePopVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

// Staggered container
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

// Staggered child
const staggerChild = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
}

/* ────────────────────────────────────────────
   Helper hook: section-level in-view trigger
   ──────────────────────────────────────────── */
function useSectionInView(amount = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })
  return { ref, inView }
}

/* ════════════════════════════════════════════
   HomePage Component
   ════════════════════════════════════════════ */
// Nav link → section id mapping
const NAV_LINKS: { label: string; id: string }[] = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Section refs
  const hero = useSectionInView(0.15)
  const stats = useSectionInView(0.3)
  const services = useSectionInView(0.15)
  const brand = useSectionInView(0.15)
  const portfolio = useSectionInView(0.15)
  const process = useSectionInView(0.15)
  const testimonials = useSectionInView(0.15)
  const cta = useSectionInView(0.25)
  const footer = useSectionInView(0.1)

  return (
    <>
      {/* ===== STICKY HEADER ===== */}
      <motion.header
        className="sticky top-0 z-50 bg-warm-cream/90 backdrop-blur-md border-b border-forest-green/5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            className="font-serif text-3xl font-medium tracking-tighter"
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PI
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10 text-sm tracking-wide font-medium uppercase">
            {NAV_LINKS.map(
              (link, i) => (
                <motion.a
                  key={link.label}
                  className="nav-link cursor-pointer"
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              )
            )}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center space-x-4 lg:space-x-0">
            <motion.a
              className="bg-forest-green text-warm-cream px-6 py-2.5 lg:px-8 lg:py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => scrollToSection('contact')}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.a>
            {/* Hamburger — visible on tablet/mobile only */}
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

        {/* Mobile / Tablet slide-down menu */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-warm-cream border-t border-forest-green/5 px-6 py-6 space-y-4 text-sm tracking-wide font-medium uppercase"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {NAV_LINKS.map(
              (link, i) => (
                <motion.a
                  key={link.label}
                  className="block py-2 nav-link cursor-pointer"
                  onClick={() => { scrollToSection(link.id); setMobileMenuOpen(false); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </motion.header>

      <main>
        {/* ===== HERO SECTION ===== */}
        <section
          id="hero"
          className="pt-16 lg:pt-20 pb-section lg:pb-desktop-section px-6 lg:px-12 relative overflow-hidden"
          data-purpose="hero"
          ref={hero.ref}
        >
          <div className="container mx-auto">
            {/* Desktop layout */}
            <div className="hidden lg:grid grid-cols-12 gap-12 items-end">
              <motion.div
                className="col-span-5 mb-0"
                variants={fadeLeftVariant}
                initial="hidden"
                animate={hero.inView ? 'visible' : 'hidden'}
              >
                <h1 className="font-serif text-8xl leading-[1.1] mb-8">
                  Designing Spaces That Reflect You
                </h1>
                <motion.a
                  className="ghost-button inline-block px-10 py-4 text-sm uppercase tracking-widest font-medium"
                  href="#"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Portfolio
                </motion.a>
              </motion.div>
            </div>

            {/* Desktop hero image — absolute overlay */}
            <motion.div
              className="hidden lg:block absolute top-24 right-0 w-7/12 h-[700px] -z-10"
              variants={fadeRightVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              <img
                alt="Luxury Living Room"
                className="w-full h-full object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz_a9Gh5C6UV8k2PNqbQ4ri6KtTf4c1ge7W7yg315l4VjEN78AHvaW5t1G4X1KQe4-UmVfanqRwVVSyT1XtMrPnjOH3mMB9r2KHW6ifHADI2BLdYYjq56X5dCDBe7s3GUqDPcKX7XSaWjnqQBtX7fobFfwVgzVHB3OhXo0Lh7JlRu_hezIXVYlQk1re8bSmrqNvTsPMARM7MuX_krt_tVieUIgZi4KTFTTYJUxAF4qpB6G4AGoovjm6LGCQy6abTTF3E6aIL8-o_PY"
              />
            </motion.div>

            {/* Tablet / Mobile layout — centered stacked */}
            <div className="lg:hidden text-center">
              <motion.h1
                className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight mb-8 max-w-4xl mx-auto"
                variants={fadeUpVariant}
                initial="hidden"
                animate={hero.inView ? 'visible' : 'hidden'}
              >
                Designing Spaces That Reflect You
              </motion.h1>
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
                variants={fadeUpVariant}
                initial="hidden"
                animate={hero.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
              >
                <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-sm">
                  Bespoke interiors crafted with a focus on tranquility, functionality, and timeless
                  elegance.
                </p>
                <motion.a
                  className="ghost-button inline-block px-8 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-medium"
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Portfolio
                </motion.a>
              </motion.div>
              <motion.div
                className="relative w-full h-[350px] sm:h-[500px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl"
                variants={scalePopVariant}
                initial="hidden"
                animate={hero.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.35 }}
              >
                <img
                  alt="Luxury Living Room"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz_a9Gh5C6UV8k2PNqbQ4ri6KtTf4c1ge7W7yg315l4VjEN78AHvaW5t1G4X1KQe4-UmVfanqRwVVSyT1XtMrPnjOH3mMB9r2KHW6ifHADI2BLdYYjq56X5dCDBe7s3GUqDPcKX7XSaWjnqQBtX7fobFfwVgzVHB3OhXo0Lh7JlRu_hezIXVYlQk1re8bSmrqNvTsPMARM7MuX_krt_tVieUIgZi4KTFTTYJUxAF4qpB6G4AGoovjm6LGCQy6abTTF3E6aIL8-o_PY"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== STATS STRIP ===== */}
        <section
          id="stats"
          className="py-10 lg:py-12 bg-warm-cream border-y border-forest-green/10"
          data-purpose="stats"
          ref={stats.ref}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={stats.inView ? 'visible' : 'hidden'}
            >
              {[
                { value: '15', label: 'Experience', longLabel: 'Years of Experience' },
                { value: '450+', label: 'Projects', longLabel: 'Projects Completed' },
                { value: '99%', label: 'Satisfaction', longLabel: 'Client Satisfaction' },
                { value: '12', label: 'Team', longLabel: 'Team Members' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center border-r border-forest-green/10 last:border-r-0 px-2"
                  variants={staggerChild}
                >
                  <motion.span
                    className="block font-serif text-3xl sm:text-4xl lg:text-5xl mb-1 lg:mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={stats.inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-60">
                    <span className="hidden sm:inline">{stat.longLabel.replace(stat.label, '').trim()} </span>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== OUR SERVICES ===== */}
        <section
          id="services"
          className="py-section lg:py-desktop-section px-6 lg:px-12"
          data-purpose="services-grid"
          ref={services.ref}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                className="max-w-2xl lg:max-w-md"
                variants={fadeLeftVariant}
                initial="hidden"
                animate={services.inView ? 'visible' : 'hidden'}
              >
                <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-3 lg:mb-4 block">
                  Our Services
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 lg:mb-8 leading-tight">
                  Elevating Residential Living
                </h2>
                <p className="text-base lg:text-lg opacity-80 mb-8 lg:mb-10 leading-relaxed">
                  From conceptual design to final curation, we manage every detail to ensure your
                  home is a masterpiece of comfort and style.
                </p>
                <motion.a
                  className="bg-forest-green text-warm-cream px-10 lg:px-12 py-4 lg:py-5 rounded-full inline-block text-sm font-medium hover:opacity-90 transition-opacity"
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </motion.div>

              {/* Image Grid */}
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-12 gap-4 h-[400px] md:h-[500px] lg:h-[600px]"
                variants={staggerContainer}
                initial="hidden"
                animate={services.inView ? 'visible' : 'hidden'}
              >
                <motion.div
                  className="col-span-1 lg:col-span-7 h-full overflow-hidden"
                  variants={staggerChild}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt="Service 1"
                    className="w-full h-full object-cover rounded-lg lg:rounded-none"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw1nfGqRKdfk7JzBY1H2fd2RjyBl4gKjgdCNeQU9LAn7OcbsM4Tr4Mc0pyhVQ1zj851izm7ar00EUyXXnrrvBrTbZ-XoTOHUj5TwQP4wJCLyy3nqjyku_Xzl8LoUOWxC6ktXkUQWwBD4so6NURMhjLhyTCMPh_Rk1Tep9l9hHPkP5NNLiPGEwGWEuoykdfPvTHbdeFK13GsVz7I2OnyoRWYh_12lOwsiTFFL63fyCLXT-GurWaIzJ62vFS3QWU1IXtW4tGKx_-SJhu"
                  />
                </motion.div>
                <div className="col-span-1 lg:col-span-5 grid grid-rows-2 gap-4 h-full">
                  <motion.div
                    className="overflow-hidden"
                    variants={staggerChild}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      alt="Service 2"
                      className="w-full h-full object-cover rounded-lg lg:rounded-none"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC69oaUJmK2Zbp3qTJ5sO56fknt-Fq4IBR0TNcUcFKz6-ZSQZchCgqjm_F2qSZKjaqMI6XCHN-RshkkTHVSxfxgFcYcfzIQgtiReRzINzWXPwQrm209TqCrGtn_tQ2MiBwggH9wMmmljjIjjwKLbE1OIEL6W5X3MtozvdyWzS0D90oINCbWfnRLRfeYNgHgdSliZy81QOWiCm6992Vjmb8uNOChvOLKhpSQEAPB6RVPhC7Tx-xoRxSCrI8_e9y-7aKd8SNNphZ0mnGQ"
                    />
                  </motion.div>
                  <motion.div
                    className="overflow-hidden"
                    variants={staggerChild}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      alt="Service 3"
                      className="w-full h-full object-cover rounded-lg lg:rounded-none"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoyXPPdjvC-r0GkYGNewwkVtpTczqj3WgdiF-69bAoNjVAq36tzijCq5VDliSyUC7Tlr3vnj1TAFyQraW246acGTpCJyq3OHyUAVIeXtfPPXX53vrHRo7ZtNCbkm_qWDeaVqtmaTdPJoyvM6r4zJpkwhf1ErSKECj7cPSzc4qXU1U9fx0zltp5CusQBo5Wo2pU7ans0peiW63WMVXzbLzoet6Q4PpFHA811oe3mJ0RKdPxs-Zaw3CqViYFvc-69HwORbanonbWsDoi"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== BRAND STORY ===== */}
        <section
          id="about"
          className="py-section lg:py-desktop-section bg-forest-green text-warm-cream"
          data-purpose="brand-story"
          ref={brand.ref}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                className="h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full order-1 lg:order-1 overflow-hidden"
                variants={scalePopVariant}
                initial="hidden"
                animate={brand.inView ? 'visible' : 'hidden'}
              >
                <motion.img
                  alt="Studio Space"
                  className="w-full h-full object-cover grayscale brightness-75 rounded-lg lg:rounded-none"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuX2kKjjkBdnohoIcDxf1RQyatS8dxYWwIVagi280NJf-LY9e8dkWJHrlTnuSKgJC1phPZxuEcivbH2JmvIyQ1L1JgRHgEiOnUFIuZMipxwxAu8twTVampwf9RGH0KXDfi69Wqfa2Uh95hJIYjO89zuN_wXQ4pvUgBj8Oh3BfylnoO3fHDEZbKW2_zR9PRi30J9JQiYMMFFv6qrNT16MGempXy8oA0dZNcgGBp4V3OzNgG6NdA1JjLffmsV0zci9eagqAcXk08sUNL"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="order-2 lg:order-2 max-w-3xl lg:px-4"
                variants={fadeRightVariant}
                initial="hidden"
                animate={brand.inView ? 'visible' : 'hidden'}
              >
                <motion.span
                  className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block"
                  variants={fadeUpVariant}
                >
                  Who We Are
                </motion.span>
                <motion.h2
                  className="font-serif text-4xl md:text-5xl mb-8 leading-tight"
                  variants={fadeUpVariant}
                >
                  A Modern Philosophy for Classic Living
                </motion.h2>
                <motion.p
                  className="text-base md:text-lg leading-relaxed mb-6 opacity-90"
                  variants={fadeUpVariant}
                >
                  Founded on the principles of minimalism and warmth, Progressive Interiors believes
                  that your surroundings deeply impact your well-being.
                </motion.p>
                <motion.p
                  className="text-base md:text-lg leading-relaxed opacity-90"
                  variants={fadeUpVariant}
                >
                  We curate high-end finishes and sustainable materials to create environments that
                  feel natural, lived-in, and exceptionally luxurious.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section
          id="projects"
          className="py-section lg:py-desktop-section px-6 lg:px-12"
          data-purpose="portfolio-preview"
          ref={portfolio.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 lg:mb-16 gap-4"
              variants={fadeUpVariant}
              initial="hidden"
              animate={portfolio.inView ? 'visible' : 'hidden'}
            >
              <h2 className="font-serif text-4xl md:text-5xl">Featured Projects</h2>
              <motion.a
                className="nav-link text-xs lg:text-sm uppercase tracking-widest"
                href="#"
                whileHover={{ x: 5 }}
              >
                View All<span className="hidden sm:inline"> Projects</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12"
              variants={staggerContainer}
              initial="hidden"
              animate={portfolio.inView ? 'visible' : 'hidden'}
            >
              {/* Project Card 1 */}
              <motion.div className="group cursor-pointer" variants={staggerChild}>
                <motion.div
                  className="overflow-hidden aspect-video sm:aspect-video lg:aspect-[4/3] mb-4 lg:mb-6 rounded-lg lg:rounded-none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt="Oak & Stone Villa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR2gxmfnVPSgALiiBrVSvXptoAc_xv9rx4zL4mgg0Y1YuU587n_VYoXqZ45yYPP71eeojuLs5mRqWzNnb6AYPPBiHfRZfiPAhQJryyIpCXGpDUeItYBT6ioYg6C0p6Rs8vE4rcyqizonIS6uIA19s3ITj2cyQYeZKwza-xqgqT9AuJtSSIyXCq12FXWTTl8Tj48SjkUFXDxa5zhq3_HwIgpdl1ivelgqlxtlpbH5Ln0YpJ7xDqB-HXwNObEDc6lpIy97rlJJdxHcs4"
                  />
                </motion.div>
                <motion.h3
                  className="font-serif text-2xl lg:text-3xl mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={portfolio.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Oak &amp; Stone Villa
                </motion.h3>
                <motion.p
                  className="text-[10px] lg:text-sm uppercase tracking-widest opacity-60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={portfolio.inView ? { opacity: 0.6, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Full Renovation, 2023
                </motion.p>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div className="group cursor-pointer" variants={staggerChild}>
                <motion.div
                  className="overflow-hidden aspect-video sm:aspect-video lg:aspect-[4/3] mb-4 lg:mb-6 rounded-lg lg:rounded-none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt="Minimalist Penthouse"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEIO20h-Eo5OZU95Qk3_21jV9XzNu99OvBt2xQ5LHq_B_viJ_673IrqZ2qPi3h3HWkEyaoiNCLAPl6weVQJ-NJTQiTRrfJci6sdEAr6C805wRYEBqFgpHjWHfjspfY8AxrFFcNqo9gYUDRgb8SJcYBQ4WWh-v4wviPaqi1GSYBUINob7e3cX2xSq3d-6yLeKBMSeRSUKHKuFUfehYIdtJqgzQXzLj23YFoqSVZflk3-F7Q25k2sSmdJymjJhhW9c1fSlILHt7qkG5V"
                  />
                </motion.div>
                <motion.h3
                  className="font-serif text-2xl lg:text-3xl mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={portfolio.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Minimalist Penthouse
                </motion.h3>
                <motion.p
                  className="text-[10px] lg:text-sm uppercase tracking-widest opacity-60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={portfolio.inView ? { opacity: 0.6, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  Interior Styling, 2024
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section
          id="process"
          className="py-section lg:py-desktop-section bg-warm-cream"
          data-purpose="design-process"
          ref={process.ref}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-center mb-16 lg:mb-24"
              variants={fadeUpVariant}
              initial="hidden"
              animate={process.inView ? 'visible' : 'hidden'}
            >
              The PI Way
            </motion.h2>

            <div className="relative">
              {/* Connector Line — Desktop Only */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-px border-t border-dashed border-forest-green/20 -z-0" />

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-8 lg:gap-12"
                variants={staggerContainer}
                initial="hidden"
                animate={process.inView ? 'visible' : 'hidden'}
              >
                {[
                  { num: '01', title: 'Inquiry', desc: 'Understanding your vision and the spatial possibilities.' },
                  { num: '02', title: 'Concept', desc: 'Moodboards, material selection, and structural layouts.' },
                  { num: '03', title: 'Design', desc: '3D Visualizations and technical drawings for production.' },
                  { num: '04', title: 'Reveal', desc: 'Final styling and the keys to your new sanctuary.' },
                ].map((step) => (
                  <motion.div
                    key={step.num}
                    className="relative z-10 text-center bg-warm-cream px-4"
                    variants={staggerChild}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <motion.div
                      className="w-20 lg:w-24 h-20 lg:h-24 mx-auto bg-soft-sage/30 rounded-full flex items-center justify-center font-serif text-2xl lg:text-3xl mb-6 lg:mb-8"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {step.num}
                    </motion.div>
                    <h4 className="font-serif text-xl lg:text-2xl mb-3 lg:mb-4">{step.title}</h4>
                    <p className="text-sm opacity-70 leading-relaxed max-w-xs mx-auto">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section
          id="testimonials"
          className="py-section lg:py-desktop-section px-6 lg:px-12 overflow-hidden"
          data-purpose="testimonials"
          ref={testimonials.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="testimonial-container gap-6 lg:gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={testimonials.inView ? 'visible' : 'hidden'}
            >
              {[
                {
                  quote:
                    '"The level of detail and the serene atmosphere they created in our beach house is simply unmatched."',
                  name: 'Elena Richardson',
                  location: 'Malibu Residency',
                },
                {
                  quote:
                    '"Working with PI was a dream. They understood my need for minimalism without losing the cozy soul of a home."',
                  name: 'Marcus Chen',
                  location: 'Skyline Apartment',
                },
                {
                  quote:
                    '"Professional, intuitive, and highly talented. Our office feels like a wellness retreat now."',
                  name: 'Sarah Jenkins',
                  location: 'Bloom HQ',
                },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  className="testimonial-card bg-white p-8 md:p-10 lg:p-12 shadow-sm border border-forest-green/5 flex-shrink-0"
                  variants={staggerChild}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="text-yellow-500 mb-6 text-sm lg:text-base"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={testimonials.inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200 }}
                  >
                    ★★★★★
                  </motion.div>
                  <p className="text-base lg:text-lg italic mb-8 lg:mb-10 leading-relaxed opacity-80">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-medium text-sm lg:text-base">{t.name}</p>
                    <p className="text-[10px] lg:text-xs uppercase tracking-widest opacity-50">
                      {t.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section
          className="pb-section lg:pb-desktop-section px-6 lg:px-12"
          data-purpose="cta-banner"
          ref={cta.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="bg-soft-sage/40 rounded-3xl p-12 md:p-20 lg:p-24 text-center"
              variants={scalePopVariant}
              initial="hidden"
              animate={cta.inView ? 'visible' : 'hidden'}
            >
              <motion.h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10"
                variants={fadeUpVariant}
                initial="hidden"
                animate={cta.inView ? 'visible' : 'hidden'}
              >
                Ready to Transform Your Space?
              </motion.h2>
              <motion.div
                className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-6"
                variants={fadeUpVariant}
                initial="hidden"
                animate={cta.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  className="bg-forest-green text-warm-cream px-8 lg:px-12 py-4 lg:py-5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Free Discovery Call
                </motion.a>
                <motion.a
                  className="ghost-button px-8 lg:px-12 py-4 lg:py-5 rounded-full text-sm font-medium w-full sm:w-auto text-center"
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Services
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer
        id="contact"
        className="bg-warm-cream border-t border-forest-green/10 pt-16 lg:pt-24 pb-10 lg:pb-12 px-6 lg:px-12"
        data-purpose="main-footer"
        ref={footer.ref}
      >
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 lg:gap-y-0 mb-16 lg:mb-20"
            variants={staggerContainer}
            initial="hidden"
            animate={footer.inView ? 'visible' : 'hidden'}
          >
            {/* Brand */}
            <motion.div variants={staggerChild}>
              <motion.a
                className="font-serif text-3xl lg:text-4xl font-medium tracking-tighter mb-6 lg:mb-8 block"
                href="/"
                whileHover={{ scale: 1.05 }}
              >
                PI
              </motion.a>
              <p className="opacity-60 text-xs lg:text-sm leading-relaxed max-w-xs">
                Refining the art of living through sustainable, minimalist design. Based in New
                York, serving clients worldwide.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div variants={staggerChild}>
              <h5 className="uppercase tracking-widest text-[10px] lg:text-xs font-bold mb-6 lg:mb-8">
                Navigation
              </h5>
              <ul className="space-y-3 lg:space-y-4 text-xs lg:text-sm opacity-80">
                {['Portfolio', 'Our Process', 'Interior Styling', 'Architectural Design'].map(
                  (item) => (
                    <li key={item}>
                      <motion.a
                        className="hover:opacity-100 transition-opacity"
                        href="#"
                        whileHover={{ x: 4 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={staggerChild}>
              <h5 className="uppercase tracking-widest text-[10px] lg:text-xs font-bold mb-6 lg:mb-8">
                Contact
              </h5>
              <ul className="space-y-3 lg:space-y-4 text-xs lg:text-sm opacity-80">
                <li>hello@progressiveinteriors.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Studio 42, Madison Ave, NYC</li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={staggerChild}>
              <h5 className="uppercase tracking-widest text-[10px] lg:text-xs font-bold mb-6 lg:mb-8">
                Journal
              </h5>
              <p className="text-xs lg:text-sm opacity-60 mb-5 lg:mb-6">
                Receive curated design inspiration monthly.
              </p>
              <form className="flex border-b border-forest-green/20 pb-2">
                <input
                  className="bg-transparent border-none focus:ring-0 text-xs lg:text-sm w-full p-0 placeholder:text-forest-green/40"
                  placeholder="Email Address"
                  type="email"
                />
                <motion.button
                  className="text-[10px] lg:text-xs uppercase font-bold"
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Join
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center pt-10 lg:pt-12 border-t border-forest-green/5 opacity-40 text-[9px] lg:text-[10px] uppercase tracking-[0.2em]"
            variants={fadeUpVariant}
            initial="hidden"
            animate={footer.inView ? 'visible' : 'hidden'}
          >
            <p>© 2024 Progressive Interiors. All rights reserved.</p>
            <div className="flex space-x-6 lg:space-x-8 mt-4 sm:mt-0">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default HomePage
