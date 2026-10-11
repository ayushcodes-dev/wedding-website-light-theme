/**
 * Color Palette Configuration for Minimalist Indian Wedding Photography Website
 * Theme: Light with Dark Fade, White, and Shades of Dark Red
 */

export const colors = {
  // Primary Dark Red Tones (Authentic Sindoor, Royal Maroon, Deep Velvet Wine)
  darkRed: {
    base: "#7D111E",         // Signature Royal Crimson
    dark: "#5B0D15",         // Deep Burgundy
    deepest: "#38060B",      // Velvety Maroon
    rich: "#961824",         // Rich Vermilion
    light: "#B22234",        // Accent Red
    roseWine: "#A52A38",     // Soft Wine Accent
    subtleBg: "#FDF4F5",     // Very delicate tint for badges & card hover
    border: "#88131F25",     // Muted red border
  },

  // Minimalistic Light & White Canvas
  light: {
    white: "#FFFFFF",        // Crisp Pure White
    ivory: "#FAF8F5",        // Soft Warm Ivory (Main body background)
    pearl: "#F5F2EA",        // Pearl White (Card background)
    cream: "#EDE7DC",        // Elegant border tone
    cardHover: "#F9F6F0",    // Soft hover tint
  },

  // Dark Fade Tones (Cinematic Indian Royal Velvet & Midnight Shadows)
  darkFade: {
    midnight: "#120204",     // Deepest midnight red-black
    velvet: "#1C0407",       // Dark royal fade
    smokeDark: "rgba(18, 2, 4, 0.82)", // Ethereal smoke dark tint
    smokeMist: "rgba(25, 4, 8, 0.65)", // Mid smoke overlay
  },

  // Royal Indian Accents (Champagne & Heritage Gold)
  gold: {
    champagne: "#D4AF37",    // Heritage Royal Gold
    antique: "#C5A059",      // Muted Royal Antique
    pale: "#EADDC6",         // Delicate Pale Gold
    glow: "rgba(197, 160, 89, 0.18)", // Subtle glow
  },

  // Text & Neutral Hierarchy
  text: {
    primary: "#1A1516",      // Rich Charcoal for supreme readability
    secondary: "#5C5556",    // Soft warm gray
    muted: "#8A8182",        // Subtle caption gray
    light: "#FAF8F5",        // Light text on dark fade sections
    lightMuted: "#D4C7C8",   // Muted text on dark fade sections
  },
} as const;

export default colors;
