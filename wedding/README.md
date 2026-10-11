# Arjun Verma Photography — Minimalist Indian Wedding Website

A modern, minimalistic, and high-conversion Indian wedding photography portfolio website built with **Next.js (App Router)**, **Tailwind CSS**, and **Google Fonts**.

The website is crafted with a signature **light theme with dark fades**, featuring deep shades of **dark red / royal crimson**, gold accents, and authentic Indian wedding cultural motifs. It is fully responsive and hardware-accelerated for smooth 60fps performance on low-power and older mobile devices.

---

## 🌟 Key Highlights & Design System

- **Minimalist Aesthetic with Indian Cultural Vibrance**: Avoids generic AI-generated templates; utilizes editorial layouts, handcrafted Google Fonts (*Playfair Display*, *Cormorant Garamond*, *Great Vibes* cursive script), and delicate royal gold and crimson accents.
- **Light Theme with Cinematic Dark Fades**: Crisp ivory and white canvas transitioning into velvety midnight red shadows in hero overlays, section dividers, and footers.
- **Hero Section with Ethereal Smoke Effect**: High-resolution day wedding background layered with atmospheric smoke gradients, engaging typography, and dual CTAs (*Book Session* and *View My Work*).
- **Interactive "Our Work" Portfolio (Main Page)**: Displays **1–2 curated signature frames per category** (Wedding, Haldi, Mehndi, Anniversary, Festival) for an uncluttered, high-end editorial preview.
- **Dedicated Image Shapes Page (`/gallery`)**: Showcases **all 32 photographs** across all 5 celebration categories in varied architectural frames:
  - 🏛️ **Palace Arch** (`shape-arch`): Inspired by royal Rajasthani palace jharokhas.
  - 💊 **Capsule Pill** (`shape-pill`): Modern elongated curvature with deep wine border.
  - 🖼️ **Royal Framed** (`framed`): Heritage double border framing.
  - 📐 **Asymmetric** (`shape-asymmetric`): Editorial diagonal cuts.
  - 🔲 **Soft Rounded** (`shape-rounded-card`): Minimalist contemporary cards.
- **Horizontal Scroll Bar Testimonials**: Smooth swipeable review cards showing client names, verified ratings, wedding celebrations, and heart-warming quotes.
- **Comprehensive Contact Section**: Written studio location, embedded Google Map, direct one-tap call button, direct WhatsApp message button, email address, Instagram, YouTube channel links, and interactive booking inquiry form.
- **Zero Lag on Low-Power Phones**: Uses pure CSS hardware-accelerated transitions (`translate3d`, `opacity`) without heavy JavaScript animation dependencies.

---

## 📁 Project & Folder Structure

```
├── website-data/               # 📁 All content displayed on the website
│   ├── photographer.ts         # Photographer bio, name, badges, stats, portrait
│   ├── hero.ts                 # Hero message, background image, headline, CTAs
│   ├── services.ts             # Signature packages, deliverables, images
│   ├── works.ts                # Portfolio photos by category (Wedding, Haldi, etc.)
│   ├── testimonials.ts         # Client reviews, ratings, couple names
│   ├── faq.ts                  # Frequently asked questions & answers
│   ├── contact.ts              # Studio location, Google Map, phone, WhatsApp, socials
│   ├── gallery.ts              # Photos in different artistic shapes for /gallery
│   └── index.ts                # Master export index
├── website data/               # 📁 Alias folder forwarding to website-data/
├── style/                      # 📁 UI styling configuration
│   ├── colors.ts               # Shades of dark red, ivory, white, gold, dark fade tokens
│   ├── animations.ts           # Fade-in and transition duration & easing presets
│   ├── typography.ts           # Google Fonts mapping & luxury letter spacing
│   └── theme.ts                # Master style export
├── components/                 # 📁 Reusable UI components
│   ├── Header.tsx              # Sticky navigation bar with quick Book button
│   ├── Hero.tsx                # Day wedding hero banner with smoke overlay
│   ├── About.tsx               # Photographer journey, stats, and arched portrait
│   ├── Services.tsx            # Package cards with images and feature checklist
│   ├── Works.tsx               # "Our Work" section with category filter tabs
│   ├── Testimonials.tsx        # Horizontal scroll bar with couple reviews
│   ├── Faq.tsx                 # Expandable accordion for common questions
│   ├── Contact.tsx             # Location, Map, Call, WhatsApp, Email & Inquiry form
│   ├── Footer.tsx              # Dark fade footer with cultural accents & links
│   ├── BookingModal.tsx        # Session booking popup with WhatsApp integration
│   ├── LightboxModal.tsx       # Fullscreen high-res photo viewer with keyboard navigation
│   ├── Icons.tsx               # Crisp SVG icons for Instagram, YouTube, WhatsApp
│   └── PageTransition.tsx      # Smooth fade transition on route change
├── app/
│   ├── layout.tsx              # Google fonts loading & global metadata
│   ├── globals.css             # Tailwind v4 directives, smoke overlays, shapes
│   ├── page.tsx                # Homepage
│   └── gallery/
│       └── page.tsx            # Image page with grid layout & artistic shapes
└── public/
    ├── photographer/           # Portrait of photographer
    ├── service/                # Service card images
    └── gallery/                # Wedding, Anniversary, Festival, Haldi, Mehndi photos
```

