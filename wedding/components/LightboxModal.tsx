"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export interface LightboxImage {
  src: string;
  title: string;
  location?: string;
  category?: string;
}

interface LightboxModalProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
}: LightboxModalProps) {
  const handlePrev = useCallback(() => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 left-0 right-0 p-5 flex items-center justify-between text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-medium text-white">{currentImage?.title}</span>
          {currentImage?.location && (
            <span className="text-xs text-[#D4AF37] flex items-center gap-1 hidden sm:inline-flex">
              <MapPin className="w-3 h-3" />
              <span>{currentImage.location}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-white/60">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-6xl max-h-[82vh] w-full h-full flex items-center justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Prev Navigation Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-[#7D111E] text-white flex items-center justify-center transition-all border border-white/20 z-20"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-[#7D111E] text-white flex items-center justify-center transition-all border border-white/20 z-20"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/50 pointer-events-none">
        Use Arrow keys to navigate • Esc to close
      </div>
    </div>
  );
}
