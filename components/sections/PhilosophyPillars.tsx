'use client';

import React from 'react';
import Image from 'next/image';
import { philosophyPillars } from '@/data/philosophy';
import { ShieldCheck, Droplets, Leaf, Moon } from 'lucide-react';

export default function PhilosophyPillars() {
  const icons = [ShieldCheck, Droplets, Leaf, Moon];

  return (
    <section className="relative bg-gradient-to-b from-salt via-salt-dark to-darkness py-32 sm:py-44 lg:py-52 text-darkness overflow-hidden transition-colors duration-1000">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 border-b border-darkness-dim pb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-kingtide font-semibold">10</span>
            <span className="text-[10px] uppercase font-mono tracking-editorial text-darkness/70 font-medium">
              Conscious Stewardship // Mineral Modernism
            </span>
          </div>

          <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight text-darkness leading-[1.0]">
            Luxury, with a{' '}
            <span className="font-display-italic text-kingtide font-normal">
              lighter footprint.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-sm sm:text-base text-darkness/80 font-light leading-relaxed">
            True elegance leaves no scar on the landscape. Aqua Viva harmonizes architectural ambition with solar-electric independence, biological water filtration, and pristine habitat preservation.
          </p>
        </div>

        {/* Minimal Editorial Spread: 4 Pillars with Numbers & Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {philosophyPillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.number}
                className="group relative flex flex-col justify-between border-t border-darkness-dim pt-8 transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-light text-kingtide">
                      {pillar.number}
                    </span>
                    <Icon className="h-5 w-5 text-kingtide" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-editorial text-sage block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="font-display text-3xl font-light text-darkness tracking-tight group-hover:text-kingtide transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 font-sans text-xs sm:text-sm leading-relaxed text-darkness/80">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-darkness-dim/60">
                  <p className="font-serif text-sm italic text-kingtide/90">
                    {pillar.quote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
