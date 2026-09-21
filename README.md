# IronForge Fitness 🏋️‍♂️

> **Forge Your Strongest Self.**  
> A premium, high-performance strength, conditioning, and recovery facility website built for **IronForge Fitness** located in Indiranagar, Bengaluru.

---

## 🌟 Overview

**IronForge Fitness** is a modern, responsive single-page web application engineered with an energetic dark-theme aesthetic, bold typography, and smooth micro-interactions. It showcases state-of-the-art facility features, training disciplines, master coaches, transparent Indian Rupee (₹) membership tiers, an interactive photo lightbox gallery, and an instant VIP pass booking engine.

---

## ⚡ Key Features

- **Top Scroll Progress Indicator**: A slim, fixed reading progress bar at the very top of the screen providing instant visual feedback on page scroll position.
- **Sticky Dynamic Navigation**: Responsive navigation bar with scroll state detection, section spying, click-to-call, quick trial CTA, and animated mobile drawer menu.
- **Hero & Value Badges**: High-impact condensed display typography, dynamic call-to-actions, and facility badge highlights (Olympic Eleiko gear, CSCS coaches, thermal contrast suite).
- **About & Animated Stat Counters**: Interactive milestone metrics (500+ Active Members, 12+ Years of Impact, 15+ Master Coaches, 35+ Weekly Classes) that count up smoothly as they enter the viewport.
- **Training Disciplines & Programs**: Interactive program cards (*Strength & Hypertrophy, Cardio & MetCon HIIT, CrossFit & Functional, Mobility & Recovery, 1-on-1 Elite Coaching, Team Workouts*) with detailed modal deep dives.
- **Master Coaches Directory**: Profiles detailing accreditations (CSCS, USAW, FRCms), specializations, and direct Instagram links.
- **Tiered Indian Rupee (₹) Pricing**:
  - Interactive **Monthly vs. Annual** billing toggle with a 20% discount calculation.
  - Tiers: **Core Access (₹2,499/mo)**, **Pro Athlete (₹4,499/mo)**, and **All-Access Elite (₹7,999/mo)**.
  - Synchronized membership selector in the booking form.
- **Facility Photo Gallery & Lightbox**: Categorized media grid (*All, Equipment, Classes, Interior, Recovery*) with full-screen lightbox modal including zoom and next/previous controls.
- **Member Transformations & Testimonials**: Five-star verified reviews with achievement stats and member tenure.
- **Contact & Instant Trial Pass Generator**:
  - Validated client-side pass registration form.
  - Generates a branded digital pass card with a unique serial ticket code (`IF-BLR-XXXX`).
  - Dark-mode Google Map embed centered on **100 Feet Road, Indiranagar, Bengaluru**.
- **Floating WhatsApp Quick Action**: Persistent bottom-right floating WhatsApp button with live ping indicator and pre-filled inquiry message.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Transitions**: [Motion](https://motion.dev/) & CSS hardware acceleration
- **Typography**: Google Fonts (*Bebas Neue* for headings, *Inter* for body text)

---

## 📂 Project Structure

```text
├── index.html                  # HTML entry point with Bengaluru SEO meta tags
├── metadata.json               # Applet metadata configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite configuration with Tailwind CSS plugin
├── public/                     # Static assets
└── src/
    ├── main.tsx                # Application root entry point
    ├── App.tsx                 # Main application coordinator & layout
    ├── index.css               # Tailwind CSS imports & custom utility styles
    ├── types.ts                # Shared TypeScript models and interfaces
    ├── data/
    │   └── gymData.ts          # Centralized data source (pricing, coaches, facility info)
    └── components/
        ├── Navbar.tsx          # Sticky navigation with mobile menu
        ├── ScrollProgressBar.tsx # Slim fixed top progress indicator
        ├── Hero.tsx            # Hero showcase & action buttons
        ├── About.tsx           # Facility mission & animated milestone counters
        ├── Programs.tsx        # Training disciplines & program detail modal
        ├── Trainers.tsx        # Master coaches list & qualifications
        ├── Pricing.tsx         # Membership plans with monthly/annual toggle in INR (₹)
        ├── Gallery.tsx         # Photo gallery with interactive Lightbox
        ├── Testimonials.tsx    # Member reviews and transformation stories
        ├── Contact.tsx         # Booking form, digital ticket pass, & Bengaluru map
        ├── FreePassModal.tsx   # Quick trial pass popup modal
        ├── WhatsAppFloat.tsx   # Floating WhatsApp button
        └── Footer.tsx          # Brand links, social handles, and opening hours
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. Clone or download the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

### Production Build

To build the static production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run the TypeScript compiler to verify type safety:

```bash
npm run lint
```

---

## 📍 Facility Location

**IronForge Fitness**  
428 100 Feet Road, HAL 2nd Stage, Indiranagar  
Bengaluru, Karnataka 560038, India  
- 📞 **Phone**: +91 98804 77901  
- 💬 **WhatsApp**: +91 98804 77901  
- ✉️ **Email**: contact@ironforgefitness.com  

---

## 📄 License

This project is licensed under the MIT License.
