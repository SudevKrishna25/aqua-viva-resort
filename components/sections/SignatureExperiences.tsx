'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { experiences } from '@/data/experiences';
import { ArrowUpRight, Clock, MapPin, Sparkles } from 'lucide-react';

export default function SignatureExperiences() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Distinctive cursor context tags for each experience
  const cursorTags = ['TASTE', 'UNWIND', 'EXPEDITION', 'BOTANICAL', 'RITUAL', 'MOMENTS'];

  return (
    <section className="relative bg-salt py-28 sm:py-36 lg:py-44 text-darkness overflow-hidden">
      {/* Decorative architectural background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="mx-auto h-full max-w-7xl px-6 lg:px-12 grid grid-cols-12 border-x border-darkness">
          <div className="col-span-4 border-r border-darkness hidden lg:block" />
          <div className="col-span-4 border-r border-darkness hidden lg:block" />
          <div className="col-span-4 hidden lg:block" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-darkness-dim pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-kingtide font-semibold">06</span>
              <span className="text-[10px] uppercase font-mono tracking-editorial text-darkness/70 font-medium">
                Curated Encounters // Mineral Modernism
              </span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-darkness">
              Signature <span className="font-display-italic text-kingtide font-normal">Experiences</span>
            </h2>
          </div>

          <div>
            <Link
              href="/experiences"
              data-cursor-text="JOURNEYS"
              className="group inline-flex items-center gap-2 text-xs uppercase font-mono tracking-luxury font-medium text-kingtide hover:text-darkness transition-colors"
            >
              <span>Explore All 6 Journeys</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Asymmetric Experiences Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((exp, idx) => {
            const cursorTag = cursorTags[idx % cursorTags.length];
            // Asymmetric visual height adjustments for editorial rhythm
            const aspectClass = idx === 0 || idx === 3 ? 'aspect-[16/12]' : idx === 1 || idx === 4 ? 'aspect-[4/3]' : 'aspect-[16/10]';

            return (
              <div
                key={exp.id}
                onMouseEnter={() => setActiveIdx(idx)}
                data-cursor-text={cursorTag}
                className="group relative flex flex-col justify-between border border-darkness-dim bg-salt/60 p-6 transition-all duration-500 hover:border-kingtide hover:bg-salt hover:shadow-2xl"
              >
                <div>
                  {/* Image Showcase with Scale and Clip-reveal */}
                  <div className={`relative ${aspectClass} w-full overflow-hidden bg-sage/20 border border-darkness-dim mb-6`}>
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute top-3 left-3 bg-darkness/80 backdrop-blur-md px-3 py-1 text-[9px] font-mono uppercase tracking-wider text-salt">
                      {exp.category}
                    </div>
                  </div>

                  {/* Subtitle / Timing */}
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sage block mb-1">
                    0{idx + 1} — {exp.timing}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-3xl font-light text-darkness tracking-tight group-hover:text-kingtide transition-colors">
                    {exp.title}
                  </h3>

                  <p className="mt-3 font-sans text-xs leading-relaxed text-darkness/80 line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                {/* Highlights & Link */}
                <div className="mt-6 pt-4 border-t border-darkness-dim">
                  <div className="flex items-center justify-between text-xs font-mono text-sage">
                    <div className="flex items-center gap-1.5 truncate max-w-[200px]">
                      <MapPin className="h-3.5 w-3.5 text-kingtide shrink-0" />
                      <span className="truncate">{exp.location}</span>
                    </div>
                    <Link
                      href={`/experiences#${exp.slug}`}
                      className="group-hover:text-kingtide flex items-center gap-1 font-mono text-[11px] font-medium tracking-wider uppercase text-darkness"
                    >
                      <span>Discover</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
