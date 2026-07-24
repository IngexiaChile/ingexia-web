import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, contactHref } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-surface to-transparent"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col gap-12 py-16 sm:py-20 lg:flex-row lg:items-start lg:justify-between">
        <div className="text-surface">
          <Logo
            tone="dark"
            showTagline
            iconClassName="h-10"
            wordClassName="text-xl"
          />
        </div>

        <nav aria-label="Navegación del pie de página">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-surface/75 transition-colors duration-300 hover:text-blue-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 text-sm lg:items-end">
          <a
            href={contactHref}
            className="text-surface/75 transition-colors duration-300 hover:text-blue-light"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-surface/75 transition-colors duration-300 hover:text-blue-light"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>

      <div className="border-t border-surface/10">
        <Container className="py-6">
          <p className="text-xs text-surface/50">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
