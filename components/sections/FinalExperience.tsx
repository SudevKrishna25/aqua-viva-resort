'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReservation } from '@/components/providers/ReservationProvider';
import { ArrowUpRight, Compass } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalExperience() {
  const { openReservation } = useReservation();
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-linked expansion of visual into viewport
      gsap.fromTo(
        visualRef.current,
        { scale: 1.15, filter: 'brightness(0.7)' },
        {
          scale: 1,
          filter: 'brightness(0.95)',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-darkness text-salt"
    >
      {/* Viewport-Expanding Background Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={visualRef} className="absolute inset-0 w-full h-full will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2560&q=90"
            alt="Golden hour twilight over Aqua Viva reflecting pool and infinite ocean horizon"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-darkness via-darkness/60 to-darkness/60" />
        <div className="absolute inset-0 bg-kingtide/15 mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center lg:px-12">
        <div className="inline-flex items-center gap-2 border border-salt/30 bg-darkness/60 px-4 py-1.5 backdrop-blur-md mb-8">
          <Compass className="h-3.5 w-3.5 text-shipmate animate-spin" style={{ animationDuration: '40s' }} />
          <span className="text-[10px] uppercase font-mono tracking-widest text-salt font-medium">
            08° 14′ S, 115° 09′ E // THE SANCTUARY CALLS
          </span>
        </div>

        {/* Monumental Headline: THERE IS A WORLD BEYOND THE ORDINARY */}
        <h2 className="font-display text-4xl sm:text-7xl lg:text-9xl font-light tracking-tight text-salt leading-[0.94]">
          THERE IS A WORLD <br />
          <span className="font-display-italic text-shipmate font-light">
            BEYOND THE ORDINARY.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mx-auto mt-6 max-w-xl font-sans text-sm sm:text-base md:text-lg text-salt/90 font-light leading-relaxed">
          Discover a different way of living. Step into an architectural sanctuary shaped by water, stillness and extraordinary design.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={() => openReservation()}
            data-magnetic="true"
            data-cursor-text="RESERVE"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-kingtide px-10 py-4 font-sans text-xs uppercase tracking-luxury text-salt shadow-2xl transition-all duration-300 hover:bg-kingtide-light"
          >
            <span>Discover Your Aqua Viva</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="mt-14 flex items-center justify-center gap-4 sm:gap-8 text-[11px] font-mono uppercase tracking-widest text-sage flex-wrap">
          <span>Private Heliport</span>
          <span>•</span>
          <span>Deep-Water Yacht Basin</span>
          <span>•</span>
          <span>Amphibious Seaplane Fleet</span>
        </div>
      </div>
    </section>
  );
}
