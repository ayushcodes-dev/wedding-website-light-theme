/**
 * Services Configuration
 * Update this file to add, edit, or reorganize the photography services and packages.
 */

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  duration?: string;
  idealFor?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "royal-wedding",
    title: "Royal Wedding & Grand Reception",
    subtitle: "Sacred Rituals & Grandeur",
    description:
      "Comprehensive multicam candid storytelling from royal Baraat and Vedic Pheras to tender Vidai blessings.",
    image: "/service/royalweddingandreception.png",
    features: [
      "Lead Candid & Traditional Photographers",
      "4K Ultra-HD Cinematic Highlights Film",
      "Drone Aerial Venue Perspective",
      "Handcrafted Velvet Heirloom Album",
    ],
    duration: "Full Day",
    idealFor: "Palace & Banquets",
  },
  {
    id: "haldi-mehendi",
    title: "Haldi & Mehndi Festivities",
    subtitle: "Marigolds, Henna & Dance",
    description:
      "Lively yellow splashes, family laughter, intricate bridal henna filigree, and festive sangeet grooves.",
    image: "/service/haldiMehendi.png",
    features: [
      "Candid Euphoria & Water Splashes",
      "Bridal Henna Macro Closeups",
      "Short-form Social Reels & Edits",
      "Complete Family Group Portraits",
    ],
    duration: "4 to 6 Hours",
    idealFor: "Open-Air & Poolside",
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding & Couple Portraits",
    subtitle: "Intimate Editorial Stories",
    description:
      "Artfully directed couple portraits against majestic forts, heritage palaces, and golden hour vistas.",
    image: "/service/prewadding.png",
    features: [
      "Styling & Location Moodboard",
      "Cinematic Drone & Slow-Mo Film",
      "High-Res Editorial Retouching",
      "Digital Save-the-Date Video",
    ],
    duration: "1 to 2 Days",
    idealFor: "Heritage Locations",
  },
  {
    id: "anniversary-festival",
    title: "Anniversary & Heritage Vows",
    subtitle: "Milestones & Legacies",
    description:
      "Commemorating enduring love and silver/golden jubilees with three generations of family joy.",
    image: "/gallery/anniversary/image copy 6.png",
    features: [
      "Generational Family Portraits",
      "Intimate Candid Speeches & Moments",
      "Commemorative Fine Art Prints",
      "Private Online Cloud Archive",
    ],
    duration: "Half-Day",
    idealFor: "Family Estates",
  },
];

export default servicesData;
