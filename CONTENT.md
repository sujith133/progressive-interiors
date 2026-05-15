# Progressive Interiors — Website Content (Single Source of Truth)

> **How to use this file:**
> All website content lives here. When you change anything in this file, update the corresponding component/page listed in each section's `> Source:` line. Common data (brand, contact, nav, social) is used across multiple files — those are marked with `> Used in:` listing every dependent file.

---

## 1. BRAND

> Used in: `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/pages/AboutPage.tsx`, `src/pages/HomePage.tsx`, `index.html` (title/meta)

| Field | Value |
|---|---|
| Brand Name | Progressive Interiors |
| Short Name | PI |
| Tagline | Designing Spaces That Reflect You |
| Sub-tagline | Bespoke interiors crafted with a focus on tranquility, functionality, and timeless elegance. |
| Footer Description | Refining the art of living through sustainable, minimalist design. Based in Hyderabad, serving clients nationwide. |
| Logo Path | `/logo.png` |
| Logo Alt Text | Progressive Interiors |
| Copyright | © 2025 Progressive Interiors. All rights reserved. |

---

## 2. CONTACT INFORMATION

> Used in: `src/components/Footer.tsx`, `src/pages/ContactPage.tsx`, `src/components/Header.tsx` (WhatsApp button)

| Field | Value |
|---|---|
| Email | sales@progressiveinteriors.in |
| Phone | +91 90525 25249 |
| WhatsApp URL | https://wa.me/919052525249 |
| Business Hours | Mon–Sat, 10 AM – 7 PM IST |
| Studio Address | 2nd Floor, Brindavan Colony, Lakshmipuram Colony, Rukminipuri Colony, A. S. Rao Nagar, Hyderabad, Secunderabad, Telangana 500062 |
| City | Hyderabad, India |

---

## 3. NAVIGATION

> Used in: `src/components/Header.tsx`, `src/components/Footer.tsx`

### Main Navigation Links

| Label | Route |
|---|---|
| Home | `/` |
| About Us | `/about` |
| Our Services | `/services` |
| Our Projects | `/projects` |
| Contact | `/contact` |

### Footer Navigation Links

| Label | Route |
|---|---|
| Our Projects | `/projects` |
| Our Services | `/services` |
| About Us | `/about` |
| Contact | `/contact` |

### Legal Pages

