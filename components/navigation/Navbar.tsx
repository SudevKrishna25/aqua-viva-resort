'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useReservation } from '@/components/providers/ReservationProvider';
import { ArrowUpRight, Compass, X } from 'lucide-react';

interface NavLinkItem {
  label: string;
  href: string;
  previewImage: string;
  description: string;
}

const NAV_LINKS: NavLinkItem[] = [
  {
    label: 'The Resort',
    href: '/',
    previewImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80',
    description: 'An architectural sanctuary where water becomes a way of life.',
  },
  {
    label: 'The Stay',
    href: '/stay',
    previewImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
    description: 'Three private residence collections hovering over the lagoon and cliffline.',
  },
  {
    label: 'Experiences',
    href: '/experiences',
    previewImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    description: 'Curated hydrotherapy, epicurean journeys, and silent electric marine explorations.',
  },
  {
    label: 'Our Philosophy',
    href: '/story',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    description: 'Mineral Modernism — harmony between raw architecture and living water.',
  },
  {
    label: 'Gallery',
    href: '/gallery',
    previewImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80',
    description: 'A visual monograph capturing light, reflections, and endemic coastal wilderness.',
  },
  {
    label: 'Journal',
    href: '/journal',
    previewImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    description: 'Essays on architecture, stillness, and the art of slowing down.',
  },
  {
    label: 'Contact',
    href: '/contact',
    previewImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=80',
    description: 'Private office concierge, seaplane logistics, and residency reservations.',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number>(0);
  const pathname = usePathname();
  const { openReservation } = useReservation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
            ? 'py-3'
            : 'py-6 md:py-8'
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Scrolled floating background pill */}
          {isScrolled && (
            <div className="absolute inset-x-4 sm:inset-x-8 top-2 bottom-2 bg-darkness/85 backdrop-blur-md rounded-full border border-salt/15 shadow-2xl -z-10 transition-all duration-500" />
          )}

          {/* Left: Location & Coordinates tag */}
          <div className="hidden items-center gap-2 lg:flex text-salt/70">
            <Compass className="h-3.5 w-3.5 text-shipmate animate-spin" style={{ animationDuration: '35s' }} />
            <span className="text-[10px] uppercase font-mono tracking-widest text-salt/80 font-medium">
              08° 14′ S, 115° 09′ E
            </span>
          </div>

          {/* Center: Brand Logotype */}
          <Link
            href="/"
            data-cursor-text="AQUA"
            className="group flex flex-col items-center text-center transition-transform duration-300"
          >
            <span className="font-display text-2xl tracking-[0.3em] text-salt transition-colors duration-300 group-hover:text-shipmate sm:text-3xl">
              AQUA VIVA
            </span>
            <span className="text-[8px] uppercase tracking-[0.45em] text-sage transition-colors duration-300 group-hover:text-salt">
              The Art of Living Water
            </span>
          </Link>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => openReservation()}
              data-magnetic="true"
              data-cursor-text="RESERVE"
              className="relative hidden sm:inline-flex items-center gap-2 overflow-hidden border border-salt/30 bg-kingtide/90 px-6 py-2.5 font-sans text-[11px] font-medium uppercase tracking-luxury text-salt backdrop-blur-sm transition-all duration-300 hover:border-salt hover:bg-kingtide shadow-lg"
            >
              <span>Reserve</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-shipmate transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-magnetic="true"
              data-cursor-text="MENU"
              className="group flex items-center gap-2.5 rounded-full border border-salt/20 bg-darkness/50 px-4 py-2 text-salt backdrop-blur-md transition-all duration-300 hover:border-salt/50 hover:bg-salt/10"
              aria-label="Toggle navigation menu"
            >
              <span className="hidden text-[10px] uppercase font-mono tracking-widest text-salt/90 font-medium md:inline-block">
                {isMobileMenuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="flex h-4 w-4 flex-col justify-center gap-1">
                <span
                  className={`block h-[1px] w-4 bg-salt transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-[5px] rotate-45' : ''
                    }`}
                />
                <span
                  className={`block h-[1px] w-3 bg-salt transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'group-hover:w-4'
                    }`}
                />
                <span
                  className={`block h-[1px] w-4 bg-salt transition-all duration-300 ${isMobileMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Secondary editorial desktop navigation bar (visible at page top) */}
        {!isScrolled && (
          <div className="mt-4 hidden border-t border-salt/10 pt-3 lg:block">
            <nav className="mx-auto flex max-w-5xl items-center justify-center gap-10 text-[11px] uppercase font-mono tracking-luxury text-salt/80 font-medium">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-300 hover:text-salt ${pathname === item.href
                      ? 'text-salt after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-shipmate'
                      : 'text-salt/70'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Fullscreen Luxury Architectural Navigation Overlay with Dynamic Background Preview */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto overflow-x-hidden touch-scroll bg-darkness text-salt transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-105'
          }`}
      >
        {/* Dynamic Background Image Preview (Awwwards-level effect: changes on hover) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {NAV_LINKS.map((link, idx) => (
            <div
              key={link.href}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${hoveredNavIndex === idx ? 'opacity-25' : 'opacity-0'
                }`}
            >
              <Image
                src={link.previewImage}
                alt={link.label}
                fill
                sizes="100vw"
                className="object-cover scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-darkness/60" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-darkness via-darkness/80 to-darkness/90" />
        </div>

        {/* Top bar info inside overlay */}
        <div className="relative z-10 flex items-center justify-between border-b border-salt/10 px-6 sm:px-12 md:px-20 py-6 md:py-8 pt-16 md:pt-10">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-editorial text-shipmate">
              Sanctuary Navigation // Mineral Modernism
            </span>
            <span className="text-xs text-sage font-serif italic">
              Where water becomes a way of life
            </span>
          </div>

          <div className="text-right text-[10px] uppercase font-mono tracking-widest text-salt/60 hidden sm:block">
            Latitude: 08° 14′ S // Longitude: 115° 09′ E
          </div>
        </div>

        {/* Links Grid with Hover Previews */}
        <div className="relative z-10 my-auto grid grid-cols-1 gap-6 px-6 sm:px-12 md:px-20 py-8 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left: Sequential Navigation Links (7 cols) */}
          <div className="lg:col-span-7 space-y-2">
            {NAV_LINKS.map((link, idx) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  onMouseEnter={() => setHoveredNavIndex(idx)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-baseline gap-4 sm:gap-5 py-1 text-left"
                >
                  <span className="font-mono text-xs text-sage/70 group-hover:text-shipmate transition-colors">
                    0{idx + 1}
                  </span>
                  <span
                    className={`font-display text-3xl sm:text-4xl md:text-6xl font-light tracking-wide transition-all duration-300 group-hover:translate-x-3 sm:group-hover:translate-x-4 ${pathname === link.href
                        ? 'text-shipmate italic font-display-italic'
                        : 'text-salt group-hover:text-salt/90'
                      }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </div>
            ))}

            {/* Mobile Inquire Button */}
            <div className="pt-6 lg:hidden">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openReservation();
                }}
                className="w-full bg-kingtide py-3.5 text-center font-sans text-xs uppercase tracking-luxury text-salt transition-colors hover:bg-kingtide-light shadow-xl"
              >
                Inquire for Residency
              </button>
            </div>
          </div>

          {/* Right: Active Navigation Item Description & Reserve CTA (5 cols) */}
          <div className="hidden lg:flex flex-col justify-between border-l border-salt/15 pl-12 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-editorial text-shipmate block">
                Feature Preview // 0{hoveredNavIndex + 1}
              </span>
              <h3 className="font-display text-3xl font-light text-salt">
                {NAV_LINKS[hoveredNavIndex].label}
              </h3>
              <p className="font-sans text-xs leading-relaxed text-sage max-w-sm">
                {NAV_LINKS[hoveredNavIndex].description}
              </p>
            </div>

            <div className="pt-6 border-t border-salt/10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openReservation();
                }}
                className="w-full border border-salt/30 bg-kingtide py-4 text-center font-sans text-xs uppercase tracking-luxury text-salt transition-colors hover:bg-kingtide-light shadow-xl"
              >
                Inquire for Residency
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 border-t border-salt/10 px-8 py-6 md:px-20 sm:flex-row text-[10px] uppercase font-mono tracking-widest text-sage">
          <div>
            © {new Date().getFullYear()} Aqua Viva Resort S.A.
          </div>
          <div className="flex gap-6 text-salt/70">
            <span className="hover:text-salt cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-salt cursor-pointer transition-colors">Architectural Monograph</span>
            <span className="hover:text-salt cursor-pointer transition-colors">Aviation Fleet</span>
          </div>
        </div>
      </div>
    </>
  );
}
