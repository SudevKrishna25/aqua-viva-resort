import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Check for reduced motion preference
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Image clip-path reveal with scale down
export const initImageReveal = (
  container: HTMLElement | string,
  options: {
    duration?: number;
    delay?: number;
    scaleFrom?: number;
    once?: boolean;
    start?: string;
  } = {}
) => {
  if (prefersReducedMotion()) return;

  const elements = typeof container === 'string'
    ? document.querySelectorAll(container)
    : [container];

  elements.forEach((el) => {
    const target = el as HTMLElement;
    const img = target.querySelector('img') || target;

    gsap.fromTo(
      target,
      {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: options.duration || 1.3,
        ease: 'power3.out',
        delay: options.delay || 0.05,
        scrollTrigger: {
          trigger: target,
          start: options.start || 'top 85%',
          once: options.once !== false,
        },
      }
    );

    if (img && img !== target) {
      gsap.fromTo(
        img,
        { scale: options.scaleFrom || 1.16 },
        {
          scale: 1,
          duration: (options.duration || 1.3) * 1.25,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: target,
            start: options.start || 'top 85%',
            once: options.once !== false,
          },
        }
      );
    }
  });
};

// Text lines mask reveal
export const initTextReveal = (
  container: HTMLElement | string,
  options: {
    stagger?: number;
    duration?: number;
    delay?: number;
    start?: string;
  } = {}
) => {
  if (prefersReducedMotion()) return;

  const targets = typeof container === 'string'
    ? document.querySelectorAll(container)
    : [container];

  targets.forEach((target) => {
    const lines = target.querySelectorAll('.text-reveal-line');
    if (lines.length > 0) {
      gsap.fromTo(
        lines,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: options.duration || 1.15,
          stagger: options.stagger || 0.1,
          ease: 'power3.out',
          delay: options.delay || 0,
          scrollTrigger: {
            trigger: target,
            start: options.start || 'top 88%',
            once: true,
          },
        }
      );
    }
  });
};

// Parallax depth utility
export const initParallax = (
  element: HTMLElement | string,
  speed: number = 0.18
) => {
  if (prefersReducedMotion()) return;

  const targets = typeof element === 'string'
    ? document.querySelectorAll(element)
    : [element];

  targets.forEach((target) => {
    gsap.to(target, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
};
