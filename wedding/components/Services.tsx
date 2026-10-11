"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight, Clock } from "lucide-react";
import servicesData, { ServiceItem } from "@/website-data/services";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const handleInquire = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-white text-[#1A1516]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-6 h-[1px] bg-[#7D111E]/40" />
          <span className="font-cursive text-2xl text-[#7D111E]">
            Sacred Ceremonies & Celebrations
          </span>
          <span className="w-6 h-[1px] bg-[#7D111E]/40" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#1A1516]">
          Signature Photography Offerings
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-xs sm:text-sm text-[#5C5556] font-light leading-relaxed">
          Bespoke visual narratives crafted with timeless Indian elegance, candid honesty, and cinematic artistry.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#88131F]/15 hover:border-[#7D111E]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Shorter Image Banner */}
              <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-zinc-100 shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Subtle Dark Fade Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0407]/85 via-[#1C0407]/25 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  {service.duration && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/60 backdrop-blur-md text-white border border-white/15">
                      <Clock className="w-2.5 h-2.5 text-[#D4AF37]" />
                      <span>{service.duration}</span>
                    </span>
                  )}
                  {service.idealFor && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#7D111E]/80 backdrop-blur-md text-white border border-[#D4AF37]/30">
                      {service.idealFor}
                    </span>
                  )}
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                    {service.subtitle}
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold mt-0.5 drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Compact Service Details & Inline Features */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3.5">
                <p className="text-xs sm:text-sm text-[#5C5556] leading-relaxed font-light line-clamp-2">
                  {service.description}
                </p>

                {/* 2-Column Compact Features Grid */}
                <div className="pt-2 border-t border-[#88131F]/10">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#4A3E3F]"
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-[#7D111E]/10 text-[#7D111E] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#7D111E]" />
                        </span>
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compact Inquire Action Button */}
                <div className="pt-1">
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full text-[11px] uppercase tracking-[0.16em] font-semibold text-[#5B0D15] hover:text-white bg-[#F4EFE6] hover:bg-[#7D111E] border border-[#7D111E]/20 transition-all duration-200 active:scale-98 group-hover:border-[#7D111E]"
                  >
                    <span>Inquire for this Package</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
