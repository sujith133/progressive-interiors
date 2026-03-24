import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import {
  fadeUpVariant,
  scalePopVariant,
  staggerContainer,
  staggerChild,
  useSectionInView,
} from '../utils/animations'
import { projects, categories } from '../data/projects'
import projectsHeroCollage from '../assets/images/projects-hero-collage.webp'


/* ════════════════════════════════════════════
   ProjectsPage Component
   ════════════════════════════════════════════ */
const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  // Section refs
  const hero = useSectionInView(0.15)
  const filters = useSectionInView(0.3)
  const grid = useSectionInView(0.1)
  const cta = useSectionInView(0.25)

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <PageLayout>
        {/* ===== HERO SECTION ===== */}
        <section
          className="relative overflow-hidden"
          data-purpose="projects-hero"
          ref={hero.ref}
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img
              alt="Our Projects"
              className="w-full h-full object-cover"
              src={projectsHeroCollage}
            />
            <div className="absolute inset-0 bg-forest-green/70" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 py-32 lg:py-44 text-warm-cream text-center">
            <motion.span
              className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
            >
              Our Portfolio
            </motion.span>
            <motion.h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 max-w-4xl mx-auto"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }}
            >
              Spaces We've Brought to Life
            </motion.h1>
            <motion.p
              className="text-base md:text-lg leading-relaxed opacity-80 max-w-2xl mx-auto"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              Each project is a unique narrative — a collaboration between vision, craft, and the art
              of living well. Explore our curated collection of residential, commercial, and
              hospitality interiors.
            </motion.p>
          </div>
        </section>

        {/* ===== FILTER BAR ===== */}
        <section
          className="py-8 lg:py-10 bg-warm-cream border-b border-forest-green/10 sticky top-20 z-40 backdrop-blur-md bg-warm-cream/95"
          data-purpose="filter-bar"
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
                  className={`relative px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-xs lg:text-sm font-medium uppercase tracking-widest transition-all duration-300
                    ${
                      activeFilter === cat
                        ? 'bg-forest-green text-warm-cream'
                        : 'border border-forest-green/20 text-forest-green hover:border-forest-green/60'
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
                      className="absolute inset-0 bg-forest-green rounded-full -z-10"
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
        <section
          className="py-section lg:py-desktop-section px-6 lg:px-12"
          data-purpose="project-grid"
          ref={grid.ref}
        >
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
                    className="group"
                  >
                    <Link to={`/projects/${project.slug}`} className="block">
                      {/* Image Container */}
                      <motion.div
                        className={`overflow-hidden mb-5 lg:mb-6 rounded-lg lg:rounded-xl ${
                          index % 3 === 0
                            ? 'aspect-[4/3]'
                            : index % 3 === 1
                            ? 'aspect-[3/4]'
                            : 'aspect-square'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        <img
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={project.thumbnail}
                        />
                        {/* Hover Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-forest-green/0 group-hover:bg-forest-green/30 transition-all duration-500 flex items-end p-6 lg:p-8"
                          initial={false}
                        >
                          <motion.span
                            className="text-warm-cream text-sm font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0"
                            style={{ transition: 'all 0.5s ease' }}
                          >
                            View Project →
                          </motion.span>
                        </motion.div>
                      </motion.div>

                      {/* Project Info */}
                      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                        <div>
                          <motion.h3
                            className="font-serif text-2xl lg:text-3xl mb-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={grid.inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            className="text-xs lg:text-sm opacity-60 leading-relaxed max-w-md"
                            initial={{ opacity: 0, y: 10 }}
                            animate={grid.inView ? { opacity: 0.6, y: 0 } : {}}
                            transition={{ delay: 0.4 + index * 0.1 }}
                          >
                            {project.tagline}
                          </motion.p>
                        </div>
                        <motion.span
                          className="text-[10px] lg:text-xs uppercase tracking-widest opacity-40 whitespace-nowrap"
                          initial={{ opacity: 0 }}
                          animate={grid.inView ? { opacity: 0.4 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {project.category}
                        </motion.span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-serif text-3xl mb-4 opacity-40">No projects found</p>
                <p className="opacity-60 text-sm">
                  Try selecting a different category filter.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section
          className="pb-section lg:pb-desktop-section px-6 lg:px-12"
          data-purpose="projects-cta"
          ref={cta.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="bg-forest-green text-warm-cream rounded-3xl p-12 md:p-20 lg:p-24 text-center"
              variants={scalePopVariant}
              initial="hidden"
              animate={cta.inView ? 'visible' : 'hidden'}
            >
              <motion.span
                className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block"
                variants={fadeUpVariant}
                initial="hidden"
                animate={cta.inView ? 'visible' : 'hidden'}
              >
                Start Your Journey
              </motion.span>
              <motion.h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
                variants={fadeUpVariant}
                initial="hidden"
                animate={cta.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.1 }}
              >
                Have a Project in Mind?
              </motion.h2>
              <motion.p
                className="text-base md:text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed"
                variants={fadeUpVariant}
                initial="hidden"
                animate={cta.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
              >
                Let's bring your vision to life. Whether it's a cozy apartment or a grand villa, our
                team is ready to craft something extraordinary.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-6"
                variants={fadeUpVariant}
                initial="hidden"
                animate={cta.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    className="bg-warm-cream text-forest-green px-8 lg:px-12 py-4 lg:py-5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto inline-block text-center"
                    to="/contact"
                  >
                    Book a Free Discovery Call
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    className="border border-warm-cream/40 text-warm-cream px-8 lg:px-12 py-4 lg:py-5 rounded-full text-sm font-medium hover:bg-warm-cream/10 transition-all w-full sm:w-auto inline-block text-center"
                    to="/"
                  >
                    Back to Home
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
          </PageLayout>
  )
}

export default ProjectsPage
