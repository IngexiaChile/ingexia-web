import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, contactHref } from "@/config/site";

// A formal closing statement with a real form, not a big centered
// "start now" button — the tone matches asking a decision-maker for a
// meeting, not selling a subscription. The direct-contact card sits beside
// the form (not pinned to the viewport's bottom-right corner) so it never
// visually competes with the floating WhatsApp button.
export function FinalCTA() {
  return (
    <section id="contacto" className="relative scroll-mt-24 bg-surface py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink to-transparent sm:h-24"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="border-t border-ink/15 pt-14 sm:pt-16">
          <Reveal>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Hablemos de su próximo proyecto de transformación.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-graphite">
              Escríbanos directamente y conversemos sobre los desafíos
              tecnológicos de su organización.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <Reveal delay={140} className="lg:col-span-7">
              <ContactForm />
            </Reveal>

            <Reveal delay={200} className="lg:col-span-5">
              <div className="border border-ink/12 bg-surface-2 p-6 sm:p-7">
                <p className="text-sm font-medium text-ink">
                  ¿Prefiere escribir directamente?
                </p>
                <div className="mt-4 flex flex-col gap-3 font-mono text-sm text-graphite">
                  <a
                    href={contactHref}
                    className="transition-colors duration-200 hover:text-blue-dark"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-blue-dark"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