| Label | Route |
|---|---|
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-and-conditions` |

---

## 4. SOCIAL MEDIA

> Used in: `src/components/Footer.tsx`, `src/pages/ContactPage.tsx`

| Platform | URL |
|---|---|
| Facebook | https://www.facebook.com/people/Progressive-Interiors/61579745137532/ |
| Instagram | https://www.instagram.com/progressiveinteriors.in/ |
| LinkedIn | https://www.linkedin.com/company/progressiveinteriors/ |

---

## 5. STATISTICS

### Home Page Stats

> Source: `src/pages/HomePage.tsx`

| Stat | Value |
|---|---|
| Years Experience | 15+ Years Experience |
| Projects Delivered | 200+ Projects Delivered |
| Client Satisfaction | 99% Client Satisfaction |
| Design Experts | 12 Design Experts |

### About Page Stats (Primary)

> Source: `src/pages/AboutPage.tsx`

| Stat | Value |
|---|---|
| Projects | 200+ Projects |
| Years | 15+ Years |
| Satisfaction | 98% Satisfaction |

### About Page Stats (Secondary Grid)

> Source: `src/pages/AboutPage.tsx`

| Stat | Value |
|---|---|
| Projects Completed | 200+ Projects Completed |
| Cities Served | 6+ Cities Served |
| Design Awards | 40+ Design Awards |
| Commitment | 100% Commitment |

### Services Page Stats

> Source: `src/pages/ServicesPage.tsx`

| Stat | Value |
|---|---|
| Projects Delivered | 200+ Projects Delivered |
| Years Experience | 15+ Years Experience |
| Client Satisfaction | 98% Client Satisfaction |
| Design Awards | 40+ Design Awards |

---

## 6. HERO SECTIONS

> Source: Individual page files listed under each hero.

### Home Page Hero

> Source: `src/pages/HomePage.tsx`

- **Overline:** Progressive Interiors
- **Heading:** Designing Spaces That Reflect You
- **Body:** Bespoke interiors crafted with a focus on tranquility, functionality, and timeless elegance.
- **Primary CTA:** View Our Portfolio → `/projects`
- **Secondary CTA:** Book Consultation → `/contact`
- **Hero Image:** `/src/assets/images/hero-living-room.webp` | alt: `Luxury Interior`

### About Page Hero

> Source: `src/pages/AboutPage.tsx`

- **Overline:** About Us
- **Heading:** Designing Spaces, Building Stories
- **Body:** Progressive Interiors is a Hyderabad-based design studio that transforms ordinary spaces into extraordinary experiences. With over 15 years of combined expertise, we bring vision, craft, and heart to every project.

### Services Page Hero

> Source: `src/pages/ServicesPage.tsx`

- **Overline:** What We Do
- **Heading:** Crafting Spaces That Inspire
- **Body:** From concept to final reveal, we offer a complete spectrum of interior design services tailored to your lifestyle. Every project is a unique collaboration between vision, craft, and the art of refined living.
- **Hero Image:** `/src/assets/images/service-residential-design.webp` | alt: `Our Services`

### Projects Page Hero

> Source: `src/pages/ProjectsPage.tsx`

- **Overline:** Our Portfolio
- **Heading:** Spaces We've Brought to Life
- **Body:** Each project is a unique narrative — a collaboration between vision, craft, and the art of living well. Explore our curated collection of interiors.
- **Hero Image:** `/src/assets/images/projects-hero-collage.webp` | alt: `Our Projects`

### Contact Page Hero

> Source: `src/pages/ContactPage.tsx`

- **Overline:** Get In Touch
- **Heading:** Let's Create Something Beautiful
- **Body:** Whether you have a clear vision or need help discovering one, we'd love to hear from you. Let's start the conversation.

---

## 7. CALL-TO-ACTION BUTTONS

> Used in: multiple pages — see individual CTAs in each section above and below.

| Label | Route / Action |
|---|---|
| View Our Portfolio | `/projects` |
| Book Consultation | `/contact` |
| Book a Free Discovery Call | `/contact` |
| Start Your Project | `/contact` |
| View All Projects | `/projects` |
| Book a Free Consultation | `/contact` |
| Browse Services | `/services` |
| Discover Our Story → | `/about` |
| View Our Work | `/projects` |
| Explore Our Work | `/projects` |
| Back to Home | `/` |
| Chat on WhatsApp | `https://wa.me/919052525249` |
| Call Us Directly | `tel:+919052525249` |
| Send Message | form submit |

---

## 8. SERVICES

> Source: `src/pages/ServicesPage.tsx`, `src/pages/HomePage.tsx` (summary cards)

### Service 1 — Residential Design

- **Name:** Residential Design
- **Tagline:** Complete Home Transformations
- **Image:** `/src/assets/images/service-residential-design.webp` | alt: `Residential Interior Design`
- **Description:** From heritage homes to modern apartments, we create living spaces that balance beauty with practicality. Our residential design service covers every aspect of your home — from architectural detailing to the final cushion placement.
- **Inclusions:**
  - Space planning & layout optimization
  - Custom furniture design & sourcing
  - Lighting design & automation
  - Color palette & material selection
  - Art curation & styling

### Service 2 — Space Planning & Renovation

- **Name:** Space Planning & Renovation
- **Tagline:** Optimized Layouts & Structural Upgrades
- **Image:** `/src/assets/images/service-space-planning.webp` | alt: `Space Planning & Renovation`
- **Description:** Great design starts with great bones. We analyze your space's potential and develop intelligent floor plans that enhance flow, maximize utility, and respect the original architecture — whether it's a compact city flat or a sprawling bungalow.
- **Inclusions:**
  - Architectural floor plan redesign
  - Structural modification consultation
  - Kitchen & bathroom layout planning
  - Storage solutions & built-ins
  - Contractor coordination & project management

