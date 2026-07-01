import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-2/3">
            <h1 className="text-4xl tracking-tight font-extrabold text-zinc-100 sm:text-5xl md:text-6xl">
              <span className="block">Bridging OT and IT</span>
              <span className="block text-siemens">7 Years of Automation Excellence</span>
            </h1>
            <p className="mt-3 text-base text-zinc-400 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
              I am <span className="text-zinc-200 font-semibold">Jiyu Li</span>, a Senior Electrical & Automation Engineer specializing in medium-voltage drive commissioning, ATEX explosion-proof systems, and complex non-standard automation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-zinc-400">
                <MapPin className="h-5 w-5 mr-2 text-siemens" />
                <span>Available Worldwide</span>
              </div>
              <a href="mailto:Jreeylee92@outlook.com" className="flex items-center text-zinc-400 hover:text-zinc-200 transition">
                <Mail className="h-5 w-5 mr-2 text-siemens" />
                <span>Email Me</span>
              </a>
              <a href="https://www.linkedin.com/in/jiyu-li-software/" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-400 hover:text-zinc-200 transition">
                <Linkedin className="h-5 w-5 mr-2 text-siemens" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
