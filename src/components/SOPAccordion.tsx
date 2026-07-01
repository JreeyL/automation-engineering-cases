"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface SOPAccordionProps {
  sop: {
    title: string;
    steps: string[];
  };
}

export default function SOPAccordion({ sop }: SOPAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 border border-zinc-800 rounded-lg bg-zinc-900/50 overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-zinc-800/50 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <ShieldCheck className="h-6 w-6 text-siemens" />
          <h3 className="text-lg font-semibold text-zinc-100">{sop.title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-zinc-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-zinc-400" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-zinc-800/50">
          <ul className="space-y-3">
            {sop.steps.map((step, idx) => {
              // Highlight the step number for better readability
              const match = step.match(/^(\d+\.)(.*)/);
              if (match) {
                return (
                  <li key={idx} className="text-sm text-zinc-300 leading-relaxed flex items-start">
                    <span className="font-bold text-siemens mr-2 w-6 shrink-0">{match[1]}</span>
                    <span>{match[2]}</span>
                  </li>
                );
              }
              return (
                <li key={idx} className="text-sm text-zinc-300 leading-relaxed">
                  {step}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
