import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { fadeUpVariant, textRevealVariant, useSectionInView } from '../utils/animations'

const PrivacyPolicyPage = () => {
  const hero = useSectionInView(0.15)
  const content = useSectionInView(0.1)

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="bg-deep-blue text-ivory py-24 lg:py-32 px-6 lg:px-12 relative overflow-hidden"
        ref={hero.ref}
      >
        {/* Floating gold particles */}
        <div className="absolute top-20 left-[15%] gold-particle" />
        <div className="absolute top-40 right-[20%] gold-particle" />

        <div className="container mx-auto text-center">
          <motion.span
            className="text-warm-gold font-medium tracking-widest uppercase text-xs lg:text-sm mb-4 block"
            variants={fadeUpVariant}
            initial="hidden"
            animate={hero.inView ? 'visible' : 'hidden'}
          >
            Legal
          </motion.span>
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
            variants={textRevealVariant}
            initial="hidden"
            animate={hero.inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-section lg:py-desktop-section px-6 lg:px-12"
        ref={content.ref}
      >
        <motion.div
          className="container mx-auto max-w-3xl prose prose-lg"
          variants={fadeUpVariant}
          initial="hidden"
          animate={content.inView ? 'visible' : 'hidden'}
        >
          <p className="text-sm opacity-50 mb-8">Last updated: March 2025</p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">1. Introduction</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            Progressive Interiors ("we," "our," or "us") respects your privacy and is committed to
            protecting your personal data. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website, engage our services,
            or communicate with us.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">2. Information We Collect</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base opacity-80 mb-8">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and postal address provided through our contact form or during consultations.</li>
            <li><strong>Project Details:</strong> Information about your property, design preferences, budget range, and project requirements shared during our discovery sessions.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, browser type, and referring URLs.</li>
            <li><strong>Cookies &amp; Analytics:</strong> We use cookies and similar tracking technologies to improve your browsing experience and analyse site traffic.</li>
          </ul>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base opacity-80 mb-8">
            <li>To respond to your enquiries and provide consultations.</li>
            <li>To deliver and manage interior design services you have engaged us for.</li>
            <li>To send project updates, invoices, and service-related communications.</li>
            <li>To improve our website, services, and customer experience.</li>
            <li>To send promotional content or newsletters (only with your explicit consent; you may opt out at any time).</li>
          </ul>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">4. Data Sharing &amp; Disclosure</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information. We may share information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base opacity-80 mb-8">
            <li><strong>Service Partners:</strong> Trusted contractors, vendors, and artisans involved in executing your project (limited to project-relevant details only).</li>
            <li><strong>Technology Providers:</strong> Hosting, analytics, and CRM tools that help us operate our website and manage client relationships.</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal proceedings.</li>
          </ul>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">5. Data Security</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            We implement industry-standard security measures to protect your information from
            unauthorised access, alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">6. Your Rights</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base opacity-80 mb-8">
            <li>Access, correct, or delete your personal data.</li>
            <li>Withdraw consent for marketing communications.</li>
            <li>Request a copy of the data we hold about you.</li>
            <li>Lodge a complaint with a data protection authority if you believe your rights have been violated.</li>
          </ul>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">7. Cookies</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            Our website uses cookies to enhance functionality and analyse usage patterns. You can
            control cookie preferences through your browser settings. Disabling cookies may affect
            certain features of the website.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">8. Third-Party Links</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            Our website may contain links to third-party websites (e.g., social media platforms). We
            are not responsible for the privacy practices or content of these external sites.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">9. Changes to This Policy</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">10. Contact Us</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-2">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-deep-blue/[0.03] border border-deep-blue/10 rounded-xl p-6 text-sm opacity-80 leading-relaxed">
            <p><strong>Progressive Interiors</strong></p>
            <p>2nd Floor, Brindavan Colony, A. S. Rao Nagar, Hyderabad, Telangana 500062</p>
            <p>Email: hello@progressiveinteriors.in</p>
            <p>Phone: +91 90525 25249</p>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
}

export default PrivacyPolicyPage
