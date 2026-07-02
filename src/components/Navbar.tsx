"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-zinc-100 font-bold text-xl tracking-tight">INDUSTRIAL AUTOMATION</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#atex-applications" className="text-zinc-300 hover:text-siemens transition-colors px-3 py-2 rounded-md text-sm font-medium">ATEX & Explosion-Proof</a>
              <a href="#custom-automation" className="text-zinc-300 hover:text-siemens transition-colors px-3 py-2 rounded-md text-sm font-medium">Custom Automation</a>
              <a href="#mv-vfd-applications" className="text-zinc-300 hover:text-siemens transition-colors px-3 py-2 rounded-md text-sm font-medium">MV Drives</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-siemens transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#atex-applications" 
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-siemens hover:bg-zinc-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              ATEX & Explosion-Proof
            </a>
            <a 
              href="#custom-automation" 
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-siemens hover:bg-zinc-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Custom Automation
            </a>
            <a 
              href="#mv-vfd-applications" 
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-siemens hover:bg-zinc-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              MV Drives
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
