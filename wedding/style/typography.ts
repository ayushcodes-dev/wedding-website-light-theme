/**
 * Typography Configuration
 * Combines Google Serif for Royal Indian Heritage, Cursive for Romance,
 * and Modern Sans with delicate letter-spacing for clean minimalism.
 */

export const typography = {
  // Font Families (Mapped to CSS variables initialized in layout.tsx)
  fonts: {
    serif: "var(--font-playfair), 'Playfair Display', serif", // Royal Headings
    luxurySerif: "var(--font-cormorant), 'Cormorant Garamond', serif", // Editorial Accents
    cursive: "var(--font-great-vibes), 'Great Vibes', cursive", // Romantic Wedding Script
    sans: "var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif", // Clean Modern UI & Body
  },

  // Letter Spacing presets (Refined Indian Luxury Wedding aesthetic)
  letterSpacing: {
    tighter: "-0.04em",
    tight: "-0.02em",
    normal: "0em",
    wide: "0.05em",
    wider: "0.12em",
    widest: "0.22em",
    ceremonial: "0.3em", // For luxury uppercase labels (e.g. "SHUBH AARAMBH")
  },

  // Standard Typography Utility Presets
  presets: {
    cursiveBadge: "font-cursive text-xl md:text-2xl text-[#7D111E] tracking-normal",
    sectionSubtitle: "text-xs md:text-sm uppercase tracking-[0.25em] text-[#7D111E] font-semibold",
    heroHeading: "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white",
    sectionHeading: "font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1A1516]",
    bodyText: "font-sans text-sm md:text-base leading-relaxed text-[#5C5556]",
  },
} as const;

export default typography;
