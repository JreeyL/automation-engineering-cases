"use client";
import React, { useState } from 'react';
import { Application } from '../utils/dataMapper';
import { ExternalLink, Zap, MapPin, Building2, Tag } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

interface ProjectCardProps {
  app: Application;
}

export default function ProjectCard({ app }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/50 flex flex-col h-full">
        {/* Header Section */}
        <div className="p-6 border-b border-zinc-800/50 flex-grow">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-zinc-100 leading-tight">
              {app.unit}
            </h3>
            {app.atexRating && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20 whitespace-nowrap ml-3">
                <Zap className="w-3 h-3 mr-1" />
                {app.atexRating}
              </span>
            )}
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex items-start text-zinc-400 text-sm">
              <Building2 className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-siemens" />
              {app.siteUrl ? (
                <a href={app.siteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-siemens transition-colors flex items-center">
                  {app.site} <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              ) : (
                <span>{app.site}</span>
              )}
            </div>
            <div className="flex items-start text-zinc-400 text-sm">
              <Tag className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-siemens" />
              <span>{app.equipment}</span>
            </div>
            {app.projectType && (
              <div className="flex items-start text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-siemens" />
                <span>{app.projectType}</span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-2">Key Features</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
                {app.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
              </ul>
            </div>
            {app.technicalContributions && (
              <div>
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-2 mt-4">Technical Contributions</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400">
                  {app.technicalContributions.map((contrib, idx) => <li key={idx}>{contrib}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Gallery Footer */}
        {app.images && app.images.length > 0 && (
          <div className="p-4 bg-zinc-950/50 border-t border-zinc-800 flex items-center space-x-3 overflow-x-auto">
            {app.images.slice(0, 3).map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(idx)}
                className="relative h-16 w-24 shrink-0 rounded-md overflow-hidden cursor-pointer group border border-zinc-700"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`/${img.path}`} 
                  alt={img.description} 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
            {app.images.length > 3 && (
              <div 
                onClick={() => openLightbox(3)}
                className="h-16 w-24 shrink-0 rounded-md border border-zinc-700 bg-zinc-800 flex items-center justify-center cursor-pointer hover:bg-zinc-700 transition"
              >
                <span className="text-xs font-medium text-zinc-300">+{app.images.length - 3} More</span>
              </div>
            )}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox 
          images={app.images} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxOpen(false)} 
        />
      )}
    </>
  );
}
