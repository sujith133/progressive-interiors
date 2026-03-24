import { motion } from 'framer-motion'
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
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 via-transparent to-transparent flex items-end">
                <div className="p-8 md:p-12 lg:p-16">
                  <motion.span
                    className="text-soft-sage text-xs lg:text-sm uppercase tracking-widest mb-3 block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hero.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.h1
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-warm-cream"
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
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mb-16 lg:mb-20 pb-12 border-b border-forest-green/10"
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
                <blockquote className="font-serif text-2xl lg:text-3xl italic leading-relaxed opacity-70 border-l-2 border-soft-sage pl-8">
                  "{project.tagline}"
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== IMAGE GALLERY ===== */}
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
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate={gallery.inView ? 'visible' : 'hidden'}
            >
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  className={`overflow-hidden rounded-lg lg:rounded-xl ${
                    i === 0 ? 'lg:col-span-2 aspect-video' : 'aspect-[4/3]'
                  }`}
                  variants={staggerChild}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    alt={`${project.title} — View ${i + 1}`}
                    className="w-full h-full object-cover"
                    src={img}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                  />
                </motion.div>
              ))}
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 border-t border-forest-green/10 pt-12"
              variants={staggerContainer}
              initial="hidden"
              animate={nav.inView ? 'visible' : 'hidden'}
            >
              {/* Previous */}
              {prevProject ? (
                <motion.div variants={staggerChild}>
                  <Link
                    to={`/projects/${prevProject.slug}`}
                    className="group block p-6 lg:p-8 rounded-xl border border-forest-green/10 hover:border-forest-green/30 transition-all"
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
                    className="group block p-6 lg:p-8 rounded-xl border border-forest-green/10 hover:border-forest-green/30 transition-all"
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
