# Portfolio — Muhammad Bagja Satrio

Personal portfolio website for **Muhammad Bagja Satrio** — Full-Stack Web Developer & AI Engineer.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scroll.

## Quick Start

```bash
# Install dependencies
npm install

# Development (port 3000)
npm run dev

# Production build
npm run build

# Start production server
npx next start
```

## Editing Content

All content lives in `/data/` — edit these files without touching components:

| File | Content |
|------|---------|
| `data/profile.ts` | Name, bio, about text, stats, hero tagline |
| `data/projects.ts` | Selected work / case studies |
| `data/experience.ts` | Work experience, education, awards |
| `data/certifications.ts` | IBM + other certifications |
| `data/skills.ts` | Skills with category, confirmed flag, project links |

### Skills visibility

Skills with `confirmed: false` are **not rendered**. Set `confirmed: true` after verifying.

## Replacing Assets

| Asset | Location | Notes |
|-------|----------|-------|
| Hero background | `public/images/hero/background-hero.jpg` | Original in `assets/img/` |
| Certificates (PDF) | `public/certificates/*.pdf` | 13 PDFs copied from `assets/certificates/` |
| About photo | Replace placeholder in `About.tsx` | Put photo at `public/images/about.jpg` |
| Project screenshots | `public/projects/[slug]/cover.*` | Currently CSS gradient placeholders |
| CV PDF | `public/CV_MUHAMMAD_BAGJA_SATRIO.pdf` | Not yet added — TODO |

### Hero focus point

Edit CSS variables `--hero-focus-x` and `--hero-focus-y` in `globals.css` to adjust where the hero image centers (e.g., `50% 30%` to keep face visible on mobile).

## Pages

- `/` — Landing page (Hero → What I Do → Stats → Work → About → Experience → Skills → Contact)
- `/work/[slug]` — Case study per project
- `/resume` — Web resume + Download PDF + Print
- `not-found` — Custom 404

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for auto-deploy.

## Environment Variables (optional)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number for wa.me link (not hardcoded) |

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (motion/react)
- **Smooth Scroll**: Lenis
- **Fonts**: Space Grotesk (display) + DM Sans (body)
- **Icons**: Lucide React + inline SVG (GitHub, LinkedIn)
- **Deploy**: Vercel
