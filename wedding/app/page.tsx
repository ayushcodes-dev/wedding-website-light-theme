"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import LightboxModal, { LightboxImage } from "@/components/LightboxModal";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "Royal Wedding & Grand Reception"
  );
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    images: LightboxImage[];
  }>({
    isOpen: false,
    currentIndex: 0,
    images: [],
  });

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (index: number, images: LightboxImage[]) => {
    setLightboxState({
      isOpen: true,
      currentIndex: index,
      images,
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1A1516] flex flex-col justify-between selection:bg-[#7D111E] selection:text-white">
        {/* Navigation Bar */}
        <Header onOpenBooking={() => handleOpenBooking()} />

        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        <main>
          {/* About Section */}
          <About onOpenBooking={() => handleOpenBooking()} />

          {/* Services Section */}
          <Services onSelectService={(svc) => handleOpenBooking(svc)} />

          {/* Works Section */}
          <Works onOpenLightbox={handleOpenLightbox} />

          {/* Testimonials Section */}
          <Testimonials />

          {/* FAQ Section */}
          <Faq />

          {/* Contact Section */}
          <Contact initialService={selectedService} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Quick Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          defaultService={selectedService}
        />

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxState.isOpen}
          currentIndex={lightboxState.currentIndex}
          images={lightboxState.images}
          onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
          onIndexChange={(newIndex) =>
            setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }))
          }
        />
      </div>
    </PageTransition>
  );
}
