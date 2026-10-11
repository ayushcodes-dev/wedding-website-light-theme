"use client";

import React from "react";
import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { InstagramIcon, YouTubeIcon } from "@/components/Icons";
import photographerData from "@/website-data/photographer";
import contactData from "@/website-data/contact";

export default function Footer() {
  return (
    <footer className="relative bg-[#120204] text-white overflow-hidden border-t border-[#88131F]/30">
      {/* Subtle top dark red gradient glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7D111E] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase font-semibold text-white">
                {photographerData.name}
              </span>
              <span className="font-cursive text-xl text-[#D4AF37] -mt-1 tracking-wider">
                Wedding Stories & Films
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light max-w-sm">
              Honoring India’s timeless traditions and unscripted family emotions. Documenting royal
              vows, heartfelt vidais, and joyous festivities with understated luxury.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={contactData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-[#7D111E] hover:border-[#7D111E] text-white flex items-center justify-center transition-all"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={contactData.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-[#7D111E] hover:border-[#7D111E] text-white flex items-center justify-center transition-all"
                aria-label="YouTube Channel"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactData.emailAddress}`}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 hover:bg-[#7D111E] hover:border-[#7D111E] text-white flex items-center justify-center transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Explore
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  Photographer Journey
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Signature Packages
                </Link>
              </li>
              <li>
                <Link href="/#works" className="hover:text-white transition-colors">
                  Portfolio Categories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Editorial Shapes Gallery</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#7D111E] text-white">New</span>
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-white transition-colors">
                  Couple Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Common Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Studio & Presence
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/75 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{contactData.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${contactData.phoneNumber}`} className="hover:text-white">
                  {contactData.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${contactData.emailAddress}`} className="hover:text-white break-all">
                  {contactData.emailAddress}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-3">
          <p>© 2026 {photographerData.brandName}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with reverence for Indian Wedding Traditions</span>
            <Heart className="w-3.5 h-3.5 text-[#7D111E] fill-[#7D111E]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
