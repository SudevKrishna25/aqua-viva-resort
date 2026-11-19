'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMagnetic, setIsMagnetic] = useState(false);
  const magneticTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Only enable custom cursor for non-touch fine pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
      const magneticBtn = target.closest('[data-magnetic="true"]') as HTMLElement | null;

      if (magneticBtn) {
        setIsMagnetic(true);
        magneticTargetRef.current = magneticBtn;
        const rect = magneticBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Subtle magnetic pull
        targetX = centerX + (e.clientX - centerX) * 0.35;
        targetY = centerY + (e.clientY - centerY) * 0.35;
      } else {
        setIsMagnetic(false);
        magneticTargetRef.current = null;
      }

      setPosition({ x: targetX, y: targetY });

      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor-text') || '';
        setCursorText(customText);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp for trailing ring
  useEffect(() => {
    let animId: number;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [position]);

  if (!isVisible || isTouchDevice) return null;

  return (
    <>
      {/* Central pinpoint */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-kingtide transition-transform duration-75 ease-out"
        style={{
          width: isHovered ? '6px' : '4px',
          height: isHovered ? '6px' : '4px',
          transform: `translate3d(${position.x - (isHovered ? 3 : 2)}px, ${position.y - (isHovered ? 3 : 2)}px, 0)`,
        }}
      />

      {/* Trailing aura ring */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border transition-all duration-300 ease-out backdrop-blur-[1px] ${
          cursorText
            ? 'border-shipmate bg-darkness/80 text-salt scale-110 shadow-xl'
            : isHovered
            ? 'border-kingtide/90 bg-kingtide/20 scale-125'
            : 'border-kingtide/40 bg-transparent scale-100'
        }`}
        style={{
          width: cursorText ? '84px' : '36px',
          height: cursorText ? '84px' : '36px',
          transform: `translate3d(${trailingPos.x - (cursorText ? 42 : 18)}px, ${trailingPos.y - (cursorText ? 42 : 18)}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] uppercase tracking-widest text-shipmate font-mono font-medium px-1 text-center">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
