/**
 * Photographer & Studio Information
 * Easily update this file to modify photographer biography, achievements, and branding.
 */

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface PhotographerData {
  name: string;
  brandName: string;
  tagline: string;
  role: string;
  portraitImage: string;
  bioParagraphs: string[];
  quote: string;
  signatureText: string;
  stats: StatItem[];
  badges: string[];
}

export const photographerData: PhotographerData = {
  name: "Arjun Verma",
  brandName: "Arjun Verma Photography",
  tagline: "Timeless Indian Wedding Stories",
  role: "Lead Candid Photographer & Cinematographer",
  portraitImage: "/photographer/photographer.png",
  bioParagraphs: [
    "Hello, I am Arjun Verma. For over eight years, I have had the deep privilege of entering families' most sacred celebrations, documenting the profound emotions, laughter, and timeless heritage of Indian weddings.",
    "My philosophy balances editorial minimalism with deep cultural reverence. Whether it is the radiant splash of Haldi, the delicate silence of Mehndi swirls, the sacred fire of the Saat Phere, or the tender tears of the Vidai, I look for the fleeting glances and genuine heartbeats that cannot be scripted.",
    "Every couple's story is an heirloom. Our boutique studio crafts visual poetry designed to be cherished not just tomorrow, but across generations.",
  ],
  quote: "“In every sacred ritual lies an eternal heartbeat. We preserve the quiet smiles, royal splendor, and sacred vows with understated grace.”",
  signatureText: "Arjun Verma",
  stats: [
    { value: "350+", label: "Weddings Captured", description: "Across 18+ royal destinations" },
    { value: "8+", label: "Years Experience", description: "Bespoke visual storytelling" },
    { value: "100K+", label: "Cherished Frames", description: "Curated with color perfection" },
    { value: "100%", label: "Client Delight", description: "Five-star verified reviews" },
  ],
  badges: [
    "Vogue & WeddingSutra Featured",
    "Destination Wedding Specialist",
    "Preserving Royal Indian Traditions",
    "Pan-India & Global Availability",
  ],
};

export default photographerData;
