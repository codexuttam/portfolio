# Uttamraj Singh — Personal Portfolio

An editorial, cinematic, and interactive portfolio designed and engineered for **Uttamraj Singh**, specializing in AI/ML, full-stack systems, and AI-powered products.

Inspired by the visual restraint and project-hover interactions of high-end editorial portfolios, built with a warm paper aesthetic, oversized typography, and responsive interaction engineering.

---

## 🎨 Art Direction & Visual Identity

- **Background (Warm Paper)**: `#E9E7E1`
- **Text (Deep Charcoal)**: `#20221F`
- **Primary Accent (Muted Olive)**: `#778A43`
- **Highlight (Soft Lime/Green)**: `#C4E36C`
- **Supporting Text (Muted Gray)**: `#73756E`
- **Borders**: Translucent charcoal (`rgba(32, 34, 31, 0.12)`)
- **Typography**: Manrope (Modern Sans-Serif), Newsreader/Cormorant Garamond (Italic Serif accent), JetBrains Mono (Technical indices & metadata).

---

## 🏗️ Architecture & Features

- **Next.js 16 (App Router)** + **React 19** + **TypeScript**
- **Tailwind CSS v4** with design token variables
- **Framer Motion (`motion/react`)** for cinematic crossfades, pointer tilt physics, and easing
- **Two-Column Project Showcase**:
  - Vertically stacked project rows with interactive project-tint highlights
  - Sticky large cinematic scene with smooth crossfades and zero layout shift
  - Keyboard navigation (`↑` / `↓` arrow keys) & mobile touch support
- **Dedicated Case Study Pages (`/work/[slug]`)**:
  - Full-length case studies for Bitlance AI, Samadhan Setu, QuickLearn AI, Upchar360, and Voice Agent Systems
- **Command Palette (`⌘K` / `Ctrl+K`)**:
  - Search and filter across sections, case studies, and external profiles with keyboard controls
- **Pointer-Responsive Portrait**:
  - Perspective 3D tilt with spring damping and circular editorial rotating stamp
- **Continuous Editorial Ticker**:
  - Infinite CSS marquee with pause-on-hover

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build production bundle
npm run build
```

The application runs on [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Customization & Personal Assets

### 1. Adding Your Real Portrait
Place your portrait photograph at:
```
public/images/portrait/portrait.jpg
```
The hero section automatically detects this file and switches from the editorial placeholder SVG to your actual photo while applying subtle cinematic tone grading.

### 2. Updating Personal Credentials & Links
Edit [`src/data/profile.ts`](src/data/profile.ts) to update your actual email, GitHub URL, LinkedIn profile, and resume link.

### 3. Adding or Updating Projects
Project data is typed and configured in [`src/data/projects.ts`](src/data/projects.ts).
