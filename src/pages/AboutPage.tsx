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
import brandStudioWorkspace from '../assets/images/brand-studio-workspace.png'
import detailSereneHaven1 from '../assets/images/detail-serene-haven-1.webp'
import detailSereneHaven2 from '../assets/images/detail-serene-haven-2.webp'

gsap.registerPlugin(ScrollTrigger)

/* ────────────────────────────────────────────
   Team data
   ──────────────────────────────────────────── */
const team = [
  {
    name: 'Syam Chopra',
    role: 'Director',
    initials: 'SC',
    experience: '15+ Years',
    bio: 'Recognized for strong leadership and client-centric collaboration, Syam Chopra thrives in dynamic environments, working closely with architects, contractors, and stakeholders to achieve outstanding results. Whether designing luxury homes, corporate offices, or hospitality spaces, he brings a strategic approach, sharp attention to detail, and a passion for elevating built environments. He has successfully managed end-to-end projects, from conceptual design and space planning to execution and final handover.',
    gradient: 'from-deep-blue to-deep-blue/70',
  },
  {
    name: 'Dilip Kumar',
    role: 'Sales Manager',
    initials: 'DK',
    experience: '10+ Years',
    bio: 'Dilip Kumar brings over a decade of client relationship expertise to Progressive Interiors. He is the first point of contact for new clients and is known for his ability to understand a brief deeply and translate aspirations into actionable project scopes. His straightforward approach, clear communication, and genuine care for client satisfaction have earned him a reputation as the backbone of PI\'s growth.',
    gradient: 'from-warm-gold/80 to-warm-gold/40',
  },
  {
    name: 'Manohar',
    role: 'Senior Designer',
    initials: 'MN',
    experience: '12+ Years',
    bio: 'Manohar is the creative lead behind some of Progressive Interiors\' most celebrated residential and commercial projects. With a background in architecture and a deep love for Indian craft traditions, he brings both structural rigour and artistic sensibility to every project. His expertise in space planning, material selection, and 3D visualisation ensures that what clients see on screen becomes reality without compromise.',
    gradient: 'from-deep-blue/80 to-warm-gold/30',
  },
  {
    name: 'Shreya Gandhi',
    role: 'Junior Designer',
    initials: 'SG',
    experience: '3+ Years',
    bio: 'Shreya Gandhi joined Progressive Interiors with a fresh perspective and a meticulous eye for detail. She specialises in material curation, mood board development, and client presentation design. Her work is characterised by a thoughtful sensitivity to colour and texture, and she brings an up-to-date awareness of global design trends that keeps PI\'s work feeling current and relevant.',
    gradient: 'from-warm-gold/60 to-deep-blue/40',
  },
  {
    name: 'Harishwar Reddy',
    role: 'Junior Designer',
    initials: 'HR',
    experience: '3+ Years',
    bio: 'Harishwar Reddy is a versatile designer with strong technical skills in AutoCAD, SketchUp, and 3D rendering. He manages site coordination and working drawing production for ongoing projects, ensuring that design intent is faithfully communicated to craftsmen and contractors. His precision on-site and collaborative spirit make him an essential part of PI\'s project delivery team.',
    gradient: 'from-deep-blue/60 to-warm-gold/50',
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
   AboutPage Component — GSAP Enhanced
   ════════════════════════════════════════════ */
const AboutPage = () => {
  // GSAP hero animation
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroTagRef = useRef<HTMLSpanElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)

  const storyReveal = useScrollReveal({ y: 60, stagger: 0.12, childSelector: '.story-item' })
  const missionReveal = useScrollReveal({ y: 60, stagger: 0.12, childSelector: '.mission-item' })
  const valuesReveal = useScrollReveal({ y: 50, stagger: 0.15, childSelector: '.value-card' })
  const teamReveal = useScrollReveal({ y: 60, stagger: 0.2, childSelector: '.team-member' })

  const stats = useSectionInView(0.25)
  const cta = useSectionInView(0.25)

  // Hero entrance
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.set([heroTagRef.current, heroTitleRef.current, heroSubRef.current], {
      opacity: 0,
      y: 60,
    })

    tl.to(heroTagRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .to(heroTitleRef.current, { opacity: 1, y: 0, duration: 1 }, 0.5)
      .to(heroSubRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)

    return () => { tl.kill() }
  }, [])

  return (
    <PageLayout>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-deep-blue text-ivory overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Floating gold particles */}
        <div className="absolute top-20 left-[15%] gold-particle" />
        <div className="absolute top-40 right-[20%] gold-particle" />
        <div className="absolute bottom-20 left-[40%] gold-particle" />

        <div className="container mx-auto px-6 lg:px-12 py-32 lg:py-44 text-center relative z-10">
          <span
            ref={heroTagRef}
            className="text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-6 block"
          >
            About Us
          </span>
          <h1
            ref={heroTitleRef}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 max-w-4xl mx-auto"
          >
            Designing Spaces, Building <span className="gradient-text-light">Stories</span>
          </h1>
          <p
            ref={heroSubRef}
            className="text-base md:text-lg leading-relaxed opacity-75 max-w-2xl mx-auto"
          >
            Progressive Interiors is a Hyderabad-based design studio that transforms ordinary
            spaces into extraordinary experiences. With over 15 years of combined expertise,
            we bring vision, craft, and heart to every project.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ParallaxImage
              src={brandStudioWorkspace}
              alt="Our Studio"
              className="h-[350px] sm:h-[420px] lg:h-[550px] rounded-2xl"
              speed={-0.15}
            />

            <div ref={storyReveal}>
              <span className="story-item text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="story-item font-serif text-3xl lg:text-5xl mb-6 leading-tight">
                Born from a Passion for Purposeful Design
              </h2>
              <p className="story-item text-base lg:text-lg opacity-75 leading-relaxed mb-6">
                Progressive Interiors was founded with a simple belief — that every space has the
                potential to inspire. From our studio in Hyderabad, we've grown into a team of
                designers, planners, and craftsmen who share a deep commitment to quality and
                client satisfaction.
              </p>
              <p className="story-item text-sm opacity-55 leading-relaxed mb-8">
                What started as a small residential design practice has evolved into a
                full-service interior design studio serving clients across India. From luxury
                homes and modern apartments to corporate offices and retail spaces, we bring the
                same passion and precision to every project — no matter the scale.
              </p>
              <div className="story-item flex gap-12">
                <div>
                  <span className="block font-serif text-3xl lg:text-4xl mb-1 text-gold-dark">200+</span>
                  <span className="text-[10px] lg:text-xs uppercase tracking-[0.15em] opacity-45 font-medium">Projects</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl lg:text-4xl mb-1 text-gold-dark">15+</span>
                  <span className="text-[10px] lg:text-xs uppercase tracking-[0.15em] opacity-45 font-medium">Years</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl lg:text-4xl mb-1 text-gold-dark">98%</span>
                  <span className="text-[10px] lg:text-xs uppercase tracking-[0.15em] opacity-45 font-medium">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-section lg:py-desktop-section bg-deep-blue text-ivory px-6 lg:px-12 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div ref={missionReveal} className="max-w-lg order-2 lg:order-1">
              <span className="mission-item text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
                Our Mission
              </span>
              <h2 className="mission-item font-serif text-3xl lg:text-5xl mb-6 leading-tight">
                Elevating Everyday Living Through Thoughtful Design
              </h2>
              <p className="mission-item text-base lg:text-lg opacity-80 leading-relaxed mb-8">
                We believe that great design isn't just about aesthetics — it's about how a space
                makes you feel. Our mission is to create interiors that are not only visually
                stunning but also deeply functional, sustainable, and reflective of the people
                who inhabit them.
              </p>

              <div className="mission-item space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-warm-gold/20 rounded-full flex items-center justify-center flex-shrink-0 font-serif text-lg text-gold-dark">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Vision</h4>
                    <p className="text-sm opacity-55 leading-relaxed">
                      To be India's most trusted interior design studio, known for creating
                      spaces that inspire, endure, and tell authentic stories.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-warm-gold/20 rounded-full flex items-center justify-center flex-shrink-0 font-serif text-lg text-gold-dark">
                    ✦
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Promise</h4>
                    <p className="text-sm opacity-55 leading-relaxed">
                      Transparent pricing, on-time delivery, and a collaborative process that
                      puts your comfort and satisfaction first.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <ParallaxImage
                src={detailSereneHaven1}
                alt="Our Mission"
                className="h-[350px] sm:h-[420px] lg:h-[550px] rounded-2xl"
                speed={-0.15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-section lg:py-desktop-section bg-ivory px-6 lg:px-12">
        <div className="container mx-auto">
          <div ref={useScrollReveal({ y: 40 })} className="text-center mb-16 lg:mb-24">
            <span className="text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              What We Stand For
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-14 left-0 w-full h-px border-t border-dashed border-deep-blue/15 -z-0" />

            <div ref={valuesReveal} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-8 lg:gap-10">
              {values.map((v) => (
                <motion.div
                  key={v.num}
                  className="value-card relative z-10 text-center bg-ivory px-4"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className="w-20 lg:w-28 h-20 lg:h-28 mx-auto bg-deep-blue/[0.06] rounded-full flex items-center justify-center font-serif text-2xl lg:text-3xl mb-6 lg:mb-8 text-deep-blue border border-deep-blue/10"
                    variants={glowPulseVariant}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {v.num}
                  </motion.div>
                  <h4 className="font-serif text-lg lg:text-xl mb-3">{v.title}</h4>
                  <p className="text-xs lg:text-sm opacity-60 leading-relaxed max-w-[240px] mx-auto">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR CORE TEAM ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12">
        <div className="container mx-auto">
          <div ref={useScrollReveal({ y: 40 })} className="text-center mb-16 lg:mb-24">
            <span className="text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              The People Behind PI
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Our Core <span className="gradient-text">Team</span>
            </h2>
          </div>

          <div ref={teamReveal} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {team.map((member) => (
              <div key={member.name} className="team-member group text-center">
                {/* Avatar */}
                <motion.div
                  className="relative mx-auto mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="absolute inset-0 w-44 h-44 lg:w-52 lg:h-52 mx-auto rounded-full border-2 border-dashed border-warm-gold/25 -rotate-6 group-hover:rotate-6 transition-transform duration-500" />
                  <div className={`w-40 h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden`}>
                    <span className="text-ivory font-serif text-5xl lg:text-6xl opacity-90 select-none">
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-warm-gold text-deep-blue px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-medium tracking-wide">
                    {member.experience}
                  </div>
                </motion.div>

                <h3 className="font-serif text-2xl lg:text-3xl mb-1">{member.name}</h3>
                <span className="text-gold-dark text-xs lg:text-sm uppercase tracking-[0.15em] font-medium block mb-5">
                  {member.role}
                </span>
                <p className="text-sm opacity-55 leading-relaxed max-w-sm mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
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
              { value: '200+', label: 'Projects Completed' },
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
                  className="block font-serif text-4xl lg:text-5xl mb-2 text-warm-gold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={stats.inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] opacity-45 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent" />
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12" ref={cta.ref}>
        <div className="container mx-auto">
          <motion.div
            className="bg-gradient-to-br from-deep-blue via-deep-blue to-[#1a2f3d] text-ivory rounded-3xl p-12 md:p-20 lg:p-24 relative overflow-hidden"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={cta.inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
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

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div ref={useScrollReveal({ y: 40, stagger: 0.1, childSelector: '.cta-item' })}>
                <span className="cta-item text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
                  Let's Work Together
                </span>
                <h2 className="cta-item font-serif text-4xl md:text-5xl mb-6 leading-tight">
                  Have a Project in Mind?
                </h2>
                <p className="cta-item text-base md:text-lg opacity-75 mb-8 leading-relaxed max-w-lg">
                  Whether it's a cozy apartment makeover or a full-scale commercial fit-out,
                  our team is ready to bring your vision to life. Let's start with a free consultation.
                </p>
                <div className="cta-item flex flex-col sm:flex-row gap-4">
                  <MagneticButton
                    as="a"
                    href="/contact"
                    className="bg-warm-gold text-deep-blue px-8 lg:px-10 py-4 rounded-full text-sm font-semibold hover:shadow-[0_8px_30px_rgba(248,217,132,0.4)] transition-shadow text-center"
                  >
                    Book a Free Consultation
                  </MagneticButton>
                  <MagneticButton
                    as="a"
                    href="/projects"
                    className="border border-ivory/25 text-ivory px-8 lg:px-10 py-4 rounded-full text-sm font-medium hover:bg-ivory/8 transition-all text-center"
                  >
                    View Our Work
                  </MagneticButton>
                </div>
              </div>

              <div className="hidden lg:block">
                <ParallaxImage
                  src={detailSereneHaven2}
                  alt="Our Work"
                  className="h-[350px] rounded-2xl"
                  speed={-0.1}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

export default AboutPage
