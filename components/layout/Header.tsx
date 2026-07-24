"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { siteConfig, contactHref } from "@/config/site";

const WHITE: [number, number, number] = [255, 255, 255];
const NAVY: [number, number, number] = [13, 27, 42];
const MUTED: [number, number, number] = [100, 116, 139];

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
  const strongColor = mix(WHITE, NAVY, t);
  const mutedColor = mix(WHITE, MUTED, t);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="absolute inset-0 border-b border-brand-gray-light bg-white/80 shadow-[0_1px_0_rgba(13,27,42,0.04),0_16px_32px_-20px_rgba(13,27,42,0.25)] backdrop-blur-xl transition-opacity duration-300 ease-out"
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

        <nav className="hidden items-center gap-9 md:flex">
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
                style={{ color: isActive ? "#2563EB" : mutedColor }}
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-300 md:hidden"
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
        <div className="relative border-t border-brand-gray-light bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-2 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "text-brand-blue"
                      : "text-brand-navy hover:bg-brand-gray-50",
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
        </div>
      )}
    </header>
  );
}
