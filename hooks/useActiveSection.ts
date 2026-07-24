"use client";

import { useEffect, useState } from "react";

/**
 * Scrollspy: reports which nav-linked section (by "#id" href) currently
 * sits in the vertical band just below the header. `items` should be a
 * stable, module-level array (e.g. `siteConfig.nav`) — a fresh array
 * literal on every render would tear down and rebuild the observer
 * constantly.
 */
export function useActiveSection(items: readonly { href: string }[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = items
      .map((item) => {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        return el ? { href: item.href, el } : null;
      })
      .filter((t): t is { href: string; el: HTMLElement } => t !== null);

    if (targets.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const match = targets.find((t) => t.el === entry.target);
          if (match) setActive(match.href);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t.el));
    return () => observer.disconnect();
  }, [items]);

  return active;
}
