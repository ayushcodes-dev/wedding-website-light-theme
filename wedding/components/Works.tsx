"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maximize2, MapPin, ArrowRight, Sparkles } from "lucide-react";
import worksData, {
  workCategories,
  WorkCategory,
  WorkItem,
  mainPageCuratedWorks,
} from "@/website-data/works";

interface WorksProps {
  onOpenLightbox?: (
    index: number,
    images: { src: string; title: string; location: string }[]
  ) => void;
}

export default function Works({ onOpenLightbox }: WorksProps) {
  // 'all' shows 1-2 images from EACH category (10 curated photos total)
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Determine which 1-2 images to show based on filter
  const displayedItems: WorkItem[] =
    selectedFilter === "all"
      ? mainPageCuratedWorks
      : mainPageCuratedWorks.filter((item) => item.category === selectedFilter);

  const activeCategoryInfo = workCategories.find(
    (cat) => cat.id === selectedFilter
  );

  const handleImageClick = (item: WorkItem) => {
    if (onOpenLightbox) {
      const allLightboxImages = displayedItems.map((it) => ({
        src: it.image,
        title: it.title,
        location: it.location,
      }));
      const currentIndex = displayedItems.findIndex((it) => it.id === item.id);
      onOpenLightbox(currentIndex >= 0 ? currentIndex : 0, allLightboxImages);
    }
  };

  return (
    <section id="works" className="relative py-20 sm:py-28 bg-[#FAF8F5] text-[#1A1516]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimalist Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#7D111E]/40" />
            <span className="font-cursive text-2xl text-[#7D111E]">
              Curated Highlights
            </span>
            <span className="w-6 h-[1px] bg-[#7D111E]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1516]">
            Our Work
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#5C5556] font-light leading-relaxed">
            A selective preview of real celebrations — featuring 1–2 signature frames from every ceremony.
          </p>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-full text-xs tracking-[0.16em] uppercase font-medium transition-all ${
                selectedFilter === "all"
                  ? "bg-[#7D111E] text-white shadow-sm border border-[#961824]"
                  : "bg-white text-[#4A3E3F] hover:bg-[#F4EFE6] border border-[#88131F]/15"
              }`}
            >
              All Categories
            </button>
            {workCategories.map((category) => {
              const isActive = selectedFilter === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-xs tracking-[0.16em] uppercase font-medium transition-all ${
                    isActive
                      ? "bg-[#7D111E] text-white shadow-sm border border-[#961824]"
                      : "bg-white text-[#4A3E3F] hover:bg-[#F4EFE6] border border-[#88131F]/15"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Active Category Subtitle */}
          {activeCategoryInfo && (
            <div className="mt-5 text-xs text-[#7D111E] uppercase tracking-[0.2em] font-medium">
              Showing 2 Highlights • “{activeCategoryInfo.tagline}”
            </div>
          )}
        </div>

        {/* Minimalist Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item)}
              className="group cursor-pointer flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {/* Minimalist Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100 border border-[#88131F]/10 shadow-sm group-hover:shadow-lg transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Dark Fade Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0407]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>

                {/* Hover Ceremony Tag */}
                <div className="absolute bottom-3 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Minimalist Typographic Meta */}
              <div className="pt-3 px-1 text-left">
                <div className="flex items-center justify-between text-[11px] text-[#8A8182] mb-0.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#7D111E]">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-[#7D111E]" />
                    <span>{item.location}</span>
                  </span>
                </div>
                <h3 className="font-serif text-base font-medium text-[#1A1516] group-hover:text-[#7D111E] transition-colors truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Gallery Link Callout */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-[#7D111E] hover:text-white bg-white hover:bg-[#7D111E] border border-[#7D111E]/30 shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Explore Complete Gallery (All 32+ Photos in Unique Shapes)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <p className="text-[11px] text-[#8A8182] mt-2 font-light">
            View full collections of Wedding, Haldi, Mehndi, Anniversary & Festival ceremonies
          </p>
        </div>
      </div>
    </section>
  );
}
