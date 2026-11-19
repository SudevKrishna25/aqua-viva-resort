'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CinematicIntro() {
  const [visible, setVisible] = useState(true);
  const [progressNum, setProgressNum] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SANCTUARY');

  const containerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);
  const taglineLine1Ref = useRef<HTMLSpanElement>(null);
  const taglineLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const waveRef = useRef<SVGPathElement>(null);
  const lightSweepRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const metaTopRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const counterValRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // If the visitor already pressed skip in this tab session or passed it, we can still allow them to view it on hard load
    // We mark a global flag so Hero knows whether to wait
    if (typeof window !== 'undefined') {
      (window as any).__aquaviva_intro_active = true;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (typeof window !== 'undefined') {
            (window as any).__aquaviva_intro_active = false;
            (window as any).__aquaviva_intro_complete = true;
            window.dispatchEvent(new CustomEvent('aquaviva:intro-complete'));
          }
          setVisible(false);
        },
      });

      timelineRef.current = tl;

      // Object to animate the progress counter from 0 to 100
      const counterObj = { val: 0 };

      // 1. STAGE 1: DEEP SILENCE & AMBIENCE (0.0s - 1.4s)
      tl.fromTo(
        metaTopRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      )
      // Waterline draws slowly and fluidly across 2.2 seconds
      .fromTo(
        waveRef.current,
        { strokeDashoffset: 600, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1, duration: 2.2, ease: 'power1.inOut' },
        '-=0.8'
      );

      // Concurrent counter animation spanning 5.5 seconds with architectural milestone updates
      tl.to(
        counterObj,
        {
          val: 100,
          duration: 5.4,
          ease: 'power2.inOut',
          onUpdate: () => {
            const current = Math.floor(counterObj.val);
            setProgressNum(current);
            if (counterValRef.current) {
              counterValRef.current.textContent = current < 10 ? `0${current}` : `${current}`;
            }

            // Milestone architectural status updates
            if (current < 25) {
              setStatusText('INDEXING SANCTUARY ARCHIPELAGO');
            } else if (current < 55) {
              setStatusText('CALIBRATING TIDAL CADENCE // 08° 14′ S');
            } else if (current < 85) {
              setStatusText('THE ART OF LIVING WATER');
            } else {
              setStatusText('HORIZON CALIBRATED // ENTER SANCTUARY');
            }
          },
        },
        0.3
      );

      // Architectural bottom progress line scale
      tl.fromTo(
        progressLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 5.4, ease: 'power2.inOut', transformOrigin: 'left center' },
        0.3
      );

      // 2. STAGE 2: MONUMENTAL TYPOGRAPHY REVEAL (1.8s - 3.8s)
      // Wordmark emerges from deep soft optical blur with expanding letter-spacing
      tl.fromTo(
        wordmarkRef.current,
        { opacity: 0, y: 40, letterSpacing: '0.45em', filter: 'blur(16px)' },
        { opacity: 1, y: 0, letterSpacing: '0.28em', filter: 'blur(0px)', duration: 2.0, ease: 'power3.out' },
        1.6
      )
      // Ethereal caustic light sweep passes over the wordmark
      .fromTo(
        lightSweepRef.current,
        { x: '-130%', opacity: 0 },
        { x: '130%', opacity: 0.85, duration: 1.8, ease: 'power2.inOut' },
        2.6
      );

      // 3. STAGE 3: BRAND PHILOSOPHY & TAGLINE REVEAL (3.6s - 5.4s)
      tl.fromTo(
        taglineLine1Ref.current,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power2.out' },
        3.5
      )
      .fromTo(
        taglineLine2Ref.current,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, ease: 'power2.out' },
        3.8
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 0.8, y: 0, duration: 1.2, ease: 'power2.out' },
        4.3
      );

      // 4. STAGE 4: LUXURIOUS PAUSE AT 100% (5.4s - 6.2s)
      // Stillness allowing the visitor to absorb the typography and brand majesty
      tl.to({}, { duration: 0.8 });

      // 5. STAGE 5: CINEMATIC DISSOLVE & APERTURE OPENING (6.2s - 7.4s)
      tl.to(
        maskRef.current,
        {
          clipPath: 'circle(160% at 50% 50%)',
          duration: 1.5,
          ease: 'power3.inOut',
        }
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.9'
      );
    }, containerRef);

    // Keyboard listener for ESC key to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        skipIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      ctx.revert();
    };
  }, []);

  const skipIntro = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
        onComplete: () => {
          if (typeof window !== 'undefined') {
            (window as any).__aquaviva_intro_active = false;
            (window as any).__aquaviva_intro_complete = true;
            window.dispatchEvent(new CustomEvent('aquaviva:intro-complete'));
          }
          setVisible(false);
        },
      });
    } else {
      if (typeof window !== 'undefined') {
        (window as any).__aquaviva_intro_active = false;
        (window as any).__aquaviva_intro_complete = true;
        window.dispatchEvent(new CustomEvent('aquaviva:intro-complete'));
      }
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-darkness text-salt overflow-hidden select-none"
    >
      {/* Background radial caustic atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,115,124,0.30)_0%,rgba(23,28,14,0.98)_75%)] pointer-events-none" />

      {/* Atmospheric organic particle grid / soft water caustics overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(119,162,203,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(94,104,54,0.12)_0%,transparent_50%)] pointer-events-none" />

      {/* Expanding Transition Iris Mask */}
      <div
        ref={maskRef}
        className="pointer-events-none absolute inset-0 z-0 bg-transparent"
        style={{ clipPath: 'circle(0% at 50% 50%)' }}
      />

      {/* TOP HEADER BAR */}
      <div
        ref={metaTopRef}
        className="relative z-10 w-full px-6 sm:px-12 pt-8 sm:pt-12 flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-sage"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shipmate opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-shipmate"></span>
          </span>
          <span className="text-salt/90">08° 14′ 22″ S, 115° 09′ 44″ E</span>
          <span className="text-salt/30 hidden sm:inline">//</span>
          <span className="hidden sm:inline text-shipmate">PRIVATE SANCTUARY AToll</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-salt/40 hidden md:inline">MINERAL MODERNISM</span>
          <span className="text-salt/30 hidden md:inline">//</span>
          <span className="text-salt/80">VOL. III</span>
        </div>
      </div>

      {/* CENTER CHOREOGRAPHY */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 my-auto max-w-4xl mx-auto">
        {/* Wordmark with Precision Letter-Spacing & Light Sweep */}
        <div className="relative overflow-hidden py-4 px-6 sm:px-12">
          <h1
            ref={wordmarkRef}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light text-salt tracking-[0.28em] select-none leading-none drop-shadow-2xl"
          >
            AQUA VIVA
          </h1>
          <div
            ref={lightSweepRef}
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-shipmate/50 to-transparent skew-x-12 mix-blend-screen"
          />
        </div>

        {/* Delicate animated SVG waterline */}
        <div className="my-6 sm:my-8 w-48 sm:w-80 md:w-96 h-8">
          <svg viewBox="0 0 320 20" fill="none" className="w-full h-full">
            <path
              ref={waveRef}
              d="M0 10 C 60 2, 110 18, 160 10 C 210 2, 260 18, 320 10"
              stroke="url(#waterlineOverture)"
              strokeWidth="1.4"
              strokeDasharray="600"
              strokeDashoffset="600"
            />
            <defs>
              <linearGradient id="waterlineOverture" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CED4C1" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="#77A2CB" stopOpacity="0.9" />
                <stop offset="1" stopColor="#2B737C" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand Taglines */}
        <div className="space-y-2">
          <div className="overflow-hidden">
            <span
              ref={taglineLine1Ref}
              className="block font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-salt/90 font-medium"
            >
              The Art of Living Water
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              ref={taglineLine2Ref}
              className="block font-serif text-xl sm:text-3xl md:text-4xl italic text-shipmate font-light tracking-wide"
            >
              “Beyond the Ordinary. Closer to Nature.”
            </span>
          </div>
          <p
            ref={subtitleRef}
            className="pt-2 font-sans text-[11px] sm:text-xs text-sage tracking-wider max-w-md mx-auto font-light"
          >
            An architectural sanctuary sculpted by tides, light, and silence.
          </p>
        </div>
      </div>

      {/* BOTTOM CONTROL & CALIBRATION BAR */}
      <div className="relative z-10 w-full px-6 sm:px-12 pb-8 sm:pb-12 flex flex-col gap-4">
        <div className="flex items-end justify-between border-b border-salt/15 pb-4">
          {/* Status text */}
          <div ref={statusRef} className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm text-shipmate font-medium tracking-widest">
              [ <span ref={counterValRef}>00</span>% ]
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-sage uppercase tracking-widest">
              // {statusText}
            </span>
          </div>

          {/* Interactive Skip Button */}
          <button
            onClick={skipIntro}
            className="group flex items-center gap-2.5 text-[10px] sm:text-xs uppercase font-mono tracking-widest text-salt/60 hover:text-salt transition-colors px-4 py-2 border border-salt/20 hover:border-salt/60 bg-darkness/40 backdrop-blur-sm"
          >
            <span>Skip Experience</span>
            <span className="text-[9px] text-sage font-light group-hover:text-shipmate transition-colors">[ESC]</span>
          </button>
        </div>

        {/* Thin bottom architectural progress bar */}
        <div className="relative w-full h-[2px] bg-salt/10 overflow-hidden">
          <div
            ref={progressLineRef}
            className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-kingtide via-shipmate to-salt"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </div>
  );
}
