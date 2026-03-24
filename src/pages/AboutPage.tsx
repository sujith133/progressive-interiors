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
import brandStudioWorkspace from '../assets/images/brand-studio-workspace.webp'
import detailSereneHaven1 from '../assets/images/detail-serene-haven-1.webp'
import detailSereneHaven2 from '../assets/images/detail-serene-haven-2.webp'



/* ────────────────────────────────────────────
   Team data
   ──────────────────────────────────────────── */
const team = [
  {
    name: 'Syam Chopra',
    role: 'Director',
    initials: 'SC',
    experience: '15 Years',
    bio: 'Recognized for strong leadership and client-centric collaboration, Syam Chopra thrives in dynamic environments, working closely with architects, contractors, and stakeholders to achieve outstanding results. Whether designing luxury homes, corporate offices, or hospitality spaces, he brings a strategic approach, sharp attention to detail, and a passion for elevating built environments. He has successfully managed end-to-end projects, from conceptual design and space planning to execution and final handover.',
    gradient: 'from-forest-green to-forest-green/70',
  },
  {
    name: 'E. Hanock Moses',
    role: 'Marketing Director',
    initials: 'HM',
    experience: '8 Years',
    bio: 'With 8 years of hands-on experience in interior design and construction, E. Hanock Moses is a seasoned professional known for blending creativity with technical precision to deliver exceptional spaces. Specializing in residential, commercial, and retail projects, he has a proven track record of transforming client visions into reality through innovative design, meticulous planning, and flawless execution.',
    gradient: 'from-soft-sage to-soft-sage/60',
  },
  {
    name: 'Bh. Pavan Kumar',
    role: 'Marketing Director',
    initials: 'PK',
    experience: '10+ Years',
    bio: 'Bh. Pavan Kumar is an effective team leader and communicator, adept at coordinating between architects, engineers, vendors, and clients to maintain smooth project workflows. Known for his attention to detail, strong work ethic, and commitment to client satisfaction, he has built a reputation for delivering projects on time, within budget, and above expectations. He stays updated with the latest trends in materials, technology, and sustainable building practices, ensuring each project reflects current standards and long-term durability.',
    gradient: 'from-forest-green/80 to-soft-sage/40',
  },
]

const values = [
  {
    num: '01',
    title: 'Client-Centric Design',
    desc: 'Every space begins with listening. We design around your lifestyle, preferences, and aspirations — not trends.',
  },
  {
    num: '02',
    title: 'Craftsmanship First',
    desc: 'We partner with skilled artisans across India, valuing handmade quality and attention to detail in every element.',
  },
  {
    num: '03',
    title: 'Sustainable Choices',
    desc: 'From locally sourced materials to energy-efficient planning, sustainability is woven into every design decision.',
  },
  {
    num: '04',
    title: 'End-to-End Excellence',
    desc: 'From the first sketch to the final cushion, we manage every detail so you can enjoy the journey, not just the result.',
  },
]

/* ════════════════════════════════════════════
   AboutPage Component
   ════════════════════════════════════════════ */
