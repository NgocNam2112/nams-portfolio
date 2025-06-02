'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = false,
  } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Simplified logic: always update visibility based on intersection
        setIsVisible(entry.isIntersecting);

        // If triggerOnce is true and element becomes visible, disconnect
        if (triggerOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, isMounted]);

  return { ref, isVisible: isMounted && isVisible };
}

// Enhanced hook for one-time animations (like the original behavior)
export function useOnceAnimation(
  options: Omit<UseScrollAnimationOptions, 'triggerOnce'> = {}
) {
  return useScrollAnimation({
    ...options,
    triggerOnce: true,
  });
}

// Enhanced hook for scroll-based animations that retrigger
export function useScrollReveal(
  options: Omit<UseScrollAnimationOptions, 'triggerOnce'> = {}
) {
  return useScrollAnimation({
    ...options,
    triggerOnce: false,
  });
}

export function useStaggeredAnimation(
  delay: number = 0,
  triggerOnScroll: boolean = false
) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (!triggerOnScroll) {
            observer.disconnect();
          }
        } else if (triggerOnScroll) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, triggerOnScroll, isMounted]);

  return { ref, isVisible: isMounted && isVisible };
}

// Hook for creating multiple staggered animations in order
export function useOrderedAnimations(count: number, baseDelay: number = 100) {
  const [parentVisible, setParentVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setParentVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => observer.disconnect();
  }, [isMounted]);

  // Generate staggered visibility states
  const animations = Array.from({ length: count }, (_, index) => ({
    isVisible: isMounted && parentVisible,
    delay: index * baseDelay,
    staggerIndex: index + 1,
  }));

  return { parentRef, parentVisible: isMounted && parentVisible, animations };
}
