import projectSereneHaven from '../assets/images/project-serene-haven.webp'
import detailSereneHaven1 from '../assets/images/detail-serene-haven-1.webp'
import detailSereneHaven2 from '../assets/images/detail-serene-haven-2.webp'
import detailUrbanLoft1 from '../assets/images/detail-urban-loft-1.webp'
import detailUrbanLoft2 from '../assets/images/detail-urban-loft-2.webp'
import projectCoastalRetreat from '../assets/images/project-coastal-retreat.webp'
import projectBotanicalStudio from '../assets/images/project-botanical-studio.webp'
import projectHeritageManor from '../assets/images/project-heritage-manor.webp'
import projectZenGardenSuite from '../assets/images/project-zen-garden-suite.webp'
import projectOakStoneVilla from '../assets/images/project-oak-stone-villa.webp'
import projectMinimalistPenthouse from '../assets/images/project-minimalist-penthouse.webp'

// Residential project thumbnails — run `node scripts/generate-images.js` to replace with generated images
import projectAmaravathiGrand from '../assets/images/project-serene-haven.webp'
import projectJyothiSerenity from '../assets/images/project-coastal-retreat.webp'
import projectOncloud33 from '../assets/images/project-minimalist-penthouse.webp'
import projectCanduer40 from '../assets/images/detail-serene-haven-1.webp'
import projectRainbowVistas from '../assets/images/detail-serene-haven-2.webp'
import projectMyHomeAvatar from '../assets/images/project-urban-loft.webp'
import projectRajPushpa from '../assets/images/project-heritage-manor.webp'
import projectMyHomeSayuk from '../assets/images/project-oak-stone-villa.webp'

// Commercial project thumbnails
import projectKpmg from '../assets/images/project-botanical-studio.webp'
import projectMeridianCargo from '../assets/images/detail-urban-loft-1.webp'
import projectProtiviti from '../assets/images/detail-urban-loft-2.webp'
import projectBlueStar from '../assets/images/project-zen-garden-suite.webp'
import projectAgsHealth from '../assets/images/project-botanical-studio.webp'
import projectAlacriti from '../assets/images/detail-urban-loft-1.webp'
import projectCathayPacific from '../assets/images/detail-urban-loft-2.webp'
import projectUrbanCompany from '../assets/images/project-minimalist-penthouse.webp'
import projectOrientalMotor from '../assets/images/project-oak-stone-villa.webp'
import projectBambino from '../assets/images/project-coastal-retreat.webp'
import projectVarunBeverages from '../assets/images/project-heritage-manor.webp'

export interface Project {
  slug: string
  title: string
  category: 'Residential' | 'Commercial' | 'Hospitality'
  tagline: string
  description: string
  scope: string
  location: string
  thumbnail: string
  images: string[]
}

export const categories = ['All', 'Residential', 'Commercial', 'Hospitality'] as const

