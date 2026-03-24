// Project data for Our Projects page
import projectSereneHaven from '../assets/images/project-serene-haven.webp'
import detailSereneHaven1 from '../assets/images/detail-serene-haven-1.webp'
import detailSereneHaven2 from '../assets/images/detail-serene-haven-2.webp'
import projectUrbanLoft from '../assets/images/project-urban-loft.webp'
import detailUrbanLoft1 from '../assets/images/detail-urban-loft-1.webp'
import detailUrbanLoft2 from '../assets/images/detail-urban-loft-2.webp'
import projectCoastalRetreat from '../assets/images/project-coastal-retreat.webp'
import projectBotanicalStudio from '../assets/images/project-botanical-studio.webp'
import projectHeritageManor from '../assets/images/project-heritage-manor.webp'
import projectZenGardenSuite from '../assets/images/project-zen-garden-suite.webp'
import projectOakStoneVilla from '../assets/images/project-oak-stone-villa.webp'
import projectMinimalistPenthouse from '../assets/images/project-minimalist-penthouse.webp'

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
  {
    slug: 'ananda-villa',
    title: 'Ananda Villa',
    category: 'Residential',
    tagline: 'A spa-inspired sanctuary blending natural stone with warm wood',
    description:
      'Nestled in the lush outskirts of Bangalore, Ananda Villa is a testament to our philosophy of harmonizing nature with refined living. Every element — from the hand-selected Rajasthani sandstone cladding to the custom-milled teak wood joinery — was chosen to evoke a sense of calm and permanence. The open floor plan flows seamlessly between indoor and outdoor spaces, with floor-to-ceiling glass walls framing the garden and pool beyond. We curated a palette of warm creams, mineral greys, and sage greens to create an atmosphere that breathes tranquility.',
    scope: 'Full Interior Design & Landscaping',
    location: 'Bangalore, India',
    thumbnail: projectSereneHaven,
    images: [
      projectSereneHaven,
      detailSereneHaven1,
      detailSereneHaven2,
    ],
  },
  {
    slug: 'kala-loft',
    title: 'Kala Loft',
    category: 'Residential',
    tagline: 'Industrial heritage meets modern comfort in this transformed warehouse space',
    description:
      'What was once a century-old textile warehouse in Mumbai\'s Lower Parel has been reimagined as a stunning contemporary loft. Kala Loft celebrates the raw beauty of exposed brick and original cast-iron columns while introducing modern warmth through bespoke walnut cabinetry, handwoven dhurrie rugs, and statement brass lighting. The double-height living space, anchored by a monumental bookshelf wall, serves as both a living area and a gallery for the client\'s contemporary Indian art collection.',
    scope: 'Adaptive Reuse & Interior Design',
    location: 'Mumbai, India',
    thumbnail: projectUrbanLoft,
    images: [
      projectUrbanLoft,
      detailUrbanLoft1,
      detailUrbanLoft2,
    ],
  },
  {
    slug: 'samudra-retreat',
    title: 'Samudra Retreat',
    category: 'Residential',
    tagline: 'Bright, breezy coastal living with natural textures and ocean-inspired palette',
    description:
      'Perched on the Goa coastline, Samudra Retreat captures the essence of relaxed coastal luxury. The design draws inspiration from the surrounding sea and sky — whitewashed lime-plastered walls, reclaimed driftwood accents, and hand-loomed cotton textiles in indigo and ivory. We designed each room to frame the ocean view, using wide verandahs, sliding folding doors, and carefully positioned mirrors to bring the outdoors in. The result is a home that feels like a permanent holiday.',
    scope: 'Interior Design & Custom Furniture',
    location: 'Goa, India',
    thumbnail: projectCoastalRetreat,
    images: [
      projectCoastalRetreat,
      projectOakStoneVilla,
    ],
  },
  {
    slug: 'vanam-studio',
    title: 'Vanam Studio',
    category: 'Commercial',
    tagline: 'A creative workspace where nature and design coexist harmoniously',
    description:
      'Vanam Studio was born from the belief that a workspace surrounded by greenery fosters sharper creativity and deeper focus. Located in a converted bungalow in Chennai\'s Adyar neighborhood, this design studio features a central atrium with a living tree, moss walls, and an abundance of trailing plants. We balanced the biophilic vision with functional workspaces — soundproofed meeting pods, adjustable-height desks, and a curated material library — all in a palette of warm terracotta, deep greens, and natural pine.',
    scope: 'Commercial Interior Design',
    location: 'Chennai, India',
    thumbnail: projectBotanicalStudio,
    images: [
      projectBotanicalStudio,
      projectMinimalistPenthouse,
    ],
  },
  {
    slug: 'dharohar-manor',
    title: 'Dharohar Manor',
    category: 'Residential',
    tagline: 'Timeless elegance restored with contemporary functionality',
    description:
      'Dharohar Manor is a loving restoration of a colonial-era estate in Jaipur. We preserved the original arched doorways, ornate jali screens, and vintage terrazzo floors while introducing contemporary Indian design — Channapatna-turned furniture legs, block-printed cushions from local artisans, and custom brass light fixtures inspired by traditional diyas. The grand dining hall, with its 14-foot ceilings and restored crystal chandelier, sits alongside a modern Italian kitchen — a dialogue between heritage and today.',
    scope: 'Heritage Restoration & Interior Design',
    location: 'Jaipur, India',
    thumbnail: projectHeritageManor,
    images: [
      projectHeritageManor,
      detailSereneHaven1,
    ],
  },
  {
    slug: 'shanti-suite',
    title: 'Shanti Suite',
    category: 'Hospitality',
    tagline: 'Zen-inspired tranquility for a boutique hotel experience',
    description:
      'Designed for a boutique wellness resort in Rishikesh, Shanti Suite draws on the meditative spirit of the Himalayas. Each room is a study in restraint — low platform beds in reclaimed sal wood, hand-plastered clay walls, and floor-to-ceiling windows framing the Ganges valley. We introduced subtle luxury through handwoven Pashmina throws, hammered copper basin sinks, and a private meditation alcove with ambient candlelight. The design invites guests to disconnect and rediscover stillness.',
    scope: 'Hospitality Interior Design',
    location: 'Rishikesh, India',
    thumbnail: projectZenGardenSuite,
    images: [
      projectZenGardenSuite,
      detailUrbanLoft1,
    ],
  },
]
