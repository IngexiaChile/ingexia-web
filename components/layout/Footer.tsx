import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, contactHref } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy">
      <Container className="flex flex-col gap-12 py-16 sm:flex-row sm:items-start sm:justify-between sm:py-20">
        <div className="text-white">
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
            className="text-white/80 transition-colors duration-300 hover:text-white"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-white/80 transition-colors duration-300 hover:text-white"
          >
            LinkedIn
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
