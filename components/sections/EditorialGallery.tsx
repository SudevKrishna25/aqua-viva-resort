'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryItems, GalleryItem } from '@/data/gallery';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';

const CATEGORIES = ['All', 'Architecture', 'Water', 'Interiors', 'Botanical', 'Rituals'] as const;

export default function EditorialGallery() {
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

  // Keyboard navigation for lightbox
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
    <section className="relative bg-darkness text-salt py-28 sm:py-36 lg:py-44 overflow-hidden border-t border-salt/10">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-salt/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-shipmate font-semibold">08</span>
              <span className="text-[10px] uppercase font-mono tracking-editorial text-shipmate font-medium">
                Visual Monograph // Light & Caustics
              </span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-salt">
              The Aqua Viva <span className="font-display-italic text-shipmate">Gallery</span>
            </h2>
          </div>

          <div>
            <Link
              href="/gallery"
              data-cursor-text="ARCHIVE"
              className="group inline-flex items-center gap-2 text-xs uppercase font-mono tracking-luxury text-salt hover:text-shipmate transition-colors"
            >
              <span>Explore Complete Monograph</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-3 border-b border-salt/15 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 font-mono text-xs uppercase tracking-luxury transition-all ${
                selectedCategory === cat
                  ? 'bg-salt/20 text-salt border-b-2 border-shipmate font-medium shadow-md'
                  : 'text-sage hover:text-salt hover:bg-salt/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Collage Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {filteredItems.slice(0, 6).map((item, idx) => {
            let colSpan = 'lg:col-span-4';
            let aspectClass = 'aspect-[4/3]';
            if (idx === 0) {
              colSpan = 'lg:col-span-8';
              aspectClass = 'aspect-[16/10]';
            } else if (idx === 1) {
              colSpan = 'lg:col-span-4';
              aspectClass = 'aspect-[3/4]';
            } else if (idx === 4) {
              colSpan = 'lg:col-span-8';
              aspectClass = 'aspect-[16/9]';
            }

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                data-cursor-text="VIEW"
                className={`group relative overflow-hidden border border-salt/15 bg-darkness-surface cursor-pointer shadow-lg ${colSpan} ${aspectClass}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkness/90 via-darkness/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Caption Card */}
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
            );
          })}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-darkness/95 backdrop-blur-2xl p-4 sm:p-8">
          {/* Controls Bar */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-salt/30 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
              aria-label="Toggle zoom"
              title="Toggle Zoom"
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

          {/* Left / Right Nav Buttons */}
          <button
            onClick={prevLightboxItem}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-salt/30 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextLightboxItem}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-salt/30 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Lightbox Center Content */}
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

            {/* Caption Metadata */}
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
    </section>
  );
}
