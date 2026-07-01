import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-zinc-100 font-bold text-xl tracking-tight">INDUSTRIAL AUTOMATION</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#atex-applications" className="text-zinc-300 hover:text-siemens transition-colors px-3 py-2 rounded-md text-sm font-medium">ATEX & Explosion-Proof</a>
              <a href="#custom-automation" className="text-zinc-300 hover:text-siemens transition-colors px-3 py-2 rounded-md text-sm font-medium">Custom Automation</a>
              <a href="#mv-vfd-applications" className="text-zinc-300 hover:text-siemens transition-colors px-3 py-2 rounded-md text-sm font-medium">MV Drives</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
