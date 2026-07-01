"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Check both window and document element for cross-browser reliability
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPosition > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    // Run once on mount in case page is already scrolled
    toggleVisibility();
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[9999] p-4 rounded-full bg-siemens text-white shadow-xl shadow-black/80 hover:bg-siemens-light hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-siemens ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
