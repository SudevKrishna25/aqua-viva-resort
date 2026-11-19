'use client';

import { useEffect } from 'react';

export default function ChunkErrorRecovery() {
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      const errorMsg = e.message || '';
      // When a user navigates after a rebuild, the old chunk hash in their browser causes a ChunkLoadError
      if (
        /Loading chunk .* failed/i.test(errorMsg) ||
        /Failed to fetch dynamically imported module/i.test(errorMsg) ||
        /CSS chunk .* failed/i.test(errorMsg)
      ) {
        console.warn('Stale build chunk detected. Automatically refreshing page with fresh assets...');
        window.location.reload();
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return null;
}

