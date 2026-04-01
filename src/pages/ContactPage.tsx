import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import PageLayout from '../components/PageLayout'
import MagneticButton from '../components/MagneticButton'
import { useScrollReveal } from '../hooks/useGSAP'
import {
  useSectionInView,
} from '../utils/animations'


/* ────────────────────────────────────────────
   SVG Icons
   ──────────────────────────────────────────── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

/* ────────────────────────────────────────────
   FAQ Data
   ──────────────────────────────────────────── */
const faqs = [
  {
    question: 'How much does an interior design project cost?',
    answer:
      'Every project is unique. Our fees depend on the scope, size, and complexity of the work. We offer a free initial consultation to understand your needs and provide a tailored quote. Residential projects typically start from ₹8 lakhs for a single room and scale based on the full scope.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'A typical residential project takes 8–16 weeks from concept to reveal, depending on the scale. Space planning and renovation projects may take 12–20 weeks if structural work is involved. We provide a detailed timeline during the concept phase so you always know what to expect.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer:
      'Yes! We offer a complimentary 30-minute discovery call where we discuss your vision, space, and budget. This helps us understand if we\'re the right fit for each other before committing to a full engagement.',
  },
  {
    question: 'Do you work outside Hyderabad?',
    answer:
      'Absolutely. While our studio is based in Hyderabad, we work with clients across India. We have completed projects in Bangalore, Mumbai, Goa, Chennai, Jaipur, and Rishikesh. For out-of-city projects, we schedule regular site visits and use video conferencing for seamless collaboration.',
  },
]

/* ════════════════════════════════════════════
   ContactPage Component — GSAP Enhanced
   ════════════════════════════════════════════ */
