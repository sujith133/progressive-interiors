import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageLayout from '../components/PageLayout'
import ParallaxImage from '../components/ParallaxImage'
import MagneticButton from '../components/MagneticButton'
import { useScrollReveal } from '../hooks/useGSAP'
import {
  staggerContainer,
  staggerChild,
  glowPulseVariant,
  useSectionInView,
} from '../utils/animations'
import serviceResidentialDesign from '../assets/images/service-residential-design.webp'
import serviceSpacePlanning from '../assets/images/service-space-planning.webp'
import serviceMaterialCuration from '../assets/images/service-material-curation.webp'
import brandStudioWorkspace from '../assets/images/brand-studio-workspace.webp'
import detailSereneHaven1 from '../assets/images/detail-serene-haven-1.webp'

gsap.registerPlugin(ScrollTrigger)

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
   ServicesPage Component — GSAP Enhanced
   ════════════════════════════════════════════ */
const ServicesPage = () => {
  // GSAP hero
  const heroTagRef = useRef<HTMLSpanElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)

  const serviceCardsReveal = useScrollReveal({ y: 60, stagger: 0.2, childSelector: '.service-item' })
  const approachRow1 = useScrollReveal({ y: 50, stagger: 0.12, childSelector: '.approach-item-1' })
  const approachRow2 = useScrollReveal({ y: 50, stagger: 0.12, childSelector: '.approach-item-2' })
  const processReveal = useScrollReveal({ y: 50, stagger: 0.15, childSelector: '.process-step' })

  const stats = useSectionInView(0.25)
  const testimonialsSection = useSectionInView(0.1)
  const cta = useSectionInView(0.25)

  // Hero entrance
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.set([heroTagRef.current, heroTitleRef.current, heroSubRef.current], { opacity: 0, y: 60 })
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
          <img alt="Our Services" className="w-full h-full object-cover" src={serviceResidentialDesign} />
          <div className="absolute inset-0 bg-deep-blue/80" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-32 lg:py-44 text-ivory text-center relative z-10">
          <span ref={heroTagRef} className="text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-6 block">
            What We Do
          </span>
          <h1 ref={heroTitleRef} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 max-w-4xl mx-auto">
            Crafting Spaces That <span className="gradient-text-light">Inspire</span>
          </h1>
          <p ref={heroSubRef} className="text-base md:text-lg leading-relaxed opacity-75 max-w-2xl mx-auto">
            From concept to final reveal, we offer a complete spectrum of interior design services
            tailored to your lifestyle. Every project is a unique collaboration between vision,
            craft, and the art of refined living.
          </p>
        </div>
      </section>

      {/* ===== SERVICE CARDS with Parallax ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12">
        <div className="container mx-auto">
          <div ref={useScrollReveal({ y: 40 })} className="text-center mb-16 lg:mb-24">
            <span className="text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-2xl mx-auto">
              Three Pillars of <span className="gradient-text">Exceptional</span> Design
            </h2>
          </div>

          <div ref={serviceCardsReveal} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div key={service.title} className="service-item group">
                <ParallaxImage
                  src={service.image}
                  alt={service.title}
                  className={`mb-6 lg:mb-8 rounded-2xl ${index === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                  speed={-0.1}
                />

                <span className="text-gold-dark font-medium tracking-[0.2em] uppercase text-[10px] lg:text-xs mb-2 block opacity-70">
                  {service.tagline}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl mb-4">{service.title}</h3>
                <p className="text-sm lg:text-base opacity-65 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2.5">
                  {service.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm opacity-55">
                      <span className="text-gold-dark mt-0.5 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="py-section lg:py-desktop-section bg-deep-blue text-ivory relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12">
          <div ref={useScrollReveal({ y: 40 })} className="text-center mb-16 lg:mb-24">
            <span className="text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              How We Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Our Approach to <span className="gradient-text-light">Design</span>
            </h2>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
            <ParallaxImage
              src={brandStudioWorkspace}
              alt="Design Philosophy"
              className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl"
              speed={-0.15}
            />

            <div ref={approachRow1} className="max-w-lg">
              <span className="approach-item-1 text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
                Design Philosophy
              </span>
              <h3 className="approach-item-1 font-serif text-3xl lg:text-4xl mb-6 leading-tight">
                Rooted in Indian Craft, Refined by Modern Vision
              </h3>
              <p className="approach-item-1 text-base lg:text-lg opacity-80 leading-relaxed mb-6">
                We believe great interiors emerge from a dialogue between heritage and modernity.
                Our designs draw on India's rich traditions of craftsmanship — block printing,
                stone carving, handloom weaving — and reinterpret them through a contemporary lens.
              </p>
              <p className="approach-item-1 text-sm opacity-55 leading-relaxed">
                Sustainability is not an afterthought; it's woven into every material choice.
                We prioritize locally sourced, low-impact materials and work with artisan
                communities across India to bring authenticity and soul to every project.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div ref={approachRow2} className="max-w-lg order-2 lg:order-1">
              <span className="approach-item-2 text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
                Client-First Process
              </span>
              <h3 className="approach-item-2 font-serif text-3xl lg:text-4xl mb-6 leading-tight">
                Collaborative, Transparent, Tailored
              </h3>
              <p className="approach-item-2 text-base lg:text-lg opacity-80 leading-relaxed mb-6">
                Every project begins with listening. We invest time understanding not just your
                aesthetic preferences, but how you live, work, and entertain. The result is a
                space that feels intuitively yours from the moment you step in.
              </p>
              <p className="approach-item-2 text-sm opacity-55 leading-relaxed">
                Our process is completely transparent — from budgets to timelines. You'll have
                a dedicated project manager, regular progress updates, and full visibility into
                every decision. No surprises, just beautiful spaces delivered on time.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <ParallaxImage
                src={detailSereneHaven1}
                alt="Client-First Process"
                className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl"
                speed={-0.15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS TIMELINE ===== */}
      <section className="py-section lg:py-desktop-section bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={useScrollReveal({ y: 40 })} className="text-center mb-16 lg:mb-24">
            <span className="text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              Our Process
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              From Vision to <span className="gradient-text">Reality</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-14 left-0 w-full h-px border-t border-dashed border-deep-blue/15 -z-0" />

            <div ref={processReveal} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 sm:gap-y-16 gap-x-6 lg:gap-8">
              {processSteps.map((step) => (
                <motion.div
                  key={step.num}
                  className="process-step relative z-10 text-center bg-ivory px-2"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className="w-20 lg:w-28 h-20 lg:h-28 mx-auto bg-deep-blue/[0.06] rounded-full flex items-center justify-center font-serif text-2xl lg:text-3xl mb-6 lg:mb-8 text-deep-blue border border-deep-blue/10"
                    variants={glowPulseVariant}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {step.num}
                  </motion.div>
                  <h4 className="font-serif text-lg lg:text-xl mb-3">{step.title}</h4>
                  <p className="text-xs lg:text-sm opacity-60 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-16 lg:py-20 bg-deep-blue text-ivory relative" ref={stats.ref}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent" />
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
              <motion.div key={stat.label} className="text-center" variants={staggerChild} whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}>
                <motion.span
                  className="block font-serif text-4xl lg:text-5xl mb-2 text-warm-gold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={stats.inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] opacity-45 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent" />
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12 overflow-hidden" ref={testimonialsSection.ref}>
        <div className="container mx-auto">
          <div ref={useScrollReveal({ y: 40 })} className="text-center mb-14 lg:mb-20">
            <span className="text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              Client Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Words from Those We've <span className="gradient-text">Designed</span> For
            </h2>
          </div>

          <motion.div
            className="testimonial-container gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsSection.inView ? 'visible' : 'hidden'}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card bg-white p-8 md:p-10 lg:p-14 shadow-sm border border-deep-blue/5 rounded-2xl flex-shrink-0"
                variants={staggerChild}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(38, 64, 83, 0.08)', transition: { duration: 0.3 } }}
              >
                <div className="text-gold-dark mb-6 text-base lg:text-lg tracking-wider">★★★★★</div>
                <p className="text-base lg:text-lg italic mb-10 leading-relaxed opacity-75 font-serif">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-deep-blue/[0.06] flex items-center justify-center font-serif text-lg text-deep-blue">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm lg:text-base">{t.name}</p>
                    <p className="text-[10px] lg:text-xs uppercase tracking-[0.15em] opacity-45">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                Ready to Transform Your <span className="gradient-text-light">Space</span>?
              </h2>
              <p className="text-base md:text-lg opacity-70 mb-12 max-w-xl mx-auto leading-relaxed">
                Whether you're dreaming of a serene bedroom retreat, a show-stopping living room,
                or a workspace that sparks creativity — let's talk.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <MagneticButton as="a" href="/contact" className="bg-warm-gold text-deep-blue px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-semibold hover:shadow-[0_8px_30px_rgba(248,217,132,0.4)] transition-shadow">
                  Book a Free Consultation
                </MagneticButton>
                <MagneticButton as="a" href="/projects" className="border border-ivory/25 text-ivory px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-medium hover:bg-ivory/8 transition-all">
                  View Our Projects
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

export default ServicesPage
