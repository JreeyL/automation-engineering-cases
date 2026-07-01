import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SectionDivider from '../components/SectionDivider';
import SOPAccordion from '../components/SOPAccordion';
import { getPortfolioData } from '../utils/dataMapper';

export default function Home() {
  const categories = getPortfolioData();

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {categories.map((category, index) => (
          <section key={category.categoryId} id={category.categoryId} className="pt-24 -mt-24">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight sm:text-4xl">
                {category.category}
              </h2>
            </div>
            
            {category.sharedSOP && (
              <SOPAccordion sop={category.sharedSOP} />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.applications.map(app => (
                <ProjectCard key={app.id} app={app} />
              ))}
            </div>

            {index < categories.length - 1 && <SectionDivider />}
          </section>
        ))}
      </div>
    </main>
  );
}
