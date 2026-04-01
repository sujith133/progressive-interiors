import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageLayout from '../components/PageLayout'
import MagneticButton from '../components/MagneticButton'
import { useScrollReveal } from '../hooks/useGSAP'
import {
  staggerContainer,
  staggerChild,
  useSectionInView,
} from '../utils/animations'
import { projects, categories } from '../data/projects'
import projectsHeroCollage from '../assets/images/projects-hero-collage.webp'

gsap.registerPlugin(ScrollTrigger)

/* ════════════════════════════════════════════
   ProjectsPage Component — GSAP Enhanced
   ════════════════════════════════════════════ */
const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  // GSAP hero
  const heroTagRef = useRef<HTMLSpanElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)
  const heroImageRef = useRef<HTMLImageElement>(null)

  const gridReveal = useScrollReveal({ y: 50, stagger: 0.12, childSelector: '.project-card' })

  const filters = useSectionInView(0.3)
  const cta = useSectionInView(0.25)

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  // Hero entrance + parallax
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.set([heroTagRef.current, heroTitleRef.current, heroSubRef.current], { opacity: 0, y: 60 })
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroImageRef.current.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    tl.to(heroTagRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .to(heroTitleRef.current, { opacity: 1, y: 0, duration: 1 }, 0.5)
      .to(heroSubRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)

    return () => { tl.kill() }
  }, [])

  return (
    <PageLayout>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img ref={heroImageRef} alt="Our Projects" className="w-full h-full object-cover scale-110" src={projectsHeroCollage} />
          <div className="absolute inset-0 bg-deep-blue/80" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-32 lg:py-44 text-ivory text-center relative z-10">
          <span ref={heroTagRef} className="text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-6 block">
            Our Portfolio
          </span>
          <h1 ref={heroTitleRef} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 max-w-4xl mx-auto">
            Spaces We've Brought to <span className="gradient-text-light">Life</span>
          </h1>
          <p ref={heroSubRef} className="text-base md:text-lg leading-relaxed opacity-75 max-w-2xl mx-auto">
            Each project is a unique narrative — a collaboration between vision, craft, and the art
            of living well. Explore our curated collection of interiors.
          </p>
        </div>
      </section>

      {/* ===== FILTER BAR ===== */}
      <section
        className="py-8 lg:py-10 bg-ivory border-b border-deep-blue/10 sticky top-20 z-40 backdrop-blur-md bg-ivory/95"
        ref={filters.ref}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="flex flex-wrap justify-center gap-3 lg:gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={filters.inView ? 'visible' : 'hidden'}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                className={`relative px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-xs lg:text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300
                  ${
                    activeFilter === cat
                      ? 'bg-deep-blue text-ivory'
                      : 'border border-deep-blue/20 text-deep-blue hover:border-deep-blue/60'
                  }`}
                onClick={() => setActiveFilter(cat)}
                variants={staggerChild}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div
                    className="absolute inset-0 bg-deep-blue rounded-full -z-10"
                    layoutId="activeFilter"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  variants={staggerChild}
                  layout
                  className="project-card group"
                >
                  <Link to={`/projects/${project.slug}`} className="block">
                    <motion.div
                      className={`overflow-hidden mb-5 lg:mb-6 rounded-xl lg:rounded-2xl relative ${
                        index % 3 === 0 ? 'aspect-[4/3]' : index % 3 === 1 ? 'aspect-[3/4]' : 'aspect-square'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={project.thumbnail}
                      />
                      <div className="absolute inset-0 bg-deep-blue/0 group-hover:bg-deep-blue/30 transition-all duration-500 flex items-end p-6 lg:p-8">
                        <span className="text-ivory text-sm font-medium uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0" style={{ transition: 'all 0.5s ease' }}>
                          View Project →
                        </span>
                      </div>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-2xl lg:text-3xl mb-1">{project.title}</h3>
                        <p className="text-xs lg:text-sm opacity-55 leading-relaxed max-w-md">{project.tagline}</p>
                      </div>
                      <span className="text-[10px] lg:text-xs uppercase tracking-[0.15em] opacity-35 whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div className="text-center py-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="font-serif text-3xl mb-4 opacity-35">No projects found</p>
              <p className="opacity-55 text-sm">Try selecting a different category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-section lg:pb-desktop-section px-6 lg:px-12" ref={cta.ref}>
        <div className="container mx-auto">
          <motion.div
            className="bg-gradient-to-br from-deep-blue via-deep-blue to-[#1a2f3d] text-ivory rounded-3xl p-12 md:p-20 lg:p-28 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={cta.inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="absolute -top-20 -right-20 w-64 h-64 border border-warm-gold/10 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
            <motion.div className="absolute -bottom-32 -left-32 w-96 h-96 border border-warm-gold/10 rounded-full" animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} />

            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6 leading-[1.1]">
                Have a Project in <span className="gradient-text-light">Mind</span>?
              </h2>
              <p className="text-base md:text-lg opacity-70 mb-12 max-w-xl mx-auto leading-relaxed">
                Let's bring your vision to life. Whether it's a cozy apartment or a grand villa, our
                team is ready to craft something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <MagneticButton as="a" href="/contact" className="bg-warm-gold text-deep-blue px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-semibold hover:shadow-[0_8px_30px_rgba(248,217,132,0.4)] transition-shadow">
                  Book a Free Discovery Call
                </MagneticButton>
                <MagneticButton as="a" href="/" className="border border-ivory/25 text-ivory px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-medium hover:bg-ivory/8 transition-all">
                  Back to Home
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

export default ProjectsPage
