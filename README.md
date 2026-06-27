# Atelier Nume | Design Agency Homepage

This repository contains the solution for the Design Agency Homepage task, built as a modern, responsive React Single Page Application (SPA) using Vite.

---

## 🛠️ Tech Stack Used

- **Framework**: React 19 (Vite)
- **Language**: TypeScript (TSX)
- **Styling**: Tailwind CSS (v3) + Custom CSS variables
- **Icons & Graphics**: Inline SVGs (Handcrafted)
- **Deployment**: Netlify (Pre-configured via `netlify.toml`)

---

## 🚀 Setup Instructions

1. Open your terminal and navigate to this directory.
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

This repository is **Netlify-ready**. A `netlify.toml` file is at the root of the repository so Netlify knows exactly what to do.

1. Connect your GitHub repository to Netlify.
2. Netlify will automatically deploy the React app effortlessly!

---

## ✨ Additional Features & Assumptions (Bonus Points Achieved)

This implementation successfully hits the bonus points:

1. **Tailwind CSS Implementation:** 
   - A highly customized `tailwind.config.ts` was used to establish a strict editorial design system.
2. **Basic Animations:** 
   - CSS-based `.fade-up` keyframe animations are triggered on load.
   - Elegant micro-interactions (e.g., hover states lifting cards).
3. **Dark Mode Toggle:** 
   - A custom `ThemeToggle` component handles smooth transitions between Light and Dark modes.
   - It respects the user's system preference (`prefers-color-scheme`) and persists their choice using `localStorage`.
4. **SEO Metadata Implementation:** 
   - Configured robust metadata inside `index.html` including `title`, `description`, `keywords`, and `openGraph` tags for advanced SEO readiness.
5. **Accessibility (WCAG AA Ready):**
   - The contact form is fully navigable via keyboard.
   - Form inputs utilize `aria-invalid` and semantic `<label>` bindings for screen reader support.

### Assumptions Made
* **Content:** Since specific copy was not provided, professional placeholder copy (tailored to an editorial design agency context) was written to ensure the layout looks clean and realistic.
