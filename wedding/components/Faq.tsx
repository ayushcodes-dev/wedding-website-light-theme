"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import faqData, { FaqItem } from "@/website-data/faq";
import contactData from "@/website-data/contact";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#FAF8F5] text-[#1A1516]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#7D111E]/40" />
            <span className="font-cursive text-2xl sm:text-3xl text-[#7D111E]">
              Clarifying Every Step
            </span>
            <span className="w-8 h-[1px] bg-[#7D111E]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1516]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C5556] font-light max-w-xl mx-auto">
            Everything you need to know about our availability, destination travel, deliverables, and booking process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item: FaqItem) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#FDF4F5] border-[#7D111E]/30 shadow-sm"
                    : "bg-white border-[#88131F]/15 hover:border-[#7D111E]/25"
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-serif text-base sm:text-lg font-medium transition-colors ${
                      isOpen ? "text-[#5B0D15]" : "text-[#1A1516]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#7D111E] text-white rotate-180"
                        : "bg-[#F4EFE6] text-[#7D111E]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#5C5556] leading-relaxed font-light animate-fade-in border-t border-[#88131F]/10">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#88131F]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1A1516]">
              Have a specific ritual or custom question?
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5556]">
              We are delighted to walk you through our approach personally.
            </p>
          </div>
          <a
            href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
              "Hi Arjun, I had a specific question regarding wedding photography coverage."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#25D366] hover:bg-[#1ebc59] text-white shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
