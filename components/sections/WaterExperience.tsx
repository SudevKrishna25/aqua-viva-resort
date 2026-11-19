'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, Sparkles, Wind, Compass } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface WaterFrame {
  id: string;
  frameNumber: string;
  tag: string;
  headline: string;
  italicWord: string;
  subhead: string;
  description: string;
  image: string;
  salinity: string;
  temperature: string;
  atmosphereBg: string;
}

const FRAMES: WaterFrame[] = [
  {
    id: 'frame-01',
    frameNumber: '01',
    tag: 'CLOSE-UP WATER SURFACE // FORMLESS',
    headline: 'Stillness begins where the current',
    italicWord: 'yields.',
    subhead: 'Elemental Purity & Macro Reflection',
    description: 'In the first morning light, the ocean surface is a taut, unblemished membrane. The restless human consciousness slows to meet this formless mirror.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    salinity: '3.4% Marine Salinity',
    temperature: '26.5° C / 79.7° F',
    atmosphereBg: 'from-darkness via-kingtide/20 to-darkness',
  },
  {
    id: 'frame-02',
    frameNumber: '02',
    tag: 'THE CANTILEVERED BASIN // DISSOLUTION',
    headline: 'Where architecture effortlessly',
    italicWord: 'dissolves.',
    subhead: '14-Meter Private Infinity Basins',
    description: 'Engineered without perimeter lips, the cantilevered pool spills silently into the tidal lagoon. Swimmers experience the sensation of hovering weightless between concrete and the sky.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=85',
    salinity: 'Continuous Flow Brine',
    temperature: '27.8° C / 82.0° F',
    atmosphereBg: 'from-darkness via-shipmate/25 to-darkness',
  },
  {
    id: 'frame-03',
    frameNumber: '03',
    tag: 'ARCHITECTURAL AXIS // DIALOGUE',
    headline: 'Travertine and concrete tuned to',
    italicWord: 'the tide.',
    subhead: 'Mineral Modernism Pavilion Geometry',
    description: 'Deep structural overhangs cast linear shadows across honed limestone verandas. Water channels woven through the courtyards create an acoustic envelope of murmuring calm.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    salinity: 'Bio-filtered Freshwater Channels',
    temperature: 'Ambient Ambient',
    atmosphereBg: 'from-darkness via-sage/20 to-darkness',
  },
  {
    id: 'frame-04',
    frameNumber: '04',
    tag: 'BOTANICAL COCOON // SECLUSION',
    headline: 'Private sanctuaries embraced by living',
    italicWord: 'wilderness.',
    subhead: 'The Garden Residences & Lily Pools',
    description: 'Concealed beneath ancient banyan and coastal palm canopies, raw rammed-earth walls temper the equatorial heat, complemented by cold-plunge pools in secluded courtyards.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85',
    salinity: 'Mineral Spring Wells',
    temperature: '22.0° C / 71.6° F',
    atmosphereBg: 'from-darkness via-khaki/25 to-darkness',
  },
  {
    id: 'frame-05',
    frameNumber: '05',
    tag: 'THE CELESTIAL HORIZON // INFINITY',
    headline: 'Every moment flows into the eternal',
    italicWord: 'horizon.',
    subhead: 'Twilight Water Amphitheatre & Flame Rituals',
    description: 'As golden hour fades into deep obsidian night, floating flame bowls are released across the still tidal basin. The boundary between water and cosmos becomes entirely porous.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2000&q=85',
    salinity: 'Natural Tidal Basin',
    temperature: '25.0° C / 77.0° F',
    atmosphereBg: 'from-darkness via-kingtide/30 to-darkness',
  },
];

export default function WaterExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);
  const current = FRAMES[activeFrameIndex];

  // ScrollTrigger pinned timeline on desktop
  useEffect(() => {
    // Only pin on non-touch desktop screens with sufficient viewport width
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${FRAMES.length * 90}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const step = Math.min(
            FRAMES.length - 1,
            Math.floor(self.progress * FRAMES.length)
          );
          setActiveFrameIndex(step);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-darkness text-salt overflow-hidden flex flex-col justify-between py-12 lg:py-16"
    >
      {/* Background Dynamic Atmosphere */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${current.atmosphereBg} transition-all duration-1000 ease-out opacity-60 pointer-events-none`}
      />

      {/* Background Waterline Wave Vector Accent */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 320" fill="none" className="w-full h-auto">
          <path
            d="M0,160 C320,300 420,0 720,160 C1020,320 1120,20 1440,160"
            stroke="#77A2CB"
            strokeWidth="1.5"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      {/* Top Header */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-salt/15 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-shipmate font-semibold">05</span>
              <span className="text-[10px] uppercase font-mono tracking-editorial text-shipmate font-medium">
                Signature Sequence // Pinned Narrative
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-salt">
              The World Moves at the <span className="font-display-italic text-shipmate">Speed of Water</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-sage">
            <span className="text-salt font-semibold">FRAME 0{activeFrameIndex + 1}</span>
            <span>/</span>
            <span>0{FRAMES.length}</span>
          </div>
        </div>
      </div>

      {/* Center Stage: Split Screen Visual & Narrative */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 my-auto py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left: Dynamic Visual Composition (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-salt/20 bg-darkness-surface shadow-2xl">
              <Image
                key={current.id}
                src={current.image}
                alt={current.subhead}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out clip-mask-reveal scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkness via-transparent to-darkness/30" />

              {/* Water Metrics Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 bg-darkness/85 backdrop-blur-md px-3.5 py-1.5 border border-salt/20 text-salt">
                  <Droplets className="h-3.5 w-3.5 text-shipmate" />
                  <span>{current.salinity}</span>
                </div>
                <div className="flex items-center gap-2 bg-darkness/85 backdrop-blur-md px-3.5 py-1.5 border border-salt/20 text-salt">
                  <Wind className="h-3.5 w-3.5 text-shipmate" />
                  <span>Temp: {current.temperature}</span>
                </div>
              </div>
            </div>

            {/* Connecting Waterline Progress Strip */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="h-[2px] flex-1 bg-salt/15 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-kingtide via-shipmate to-salt transition-all duration-700 ease-out"
                  style={{ width: `${((activeFrameIndex + 1) / FRAMES.length) * 100}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-sage uppercase tracking-wider">
                {current.tag}
              </span>
            </div>
          </div>

          {/* Right: Narrative Progression (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-editorial text-shipmate block mb-1">
                Sequence {current.frameNumber} of 0{FRAMES.length}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-salt leading-tight">
                {current.headline}{' '}
                <span className="font-display-italic text-shipmate font-normal">
                  {current.italicWord}
                </span>
              </h3>
              <p className="mt-3 font-serif text-lg italic text-sage font-light">
                “{current.subhead}”
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base leading-relaxed text-salt/85">
              {current.description}
            </p>

            {/* Frame Selector buttons for manual jumping */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              {FRAMES.map((f, idx) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFrameIndex(idx)}
                  className={`px-4 py-2 font-mono text-xs uppercase border transition-all ${
                    activeFrameIndex === idx
                      ? 'border-shipmate bg-shipmate/25 text-salt shadow-md'
                      : 'border-salt/20 text-sage hover:border-salt/40 hover:text-salt'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Ambient Scroll Hint */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 pb-4">
        <div className="flex items-center justify-between border-t border-salt/10 pt-4 text-[10px] font-mono text-sage">
          <span>Continuous Waterline Narrative</span>
          <span className="hidden sm:inline">Scroll smoothly to evolve through all 5 atmospheres</span>
          <span>08° 14′ S // 115° 09′ E</span>
        </div>
      </div>
    </section>
  );
}
