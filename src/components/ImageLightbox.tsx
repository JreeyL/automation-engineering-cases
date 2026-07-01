"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageItem } from '../utils/dataMapper';

interface LightboxProps {
  images: ImageItem[];
  initialIndex: number;
  onClose: () => void;
}

export default function ImageLightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lock body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!mounted || !images || images.length === 0) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-zinc-400 hover:text-white transition p-2 bg-zinc-900/50 rounded-full z-50"
      >
        <X className="h-8 w-8" />
      </button>

      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
            className="absolute left-4 md:left-8 text-zinc-400 hover:text-white transition p-3 bg-zinc-900/80 hover:bg-zinc-800 rounded-full z-50"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }} 
            className="absolute right-4 md:right-8 text-zinc-400 hover:text-white transition p-3 bg-zinc-900/80 hover:bg-zinc-800 rounded-full z-50"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      <div className="relative flex flex-col items-center justify-center w-full h-full p-4 md:p-12" onClick={onClose}>
        {/* Prevent click on image from closing modal */}
        <div className="relative max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={`/${images[currentIndex].path}`} 
            alt={images[currentIndex].description}
            className="max-h-[80vh] w-auto object-contain shadow-2xl rounded-md ring-1 ring-zinc-800"
          />
          <div className="mt-6 text-zinc-200 text-center bg-zinc-900/80 p-4 rounded-lg backdrop-blur-sm border border-zinc-800 shadow-xl inline-block min-w-[200px]">
            <p className="text-lg font-medium tracking-wide">{images[currentIndex].description}</p>
            {images.length > 1 && (
              <p className="text-sm text-siemens mt-1 font-semibold">{currentIndex + 1} / {images.length}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
