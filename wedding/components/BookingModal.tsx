"use client";

import React, { useState } from "react";
import { X, CalendarCheck, Send, MessageCircle } from "lucide-react";
import contactData from "@/website-data/contact";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultService = "Royal Wedding & Grand Reception",
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    serviceType: defaultService,
    city: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText = `Namaste Arjun!
*Session Booking Request via Website:*
• *Couple/Client:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Auspicious Date:* ${formData.date || "To be decided"}
• *Ceremony Package:* ${formData.serviceType}
• *Destination / Venue:* ${formData.city || "Not specified"}
• *Notes:* ${formData.notes || "Please check availability"}`;

    const waUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
      waText
    )}`;

    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#88131F]/30 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#5C5556] hover:text-[#1A1516] border border-[#88131F]/15 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7D111E]/10 text-[#7D111E] text-xs font-semibold uppercase tracking-wider mb-2">
            <CalendarCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Reserve Wedding Dates</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1516]">
            Book Your Photography Session
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5556] mt-1 font-light">
            Share your ceremony dates to verify crew availability and receive our official brochure.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F] block mb-1">
              Couple / Client Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ananya & Kabir"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#88131F]/20 text-sm focus:border-[#7D111E]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F] block mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#88131F]/20 text-sm focus:border-[#7D111E]"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F] block mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="couple@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#88131F]/20 text-sm focus:border-[#7D111E]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F] block mb-1">
                Event Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#88131F]/20 text-sm focus:border-[#7D111E]"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F] block mb-1">
                Venue City
              </label>
              <input
                type="text"
                placeholder="e.g. Udaipur, Jaipur, Delhi"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#88131F]/20 text-sm focus:border-[#7D111E]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F] block mb-1">
              Ceremony Package
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#88131F]/20 text-sm focus:border-[#7D111E]"
            >
              <option value="Royal Wedding & Grand Reception">Royal Wedding & Grand Reception</option>
              <option value="Haldi & Mehndi Festivities">Haldi & Mehndi Festivities</option>
              <option value="Pre-Wedding & Couple Portraits">Pre-Wedding & Couple Portraits</option>
              <option value="Anniversary & Heritage Celebrations">Anniversary & Heritage Celebrations</option>
              <option value="Complete Multi-Day Wedding Saga">Complete Multi-Day Wedding Saga</option>
            </select>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F] block mb-1">
              Any Special Message
            </label>
            <textarea
              rows={2}
              placeholder="Tell us any special details or preferences..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2 rounded-xl bg-white border border-[#88131F]/20 text-sm focus:border-[#7D111E]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold text-white bg-[#7D111E] hover:bg-[#5B0D15] transition-all shadow-md active:scale-95 border border-[#961824]"
            >
              <Send className="w-4 h-4 text-[#D4AF37]" />
              <span>Confirm & Send via WhatsApp</span>
            </button>
            <p className="text-[11px] text-[#8A8182] text-center mt-2">
              Opens WhatsApp chat directly with Arjun Verma for instant booking confirmation.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