### Service 3 — Material & Decor Curation

- **Name:** Material & Decor Curation
- **Tagline:** Hand-Picked Finishes & Furnishings
- **Image:** `/src/assets/images/service-material-curation.webp` | alt: `Material & Decor Curation`
- **Description:** Every surface, fabric, and fixture tells a story. We source materials from trusted artisans across India and the world — handwoven textiles, locally quarried stone, sustainably harvested timber, and bespoke hardware — to create interiors with soul.
- **Inclusions:**
  - Fabric, tile & stone selection
  - Artisan & vendor sourcing
  - Furniture procurement & custom orders
  - Textile & upholstery curation
  - Sustainability-focused material alternatives

### Service 4 — Commercial Design

- **Name:** Commercial Design
- **Tagline:** Workspaces That Work Beautifully
- **Image:** `/src/assets/images/service-commercial-design.webp` | alt: `Commercial Interior Design`
- **Description:** From corporate headquarters to boutique retail, we design commercial spaces that align with your brand, support your people, and impress your clients. Our commercial design service covers the full spectrum — from open-plan offices and executive suites to showrooms, hospitality lounges, and tech campuses.
- **Inclusions:**
  - Corporate office & fit-out design
  - Brand identity integration
  - Ergonomic workspace planning
  - Retail & showroom design
  - Hospitality & F&B interior design

---

## 9. DESIGN PROCESS

### Home Page Process (4 Steps)

> Source: `src/pages/HomePage.tsx`

**Section Title:** The PI Way

| # | Step | Description |
|---|---|---|
| 1 | Inquiry | Understanding your vision and the spatial possibilities. |
| 2 | Concept | Moodboards, material selection, and structural layouts. |
| 3 | Design | 3D Visualizations and technical drawings for production. |
| 4 | Reveal | Final styling and the keys to your new sanctuary. |

### Services Page Process (5 Steps)

> Source: `src/pages/ServicesPage.tsx`

| # | Step | Description |
|---|---|---|
| 1 | Discovery | We listen to your vision, study the space, and understand your lifestyle and aspirations. |
| 2 | Concept | Moodboards, material samples, and spatial layouts bring the vision to life on paper. |
| 3 | Design Development | 3D visualizations, technical drawings, and detailed specifications for every element. |
| 4 | Execution | Our trusted craftsmen and contractors bring the design to reality with precision. |
| 5 | Reveal | Final styling, walk-through, and the keys to your beautifully transformed space. |

---

## 10. TEAM MEMBERS

> Source: `src/pages/AboutPage.tsx`

### Member 1

- **Name:** Syam Chopra
- **Role:** Director
- **Experience:** 15+ Years
- **Bio:** Recognized for strong leadership and client-centric collaboration, Syam Chopra thrives in dynamic environments, working closely with architects, contractors, and stakeholders to achieve outstanding results. Whether designing luxury homes, corporate offices, or hospitality spaces, he brings a strategic approach, sharp attention to detail, and a passion for elevating built environments. He has successfully managed end-to-end projects, from conceptual design and space planning to execution and final handover.

### Member 2

- **Name:** Dilip Kumar
- **Role:** Sales Manager
- **Experience:** 10+ Years
- **Bio:** Dilip Kumar brings over a decade of client relationship expertise to Progressive Interiors. He is the first point of contact for new clients and is known for his ability to understand a brief deeply and translate aspirations into actionable project scopes. His straightforward approach, clear communication, and genuine care for client satisfaction have earned him a reputation as the backbone of PI's growth.

### Member 3

- **Name:** Manohar
- **Role:** Senior Designer
- **Experience:** 12+ Years
- **Bio:** Manohar is the creative lead behind some of Progressive Interiors' most celebrated residential and commercial projects. With a background in architecture and a deep love for Indian craft traditions, he brings both structural rigour and artistic sensibility to every project.

### Member 4

