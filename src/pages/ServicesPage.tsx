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
import serviceResidentialDesign from '../assets/images/service-residential-design.webp'
import serviceSpacePlanning from '../assets/images/service-space-planning.webp'
import serviceMaterialCuration from '../assets/images/service-material-curation.webp'
import brandStudioWorkspace from '../assets/images/brand-studio-workspace.webp'
import detailSereneHaven1 from '../assets/images/detail-serene-haven-1.webp'

/* ────────────────────────────────────────────
   Service data
   ──────────────────────────────────────────── */
const services = [
  {
    title: 'Residential Design',
    tagline: 'Complete Home Transformations',
    image: serviceResidentialDesign,
    description:
      'From heritage homes to modern apartments, we create living spaces that balance beauty with practicality. Our residential design service covers every aspect of your home — from architectural detailing to the final cushion placement.',
    inclusions: [
      'Space planning & layout optimization',
      'Custom furniture design & sourcing',
      'Lighting design & automation',
      'Color palette & material selection',
      'Art curation & styling',
    ],
  },
  {
    title: 'Space Planning & Renovation',
    tagline: 'Optimized Layouts & Structural Upgrades',
    image: serviceSpacePlanning,
    description:
      'Great design starts with great bones. We analyze your space\'s potential and develop intelligent floor plans that enhance flow, maximize utility, and respect the original architecture — whether it\'s a compact city flat or a sprawling bungalow.',
    inclusions: [
      'Architectural floor plan redesign',
      'Structural modification consultation',
      'Kitchen & bathroom layout planning',
      'Storage solutions & built-ins',
      'Contractor coordination & project management',
    ],
  },
  {
    title: 'Material & Decor Curation',
    tagline: 'Hand-Picked Finishes & Furnishings',
    image: serviceMaterialCuration,
    description:
      'Every surface, fabric, and fixture tells a story. We source materials from trusted artisans across India and the world — handwoven textiles, locally quarried stone, sustainably harvested timber, and bespoke hardware — to create interiors with soul.',
    inclusions: [
      'Fabric, tile & stone selection',
      'Artisan & vendor sourcing',
      'Furniture procurement & custom orders',
      'Textile & upholstery curation',
      'Sustainability-focused material alternatives',
    ],
  },
]

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'We listen to your vision, study the space, and understand your lifestyle and aspirations.' },
  { num: '02', title: 'Concept', desc: 'Moodboards, material samples, and spatial layouts bring the vision to life on paper.' },
  { num: '03', title: 'Design Development', desc: '3D visualizations, technical drawings, and detailed specifications for every element.' },
  { num: '04', title: 'Execution', desc: 'Our trusted craftsmen and contractors bring the design to reality with precision.' },
  { num: '05', title: 'Reveal', desc: 'Final styling, walk-through, and the keys to your beautifully transformed space.' },
]

const testimonials = [
  {
    quote: '"Progressive Interiors transformed our family home in Bangalore into something out of a design magazine. Their attention to Indian craftsmanship is unparalleled."',
    name: 'Priya & Arjun Sharma',
    location: 'Ananda Villa, Bangalore',
  },
  {
    quote: '"Working with PI was effortless. They understood our need for a modern workspace that still felt warm and green. Our team productivity has actually increased!"',
    name: 'Kavitha Rajan',
    location: 'Vanam Studio, Chennai',
  },
  {
    quote: '"From the first mood board to the final reveal, the process was transparent and exciting. Our guests now think they\'re staying at a luxury boutique hotel."',
    name: 'Rahul Mehta',
    location: 'Shanti Suite, Rishikesh',
  },
]

/* ════════════════════════════════════════════
   ServicesPage Component
   ════════════════════════════════════════════ */