export const projects: Project[] = [
  // ─── RESIDENTIAL ───────────────────────────────────────────────────────────
  {
    slug: 'amaravathi-grand',
    title: 'Amaravathi Grand',
    category: 'Residential',
    tagline: 'Grand-scale luxury villa blending Indian heritage with contemporary elegance',
    description:
      'Amaravathi Grand is a statement of refined living — a sprawling villa in Hyderabad where every surface speaks of craftsmanship and intent. We layered Rajasthani sandstone feature walls with custom teak joinery, handwoven silk upholstery, and bespoke brass fixtures to create a home that feels both monumental and intimately warm. The double-height living hall, framed by floor-to-ceiling glass doors opening to a landscaped garden, is the centrepiece of a space designed to host and to retreat in equal measure.',
    scope: 'Full Interior Design & Landscaping',
    location: 'Hyderabad, India',
    thumbnail: projectAmaravathiGrand,
    images: [projectAmaravathiGrand, detailSereneHaven1, detailSereneHaven2],
  },
  {
    slug: 'jyothi-serenity',
    title: 'Jyothi Serenity',
    category: 'Residential',
    tagline: 'A tranquil urban retreat designed for calm, clarity, and purposeful living',
    description:
      'Jyothi Serenity is a modern apartment in Hyderabad reimagined as a sanctuary from city life. Working with a palette of warm ivory, sage green, and natural rattan, we stripped the space back to its essentials — clean lines, tactile materials, and an abundance of natural light. Handloom cotton curtains, low platform furniture, and curated indoor plants create a home that feels like a slow exhale. Every room was designed to reduce visual noise and increase the sense of spaciousness.',
    scope: 'Full Interior Design & Furniture Curation',
    location: 'Hyderabad, India',
    thumbnail: projectJyothiSerenity,
    images: [projectJyothiSerenity, detailSereneHaven1, projectSereneHaven],
  },
  {
    slug: 'oncloud33',
    title: 'Oncloud33',
    category: 'Residential',
    tagline: 'Sky-high contemporary living with panoramic city views and clean modern lines',
    description:
      'On the 33rd floor of one of Hyderabad\'s premium towers, Oncloud33 is a penthouse apartment designed for a young professional with an eye for precision. We worked with a monochromatic base of chalk white and charcoal grey, punctuated by warm amber lighting and brushed brass hardware. The open-plan kitchen flows into a living area anchored by a bespoke floating media console, while the master suite features a custom dressing room and a spa-style bathroom with a freestanding tub overlooking the city skyline.',
    scope: 'Interior Design & Custom Furniture',
    location: 'Hyderabad, India',
    thumbnail: projectOncloud33,
    images: [projectOncloud33, projectMinimalistPenthouse, detailSereneHaven2],
  },
  {
    slug: 'canduer40',
    title: 'Canduer40',
    category: 'Residential',
    tagline: 'Warm and layered apartment interior with artisan details at every turn',
    description:
      'Canduer40 is an apartment transformation that celebrates texture and warmth. The client, an avid collector of Indian craft, wanted a home that could display their collection without feeling like a gallery. We designed the space around their objects — built-in niches for bronze figurines, a feature wall of antique blue Kutch tiles, and custom cabinets in honey-toned mango wood. The result is an apartment that feels curated over a lifetime, not styled in a week.',
    scope: 'Interior Design & Bespoke Joinery',
    location: 'Hyderabad, India',
    thumbnail: projectCanduer40,
    images: [projectCanduer40, detailSereneHaven1, projectSereneHaven],
  },
  {
    slug: 'rainbow-vistas',
    title: 'Rainbow Vistas',
    category: 'Residential',
    tagline: 'A joyful family home layered with colour, craft, and Indian textile traditions',
    description:
      'Rainbow Vistas is a celebration of colour in a family villa designed for three generations. We drew from India\'s rich textile heritage — Ikat cushions from Pochampally, block-printed wall panels from Jaipur, and Kalamkari art pieces from Srikalahasti — to create rooms that feel alive and personal. Each bedroom reflects a different palette while maintaining a harmonious whole, and the communal spaces are designed to host large family gatherings with ease and grace.',
    scope: 'Full Villa Interior Design',
    location: 'Hyderabad, India',
    thumbnail: projectRainbowVistas,
    images: [projectRainbowVistas, detailSereneHaven2, detailSereneHaven1],
  },
  {
    slug: 'my-home-avatar',
    title: 'My Home Avatar',
    category: 'Residential',
    tagline: 'Deep blue and gold luxury apartment with a strong identity and bold character',
    description:
      'My Home Avatar is a luxury apartment in one of Hyderabad\'s most prestigious residential towers. The brief was bold: create a home with presence. We responded with a deep navy and warm gold colour language — a Calacatta marble island kitchen, custom velvet sofas in midnight blue, and a statement ceiling feature in burnished brass leaf above the dining table. The master bedroom is anchored by an upholstered wall panel and a bespoke fitted wardrobe in lacquered walnut with brass inlays.',
    scope: 'Luxury Interior Design & FF&E',
    location: 'Hyderabad, India',
    thumbnail: projectMyHomeAvatar,
    images: [projectMyHomeAvatar, detailUrbanLoft1, detailUrbanLoft2],
  },
  {
    slug: 'raj-pushpa',
    title: 'Raj Pushpa',
    category: 'Residential',
    tagline: 'Heritage-inspired home celebrating India\'s royal craft traditions in a modern setting',
    description:
      'Raj Pushpa draws from India\'s princely past — ornate jali screens, hand-carved teak doorways, and hand-painted tile work sit alongside contemporary comforts in a Hyderabad residence that honours tradition without being frozen in it. We worked with artisans from Rajasthan and Karnataka to produce bespoke furniture pieces, and restored the original mosaic flooring that had been hidden under carpet for decades. The home is a love letter to Indian craft — layered, storied, and deeply personal.',
    scope: 'Heritage-Inspired Interior Design',
    location: 'Hyderabad, India',
    thumbnail: projectRajPushpa,
    images: [projectRajPushpa, projectHeritageManor, detailSereneHaven1],
  },
  {
    slug: 'my-home-sayuk',
    title: 'My Home Sayuk',
    category: 'Residential',
    tagline: 'Cosy, functional family apartment with warm wood tones and thoughtful storage',
    description:
      'My Home Sayuk is a mid-size apartment designed with a young family in mind — practical, warm, and full of personality. We maximised storage through floor-to-ceiling built-ins and under-bed drawers, while keeping the living areas airy and relaxed. Warm oak flooring runs throughout, and a built-in reading nook off the living room has become the family\'s favourite corner. The kitchen is compact but beautifully appointed, with a breakfast bar that doubles as a homework station.',
    scope: 'Interior Design & Space Planning',
    location: 'Hyderabad, India',
    thumbnail: projectMyHomeSayuk,
    images: [projectMyHomeSayuk, projectOakStoneVilla, detailSereneHaven2],
  },

  // ─── COMMERCIAL ────────────────────────────────────────────────────────────
  {
    slug: 'kpmg',
    title: 'KPMG',
    category: 'Commercial',
    tagline: 'Premium professional services office designed for collaboration and brand excellence',
    description:
      'The KPMG Hyderabad office required a space that balanced the firm\'s global brand standards with the warmth of its local team culture. We designed an open-plan floor with a mix of collaborative zones, quiet focus pods, and formal client meeting suites. The branded reception — in deep navy and brushed steel with backlit KPMG signage — sets the tone from the moment you step in. Acoustic ceiling baffles and high-backed booth seating ensure that a busy open floor remains a productive one.',
    scope: 'Corporate Interior Fit-Out',
    location: 'Hyderabad, India',
    thumbnail: projectKpmg,
    images: [projectKpmg, projectBotanicalStudio, detailUrbanLoft1],
  },
  {
    slug: 'meridian-cargo-lines',
    title: 'Meridian Cargo Lines',
    category: 'Commercial',
    tagline: 'Industrial-chic logistics headquarters with bold material choices and strong identity',
    description:
      'Meridian Cargo Lines wanted their new Hyderabad headquarters to reflect the scale and ambition of their operations. We took an industrial-chic approach — exposed concrete ceilings, polished concrete floors, and structural steel accents softened by warm timber workstations and a biophilic breakout zone. A large backlit world map in the reception hall anchors the space and reinforces the company\'s global reach. The boardroom is clad in dark-tinted oak panelling with integrated AV, creating a space that commands attention.',
    scope: 'Commercial Interior Design',
    location: 'Hyderabad, India',
    thumbnail: projectMeridianCargo,
    images: [projectMeridianCargo, detailUrbanLoft1, detailUrbanLoft2],
  },
  {
    slug: 'protiviti-india',
    title: 'Protiviti India',
    category: 'Commercial',
    tagline: 'Modern consulting workspace that balances focus, collaboration, and client confidence',
    description:
      'Protiviti\'s Hyderabad office is a study in how to make an open-plan workspace feel both energetic and professional. We used a warm grey and timber palette with deep green accents to create an environment that feels considered rather than corporate. Glass-walled meeting rooms maintain visual connectivity while providing acoustic privacy. A central collaboration hub with high stools and writable glass surfaces encourages spontaneous team interaction — designed around how consulting teams actually work.',
    scope: 'Corporate Interior Fit-Out',
    location: 'Hyderabad, India',
    thumbnail: projectProtiviti,
    images: [projectProtiviti, detailUrbanLoft2, projectBotanicalStudio],
  },
  {
    slug: 'blue-star',
    title: 'Blue Star Pvt. Ltd',
    category: 'Commercial',
    tagline: 'Brand-forward corporate office with energetic blue tones and ergonomic workspaces',
    description:
      'The Blue Star Hyderabad office is an exercise in bringing a brand\'s identity into its physical space. The company\'s signature blue anchors every key touchpoint — the reception, the boardroom accent wall, and the branded wayfinding — while the workspaces themselves are kept calm and ergonomic with height-adjustable desks, good task lighting, and ample planting. The pantry and breakout zone were designed as social hubs, with warm lighting and comfortable seating that encourages teams to gather and collaborate.',
    scope: 'Commercial Interior Design',
    location: 'Hyderabad, India',
    thumbnail: projectBlueStar,
    images: [projectBlueStar, projectZenGardenSuite, detailUrbanLoft1],
  },
  {
    slug: 'ags-health',
    title: 'AGS Health Pvt. Ltd',
    category: 'Commercial',
    tagline: 'Wellness-inspired healthcare technology office with biophilic design principles',
    description:
      'AGS Health\'s new office needed to reflect both the precision of the company\'s healthcare technology work and the wellbeing of the people who do it. We introduced biophilic design throughout — living moss walls in the reception, cascading plants along the workspace spine, and abundant natural light from reorganised workstation layouts. The colour palette of white, soft mint, and warm sand is backed by research on cognitive performance. Private wellness rooms and a meditation corner complete a workplace designed to reduce stress and improve focus.',
    scope: 'Commercial Interior Design & Wellness Fit-Out',
    location: 'Hyderabad, India',
    thumbnail: projectAgsHealth,
    images: [projectAgsHealth, projectBotanicalStudio, detailUrbanLoft2],
  },
  {
    slug: 'alacriti-technology',
    title: 'Alacriti Technology Solutions',
    category: 'Commercial',
    tagline: 'Dynamic fintech startup office built for agility, creativity, and fast-paced teams',
    description:
      'Alacriti\'s Hyderabad office is designed for a team that moves fast and thinks boldly. The space centres on an open studio floor with movable walls and reconfigurable furniture — no fixed meeting rooms, only flexible zones that can be reset for a standup, a workshop, or a client presentation. Exposed brick and polished screed give the space an authentic energy, balanced by warm pendant lighting and comfortable lounge furniture. Vibrant colour-blocked walls add personality without compromising focus.',
    scope: 'Startup Office Interior Design',
    location: 'Hyderabad, India',
    thumbnail: projectAlacriti,
    images: [projectAlacriti, detailUrbanLoft1, projectMinimalistPenthouse],
  },
  {
    slug: 'cathay-pacific-airways',
    title: 'Cathay Pacific Airways',
    category: 'Commercial',
    tagline: 'Sophisticated airline office reflecting the prestige and precision of global aviation',
    description:
      'The Cathay Pacific Hyderabad office required the finesse befitting one of the world\'s most acclaimed airlines. We worked in the brand\'s signature navy, silver, and warm white, creating a reception that feels like stepping into a premium airport lounge. The executive boardroom features leather-panelled walls, a custom conference table in dark-stained oak, and a bespoke lighting installation that references the arc of a flight path. Every detail — from the bespoke joinery to the custom carpet tile pattern — was considered for its contribution to the brand narrative.',
    scope: 'Corporate Interior Fit-Out',
    location: 'Hyderabad, India',
    thumbnail: projectCathayPacific,
    images: [projectCathayPacific, detailUrbanLoft2, projectBotanicalStudio],
  },
  {
    slug: 'urban-company',
    title: 'Urban Company',
    category: 'Commercial',
    tagline: 'High-energy tech office designed to inspire India\'s leading home services platform',
    description:
      'Urban Company\'s Hyderabad office needed to capture the energy and ambition of one of India\'s fastest-growing tech companies. We created a space that feels vibrant, open, and distinctly Indian — the brand\'s signature orange appears in bold accents against a neutral backdrop, and hand-painted murals by local artists celebrate the skilled professionals at the heart of the company\'s mission. Collaborative zones, phone booths for focused work, and a social kitchen make this a workplace people are excited to come to.',
    scope: 'Tech Office Interior Design',
    location: 'Hyderabad, India',
    thumbnail: projectUrbanCompany,
    images: [projectUrbanCompany, projectMinimalistPenthouse, detailUrbanLoft1],
  },
  {
    slug: 'oriental-motor-india',
    title: 'Oriental Motor India',
    category: 'Commercial',
    tagline: 'Precision and order: a Japanese manufacturing company\'s Indian office done right',
    description:
      'Oriental Motor India\'s office in Hyderabad reflects the company\'s Japanese roots — precision, clarity, and purposeful restraint. We designed a space where every element earns its place: a clean white and charcoal palette, organised cable management, well-lit technical workstations, and a compact but well-appointed boardroom. The reception displays engineering drawings and product models as art objects, communicating the company\'s technical excellence to every visitor from the moment they enter.',
    scope: 'Corporate Interior Design',
    location: 'Hyderabad, India',
    thumbnail: projectOrientalMotor,
    images: [projectOrientalMotor, projectOakStoneVilla, detailUrbanLoft2],
  },
  {
    slug: 'bambino-agro-industries',
    title: 'Bambino Agro Industries',
    category: 'Commercial',
    tagline: 'Warm, heritage-rooted office design for one of South India\'s most beloved FMCG brands',
    description:
      'Bambino Agro Industries\' corporate office in Hyderabad is a celebration of the brand\'s 60-year heritage and its deep roots in Indian food culture. We used warm terracotta, natural stone, and timber to create an environment that feels grounded and authentic. A curated brand heritage wall traces the company\'s history through archival photography and product milestones. The boardroom is furnished with heirloom-quality pieces that communicate longevity, and the open workspace is designed to feel like a warm, productive home.',
    scope: 'Corporate Interior Design',
    location: 'Hyderabad, India',
    thumbnail: projectBambino,
    images: [projectBambino, projectCoastalRetreat, detailSereneHaven1],
  },
  {
    slug: 'varun-beverages',
    title: 'Varun Beverages Limited',
    category: 'Commercial',
    tagline: 'Dynamic corporate campus office for one of PepsiCo\'s largest bottling partners',
    description:
      'Varun Beverages\' Hyderabad office serves a large team across multiple departments and needed an interior that could accommodate diverse working styles while projecting corporate confidence. We designed a multi-zone floor plate with dedicated areas for focused work, collaborative projects, and client hosting. The brand\'s association with PepsiCo is reflected in energetic blue and white tones, while the executive floor is finished in richer materials — dark walnut, leather, and polished stone — appropriate for the company\'s scale and leadership.',
    scope: 'Large-Scale Corporate Interior Fit-Out',
    location: 'Hyderabad, India',
    thumbnail: projectVarunBeverages,
    images: [projectVarunBeverages, projectHeritageManor, detailUrbanLoft1],
  },
]