- **Name:** Shreya Gandhi
- **Role:** Junior Designer
- **Experience:** 3+ Years
- **Bio:** Shreya Gandhi specialises in material curation, mood board development, and client presentation design. Her work is characterised by a thoughtful sensitivity to colour and texture, and she brings an up-to-date awareness of global design trends.

### Member 5

- **Name:** Harishwar Reddy
- **Role:** Junior Designer
- **Experience:** 3+ Years
- **Bio:** Harishwar Reddy is a versatile designer with strong technical skills in AutoCAD, SketchUp, and 3D rendering. He manages site coordination and working drawing production, ensuring that design intent is faithfully communicated to craftsmen and contractors.

---

## 11. CORE VALUES

> Source: `src/pages/AboutPage.tsx`

| # | Title | Description |
|---|---|---|
| 1 | Client-Centric Design | Every space begins with listening. We design around your lifestyle, preferences, and aspirations — not trends. |
| 2 | Craftsmanship First | We partner with skilled artisans across India, valuing handmade quality and attention to detail in every element. |
| 3 | Sustainable Choices | From locally sourced materials to energy-efficient planning, sustainability is woven into every design decision. |
| 4 | End-to-End Excellence | From the first sketch to the final cushion, we manage every detail so you can enjoy the journey, not just the result. |

---

## 12. MISSION, VISION & PROMISE

> Source: `src/pages/AboutPage.tsx`

### Mission

**Title:** Elevating Everyday Living Through Thoughtful Design

We believe that great design isn't just about aesthetics — it's about how a space makes you feel. Our mission is to create interiors that are not only visually stunning but also deeply functional, sustainable, and reflective of the people who inhabit them.

### Vision

To be India's most trusted interior design studio, known for creating spaces that inspire, endure, and tell authentic stories.

### Promise

Transparent pricing, on-time delivery, and a collaborative process that puts your comfort and satisfaction first.

---

## 13. DESIGN PHILOSOPHY

> Source: `src/pages/AboutPage.tsx`

### Pillar 1 — Rooted in Indian Craft, Refined by Modern Vision

We believe great interiors emerge from a dialogue between heritage and modernity. Our designs draw on India's rich traditions of craftsmanship — block printing, stone carving, handloom weaving — and reinterpret them through a contemporary lens.

Sustainability is not an afterthought; it's woven into every material choice. We prioritize locally sourced, low-impact materials and work with artisan communities across India to bring authenticity and soul to every project.

- **Image:** `/src/assets/images/brand-studio-workspace.png` | alt: `Design Philosophy`

### Pillar 2 — Client-First Process: Collaborative, Transparent, Tailored

Every project begins with listening. We invest time understanding not just your aesthetic preferences, but how you live, work, and entertain. The result is a space that feels intuitively yours from the moment you step in.

Our process is completely transparent — from budgets to timelines. You'll have a dedicated project manager, regular progress updates, and full visibility into every decision. No surprises, just beautiful spaces delivered on time.

- **Image:** `/src/assets/images/brand-studio-workspace.png` | alt: `Client-First Process`

---

## 14. COMPANY STORY

> Source: `src/pages/AboutPage.tsx`

**Section Title:** Our Story

**Sub-title:** Born from a Passion for Purposeful Design

Progressive Interiors was founded with a simple belief — that every space has the potential to inspire. From our studio in Hyderabad, we've grown into a team of designers, planners, and craftsmen who share a deep commitment to quality and client satisfaction.

What started as a small residential design practice has evolved into a full-service interior design studio serving clients across India. From luxury homes and modern apartments to corporate offices and retail spaces, we bring the same passion and precision to every project — no matter the scale.

- **Image:** `/src/assets/images/brand-studio-workspace.png` | alt: `Our Studio`

---

## 15. PROJECTS

> Source: `src/data/projects.ts`, `src/pages/ProjectsPage.tsx`, `src/pages/ProjectDetailPage.tsx`

### Project Categories (filter tabs)

- All
- Residential
- Commercial
- Hospitality

---

### Project 1 — Ananda Villa

