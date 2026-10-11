"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, Maximize2, CalendarCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LightboxModal from "@/components/LightboxModal";
import BookingModal from "@/components/BookingModal";
import PageTransition from "@/components/PageTransition";
import galleryPhotos, { GalleryPhoto, GalleryShape } from "@/website-data/gallery";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter photos by category
  const filteredPhotos =
    selectedCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Photos", count: galleryPhotos.length },
    {
      id: "wedding",
      label: "Wedding",
      count: galleryPhotos.filter((p) => p.category === "wedding").length,
    },
    {
      id: "haldi",
      label: "Haldi",
      count: galleryPhotos.filter((p) => p.category === "haldi").length,
    },
    {
      id: "mehandi",
      label: "Mehndi",
      count: galleryPhotos.filter((p) => p.category === "mehandi").length,
    },
    {
      id: "aniversary",
      label: "Anniversary",
      count: galleryPhotos.filter((p) => p.category === "aniversary").length,
    },
    {
      id: "festival",
      label: "Festival",
      count: galleryPhotos.filter((p) => p.category === "festival").length,
    },
  ];

  const getShapeClass = (shape: GalleryShape) => {
    switch (shape) {
      case "arch":
        return "shape-arch border border-[#7D111E]/20 shadow-sm";
      case "pill":
        return "shape-pill border border-[#7D111E]/20 shadow-sm";
      case "framed":
        return "rounded-2xl p-1.5 bg-white border border-[#88131F]/25 shadow-sm";
      case "asymmetric":
        return "shape-asymmetric border border-[#7D111E]/20 shadow-sm";
      case "rounded":
      default:
        return "shape-rounded-card border border-[#88131F]/15 shadow-sm";
    }
  };

  const lightboxImages = filteredPhotos.map((p) => ({
    src: p.image,
    title: p.title,
    location: p.categoryLabel,
  }));

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1A1516] flex flex-col justify-between">
        <Header onOpenBooking={() => setIsBookingOpen(true)} />

        <main className="flex-1 pt-28 sm:pt-32 pb-20">
          {/* Minimalist Gallery Header */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <Link
                href="/#works"
                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#7D111E] hover:text-[#5B0D15] transition-colors bg-white px-3 py-1 rounded-full border border-[#88131F]/15 shadow-2xs"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Back to Home</span>
              </Link>
            </div>

            <div>
              <span className="font-cursive text-2xl sm:text-3xl text-[#7D111E]">
                The Complete Archive
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1516] mt-1">
                Visual Stories in Distinct Shapes
              </h1>
              <p className="max-w-xl mx-auto mt-2 text-xs sm:text-sm text-[#5C5556] font-light leading-relaxed">
                Explore all {galleryPhotos.length} photographs from Wedding, Haldi, Mehndi,
                Anniversary, and Festival celebrations in curated architectural frames.
              </p>
            </div>

            {/* Minimalist Filter Bar */}
            <div className="mt-8 space-y-3">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                        isActive
                          ? "bg-[#7D111E] text-white shadow-xs border border-[#961824]"
                          : "bg-white text-[#4A3E3F] hover:bg-[#F4EFE6] border border-[#88131F]/15"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="ml-1 opacity-70 text-[10px]">({cat.count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Minimalist Multi-Shape Photo Grid (Showing ALL images) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPhotos.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-[#88131F]/15">
                <p className="font-serif text-base text-[#5C5556]">
                  No photographs match the selected category.
                </p>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="mt-3 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#7D111E] text-white"
                >
                  Show All Photos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-start">
                {filteredPhotos.map((photo, index) => {
                  const shapeClass = getShapeClass(photo.shape);

                  return (
                    <div
                      key={photo.id}
                      onClick={() => setLightboxIndex(index)}
                      className="group cursor-pointer flex flex-col items-center animate-fade-in"
                      style={{ animationDelay: `${(index % 8) * 35}ms` }}
                    >
                      {/* Shaped Image Container */}
                      <div
                        className={`relative w-full ${photo.aspectClass || "aspect-[3/4]"} overflow-hidden bg-zinc-100 ${shapeClass} transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-md`}
                      >
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* Subtle Minimal Hover Dark Tint with Enlarge Icon */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0407]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-medium">
                            {photo.shape.toUpperCase()}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20">
                            <Maximize2 className="w-3 h-3 text-[#D4AF37]" />
                          </div>
                        </div>
                      </div>

                      {/* Minimalist Typographic Meta Underneath */}
                      <div className="mt-2.5 text-center px-2 w-full">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#7D111E] block">
                          {photo.categoryLabel}
                        </span>
                        <h3 className="font-serif text-sm sm:text-base font-medium text-[#1A1516] group-hover:text-[#7D111E] transition-colors truncate">
                          {photo.title}
                        </h3>
                        <p className="text-[11px] text-[#8A8182] font-light mt-0.5 truncate">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Minimalist Bottom Booking Banner */}
            <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#FDF4F5] border border-[#7D111E]/15 text-center space-y-3">
              <span className="font-cursive text-2xl sm:text-3xl text-[#7D111E]">
                Ready to Preserve Your Own Heirloom?
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#1A1516]">
                Let’s Create Timeless Art for Your Wedding
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5556] max-w-lg mx-auto font-light leading-relaxed">
                Connect with Arjun Verma directly to discuss ceremony dates, customized coverage,
                and exclusive packages.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#7D111E] hover:bg-[#5B0D15] transition-all shadow-xs active:scale-95"
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Book Photography Session</span>
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <LightboxModal
            images={lightboxImages}
            currentIndex={lightboxIndex}
            isOpen={true}
            onClose={() => setLightboxIndex(null)}
            onIndexChange={(idx) => setLightboxIndex(idx)}
          />
        )}

        {/* Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </PageTransition>
  );
}
