/**
 * Animation and Transition Configuration
 * Optimized for lightweight performance on old and low-power phones.
 * Uses hardware-accelerated CSS properties (opacity & 3D transforms).
 */

export const animations = {
  // Duration presets in milliseconds
  duration: {
    instant: "150ms",
    fast: "250ms",
    normal: "400ms",
    slow: "700ms",
    page: "300ms",
    smoke: "16s",
  },

  // Easing presets (Smooth luxury curves)
  easing: {
    default: "cubic-bezier(0.16, 1, 0.3, 1)", // Natural spring-like easeOutExpo
    smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)", // Fluid smooth
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Reusable CSS class strings
  classes: {
    fadeIn: "animate-fade-in",
    fadeInUp: "animate-fade-in-up",
    fadeInScale: "animate-fade-in-scale",
    pageFade: "transition-opacity duration-300 ease-out",
    hoverLift: "transition-transform duration-300 ease-out hover:-translate-y-1 will-change-transform",
    hoverGlow: "transition-all duration-300 ease-out hover:shadow-lg",
    imageZoom: "transition-transform duration-700 ease-out hover:scale-105 will-change-transform",
  },
} as const;

export default animations;
