'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { accommodations } from '@/data/accommodations';
import { useReservation } from '@/components/providers/ReservationProvider';
import { Maximize2, Users, Bed, Waves, ArrowUpRight, ChevronRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AccommodationsShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const { openReservation } = useReservation();
  const [activeResidence, setActiveResidence] = useState(0);

  // Horizontal Scroll Sequence on Desktop
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop || !containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const scrollAmount = trackRef.current!.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: `+=${scrollAmount + 400}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
            const idx = Math.min(
              accommodations.length - 1,
              Math.floor(self.progress * accommodations.length)
            );
            setActiveResidence(idx);
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-darkness text-salt overflow-hidden border-t border-salt/15"
    >
      {/* Top Section Header */}
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 pt-16 pb-8 border-b border-salt/15">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-shipmate font-semibold">03</span>
              <span className="text-[10px] uppercase font-mono tracking-editorial text-shipmate font-medium">
                The Private Residence Collection // Horizontal Discovery
              </span>
            </div>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-salt">
              The Residence <span className="font-display-italic text-shipmate">Collection</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/stay"
              data-cursor-text="BLUEPRINT"
              className="group inline-flex items-center gap-2 text-xs uppercase font-mono tracking-luxury text-salt hover:text-shipmate transition-colors"
            >
              <span>Explore All 3 Floorplans</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Desktop Fine Scroll Progress Line */}
        <div className="hidden lg:block mt-6 h-[2px] w-full bg-salt/10 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-kingtide via-shipmate to-salt transition-all duration-150"
            style={{ width: '0%' }}
          />
        </div>
      </div>

      {/* Horizontal Scroll Track on Desktop / Vertical Stack on Mobile */}
      <div
        ref={trackRef}
        className="flex flex-col lg:flex-row w-full lg:w-[300vw] lg:h-[82vh] items-stretch"
      >
        {accommodations.map((villa, idx) => (
          <div
            key={villa.id}
            className="w-full lg:w-[100vw] flex-shrink-0 flex items-center px-6 lg:px-16 py-12 lg:py-8 border-b lg:border-b-0 lg:border-r border-salt/15"
          >
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Monumental Residence Visual (7 cols) */}
              <div className="lg:col-span-7">
                <div className="group relative aspect-[16/10] w-full overflow-hidden border border-salt/20 bg-darkness-surface shadow-2xl">
                  <Image
                    src={villa.primaryImage}
                    alt={villa.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkness via-transparent to-transparent opacity-60" />

                  {/* Visual Badges */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono">
                    <span className="bg-darkness/85 backdrop-blur-md px-3.5 py-1.5 border border-salt/20 text-shipmate uppercase">
                      {villa.category}
                    </span>
                    <span className="bg-darkness/85 backdrop-blur-md px-3.5 py-1.5 border border-salt/20 text-salt">
                      From {villa.priceFrom}
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {villa.galleryImages.slice(0, 3).map((thumb, tIdx) => (
                    <div key={tIdx} className="relative aspect-[16/10] overflow-hidden border border-salt/15 opacity-70 hover:opacity-100 transition-opacity">
                      <Image
                        src={thumb}
                        alt={`${villa.name} detail ${tIdx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 33vw, 20vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Architectural Specifications & Actions (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-xs text-shipmate uppercase tracking-wider block mb-1">
                    0{idx + 1} // {villa.category} SANCTUARY
                  </span>
                  <h3 className="font-display text-4xl sm:text-5xl font-light text-salt tracking-tight">
                    {villa.name}
                  </h3>
                  <p className="mt-2 font-serif text-lg italic text-shipmate/90 font-light">
                    “{villa.tagline}”
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm leading-relaxed text-sage">
                  {villa.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 border-y border-salt/15 py-5 text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <Maximize2 className="h-4 w-4 text-shipmate" />
                    <div>
                      <div className="text-[9px] uppercase text-sage">Footprint</div>
                      <div className="text-salt">{villa.size}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4 w-4 text-shipmate" />
                    <div>
                      <div className="text-[9px] uppercase text-sage">Capacity</div>
                      <div className="text-salt">{villa.guests}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Bed className="h-4 w-4 text-shipmate" />
                    <div>
                      <div className="text-[9px] uppercase text-sage">Chambers</div>
                      <div className="text-salt truncate max-w-[130px]">{villa.bedrooms}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Waves className="h-4 w-4 text-shipmate" />
                    <div>
                      <div className="text-[9px] uppercase text-sage">Pool Amenity</div>
                      <div className="text-salt truncate max-w-[130px]">{villa.pools}</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => openReservation(villa.name)}
                    data-magnetic="true"
                    data-cursor-text="RESERVE"
                    className="group relative inline-flex items-center justify-center gap-2 bg-kingtide px-7 py-3.5 font-sans text-xs uppercase tracking-luxury text-salt shadow-xl hover:bg-kingtide-light transition-all text-center"
                  >
                    <span>Reserve Residence</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <Link
                    href={`/stay#${villa.id}`}
                    className="inline-flex items-center justify-center gap-2 border border-salt/30 px-6 py-3.5 font-sans text-xs uppercase tracking-luxury text-salt hover:border-salt hover:bg-salt/10 transition-colors text-center"
                  >
                    <span>View Floorplan</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Horizontal Scroll Hint */}
      <div className="hidden lg:flex items-center justify-between mx-auto max-w-7xl px-6 lg:px-12 py-4 border-t border-salt/10 text-[10px] font-mono text-sage">
        <span>RESIDENCE 0{activeResidence + 1} / 0{accommodations.length}</span>
        <span>SCROLL DOWN TO ADVANCE HORIZONTALLY</span>
        <span>PRIVATE PENINSULA BUYOUTS AVAILABLE</span>
      </div>
    </section>
  );
}
