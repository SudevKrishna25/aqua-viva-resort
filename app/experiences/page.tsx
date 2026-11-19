'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { experiences } from '@/data/experiences';
import { useReservation } from '@/components/providers/ReservationProvider';
import { Clock, MapPin, CheckCircle, ArrowRight, Compass } from 'lucide-react';

export default function ExperiencesPage() {
  const { openReservation } = useReservation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredExperiences = selectedCategory === 'All'
    ? experiences
    : experiences.filter((e) => e.category === selectedCategory);

  return (
    <div className="bg-salt text-darkness min-h-screen pt-32 pb-24">
      {/* Editorial Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-b border-darkness-dim">
        <div className="flex items-center gap-2 text-xs font-mono text-kingtide uppercase tracking-wider mb-3">
          <Compass className="h-4 w-4" />
          <span>Curated Encounters // Mineral Modernism</span>
        </div>
        <h1 className="font-display text-4xl sm:text-7xl lg:text-9xl font-light tracking-tight text-darkness leading-[0.95]">
          Signature <span className="font-display-italic text-kingtide">Experiences</span>
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg text-darkness/80 font-light leading-relaxed">
          From silent solar-electric marine expeditions across virgin barrier reefs to subterranean magnesium hydrotherapy and candlelit sandbar degustations.
        </p>

        {/* Filter Pills */}
        <div className="mt-10 flex overflow-x-auto no-scrollbar gap-2 sm:flex-wrap pt-4 border-t border-darkness-dim pb-2">
          {['All', 'Gastronomy', 'Wellness', 'Expeditions', 'Botanical', 'Rituals', 'Moments'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 sm:px-5 py-2 font-mono text-xs uppercase tracking-luxury transition-all ${
                selectedCategory === cat
                  ? 'bg-darkness text-salt font-medium shadow-md'
                  : 'text-darkness/70 hover:text-darkness border border-darkness-dim hover:bg-salt-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Irregular Asymmetrical Experiences Showcase */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 space-y-20 sm:space-y-36">
        {filteredExperiences.map((exp, idx) => (
          <section
            key={exp.id}
            id={exp.slug}
            className="scroll-mt-32 border-b border-darkness-dim pb-24 last:border-b-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image (6 cols) */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="group relative aspect-[16/11] w-full overflow-hidden border border-darkness-dim bg-sage/20 shadow-2xl">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute top-4 left-4 bg-darkness/85 backdrop-blur-md px-3.5 py-1 text-[9px] font-mono uppercase tracking-wider text-salt border border-salt/20">
                    {exp.category}
                  </div>
                </div>

                {exp.quote && (
                  <div className="mt-4 border-l-2 border-kingtide pl-4 py-1 text-base font-serif italic text-darkness/80">
                    {exp.quote}
                  </div>
                )}
              </div>

              {/* Text Narrative & Highlights (6 cols) */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-sage uppercase tracking-wider mb-2">
                    <span className="text-kingtide font-semibold">0{idx + 1}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-kingtide" />
                      {exp.timing}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-kingtide" />
                      {exp.location}
                    </span>
                  </div>

                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-darkness tracking-tight">
                    {exp.title}
                  </h2>
                  <p className="mt-2 font-serif text-xl italic text-kingtide font-light">
                    “{exp.subtitle}”
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base leading-relaxed text-darkness/80">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="border-t border-darkness-dim pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-luxury text-darkness font-semibold block mb-3">
                    Curated Highlights
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-darkness/75">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-kingtide shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openReservation(`Experience: ${exp.title}`)}
                    data-magnetic="true"
                    data-cursor-text="BOOK"
                    className="group inline-flex items-center gap-2 bg-kingtide px-8 py-3.5 font-sans text-xs uppercase tracking-luxury text-salt hover:bg-kingtide-light transition-colors shadow-xl"
                  >
                    <span>Arrange Experience</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
