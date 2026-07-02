# Industrial Automation Engineering Portfolio

> **Jiyu Li** - Senior Electrical & Automation Engineer
> 
> *Bridging OT and IT: 7 Years of Automation Excellence*

A highly optimized, mobile-first portfolio website built to showcase medium-voltage drive commissioning, ATEX explosion-proof systems, and complex non-standard automation engineering cases. 

## 🚀 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Dark Mode / Zinc scale)
* **Icons:** Lucide React
* **Data Layer:** Local JSON + Utility Mapper

## ✨ Key Features

* **Dynamic Data Architecture**: Automates the rendering of project cards, external client website URLs, image thumbnails, and integrated YouTube video links by intelligently mapping JSON data (`src/data`) to the UI.
* **Industrial Dark Mode UI**: A highly professional deep slate/zinc background accented with "Siemens Green" (`#009999`) to resonate with OT/IT engineering aesthetics.
* **React Portal Lightbox**: A custom, dependency-free image gallery built from scratch to prevent CSS stacking-context (z-index) conflicts, featuring keyboard navigation.
* **Interactive SOP Component**: An expandable accordion built specifically for outlining the 13-Step FAT/SAT Standardized Commissioning Protocol.
* **UX Enhancements**: Smooth scroll behavior, fixed responsive glass-morphism navigation, and a dynamic Scroll-to-Top button.

## 📂 Project Structure

```text
.
├── public/
│   └── images/                 # All categorized project photo assets
├── src/
│   ├── app/                    # Next.js App Router (page.tsx, layout.tsx, globals.css)
│   ├── components/             # Reusable React UI Components
│   │   ├── Hero.tsx
│   │   ├── ImageLightbox.tsx   # Custom React Portal Lightbox
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SectionDivider.tsx
│   │   └── SOPAccordion.tsx
│   ├── data/                   # JSON Data source files
│   │   ├── ATEX.json
│   │   ├── companies.json
│   │   ├── custom-automation.json
│   │   ├── images.json         # Image mapping index
│   │   ├── mv-vfd-applications.json
│   │   └── videos.json         # YouTube video mapping
│   └── utils/
│       └── dataMapper.ts       # Parses JSON and perfectly binds companies/images to projects
├── postcss.config.js           # PostCSS configuration for Tailwind
├── tailwind.config.ts          # Tailwind theme & custom colors
└── package.json
```

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project structure is strictly for personal portfolio usage. Project case texts, descriptions, and images are proprietary to Jiyu Li and their respective clients.
