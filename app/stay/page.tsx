'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { accommodations } from '@/data/accommodations';
import { useReservation } from '@/components/providers/ReservationProvider';
import { Maximize2, Users, Bed, Waves, ArrowRight, Check, Compass, ArrowUpRight } from 'lucide-react';

export default function StayPage() {
  const { openReservation } = useReservation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredAccommodations = selectedCategory === 'All'
    ? accommodations
    : accommodations.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-darkness text-salt min-h-screen pt-32 pb-24">
      {/* Editorial Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-b border-salt/15">
        <div className="flex items-center gap-2 text-xs font-mono text-shipmate uppercase tracking-wider mb-3">
          <Compass className="h-4 w-4" />
          <span>Sanctuary Portfolio // 08° 14′ S, 115° 09′ E</span>
        </div>
        <h1 className="font-display text-4xl sm:text-7xl lg:text-9xl font-light tracking-tight text-salt leading-[0.95]">
          The Residence <span className="font-display-italic text-shipmate">Collection</span>
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg text-sage font-light leading-relaxed">
          Suspended over turquoise mineral shallows, embedded within living botanical foliage, or crowning dramatic granite cliffs. Each private residence is conceived as an architectural instrument tuned to the cadence of the tides.
        </p>

        {/* Category Filters */}
        <div className="mt-10 flex overflow-x-auto no-scrollbar gap-2 sm:flex-wrap pt-4 border-t border-salt/15 pb-2">
          {['All', 'Overwater', 'Beachfront', 'Panoramic Sanctuary'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-5 sm:px-6 py-2.5 font-mono text-xs uppercase tracking-luxury transition-all ${
                selectedCategory === cat
                  ? 'bg-salt/20 text-salt border-b-2 border-shipmate font-medium shadow-md'
                  : 'text-sage hover:text-salt hover:bg-salt/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accommodations List */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 space-y-20 sm:space-y-36">
        {filteredAccommodations.map((villa, idx) => (
          <section
            key={villa.id}
            id={villa.id}
            className="scroll-mt-32 border-b border-salt/15 pb-20 sm:pb-28 last:border-b-0"
          >
            {/* Top Villa Meta */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <span className="font-mono text-xs text-shipmate uppercase tracking-wider block mb-2">
                  0{idx + 1} // {villa.category} SANCTUARY
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-light text-salt tracking-tight">
                  {villa.name}
                </h2>
                <p className="mt-2 font-serif text-2xl italic text-sage font-light">
                  “{villa.tagline}”
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="text-left sm:text-right">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-sage">Guaranteed Rates From</div>
                  <div className="font-mono text-xl sm:text-2xl text-shipmate font-light">{villa.priceFrom}</div>
                </div>
                <button
                  onClick={() => openReservation(villa.name)}
                  data-magnetic="true"
                  data-cursor-text="RESERVE"
                  className="bg-kingtide px-8 py-4 font-sans text-xs uppercase tracking-luxury text-salt hover:bg-kingtide-light transition-colors shadow-xl"
                >
                  Inquire for Residence
                </button>
              </div>
            </div>

            {/* Primary Visual */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-salt/20 bg-darkness-surface shadow-2xl mb-8 group">
              <Image
                src={villa.primaryImage}
                alt={villa.name}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkness via-transparent to-transparent opacity-60" />
            </div>

            {/* Gallery Strips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
              {villa.galleryImages.map((img, gIdx) => (
                <div key={gIdx} className="relative aspect-[16/10] overflow-hidden border border-salt/15 group">
                  <Image
                    src={img}
                    alt={`${villa.name} detail ${gIdx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
              ))}
            </div>

            {/* Architectural & Experience Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
              {/* Left Column: Long Narrative (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-display text-3xl font-light text-salt">
                  Architectural Narrative
                </h3>
                <p className="font-sans text-sm sm:text-base leading-relaxed text-sage">
                  {villa.longDescription}
                </p>

                {/* Spatial Schematic Note */}
                <div className="border border-salt/20 bg-darkness-surface p-6 mt-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-shipmate block mb-1">
                    Spatial Configuration & Layout
                  </span>
                  <p className="text-xs text-salt/90 leading-relaxed font-sans">
                    {villa.floorPlanNote}
                  </p>
                </div>
              </div>

              {/* Right Column: Specifications & Inclusions (6 cols) */}
              <div className="lg:col-span-6 space-y-8">
                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-4 border border-salt/15 p-6 bg-darkness-surface">
                  <div className="flex items-center gap-3">
                    <Maximize2 className="h-4 w-4 text-shipmate" />
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-sage font-mono">Total Footprint</div>
                      <div className="font-mono text-xs text-salt font-medium">{villa.size}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-shipmate" />
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-sage font-mono">Capacity</div>
                      <div className="font-mono text-xs text-salt font-medium">{villa.guests}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bed className="h-4 w-4 text-shipmate" />
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-sage font-mono">Chambers</div>
                      <div className="font-mono text-xs text-salt font-medium">{villa.bedrooms}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Waves className="h-4 w-4 text-shipmate" />
                    <div>
                      <div className="text-[9px] uppercase tracking-widest text-sage font-mono">Water Feature</div>
                      <div className="font-mono text-xs text-salt font-medium">{villa.pools}</div>
                    </div>
                  </div>
                </div>

                {/* Curated Inclusions */}
                <div>
                  <h4 className="text-[11px] uppercase font-mono tracking-luxury text-shipmate font-medium mb-3">
                    Curated Inclusions
                  </h4>
                  <ul className="space-y-2 text-xs text-sage">
                    {villa.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="h-3.5 w-3.5 text-shipmate shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materiality */}
                <div>
                  <h4 className="text-[11px] uppercase font-mono tracking-luxury text-salt/90 font-medium mb-3">
                    Materiality & Engineering
                  </h4>
                  <ul className="space-y-2 text-xs text-sage">
                    {villa.architectureDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-shipmate font-mono">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Private Peninsula Buyout Banner */}
        <div className="border border-salt/20 bg-darkness-surface p-8 sm:p-14 text-center">
          <span className="text-[10px] font-mono uppercase tracking-editorial text-shipmate">
            Exclusive Island Charter
          </span>
          <h3 className="mt-2 font-display text-4xl sm:text-6xl font-light text-salt">
            Private Peninsula Buyout
          </h3>
          <p className="mx-auto mt-4 max-w-xl font-sans text-xs sm:text-sm text-sage leading-relaxed">
            Aqua Viva can be reserved in its entirety for bespoke family gatherings, executive architectural summits, or private milestones. Complete seclusion across all 40 hectares, with full staff and private aviation coordination.
          </p>
          <div className="mt-8">
            <button
              onClick={() => openReservation('Private Peninsula Buyout')}
              data-magnetic="true"
              data-cursor-text="CHARTER"
              className="bg-kingtide px-9 py-4 font-sans text-xs uppercase tracking-luxury text-salt hover:bg-kingtide-light transition-colors shadow-2xl"
            >
              Enquire for Private Buyout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
