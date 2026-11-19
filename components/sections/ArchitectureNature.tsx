'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Box, Compass, Layers, Sun } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ArchitectureNature() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll on architectural photography
      gsap.to(visualRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Headline entrance
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0.15, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-salt py-32 sm:py-44 lg:py-52 text-darkness overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="mx-auto h-full max-w-7xl px-6 lg:px-12 grid grid-cols-12 border-x border-darkness">
          <div className="col-span-3 border-r border-darkness hidden lg:block" />
          <div className="col-span-6 border-r border-darkness hidden lg:block" />
          <div className="col-span-3 hidden lg:block" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 border-b border-darkness-dim pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-kingtide font-semibold">08</span>
            <span className="text-[10px] uppercase font-mono tracking-editorial text-darkness/70 font-medium">
              Architectural Monograph // Structural Harmony
            </span>
          </div>

          {/* Monumental Headline: BUILT WITHIN NATURE. NEVER AGAINST IT. */}
          <h2
            ref={headlineRef}
            className="mt-6 font-display text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight text-darkness leading-[1.0]"
          >
            BUILT WITHIN NATURE.{' '}
            <span className="font-display-italic text-kingtide font-normal block sm:inline">
              NEVER AGAINST IT.
            </span>
          </h2>
        </div>

        {/* Large Architectural Photography & Material Callouts */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Main Visual with Parallax (8 cols) */}
          <div ref={visualRef} className="lg:col-span-8 space-y-6">
            <div className="group relative aspect-[16/10] w-full overflow-hidden border border-darkness-dim bg-sage/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1920&q=85"
                alt="Brutalist concrete and glass residence overlooking ocean"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-darkness/10 group-hover:opacity-0 transition-opacity" />
              <div className="absolute bottom-5 left-5 bg-darkness/85 backdrop-blur-md px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-salt border border-salt/20">
                PLATE IV — MONOLITHIC ELEVATION
              </div>
            </div>

            {/* Tactile Material Grid */}
            <div className="grid grid-cols-2 gap-6 text-xs text-sage border-b border-darkness-dim pb-4 font-mono">
              <div>
                <span className="text-darkness font-medium uppercase text-[10px] block mb-1">
                  TACTILE MATERIALITY
                </span>
                <p className="font-sans text-darkness/80">
                  Stabilized board-formed concrete, Jerusalem limestone, brushed brass, weathered teak.
                </p>
              </div>
              <div>
                <span className="text-darkness font-medium uppercase text-[10px] block mb-1">
                  OPTICAL ILLUMINATION
                </span>
                <p className="font-sans text-darkness/80">
                  Oriented to prevailing ocean drafts to capture morning caustics and soft evening twilight.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Principles (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Box className="h-5 w-5 text-kingtide shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl font-light text-darkness">Monolithic Weightlessness</h4>
                  <p className="mt-1 font-sans text-xs text-darkness/80 leading-relaxed">
                    Heavy structural concrete engineered to hover effortlessly over tidal shallows, creating shaded saltwater microclimates below.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Sun className="h-5 w-5 text-kingtide shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl font-light text-darkness">Dynamic Light & Shadow</h4>
                  <p className="mt-1 font-sans text-xs text-darkness/80 leading-relaxed">
                    Deep overhangs and custom slatted screens filter tropical sunlight into rhythmic linear shadows across honed stone floors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Layers className="h-5 w-5 text-kingtide shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl font-light text-darkness">Acoustic Dissolution</h4>
                  <p className="mt-1 font-sans text-xs text-darkness/80 leading-relaxed">
                    Water channels woven through courtyards dampen external sounds, creating an enveloping cocoon of murmuring water.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-darkness-dim pt-6">
              <Link
                href="/story"
                data-cursor-text="ARCHITECTURE"
                className="group inline-flex items-center gap-2 text-xs uppercase font-mono tracking-luxury font-medium text-kingtide hover:text-darkness transition-colors"
              >
                <span>Read The Architecture Monograph</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
