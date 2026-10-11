/**
 * Hero Section Configuration
 * Update this file to change hero background image, headline, owner name,
 * and call-to-action buttons.
 */

export interface HeroData {
  ownerName: string;
  businessName: string;
  cursiveTagline: string;
  headlineMain: string;
  message: string;
  bgImage: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  availabilityNotice: string;
  trustPills: string[];
}

export const heroData: HeroData = {
  ownerName: "Arjun Verma",
  businessName: "Arjun Verma Photography",
  cursiveTagline: "Shubh Aarambh & Eternal Vows",
  headlineMain: "Preserving Sacred Moments in Timeless Grace",
  message:
    "Capturing real moments, beautiful details, and unforgettable memories. Explore Arjun Verma’s photography portfolio and get in touch for your next event.",
  bgImage: "/gallery/wedding/image copy 6.png",
  primaryCtaText: "Book Session",
  primaryCtaLink: "#contact",
  secondaryCtaText: "View My Work",
  secondaryCtaLink: "#works",
  availabilityNotice: "Now Reserving Dates for 2026 – 2027 Wedding Season",
  trustPills: [
    "Candid & Royal Weddings",
    "4K Cinema & Aerial Drone",
    "Udaipur • Jaipur • Delhi • Goa",
  ],
};

export default heroData;
