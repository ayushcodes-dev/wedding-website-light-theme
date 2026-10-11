"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CalendarCheck, MessageSquare } from "lucide-react";
import photographerData from "@/website-data/photographer";
import contactData from "@/website-data/contact";

interface HeaderProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Our Work", href: "/#works" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#88131F]/10 py-3"
          : "bg-gradient-to-b from-[#120204]/80 via-[#120204]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Back to home"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.18em] uppercase font-semibold transition-colors ${
                isScrolled ? "text-[#5B0D15]" : "text-white group-hover:text-[#EADDC6]"
              }`}
            >
              {photographerData.name}
            </span>
            <span
              className={`font-cursive text-sm sm:text-base -mt-1 tracking-wider transition-colors ${
                isScrolled ? "text-[#7D111E]" : "text-[#D4AF37]"
              }`}
            >
              Wedding Stories & Films
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isGallery = link.href === "/gallery";
              const isActive = isGallery && pathname === "/gallery";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 ${
                    isActive
                      ? isScrolled
                        ? "text-[#7D111E] font-semibold"
                        : "text-[#D4AF37] font-semibold"
                      : isScrolled
                      ? "text-[#4A3E3F] hover:text-[#7D111E]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7D111E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Call */}
            <a
              href={`tel:${contactData.phoneNumber}`}
              className={`p-2 rounded-full border transition-colors ${
                isScrolled
                  ? "border-[#7D111E]/20 text-[#7D111E] hover:bg-[#7D111E]/10"
                  : "border-white/20 text-white/90 hover:bg-white/10"
              }`}
              title="Call Photographer"
              aria-label="Call Photographer"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Book Session CTA Button */}
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : window.location.href = "#contact"}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 bg-[#7D111E] hover:bg-[#5B0D15] text-white border border-[#961824]/40"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Book Session</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : window.location.href = "#contact"}
              className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-[#7D111E] text-white"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "text-[#5B0D15]" : "text-white"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#88131F]/15 shadow-xl animate-fade-in px-6 py-6 mt-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-[#2E2425] hover:text-[#7D111E] py-1 border-b border-[#88131F]/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#88131F]/15 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
                else window.location.href = "#contact";
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-semibold bg-[#7D111E] text-white"
            >
              <CalendarCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Book Session</span>
            </button>
            <div className="flex items-center justify-between gap-3 pt-2">
              <a
                href={`tel:${contactData.phoneNumber}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-medium border border-[#7D111E]/20 text-[#5B0D15]"
              >
                <Phone className="w-3.5 h-3.5 text-[#7D111E]" />
                <span>Call Directly</span>
              </a>
              <a
                href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
                  contactData.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-medium bg-[#25D366]/15 text-[#128C7E] border border-[#25D366]/30"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
