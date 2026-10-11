"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Send,
  Calendar,
  Clock,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { InstagramIcon, YouTubeIcon, WhatsAppIcon } from "@/components/Icons";
import contactData from "@/website-data/contact";
import photographerData from "@/website-data/photographer";

interface ContactProps {
  initialService?: string;
}

export default function Contact({ initialService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    serviceType: initialService || "Royal Wedding & Grand Reception",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct detailed WhatsApp message for instant response
    const waText = `Namaste Arjun!
*New Wedding Inquiry via Website:*
• *Couple Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email}
• *Event Date:* ${formData.date || "Not specified yet"}
• *Celebration Type:* ${formData.serviceType}
• *City / Venue:* ${formData.city || "Not specified"}
• *Message:* ${formData.message || "Please check availability"}`;

    const waUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
      waText
    )}`;

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white text-[#1A1516] overflow-hidden">
      {/* Decorative top dark fade transition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#7D111E]/40" />
            <span className="font-cursive text-2xl sm:text-3xl text-[#7D111E]">
              Reserve Your Auspicious Dates
            </span>
            <span className="w-8 h-[1px] bg-[#7D111E]/40" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1516]">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C5556] font-light leading-relaxed">
            We would love to know about your love story, your family rituals, and your wedding vision.
            Reach out directly or send us an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Location, Map, Direct Call, WhatsApp, Email & Socials */}
          <div className="lg:col-span-5 space-y-8">
            {/* Written Location Details */}
            <div className="bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-[#88131F]/15 space-y-4 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#7D111E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1A1516]">
                    Studio & Office Location
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#7D111E] font-medium mt-0.5">
                    {contactData.studioName}
                  </p>
                  <div className="mt-2 text-xs sm:text-sm text-[#5C5556] leading-relaxed font-light">
                    {contactData.addressLines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    <p>{contactData.cityStateCountry} - {contactData.pinCode}</p>
                  </div>
                  <div className="mt-2 text-xs text-[#8A8182] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#7D111E]" />
                    <span>{contactData.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct Directions Link */}
              <div className="pt-2">
                <a
                  href={contactData.googleMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#7D111E] hover:text-[#5B0D15]"
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#88131F]/20 shadow-md h-60 w-full relative bg-zinc-200">
              <iframe
                title="Arjun Verma Studio Google Maps Location"
                src={contactData.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-125"
              />
            </div>

            {/* Direct Communication Buttons (Call, WhatsApp, Email) */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7D111E] font-semibold">
                Direct Channels:
              </p>

              {/* Direct Call Button */}
              <a
                href={`tel:${contactData.phoneNumber}`}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-[#88131F]/15 hover:border-[#7D111E] hover:bg-white transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7D111E]/10 text-[#7D111E] flex items-center justify-center group-hover:bg-[#7D111E] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A8182] block">Direct Call & Inquiries</span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#1A1516]">
                      {contactData.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#7D111E] uppercase tracking-wider">
                  Call Now →
                </span>
              </a>

              {/* Direct WhatsApp Button */}
              <a
                href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(
                  contactData.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#128C7E] block font-medium">Instant Response</span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#1A1516]">
                      WhatsApp Direct Chat
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#128C7E] uppercase tracking-wider">
                  Message →
                </span>
              </a>

              {/* Direct Email Button */}
              <a
                href={`mailto:${contactData.emailAddress}`}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-[#88131F]/15 hover:border-[#7D111E] hover:bg-white transition-all shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7D111E]/10 text-[#7D111E] flex items-center justify-center group-hover:bg-[#7D111E] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#8A8182] block">Official Email</span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#1A1516] break-all">
                      {contactData.emailAddress}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#7D111E] uppercase tracking-wider">
                  Email →
                </span>
              </a>
            </div>

            {/* Social Media Links: Instagram & YouTube */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7D111E] font-semibold mb-3">
                Follow On Social Media:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={contactData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#88131F]/20 text-[#5B0D15] hover:bg-[#7D111E] hover:text-white transition-all text-xs uppercase tracking-wider font-semibold shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={contactData.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#88131F]/20 text-[#5B0D15] hover:bg-[#7D111E] hover:text-white transition-all text-xs uppercase tracking-wider font-semibold shadow-sm"
                >
                  <YouTubeIcon className="w-4 h-4 text-[#FF0000]" />
                  <span>YouTube Films</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#88131F]/15 shadow-sm">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#7D111E] font-semibold">
                Direct Inquiry Form
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1516] mt-1">
                Tell Us About Your Celebration
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5556] mt-1 font-light">
                Fill this quick form to receive our brochure, package details, and date confirmation.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white border border-[#25D366]/40 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-[#1A1516]">
                  Thank You, {formData.name || "Friend"}!
                </h4>
                <p className="text-sm text-[#5C5556] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been submitted and opened in WhatsApp. Arjun will personally
                  respond to you within 2 to 4 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#7D111E] text-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Couple / Client Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F]">
                      Your Name / Couple Names *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pooja & Rohan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#88131F]/20 text-[#1A1516] text-sm focus:border-[#7D111E] transition-all"
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F]">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 62996 32625"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#88131F]/20 text-[#1A1516] text-sm focus:border-[#7D111E] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#88131F]/20 text-[#1A1516] text-sm focus:border-[#7D111E] transition-all"
                    />
                  </div>

                  {/* Auspicious Event Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F]">
                      Event Date / Auspicious Month
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#88131F]/20 text-[#1A1516] text-sm focus:border-[#7D111E] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Celebration Service Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F]">
                      Celebration Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#88131F]/20 text-[#1A1516] text-sm focus:border-[#7D111E] transition-all"
                    >
                      <option value="Royal Wedding & Grand Reception">
                        Royal Wedding & Grand Reception
                      </option>
                      <option value="Haldi & Mehndi Festivities">Haldi & Mehndi Festivities</option>
                      <option value="Pre-Wedding & Couple Portraits">
                        Pre-Wedding & Couple Portraits
                      </option>
                      <option value="Anniversary & Heritage Celebrations">
                        Anniversary & Heritage Celebrations
                      </option>
                      <option value="Destination Multi-Day Wedding">
                        Destination Multi-Day Wedding
                      </option>
                    </select>
                  </div>

                  {/* Destination City / Venue */}
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F]">
                      City / Venue Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ranchi, Jamshedpur, Patna"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#88131F]/20 text-[#1A1516] text-sm focus:border-[#7D111E] transition-all"
                    />
                  </div>
                </div>

                {/* Specific Requirements / Message */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#4A3E3F]">
                    Specific Rituals, Guest Count & Vision
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the ceremonies, number of days, expected guests, or any special moments you wish to capture..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#88131F]/20 text-[#1A1516] text-sm focus:border-[#7D111E] transition-all"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white bg-[#7D111E] hover:bg-[#5B0D15] active:scale-98 transition-all shadow-lg hover:shadow-xl border border-[#961824]"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>Check Availability & Send Inquiry</span>
                  </button>
                  <p className="text-[11px] text-[#8A8182] text-center mt-2">
                    🔒 We respect your privacy. No spam. Instant direct confirmation.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
