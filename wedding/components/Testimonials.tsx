"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import testimonialsData, { TestimonialItem } from "@/website-data/testimonials";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-white text-[#1A1516] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Scroll Control Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="font-cursive text-2xl sm:text-3xl text-[#7D111E]">
                Love Letters & Memories
              </span>
              <span className="w-10 h-[1px] bg-[#7D111E]/40" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1516]">
              Words from Our Couples
            </h2>
            <p className="text-sm sm:text-base text-[#5C5556] font-light max-w-xl">
              Authentic stories from families who trusted us with their most sacred vows and celebrations.
            </p>
          </div>

          {/* Navigation Arrows for Horizontal Scroll Bar */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-[#88131F]/20 text-[#5B0D15] hover:bg-[#7D111E] hover:text-white transition-all flex items-center justify-center active:scale-95 shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-[#88131F]/20 text-[#5B0D15] hover:bg-[#7D111E] hover:text-white transition-all flex items-center justify-center active:scale-95 shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Bar Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {testimonialsData.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[420px] md:w-[460px] bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#88131F]/15 hover:border-[#7D111E]/35 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#7D111E]/20" />
                </div>

                {/* Review Message */}
                <p className="text-sm sm:text-base text-[#4A3E3F] leading-relaxed italic font-serif">
                  “{item.message}”
                </p>
              </div>

              {/* Couple Info with Thumbnail */}
              <div className="mt-8 pt-5 border-t border-[#88131F]/15 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  {item.featuredPhoto && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#7D111E]/20 shrink-0">
                      <Image
                        src={item.featuredPhoto}
                        alt={item.names}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#1A1516] leading-snug">
                      {item.names}
                    </h3>
                    <p className="text-xs text-[#7D111E] font-medium">{item.event}</p>
                    <p className="text-[11px] text-[#8A8182]">{item.location}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#8A8182] block">{item.date}</span>
                  <div className="inline-flex items-center gap-1 text-[11px] text-[#25D366] font-medium mt-0.5">
                    <Heart className="w-3 h-3 fill-current" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Bar Hint for Mobile Users */}
        <div className="mt-2 text-center text-xs text-[#8A8182] md:hidden">
          ← Swipe horizontally to read more reviews →
        </div>
      </div>
    </section>
  );
}
