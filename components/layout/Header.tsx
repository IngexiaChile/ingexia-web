"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { siteConfig, contactHref } from "@/config/site";

const SURFACE: [number, number, number] = [237, 239, 234];
const INK: [number, number, number] = [18, 23, 27];
const GRAPHITE: [number, number, number] = [87, 98, 107];
const BLUE = "#2554D6";

function mix(from: [number, number, number], to: [number, number, number], t: number) {
  const [r, g, b] = from.map((c, i) => Math.round(c + (to[i] - c) * t));
  return `rgb(${r}, ${g}, ${b})`;
}

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeHref = useActiveSection(siteConfig.nav);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollProgress(Math.min(y / 140, 1));
      setScrolled(y > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const t = mobileOpen ? 1 : scrollProgress;
  const strongColor = mix(SURFACE, INK, t);
  const mutedColor = mix(SURFACE, GRAPHITE, t);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="absolute inset-0 border-b border-ink/10 bg-surface/85 shadow-[0_1px_0_rgba(18,23,27,0.05)] backdrop-blur-xl transition-opacity duration-300 ease-out"
        style={{ opacity: t }}
        aria-hidden="true"
      />

      <Container
        className={cn(
          "relative flex items-center justify-between transition-[height] duration-500 ease-out",
          scrolled ? "h-16 lg:h-20" : "h-16 lg:h-24",
        )}
      >
        <a href="#top" className="shrink-0" style={{ color: strongColor }}>
          <Logo iconClassName="h-7 lg:h-8" wordClassName="text-lg" />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-9 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative inline-block py-1 text-sm font-medium transition-opacity duration-300",
                  isActive ? "opacity-100" : "opacity-75 hover:opacity-100",
                )}
                style={{ color: isActive ? BLUE : mutedColor }}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-300 ease-out",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={contactHref}>Conversemos</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm transition-colors duration-300 md:hidden"
          style={{ color: strongColor }}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </Container>

      {mobileOpen && (
        <nav
          aria-label="Navegación móvil"
          className="relative border-t border-ink/10 bg-surface md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-sm px-2 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "text-blue-dark"
                      : "text-ink hover:bg-surface-2",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <Button
              href={contactHref}
              className="mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Conversemos
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