- **ID / Slug:** `ananda-villa`
- **Category:** Residential
- **Location:** Bangalore, India
- **Tagline:** A spa-inspired sanctuary blending natural stone with warm wood
- **Scope:** Full Interior Design & Landscaping
- **Thumbnail:** `/src/assets/images/project-serene-haven.webp`
- **Detail Images:**
  - `/src/assets/images/detail-serene-haven-1.webp`
  - `/src/assets/images/detail-serene-haven-2.webp`
- **Description:** Nestled in the lush outskirts of Bangalore, Ananda Villa is a testament to our philosophy of harmonizing nature with refined living. Every element — from the hand-selected Rajasthani sandstone cladding to the custom-milled teak wood joinery — was chosen to evoke a sense of calm and permanence. The open floor plan flows seamlessly between indoor and outdoor spaces, with floor-to-ceiling glass walls framing the garden and pool beyond. We curated a palette of warm creams, mineral greys, and sage greens to create an atmosphere that breathes tranquility.

---

### Project 2 — Kala Loft

- **ID / Slug:** `kala-loft`
- **Category:** Residential
- **Location:** Mumbai, India
- **Tagline:** Industrial heritage meets modern comfort in this transformed warehouse space
- **Scope:** Adaptive Reuse & Interior Design
- **Thumbnail:** `/src/assets/images/project-urban-loft.webp`
- **Detail Images:**
  - `/src/assets/images/detail-urban-loft-1.webp`
  - `/src/assets/images/detail-urban-loft-2.webp`
- **Description:** What was once a century-old textile warehouse in Mumbai's Lower Parel has been reimagined as a stunning contemporary loft. Kala Loft celebrates the raw beauty of exposed brick and original cast-iron columns while introducing modern warmth through bespoke walnut cabinetry, handwoven dhurrie rugs, and statement brass lighting. The double-height living space, anchored by a monumental bookshelf wall, serves as both a living area and a gallery for the client's contemporary Indian art collection.

---

### Project 3 — Samudra Retreat

- **ID / Slug:** `samudra-retreat`
- **Category:** Residential
- **Location:** Goa, India
- **Tagline:** Bright, breezy coastal living with natural textures and ocean-inspired palette
- **Scope:** Interior Design & Custom Furniture
- **Thumbnail:** `/src/assets/images/project-coastal-retreat.webp`
- **Description:** Perched on the Goa coastline, Samudra Retreat captures the essence of relaxed coastal luxury. The design draws inspiration from the surrounding sea and sky — whitewashed lime-plastered walls, reclaimed driftwood accents, and hand-loomed cotton textiles in indigo and ivory. We designed each room to frame the ocean view, using wide verandahs, sliding folding doors, and carefully positioned mirrors to bring the outdoors in. The result is a home that feels like a permanent holiday.

---

### Project 4 — Vanam Studio

- **ID / Slug:** `vanam-studio`
- **Category:** Commercial
- **Location:** Chennai, India
- **Tagline:** A creative workspace where nature and design coexist harmoniously
- **Scope:** Commercial Interior Design
- **Thumbnail:** `/src/assets/images/project-botanical-studio.webp`
- **Description:** Vanam Studio was born from the belief that a workspace surrounded by greenery fosters sharper creativity and deeper focus. Located in a converted bungalow in Chennai's Adyar neighborhood, this design studio features a central atrium with a living tree, moss walls, and an abundance of trailing plants. We balanced the biophilic vision with functional workspaces — soundproofed meeting pods, adjustable-height desks, and a curated material library — all in a palette of warm terracotta, deep greens, and natural pine.

---

### Project 5 — Dharohar Manor

- **ID / Slug:** `dharohar-manor`
- **Category:** Residential
- **Location:** Jaipur, India
- **Tagline:** Timeless elegance restored with contemporary functionality
- **Scope:** Heritage Restoration & Interior Design
- **Thumbnail:** `/src/assets/images/project-heritage-manor.webp`
- **Description:** Dharohar Manor is a loving restoration of a colonial-era estate in Jaipur. We preserved the original arched doorways, ornate jali screens, and vintage terrazzo floors while introducing contemporary Indian design — Channapatna-turned furniture legs, block-printed cushions from local artisans, and custom brass light fixtures inspired by traditional diyas. The grand dining hall, with its 14-foot ceilings and restored crystal chandelier, sits alongside a modern Italian kitchen — a dialogue between heritage and today.

