"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has entered the viewport once, using
 * IntersectionObserver. Used to drive the subtle scroll-reveal effect
 * without pulling in an animation library.
 *
 * Initial state is always `false` on both server and client — anything
 * conditioned on `typeof IntersectionObserver` would diverge between the
 * two (it's undefined during SSR), causing a hydration mismatch.
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let observer: IntersectionObserver | undefined;

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer?.disconnect();
          }
        },
        { threshold, rootMargin: "0px 0px -80px 0px" },
      );
      observer.observe(node);
    }

    // Safety net: never let content stay invisible if the observer doesn't
    // exist or doesn't fire (e.g. a stalled rendering pipeline or an
    // edge-case browser environment).
    const fallback = setTimeout(() => setIsInView(true), 1500);

    return () => {
      observer?.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, isInView };
}
