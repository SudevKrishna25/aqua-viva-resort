'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { galleryItems, GalleryItem } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight, Maximize2, Compass, ZoomIn, ZoomOut } from 'lucide-react';

const CATEGORIES = ['All', 'Architecture', 'Water', 'Interiors', 'Botanical', 'Rituals'] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setActiveLightboxItem(null);
    setIsZoomed(false);
  };

  const nextLightboxItem = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
    setIsZoomed(false);
  };

  const prevLightboxItem = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((it) => it.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
    setIsZoomed(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightboxItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxItem();
      if (e.key === 'ArrowLeft') prevLightboxItem();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxItem, filteredItems]);

  return (
    <div className="bg-darkness text-salt min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-b border-salt/15">
        <div className="flex items-center gap-2 text-xs font-mono text-shipmate uppercase tracking-wider mb-3">
          <Compass className="h-4 w-4" />
          <span>Visual Monograph Archive // 08° 14′ S, 115° 09′ E</span>
        </div>
        <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-light tracking-tight text-salt">
          The <span className="font-display-italic text-shipmate">Gallery</span>
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg text-sage font-light leading-relaxed">
          An editorial archive capturing the interplay between mineral architecture, light, native flora, and living water across the private atoll.
        </p>

        {/* Categories */}
        <div className="mt-10 flex overflow-x-auto no-scrollbar gap-2 sm:flex-wrap pt-4 border-t border-salt/15 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 sm:px-5 py-2 font-mono text-xs uppercase tracking-luxury transition-all ${
                selectedCategory === cat
                  ? 'bg-salt/20 text-salt border-b-2 border-shipmate font-medium shadow-md'
                  : 'text-sage hover:text-salt hover:bg-salt/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Images */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              data-cursor-text="VIEW"
              className="group relative aspect-[4/3] overflow-hidden border border-salt/15 bg-darkness-surface cursor-pointer shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkness/90 via-darkness/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="bg-darkness/85 backdrop-blur-md px-3 py-1 text-[9px] font-mono uppercase tracking-wider text-shipmate border border-salt/20">
                    {item.category}
                  </span>
                  <Maximize2 className="h-4 w-4 text-salt/80" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-sage block">
                    {item.location}
                  </span>
                  <h4 className="font-display text-2xl text-salt font-light mt-0.5">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-salt/80 font-sans line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-darkness/95 backdrop-blur-2xl p-4 sm:p-8">
          <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-salt/30 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
              aria-label="Toggle zoom"
            >
              {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
            </button>
            <button
              onClick={closeLightbox}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-salt/30 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <button
            onClick={prevLightboxItem}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-salt/30 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextLightboxItem}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-salt/30 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative max-h-[85vh] max-w-5xl w-full flex flex-col items-center">
            <div
              className={`relative w-full aspect-[16/10] max-h-[72vh] overflow-hidden border border-salt/20 shadow-2xl transition-all duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 w-full flex flex-col sm:flex-row items-baseline justify-between border-t border-salt/15 pt-3 text-xs">
              <div>
                <span className="font-mono text-[10px] text-shipmate uppercase tracking-wider">
                  {activeLightboxItem.category} // {activeLightboxItem.location}
                </span>
                <h3 className="font-display text-2xl font-light text-salt mt-0.5">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <p className="mt-2 sm:mt-0 max-w-md text-sage font-sans text-xs">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