---

## 🛠️ How to Update the Website via Configuration

You **do not need to touch React components** to update website content. Simply edit the respective file in `website-data/`:

### 1. Photographer Info (`website-data/photographer.ts`)
Edit name, title, bio, experience milestones, portrait image path, or quotes:
```typescript
export const photographerData = {
  name: "Arjun Verma",
  brandName: "Arjun Verma Photography",
  portraitImage: "/photographer/photographer.png",
  // Edit biography, stats, and cultural quotes here
};
```

### 2. Hero Section (`website-data/hero.ts`)
Update background image, headline, and owner name:
```typescript
export const heroData = {
  ownerName: "Arjun Verma",
  message: "Capturing real moments, beautiful details, and unforgettable memories...",
  bgImage: "/gallery/wedding/image copy 6.png",
  primaryCtaText: "Book Session",
  secondaryCtaText: "View My Work",
};
```

### 3. Services & Packages (`website-data/services.ts`)
Add or edit service cards, deliverables checklist, and service images:
```typescript
export const servicesData = [
  {
    id: "royal-wedding",
    title: "Royal Wedding & Grand Reception",
    image: "/service/royalweddingandreception.png",
    features: ["Candid & Traditional Coverage", "4K Highlights Film", ...],
  },
  // Add new services here
];
```

### 4. Works & Portfolio (`website-data/works.ts`)
Add new photographs under any category: `wedding`, `aniversary`, `festival`, `haldi`, `mehandi`:
```typescript
export const worksData = [
  {
    id: "wed-custom",
    title: "Mandap Vows",
    category: "wedding",
    image: "/gallery/wedding/image.png",
    location: "Udaipur, Rajasthan",
    description: "Sacred pheras by the holy fire.",
  },
];
```

### 5. Client Testimonials (`website-data/testimonials.ts`)
Add reviews with couple names, wedding destination, rating (1–5), and heartfelt quotes:
```typescript
export const testimonialsData = [
  {
    names: "Pooja & Rohan Mehra",
    event: "Royal Palace Wedding",
    location: "Udaipur, Rajasthan",
    rating: 5,
    message: "Arjun captured every fleeting glance without making us pose artificially...",
  },
];
```

### 6. Studio Contact & Social Links (`website-data/contact.ts`)
Update studio address, Google Map embed URL, WhatsApp number, phone number, and social media handles:
```typescript
export const contactData = {
  phoneNumber: "+919876543210",
  whatsappNumber: "919876543210",
  emailAddress: "contact@arjunvermaphotography.com",
  instagramUrl: "https://www.instagram.com",
  youtubeUrl: "https://www.youtube.com",
  fullAddress: "Heritage Haveli Studio, MG Road, New Delhi 110001",
};
```

### 7. Image Shapes Gallery (`website-data/gallery.ts`)
Add or configure shapes (`arch`, `pill`, `framed`, `asymmetric`, `rounded`) for the dedicated `/gallery` page:
```typescript
export const galleryPhotos = [
  {
    id: "g-arch-1",
    title: "Sacred Palace Mandap",
    category: "wedding",
    image: "/gallery/wedding/image copy 6.png",
    shape: "arch", // "arch" | "pill" | "framed" | "asymmetric" | "rounded"
  },
];
```

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Test
```bash
npm run build
npm run start
```

---

## 🎨 Styling Configuration (`style/`)

- `style/colors.ts`: Configures shades of dark red (`#7D111E`, `#5B0D15`, `#38060B`, `#961824`), light ivory tones (`#FAF8F5`), and gold accents (`#D4AF37`, `#C5A059`).
- `style/animations.ts`: Controls timing and easing curves for smooth fade-ins.
- `style/typography.ts`: Letter-spacing and font mappings for luxury Indian editorial design.
