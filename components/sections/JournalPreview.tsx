'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { journalArticles, JournalArticle } from '@/data/journal';
import { ArrowUpRight, Clock, BookOpen, X } from 'lucide-react';

export default function JournalPreview() {
  const [readingArticle, setReadingArticle] = useState<JournalArticle | null>(null);

  return (
    <section className="relative bg-darkness text-salt py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-salt/10">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-salt/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-shipmate font-semibold">09</span>
              <span className="text-[10px] uppercase font-sans tracking-editorial text-shipmate font-medium">
                The Editorial Monograph
              </span>
            </div>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-light tracking-tight text-salt">
              The Aqua Viva Journal
            </h2>
          </div>

          <div>
            <Link
              href="/journal"
              className="group inline-flex items-center gap-2 text-xs uppercase font-sans tracking-luxury text-salt hover:text-shipmate transition-colors"
            >
              <span>View All Essays</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {journalArticles.map((article, idx) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between border border-salt/10 bg-darkness-surface p-6 transition-all duration-500 hover:border-shipmate hover:bg-salt/5"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-salt/10 mb-6 bg-darkness">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-darkness/80 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-shipmate border border-salt/20">
                    {article.category}
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-[10px] font-mono text-sage uppercase tracking-wider mb-2">
                  <span>{article.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-shipmate" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-light text-salt tracking-tight group-hover:text-shipmate transition-colors">
                  {article.title}
                </h3>

                <p className="mt-3 font-sans text-xs leading-relaxed text-sage line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Author & Read Action */}
              <div className="mt-8 pt-4 border-t border-salt/10 flex items-center justify-between text-xs">
                <span className="text-[10px] text-sage truncate max-w-[160px]">
                  {article.author}
                </span>
                <button
                  onClick={() => setReadingArticle(article)}
                  className="inline-flex items-center gap-1 text-[11px] font-sans font-medium uppercase tracking-wider text-shipmate hover:text-salt transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Read Essay</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-darkness/95 backdrop-blur-xl p-4 sm:p-8">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-darkness border border-salt/20 p-6 sm:p-12 text-salt shadow-2xl">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-salt/20 text-salt hover:border-salt hover:bg-salt/10 transition-colors"
              aria-label="Close reader"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="text-[10px] font-mono uppercase tracking-editorial text-shipmate">
              {readingArticle.category} — {readingArticle.readTime}
            </span>

            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-light text-salt tracking-tight">
              {readingArticle.title}
            </h2>

            <div className="mt-3 flex items-center gap-4 text-xs font-mono text-sage border-b border-salt/10 pb-6">
              <span>{readingArticle.author}</span>
              <span>•</span>
              <span>{readingArticle.date}</span>
            </div>

            <div className="relative aspect-[16/9] w-full my-6 overflow-hidden border border-salt/10">
              <Image
                src={readingArticle.heroImage}
                alt={readingArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-salt/90 font-light italic">
              {readingArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-salt/10 flex justify-between items-center text-xs">
              <span className="text-sage">Aqua Viva Architectural & Living Journal</span>
              <button
                onClick={() => setReadingArticle(null)}
                className="border border-salt/30 px-5 py-2 text-salt uppercase tracking-wider text-[10px] hover:bg-salt/10"
              >
                Close Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
