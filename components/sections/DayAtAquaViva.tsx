'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { dayTimeline } from '@/data/timeline';
import { Volume2, ChevronRight, ChevronLeft, Sun, Moon, Sunrise, Sunset } from 'lucide-react';

// Chromatic atmospheric backgrounds corresponding to each hour of the day
const ATMOSPHERE_THEMES = [
  'from-darkness via-slate-900/40 to-darkness', // 06:00 First Light
  'from-darkness via-kingtide/25 to-darkness',   // 09:00 Morning Water
  'from-darkness via-salt/10 to-darkness',       // 12:00 Culinary Pause
  'from-darkness via-sage/20 to-darkness',       // 15:00 Afternoon Stillness
  'from-darkness via-amber-950/30 to-darkness',  // 18:00 Golden Hour
  'from-darkness via-slate-950/60 to-darkness',  // 21:00 Evenings Unfold
];

export default function DayAtAquaViva() {
  const [selectedTimeIdx, setSelectedTimeIdx] = useState(0);
  const currentStep = dayTimeline[selectedTimeIdx];

  const handleNext = () => {
    setSelectedTimeIdx((prev) => (prev + 1) % dayTimeline.length);
  };

  const handlePrev = () => {
    setSelectedTimeIdx((prev) => (prev - 1 + dayTimeline.length) % dayTimeline.length);
  };

  return (
    <section className="relative bg-darkness text-salt py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-salt/10 transition-colors duration-1000">
      {/* Background Dynamic Atmospheric Lighting based on Time of Day */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${ATMOSPHERE_THEMES[selectedTimeIdx]} transition-all duration-1000 ease-out opacity-75 pointer-events-none`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-salt/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-shipmate font-semibold">07</span>
              <span className="text-[10px] uppercase font-mono tracking-editorial text-shipmate font-medium">
                The Chronology of Stillness // 24-Hour Cycle
              </span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-salt">
              A Day at <span className="font-display-italic text-shipmate">Aqua Viva</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              data-cursor-text="PREV"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-salt/20 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
              aria-label="Previous hour"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              data-cursor-text="NEXT"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-salt/20 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
              aria-label="Next hour"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Moving Progress Bar & Time Selector */}
        <div className="mt-12 hidden lg:grid grid-cols-6 border border-salt/15 bg-darkness-surface">
          {dayTimeline.map((step, idx) => (
            <button
              key={step.time}
              onClick={() => setSelectedTimeIdx(idx)}
              data-cursor-text={step.time}
              className={`text-left p-5 border-r border-salt/15 last:border-r-0 transition-all duration-300 relative ${
                selectedTimeIdx === idx
                  ? 'bg-salt/15 text-salt'
                  : 'hover:bg-salt/5 text-sage'
              }`}
            >
              {selectedTimeIdx === idx && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-kingtide via-shipmate to-salt" />
              )}
              <div className="font-mono text-2xl font-light text-shipmate">{step.time}</div>
              <div className="text-[10px] uppercase tracking-wider font-mono text-salt font-medium mt-1 truncate">
                {step.phase}
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Horizontal Pill Selector */}
        <div className="lg:hidden flex overflow-x-auto gap-3 py-6 no-scrollbar">
          {dayTimeline.map((step, idx) => (
            <button
              key={step.time}
              onClick={() => setSelectedTimeIdx(idx)}
              className={`shrink-0 px-4 py-2 rounded-full border text-xs font-mono transition-all ${
                selectedTimeIdx === idx
                  ? 'border-shipmate bg-shipmate/25 text-salt'
                  : 'border-salt/20 text-sage hover:text-salt'
              }`}
            >
              {step.time} — {step.phase}
            </button>
          ))}
        </div>

        {/* Main Timeline Stage */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Atmospheric Photography (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-salt/20 bg-darkness-surface shadow-2xl">
              <Image
                key={currentStep.time}
                src={currentStep.image}
                alt={currentStep.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out clip-mask-reveal scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkness via-transparent to-transparent opacity-75" />

              <div className="absolute top-5 left-5 bg-darkness/85 backdrop-blur-md px-3.5 py-1.5 font-mono text-xs text-shipmate border border-salt/20">
                {currentStep.time} // {currentStep.phase}
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-xs font-mono text-salt/90 flex items-center justify-between">
                <span>{currentStep.atmosphere}</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Sensory Soundscape (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-5xl font-light text-shipmate block">
                {currentStep.time}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-editorial text-sage block mt-1">
                {currentStep.phase}
              </span>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-light tracking-tight text-salt">
                {currentStep.title}
              </h3>
            </div>

            <p className="font-serif text-xl italic text-shipmate/90 font-light">
              “{currentStep.headline}”
            </p>

            <p className="font-sans text-sm leading-relaxed text-sage">
              {currentStep.description}
            </p>

            {/* Soundscape Note */}
            <div className="border-t border-salt/15 pt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-salt/90 font-mono text-[11px]">
                <Volume2 className="h-4 w-4 text-shipmate shrink-0" />
                <span>Soundscape: {currentStep.soundscape}</span>
              </div>
            </div>

            {/* Visual Progress Dots */}
            <div className="flex items-center gap-2 pt-2">
              {dayTimeline.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setSelectedTimeIdx(dotIdx)}
                  className={`h-1.5 transition-all rounded-full ${
                    selectedTimeIdx === dotIdx ? 'w-10 bg-shipmate' : 'w-2 bg-salt/20 hover:bg-salt/40'
                  }`}
                  aria-label={`Jump to hour ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
