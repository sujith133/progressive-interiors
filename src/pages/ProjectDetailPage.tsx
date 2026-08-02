import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import {
  fadeUpVariant,
  fadeLeftVariant,
  fadeRightVariant,
  scalePopVariant,
  staggerContainer,
  staggerChild,
  useSectionInView,
} from '../utils/animations'
import { projects } from '../data/projects'


/* ════════════════════════════════════════════
   ProjectDetailPage Component
   ════════════════════════════════════════════ */
const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()

  const project = projects.find((p) => p.slug === slug)
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setActiveSlide(index)
  }, [])

  const goPrev = useCallback(() => {
    if (!project) return
    const prev = (activeSlide - 1 + project.images.length) % project.images.length
    goTo(prev, -1)
  }, [activeSlide, project, goTo])

  const goNext = useCallback(() => {
    if (!project) return
    const next = (activeSlide + 1) % project.images.length
    goTo(next, 1)
  }, [activeSlide, project, goTo])

  // Section refs
  const hero = useSectionInView(0.1)
  const info = useSectionInView(0.2)
  const gallery = useSectionInView(0.1)
  const nav = useSectionInView(0.2)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <PageLayout>
        {/* ===== BREADCRUMB ===== */}
        <motion.div
          className="container mx-auto px-6 lg:px-12 py-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-60">
            <Link to="/" className="hover:opacity-100 transition-opacity">
              Home
            </Link>
            <span>/</span>
            <Link to="/projects" className="hover:opacity-100 transition-opacity">
              Our Projects
            </Link>
            <span>/</span>
            <span className="opacity-100 font-medium">{project.title}</span>
          </div>
        </motion.div>

        {/* ===== HERO IMAGE ===== */}
        <section
          className="px-6 lg:px-12 mb-16 lg:mb-24"
          data-purpose="project-hero"
          ref={hero.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="relative overflow-hidden rounded-xl lg:rounded-2xl aspect-video lg:aspect-[21/9]"
              variants={scalePopVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
            >
              <img
                alt={project.title}
                className="w-full h-full object-cover"
                src={project.thumbnail}
              />
              {/* Title overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent flex items-end">
                <div className="p-8 md:p-12 lg:p-16">
                  <motion.span
                    className="text-warm-gold text-xs lg:text-sm uppercase tracking-widest mb-3 block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hero.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.h1
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory"
                    initial={{ opacity: 0, y: 30 }}
                    animate={hero.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {project.title}
                  </motion.h1>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== PROJECT INFO ===== */}
        <section
          className="px-6 lg:px-12 mb-16 lg:mb-24"
          data-purpose="project-info"
          ref={info.ref}
        >
          <div className="container mx-auto">
            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mb-16 lg:mb-20 pb-12 border-b border-deep-blue/10"
              variants={staggerContainer}
              initial="hidden"
              animate={info.inView ? 'visible' : 'hidden'}
            >
              {[
                { label: 'Category', value: project.category },
                { label: 'Location', value: project.location },
                { label: 'Scope', value: project.scope },
              ].map((stat) => (
                <motion.div key={stat.label} variants={staggerChild}>
                  <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-50 mb-2 block">
                    {stat.label}
                  </span>
                  <span className="font-serif text-xl lg:text-2xl">{stat.value}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <motion.div
                variants={fadeLeftVariant}
                initial="hidden"
                animate={info.inView ? 'visible' : 'hidden'}
              >
                <h2 className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">
                  About This Project
                </h2>
                <p className="text-base lg:text-lg leading-relaxed opacity-80">
                  {project.description}
                </p>
              </motion.div>
              <motion.div
                className="flex items-center"
                variants={fadeRightVariant}
                initial="hidden"
                animate={info.inView ? 'visible' : 'hidden'}
              >
                <blockquote className="font-serif text-2xl lg:text-3xl italic leading-relaxed opacity-70 border-l-2 border-warm-gold pl-8">
                  "{project.tagline}"
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== IMAGE GALLERY CAROUSEL ===== */}
        <section
          className="px-6 lg:px-12 mb-16 lg:mb-24"
          data-purpose="project-gallery"
          ref={gallery.ref}
        >
          <div className="container mx-auto">
            <motion.h3
              className="font-serif text-3xl lg:text-4xl mb-10 lg:mb-14 text-center"
              variants={fadeUpVariant}
              initial="hidden"
              animate={gallery.inView ? 'visible' : 'hidden'}
            >
              Project Gallery
            </motion.h3>

            {/* Carousel Wrapper */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={gallery.inView ? 'visible' : 'hidden'}
            >
              {/* Main slide area */}
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl aspect-video lg:aspect-[16/9] bg-deep-blue/5">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.img
                    key={activeSlide}
                    src={project.images[activeSlide]}
                    alt={`${project.title} — View ${activeSlide + 1}`}
                    className="w-full h-full object-cover absolute inset-0"
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>

                {/* Counter badge */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-deep-blue/70 backdrop-blur-sm text-ivory text-xs font-medium px-3 py-1.5 rounded-full z-10">
                    {activeSlide + 1} / {project.images.length}
                  </div>
                )}

                {/* Prev button */}
                {project.images.length > 1 && (
                  <button
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-deep-blue/70 backdrop-blur-sm text-ivory flex items-center justify-center hover:bg-warm-gold hover:text-deep-blue transition-all duration-300 shadow-lg"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                )}

                {/* Next button */}
                {project.images.length > 1 && (
                  <button
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-deep-blue/70 backdrop-blur-sm text-ivory flex items-center justify-center hover:bg-warm-gold hover:text-deep-blue transition-all duration-300 shadow-lg"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Dot indicators */}
              {project.images.length > 1 && (
                <div className="flex justify-center items-center gap-2 mt-5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i, i > activeSlide ? 1 : -1)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeSlide
                          ? 'w-6 h-2.5 bg-warm-gold'
                          : 'w-2.5 h-2.5 bg-deep-blue/25 hover:bg-deep-blue/50'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Thumbnail strip */}
              {project.images.length > 1 && (
                <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-hide">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i, i > activeSlide ? 1 : -1)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                        i === activeSlide
                          ? 'ring-2 ring-warm-gold ring-offset-2 opacity-100'
                          : 'opacity-50 hover:opacity-80'
                      }`}
                      style={{ width: 80, height: 60 }}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>


        {/* ===== PREV / NEXT NAVIGATION ===== */}
        <section
          className="px-6 lg:px-12 mb-16 lg:mb-24"
          data-purpose="project-nav"
          ref={nav.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 border-t border-deep-blue/10 pt-12"
              variants={staggerContainer}
              initial="hidden"
              animate={nav.inView ? 'visible' : 'hidden'}
            >
              {/* Previous */}
              {prevProject ? (
                <motion.div variants={staggerChild}>
                  <Link
                    to={`/projects/${prevProject.slug}`}
                    className="group block p-6 lg:p-8 rounded-xl border border-deep-blue/10 hover:border-warm-gold/40 transition-all hover-glow"
                  >
                    <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-50 mb-2 block">
                      ← Previous Project
                    </span>
                    <h4 className="font-serif text-xl lg:text-2xl group-hover:translate-x-1 transition-transform">
                      {prevProject.title}
                    </h4>
                    <p className="text-xs opacity-50 mt-1">{prevProject.category}</p>
                  </Link>
                </motion.div>
              ) : (
                <div />
              )}

              {/* Next */}
              {nextProject ? (
                <motion.div variants={staggerChild} className="text-right">
                  <Link
                    to={`/projects/${nextProject.slug}`}
                    className="group block p-6 lg:p-8 rounded-xl border border-deep-blue/10 hover:border-warm-gold/40 transition-all hover-glow"
                  >
                    <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-50 mb-2 block">
                      Next Project →
                    </span>
                    <h4 className="font-serif text-xl lg:text-2xl group-hover:-translate-x-1 transition-transform">
                      {nextProject.title}
                    </h4>
                    <p className="text-xs opacity-50 mt-1">{nextProject.category}</p>
                  </Link>
                </motion.div>
              ) : (
                <div />
              )}
            </motion.div>

            {/* Back to All */}
            <motion.div
              className="text-center mt-10"
              variants={fadeUpVariant}
              initial="hidden"
              animate={nav.inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="ghost-button inline-block px-10 py-4 text-sm uppercase tracking-widest font-medium rounded-full"
                >
                  View All Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
          </PageLayout>
  )
}

export default ProjectDetailPage
