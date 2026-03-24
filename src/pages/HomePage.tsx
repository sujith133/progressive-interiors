import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
import heroLivingRoom from '../assets/images/hero-living-room.webp'
import serviceResidentialDesign from '../assets/images/service-residential-design.webp'
import serviceSpacePlanning from '../assets/images/service-space-planning.webp'
import serviceMaterialCuration from '../assets/images/service-material-curation.webp'
import brandStudioWorkspace from '../assets/images/brand-studio-workspace.webp'
import projectOakStoneVilla from '../assets/images/project-oak-stone-villa.webp'
import projectMinimalistPenthouse from '../assets/images/project-minimalist-penthouse.webp'

/* ════════════════════════════════════════════
   HomePage Component
   ════════════════════════════════════════════ */
const HomePage = () => {
  // Section refs
  const hero = useSectionInView(0.15)
  const stats = useSectionInView(0.3)
  const services = useSectionInView(0.15)
  const brand = useSectionInView(0.15)
  const portfolio = useSectionInView(0.15)
  const process = useSectionInView(0.15)
  const testimonials = useSectionInView(0.15)
  const cta = useSectionInView(0.25)

  return (
    <PageLayout>
        {/* ===== HERO SECTION ===== */}
        <section
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
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className="ghost-button inline-block px-10 py-4 text-sm uppercase tracking-widest font-medium"
                    to="/projects"
                  >
                    View Our Portfolio
                  </Link>
                </motion.div>
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
                src={heroLivingRoom}
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
                  src={heroLivingRoom}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== STATS STRIP ===== */}
        <section
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
                    src={serviceResidentialDesign}
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
                      src={serviceSpacePlanning}
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
                      src={serviceMaterialCuration}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== BRAND STORY ===== */}
        <section
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
                  src={brandStudioWorkspace}
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
              <motion.div whileHover={{ x: 5 }}>
                <Link
                  className="nav-link text-xs lg:text-sm uppercase tracking-widest"
                  to="/projects"
                >
                  View All<span className="hidden sm:inline"> Projects</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12"
              variants={staggerContainer}
              initial="hidden"
              animate={portfolio.inView ? 'visible' : 'hidden'}
            >
              {/* Project Card 1 */}
              <motion.div className="group cursor-pointer" variants={staggerChild}>
               <Link to="/projects/ananda-villa">
                <motion.div
                  className="overflow-hidden aspect-video sm:aspect-video lg:aspect-[4/3] mb-4 lg:mb-6 rounded-lg lg:rounded-none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt="Ananda Villa"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={projectOakStoneVilla}
                  />
                </motion.div>
                <motion.h3
                  className="font-serif text-2xl lg:text-3xl mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={portfolio.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Ananda Villa
                </motion.h3>
                <motion.p
                  className="text-[10px] lg:text-sm uppercase tracking-widest opacity-60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={portfolio.inView ? { opacity: 0.6, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Residential · Bangalore
                </motion.p>
               </Link>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div className="group cursor-pointer" variants={staggerChild}>
               <Link to="/projects/kala-loft">
                <motion.div
                  className="overflow-hidden aspect-video sm:aspect-video lg:aspect-[4/3] mb-4 lg:mb-6 rounded-lg lg:rounded-none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    alt="Kala Loft"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={projectMinimalistPenthouse}
                  />
                </motion.div>
                <motion.h3
                  className="font-serif text-2xl lg:text-3xl mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={portfolio.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Kala Loft
                </motion.h3>
                <motion.p
                  className="text-[10px] lg:text-sm uppercase tracking-widest opacity-60"
                  initial={{ opacity: 0, y: 10 }}
                  animate={portfolio.inView ? { opacity: 0.6, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  Residential · Mumbai
                </motion.p>
               </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section
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
    </PageLayout>
  )
}

export default HomePage
