import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageLayout from '../components/PageLayout'
import ParallaxImage from '../components/ParallaxImage'
import MagneticButton from '../components/MagneticButton'
import HorizontalScroll from '../components/HorizontalScroll'
import { useScrollReveal, useCountUp } from '../hooks/useGSAP'
import {
  staggerContainer,
  staggerChild,
  glowPulseVariant,
  useSectionInView,
} from '../utils/animations'

import heroLivingRoom from '../assets/images/hero-living-room.webp'
import serviceResidentialDesign from '../assets/images/service-residential-design.webp'
import serviceSpacePlanning from '../assets/images/service-space-planning.webp'
import serviceMaterialCuration from '../assets/images/service-material-curation.webp'
import brandStudioWorkspace from '../assets/images/brand-studio-workspace.png'
import projectOakStoneVilla from '../assets/images/project-oak-stone-villa.webp'
import projectMinimalistPenthouse from '../assets/images/project-minimalist-penthouse.webp'

gsap.registerPlugin(ScrollTrigger)

/* ════════════════════════════════════════════
   HomePage Component — GSAP-powered
   ════════════════════════════════════════════ */
const HomePage = () => {
  // Refs for GSAP animations
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)
  const heroTagRef = useRef<HTMLSpanElement>(null)
  const heroCTARef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const heroOverlayRef = useRef<HTMLDivElement>(null)

  const servicesReveal = useScrollReveal({ y: 80, stagger: 0.15, childSelector: '.service-card' })
  const servicesTextRef = useScrollReveal({ y: 60, stagger: 0.1, childSelector: '.services-text-item' })
  
  // Counter refs
  const counter1 = useCountUp(15, 2.5)
  const counter2 = useCountUp(450, 2.5)
  const counter3 = useCountUp(99, 2.5)
  const counter4 = useCountUp(12, 2.5)

  // Process line
  const processRef = useRef<HTMLDivElement>(null)
  const processLineRef = useRef<HTMLDivElement>(null)
  const processCardsRef = useRef<HTMLDivElement>(null)

  const testimonials = useSectionInView(0.15)
  const cta = useSectionInView(0.25)

  // Hero entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.set([heroTitleRef.current, heroSubRef.current, heroTagRef.current, heroCTARef.current], {
      opacity: 0,
      y: 80,
    })

    if (heroImageRef.current) {
      tl.set(heroImageRef.current, { scale: 1.3, opacity: 0 })
    }
    if (heroOverlayRef.current) {
      tl.set(heroOverlayRef.current, { scaleX: 1 })
    }

    tl.to(heroOverlayRef.current, { scaleX: 0, duration: 1.2, ease: 'power4.inOut' }, 0.3)
      .to(heroImageRef.current, { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }, 0.5)
      .to(heroTagRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
      .to(heroTitleRef.current, { opacity: 1, y: 0, duration: 1 }, 1)
      .to(heroSubRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.3)
      .to(heroCTARef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.5)

    return () => { tl.kill() }
  }, [])

  // Process scrub animation
  useEffect(() => {
    const line = processLineRef.current
    const cards = processCardsRef.current
    const container = processRef.current
    if (!line || !cards || !container) return

    const cardEls = cards.querySelectorAll('.process-step')

    gsap.set(line, { scaleX: 0, transformOrigin: 'left' })
    gsap.set(cardEls, { opacity: 0, y: 50 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1,
      },
    })

    tl.to(line, { scaleX: 1, duration: 1, ease: 'none' })

    cardEls.forEach((card, i) => {
      tl.to(card, { opacity: 1, y: 0, duration: 0.3 }, i * 0.25)
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <PageLayout>
      {/* ===== HERO — Full Viewport Parallax ===== */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 -z-10">
          <div ref={heroImageRef} className="w-full h-full">
            <img
              alt="Luxury Interior"
              className="w-full h-full object-cover"
              src={heroLivingRoom}
            />
          </div>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-deep-blue/50" />
          {/* Wipe-reveal overlay */}
          <div
            ref={heroOverlayRef}
            className="absolute inset-0 bg-deep-blue origin-right"
            style={{ transformOrigin: 'right' }}
          />
        </div>

        {/* Gold accent particles */}
        <div className="absolute top-[20%] left-[8%] gold-particle" />
        <div className="absolute top-[35%] right-[12%] gold-particle" />
        <div className="absolute bottom-[25%] left-[30%] gold-particle" />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-ivory">
          <div className="max-w-4xl">
            <span
              ref={heroTagRef}
              className="text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-6 block"
            >
              Progressive Interiors
            </span>
            <h1
              ref={heroTitleRef}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.05] mb-8"
            >
              Designing Spaces
              <br />
              That <span className="gradient-text-light">Reflect You</span>
            </h1>
            <p
              ref={heroSubRef}
              className="text-base md:text-xl leading-relaxed opacity-80 max-w-lg mb-12"
            >
              Bespoke interiors crafted with a focus on tranquility, functionality, and timeless
              elegance.
            </p>
            <div ref={heroCTARef} className="flex flex-wrap gap-5">
              <MagneticButton
                as="a"
                href="/projects"
                className="bg-warm-gold text-deep-blue px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-semibold tracking-wide hover:shadow-[0_8px_30px_rgba(248,217,132,0.4)] transition-shadow"
              >
                View Our Portfolio
              </MagneticButton>
              <MagneticButton
                as="a"
                href="/contact"
                className="border border-ivory/30 text-ivory px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-medium hover:bg-ivory/10 transition-all"
              >
                Book Consultation
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-ivory/50 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-warm-gold to-transparent" />
        </motion.div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="py-14 lg:py-16 bg-deep-blue text-ivory relative overflow-hidden">
        {/* Subtle gold line top */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8">
            {[
              { ref: counter1, suffix: '', label: 'Years Experience' },
              { ref: counter2, suffix: '+', label: 'Projects Delivered' },
              { ref: counter3, suffix: '%', label: 'Client Satisfaction' },
              { ref: counter4, suffix: '', label: 'Design Experts' },
            ].map((stat, i) => (
              <div key={i} className="text-center border-r border-ivory/8 last:border-r-0 px-2">
                <span className="block font-serif text-4xl sm:text-5xl lg:text-6xl mb-2 text-warm-gold">
                  <span ref={stat.ref}>0</span>{stat.suffix}
                </span>
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] opacity-50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle gold line bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent" />
      </section>

      {/* ===== SECTION DIVIDER ===== */}
      <div className="section-divider" />

      {/* ===== OUR SERVICES — Asymmetric Grid ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header */}
          <div ref={servicesTextRef} className="mb-16 lg:mb-24 max-w-2xl">
            <span className="services-text-item text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              Our Services
            </span>
            <h2 className="services-text-item font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1]">
              Elevating <span className="gradient-text">Residential</span> Living
            </h2>
            <p className="services-text-item text-base lg:text-lg opacity-70 leading-relaxed">
              From conceptual design to final curation, we manage every detail to ensure your home
              is a masterpiece of comfort and style.
            </p>
          </div>

          {/* Asymmetric Image Grid */}
          <div ref={servicesReveal} className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {/* Large card */}
            <div className="service-card md:col-span-7 group cursor-pointer">
              <Link to="/services" className="block">
                <ParallaxImage
                  src={serviceResidentialDesign}
                  alt="Residential Interior Design"
                  className="aspect-[4/3] md:aspect-[4/3] rounded-xl lg:rounded-2xl"
                  speed={-0.15}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 via-deep-blue/20 to-transparent flex items-end p-8 lg:p-12">
                    <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                      <span className="text-warm-gold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-2 block">01</span>
                      <h3 className="font-serif text-2xl lg:text-3xl text-ivory mb-2">Residential Design</h3>
                      <p className="text-ivory/60 text-sm max-w-sm">Complete home transformations from concept to reveal.</p>
                    </div>
                  </div>
                </ParallaxImage>
              </Link>
            </div>

            {/* Stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-5 lg:gap-6">
              <div className="service-card group cursor-pointer flex-1">
                <Link to="/services" className="block h-full">
                  <ParallaxImage
                    src={serviceSpacePlanning}
                    alt="Space Planning & Renovation"
                    className="h-full min-h-[200px] rounded-xl lg:rounded-2xl"
                    speed={-0.1}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 via-deep-blue/20 to-transparent flex items-end p-6 lg:p-8">
                      <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                        <span className="text-warm-gold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-2 block">02</span>
                        <h3 className="font-serif text-xl lg:text-2xl text-ivory">Space Planning</h3>
                      </div>
                    </div>
                  </ParallaxImage>
                </Link>
              </div>
              <div className="service-card group cursor-pointer flex-1">
                <Link to="/services" className="block h-full">
                  <ParallaxImage
                    src={serviceMaterialCuration}
                    alt="Material & Decor Curation"
                    className="h-full min-h-[200px] rounded-xl lg:rounded-2xl"
                    speed={-0.1}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 via-deep-blue/20 to-transparent flex items-end p-6 lg:p-8">
                      <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                        <span className="text-warm-gold text-[10px] lg:text-xs uppercase tracking-[0.2em] mb-2 block">03</span>
                        <h3 className="font-serif text-xl lg:text-2xl text-ivory">Material Curation</h3>
                      </div>
                    </div>
                  </ParallaxImage>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRAND STORY — Parallax ===== */}
      <section className="relative bg-deep-blue text-ivory overflow-hidden">
        {/* Top gold line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[80vh]">
            {/* Text side */}
            <div className="flex items-center py-20 lg:py-32 lg:pr-20">
              <div ref={useScrollReveal({ y: 60, stagger: 0.12, childSelector: '.brand-item' })}>
                <span className="brand-item text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-6 block">
                  Who We Are
                </span>
                <h2 className="brand-item font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-[1.1]">
                  A Modern Philosophy for{' '}
                  <span className="gradient-text-light">Classic Living</span>
                </h2>
                <p className="brand-item text-base md:text-lg leading-relaxed mb-6 opacity-85">
                  Founded on the principles of minimalism and warmth, Progressive Interiors believes
                  that your surroundings deeply impact your well-being.
                </p>
                <p className="brand-item text-base md:text-lg leading-relaxed opacity-85 mb-10">
                  We curate high-end finishes and sustainable materials to create environments that
                  feel natural, lived-in, and exceptionally luxurious.
                </p>
                <div className="brand-item">
                  <MagneticButton
                    as="a"
                    href="/about"
                    className="border border-ivory/30 text-ivory px-10 py-4 rounded-full text-sm font-medium hover:bg-ivory/10 transition-all inline-block"
                  >
                    Discover Our Story →
                  </MagneticButton>
                </div>
              </div>
            </div>

            {/* Image side — edge-to-edge */}
            <div className="relative lg:ml-0 h-[400px] lg:h-auto">
              <ParallaxImage
                src={brandStudioWorkspace}
                alt="Studio Space"
                className="absolute inset-0 h-full"
                speed={-0.15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO — Horizontal Scroll ===== */}
      <section className="bg-ivory">
        {/* Header above pinned section */}
        <div className="container mx-auto px-6 lg:px-12 pt-section lg:pt-desktop-section pb-12 lg:pb-16">
          <div ref={useScrollReveal({ y: 40, stagger: 0.1, childSelector: '.portfolio-header' })} className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="portfolio-header text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
                Our Work
              </span>
              <h2 className="portfolio-header font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <motion.div className="portfolio-header" whileHover={{ x: 5 }}>
              <Link className="nav-link text-xs lg:text-sm uppercase tracking-[0.2em]" to="/projects">
                View All Projects
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Horizontal scroll gallery */}
        <HorizontalScroll>
          {/* Spacer */}
          <div className="flex-shrink-0 w-[5vw]" />

          {/* Card 1 */}
          <div className="horizontal-card flex-shrink-0 px-4 flex items-center">
            <Link to="/projects/ananda-villa" className="group block w-full">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] mb-6 relative">
                <img
                  alt="Ananda Villa"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={projectOakStoneVilla}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-ivory text-sm uppercase tracking-[0.2em]">View Project →</span>
                </div>
              </div>
              <span className="text-gold-dark text-[10px] uppercase tracking-[0.2em] mb-2 block">Residential · Bangalore</span>
              <h3 className="font-serif text-2xl lg:text-3xl">Ananda Villa</h3>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="horizontal-card flex-shrink-0 px-4 flex items-center">
            <Link to="/projects/kala-loft" className="group block w-full">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] mb-6 relative">
                <img
                  alt="Kala Loft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={projectMinimalistPenthouse}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-ivory text-sm uppercase tracking-[0.2em]">View Project →</span>
                </div>
              </div>
              <span className="text-gold-dark text-[10px] uppercase tracking-[0.2em] mb-2 block">Residential · Mumbai</span>
              <h3 className="font-serif text-2xl lg:text-3xl">Kala Loft</h3>
            </Link>
          </div>

          {/* Card 3 — CTA card */}
          <div className="horizontal-card flex-shrink-0 px-4 flex items-center">
            <div className="w-full bg-deep-blue rounded-2xl p-12 lg:p-16 flex flex-col justify-center h-[70%]">
              <span className="text-warm-gold text-[10px] uppercase tracking-[0.3em] mb-4 block">
                Your Space Awaits
              </span>
              <h3 className="font-serif text-3xl lg:text-4xl text-ivory mb-6 leading-[1.15]">
                Let's Create Something <span className="gradient-text-light">Extraordinary</span>
              </h3>
              <MagneticButton
                as="a"
                href="/contact"
                className="bg-warm-gold text-deep-blue px-10 py-4 rounded-full text-sm font-semibold hover:shadow-[0_8px_30px_rgba(248,217,132,0.4)] transition-shadow inline-block w-fit"
              >
                Start Your Project
              </MagneticButton>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-shrink-0 w-[5vw]" />
        </HorizontalScroll>
      </section>

      {/* ===== PROCESS — Scrubbed Timeline ===== */}
      <section className="py-section lg:py-desktop-section bg-ivory" ref={processRef}>
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={useScrollReveal({ y: 50 })} className="text-center mb-16 lg:mb-24">
            <span className="text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              Our Process
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              The <span className="gradient-text">PI Way</span>
            </h2>
          </div>

          <div className="relative">
            {/* Scrubbed connector line — Desktop */}
            <div className="hidden lg:block absolute top-14 left-0 w-full h-[2px] bg-deep-blue/5">
              <div
                ref={processLineRef}
                className="h-full bg-gradient-to-r from-warm-gold via-warm-gold/60 to-warm-gold/20"
                style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}
              />
            </div>

            <div ref={processCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-8 lg:gap-12">
              {[
                { num: '01', title: 'Inquiry', desc: 'Understanding your vision and the spatial possibilities.' },
                { num: '02', title: 'Concept', desc: 'Moodboards, material selection, and structural layouts.' },
                { num: '03', title: 'Design', desc: '3D Visualizations and technical drawings for production.' },
                { num: '04', title: 'Reveal', desc: 'Final styling and the keys to your new sanctuary.' },
              ].map((step) => (
                <div key={step.num} className="process-step relative z-10 text-center bg-ivory px-4">
                  <motion.div
                    className="w-20 lg:w-28 h-20 lg:h-28 mx-auto bg-deep-blue/[0.06] rounded-full flex items-center justify-center font-serif text-2xl lg:text-3xl mb-6 lg:mb-8 text-deep-blue border border-deep-blue/10"
                    variants={glowPulseVariant}
                    whileHover={{ scale: 1.15, rotate: 5, borderColor: 'rgba(248, 217, 132, 0.5)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {step.num}
                  </motion.div>
                  <h4 className="font-serif text-xl lg:text-2xl mb-3 lg:mb-4">{step.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION DIVIDER ===== */}
      <div className="section-divider" />

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="py-section lg:py-desktop-section px-6 lg:px-12 overflow-hidden"
        ref={testimonials.ref}
      >
        <div className="container mx-auto">
          <div ref={useScrollReveal({ y: 50 })} className="text-center mb-14 lg:mb-20">
            <span className="text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              Client Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Words That <span className="gradient-text">Inspire</span> Us
            </h2>
          </div>

          <motion.div
            className="testimonial-container gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={testimonials.inView ? 'visible' : 'hidden'}
          >
            {[
              {
                quote: '"The level of detail and the serene atmosphere they created in our beach house is simply unmatched."',
                name: 'Elena Richardson',
                location: 'Malibu Residency',
              },
              {
                quote: '"Working with PI was a dream. They understood my need for minimalism without losing the cozy soul of a home."',
                name: 'Marcus Chen',
                location: 'Skyline Apartment',
              },
              {
                quote: '"Professional, intuitive, and highly talented. Our office feels like a wellness retreat now."',
                name: 'Sarah Jenkins',
                location: 'Bloom HQ',
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card bg-white p-8 md:p-10 lg:p-14 shadow-sm border border-deep-blue/5 rounded-2xl flex-shrink-0"
                variants={staggerChild}
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px rgba(38, 64, 83, 0.08)',
                  transition: { duration: 0.3 },
                }}
              >
                <div className="text-gold-dark mb-6 text-base lg:text-lg tracking-wider">★★★★★</div>
                <p className="text-base lg:text-lg italic mb-10 leading-relaxed opacity-75 font-serif">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-deep-blue/[0.06] flex items-center justify-center font-serif text-lg text-deep-blue">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm lg:text-base">{t.name}</p>
                    <p className="text-[10px] lg:text-xs uppercase tracking-[0.15em] opacity-45">
                      {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="pb-section lg:pb-desktop-section px-6 lg:px-12" ref={cta.ref}>
        <div className="container mx-auto">
          <motion.div
            className="bg-gradient-to-br from-deep-blue via-deep-blue to-[#1a2f3d] text-ivory rounded-3xl p-12 md:p-20 lg:p-28 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={cta.inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative gold circles */}
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 border border-warm-gold/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-96 h-96 border border-warm-gold/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-warm-gold/[0.04] rounded-full" />

            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6 leading-[1.1]">
                Ready to Transform
                <br />
                Your <span className="gradient-text-light">Space</span>?
              </h2>
              <p className="text-base md:text-lg opacity-70 mb-12 max-w-xl mx-auto leading-relaxed">
                Let's bring your vision to life with a free discovery call.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <MagneticButton
                  as="a"
                  href="/contact"
                  className="bg-warm-gold text-deep-blue px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-semibold hover:shadow-[0_8px_30px_rgba(248,217,132,0.4)] transition-shadow"
                >
                  Book a Free Discovery Call
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="/services"
                  className="border border-ivory/25 text-ivory px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-medium hover:bg-ivory/8 transition-all"
                >
                  Browse Services
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

export default HomePage
