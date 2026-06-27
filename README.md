# Atelier Nume | Design Agency Homepage

This repository contains the solution for the **Next.js Developer Internship Task**. The task required building a modern, responsive, and clean design agency homepage with specific sections and functionality. 

To demonstrate versatility, this repository contains **two complete implementations** of the exact same design:
1. **`Agency Nextjs Complete Project`** - The primary submission built with Next.js 15 (App Router).
2. **`Agency React`** - A secondary equivalent submission built as a standard React Single Page Application (SPA) using Vite.

---

## 🛠️ Tech Stack Used

- **Framework**: Next.js 15 (App Router) / React 19
- **Language**: TypeScript (TSX)
- **Styling**: Tailwind CSS (v3) + Custom CSS variables
- **Icons & Graphics**: Inline SVGs (Handcrafted)
- **Deployment**: Netlify (Pre-configured via `netlify.toml`)

---

## 🚀 Setup Instructions

### For the Next.js Version (Primary Submission)
1. Open your terminal and navigate to the Next.js project directory:
   ```bash
   cd "Agency Nextjs Complete Project"
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### For the React Version (Secondary Submission)
1. Navigate to the React project directory:
   ```bash
   cd "Agency React"
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the local link provided by Vite (usually [http://localhost:5173](http://localhost:5173)).

---

## 🌐 Deploying to Netlify

This repository is **Netlify-ready**. A `netlify.toml` file has been added to the root of the repository so Netlify knows exactly what to do.

1. Connect your GitHub repository to Netlify.
2. Netlify will automatically detect the `netlify.toml` file.
3. It will set the base directory to `Agency Nextjs Complete Project` and deploy the Next.js app automatically. No manual configuration is required!

---

## ✨ Additional Features & Assumptions (Bonus Points Achieved)

This implementation not only meets all core requirements but also successfully implements **100% of the optional bonus points**:

1. **Tailwind CSS Implementation:** 
   - A highly customized `tailwind.config.ts` was used to establish a strict editorial design system (colors, fonts, box-shadows).
2. **Basic Animations:** 
   - CSS-based `.fade-up` keyframe animations are triggered on load.
   - Elegant micro-interactions (e.g., hover states lifting cards, pulsing scroll indicators, and scale transforms on portfolio images).
3. **Dark Mode Toggle:** 
   - A custom `ThemeToggle` component handles smooth transitions between Light and Dark modes.
   - It respects the user's system preference (`prefers-color-scheme`) and persists their choice using `localStorage`.
4. **Image Optimization (`next/image`):** 
   - The `<Image />` component is fully utilized within the Portfolio section of the Next.js project to ensure optimized loading and intrinsic sizing.
5. **SEO Metadata Implementation:** 
   - Configured robust metadata inside `layout.tsx` including `title`, `description`, `keywords`, and `openGraph` tags for advanced SEO readiness.
6. **Accessibility (WCAG AA Ready):**
   - The contact form is fully navigable via keyboard (using custom `focus-visible` rings).
   - Form inputs utilize `aria-invalid` and semantic `<label>` bindings for screen reader support.

### Assumptions Made
* **Content:** Since specific copy was not provided, professional placeholder copy (tailored to an editorial design agency context) was written to ensure the layout looks clean and realistic.
* **Component Architecture:** To keep the code readable, the UI was split into separate interactive components (`contact-form.tsx` and `theme-toggle.tsx`) while keeping purely structural UI within `page.tsx` for simplicity.
