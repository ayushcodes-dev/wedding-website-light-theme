import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Great_Vibes, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import photographerData from "@/website-data/photographer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: "500",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: "400",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5B0D15",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${photographerData.name} | ${photographerData.tagline} & Royal Celebrations`,
  description:
    "Capturing real moments, beautiful details, and unforgettable memories across Indian royal weddings, Haldi, Mehndi, Pre-weddings, and destination celebrations.",
  keywords: [
    "Indian wedding photographer",
    "Destination wedding photography",
    "Udaipur royal wedding",
    "Jaipur wedding photographer",
    "Candid wedding films",
    "Haldi Mehndi photographer",
  ],
  openGraph: {
    title: `${photographerData.name} | ${photographerData.tagline}`,
    description:
      "Capturing real moments, beautiful details, and unforgettable memories. Explore portfolio & book your wedding dates.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#1A1516] font-sans antialiased selection:bg-[#7D111E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
