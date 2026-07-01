import React from 'react';

export default function SectionDivider() {
  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-800 border-dashed"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-4 bg-zinc-950 text-siemens-dark">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="10" y="10" width="4" height="4" />
          </svg>
        </span>
      </div>
    </div>
  );
}
