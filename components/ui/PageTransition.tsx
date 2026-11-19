'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== displayPath) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayPath(pathname);
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [pathname, displayPath]);

  if (!isTransitioning) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9995] flex flex-col justify-end overflow-hidden">
      {/* Top waterline accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-shipmate to-transparent animate-pulse" />
      {/* Expanding curtain */}
      <div className="h-full w-full bg-darkness/90 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </div>
  );
}
