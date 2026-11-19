'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { philosophyPillars } from '@/data/philosophy';
import { useReservation } from '@/components/providers/ReservationProvider';
import { Compass, Droplets, Sun, Wind, ArrowRight } from 'lucide-react';

export default function StoryPage() {
  const { openReservation } = useReservation();

  const brandColors = [
    { name: 'SALT GLAZE', hex: '#CED4C1', role: 'Main Light Surface & Editorial Backdrop' },
    { name: 'SHIPMATE', hex: '#77A2CB', role: 'Sky Accents, Atmospheric Waters & Highlights' },
    { name: 'EVERLASTING SAGE', hex: '#929687', role: 'Botanical Overlays & Muted Transitions' },
    { name: 'KING TIDE', hex: '#2B737C', role: 'Primary Ocean Accent & Interactive Vitality' },
    { name: 'HEAVY KHAKI', hex: '#5E6836', role: 'Native Flora Details & Tactile Lines' },
    { name: 'DARKNESS', hex: '#171C0E', role: 'Main Typography, Nocturnal Depths & Footers' },
  ];

  return (
    <div className="bg-salt text-darkness min-h-screen pt-32 pb-24">
      {/* Editorial Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-b border-darkness-dim">
        <div className="flex items-center gap-2 text-xs font-mono text-kingtide uppercase tracking-wider mb-3">
          <Compass className="h-4 w-4" />
          <span>The Brand Monograph // Aqua Viva</span>
        </div>
        <h1 className="font-display text-4xl sm:text-7xl lg:text-9xl font-light tracking-tight text-darkness leading-[0.95]">
          Beyond the <span className="font-display-italic text-kingtide">Horizon</span>
        </h1>
        <p className="mt-6 max-w-3xl font-sans text-base sm:text-xl text-darkness/80 font-light leading-relaxed">
          Aqua Viva represents a conscious departure from conventional hospitality. Here, water is not a decorative backdrop or a pool amenity. It is the core inspiration, the master architect of stillness, and the mirror of our highest self.
        </p>
      </div>

      {/* Manifesto Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 sm:py-24 border-b border-darkness-dim">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono uppercase tracking-editorial text-sage block mb-2">
              Design Philosophy // Mineral Modernism
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-darkness tracking-tight leading-tight">
              A New Language of Waterfront Luxury.
            </h2>
            <div className="mt-8 space-y-5 font-sans text-sm sm:text-base leading-relaxed text-darkness/80">
              <p>
                We consciously reject the predictable tropical resort aesthetic — the garish turquoise gradients, generic palm-tree motifs, and superficial gilded flourishes that have long defined conventional luxury.
              </p>
              <p>
                Instead, Aqua Viva is anchored in <strong>Mineral Modernism</strong>: the quiet collision of raw board-formed concrete, sun-bleached teak, natural limestone, and the living caustics of shifting tides.
              </p>
              <p>
                Architecture here does not seek to conquer nature. Rather, it serves as an acoustic resonator for the wind, a canvas for shadows, and an invitation to inhabit the slow rhythm of the ocean.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-darkness-dim shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Mineral Modernism architecture and reflecting water"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Official Six-Colour Palette Material Board */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 border-b border-darkness-dim">
        <div className="mb-14">
          <span className="text-[10px] font-mono uppercase tracking-editorial text-sage block mb-2">
            Chromatics & Materiality // Reference Palette
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-darkness">
            The Aqua Viva Colour System
          </h2>
          <p className="mt-2 font-sans text-xs sm:text-sm text-darkness/70 max-w-xl">
            Derived directly from mineral salt flats, deep barrier reef drop-offs, and endemic coastal foliage.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {brandColors.map((c) => (
            <div key={c.name} className="border border-darkness-dim p-4 flex flex-col justify-between bg-salt/50">
              <div>
                <div
                  className="h-24 w-full mb-4 border border-darkness/10 shadow-inner"
                  style={{ backgroundColor: c.hex }}
                />
                <h4 className="font-display text-base font-light text-darkness tracking-wider">
                  {c.name}
                </h4>
                <span className="font-mono text-[10px] text-sage block mb-2">
                  {c.hex}
                </span>
              </div>
              <p className="text-[10px] font-sans text-darkness/75 leading-snug">
                {c.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Four Pillars of Stewardship */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 border-b border-darkness-dim">
        <div className="mb-16">
          <span className="text-[10px] font-mono uppercase tracking-editorial text-sage block mb-2">
            Environmental Responsibility
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-light text-darkness">
            Luxury, with a Lighter Footprint
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {philosophyPillars.map((p) => (
            <div key={p.number} className="border border-darkness-dim p-8 bg-salt/60">
              <span className="font-mono text-2xl text-kingtide block mb-2">{p.number}</span>
              <h3 className="font-display text-3xl font-light text-darkness mb-3">{p.title}</h3>
              <p className="font-sans text-xs sm:text-sm text-darkness/80 leading-relaxed mb-6">
                {p.description}
              </p>
              <p className="font-serif italic text-xs text-kingtide border-l-2 border-kingtide pl-3">
                {p.quote}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Invitation Section */}
      <div className="mx-auto max-w-5xl px-6 lg:px-12 py-24 text-center">
        <h3 className="font-display text-4xl sm:text-6xl font-light text-darkness">
          Experience Stillness Firsthand
        </h3>
        <p className="mx-auto mt-4 max-w-md font-sans text-xs sm:text-sm text-darkness/80 leading-relaxed">
          Our residency team is available to craft a bespoke discovery itinerary tailored to your preferences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => openReservation()}
            data-magnetic="true"
            data-cursor-text="RESERVE"
            className="bg-kingtide px-9 py-4 font-sans text-xs uppercase tracking-luxury text-salt hover:bg-kingtide-light transition-colors shadow-xl"
          >
            Enquire for Residency
          </button>
          <Link
            href="/stay"
            className="border border-darkness-dim px-9 py-4 font-sans text-xs uppercase tracking-luxury text-darkness hover:bg-darkness hover:text-salt transition-colors"
          >
            Explore Villas
          </Link>
        </div>
      </div>
    </div>
  );
}
