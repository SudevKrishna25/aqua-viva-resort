'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReservation } from '@/components/providers/ReservationProvider';
import { Volume2, VolumeX, ArrowDown, Compass, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { openReservation } = useReservation();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax is always configured
      gsap.to(bgRef.current, {
        scale: 1.18,
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      const playEntrance = () => {
        const tl = gsap.timeline();
        tl.fromTo(
          metaRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 1.0, ease: 'power2.out' }
        )
        .fromTo(
          line1Ref.current,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          line2Ref.current,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          quoteRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' },
          '-=0.6'
        )
        .fromTo(
          ctasRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        );
      };

      // Check if CinematicIntro is actively running
      if (typeof window !== 'undefined' && (window as any).__aquaviva_intro_active) {
        const onIntroComplete = () => {
          playEntrance();
          window.removeEventListener('aquaviva:intro-complete', onIntroComplete);
        };
        window.addEventListener('aquaviva:intro-complete', onIntroComplete);
      } else {
        // If no intro or intro already done, play after tiny delay
        const timer = setTimeout(playEntrance, 300);
        return () => clearTimeout(timer);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Web Audio API procedural ocean tide synthesis
  const toggleAmbientSound = () => {
    if (isPlayingAudio) {
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioContextRef.current.currentTime, 0.4);
        setTimeout(() => setIsPlayingAudio(false), 400);
      }
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const bufferSize = ctx.sampleRate * 4;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
          b6 = white * 0.115926;
        }

        const noiseNode = ctx.createBufferSource();
        noiseNode.buffer = buffer;
        noiseNode.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        gainNode.gain.setTargetAtTime(0.12, ctx.currentTime, 1);
        gainNodeRef.current = gainNode;

        noiseNode.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noiseNode.start();
        setIsPlayingAudio(true);
      } catch (err) {
        console.error('Audio synthesis unavailable:', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById('art-of-arrival');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-darkness text-salt"
    >
      {/* Full-bleed Architectural Visual with Scroll-Linked Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2560&q=90')`,
          }}
        />
        {/* Layered Editorial Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkness via-darkness/40 to-darkness/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(23,28,14,0.7)_80%)]" />
        <div className="absolute inset-0 bg-kingtide/15 mix-blend-overlay" />
      </div>

      {/* Top Spacer for floating Navbar */}
      <div className="h-24 sm:h-32" />

      {/* Asymmetrical Editorial Composition */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Enormous Headline across 8 cols */}
          <div className="lg:col-span-8 space-y-6">
            <div ref={metaRef} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-salt/20 bg-darkness/60 px-3.5 py-1 text-[10px] uppercase font-mono tracking-editorial text-shipmate backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-kingtide animate-ping" />
                Sanctuary Flagship // 08° 14′ S, 115° 09′ E
              </span>
              <span className="text-xs text-salt/70 font-mono tracking-widest hidden sm:inline">
                MINERAL MODERNISM
              </span>
            </div>

            {/* Monumental Headline: WHERE WATER MEETS WONDER */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.92] text-salt">
              <span className="overflow-mask block">
                <span ref={line1Ref} className="text-reveal-line">
                  WHERE WATER
                </span>
              </span>
              <span className="overflow-mask block">
                <span ref={line2Ref} className="text-reveal-line font-display-italic text-shipmate font-light">
                  MEETS WONDER.
                </span>
              </span>
            </h1>

            <p
              ref={quoteRef}
              className="max-w-xl font-sans text-sm sm:text-base md:text-lg font-light leading-relaxed text-salt/90"
            >
              An extraordinary retreat shaped by nature, architecture and the quiet beauty of living water. Where the horizon becomes your only compass.
            </p>
          </div>

          {/* Right Column: Reservation CTA & Vertical Architectural Label (4 cols) */}
          <div ref={ctasRef} className="lg:col-span-4 lg:pl-8 space-y-8 flex flex-col justify-end">
            <div className="space-y-4">
              <button
                onClick={() => openReservation()}
                data-magnetic="true"
                data-cursor-text="RESERVE"
                className="w-full group relative inline-flex items-center justify-between bg-kingtide px-8 py-4 font-sans text-xs uppercase tracking-luxury text-salt shadow-2xl transition-all duration-300 hover:bg-kingtide-light"
              >
                <span>Discover Aqua Viva</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <Link
                href="/stay"
                data-magnetic="true"
                data-cursor-text="EXPLORE"
                className="w-full group inline-flex items-center justify-between border border-salt/30 bg-darkness/60 px-8 py-4 font-sans text-xs uppercase tracking-luxury text-salt backdrop-blur-md transition-all duration-300 hover:border-salt hover:bg-salt/10"
              >
                <span>Explore The Residences</span>
                <span className="font-mono text-shipmate group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Small vertical metadata label */}
            <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono text-sage border-t border-salt/15 pt-4">
              <span>PLATE 00 // RESIDENCE PROMONTORY</span>
              <span>•</span>
              <span>SOLAR LAGOON</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Soundscape, Animated Waterline Scroll Indicator, Coordinates */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 pb-8 pt-4">
        <div className="flex items-center justify-between border-t border-salt/15 pt-6 text-[11px] text-salt/80 font-sans">
          {/* Soundscape Control */}
          <button
            onClick={toggleAmbientSound}
            data-cursor-text="SOUND"
            className="group flex items-center gap-2 hover:text-salt transition-colors"
            title="Toggle Ocean Tide Soundscape"
          >
            {isPlayingAudio ? (
              <Volume2 className="h-4 w-4 text-shipmate animate-pulse" />
            ) : (
              <VolumeX className="h-4 w-4 text-sage group-hover:text-salt" />
            )}
            <span className="uppercase tracking-widest text-[10px] font-mono">
              {isPlayingAudio ? 'Living Tide: Sounding' : 'Living Tide: Muted'}
            </span>
          </button>

          {/* Animated Waterline Scroll Indicator */}
          <button
            onClick={scrollToNext}
            data-cursor-text="SCROLL"
            className="hidden sm:flex flex-col items-center gap-1.5 text-salt/70 hover:text-salt transition-colors uppercase tracking-widest text-[9px] font-mono"
          >
            <span>Scroll to Enter</span>
            <div className="relative h-7 w-[1px] bg-salt/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-transparent via-shipmate to-transparent animate-waterline-pulse" />
            </div>
          </button>

          {/* Location & Waypoint */}
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-sage">
            <Compass className="h-3.5 w-3.5 text-shipmate" />
            <span>SOUTH PACIFIC ATOLL // WAYPOINT W-AQUA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