---

### Project 6 — Shanti Suite

- **ID / Slug:** `shanti-suite`
- **Category:** Hospitality
- **Location:** Rishikesh, India
- **Tagline:** Zen-inspired tranquility for a boutique hotel experience
- **Scope:** Hospitality Interior Design
- **Thumbnail:** `/src/assets/images/project-zen-garden-suite.webp`
- **Description:** Designed for a boutique wellness resort in Rishikesh, Shanti Suite draws on the meditative spirit of the Himalayas. Each room is a study in restraint — low platform beds in reclaimed sal wood, hand-plastered clay walls, and floor-to-ceiling windows framing the Ganges valley. We introduced subtle luxury through handwoven Pashmina throws, hammered copper basin sinks, and a private meditation alcove with ambient candlelight. The design invites guests to disconnect and rediscover stillness.

---

## 16. TESTIMONIALS

### Home Page Testimonials

> Source: `src/pages/HomePage.tsx`

| # | Name | Project | Quote | Rating |
|---|---|---|---|---|
| 1 | Gauri Shankar | Amaravathi Grand, Hyderabad | "The level of craft and the peaceful atmosphere Progressive Interiors created in our home is truly unmatched. Every detail feels intentional." | ★★★★★ |
| 2 | Kavya Reddy | My Home Avatar, Hyderabad | "Working with PI was effortless. They understood exactly what we wanted — a modern home that still has the warmth of Indian living." | ★★★★★ |
| 3 | Bimal Sharma | Corporate Fit-Out, Hyderabad | "Professional, creative, and deeply attentive. Our office now feels like a place people actually want to come to work." | ★★★★★ |

### Services Page Testimonials

> Source: `src/pages/ServicesPage.tsx`

| # | Name | Project | Quote | Rating |
|---|---|---|---|---|
| 1 | Gauri Shankar | Amaravathi Grand, Hyderabad | "Progressive Interiors transformed our Hyderabad home into something extraordinary. Their eye for Indian craft and their attention to every detail is simply unparalleled." | ★★★★★ |
| 2 | Kavitha Nair | Commercial Fit-Out, Hyderabad | "Working with PI was effortless. They understood our need for a modern workspace that still felt warm and welcoming. Our team now loves coming to the office!" | ★★★★★ |
| 3 | Bimal Sharma | Rainbow Vistas, Hyderabad | "From the first mood board to the final reveal, everything was transparent and exciting. Progressive Interiors delivered exactly what they promised — and more." | ★★★★★ |

---

## 17. FAQ

> Source: `src/pages/ContactPage.tsx`

| # | Question | Answer |
|---|---|---|
| 1 | How much does an interior design project cost? | Every project is unique. Our fees depend on the scope, size, and complexity of the work. We offer a free initial consultation to understand your needs and provide a tailored quote. Residential projects typically start from ₹8 lakhs for a single room and scale based on the full scope. |
| 2 | What is your typical project timeline? | A typical residential project takes 8–16 weeks from concept to reveal, depending on the scale. Space planning and renovation projects may take 12–20 weeks if structural work is involved. We provide a detailed timeline during the concept phase so you always know what to expect. |
| 3 | Do you offer a free consultation? | Yes! We offer a complimentary 30-minute discovery call where we discuss your vision, space, and budget. This helps us understand if we're the right fit for each other before committing to a full engagement. |
| 4 | Do you work outside Hyderabad? | Absolutely. While our studio is based in Hyderabad, we work with clients across India. We have completed projects in Bangalore, Mumbai, Goa, Chennai, Jaipur, and Rishikesh. For out-of-city projects, we schedule regular site visits and use video conferencing for seamless collaboration. |

---

## 18. CONTACT FORM

