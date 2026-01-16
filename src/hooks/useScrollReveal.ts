'use client';

import { useEffect, useRef, RefObject } from 'react';

type Direction = 'left' | 'right' | 'bottom';

interface UseScrollRevealOptions {
  direction?: Direction;
  delay?: number;
  threshold?: number;
}

export function useScrollReveal<T extends HTMLElement>({
  direction = 'bottom',
  delay = 0,
  threshold = 0.1
}: UseScrollRevealOptions = {}): [RefObject<T | null>, string] {
  const ref = useRef<T>(null);

  const directionClass =
    direction === 'left' ? 'slide-from-left' :
    direction === 'right' ? 'slide-from-right' :
    'slide-from-bottom';

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('slide-visible');
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold]);

  return [ref, directionClass];
}
