/**
 * Works / Portfolio Configuration
 * Title: "Our Work"
 * Categories: Wedding, Anniversary, Festival, Haldi, Mehndi
 * Main page shows 1-2 curated images of each category for a sleek, minimalist aesthetic.
 */

export type WorkCategory = "wedding" | "aniversary" | "festival" | "haldi" | "mehandi";

export interface CategoryInfo {
  id: WorkCategory;
  name: string;
  tagline: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: WorkCategory;
  image: string;
  location: string;
  description: string;
  isMainFeatured?: boolean;
}

export const workCategories: CategoryInfo[] = [
  { id: "wedding", name: "Wedding", tagline: "Sacred Pheras & Royal Vows" },
  { id: "haldi", name: "Haldi", tagline: "Sun-Kissed Euphoria & Marigold Showers" },
  { id: "mehandi", name: "Mehndi", tagline: "Intricate Henna & Soulful Melodies" },
  { id: "aniversary", name: "Anniversary", tagline: "Enduring Love & Golden Milestones" },
  { id: "festival", name: "Festival", tagline: "Cultural Splendor & Joyous Rhythms" },
];

export const worksData: WorkItem[] = [
  // --- Wedding ---
  {
    id: "wed-1",
    title: "Royal Mandap Radiance",
    category: "wedding",
    image: "/gallery/wedding/image.png",
    location: "Udaipur, Rajasthan",
    description: "The sacred vows under royal floral canopies with regal grace.",
    isMainFeatured: true,
  },
  {
    id: "wed-7",
    title: "Daylight Palace Serenade",
    category: "wedding",
    image: "/gallery/wedding/image copy 6.png",
    location: "Udaipur Lake Palace",
    description: "Sunlit architectural splendor framing a timeless couple moment.",
    isMainFeatured: true,
  },
  {
    id: "wed-2",
    title: "Saat Phere by Sacred Fire",
    category: "wedding",
    image: "/gallery/wedding/image copy.png",
    location: "Jaipur Heritage Palace",
    description: "Eternal vows illuminated by the agni, sealed with holy mantras.",
  },
  {
    id: "wed-3",
    title: "Varmala of Hearts",
    category: "wedding",
    image: "/gallery/wedding/image copy 2.png",
    location: "Jodhpur Fort",
    description: "The celebratory exchange of floral garlands amidst royal cheers.",
  },
  {
    id: "wed-4",
    title: "The Regal Bride",
    category: "wedding",
    image: "/gallery/wedding/image copy 3.png",
    location: "Delhi Haveli",
    description: "Deep crimson lehenga and timeless heirloom jewelry in quiet poise.",
  },
  {
    id: "wed-5",
    title: "Tender Vidai Glance",
    category: "wedding",
    image: "/gallery/wedding/image copy 4.png",
    location: "Varanasi Ghats",
    description: "Heartfelt tears and ancestral blessings at twilight departure.",
  },
  {
    id: "wed-6",
    title: "Baraat Rhythm & Grandeur",
    category: "wedding",
    image: "/gallery/wedding/image copy 5.png",
    location: "Lucknow Lawn",
    description: "Vibrant turbans, dhol beats, and ecstatic family processions.",
  },

  // --- Haldi ---
  {
    id: "hld-1",
    title: "Turmeric Gold Splash",
    category: "haldi",
    image: "/gallery/haldi/image.png",
    location: "Jaipur Resort Lawn",
    description: "Vibrant yellow paste applied amidst wild family laughter.",
    isMainFeatured: true,
  },
  {
    id: "hld-2",
    title: "Marigold Shower Bliss",
    category: "haldi",
    image: "/gallery/haldi/image copy.png",
    location: "Udaipur Courtyard",
    description: "Cascades of fragrant yellow petals raining down on the bride.",
    isMainFeatured: true,
  },
  {
    id: "hld-3",
    title: "Sibling Teasing Rituals",
    category: "haldi",
    image: "/gallery/haldi/image copy 2.png",
    location: "Delhi Farmhouse",
    description: "Playful smearing of sacred ubtan paste on cheeks.",
  },
  {
    id: "hld-4",
    title: "Floral Jewelry Radiance",
    category: "haldi",
    image: "/gallery/haldi/image copy 3.png",
    location: "Agra Courtyard",
    description: "Delicate mogra and rose petal earrings complementing the smile.",
  },
  {
    id: "hld-5",
    title: "The Haldi Glow",
    category: "haldi",
    image: "/gallery/haldi/image copy 4.png",
    location: "Goa Beach Villa",
    description: "Sunlight glinting through yellow sunglasses and sheer bliss.",
  },

  // --- Mehndi ---
  {
    id: "mhd-1",
    title: "Henna Symphony",
    category: "mehandi",
    image: "/gallery/mahndi/image.png",
    location: "Lucknow Heritage Lawn",
    description: "Intricate bridal peacocks, paisley swirls, and hidden groom initials.",
    isMainFeatured: true,
  },
  {
    id: "mhd-2",
    title: "Mehndi Raat Melodies",
    category: "mehandi",
    image: "/gallery/mahndi/image copy.png",
    location: "Chandigarh Garden",
    description: "Dholki songs sung late into the starry warm night.",
    isMainFeatured: true,
  },
  {
    id: "mhd-3",
    title: "Delicate Palms of Love",
    category: "mehandi",
    image: "/gallery/mahndi/image copy 2.png",
    location: "Jaipur Haveli",
    description: "Deep mahogany henna stain capturing ancient royal artistry.",
  },
  {
    id: "mhd-4",
    title: "Bridal Foot Filigree",
    category: "mehandi",
    image: "/gallery/mahndi/image copy 3.png",
    location: "Delhi Banquet",
    description: "Silver payal and intricate mandala henna motifs on feet.",
  },
  {
    id: "mhd-5",
    title: "Green & Marigold Dreams",
    category: "mehandi",
    image: "/gallery/mahndi/image copy 4.png",
    location: "Mumbai Rooftop",
    description: "Emerald green attire dancing against marigold floral walls.",
  },

  // --- Anniversary ---
  {
    id: "ann-1",
    title: "Silver Jubilee Grace",
    category: "aniversary",
    image: "/gallery/anniversary/image.png",
    location: "New Delhi",
    description: "Twenty-five years of shared laughter, quiet trust, and family roots.",
    isMainFeatured: true,
  },
  {
    id: "ann-7",
    title: "Heritage Heirloom",
    category: "aniversary",
    image: "/gallery/anniversary/image copy 6.png",
    location: "Agra Heritage Garden",
    description: "Dressed in heirloom silks, celebrating enduring commitments.",
    isMainFeatured: true,
  },
  {
    id: "ann-2",
    title: "The Vow Renewal",
    category: "aniversary",
    image: "/gallery/anniversary/image copy.png",
    location: "Mussoorie Hills",
    description: "Re-committing to love in the crisp misty mountain air.",
  },
  {
    id: "ann-3",
    title: "Generations Together",
    category: "aniversary",
    image: "/gallery/anniversary/image copy 2.png",
    location: "Jaipur Courtyard",
    description: "Grandparents, children, and grandchildren celebrating togetherness.",
  },
  {
    id: "ann-4",
    title: "Quiet Afternoon Glance",
    category: "aniversary",
    image: "/gallery/anniversary/image copy 3.png",
    location: "Kolkata Mansion",
    description: "Subtle unspoken affection etched across decades of companionship.",
  },
  {
    id: "ann-5",
    title: "Twilight Toast",
    category: "aniversary",
    image: "/gallery/anniversary/image copy 4.png",
    location: "Bengaluru Estate",
    description: "Intimate family dinner surrounded by warm fairy lights and memories.",
  },
  {
    id: "ann-6",
    title: "Golden Hour Warmth",
    category: "aniversary",
    image: "/gallery/anniversary/image copy 5.png",
    location: "Shimla Retreat",
    description: "Sunset glowing through hand-in-hand vintage love.",
  },

  // --- Festival ---
  {
    id: "fest-1",
    title: "Deepavali Royal Glow",
    category: "festival",
    image: "/gallery/festival/image.png",
    location: "Varanasi Riverfront",
    description: "Thousands of brass diyas reflecting light on sacred steps.",
    isMainFeatured: true,
  },
  {
    id: "fest-3",
    title: "Colors of Holi Ecstasy",
    category: "festival",
    image: "/gallery/festival/image copy.png",
    location: "Mathura & Vrindavan",
    description: "Organic gulal powders exploding in euphoric devotion.",
    isMainFeatured: true,
  },
  {
    id: "fest-2",
    title: "Rhythms of Navratri",
    category: "festival",
    image: "/gallery/festival/image2.png",
    location: "Ahmedabad",
    description: "Mirror-work chaniya cholis and swirling dandiya joy.",
  },
  {
    id: "fest-4",
    title: "Dussehra Torchlight",
    category: "festival",
    image: "/gallery/festival/image copy 2.png",
    location: "Mysore Palace",
    description: "Illuminated arches and royal procession heritage.",
  },
  {
    id: "fest-5",
    title: "Puja Sacred Offerings",
    category: "festival",
    image: "/gallery/festival/image copy 3.png",
    location: "Kolkata Bonedi Bari",
    description: "Marigold garlands, incense smoke, and conch shells resounding.",
  },
  {
    id: "fest-6",
    title: "Evening Aarti Serenity",
    category: "festival",
    image: "/gallery/festival/image copy 4.png",
    location: "Rishikesh Ganga Ghat",
    description: "Devotional brass lamps rising into the starry twilight sky.",
  },
  {
    id: "fest-7",
    title: "Karwa Chauth Moonrise",
    category: "festival",
    image: "/gallery/festival/image copy 5.png",
    location: "Chandigarh",
    description: "Sieve, earthen thali, and quiet prayers for lifelong bonds.",
  },
  {
    id: "fest-8",
    title: "Folk Drum Beats",
    category: "festival",
    image: "/gallery/festival/image copy 6.png",
    location: "Pushkar Fair",
    description: "Traditional dholak players bringing cultural festivities alive.",
  },
];

// Helper to get 1-2 curated images of each category for the main page
export const mainPageCuratedWorks = worksData.filter((item) => item.isMainFeatured);

export default worksData;