> Source: `src/pages/ContactPage.tsx`

**Fields:**

| Field | Type | Required | Options |
|---|---|---|---|
| Full Name | text | Yes | — |
| Email Address | email | Yes | — |
| Phone Number | tel | No | — |
| Service Interested In | select | No | Residential Design, Space Planning & Renovation, Material & Decor Curation, Other / Not Sure |
| Your Message | textarea | Yes | — |

**Submit Button Label:** Send Message

**Success Message:** Thank You! We've received your message and will get back to you within 24 hours.

### Contact Methods (Contact Page)

| Method | Detail | Note |
|---|---|---|
| WhatsApp | https://wa.me/919052525249 | Quick chat — typically replies within an hour |
| Phone | +91 90525 25249 | Direct call |
| Email | sales@progressiveinteriors.in | Via contact form |

---

## 19. ALL IMAGE ASSETS

> Source: `src/assets/images/`

| File | Used In | Alt Text |
|---|---|---|
| `hero-living-room.webp` | HomePage hero | Luxury Interior |
| `projects-hero-collage.webp` | ProjectsPage hero | Our Projects |
| `service-residential-design.webp` | ServicesPage hero, HomePage services | Residential Interior Design / Our Services |
| `service-space-planning.webp` | ServicesPage | Space Planning & Renovation |
| `service-material-curation.webp` | ServicesPage | Material & Decor Curation |
| `brand-studio-workspace.png` | AboutPage (story, philosophy, process sections) | Studio Space / Our Studio / Design Philosophy / Client-First Process |
| `project-serene-haven.webp` | ProjectsPage, ProjectDetailPage (Ananda Villa) | Ananda Villa |
| `detail-serene-haven-1.webp` | ProjectDetailPage (Ananda Villa) | Ananda Villa detail |
| `detail-serene-haven-2.webp` | ProjectDetailPage (Ananda Villa) | Ananda Villa detail |
| `project-urban-loft.webp` | ProjectsPage, ProjectDetailPage (Kala Loft) | Kala Loft |
| `detail-urban-loft-1.webp` | ProjectDetailPage (Kala Loft) | Kala Loft detail |
| `detail-urban-loft-2.webp` | ProjectDetailPage (Kala Loft) | Kala Loft detail |
| `project-coastal-retreat.webp` | ProjectsPage (Samudra Retreat) | Samudra Retreat |
| `project-botanical-studio.webp` | ProjectsPage (Vanam Studio) | Vanam Studio |
| `project-heritage-manor.webp` | ProjectsPage (Dharohar Manor) | Dharohar Manor |
| `project-zen-garden-suite.webp` | ProjectsPage (Shanti Suite) | Shanti Suite |
| `project-oak-stone-villa.webp` | ProjectsPage | — |
| `project-minimalist-penthouse.webp` | ProjectsPage | — |
| `/logo.png` | Header, Footer | Progressive Interiors |

---

## 20. COLOR & TYPOGRAPHY

> Source: `tailwind.config.js` / global CSS

| Token | Role |
|---|---|
| `deep-blue` | Primary dark / background |
| `warm-gold` | Accent / highlight |
| `ivory` | Primary light / background |
| `font-serif` | Headings |
| sans-serif | Body text |
| `tracking-wide` + `uppercase` | Labels / overlines |

---

## 21. LEGAL CONTENT

### Privacy Policy

> Source: `src/pages/PrivacyPolicyPage.tsx`

- **Last Updated:** March 2025
- **Sections:** Introduction, Information We Collect, How We Use Your Information, Data Sharing & Disclosure, Data Security, Your Rights, Cookies, Third-Party Links, Changes to This Policy, Contact Us

### Terms & Conditions

> Source: `src/pages/TermsPage.tsx`

- **Last Updated:** March 2025
- **Sections:** Agreement to Terms, Services, Client Obligations, Payments & Billing, Design Revisions, Intellectual Property, Cancellation & Refunds, Warranties & Limitations, Liability, Portfolio & Photography, Governing Law, Contact Us
