"use client";

import React from "react";
import Image from "next/image";
import { CalendarCheck, ChevronDown, Sparkles, Camera } from "lucide-react";
import heroData from "@/website-data/hero";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const worksEl = document.getElementById("works");
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#120204] text-white">
      {/* Responsive Day Wedding Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.bgImage}
          alt="Day wedding celebration photography by Arjun Verma"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Smoke & Mist Gradient Overlay */}
        <div className="absolute inset-0 hero-smoke-gradient opacity-90" />

        {/* Ethereal Smoky Atmospheric Layer */}
        <div
          className="absolute inset-0 pointer-events-none animate-smoke opacity-60 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 55% at 50% 60%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 240, 230, 0.04) 50%, transparent 80%)",
          }}
        />

        {/* Dark Fade Gradient at bottom to smoothly transition into light body */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#120204]/70 to-[#FAF8F5]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 flex-1 flex flex-col justify-center items-center text-center">
        {/* Subtle Indian Cultural Cursive Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/35 mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-cursive text-xl sm:text-2xl text-[#EADDC6] tracking-wide">
            {heroData.cursiveTagline}
          </span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.25em] text-white/70 ml-1">
            | Est. 2017
          </span>
        </div>

        {/* Engaging Business / Owner Name (Creates First Impression) */}
        <div className="space-y-2 mb-4 animate-fade-in-up">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-medium">
            Fine Art Wedding Cinematography
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white drop-shadow-md">
            {heroData.ownerName}
          </h1>
          <p className="font-serif text-lg sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide italic">
            Photography & Films
          </p>
        </div>

        {/* Central engaging message as specified */}
        <div className="max-w-2xl mx-auto my-6 animate-fade-in-up">
          <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-sans font-light tracking-wide">
            {heroData.message}
          </p>
        </div>

        {/* Dual Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto animate-fade-in-up">
          {/* Primary CTA: Book Session */}
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white bg-[#7D111E] hover:bg-[#5B0D15] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-[#7D111E]/40 border border-[#961824]"
          >
            <CalendarCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>{heroData.primaryCtaText}</span>
          </button>

          {/* Secondary CTA: View My Work */}
          <button
            onClick={scrollToWorks}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white/95 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md border border-white/30 transition-all duration-300 hover:border-white/60"
          >
            <Camera className="w-4 h-4 text-white" />
            <span>{heroData.secondaryCtaText}</span>
          </button>
        </div>

        {/* Availability Pill */}
        <div className="mt-8 text-xs tracking-wider text-white/70 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{heroData.availabilityNotice}</span>
        </div>
      </div>

      {/* Trust Highlights Bar with dark fade */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15 text-center">
          {heroData.trustPills.map((pill, idx) => (
            <div
              key={idx}
              className="text-xs uppercase tracking-[0.2em] text-[#EADDC6]/90 font-medium py-1"
            >
              ✦ {pill}
            </div>
          ))}
        </div>

        {/* Down Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <a
            href="#about"
            className="p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
