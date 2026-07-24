import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, contactHref } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      <Container className="flex flex-col gap-12 py-16 sm:flex-row sm:items-start sm:justify-between sm:py-20">
        <div className="text-surface">
          <Logo
            tone="dark"
            showTagline
            iconClassName="h-10"
            wordClassName="text-xl"
          />
        </div>

        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <a
            href={contactHref}
            className="text-surface/75 transition-colors duration-300 hover:text-surface"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-surface/75 transition-colors duration-300 hover:text-surface"
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