const ServicesPage = () => {
  // Section refs
  const hero = useSectionInView(0.15)
  const serviceGrid = useSectionInView(0.1)
  const approach = useSectionInView(0.15)
  const process = useSectionInView(0.1)
  const stats = useSectionInView(0.25)
  const testimonialsSection = useSectionInView(0.1)
  const cta = useSectionInView(0.25)

  return (
    <PageLayout>
        {/* ===== HERO SECTION ===== */}
        <section
          className="relative overflow-hidden"
          data-purpose="services-hero"
          ref={hero.ref}
        >
          <div className="absolute inset-0 -z-10">
            <img
              alt="Our Services"
              className="w-full h-full object-cover"
              src={serviceResidentialDesign}
            />
            <div className="absolute inset-0 bg-forest-green/75" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 py-32 lg:py-44 text-warm-cream text-center">
            <motion.span
              className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
            >
              What We Do
            </motion.span>
            <motion.h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 max-w-4xl mx-auto"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }}
            >
              Crafting Spaces That Inspire
            </motion.h1>
            <motion.p
              className="text-base md:text-lg leading-relaxed opacity-80 max-w-2xl mx-auto"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              From concept to final reveal, we offer a complete spectrum of interior design services
              tailored to your lifestyle. Every project is a unique collaboration between vision,
              craft, and the art of refined living.
            </motion.p>
          </div>
        </section>

        {/* ===== SERVICE CARDS ===== */}
        <section
          className="py-section lg:py-desktop-section px-6 lg:px-12"
          data-purpose="service-cards"
          ref={serviceGrid.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16 lg:mb-24"
              variants={fadeUpVariant}
              initial="hidden"
              animate={serviceGrid.inView ? 'visible' : 'hidden'}
            >
              <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-3 block">
                Our Expertise
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl mx-auto">
                Three Pillars of Exceptional Design
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
              variants={staggerContainer}
              initial="hidden"
              animate={serviceGrid.inView ? 'visible' : 'hidden'}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group"
                  variants={staggerChild}
                >
                  {/* Image */}
                  <motion.div
                    className={`overflow-hidden mb-6 lg:mb-8 rounded-xl ${
                      index === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={service.image}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.span
                    className="text-soft-sage font-medium tracking-widest uppercase text-[10px] lg:text-xs mb-2 block"
                    initial={{ opacity: 0 }}
                    animate={serviceGrid.inView ? { opacity: 0.7 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {service.tagline}
                  </motion.span>
                  <motion.h3
                    className="font-serif text-2xl lg:text-3xl mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={serviceGrid.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.35 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm lg:text-base opacity-70 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={serviceGrid.inView ? { opacity: 0.7, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Inclusions */}
                  <ul className="space-y-2.5">
                    {service.inclusions.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-sm opacity-60"
                        initial={{ opacity: 0, x: -10 }}
                        animate={serviceGrid.inView ? { opacity: 0.6, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      >
                        <span className="text-soft-sage mt-0.5 text-xs">●</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== OUR APPROACH ===== */}
        <section
          className="py-section lg:py-desktop-section bg-forest-green text-warm-cream"
          data-purpose="our-approach"
          ref={approach.ref}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="text-center mb-16 lg:mb-24"
              variants={fadeUpVariant}
              initial="hidden"
              animate={approach.inView ? 'visible' : 'hidden'}
            >
              <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-3 block">
                How We Work
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Our Approach to Design
              </h2>
            </motion.div>

            {/* Row 1: Image Left + Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
              <motion.div
                className="h-[350px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-xl"
                variants={fadeLeftVariant}
                initial="hidden"
                animate={approach.inView ? 'visible' : 'hidden'}
              >
                <motion.img
                  alt="Design Philosophy"
                  className="w-full h-full object-cover"
                  src={brandStudioWorkspace}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              <motion.div
                className="max-w-lg"
                variants={fadeRightVariant}
                initial="hidden"
                animate={approach.inView ? 'visible' : 'hidden'}
              >
                <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block">
                  Design Philosophy
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">
                  Rooted in Indian Craft, Refined by Modern Vision
                </h3>
                <p className="text-base lg:text-lg opacity-80 leading-relaxed mb-6">
                  We believe great interiors emerge from a dialogue between heritage and modernity.
                  Our designs draw on India's rich traditions of craftsmanship — block printing,
                  stone carving, handloom weaving — and reinterpret them through a contemporary lens.
                </p>
                <p className="text-sm opacity-60 leading-relaxed">
                  Sustainability is not an afterthought; it's woven into every material choice.
                  We prioritize locally sourced, low-impact materials and work with artisan
                  communities across India to bring authenticity and soul to every project.
                </p>
              </motion.div>
            </div>

            {/* Row 2: Text Left + Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                className="max-w-lg order-2 lg:order-1"
                variants={fadeLeftVariant}
                initial="hidden"
                animate={approach.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
              >
                <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block">
                  Client-First Process
                </span>
                <h3 className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">
                  Collaborative, Transparent, Tailored
                </h3>
                <p className="text-base lg:text-lg opacity-80 leading-relaxed mb-6">
                  Every project begins with listening. We invest time understanding not just your
                  aesthetic preferences, but how you live, work, and entertain. The result is a
                  space that feels intuitively yours from the moment you step in.
                </p>
                <p className="text-sm opacity-60 leading-relaxed">
                  Our process is completely transparent — from budgets to timelines. You'll have
                  a dedicated project manager, regular progress updates, and full visibility into
                  every decision. No surprises, just beautiful spaces delivered on time.
                </p>
              </motion.div>

              <motion.div
                className="h-[350px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-xl order-1 lg:order-2"
                variants={fadeRightVariant}
                initial="hidden"
                animate={approach.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
              >
                <motion.img
                  alt="Client-First Process"
                  className="w-full h-full object-cover"
                  src={detailSereneHaven1}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== PROCESS TIMELINE ===== */}
        <section
          className="py-section lg:py-desktop-section bg-warm-cream"
          data-purpose="process-timeline"
          ref={process.ref}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="text-center mb-16 lg:mb-24"
              variants={fadeUpVariant}
              initial="hidden"
              animate={process.inView ? 'visible' : 'hidden'}
            >
              <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-3 block">
                Our Process
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                From Vision to Reality in Five Steps
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connector Line — Desktop Only */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-px border-t border-dashed border-forest-green/20 -z-0" />

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 sm:gap-y-16 gap-x-6 lg:gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate={process.inView ? 'visible' : 'hidden'}
              >
                {processSteps.map((step) => (
                  <motion.div
                    key={step.num}
                    className="relative z-10 text-center bg-warm-cream px-2"
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
                    <h4 className="font-serif text-lg lg:text-xl mb-3">{step.title}</h4>
                    <p className="text-xs lg:text-sm opacity-70 leading-relaxed max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US (STATS) ===== */}
        <section
          className="py-16 lg:py-20 border-y border-forest-green/10"
          data-purpose="stats"
          ref={stats.ref}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12"
              variants={staggerContainer}
              initial="hidden"
              animate={stats.inView ? 'visible' : 'hidden'}
            >
              {[
                { value: '150+', label: 'Projects Delivered' },
                { value: '12+', label: 'Years Experience' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '40+', label: 'Design Awards' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  variants={staggerChild}
                  whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                >
                  <motion.span
                    className="block font-serif text-4xl lg:text-5xl mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={stats.inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-50 font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section
          className="py-section lg:py-desktop-section px-6 lg:px-12 overflow-hidden"
          data-purpose="testimonials"
          ref={testimonialsSection.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16 lg:mb-20"
              variants={fadeUpVariant}
              initial="hidden"
              animate={testimonialsSection.inView ? 'visible' : 'hidden'}
            >
              <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-3 block">
                Client Stories
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Words from Those We've Designed For
              </h2>
            </motion.div>

            <motion.div
              className="testimonial-container gap-6 lg:gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={testimonialsSection.inView ? 'visible' : 'hidden'}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className="testimonial-card bg-white p-8 md:p-10 lg:p-12 shadow-sm border border-forest-green/5 rounded-xl flex-shrink-0"
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
                    animate={testimonialsSection.inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200 }}
                  >
                    ★★★★★
                  </motion.div>
                  <p className="text-base lg:text-lg italic mb-8 lg:mb-10 leading-relaxed opacity-80">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-serif text-lg font-medium">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest opacity-50 mt-1">{t.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section
          className="pb-section lg:pb-desktop-section px-6 lg:px-12"
          data-purpose="services-cta"
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
                Get Started
              </motion.span>
              <motion.h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6"
                variants={fadeUpVariant}
                initial="hidden"
                animate={cta.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.1 }}
              >
                Ready to Transform Your Space?
              </motion.h2>
              <motion.p
                className="text-base md:text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed"
                variants={fadeUpVariant}
                initial="hidden"
                animate={cta.inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
              >
                Whether you're dreaming of a serene bedroom retreat, a show-stopping living room,
                or a workspace that sparks creativity — let's talk. Your first consultation is on us.
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
                    Book a Free Consultation
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    className="border border-warm-cream/40 text-warm-cream px-8 lg:px-12 py-4 lg:py-5 rounded-full text-sm font-medium hover:bg-warm-cream/10 transition-all w-full sm:w-auto inline-block text-center"
                    to="/projects"
                  >
                    View Our Projects
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
    </PageLayout>
  )
}

export default ServicesPage
