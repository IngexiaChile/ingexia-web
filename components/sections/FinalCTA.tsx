import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, contactHref } from "@/config/site";

// A formal closing statement with direct contact details, not a big
// centered "start now" button — the tone matches asking a decision-maker
// for a meeting, not selling a subscription.
export function FinalCTA() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-surface py-24 sm:py-28">
      <Container>
        <div className="border-t border-ink/15 pt-14 sm:pt-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
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
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Reveal delay={140}>
                <Button href={contactHref} size="lg">
                  Solicitar una conversación
                </Button>
              </Reveal>
            </div>
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col gap-3 border-t border-ink/15 pt-6 font-mono text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
              <a href={contactHref} className="transition-colors duration-200 hover:text-brass-ink">
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-brass-ink"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
