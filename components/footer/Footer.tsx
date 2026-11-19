'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useReservation } from '@/components/providers/ReservationProvider';
import { ArrowUpRight, Compass, Check, ArrowRight } from 'lucide-react';

export default function Footer() {
  const { openReservation } = useReservation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-darkness text-salt overflow-hidden border-t border-salt/15">
      {/* Animated Top Waterline Wave Accent */}
      <div className="relative h-[2px] w-full overflow-hidden bg-salt/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-kingtide to-transparent animate-waterline-pulse" />
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        {/* Top Callout: Private Enquiries Banner */}
        <div className="mb-20 grid grid-cols-1 items-center justify-between gap-8 border-b border-salt/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-mono uppercase tracking-editorial text-shipmate">
              Residency & Private Sanctuary Charters
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl lg:text-7xl font-light text-salt tracking-tight leading-[1.05]">
              Begin your journey to <span className="font-display-italic text-shipmate">stillness</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <button
              onClick={() => openReservation()}
              data-magnetic="true"
              data-cursor-text="RESERVE"
              className="group inline-flex items-center gap-3 border border-salt/30 bg-kingtide px-9 py-4 font-sans text-xs uppercase tracking-luxury text-salt shadow-2xl transition-all duration-300 hover:border-salt hover:bg-kingtide-light"
            >
              <span>Request Reservation</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Middle Grid: Nav, Locations, Journal, Newsletter */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 pb-16 border-b border-salt/15">
          {/* Col 1: Brand & Coordinates (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-display text-2xl tracking-[0.28em] text-salt block">
                AQUA VIVA
              </span>
              <span className="text-[9px] uppercase font-mono tracking-[0.35em] text-sage">
                Mineral Modernism // Private Island Sanctuary
              </span>
            </div>
            <p className="max-w-sm font-sans text-xs leading-relaxed text-sage">
              An extraordinary retreat shaped by nature, architecture and the quiet beauty of living water. Where the horizon is your only compass.
            </p>
            <div className="flex items-center gap-2 text-xs text-salt/80 font-mono">
              <Compass className="h-4 w-4 text-shipmate" />
              <span>08° 14′ 22″ S — 115° 09′ 48″ E</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-mono tracking-editorial text-shipmate font-medium">
              Sanctuary
            </h4>
            <ul className="space-y-2.5 text-xs text-salt/80 font-mono tracking-wide">
              <li>
                <Link href="/" className="hover:text-shipmate transition-colors">The Resort</Link>
              </li>
              <li>
                <Link href="/stay" className="hover:text-shipmate transition-colors">The Stay</Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-shipmate transition-colors">Experiences</Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-shipmate transition-colors">Our Philosophy</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-shipmate transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-shipmate transition-colors">Journal</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Accommodations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-mono tracking-editorial text-shipmate font-medium">
              Villas & Residences
            </h4>
            <ul className="space-y-2.5 text-xs text-salt/80 font-sans tracking-wide">
              <li>
                <Link href="/stay" className="hover:text-shipmate transition-colors">The Water Villas (Overwater)</Link>
              </li>
              <li>
                <Link href="/stay" className="hover:text-shipmate transition-colors">The Garden Residences (Botanical)</Link>
              </li>
              <li>
                <Link href="/stay" className="hover:text-shipmate transition-colors">The Horizon Suites (Cliffside)</Link>
              </li>
              <li>
                <button
                  onClick={() => openReservation('Private Peninsula Buyout')}
                  className="text-left hover:text-shipmate transition-colors text-sage"
                >
                  Private Peninsula Buyouts
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-mono tracking-editorial text-shipmate font-medium">
              The Water Dispatches
            </h4>
            <p className="text-xs text-sage leading-relaxed font-sans">
              Receive quarterly architectural essays, seasonal gastronomy notes, and private retreat invitations.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border-b border-salt/30 bg-transparent py-2.5 pr-8 text-xs text-salt placeholder-sage focus:border-kingtide focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-2.5 text-salt hover:text-shipmate transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-2 border border-kingtide/50 bg-kingtide/10 p-2.5 text-xs text-shipmate">
                <Check className="h-4 w-4" />
                <span>You are inscribed into the private dispatches.</span>
              </div>
            )}
          </div>
        </div>

        {/* Large Monumental Wordmark (Cinematic Closing Feel) */}
        <div className="pt-20 pb-12 text-center select-none overflow-hidden">
          <span className="font-display text-[15vw] font-light leading-none tracking-[0.08em] text-salt/[0.08] block hover:text-salt/[0.14] transition-colors duration-700">
            AQUA VIVA
          </span>
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-salt/15 pt-8 sm:flex-row text-[11px] text-sage font-mono">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} Aqua Viva Resort S.A.</span>
            <button
              onClick={() => {
                window.location.href = '/?replay=true';
              }}
              className="text-shipmate hover:text-salt cursor-pointer transition-colors flex items-center gap-1.5"
            >
              <span>●</span>
              <span>Replay Brand Overture</span>
            </button>
            <span className="hover:text-salt cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-salt cursor-pointer transition-colors">Terms of Residency</span>
            <span className="hover:text-salt cursor-pointer transition-colors">Aviation Waypoint</span>
          </div>

          <div className="font-serif italic text-salt/80 text-xs">
            The Art of Living Water — Mineral Modernism
          </div>
        </div>
      </div>
    </footer>
  );
}
