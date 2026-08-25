import { useEffect, useRef } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealOptions {
  direction?: RevealDirection;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const elementRef = useRef<T | null>(null);
  const { direction = "up", threshold = 0.16, rootMargin = "0px 0px -8%", once = true } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.classList.add("is-visible");
      if (once) observer.unobserve(element);
    }, { threshold, rootMargin });

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref: elementRef, className: `motion-reveal motion-reveal--${direction}` };
}

export const motion = {
  reveal: "motion-reveal",
  fade: "motion-fade",
  stagger: "motion-stagger",
  imageReveal: "motion-image-reveal",
  brutalistHover: "motion-hover-brutalist",
  press: "motion-press",
  rotate: "motion-rotate",
} as const;