const AboutPage = () => {

  // Section refs
  const hero = useSectionInView(0.15)
  const story = useSectionInView(0.15)
  const mission = useSectionInView(0.15)
  const valuesSection = useSectionInView(0.1)
  const teamSection = useSectionInView(0.1)
  const stats = useSectionInView(0.25)
  const cta = useSectionInView(0.25)

  return (
    <PageLayout>
        {/* ===== HERO SECTION ===== */}
        <section
          className="relative bg-forest-green text-warm-cream overflow-hidden"
          data-purpose="about-hero"
          ref={hero.ref}
        >
          {/* Subtle dot grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="container mx-auto px-6 lg:px-12 py-28 lg:py-40 text-center relative z-10">
            <motion.span
              className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
            >
              About Us
            </motion.span>
            <motion.h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 max-w-4xl mx-auto"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }}
            >
              Designing Spaces, Building Stories
            </motion.h1>
            <motion.p
              className="text-base md:text-lg leading-relaxed opacity-80 max-w-2xl mx-auto"
              variants={fadeUpVariant}
              initial="hidden"
              animate={hero.inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              Progressive Interiors is a Hyderabad-based design studio that transforms ordinary
              spaces into extraordinary experiences. With over 15 years of combined expertise,
              we bring vision, craft, and heart to every project.
            </motion.p>
          </div>
        </section>

        {/* ===== OUR STORY ===== */}
        <section
          className="py-section lg:py-desktop-section px-6 lg:px-12"
          data-purpose="our-story"
          ref={story.ref}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                className="h-[350px] sm:h-[420px] lg:h-[550px] overflow-hidden rounded-xl"
                variants={fadeLeftVariant}
                initial="hidden"
                animate={story.inView ? 'visible' : 'hidden'}
              >
                <motion.img
                  alt="Our Studio"
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
                animate={story.inView ? 'visible' : 'hidden'}
              >
                <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl lg:text-5xl mb-6 leading-tight">
                  Born from a Passion for Purposeful Design
                </h2>
                <p className="text-base lg:text-lg opacity-80 leading-relaxed mb-6">
                  Progressive Interiors was founded with a simple belief — that every space has the
                  potential to inspire. From our studio in Hyderabad, we've grown into a team of
                  designers, planners, and craftsmen who share a deep commitment to quality and
                  client satisfaction.
                </p>
                <p className="text-sm opacity-60 leading-relaxed mb-8">
                  What started as a small residential design practice has evolved into a
                  full-service interior design studio serving clients across India. From luxury
                  homes and modern apartments to corporate offices and retail spaces, we bring the
                  same passion and precision to every project — no matter the scale.
                </p>
                <div className="flex gap-12">
                  <div>
                    <span className="block font-serif text-3xl lg:text-4xl mb-1">150+</span>
                    <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-50 font-medium">
                      Projects
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-3xl lg:text-4xl mb-1">15+</span>
                    <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-50 font-medium">
                      Years
                    </span>
                  </div>
                  <div>
                    <span className="block font-serif text-3xl lg:text-4xl mb-1">98%</span>
                    <span className="text-[10px] lg:text-xs uppercase tracking-widest opacity-50 font-medium">
                      Satisfaction
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== MISSION & VISION ===== */}
        <section
          className="py-section lg:py-desktop-section bg-forest-green text-warm-cream px-6 lg:px-12"
          data-purpose="mission-vision"
          ref={mission.ref}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                className="max-w-lg order-2 lg:order-1"
                variants={fadeLeftVariant}
                initial="hidden"
                animate={mission.inView ? 'visible' : 'hidden'}
              >
                <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block">
                  Our Mission
                </span>
                <h2 className="font-serif text-3xl lg:text-5xl mb-6 leading-tight">
                  Elevating Everyday Living Through Thoughtful Design
                </h2>
                <p className="text-base lg:text-lg opacity-80 leading-relaxed mb-8">
                  We believe that great design isn't just about aesthetics — it's about how a space
                  makes you feel. Our mission is to create interiors that are not only visually
                  stunning but also deeply functional, sustainable, and reflective of the people
                  who inhabit them.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-soft-sage/20 rounded-full flex items-center justify-center flex-shrink-0 font-serif text-lg">
                      ✦
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Vision</h4>
                      <p className="text-sm opacity-60 leading-relaxed">
                        To be India's most trusted interior design studio, known for creating
                        spaces that inspire, endure, and tell authentic stories.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-soft-sage/20 rounded-full flex items-center justify-center flex-shrink-0 font-serif text-lg">
                      ✦
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Promise</h4>
                      <p className="text-sm opacity-60 leading-relaxed">
                        Transparent pricing, on-time delivery, and a collaborative process that
                        puts your comfort and satisfaction first.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="h-[350px] sm:h-[420px] lg:h-[550px] overflow-hidden rounded-xl order-1 lg:order-2"
                variants={fadeRightVariant}
                initial="hidden"
                animate={mission.inView ? 'visible' : 'hidden'}
              >
                <motion.img
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                  src={detailSereneHaven1}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== CORE VALUES ===== */}
        <section
          className="py-section lg:py-desktop-section bg-warm-cream px-6 lg:px-12"
          data-purpose="core-values"
          ref={valuesSection.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16 lg:mb-24"
              variants={fadeUpVariant}
              initial="hidden"
              animate={valuesSection.inView ? 'visible' : 'hidden'}
            >
              <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-3 block">
                What We Stand For
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Our Core Values
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connector line — desktop */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-px border-t border-dashed border-forest-green/20 -z-0" />

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-8 lg:gap-10"
                variants={staggerContainer}
                initial="hidden"
                animate={valuesSection.inView ? 'visible' : 'hidden'}
              >
                {values.map((v) => (
                  <motion.div
                    key={v.num}
                    className="relative z-10 text-center bg-warm-cream px-4"
                    variants={staggerChild}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <motion.div
                      className="w-20 lg:w-24 h-20 lg:h-24 mx-auto bg-soft-sage/30 rounded-full flex items-center justify-center font-serif text-2xl lg:text-3xl mb-6 lg:mb-8"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {v.num}
                    </motion.div>
                    <h4 className="font-serif text-lg lg:text-xl mb-3">{v.title}</h4>
                    <p className="text-xs lg:text-sm opacity-70 leading-relaxed max-w-[240px] mx-auto">
                      {v.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== OUR CORE TEAM ===== */}
        <section
          className="py-section lg:py-desktop-section px-6 lg:px-12"
          data-purpose="team"
          ref={teamSection.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="text-center mb-16 lg:mb-24"
              variants={fadeUpVariant}
              initial="hidden"
              animate={teamSection.inView ? 'visible' : 'hidden'}
            >
              <span className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-3 block">
                The People Behind PI
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Our Core Team
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
              variants={staggerContainer}
              initial="hidden"
              animate={teamSection.inView ? 'visible' : 'hidden'}
            >
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group text-center"
                  variants={staggerChild}
                >
                  {/* Avatar */}
                  <motion.div
                    className="relative mx-auto mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Decorative ring */}
                    <div className="absolute inset-0 w-44 h-44 lg:w-52 lg:h-52 mx-auto rounded-full border-2 border-dashed border-soft-sage/30 -rotate-6 group-hover:rotate-6 transition-transform duration-500" />
                    
                    <div
                      className={`w-40 h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden`}
                    >
                      {/* Initials placeholder — replace with <img> when photos are available */}
                      <span className="text-warm-cream font-serif text-5xl lg:text-6xl opacity-90 select-none">
                        {member.initials}
                      </span>
                    </div>

                    {/* Experience badge */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-forest-green text-warm-cream px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-medium tracking-wide"
                      initial={{ scale: 0 }}
                      animate={teamSection.inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.15, type: 'spring', stiffness: 200 }}
                    >
                      {member.experience}
                    </motion.div>
                  </motion.div>

                  {/* Info */}
                  <h3 className="font-serif text-2xl lg:text-3xl mb-1">{member.name}</h3>
                  <span className="text-soft-sage text-xs lg:text-sm uppercase tracking-widest font-medium block mb-5">
                    {member.role}
                  </span>
                  <p className="text-sm opacity-60 leading-relaxed max-w-sm mx-auto">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section
          className="py-16 lg:py-20 border-y border-forest-green/10 bg-forest-green/[0.02]"
          data-purpose="about-stats"
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
                { value: '150+', label: 'Projects Completed' },
                { value: '6+', label: 'Cities Served' },
                { value: '40+', label: 'Design Awards' },
                { value: '100%', label: 'Commitment' },
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

        {/* ===== CTA BANNER ===== */}
        <section
          className="py-section lg:py-desktop-section px-6 lg:px-12"
          data-purpose="about-cta"
          ref={cta.ref}
        >
          <div className="container mx-auto">
            <motion.div
              className="bg-forest-green text-warm-cream rounded-3xl p-12 md:p-20 lg:p-24 relative overflow-hidden"
              variants={scalePopVariant}
              initial="hidden"
              animate={cta.inView ? 'visible' : 'hidden'}
            >
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-64 h-64 border border-warm-cream/5 rounded-full" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-warm-cream/5 rounded-full" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <motion.span
                    className="text-soft-sage font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block"
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate={cta.inView ? 'visible' : 'hidden'}
                  >
                    Let's Work Together
                  </motion.span>
                  <motion.h2
                    className="font-serif text-4xl md:text-5xl mb-6 leading-tight"
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate={cta.inView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.1 }}
                  >
                    Have a Project in Mind?
                  </motion.h2>
                  <motion.p
                    className="text-base md:text-lg opacity-80 mb-8 leading-relaxed max-w-lg"
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate={cta.inView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.2 }}
                  >
                    Whether it's a cozy apartment makeover or a full-scale commercial fit-out,
                    our team is ready to bring your vision to life. Let's start with a free
                    consultation.
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate={cta.inView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        className="bg-warm-cream text-forest-green px-8 lg:px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity inline-block text-center"
                        to="/contact"
                      >
                        Book a Free Consultation
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        className="border border-warm-cream/40 text-warm-cream px-8 lg:px-10 py-4 rounded-full text-sm font-medium hover:bg-warm-cream/10 transition-all inline-block text-center"
                        to="/projects"
                      >
                        View Our Work
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  className="hidden lg:block h-[350px] overflow-hidden rounded-xl"
                  variants={fadeRightVariant}
                  initial="hidden"
                  animate={cta.inView ? 'visible' : 'hidden'}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    alt="Our Work"
                    className="w-full h-full object-cover"
                    src={detailSereneHaven2}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
          </PageLayout>
  )
}

export default AboutPage
