/**
 * Image generation script using Gemini 2.0 Flash (free tier).
 * Generates all project thumbnails and service images for Progressive Interiors.
 *
 * Usage:
 *   node scripts/generate-images.js
 */

import { GoogleGenAI } from '@google/genai'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images')

const API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyAvjuKXI3IDz0sCjxB8vvaroPgG5D2ztyw'
const ai = new GoogleGenAI({ apiKey: API_KEY })

async function generateImage(filename, prompt) {
  const outPath = path.join(OUTPUT_DIR, `${filename}.webp`)

  if (fs.existsSync(outPath)) {
    console.log(`  [skip] ${filename}.webp already exists`)
    return
  }

  console.log(`  [gen]  ${filename}.webp …`)
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseModalities: ['IMAGE'],
      },
    })

    const parts = response.candidates?.[0]?.content?.parts ?? []
    const imagePart = parts.find((p) => p.inlineData)

    if (!imagePart?.inlineData?.data) {
      console.error(`  [err]  ${filename}: no image in response`)
      return
    }

    const buffer = Buffer.from(imagePart.inlineData.data, 'base64')
    fs.writeFileSync(outPath, buffer)
    console.log(`  [done] ${filename}.webp saved (${Math.round(buffer.length / 1024)} KB)`)
  } catch (err) {
    console.error(`  [err]  ${filename}: ${err.message}`)
  }

  // Stay within free tier rate limits
  await new Promise((r) => setTimeout(r, 1500))
}

/* ─────────────────────────────────────────────
   Image manifest — 20 images total
   ───────────────────────────────────────────── */
const images = [
  // ── SERVICE ─────────────────────────────────
  {
    filename: 'service-commercial-design',
    prompt: 'Modern Indian corporate office interior design, open-plan workspace, warm wooden desks, pendant lights, lush green plants, glass partitions, Hyderabad business district, photorealistic interior photography, golden hour, 4K quality',
  },

  // ── RESIDENTIAL ─────────────────────────────
  {
    filename: 'project-amaravathi-grand',
    prompt: 'Luxury Indian residential living room, grand double-height ceiling, marble flooring, Rajasthani sandstone accent wall, custom teak wood sofa, warm gold chandeliers, tropical plants, Hyderabad bungalow, photorealistic interior design photography',
  },
  {
    filename: 'project-jyothi-serenity',
    prompt: 'Serene Indian apartment interior, ivory and sage green palette, handwoven cotton curtains, low platform bed, wooden flooring, soft morning light, minimalist South Indian interior design, photorealistic photography',
  },
  {
    filename: 'project-oncloud33',
    prompt: 'Contemporary high-rise apartment interior India, penthouse floor-to-ceiling city view windows, sleek modular kitchen, white and charcoal palette, floating shelves, modern Indian interior design, photorealistic, dusk lighting',
  },
  {
    filename: 'project-canduer40',
    prompt: 'Elegant Indian apartment bedroom, warm walnut wood wardrobe, upholstered headboard, brass bedside lamps, block-print cushions, soft warm lighting, luxury residential interior design photography, photorealistic',
  },
  {
    filename: 'project-rainbow-vistas',
    prompt: 'Bright cheerful Indian family villa interior, open-plan living and dining, colourful Ikat fabric accents, terracotta tile flooring, large green indoor plants, natural light, South Indian residential interior design, photorealistic',
  },
  {
    filename: 'project-my-home-avatar',
    prompt: 'Modern luxury Indian apartment, deep navy and warm gold palette, marble island kitchen, pendant lighting over dining table, silk cushions, contemporary Indian design, photorealistic interior photography',
  },
  {
    filename: 'project-raj-pushpa',
    prompt: 'Traditional Indian home interior, jali screen room divider, antique brass fixtures, handloom dhurrie rug, carved teak doors, warm ambient lighting, heritage luxury interior design photography, Hyderabad, photorealistic',
  },
  {
    filename: 'project-my-home-sayuk',
    prompt: 'Cosy modern Indian apartment, warm oak flooring, built-in bookshelf, reading nook with linen sofa, succulent plants, neutral tones with mustard yellow accents, comfortable residential interior photography, photorealistic',
  },

  // ── COMMERCIAL ──────────────────────────────
  {
    filename: 'project-kpmg',
    prompt: 'Premium corporate office interior India, KPMG, open-plan floor, glass meeting rooms, branded navy and white colour scheme, acoustic ceiling panels, ergonomic chairs, professional office design, photorealistic',
  },
  {
    filename: 'project-meridian-cargo',
    prompt: 'Modern logistics company office Hyderabad India, industrial-chic, exposed concrete ceiling, navy blue and steel palette, collaborative workspace, world map mural, corporate interior design, photorealistic',
  },
  {
    filename: 'project-protiviti',
    prompt: 'Contemporary consulting firm office Hyderabad, open collaborative workspace, glass-walled boardrooms, warm wood and grey tones, branded accent wall, natural light, professional interior design, photorealistic',
  },
  {
    filename: 'project-blue-star',
    prompt: 'Modern Indian corporate office, brand blue accent walls, ergonomic workstations, breakout lounge with soft seating, green plants, natural light, photorealistic interior design photography',
  },
  {
    filename: 'project-ags-health',
    prompt: 'Healthcare technology office India, clean white and mint green palette, biophilic design, moss walls, standing desks, wellness-inspired interior, soft diffused lighting, photorealistic',
  },
  {
    filename: 'project-alacriti',
    prompt: 'Tech startup office Hyderabad India, vibrant collaborative workspace, exposed brick feature wall, bean bags and lounge area, agile pods, energetic modern interior design, photorealistic',
  },
  {
    filename: 'project-cathay-pacific',
    prompt: 'Airline corporate office India, sophisticated navy and silver palette, executive boardroom leather chairs, branded reception desk, city view windows, luxury corporate interior design, photorealistic',
  },
  {
    filename: 'project-urban-company',
    prompt: 'Vibrant tech company office Hyderabad India, colourful open-plan workspace, brand orange accents, collaborative zones, plants wall, modern millennial workplace interior design, photorealistic',
  },
  {
    filename: 'project-oriental-motor',
    prompt: 'Industrial manufacturing company office India, Japanese-inspired minimalist, clean white and charcoal palette, technical drawings display, ergonomic workstations, precise corporate interior, photorealistic',
  },
  {
    filename: 'project-bambino-agro',
    prompt: 'FMCG company office Hyderabad India, warm earthy terracotta tones, food brand heritage imagery on walls, open-plan workspace, wooden flooring, corporate interior design, photorealistic',
  },
  {
    filename: 'project-varun-beverages',
    prompt: 'Beverage company corporate office India, energetic blue and white scheme, open collaborative floor, sleek reception lobby, modern commercial interior design, PepsiCo affiliated, photorealistic',
  },
]

async function main() {
  console.log(`Progressive Interiors — Gemini 2.0 Flash Image Generator`)
  console.log(`Output: ${OUTPUT_DIR}`)
  console.log(`Images to generate: ${images.length}\n`)

  for (const img of images) {
    await generateImage(img.filename, img.prompt)
  }

  console.log('\nAll done!')
}

main().catch(console.error)
