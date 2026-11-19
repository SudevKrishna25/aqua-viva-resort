'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Compass } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PhilosophyIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const largeImgRef = useRef<HTMLDivElement>(null);
  const smallImgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for large image
      gsap.to(largeImgRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Different scroll speed for small overlapping image (layered depth)
      gsap.to(smallImgRef.current, {
        yPercent: -22,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Headline subtle scroll reveal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0.2, y: 30 },
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
      id="art-of-arrival"
      ref={sectionRef}
      className="relative bg-salt py-32 sm:py-44 lg:py-52 text-darkness overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="mx-auto h-full max-w-7xl px-6 lg:px-12 grid grid-cols-12 border-x border-darkness">
          <div className="col-span-4 border-r border-darkness hidden lg:block" />
          <div className="col-span-4 border-r border-darkness hidden lg:block" />
          <div className="col-span-4 hidden lg:block" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Metadata Header */}
        <div className="mb-14 flex items-center justify-between border-b border-darkness-dim pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-kingtide font-semibold">01</span>
            <span className="text-[10px] uppercase font-mono tracking-editorial text-darkness/70 font-medium">
              The Art of Arrival // Mineral Modernism
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-luxury text-sage hidden sm:block">
            ARCHITECTURAL DIALOGUE
          </span>
        </div>

        {/* Oversized Headline Partially Interacting with Image */}
        <div className="mb-16 max-w-5xl">
          <h2
            ref={headlineRef}
            className="font-display text-4xl sm:text-6xl lg:text-8xl font-light leading-[1.02] tracking-tight text-darkness"
          >
            Some places are discovered.{' '}
            <span className="font-display-italic text-kingtide font-normal block sm:inline">
              Others are felt.
            </span>
          </h2>
        </div>

        {/* Unconventional Asymmetrical Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          {/* Large Image occupying ~8 cols (approx two-thirds) */}
          <div ref={largeImgRef} className="lg:col-span-8 relative">
            <div className="group relative aspect-[16/11] w-full overflow-hidden border border-darkness-dim bg-sage/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
                alt="Aqua Viva Modernist Waterfront Villa Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-darkness/10 group-hover:opacity-0 transition-opacity" />
            </div>

            <div className="mt-4 flex items-baseline justify-between text-xs text-sage border-b border-darkness-dim pb-3 font-mono">
              <span className="text-[10px] text-darkness uppercase tracking-wider">
                PLATE 01 — THE TIDAL PAVILION
              </span>
              <span className="italic font-serif">Board-formed travertine and reflection pool</span>
            </div>
          </div>

          {/* Smaller Overlapping Image + Vertical Metadata + Narrative (4 cols) */}
          <div className="lg:col-span-4 space-y-10 lg:pt-8">
            {/* Small Unexpected Overlapping Image with Parallax Depth */}
            <div
              ref={smallImgRef}
              className="relative aspect-[4/5] w-4/5 sm:w-3/5 lg:w-full ml-auto lg:ml-0 overflow-hidden border border-darkness-dim shadow-2xl bg-sage/30 lg:-mt-24 z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85"
                alt="Endemic coastal botanicals and reflection pools"
                fill
                sizes="(max-width: 1024px) 70vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-108"
              />
              <div className="absolute bottom-3 left-3 bg-darkness/80 backdrop-blur-md px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-salt">
                PLATE 02 — FLORA SANCTUARY
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="space-y-4 font-sans text-xs sm:text-sm leading-relaxed text-darkness/80">
              <p className="font-medium text-darkness text-base leading-snug">
                Water is not simply a recreational element at Aqua Viva. It is the continuous collaborator that dictated every axis, reflection pool, and cantilevered veranda.
              </p>
              <p>
                Anchored in <em>Mineral Modernism</em>, our architecture rejects superficial ornamentation in favour of elemental purity: board-formed concrete, sun-bleached teak, and honed Jerusalem limestone that temper equatorial light.
              </p>
            </div>

            {/* Read Manifesto Link */}
            <div className="pt-2">
              <Link
                href="/story"
                data-cursor-text="MANIFESTO"
                className="group inline-flex items-center gap-3 text-xs uppercase font-mono tracking-luxury font-medium text-kingtide hover:text-darkness transition-colors"
              >
                <span>Read The Architecture Manifesto</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
