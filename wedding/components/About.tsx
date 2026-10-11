"use client";

import React from "react";
import Image from "next/image";
import { Award, Heart, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import photographerData from "@/website-data/photographer";

interface AboutProps {
  onOpenBooking?: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1516] overflow-hidden">
      {/* Subtle mandala background touch */}
      <div className="absolute inset-0 mandala-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photographer Portrait Column with Indian Arch Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Subtle Dark Red & Gold Halo */}
              <div className="absolute -inset-2.5 rounded-t-[140px] rounded-b-2xl bg-gradient-to-b from-[#7D111E]/15 via-[#C5A059]/15 to-transparent blur-sm" />

              {/* Arched Portrait Container */}
              <div className="relative overflow-hidden shape-arch bg-[#FAF8F5] border-2 border-[#7D111E]/25 shadow-xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={photographerData.portraitImage}
                    alt={`Portrait of wedding photographer ${photographerData.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle bottom dark red gradient for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38060B]/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/15">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                      Lead Visual Artist
                    </p>
                    <p className="font-serif text-lg font-medium">{photographerData.name}</p>
                    <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      <span>Available Worldwide & Pan-India</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white border border-[#7D111E]/20 shadow-lg rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7D111E] text-white flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#5B0D15] leading-none">8+ Years</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#7D111E] font-medium mt-0.5">
                    Royal Weddings
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="font-cursive text-2xl text-[#7D111E]">
                  Behind The Camera
                </span>
                <span className="w-12 h-[1px] bg-[#7D111E]/40" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1516] tracking-tight leading-tight">
                Honoring the Sacred Spirit of Indian Celebrations
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#5C5556] leading-relaxed font-sans font-light">
              {photographerData.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Emotional Quote Block */}
            <div className="p-5 rounded-2xl bg-[#FDF4F5] border-l-4 border-[#7D111E] space-y-2">
              <p className="font-serif italic text-base sm:text-lg text-[#38060B]">
                {photographerData.quote}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#7D111E] font-semibold">
                  — {photographerData.name}
                </span>
                <span className="font-cursive text-2xl text-[#7D111E]">
                  {photographerData.signatureText}
                </span>
              </div>
            </div>

            {/* Key Milestones & Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#88131F]/15">
              {photographerData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#7D111E]">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#1A1516] font-semibold">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div className="text-[11px] text-[#8A8182] hidden sm:block">
                      {stat.description}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Badges Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {photographerData.badges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#4A3E3F]">
                  <CheckCircle2 className="w-4 h-4 text-[#7D111E] shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <button
                onClick={() => (onOpenBooking ? onOpenBooking() : (window.location.href = "#contact"))}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#7D111E] hover:bg-[#5B0D15] transition-all shadow-md active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Inquire For Your Wedding</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
