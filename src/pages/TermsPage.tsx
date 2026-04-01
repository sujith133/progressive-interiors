import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { fadeUpVariant, textRevealVariant, useSectionInView } from '../utils/animations'

const TermsPage = () => {
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
            Terms &amp; Conditions
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

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">1. Agreement to Terms</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            By accessing or using the Progressive Interiors website and engaging our interior design
            services, you agree to be bound by these Terms &amp; Conditions. If you do not agree
            with any part of these terms, please do not use our website or services.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">2. Services</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-4">
            Progressive Interiors provides interior design and consultation services, including but
            not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base opacity-80 mb-8">
            <li>Residential interior design and renovation</li>
            <li>Space planning and layout optimisation</li>
            <li>Material and decor curation</li>
            <li>Custom furniture design and sourcing</li>
            <li>Design consultation and project management</li>
          </ul>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            The scope, timeline, and fees for each project will be detailed in a separate project
            proposal or contract agreed upon by both parties before work commences.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">3. Client Obligations</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base opacity-80 mb-8">
            <li>Provide accurate information about the project site, requirements, and budget.</li>
            <li>Grant reasonable access to the project site for measurements, installations, and inspections.</li>
            <li>Review and approve designs, materials, and proposals within the agreed timelines.</li>
            <li>Make payments as per the agreed schedule outlined in the project contract.</li>
          </ul>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">4. Payments &amp; Billing</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base opacity-80 mb-8">
            <li>A non-refundable booking advance (typically 30–50% of the project fee) is required to commence design work.</li>
            <li>Progress payments will be invoiced at milestones defined in the project contract.</li>
            <li>Final payment is due upon project completion, prior to the formal handover.</li>
            <li>All prices are quoted in Indian Rupees (INR) and are exclusive of applicable GST unless stated otherwise.</li>
            <li>Late payments may incur an interest charge of 1.5% per month on the outstanding amount.</li>
          </ul>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">5. Design Revisions</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            Each project includes a defined number of design revision rounds as specified in the
            project proposal. Additional revisions beyond this scope may be charged at our standard
            hourly rate. Major scope changes requested after design approval may result in revised
            timelines and additional fees.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">6. Intellectual Property</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            All design concepts, drawings, 3D renderings, mood boards, and creative materials
            produced by Progressive Interiors remain our intellectual property until full payment has
            been received. Upon complete payment, the client receives a licence to use the designs
            for the specific project. Designs may not be reproduced, shared, or used for other
            properties without prior written consent.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">7. Cancellation &amp; Refunds</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm lg:text-base opacity-80 mb-8">
            <li>The initial booking advance is non-refundable once design work has commenced.</li>
            <li>Cancellations must be communicated in writing at least 14 days before the next scheduled milestone.</li>
            <li>In case of cancellation, the client is responsible for payment of all work completed up to the date of cancellation, including any committed material or vendor orders.</li>
          </ul>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">8. Warranties &amp; Limitations</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            We strive for the highest quality in our design and execution. However, we do not
            guarantee exact colour matches across different materials and lighting conditions.
            Structural modifications are carried out by licensed contractors, and their work carries
            separate warranties. Progressive Interiors is not liable for delays caused by
            force majeure events, material supply shortages, or client-initiated scope changes.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">9. Liability</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            Progressive Interiors' total liability for any claim arising out of or related to our
            services shall not exceed the total fees paid by the client for the specific project. We
            are not liable for indirect, incidental, or consequential damages.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">10. Portfolio &amp; Photography</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            We reserve the right to photograph completed projects for our portfolio, website, social
            media, and marketing materials. If you prefer your project to remain private, please
            inform us in writing before the project commences.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">11. Governing Law</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-8">
            These Terms &amp; Conditions are governed by and construed in accordance with the laws
            of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in
            Hyderabad, Telangana.
          </p>

          <h2 className="font-serif text-2xl lg:text-3xl mb-4">12. Contact Us</h2>
          <p className="text-sm lg:text-base opacity-80 leading-relaxed mb-2">
            For any questions regarding these Terms &amp; Conditions, please reach out to us:
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

export default TermsPage