const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // GSAP hero
  const heroTagRef = useRef<HTMLSpanElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)
  const heroCTARef = useRef<HTMLDivElement>(null)

  const formReveal = useScrollReveal({ y: 50, stagger: 0.1, childSelector: '.form-item' })
  const infoReveal = useScrollReveal({ y: 50, stagger: 0.1, childSelector: '.info-item' })
  const faqReveal = useScrollReveal({ y: 40, stagger: 0.12, childSelector: '.faq-item' })

  const map = useSectionInView(0.15)
  const cta = useSectionInView(0.25)

  const whatsappUrl =
    'https://wa.me/919052525249?text=Hi%20Progressive%20Interiors!%20I%27m%20interested%20in%20your%20design%20services.'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  // Hero entrance
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.set([heroTagRef.current, heroTitleRef.current, heroSubRef.current, heroCTARef.current], { opacity: 0, y: 60 })
    tl.to(heroTagRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
      .to(heroTitleRef.current, { opacity: 1, y: 0, duration: 1 }, 0.5)
      .to(heroSubRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
      .to(heroCTARef.current, { opacity: 1, y: 0, duration: 0.8 }, 1)
    return () => { tl.kill() }
  }, [])

  return (
    <PageLayout>
      {/* ===== HERO ===== */}
      <section className="relative bg-deep-blue text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="absolute top-20 left-[15%] gold-particle" />
        <div className="absolute top-40 right-[20%] gold-particle" />
        <div className="absolute bottom-20 left-[40%] gold-particle" />

        <div className="container mx-auto px-6 lg:px-12 py-32 lg:py-44 text-center relative z-10">
          <span ref={heroTagRef} className="text-warm-gold font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-6 block">
            Get In Touch
          </span>
          <h1 ref={heroTitleRef} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 max-w-4xl mx-auto">
            Let's Create Something <span className="gradient-text-light">Beautiful</span>
          </h1>
          <p ref={heroSubRef} className="text-base md:text-lg leading-relaxed opacity-75 max-w-2xl mx-auto mb-12">
            Whether you have a clear vision or need help discovering one, we'd love to hear from
            you. Let's start the conversation.
          </p>

          <div ref={heroCTARef} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <MagneticButton
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#20BD5A] transition-colors"
            >
              <WhatsAppIcon />
              Message on WhatsApp
            </MagneticButton>
            <MagneticButton
              as="a"
              href="tel:+919052525249"
              className="inline-flex items-center gap-3 border border-ivory/25 text-ivory px-8 py-4 rounded-full text-sm font-medium hover:bg-ivory/8 transition-all"
            >
              <PhoneIcon />
              Call Us Directly
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ===== CONTACT GRID (Form + Info) ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* LEFT: Form */}
            <div ref={formReveal}>
              <span className="form-item text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
                Send a Message
              </span>
              <h2 className="form-item font-serif text-3xl lg:text-4xl mb-8 leading-tight">
                Tell Us About Your Project
              </h2>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    className="form-item bg-warm-gold/20 border border-warm-gold/30 rounded-2xl p-10 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="text-4xl mb-4 text-gold-dark">✓</div>
                    <h3 className="font-serif text-2xl mb-2">Thank You!</h3>
                    <p className="text-sm opacity-65">We've received your message and will get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" className="form-item space-y-6" onSubmit={handleSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] font-medium mb-2 opacity-55">Full Name *</label>
                        <input type="text" required className="w-full bg-transparent border-b-2 border-deep-blue/15 focus:border-warm-gold/60 py-3 text-sm outline-none transition-colors placeholder:text-deep-blue/30" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] font-medium mb-2 opacity-55">Email Address *</label>
                        <input type="email" required className="w-full bg-transparent border-b-2 border-deep-blue/15 focus:border-warm-gold/60 py-3 text-sm outline-none transition-colors placeholder:text-deep-blue/30" placeholder="you@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] font-medium mb-2 opacity-55">Phone Number</label>
                        <input type="tel" className="w-full bg-transparent border-b-2 border-deep-blue/15 focus:border-warm-gold/60 py-3 text-sm outline-none transition-colors placeholder:text-deep-blue/30" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-[0.15em] font-medium mb-2 opacity-55">Service Interested In</label>
                        <select className="w-full bg-transparent border-b-2 border-deep-blue/15 focus:border-warm-gold/60 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer">
                          <option value="">Select a service</option>
                          <option value="residential">Residential Design</option>
                          <option value="space-planning">Space Planning & Renovation</option>
                          <option value="material-curation">Material & Decor Curation</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-medium mb-2 opacity-55">Your Message *</label>
                      <textarea required rows={5} className="w-full bg-transparent border-b-2 border-deep-blue/15 focus:border-warm-gold/60 py-3 text-sm outline-none transition-colors resize-none placeholder:text-deep-blue/30" placeholder="Tell us about your space, vision, and any specific requirements..." />
                    </div>

                    <MagneticButton type="submit" className="btn-shimmer text-ivory px-10 lg:px-12 py-4 lg:py-5 rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
                      Send Message
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT: Contact Info */}
            <div ref={infoReveal}>
              <span className="info-item text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
                Visit Our Studio
              </span>
              <h2 className="info-item font-serif text-3xl lg:text-4xl mb-10 leading-tight">
                We'd Love to Meet You
              </h2>

              <div className="info-item space-y-6 mb-12">
                <motion.div className="flex items-start gap-5 p-5 bg-deep-blue/[0.03] rounded-xl border border-deep-blue/5" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                  <div className="w-12 h-12 bg-warm-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-deep-blue"><MapPinIcon /></div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Our Studio</h4>
                    <p className="text-sm opacity-55 leading-relaxed">2nd Floor, Brindavan Colony,<br />Lakshmipuram Colony, Rukminipuri Colony,<br />A. S. Rao Nagar, Hyderabad,<br />Secunderabad, Telangana 500062</p>
                  </div>
                </motion.div>

                <motion.a href="mailto:hello@progressiveinteriors.in" className="flex items-start gap-5 p-5 bg-deep-blue/[0.03] rounded-xl border border-deep-blue/5 block" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                  <div className="w-12 h-12 bg-warm-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-deep-blue"><MailIcon /></div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Email Us</h4>
                    <p className="text-sm opacity-55">hello@progressiveinteriors.in</p>
                  </div>
                </motion.a>

                <motion.a href="tel:+919052525249" className="flex items-start gap-5 p-5 bg-deep-blue/[0.03] rounded-xl border border-deep-blue/5 block" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                  <div className="w-12 h-12 bg-warm-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-deep-blue"><PhoneIcon /></div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Call Us</h4>
                    <p className="text-sm opacity-55">+91 90525 25249</p>
                  </div>
                </motion.a>

                <motion.a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-5 bg-[#25D366]/[0.08] rounded-xl border border-[#25D366]/15 block" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#25D366]"><WhatsAppIcon /></div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">WhatsApp</h4>
                    <p className="text-sm opacity-55">Quick chat — typically replies within an hour</p>
                  </div>
                </motion.a>
              </div>

              {/* Social */}
              <div className="info-item">
                <h4 className="uppercase tracking-[0.15em] text-[10px] lg:text-xs font-bold mb-5">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <FacebookIcon />, label: 'Facebook', href: 'https://www.facebook.com/people/Progressive-Interiors/61579745137532/' },
                    { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/progressiveinteriors.in/' },
                    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/progressiveinteriors/' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-deep-blue/[0.06] hover:bg-warm-gold hover:text-deep-blue rounded-full flex items-center justify-center transition-all duration-300 text-deep-blue"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="px-6 lg:px-12 pb-section lg:pb-desktop-section" ref={map.ref}>
        <div className="container mx-auto">
          <motion.div
            className="rounded-2xl overflow-hidden border border-deep-blue/10 shadow-sm"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={map.inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="Progressive Interiors Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.5!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sA.%20S.%20Rao%20Nagar%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px]"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12 bg-deep-blue/[0.02]">
        <div className="container mx-auto max-w-3xl">
          <div ref={useScrollReveal({ y: 40 })} className="text-center mb-14 lg:mb-20">
            <span className="text-gold-dark font-medium tracking-[0.3em] uppercase text-xs lg:text-sm mb-4 block">
              Common Questions
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div ref={faqReveal}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item border border-deep-blue/10 rounded-xl overflow-hidden bg-white mb-4">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-deep-blue/[0.02] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-serif text-lg lg:text-xl pr-4">{faq.question}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 opacity-40">
                    <ChevronDownIcon />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                    >
                      <div className="px-6 pb-6 text-sm lg:text-base opacity-65 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-section lg:py-desktop-section px-6 lg:px-12" ref={cta.ref}>
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
                We're Just a Message <span className="gradient-text-light">Away</span>
              </h2>
              <p className="text-base md:text-lg opacity-70 mb-12 max-w-xl mx-auto leading-relaxed">
                Drop us a message on WhatsApp for a quick response. We typically reply within an
                hour during business hours (Mon–Sat, 10 AM – 7 PM IST).
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <MagneticButton
                  as="a"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 lg:px-12 py-4 lg:py-5 rounded-full text-sm font-medium hover:bg-[#20BD5A] transition-colors"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </MagneticButton>
                <MagneticButton as="a" href="/projects" className="border border-ivory/25 text-ivory px-10 lg:px-14 py-4 lg:py-5 rounded-full text-sm font-medium hover:bg-ivory/8 transition-all">
                  Explore Our Work
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </motion.a>
    </PageLayout>
  )
}

export default ContactPage
