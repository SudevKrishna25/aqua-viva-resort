'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // If it's a chunk loading failure from a fresh build deployment, auto-reload immediately
    if (
      /Loading chunk .* failed/i.test(error.message) ||
      /Failed to fetch dynamically imported module/i.test(error.message) ||
      /ChunkLoadError/i.test(error.name)
    ) {
      window.location.reload();
      return;
    }
    console.error('Captured by Aqua Viva Error Boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-darkness text-salt flex flex-col items-center justify-center px-6 text-center pt-24 pb-16">
      <div className="max-w-xl mx-auto space-y-6">
        <span className="font-mono text-xs uppercase tracking-editorial text-shipmate block">
          AQUA VIVA // EXPERIENCE RESUMPTION
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-light text-salt">
          A Moment of <span className="font-display-italic text-shipmate">Stillness</span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-sage font-light leading-relaxed">
          The visual stream encountered an interruption. Please refresh the sanctuary or return to the main horizon.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto bg-kingtide px-8 py-3.5 font-sans text-xs uppercase tracking-luxury text-salt hover:bg-kingtide-light transition-colors"
          >
            Refresh Sanctuary
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto border border-salt/30 px-8 py-3.5 font-sans text-xs uppercase tracking-luxury text-salt hover:border-salt transition-colors"
          >
            Return to Horizon
          </Link>
        </div>
      </div>
    </div>
  );
}
