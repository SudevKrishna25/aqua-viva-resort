'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { journalArticles, JournalArticle } from '@/data/journal';
import { Clock, BookOpen, X, Compass, ArrowRight } from 'lucide-react';

export default function JournalPage() {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <div className="bg-salt text-darkness min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 border-b border-darkness-dim">
        <div className="flex items-center gap-2 text-xs font-mono text-kingtide uppercase tracking-wider mb-3">
          <Compass className="h-4 w-4" />
          <span>The Aqua Viva Editorial Monograph // Dispatches</span>
        </div>
        <h1 className="font-display text-4xl sm:text-7xl lg:text-9xl font-light tracking-tight text-darkness leading-[0.95]">
          The <span className="font-display-italic text-kingtide">Journal</span>
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-base sm:text-lg text-darkness/80 font-light leading-relaxed">
          Essays on architecture, stillness, water philosophy, and the conscious unlearning of modern hurry.
        </p>
      </div>

      {/* Featured Lead Article */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-18 border-b border-darkness-dim">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-darkness-dim bg-sage/20 shadow-2xl">
              <Image
                src={journalArticles[0].heroImage}
                alt={journalArticles[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-sage uppercase tracking-wider">
              <span className="text-kingtide font-semibold">{journalArticles[0].category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-kingtide" />
                {journalArticles[0].readTime}
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-light text-darkness tracking-tight">
              {journalArticles[0].title}
            </h2>
            <p className="font-serif text-xl italic text-kingtide font-light">
              “{journalArticles[0].subtitle}”
            </p>

            <p className="font-sans text-sm leading-relaxed text-darkness/80">
              {journalArticles[0].excerpt}
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveArticle(journalArticles[0])}
                data-magnetic="true"
                data-cursor-text="READ"
                className="group inline-flex items-center gap-2 bg-darkness px-8 py-3.5 font-sans text-xs uppercase tracking-luxury text-salt hover:bg-kingtide transition-colors shadow-xl"
              >
                <span>Read Feature Essay</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Articles Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <h3 className="font-display text-3xl font-light text-darkness mb-12">
          Collected Dispatches
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {journalArticles.slice(1).map((article) => (
            <article
              key={article.id}
              className="border border-darkness-dim bg-salt/60 p-8 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-darkness-dim mb-6">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-darkness/85 px-3 py-1 text-[9px] font-mono uppercase tracking-wider text-salt">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-sage mb-2">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-kingtide" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-light text-darkness tracking-tight">
                  {article.title}
                </h3>
                <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-darkness/75">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-darkness-dim flex items-center justify-between text-xs">
                <span className="text-sage text-[11px] font-mono">{article.author}</span>
                <button
                  onClick={() => setActiveArticle(article)}
                  data-cursor-text="READ"
                  className="font-mono font-medium uppercase tracking-wider text-kingtide hover:text-darkness transition-colors"
                >
                  Read Essay →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Fullscreen Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-darkness/95 backdrop-blur-2xl p-4 sm:p-8">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-darkness border border-salt/20 p-6 sm:p-12 text-salt shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-salt/20 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
              aria-label="Close reader"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="text-[10px] font-mono uppercase tracking-editorial text-shipmate">
              {activeArticle.category} — {activeArticle.readTime}
            </span>

            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-light text-salt tracking-tight">
              {activeArticle.title}
            </h2>

            <div className="mt-3 flex items-center gap-4 text-xs font-mono text-sage border-b border-salt/10 pb-6">
              <span>{activeArticle.author}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            <div className="relative aspect-[16/9] w-full my-6 overflow-hidden border border-salt/10">
              <Image
                src={activeArticle.heroImage}
                alt={activeArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-salt/90 font-light italic">
              {activeArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-salt/10 flex justify-between items-center text-xs">
              <span className="text-sage font-mono">Aqua Viva Architectural & Living Journal</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="border border-salt/30 px-5 py-2 text-salt uppercase tracking-wider text-[10px] hover:bg-salt/10"
              >
                Close Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
